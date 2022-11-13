import { MenuItem } from './menu.model';

export const MENU_ITEMS_ADMIN:MenuItem[]=[
    {
        label: 'ADMIN',
        isTitle: true,
      },
      {
        label: 'Home',
        icon: 'grid',
        link: '/dashboard',
      },
      {
        label: 'Invoices',
        icon: 'slack',
        link: '/invoice'
      },
      {
        label: 'Refund',
        icon: 'dollar-sign',
        link: '/refund'
      },
      // {
      //   label: 'Bank Management',
      //   icon: 'briefcase',
      //   link: '/bankmanagement'
      // },
      {
        label: 'Reports',
        icon: 'file-text',
        link: '/report'
      },
      {
        label: 'Customer',
        icon: 'user',
        link: '/customer'
      },
      {
        label: 'Devloper Setting',
        icon: 'package',
        link: '/devlopersetting'
      },
       {
    label: 'Invoice',
    icon: 'slack',
    subItems: [
      {
        label: 'Invoice A',
          link: '',
      },
      {
        label: 'Invoice B',
        link: ''
      },
      {
        label: 'Invoice C',
        link: ''
      },
    ]
  },
]


export const MENU_ITEMS_SUPERADMIN:MenuItem[] =[
    {
        label: 'ADMIN STORE',
        isTitle: true,
    },
    {
        label: 'Home',
        icon: 'grid',
        link: '/dashboard',
      },
]