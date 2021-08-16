
export default {
  items: [
    {
      type: 'req',
      level:0,
      title: true,
      name: 'Request System',
      url: '/RequestPortal/portal',
      icon: 'fa fa-pie-chart',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      type: 'req',
      level:0,
      name: 'Request System',
      url: '/RequestPortal',
      icon: 'fa fa-table',
      children: [
        {
          type: 'req',
          level:0,
          name: 'Home',
          url: '/RequestPortal/PortalHome',
          icon: 'fa fa-home',
        },
        {
          type: 'req',
          level:0,
          name: 'Request Form',
          url: '/RequestPortal/NewRequest',
          icon: 'fa fa-pencil-square-o',
        },
        {
          type: 'req',
          level:0,
          name: 'Short URL',
          url: '/RequestPortal/sl',
          icon: 'fa fa-code',
        },
        {
          type: 'req',
          level:0,
          name: 'Request Pool',
          url: '/RequestPortal/pool',
          icon: 'fa fa-id-badge'
        },
        {
          type: 'req',
          level:2,
          name: 'Full Control Form',
          url: '/RequestPortal/fullctrl',
          icon: 'fa fa-spinner'
        }
      ]
    },
    {
      type: 'req',
      level:2,
      name: 'Requests',
      url: '/RequestPortal',
      icon: 'fa fa-table',
      children: [
        {
          type: 'req',
          level:2,
          name: 'IT & Resources',
          url: '/RequestPortal/IR',
          icon: 'fa fa-exclamation-triangle'
        },
        {
          type: 'req',
          level:2,
          name: 'Outstanding',
          url: '/RequestPortal/outstanding',
          icon: 'fa fa-spinner'
        }
      ]
    }, 
    {
      type: 'req',
      level:1,
      name: 'Reports',
      url: '/RequestPortal',
      icon: 'fa fa-table',
      children: [
        {
          type: 'req',
          level:1,
          name: 'Locker Report',
          url: '/RequestPortal/locker',
          icon: 'fa fa-th',
        },
        {
          type: 'req',
          level:1,
          name: 'Check List',
          url: '/RequestPortal/checklist',
          icon: 'fa fa-th',
        },
        {
          type: 'req',
          level:1,
          name: 'Calendar',
          url: '/RequestPortal/calendar_view',
          icon: 'fa fa-th',
        },
      ]
    },
    {
      type: 'req',
      level:4,
      name: 'Administration',
      url: '/RequestPortal',
      icon: 'fa fa-table',
      children: [
        {
          type: 'req',
          level:4,
          name: 'Admin Panel',
          url: '/RequestPortal/admin',
          icon: 'fa fa-gears',
          badge: {
            variant: 'success',
            text: 'Admin'
          }
        },
        {
          type: 'req',
          level:5,
          name: 'Console',
          url: '/RequestPortal/Console_display_Recent',
          icon: 'fa fa-th',
        }
      ]
    },  
    //sub
    {
      type: 'sub',
      sub_lv:0,
      title: true,
      name: 'Substitute System',
      icon: 'fa fa-pie-chart',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      type: 'sub',
      sub_lv:2,
      name: 'Substitute',
      url: '/subsitude',
      icon: 'fa fa-table',
      children: [
        {
          type: 'sub',
          sub_lv:200,
          name: 'Substitution',
          url: '/subsitude/sub/sub_sec',
          icon: 'fa fa-pencil-square-o',
        },
        {
          type: 'sub',
          sub_lv:2,
          name: 'Substitution 2.0',
          url: '/subsitude/sub/sub_sec_2',
          icon: 'fa fa-pencil-square-o',
        }          
      ]
    },
    {
      type: 'sub',
      sub_lv:0,
      name: 'Lesson Swap',
      url: '/subsitude',
      icon: 'fa fa-table',
      children: [
        {
          type: 'sub',
          sub_lv:1000,
          name: 'Lesson Swap',
          url: '/subsitude/sub/sub',
          icon: 'fa fa-pencil-square-o',
        },
        {
          type: 'sub',
          sub_lv:0,
          name: 'Lesson Swap',
          url: '/subsitude/sub/sub_ui2',
          icon: 'fa fa-pencil-square-o',
        },
        {
          type: 'sub',
          sub_lv:9999,
          name: 'Leave Application',
          url: '/subsitude/my_record/my_leave_record',
          icon: 'fa fa-file-text'
        },          
      ]
    },
    {
      type: 'sub',
      sub_lv:0,
      name: 'Records',
      url: '/subsitude',
      icon: 'fa fa-bar-chart',
      children: [
        {
          type: 'sub',
          sub_lv:1,
          name: 'Daily',
          url: '/subsitude/admin/sup_op',
          icon: 'fa fa-comments-o'
        },       
        {
          type: 'sub',
          sub_lv:0,
          name: 'My Records',
          url: '/subsitude/report/my_record',
          icon: 'fa fa-id-badge'
        },   
        {
          type: 'sub',
          sub_lv:0,
          name: 'Substitution',
          url: '/subsitude/report/sub_record',
          icon: 'fa fa-id-badge'
        },   
      ]
    }, 
    {
      type: 'sub',
      sub_lv:1,
      name: 'Admin',
      url: '/subsitude',
      icon: 'fa fa-gears',
      children: [      
        {
          type: 'sub',
          sub_lv:2,
          name: 'External Sub.',
          url: '/subsitude/admin/ext_sub',
          icon: 'fa fa-spinner'
        },
        {
          type: 'sub',
          sub_lv:5,
          name: 'Admin Setting',
          url: '/subsitude/admin/settings',
          icon: 'fa fa-cogs'
        },   
        {
          type: 'sub',
          sub_lv:9999,
          name: 'Filter Setting',
          url: '/subsitude/admin/filter_setting',
          icon: 'fa fa-gears'
        },     
      ]
    },
    //sub
    //til here, portal list
    {   
      type: 'proc',                     //Reserve - procurement
      proc_lv:0,
      title: true,
      name: 'Procurement',
      url: '/RequestPortal/portal',
      icon: 'fa fa-pie-chart',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      type: 'proc',
      proc_lv:4,
      name: 'Admin Panel',
      url: '/Procurement/admin',
      icon: 'fa fa-gears',
      children: [
        {
          type: 'proc',
          proc_lv:4,
          name: 'User Management',
          url: '/Procurement/admin/usermngt',
          icon: 'fa fa-users'
        },
        {
          type: 'proc',
          proc_lv:4,
          name: 'Location',
          url: '/Procurement/admin/locmngt',
          icon: 'fa fa-building'
        },
        {
          type: 'proc',
          proc_lv:4,
          name: 'Department',
          url: '/Procurement/admin/dptmngt',
          icon: 'fa fa-building'
        },
        {
          type: 'proc',
          proc_lv:4,
          name: 'Medical Setting',
          url: '/Procurement/admin/med_setting',
          icon: 'fa fa-heart'
        },
        {
          type: 'proc',
          proc_lv:4,
          name: 'Action Log',
          url: '/Procurement/admin/actionlog',
          icon: 'fa fa-file'
        }
      ]
    },
    {
      type: 'proc',
      proc_lv:1,
      name: 'Budget Plan',
      url: '/auth',
      icon: 'fa fa-window-restore',
      children: [    
        {
          type: 'proc',
          proc_lv:1,
          name: 'New',
          url: '/Procurement/budget/create_bp',
          icon: 'fa fa-plus-square'
        },
        {
          type: 'proc',
          proc_lv:1,
          name: 'View',
          url: '/Procurement/budget/view_bp_json',
          icon: 'fa fa-table'
        },
        {
          type: 'proc',
          proc_lv:3,
          name: 'Endorse',
          url: '/Procurement/budget/edit_bp_json',
          icon: 'fa fa-table'
        }
      ]
    },
    {
      type: 'proc',
      proc_lv:1,
      name: 'Procurement',
      url: '/auth',
      icon: 'fa fa-table',
      children: [
        {
          type: 'proc',
          proc_lv:1,
          name: 'New',
          url: '/Procurement/procurement/new_proc',
          icon: 'fa fa-plus-square'
        },
        {
          type: 'proc',
          proc_lv:1,
          name: 'View',
          url: '/Procurement/procurement/view_proc',
          icon: 'fa fa-table',
          badge: {
            variant: 'danger',
            text: document.getElementById('new_proc').value,
          }
        }
      ]
    },
    {
      type: 'proc',
      proc_lv:0,
      name: 'Reimbursement',
      url: '/auth',
      icon: 'fa fa-pencil-square-o',
      children: [          
        {
          type: 'proc',
          proc_lv:1,
          name: 'New',
          url: '/Procurement/reimbursement/reimbursement_form',
          icon: 'fa fa-plus-square'
        },
        {
          type: 'proc',
          proc_lv:0,
          name: 'View',
          url: '/Procurement/reimbursement/my_reimb_records',
          icon: 'fa fa-table'
        },
        {
          type: 'proc',
          proc_lv:0,
          name: 'Medical Allowance',
          url: '/Procurement/reimbursement/med_reimb',
          icon: 'fa fa-heart'
        },
        {
          type: 'proc',
          proc_lv:0,
          name: 'Request CCA',
          url: '/Procurement/reimbursement/req_reimb',
          icon: 'fa fa-plus-square'
        },
        {
          type: 'proc',
          proc_lv:2,
          name: 'Endorse',
          url: '/Procurement/reimbursement/reimb_records',
          icon: 'fa fa-table',
          badge: {
            variant: 'danger',
            text: document.getElementById('new_reimb').value,
          }
        }        
      ]
    },
    {
      type: 'proc',
      proc_lv:2,
      name: 'Reports',
      url: '/auth',
      icon: 'fa fa-bar-chart',
      children: [
        {
          type: 'proc',
          proc_lv:2,
          name: 'By Category',
          url: '/Procurement/report/asset_rp',
          icon: 'fa fa-bar-chart'
        },
        {
          type: 'proc',
          proc_lv:2,
          name: 'By Fund',
          url: '/Procurement/report/fund_report',
          icon: 'fa fa-bar-chart'
        },
        {
          type: 'proc',
          proc_lv:2,
          name: 'By Budget',
          url: '/Procurement/report/budget_report',
          icon: 'fa fa-bar-chart'
        },
        {
          type: 'proc',
          proc_lv:2,
          name: 'By Record',
          url: '/Procurement/report/reimb_report_json',
          icon: 'fa fa-bar-chart'
        },
        {
          type: 'proc',
          proc_lv:2,
          name: 'Report for IMC',
          url: '/Procurement/report/IRG',
          icon: 'fa fa-bar-chart'
        }
      ]
    },
    {
      type: 'proc',
      proc_lv:3,
      name: 'Statistic',
      url: '/auth',
      icon: '	fa fa-pie-chart',
      children: [
        {
          type: 'proc',
          proc_lv:3,
          name: 'Procurement',
          url: '/Procurement/stat/proc_stat',
          icon: 'fa fa-area-chart'
        },
        {
          type: 'proc',
          proc_lv:3,
          name: 'Reimbursement',
          url: '/Procurement/stat/reimb_stat',
          icon: 'fa fa-line-chart'
        }
      ]
    },
    {
      type: 'proc',
      proc_lv:3,
      name: 'Settings',
      url: '/Procurement/admin',
      icon: 'fa fa-gears',
      children: [
        {
          type: 'proc',
          proc_lv:3,
          name: 'Member',
          url: '/Procurement/department/member_mngt',
          icon: 'fa fa-user'
        },
        {
          type: 'proc',
          proc_lv:3,
          name: 'Fundings',
          url: '/Procurement/department/fund',
          icon: 'fa fa-usd'
        },
        {
          type: 'proc',
          proc_lv:3,
          name: 'Asset Category',
          url: '/Procurement/department/asset_mngt',
          icon: 'fa fa-tags'
        },
        {
          type: 'proc',
          proc_lv:3,
          name: 'Create Year Budget',
          url: '/Procurement/budget/budget_carry',
          icon: 'fa fa-table'
        }
      ]
    },
    //end proc
    //Inventory
    {
      type: 'inventory',
      inv_lv:1,
      title: true,
      name: 'Inventory System',
      icon: 'fa fa-pie-chart',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      type: 'inventory',
      inv_lv:3,
      name: 'Administration',
      url: '/inventory',
      icon: 'fa fa-gears',
      children: [
        {
          type: 'inventory',
          inv_lv:3,
          name: 'Broadcast',
          url: '/inventory/web/broadcast',
          icon: 'fa fa-phone-square'
        }, 
        {
          type: 'inventory',
          inv_lv:3,
          name: 'Borrow & Return',
          url: '/inventory/web/borrow',
          icon: 'fa fa-book'
        }, 
      ]
    }, 
    {
      type: 'inventory',
      inv_lv:1,
      name: 'Records',
      url: '/inventory',
      icon: 'fa fa-table',
      children: [
        {
          inv_lv:1,
          type: 'inventory',
          name: 'View Records',
          url: '/inventory/web/inventory_list',
          icon: 'fa fa-table',
        },
        {
          inv_lv:1,
          type: 'inventory',
          name: 'Pending Items',
          url: '/inventory/web/pending_inventory',
          icon: 'fa fa-spinner',
        }        
      ]
    },
    {
      type: 'inventory',
      inv_lv:1,
      name: 'Documents',
      url: '/inventory',
      icon: 'fa fa-file',
      children: [
        {
          inv_lv:1,
          type: 'inventory',
          name: 'Export List',
          url: '/inventory/web/inventory_export',
          icon: 'fa fa-file-excel-o',
        },     
        {
          inv_lv:2,
          type: 'inventory',
          name: 'Write-off Items',
          url: '/inventory/web/write_off_pending',
          icon: 'fa fa-trash',
        },
        {
          inv_lv:1,
          type: 'inventory',
          name: 'Stocktake List',
          url: '/inventory/web/stocktakelist',
          icon: 'fa fa-file-excel-o',
        },  
      ]
    },
    {
      type: 'inventory',
      inv_lv:2,
      name: 'Settings',
      url: '/inventory',
      icon: 'fa fa-gears',
      children: [
        {
          type: 'inventory',
          inv_lv:2,
          name: 'Permission',
          url: '/inventory/web/admin_setting',
          icon: 'fa fa-gears'
        },
        {
          type: 'inventory',
          inv_lv:2,
          name: 'Category',
          url: '/inventory/web/category_setting',
          icon: 'fa fa-gears'
        },
        {
          type: 'inventory',
          inv_lv:2,
          name: 'Group',
          url: '/inventory/web/group_setting',
          icon: 'fa fa-gears'
        }    
      ]
    }, 
    //[END] Inventory

  ], //data
  //other js 
}
