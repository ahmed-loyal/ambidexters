// assets
import { DashboardOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  FundProjectionScreenOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'i ai',
      title: 'Insight Analytics',
      type: 'item',
      url: '/insight-analytics',
      icon: icons.FundProjectionScreenOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
