import { Component } from '@angular/core';

export interface TaskStatus {
  label: string;
  type: 'success' | 'muted' | 'danger';
}

export interface TaskCard {
  title: string;
  subtitle: string;
  statuses: TaskStatus[];
  progress: number;
  assigneeInitials: string;
  assigneeName: string;
  plannedStart: string;
  plannedEnd: string;
  actualStart: string;
  actualEnd: string;
}

export interface ActivityItem {
  type: 'email' | 'meeting';
  letter: string;
  description: string;
  date: string;
}

export interface SimpleKpiCard {
  icon: string;
  iconColor?: string;
  title: string;
  value: string;
  delta: string;
  deltaPositive: boolean;
}

@Component({
  standalone: false,
  selector: 'pmgt-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrls: ['./layout-1.component.scss'],
})
export class Layout1Component {
  kpiCards: SimpleKpiCard[] = [
    {
      icon: 'chart-line',
      title: 'Potential Revenue',
      value: '₹2.5M',
      delta: '+12% from last week',
      deltaPositive: true,
    },
    {
      icon: 'users',
      iconColor: 'var(--kpi-icon-leads, var(--vw-color-orange-600))',
      title: 'Open Leads',
      value: '38',
      delta: '+18% from last week',
      deltaPositive: true,
    },
    {
      icon: 'briefcase',
      title: 'Active Deals',
      value: '24',
      delta: '−3 from last week',
      deltaPositive: false,
    },
    {
      icon: 'currency-inr',
      title: 'Pipeline Value',
      value: '₹18.2M',
      delta: '+8% from last week',
      deltaPositive: true,
    },
  ];

  taskCards: TaskCard[] = [
    {
      title: 'EnodeB candidate selection',
      subtitle: 'ECS-RadioBs-00000044',
      statuses: [{ label: 'Completed', type: 'success' }],
      progress: 100,
      assigneeInitials: 'NG',
      assigneeName: 'National Grid',
      plannedStart: '27-Sep-2025',
      plannedEnd: '27-Oct-2025',
      actualStart: '28-Sep-2025',
      actualEnd: '29-Oct-2025',
    },
    {
      title: 'WIFI commissioning and verification',
      subtitle: 'WIFI2-Wifi-00001065',
      statuses: [{ label: 'Completed', type: 'success' }],
      progress: 100,
      assigneeInitials: 'LC',
      assigneeName: 'Legal consultant',
      plannedStart: '16-Jan-2026',
      plannedEnd: '27-Jan-2026',
      actualStart: '16-Jan-2026',
      actualEnd: '16-Jan-2026',
    },
    {
      title: 'WIFI construction and installation',
      subtitle: 'WIFI1-Wifi-00001056',
      statuses: [{ label: 'Completed', type: 'success' }],
      progress: 100,
      assigneeInitials: 'LC',
      assigneeName: 'Legal consultant',
      plannedStart: '16-Jan-2026',
      plannedEnd: '05-Feb-2026',
      actualStart: '16-Jan-2026',
      actualEnd: '16-Jan-2026',
    },
    {
      title: 'Indoor IP Transport',
      subtitle: 'VW-200358',
      statuses: [{ label: 'Completed', type: 'success' }],
      progress: 100,
      assigneeInitials: 'LC',
      assigneeName: 'Legal consultant',
      plannedStart: '16-Jan-2026',
      plannedEnd: '16-Jan-2026',
      actualStart: '15-Jan-2026',
      actualEnd: '15-Jan-2026',
    },
    {
      title: 'QA Test template',
      subtitle: 'VW-200450',
      statuses: [
        { label: 'Yet to start', type: 'muted' },
        { label: 'Delayed', type: 'danger' },
      ],
      progress: 0,
      assigneeInitials: 'NL',
      assigneeName: 'Nexon technology pvt limited',
      plannedStart: '28-Jan-2026',
      plannedEnd: '28-Jan-2026',
      actualStart: '—',
      actualEnd: '—',
    },
    {
      title: 'EnodeB candidate selection',
      subtitle: 'ECS-RadioBs-00001068',
      statuses: [
        { label: 'Yet to start', type: 'muted' },
        { label: 'On time', type: 'success' },
      ],
      progress: 0,
      assigneeInitials: 'UD',
      assigneeName: 'Utkarsh Dubey',
      plannedStart: '29-Jan-2026',
      plannedEnd: '03-Mar-2026',
      actualStart: '—',
      actualEnd: '—',
    },
  ];

  activities: ActivityItem[] = [
    {
      type: 'email',
      letter: 'E',
      description: 'Email - Avalon Technologies requires 300 Mbps leased lines',
      date: 'Jan 12, 2026',
    },
    {
      type: 'meeting',
      letter: 'M',
      description: 'Customer meeting - Avalon Technologies requires 300 Mbps leased lines',
      date: 'Jan 10, 2026',
    },
    {
      type: 'meeting',
      letter: 'M',
      description: 'Internal meeting - Avalon Technologies requires 300 Mbps leased lines',
      date: 'Jan 10, 2026',
    },
    {
      type: 'email',
      letter: 'E',
      description: 'Email - Follow-up on bandwidth requirements and SLAs',
      date: 'Jan 8, 2026',
    },
  ];
}
