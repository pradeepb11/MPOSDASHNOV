import { icons } from 'feather-icons';
import { MenuItem } from './menu.model';

export const MENU_ITEMS_ADMIN:MenuItem[]=[
    {
        label: 'ADMIN',
        isTitle: true,
      },
      {
        label: 'Dashboard',
        icon: 'aperture',
        link: '/dashboard',
        
      },
      {
        label: 'MENU',
        isTitle: true,

      },
      {
        label: 'Employee',
        icon: 'user',
        link: '/dashboard',
        subItems: [
          {
            label: 'Employee List',
            icon: 'list',
            link: '',
          },
        ]
      },
      {
        label: 'Branches',
        icon: 'slack',
        link: '/invoice',
        subItems:[
          {
            label: 'Branches List',
            icon: 'list',
            link: '',
          },
        ]
      },
      {
        label: 'Products',
        icon: 'shopping-bag',
        link: '/refund',
        subItems:[
          {
            label: 'Products List',
            icon: 'list',
            link: '/product',

          },
          {
            label: 'Products Category',
            icon: 'list',
            link: '',

          },
          {
            label: 'Products Attributes',
            icon: 'list',
            link: '',

          },
          {
            label:'Product Type',
            icon:'command',
            link:''
          },
          {
            label: 'Products Slab Price',
            icon: 'dollar-sign',
            link:''
            
          }

        ]
      },
      {
        label: 'Customer',
        icon: 'user',
        link: '',
        subItems:[
          {
            label:'Customer List',
            icon: 'list',
            link: '',

          }
        ]
      },
      {
        label: 'Order',
        icon: 'package',
        link: '/customer',
        subItems:[
          {
            label:'Order List',
            icon: 'list',
            link: '',

          }
          ]
      },
      {
        label: 'Stock',
        icon: 'monitor',
        link: '/devlopersetting',
        subItems:[
          {
            label:'Stock List',
            icon: 'list',
            link: '',

          },
          {
            label:'Stock Add',
            icon: 'file-plus',
            link:''
          },
          {
            label:'Stock Transfer',
            icon:'list',
            link:''

          }
        ]
      },
      {},
      {},
      {},
      {},
      {},
      {
        label: 'LogOut',
        icon: 'log-out',
        link: ''
      },
];


export const MENU_ITEMS_SUPERADMIN:MenuItem[] =[
    {
      label: 'SUPER ADMIN',
      isTitle: true,
    },
    {
        label: 'Dashboard',
        icon: 'grid',
        link: '/dashboard',
    },
    {
        label: 'MENU',
        isTitle: true,

    },
    {
      label: 'Store',
      icon: 'archive',
      link: '',
      subItems:[
        {
          label:'Store List',
          icon: 'list',
          link: '',

        },
        {
          label:'Store Add',
          icon: 'file-plus',
          link:'',
        }
      ]
    },
    {
      label: 'Employee',
      icon: 'user',
      link: '',
      subItems:[
        {
          label:'Employee List',
          icon: 'list',
          link: '',

        }
      ]
    },
    {
      label: 'Areas',
      icon: 'map-pin',
      link: '',
      subItems:[
        {
          label:'Areas List',
          icon: 'list',
          link: '',

        }
      ]
    },
    {
      label: 'Customer',
      icon: 'user',
      link: '',
      subItems:[
        {
          label:'Customer List',
          icon: 'list',
          link: '',

        }
      ]
    },
         

]