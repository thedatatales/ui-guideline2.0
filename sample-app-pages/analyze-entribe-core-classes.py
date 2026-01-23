"""
Comprehensive analysis of @entribe/core classes and DOM usage
Identifies duplication, unused classes, and optimization opportunities
"""

import re
import json
from collections import Counter, defaultdict
from pathlib import Path

def extract_classes_from_dom(dom_file_path):
    """Extract all classes from DOM dump"""
    with open(dom_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract class attributes
    class_pattern = r'class="([^"]*)"'
    classes = re.findall(class_pattern, content)
    
    # Extract inline styles
    style_pattern = r'style="([^"]*)"'
    styles = re.findall(style_pattern, content)
    
    # Extract embedded styles
    style_block_pattern = r'<style[^>]*>(.*?)</style>'
    style_blocks = re.findall(style_block_pattern, content, re.DOTALL)
    
    # Split classes
    all_classes = []
    for class_str in classes:
        all_classes.extend([c.strip() for c in class_str.split() if c.strip()])
    
    class_counts = Counter(all_classes)
    
    return {
        'classes': class_counts,
        'styles': styles,
        'style_blocks': style_blocks
    }

def categorize_classes(class_counts):
    """Categorize classes by type"""
    categories = {
        'entribe': [],      # bntv-*
        'angular': [],      # ng-*, _ng*
        'material': [],     # mat-*
        'highcharts': [],   # highcharts-*
        'cdk': [],          # cdk-*
        'custom': [],       # Application-specific
        'utility': [],      # Common utility classes
        'scoped': []        # Angular scoped styles
    }
    
    for cls in class_counts.keys():
        if cls.startswith('bntv-'):
            categories['entribe'].append(cls)
        elif cls.startswith('ng-') or cls.startswith('_ng') or 'ng-tns-' in cls:
            categories['angular'].append(cls)
        elif cls.startswith('mat-'):
            categories['material'].append(cls)
        elif cls.startswith('highcharts-'):
            categories['highcharts'].append(cls)
        elif cls.startswith('cdk-'):
            categories['cdk'].append(cls)
        elif cls.startswith('_ngcontent-'):
            categories['scoped'].append(cls)
        elif cls in ['fxLayout', 'fxFlex', 'fxLayoutAlign', 'fxLayoutGap']:
            categories['utility'].append(cls)
        else:
            categories['custom'].append(cls)
    
    return categories

def analyze_inline_styles(styles):
    """Analyze inline styles for patterns"""
    patterns = {
        'flex_layout': [],
        'color_values': [],
        'background_colors': [],
        'margins': [],
        'paddings': [],
        'width_height': [],
        'font_sizes': [],
        'border_radius': [],
        'box_shadow': []
    }
    
    for style in styles[:500]:  # Sample first 500
        if 'flex-direction' in style or 'display: flex' in style:
            patterns['flex_layout'].append(style)
        if 'color:' in style and ('rgb' in style or '#' in style or 'var(' in style):
            patterns['color_values'].append(style)
        if 'background-color:' in style or 'background:' in style:
            patterns['background_colors'].append(style)
        if 'margin' in style:
            patterns['margins'].append(style)
        if 'padding' in style:
            patterns['paddings'].append(style)
        if 'width:' in style or 'height:' in style:
            patterns['width_height'].append(style)
        if 'font-size' in style:
            patterns['font_sizes'].append(style)
        if 'border-radius' in style:
            patterns['border_radius'].append(style)
        if 'box-shadow' in style:
            patterns['box_shadow'].append(style)
    
    return {k: len(v) for k, v in patterns.items()}

def extract_css_classes_from_style_blocks(style_blocks):
    """Extract CSS class definitions from style blocks"""
    css_classes = {}
    
    for block in style_blocks:
        # Match class selectors
        class_pattern = r'\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}'
        matches = re.findall(class_pattern, block)
        for class_name, styles in matches:
            if class_name not in css_classes:
                css_classes[class_name] = []
            css_classes[class_name].append(styles.strip())
    
    return css_classes

def find_duplication_patterns(custom_classes, css_classes):
    """Find potential duplication in custom classes"""
    duplicates = {
        'similar_names': defaultdict(list),
        'similar_styles': defaultdict(list)
    }
    
    # Group by prefix/suffix
    prefixes = defaultdict(list)
    suffixes = defaultdict(list)
    
    for cls in custom_classes:
        parts = cls.split('-')
        if len(parts) > 1:
            prefixes[parts[0]].append(cls)
        if len(parts) > 1:
            suffixes[parts[-1]].append(cls)
    
    duplicates['similar_names'] = {
        k: v for k, v in prefixes.items() if len(v) > 3
    }
    
    return duplicates

def generate_optimization_recommendations(categories, inline_styles, css_classes):
    """Generate optimization recommendations"""
    recommendations = []
    
    # Check for inline styles that could be classes
    if inline_styles['flex_layout'] > 50:
        recommendations.append({
            'type': 'inline_to_class',
            'issue': f"{inline_styles['flex_layout']} inline flex layouts found",
            'recommendation': 'Consider using FlexLayout directives (fxLayout) or CSS utility classes',
            'priority': 'medium'
        })
    
    if inline_styles['color_values'] > 30:
        recommendations.append({
            'type': 'inline_to_class',
            'issue': f"{inline_styles['color_values']} inline color values found",
            'recommendation': 'Use CSS variables (--accentColor500, --textColor, etc.) instead of hardcoded colors',
            'priority': 'high'
        })
    
    if inline_styles['box_shadow'] > 20:
        recommendations.append({
            'type': 'inline_to_class',
            'issue': f"{inline_styles['box_shadow']} inline box-shadow values found",
            'recommendation': 'Consider using bntv-simple-card with [boxShadow]="true" or CSS utility class',
            'priority': 'medium'
        })
    
    # Check for custom classes that could use entribe components
    custom_count = len(categories['custom'])
    if custom_count > 100:
        recommendations.append({
            'type': 'class_consolidation',
            'issue': f"{custom_count} custom classes found",
            'recommendation': 'Review custom classes and map to entribe components where possible',
            'priority': 'high'
        })
    
    # Check for duplicate patterns
    if len(css_classes) > 50:
        recommendations.append({
            'type': 'duplication',
            'issue': f"{len(css_classes)} CSS class definitions found in style blocks",
            'recommendation': 'Review for duplicate styles that could be consolidated',
            'priority': 'medium'
        })
    
    return recommendations

def main():
    print("Analyzing @entribe/core class usage...")
    
    # Extract data from DOM
    dom_data = extract_classes_from_dom('om-db-dom')
    categories = categorize_classes(dom_data['classes'])
    inline_analysis = analyze_inline_styles(dom_data['styles'])
    css_classes = extract_css_classes_from_style_blocks(dom_data['style_blocks'])
    duplicates = find_duplication_patterns(categories['custom'], css_classes)
    recommendations = generate_optimization_recommendations(
        categories, inline_analysis, css_classes
    )
    
    # Generate report
    report = f"""# @entribe/Core Class Analysis Report

## Executive Summary

This report analyzes class usage in the Order Management dashboard DOM dump to identify:
- Class duplication and redundancy
- Opportunities to use @entribe/core components
- Inline styles that should be converted to classes
- CSS optimization opportunities

---

## Class Statistics

### Total Classes Found
- **Unique classes**: {len(dom_data['classes'])}
- **Total class instances**: {sum(dom_data['classes'].values())}
- **Entribe classes**: {len(categories['entribe'])}
- **Custom classes**: {len(categories['custom'])}
- **Angular classes**: {len(categories['angular'])}
- **Material classes**: {len(categories['material'])}

### Class Breakdown by Category

#### Entribe Component Classes ({len(categories['entribe'])})
"""
    
    for cls in sorted(categories['entribe'])[:30]:
        count = dom_data['classes'][cls]
        report += f"- `{cls}`: {count} occurrences\n"
    
    if len(categories['entribe']) > 30:
        report += f"\n*... and {len(categories['entribe']) - 30} more entribe classes*\n"
    
    report += f"""
#### Custom Application Classes ({len(categories['custom'])})
Top 50 most used custom classes:
"""
    
    custom_with_counts = [(cls, dom_data['classes'][cls]) for cls in categories['custom']]
    custom_with_counts.sort(key=lambda x: x[1], reverse=True)
    
    for cls, count in custom_with_counts[:50]:
        report += f"- `{cls}`: {count} occurrences\n"
    
    report += f"""
---

## Inline Style Analysis

### Patterns Found
- **Flex layouts**: {inline_analysis['flex_layout']} instances
- **Color values**: {inline_analysis['color_values']} instances  
- **Background colors**: {inline_analysis['background_colors']} instances
- **Margins**: {inline_analysis['margins']} instances
- **Paddings**: {inline_analysis['paddings']} instances
- **Width/Height**: {inline_analysis['width_height']} instances
- **Font sizes**: {inline_analysis['font_sizes']} instances
- **Border radius**: {inline_analysis['border_radius']} instances
- **Box shadows**: {inline_analysis['box_shadow']} instances

---

## CSS Class Definitions Found

Found **{len(css_classes)}** CSS class definitions in `<style>` blocks.

### Sample Custom CSS Classes
"""
    
    for i, (cls, styles) in enumerate(list(css_classes.items())[:20]):
        report += f"\n#### `.{cls}`\n```css\n.{cls} {{\n  {styles[0][:200]}...\n}}\n```\n"
    
    report += f"""
---

## Duplication Analysis

### Classes with Similar Prefixes (Potential Duplication)
"""
    
    for prefix, classes in list(duplicates['similar_names'].items())[:10]:
        report += f"\n#### `{prefix}-*` ({len(classes)} classes)\n"
        for cls in classes[:10]:
            report += f"- `{cls}`\n"
        if len(classes) > 10:
            report += f"- *... and {len(classes) - 10} more*\n"
    
    report += f"""
---

## Optimization Recommendations

"""
    
    for rec in recommendations:
        report += f"""
### {rec['type'].replace('_', ' ').title()} - Priority: {rec['priority'].upper()}

**Issue**: {rec['issue']}

**Recommendation**: {rec['recommendation']}

---
"""
    
    report += f"""
## Mapping Guide: Custom Classes → Entribe Components

### Card-like Classes
If you see classes like `*-card`, `*-panel`, consider using:
- `<bntv-simple-card>` with appropriate properties
- CSS variables: `--cardRadius`, `--cardPadding`

### Layout Classes  
If you see classes like `*-grid`, `*-container`, consider using:
- FlexLayout directives: `fxLayout`, `fxFlex`, `fxLayoutGap`
- CSS Grid with theme spacing

### Typography Classes
If you see custom font-size/color classes, consider using:
- Theme typography classes: `.h1`, `.h2`, `.body-1`, `.body-2`
- CSS variables: `--textColor`, `--grayColor600`, etc.

### Color Classes
Replace hardcoded colors with CSS variables:
- `--accentColor500` for primary actions
- `--textColor` for main text
- `--grayColor600` for secondary text
- `--borderColor` for borders
- `--bgColor10` for backgrounds

---

## Next Steps

1. **Review Custom Classes**: Identify which custom classes can be replaced with entribe components
2. **Convert Inline Styles**: Move frequently used inline styles to CSS classes or use CSS variables
3. **Consolidate Duplicates**: Merge similar classes that serve the same purpose
4. **Create Utility Classes**: Extract common patterns into reusable utility classes
5. **Document Mappings**: Create a class mapping document for your team

---

*Generated from analysis of om-db-dom file*
"""
    
    # Save report
    with open('ENTRIBE_CORE_ANALYSIS.md', 'w', encoding='utf-8') as f:
        f.write(report)
    
    # Save JSON data
    analysis_data = {
        'statistics': {
            'total_classes': len(dom_data['classes']),
            'total_instances': sum(dom_data['classes'].values()),
            'categories': {k: len(v) for k, v in categories.items()}
        },
        'categories': categories,
        'inline_styles': inline_analysis,
        'css_classes': {k: v[:3] for k, v in list(css_classes.items())[:50]},  # Sample
        'recommendations': recommendations,
        'top_classes': dict(dom_data['classes'].most_common(100))
    }
    
    with open('entribe_core_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(analysis_data, f, indent=2)
    
    print("\n✅ Analysis complete!")
    print(f"📄 Report saved to: ENTRIBE_CORE_ANALYSIS.md")
    print(f"📊 Data saved to: entribe_core_analysis.json")
    print(f"\n📈 Key Findings:")
    print(f"   - {len(categories['entribe'])} entribe classes found")
    print(f"   - {len(categories['custom'])} custom classes found")
    print(f"   - {len(recommendations)} optimization recommendations")

if __name__ == '__main__':
    main()
