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
  isNavCollapsed = false;
  navItems: NavItem[] = [
    {
      title: 'Overview',
      route: '/guidelines/overview',
      icon: 'Home',
    },
    {
      title: 'Color Palette',
      route: '/guidelines/color-palette',
      icon: 'Palette',
    },
    {
      title: 'Typography',
      route: '/guidelines/typography',
      icon: 'Text',
    },
    {
      title: 'Components',
      expanded: false,
      icon: 'Grid',
      children: [
            {
              title: 'Form Controls',
              expanded: false,
              icon: 'Form',
              children: [
                { title: 'Button', route: '/guidelines/button' },
                { title: 'Checkbox', route: '/guidelines/checkbox' },
                { title: 'Color Picker', route: '/guidelines/color-picker',hidden: this.isHidden },
                { title: 'Date Picker', route: '/guidelines/date-picker' },
                { title: 'Input Fields', route: '/guidelines/input-fields' },
                { title: 'Input with Info', route: '/guidelines/input-with-info' ,hidden: this.isHidden},
                { title: 'Inline Edit', route: '/guidelines/inline-edit' ,hidden: this.isHidden},
                { title: 'Radio Button', route: '/guidelines/radio-button' },
                { title: 'Rating', route: '/guidelines/rating' ,hidden: this.isHidden},
                { title: 'Selectbox', route: '/guidelines/selectbox' },
                { title: 'Slider', route: '/guidelines/slider' ,hidden: this.isHidden},
                { title: 'Toggle', route: '/guidelines/toggle' },
                { title: 'Auto Complete', route: '/guidelines/auto-complete' },
                { title: 'Chip', route: '/guidelines/chip' },
                { title: 'Currency Input', route: '/guidelines/currency-input' ,hidden: this.isHidden},
                { title: 'Icon Select Box', route: '/guidelines/icon-select-box' ,hidden: this.isHidden},
                { title: 'Affix Input', route: '/guidelines/affix-input',hidden: this.isHidden },
                { title: 'Dynamic Select', route: '/guidelines/dynamic-select' ,hidden: this.isHidden},
              ],
            },
            {
              title: 'Data Display',
              expanded: false,
              icon: 'Graph',
              children: [
                { title: 'Card', route: '/guidelines/card',hidden: this.isHidden},
                { title: 'Chart', route: '/guidelines/chart' },
                { title: 'Grid', route: '/guidelines/grid'},
                { title: 'History', route: '/guidelines/history',hidden: this.isHidden},
                { title: 'List', route: '/guidelines/list',hidden: this.isHidden},
                { title: 'Tree', route: '/guidelines/tree' ,hidden: this.isHidden},
                { title: 'Expansion Panel', route: '/guidelines/expansion-panel' },
                { title: 'Timeline', route: '/guidelines/timeline' ,hidden: this.isHidden},
                { title: 'Calendar', route: '/guidelines/calendar' },
                { title: 'Carousel Slider', route: '/guidelines/carousel-slider',hidden: this.isHidden},
              ],
            },
            {
              title: 'Navigation',
              expanded: false,
              icon: 'Menu',
              children: [
                { title: 'Breadcrumb', route: '/guidelines/breadcrumb',hidden: this.isHidden},
                { title: 'Menu', route: '/guidelines/menu' },
                { title: 'Stepper', route: '/guidelines/stepper' },
                { title: 'Tab', route: '/guidelines/tab' },
                { title: 'View Switcher', route: '/guidelines/view-switcher',hidden: this.isHidden},
              ],
            },
            {
              title: 'Overlay',
              expanded: false,
              icon: 'Layer',
              children: [
                { title: 'Dialog', route: '/guidelines/dialog' ,hidden: this.isHidden},
                { title: 'Overlay Loader', route: '/guidelines/overlay-loader' ,hidden: this.isHidden},
                { title: 'Progress Bar', route: '/guidelines/progress-bar' },
                { title: 'Snackbar', route: '/guidelines/snackbar' },
                { title: 'Tooltip', route: '/guidelines/tooltip'},
                { title: 'Error Pages', route: '/guidelines/error-pages' ,hidden: this.isHidden},
              ],
            },
            {
              title: 'File',
              expanded: false,
              icon: 'File',
              children: [
                { title: 'Document Preview', route: '/guidelines/document-preview' ,hidden: this.isHidden},
                { title: 'Uploader', route: '/guidelines/uploader' },
                { title: 'Download Progress', route: '/guidelines/download-progress' },
                { title: 'Image Viewer', route: '/guidelines/image-viewer' ,hidden: this.isHidden},
              ],
            },
            {
              title: 'Editor',
              expanded: false,
              icon: 'Edit',
              children: [
                { title: 'CodeMirror', route: '/guidelines/codemirror',hidden: this.isHidden},
                { title: 'Quill Editor', route: '/guidelines/quill-editor' },
                { title: 'Text Editor', route: '/guidelines/text-editor',hidden: this.isHidden},
                { title: 'Angular Calendar', route: '/guidelines/angular-calendar' ,hidden: this.isHidden},
                { title: 'Annotation Tool', route: '/guidelines/annotation-tool',hidden: this.isHidden},
              ],
            },
            {
              title: 'Search & Filter',
              expanded: false,
              icon: 'Search',
              children: [
                { title: 'Advance Search', route: '/guidelines/advance-search',hidden: this.isHidden},
                { title: 'Query Builder', route: '/guidelines/query-builder',hidden: this.isHidden},
                { title: 'Searchbox', route: '/guidelines/searchbox' },
              ],
            },
            {
              title: 'Layout',
              expanded: false,
              icon: 'Layout',
              hidden: this.isHidden,
              children: [
                { title: 'Drag Box', route: '/guidelines/drag-box',hidden: this.isHidden},
                { title: 'Dummy', route: '/guidelines/dummy',hidden: this.isHidden},
                { title: 'HTML Container', route: '/guidelines/html-container',hidden: this.isHidden},
                { title: 'Page Header', route: '/guidelines/page-header',hidden: this.isHidden},
                { title: 'Global Setting', route: '/guidelines/global-setting',hidden: this.isHidden},
                { title: 'Iframe', route: '/guidelines/iframe',hidden: this.isHidden},
              ],
            },
      ],
    },
    {
      title: 'Labs',
      route: '/guidelines/labs',
      icon: 'Lab',
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
    this.setActiveState(this.navItems, currentUrl);
  }

  setActiveState(items: NavItem[], currentUrl: string): void {
    items.forEach((item) => {
      item.active = item.route === currentUrl;
      if (item.children) {
        this.setActiveState(item.children, currentUrl);
        // Expand parent if any child is active
        if (item.children.some((child) => child.active || this.hasActiveChild(child))) {
          item.expanded = true;
        }
      }
    });
  }

  hasActiveChild(item: NavItem): boolean {
    if (!item.children) return false;
    return item.children.some((child) => child.active || this.hasActiveChild(child));
  }

  toggleExpand(item: NavItem): void {
    if (item.children) {
      item.expanded = !item.expanded;
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
}
