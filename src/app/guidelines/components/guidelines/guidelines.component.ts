import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavItem {
  title: string;
  route?: string;
  hidden?: boolean;
  children?: NavItem[];
  expanded?: boolean;
  active?: boolean;
  icon?: string;
}

@Component({
  standalone: false,
  selector: 'pmgt-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss'],
})
export class GuidelinesComponent implements OnInit {
  isHidden=true;
  isNavCollapsed = true;
  isNavHovered = false;
  navItems: NavItem[] = [
    {
      title: 'Overview',
      route: '/guidelines/overview',
      icon: 'house',
    },
    {
      title: 'Color Palette',
      route: '/guidelines/color-palette',
      icon: 'palette',
    },
    {
      title: 'Typography',
      route: '/guidelines/typography',
      icon: 'text-aa',
    },
    {
      title: 'vw-cards',
      route: '/guidelines/vw-cards',
      icon: 'credit-card',
    },
    {
      title: 'vw-utility',
      route: '/guidelines/vw-utility',
      icon: 'stack',
    },
    {
      title: 'Fonts & Fields',
      route: '/guidelines/fonts-fields',
      icon: 'textbox',
    },
    {
      title: 'Components',
      expanded: false,
      icon: 'squares-four',
      children: [
            {
              title: 'Form Controls',
              expanded: false,
              icon: 'list-checks',
              children: [
                { title: 'Button', route: '/guidelines/button', icon: 'hand-pointing' },
                { title: 'Checkbox', route: '/guidelines/checkbox', icon: 'check-square' },
                { title: 'Color Picker', route: '/guidelines/color-picker', hidden: this.isHidden, icon: 'eyedropper' },
                { title: 'Date Picker', route: '/guidelines/date-picker', icon: 'calendar-blank' },
                { title: 'Input Fields', route: '/guidelines/input-fields', icon: 'textbox' },
                { title: 'Input with Info', route: '/guidelines/input-with-info', hidden: this.isHidden, icon: 'info' },
                { title: 'Inline Edit', route: '/guidelines/inline-edit', hidden: this.isHidden, icon: 'pencil-simple' },
                { title: 'Radio Button', route: '/guidelines/radio-button', icon: 'radio-button' },
                { title: 'Rating', route: '/guidelines/rating', hidden: this.isHidden, icon: 'star' },
                { title: 'Selectbox', route: '/guidelines/selectbox', icon: 'caret-circle-down' },
                { title: 'Slider', route: '/guidelines/slider', hidden: this.isHidden, icon: 'sliders-horizontal' },
                { title: 'Toggle', route: '/guidelines/toggle', icon: 'toggle-left' },
                { title: 'Auto Complete', route: '/guidelines/auto-complete', icon: 'list-magnifying-glass' },
                { title: 'Chip', route: '/guidelines/chip', icon: 'tag' },
                { title: 'Currency Input', route: '/guidelines/currency-input', hidden: this.isHidden, icon: 'currency-dollar' },
                { title: 'Icon Select Box', route: '/guidelines/icon-select-box', hidden: this.isHidden, icon: 'squares-four' },
                { title: 'Affix Input', route: '/guidelines/affix-input', hidden: this.isHidden, icon: 'textbox' },
                { title: 'Dynamic Select', route: '/guidelines/dynamic-select', hidden: this.isHidden, icon: 'list' },
              ],
            },
            {
              title: 'Data Display',
              expanded: false,
              icon: 'chart-bar',
              children: [
                { title: 'Card', route: '/guidelines/card', icon: 'credit-card' },
                { title: 'Chart', route: '/guidelines/chart', icon: 'chart-line' },
                { title: 'vw-charts', route: '/guidelines/chart', icon: 'chart-line' },
                { title: 'Grid', route: '/guidelines/grid', icon: 'grid-four' },
                { title: 'History', route: '/guidelines/history', hidden: this.isHidden, icon: 'clock-counter-clockwise' },
                { title: 'List', route: '/guidelines/list', hidden: this.isHidden, icon: 'list-bullets' },
                { title: 'Tree', route: '/guidelines/tree', hidden: this.isHidden, icon: 'tree-structure' },
                { title: 'Expansion Panel', route: '/guidelines/expansion-panel', icon: 'caret-circle-down' },
                { title: 'Timeline', route: '/guidelines/timeline', hidden: this.isHidden, icon: 'clock-countdown' },
                { title: 'Calendar', route: '/guidelines/calendar', icon: 'calendar-blank' },
                { title: 'Carousel Slider', route: '/guidelines/carousel-slider', hidden: this.isHidden, icon: 'images' },
              ],
            },
            {
              title: 'Navigation',
              expanded: false,
              icon: 'compass',
              children: [
                { title: 'Breadcrumb', route: '/guidelines/breadcrumb', hidden: this.isHidden, icon: 'caret-right' },
                { title: 'Menu', route: '/guidelines/menu', icon: 'list' },
                { title: 'Stepper', route: '/guidelines/stepper', icon: 'steps' },
                { title: 'Tab', route: '/guidelines/tab', icon: 'squares-four' },
                { title: 'View Switcher', route: '/guidelines/view-switcher', hidden: this.isHidden, icon: 'squares-four' },
              ],
            },
            {
              title: 'Overlay',
              expanded: false,
              icon: 'stack',
              children: [
                { title: 'Dialog', route: '/guidelines/dialog', hidden: this.isHidden, icon: 'chat-circle-dots' },
                { title: 'Overlay Loader', route: '/guidelines/overlay-loader', hidden: this.isHidden, icon: 'circle-dashed' },
                { title: 'Progress Bar', route: '/guidelines/progress-bar', icon: 'chart-bar-horizontal' },
                { title: 'Snackbar', route: '/guidelines/snackbar', icon: 'bell' },
                { title: 'Tooltip', route: '/guidelines/tooltip', icon: 'info' },
                { title: 'Error Pages', route: '/guidelines/error-pages', hidden: this.isHidden, icon: 'warning' },
              ],
            },
            {
              title: 'File',
              expanded: false,
              icon: 'file',
              children: [
                { title: 'Document Preview', route: '/guidelines/document-preview', hidden: this.isHidden, icon: 'file-text' },
                { title: 'Uploader', route: '/guidelines/uploader', icon: 'upload-simple' },
                { title: 'Download Progress', route: '/guidelines/download-progress', icon: 'download-simple' },
                { title: 'Image Viewer', route: '/guidelines/image-viewer', hidden: this.isHidden, icon: 'image' },
              ],
            },
            {
              title: 'Editor',
              expanded: false,
              icon: 'code',
              children: [
                { title: 'CodeMirror', route: '/guidelines/codemirror', hidden: this.isHidden, icon: 'code' },
                { title: 'Quill Editor', route: '/guidelines/quill-editor', icon: 'file-jsx' },
                { title: 'Text Editor', route: '/guidelines/text-editor', hidden: this.isHidden, icon: 'notepad' },
                { title: 'Angular Calendar', route: '/guidelines/angular-calendar', hidden: this.isHidden, icon: 'calendar' },
                { title: 'Annotation Tool', route: '/guidelines/annotation-tool', hidden: this.isHidden, icon: 'pencil-circle' },
              ],
            },
            {
              title: 'Search & Filter',
              expanded: false,
              icon: 'magnifying-glass',
              children: [
                { title: 'Advance Search', route: '/guidelines/advance-search', hidden: this.isHidden, icon: 'magnifying-glass' },
                { title: 'Query Builder', route: '/guidelines/query-builder', hidden: this.isHidden, icon: 'circle-half' },
                { title: 'Searchbox', route: '/guidelines/searchbox', icon: 'magnifying-glass' },
              ],
            },
            {
              title: 'Layout',
              expanded: false,
              icon: 'layout',
              hidden: this.isHidden,
              children: [
                { title: 'Drag Box', route: '/guidelines/drag-box', hidden: this.isHidden, icon: 'arrow-square-out' },
                { title: 'Dummy', route: '/guidelines/dummy', hidden: this.isHidden, icon: 'placeholder' },
                { title: 'HTML Container', route: '/guidelines/html-container', hidden: this.isHidden, icon: 'code' },
                { title: 'Page Header', route: '/guidelines/page-header', hidden: this.isHidden, icon: 'layout' },
                { title: 'Global Setting', route: '/guidelines/global-setting', hidden: this.isHidden, icon: 'gear' },
                { title: 'Iframe', route: '/guidelines/iframe', hidden: this.isHidden, icon: 'browser' },
              ],
            },
      ],
    },
    {
      title: 'Labs',
      icon: 'flask',
      hidden: true,
      children: [
        { title: 'Generic Card', route: '/guidelines/labs/generic-card', icon: 'credit-card' },
        { title: 'vw-cards', route: '/guidelines/labs/vw-cards', icon: 'squares-four' },
        { title: 'Panes & Layouts', route: '/guidelines/labs/panes-layouts', icon: 'sidebar-simple' },
        { title: 'Panel', route: '/guidelines/labs/panel', icon: 'layout' },
        {
          title: 'Layouts',
          icon: 'layout',
          expanded: true,
          children: [
            { title: 'Layout-1', route: '/guidelines/labs/layout-1', icon: 'layout' },
          ],
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set active state based on current route
    this.updateActiveState();
    
    // Listen to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveState();
      });
  }

  updateActiveState(): void {
    const currentUrl = this.router.url;
    this.setActiveState(this.navItems, currentUrl, undefined);
  }

  setActiveState(items: NavItem[], currentUrl: string, parentItems?: NavItem[]): void {
    items.forEach((item) => {
      item.active = item.route === currentUrl;
      if (item.children) {
        this.setActiveState(item.children, currentUrl, items);
        // Expand parent if any child is active (but respect accordion)
        if (item.children.some((child) => child.active || this.hasActiveChild(child))) {
          // Accordion: close siblings before expanding
          if (parentItems) {
            parentItems.forEach(sibling => {
              if (sibling !== item && sibling.expanded) {
                sibling.expanded = false;
                this.collapseAllChildren(sibling);
              }
            });
          }
          item.expanded = true;
        }
      }
    });
  }

  hasActiveChild(item: NavItem): boolean {
    if (!item.children) return false;
    return item.children.some((child) => child.active || this.hasActiveChild(child));
  }

  toggleExpand(item: NavItem, parentItems?: NavItem[]): void {
    if (item.children) {
      const wasExpanded = item.expanded;
      
      // Accordion behavior: close all siblings at the same level
      if (parentItems) {
        parentItems.forEach(sibling => {
          if (sibling !== item && sibling.expanded) {
            sibling.expanded = false;
            // Also close all children of closed siblings
            this.collapseAllChildren(sibling);
          }
        });
      }
      
      // Toggle the clicked item
      item.expanded = !wasExpanded;
      
      // Special case: When Labs opens, close all other root menus
      if (item.title === 'Labs' && item.expanded) {
        this.navItems.forEach(rootItem => {
          if (rootItem !== item && rootItem.expanded) {
            rootItem.expanded = false;
            this.collapseAllChildren(rootItem);
          }
        });
      }
      
      // Special case: When Components > Form Controls opens
      // Show all second-level items but keep them closed, keep Form Controls children open
      if (item.title === 'Form Controls' && item.expanded && parentItems) {
        // Find Components parent
        const componentsParent = parentItems.find(p => p.title === 'Components');
        if (componentsParent && componentsParent.children) {
          componentsParent.children.forEach(secondLevel => {
            if (secondLevel !== item && secondLevel.children) {
              // Show but keep closed
              secondLevel.expanded = false;
              this.collapseAllChildren(secondLevel);
            }
          });
        }
      }
    }
  }
  
  collapseAllChildren(item: NavItem): void {
    if (item.children) {
      item.children.forEach(child => {
        child.expanded = false;
        this.collapseAllChildren(child);
      });
    }
  }

  navigate(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  toggleNav(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  onNavMouseEnter(): void {
    if (this.isNavCollapsed) {
      this.isNavHovered = true;
    }
  }

  onNavMouseLeave(): void {
    if (this.isNavCollapsed) {
      this.isNavHovered = false;
    }
  }

  get shouldShowExpandedNav(): boolean {
    return !this.isNavCollapsed || this.isNavHovered;
  }
}
