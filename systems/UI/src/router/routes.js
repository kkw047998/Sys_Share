// Dynamic Loading Modules

// Views
const Dashboard = resolve => { require.ensure(['../views/Dashboard.vue'], ()=>{ resolve(require('../views/Dashboard.vue')); }); };
const AuthHome = resolve => { require.ensure(['../views/Home.vue'], ()=>{ resolve(require('../views/Home.vue')); }); };
// UI Components
const Portal = resolve => { require.ensure(['../RequestPortal/Portal.vue'], ()=>{ resolve(require('../RequestPortal/Portal.vue')); }); }; //request portal
const NewRequest = resolve => { require.ensure(['../RequestPortal/NewRequest.vue'], ()=>{ resolve(require('../RequestPortal/NewRequest.vue')); }); };
const pool = resolve => { require.ensure(['../RequestPortal/pool.vue'], ()=>{ resolve(require('../RequestPortal/pool.vue')); }); };
const IR = resolve => { require.ensure(['../RequestPortal/IR.vue'], ()=>{ resolve(require('../RequestPortal/IR.vue')); }); };
const edit_form = resolve => { require.ensure(['../RequestPortal/edit_form.vue'], ()=>{ resolve(require('../RequestPortal/edit_form.vue')); }); };
const ticket = resolve => { require.ensure(['../RequestPortal/ticket.vue'], ()=>{ resolve(require('../RequestPortal/ticket.vue')); }); };
const edit_form_user = resolve => { require.ensure(['../RequestPortal/edit_form_user.vue'], ()=>{ resolve(require('../RequestPortal/edit_form_user.vue')); }); };
const academic = resolve => { require.ensure(['../RequestPortal/academic.vue'], ()=>{ resolve(require('../RequestPortal/academic.vue')); }); };
const fullctrl = resolve => { require.ensure(['../RequestPortal/fullctrl.vue'], ()=>{ resolve(require('../RequestPortal/fullctrl.vue')); }); };
const PortalHome = resolve => { require.ensure(['../RequestPortal/PortalHome.vue'], ()=>{ resolve(require('../RequestPortal/PortalHome.vue')); }); };
const locker = resolve => { require.ensure(['../RequestPortal/locker.vue'], ()=>{ resolve(require('../RequestPortal/locker.vue')); }); };
const edit_locker = resolve => { require.ensure(['../RequestPortal/edit_locker.vue'], ()=>{ resolve(require('../RequestPortal/edit_locker.vue')); }); };
const admin = resolve => { require.ensure(['../RequestPortal/admin.vue'], ()=>{ resolve(require('../RequestPortal/admin.vue')); }); };
const Req_chart = resolve => { require.ensure(['../RequestPortal/Req_chart.vue'], ()=>{ resolve(require('../RequestPortal/Req_chart.vue')); }); };
const Console_display_Recent = resolve => { require.ensure(['../RequestPortal/Console_display_Recent.vue'], ()=>{ resolve(require('../RequestPortal/Console_display_Recent.vue')); }); };
const Console_display_Handling = resolve => { require.ensure(['../RequestPortal/Console_display_Handling.vue'], ()=>{ resolve(require('../RequestPortal/Console_display_Handling.vue')); }); };
const Console_display_Unhandled = resolve => { require.ensure(['../RequestPortal/Console_display_Unhandled.vue'], ()=>{ resolve(require('../RequestPortal/Console_display_Unhandled.vue')); }); };
const checklist = resolve => { require.ensure(['../RequestPortal/checklist.vue'], ()=>{ resolve(require('../RequestPortal/checklist.vue')); }); };
const edit_checklist = resolve => { require.ensure(['../RequestPortal/edit_checklist.vue'], ()=>{ resolve(require('../RequestPortal/edit_checklist.vue')); }); };
const submitForm = resolve => { require.ensure(['../RequestPortal/submitForm.vue'], ()=>{ resolve(require('../RequestPortal/submitForm.vue')); }); };
const outstanding = resolve => { require.ensure(['../RequestPortal/outstanding.vue'], ()=>{ resolve(require('../RequestPortal/outstanding.vue')); }); };
const calendar_view = resolve => { require.ensure(['../RequestPortal/calendar_view.vue'], ()=>{ resolve(require('../RequestPortal/calendar_view.vue')); }); };
const sl = resolve => { require.ensure(['../RequestPortal/sl.vue'], ()=>{ resolve(require('../RequestPortal/sl.vue')); }); };

//request portal - end
const usermngt = resolve => { require.ensure(['../Procurement/admin/usermngt.vue'], ()=>{ resolve(require('../Procurement/admin/usermngt.vue')); }); };
const locmngt = resolve => { require.ensure(['../Procurement/admin/locmngt.vue'], ()=>{ resolve(require('../Procurement/admin/locmngt.vue')); }); };
const deptmngt = resolve => { require.ensure(['../Procurement/admin/deptmngt.vue'], ()=>{ resolve(require('../Procurement/admin/deptmngt.vue')); }); };
const dptmngt = resolve => { require.ensure(['../Procurement/admin/dptmngt.vue'], ()=>{ resolve(require('../Procurement/admin/dptmngt.vue')); }); };
const med_setting = resolve => { require.ensure(['../Procurement/admin/med_setting.vue'], ()=>{ resolve(require('../Procurement/admin/med_setting.vue')); }); };
const actionlog = resolve => { require.ensure(['../Procurement/admin/actionlog.vue'], ()=>{ resolve(require('../Procurement/admin/actionlog.vue')); }); };

const member_mngt = resolve => { require.ensure(['../Procurement/department/member_mngt.vue'], ()=>{ resolve(require('../Procurement/department/member_mngt.vue')); }); };
const fund = resolve => { require.ensure(['../Procurement/department/fund.vue'], ()=>{ resolve(require('../Procurement/department/fund.vue')); }); };
const asset_mngt = resolve => { require.ensure(['../Procurement/department/asset_mngt.vue'], ()=>{ resolve(require('../Procurement/department/asset_mngt.vue')); }); };
const view_budget = resolve => { require.ensure(['../Procurement/budget/view_budget.vue'], ()=>{ resolve(require('../Procurement/budget/view_budget.vue')); }); };
const submit_bp = resolve => { require.ensure(['../Procurement/budget/submit_bp.vue'], ()=>{ resolve(require('../Procurement/budget/submit_bp.vue')); }); };
const budget_carry = resolve => { require.ensure(['../Procurement/budget/budget_carry.vue'], ()=>{ resolve(require('../Procurement/budget/budget_carry.vue')); }); };
const create_bp = resolve => { require.ensure(['../Procurement/budget/create_bp.vue'], ()=>{ resolve(require('../Procurement/budget/create_bp.vue')); }); };
const edit_bp_full = resolve => { require.ensure(['../Procurement/budget/edit_bp_full.vue'], ()=>{ resolve(require('../Procurement/budget/edit_bp_full.vue')); }); };
const view_bp_json = resolve => { require.ensure(['../Procurement/budget/view_bp_json.vue'], ()=>{ resolve(require('../Procurement/budget/view_bp_json.vue')); }); };
const edit_bp_json = resolve => { require.ensure(['../Procurement/budget/edit_bp_json.vue'], ()=>{ resolve(require('../Procurement/budget/edit_bp_json.vue')); }); };


const sp_budget = resolve => { require.ensure(['../Procurement/budget/sp_budget.vue'], ()=>{ resolve(require('../Procurement/budget/sp_budget.vue')); }); };
const edit_bp = resolve => { require.ensure(['../Procurement/budget/edit_bp.vue'], ()=>{ resolve(require('../Procurement/budget/edit_bp.vue')); }); };
const edit_budget = resolve => { require.ensure(['../Procurement/budget/edit_budget.vue'], ()=>{ resolve(require('../Procurement/budget/edit_budget.vue')); }); };
const user_setup = resolve => { require.ensure(['../Procurement/user_setup.vue'], ()=>{ resolve(require('../Procurement/user_setup.vue')); }); };
const reimbursement_form = resolve => { require.ensure(['../Procurement/reimbursement/reimbursement_form.vue'], ()=>{ resolve(require('../Procurement/reimbursement/reimbursement_form.vue')); }); };
const view_record = resolve => { require.ensure(['../Procurement/reimbursement/view_record.vue'], ()=>{ resolve(require('../Procurement/reimbursement/view_record.vue')); }); };
const reimb_full_ctrl = resolve => { require.ensure(['../Procurement/reimbursement/reimb_full_ctrl.vue'], ()=>{ resolve(require('../Procurement/reimbursement/reimb_full_ctrl.vue')); }); };
const edit_reimb_record = resolve => { require.ensure(['../Procurement/reimbursement/edit_reimb_record.vue'], ()=>{ resolve(require('../Procurement/reimbursement/edit_reimb_record.vue')); }); };
const req_reimb = resolve => { require.ensure(['../Procurement/reimbursement/req_reimb.vue'], ()=>{ resolve(require('../Procurement/reimbursement/req_reimb.vue')); }); };
const reimbursement_entry = resolve => { require.ensure(['../Procurement/reimbursement/reimbursement_entry.vue'], ()=>{ resolve(require('../Procurement/reimbursement/reimbursement_entry.vue')); }); };
const my_reimb_records = resolve => { require.ensure(['../Procurement/reimbursement/my_reimb_records.vue'], ()=>{ resolve(require('../Procurement/reimbursement/my_reimb_records.vue')); }); };


const new_proc = resolve => { require.ensure(['../Procurement/procurement/new_proc.vue'], ()=>{ resolve(require('../Procurement/procurement/new_proc.vue')); }); };
const view_proc = resolve => { require.ensure(['../Procurement/procurement/view_proc.vue'], ()=>{ resolve(require('../Procurement/procurement/view_proc.vue')); }); };
const view_proc_render = resolve => { require.ensure(['../Procurement/procurement/view_proc_render.vue'], ()=>{ resolve(require('../Procurement/procurement/view_proc_render.vue')); }); };
const proc_reimb = resolve => { require.ensure(['../Procurement/reimbursement/proc_reimb.vue'], ()=>{ resolve(require('../Procurement/reimbursement/proc_reimb.vue')); }); };
const edit_proc = resolve => { require.ensure(['../Procurement/procurement/edit_proc.vue'], ()=>{ resolve(require('../Procurement/procurement/edit_proc.vue')); }); };
const recur_reimb = resolve => { require.ensure(['../Procurement/reimbursement/recur_reimb.vue'], ()=>{ resolve(require('../Procurement/reimbursement/recur_reimb.vue')); }); };
const recur_setup= resolve => { require.ensure(['../Procurement/reimbursement/recur_setup.vue'], ()=>{ resolve(require('../Procurement/reimbursement/recur_setup.vue')); }); };
const med_reimb= resolve => { require.ensure(['../Procurement/reimbursement/med_reimb.vue'], ()=>{ resolve(require('../Procurement/reimbursement/med_reimb.vue')); }); };
const gen_req_reimb= resolve => { require.ensure(['../Procurement/reimbursement/gen_req_reimb.vue'], ()=>{ resolve(require('../Procurement/reimbursement/gen_req_reimb.vue')); }); };
const reimb_records= resolve => { require.ensure(['../Procurement/reimbursement/reimb_records.vue'], ()=>{ resolve(require('../Procurement/reimbursement/reimb_records.vue')); }); };


const live_sign_proc= resolve => { require.ensure(['../Procurement/procurement/live_sign_proc.vue'], ()=>{ resolve(require('../Procurement/procurement/live_sign_proc.vue')); }); };
const fill_return= resolve => { require.ensure(['../Procurement/procurement/fill_return.vue'], ()=>{ resolve(require('../Procurement/procurement/fill_return.vue')); }); };
const return_info= resolve => { require.ensure(['../Procurement/procurement/return_info.vue'], ()=>{ resolve(require('../Procurement/procurement/return_info.vue')); }); };

const live_sign_principal= resolve => { require.ensure(['../Procurement/procurement/live_sign_principal.vue'], ()=>{ resolve(require('../Procurement/procurement/live_sign_principal.vue')); }); };
const sign_code= resolve => { require.ensure(['../Procurement/procurement/sign_code.vue'], ()=>{ resolve(require('../Procurement/procurement/sign_code.vue')); }); };
const tender_meeting_setup= resolve => { require.ensure(['../Procurement/procurement/tender_meeting_setup.vue'], ()=>{ resolve(require('../Procurement/procurement/tender_meeting_setup.vue')); }); };
const live_sign_attend= resolve => { require.ensure(['../Procurement/procurement/live_sign_attend.vue'], ()=>{ resolve(require('../Procurement/procurement/live_sign_attend.vue')); }); };
const tender_meeting_mat= resolve => { require.ensure(['../Procurement/procurement/tender_meeting_mat.vue'], ()=>{ resolve(require('../Procurement/procurement/tender_meeting_mat.vue')); }); };
const live_sign_combine= resolve => { require.ensure(['../Procurement/procurement/live_sign_combine.vue'], ()=>{ resolve(require('../Procurement/procurement/live_sign_combine.vue')); }); };
const retender= resolve => { require.ensure(['../Procurement/procurement/retender.vue'], ()=>{ resolve(require('../Procurement/procurement/retender.vue')); }); };
const view_only= resolve => { require.ensure(['../Procurement/procurement/view_only.vue'], ()=>{ resolve(require('../Procurement/procurement/view_only.vue')); }); };

const IRG= resolve => { require.ensure(['../Procurement/report/IRG.vue'], ()=>{ resolve(require('../Procurement/report/IRG.vue')); }); };
const asset_report= resolve => { require.ensure(['../Procurement/report/asset_report.vue'], ()=>{ resolve(require('../Procurement/report/asset_report.vue')); }); };
const fund_report= resolve => { require.ensure(['../Procurement/report/fund_report.vue'], ()=>{ resolve(require('../Procurement/report/fund_report.vue')); }); };
const budget_report= resolve => { require.ensure(['../Procurement/report/budget_report.vue'], ()=>{ resolve(require('../Procurement/report/budget_report.vue')); }); };
const reimb_report= resolve => { require.ensure(['../Procurement/report/reimb_report.vue'], ()=>{ resolve(require('../Procurement/report/reimb_report.vue')); }); };
const reimb_report_json= resolve => { require.ensure(['../Procurement/report/reimb_report_json.vue'], ()=>{ resolve(require('../Procurement/report/reimb_report_json.vue')); }); };


const proc_stat= resolve => { require.ensure(['../Procurement/stat/proc_stat.vue'], ()=>{ resolve(require('../Procurement/stat/proc_stat.vue')); }); };
const reimb_stat= resolve => { require.ensure(['../Procurement/stat/reimb_stat.vue'], ()=>{ resolve(require('../Procurement/stat/reimb_stat.vue')); }); };
const form_view= resolve => { require.ensure(['../Procurement/wrapper/form_view.vue'], ()=>{ resolve(require('../Procurement/wrapper/form_view.vue')); }); };

const asset_rp= resolve => { require.ensure(['../Procurement/report/asset_rp.vue'], ()=>{ resolve(require('../Procurement/report/asset_rp.vue')); }); };



//procurement -end
const sub= resolve => { require.ensure(['../subsitude/sub/sub.vue'], ()=>{ resolve(require('../subsitude/sub/sub.vue')); }); };
const sub_ui2= resolve => { require.ensure(['../subsitude/sub/sub_ui2.vue'], ()=>{ resolve(require('../subsitude/sub/sub_ui2.vue')); }); };
const sub_sec= resolve => { require.ensure(['../subsitude/sub/sub_sec.vue'], ()=>{ resolve(require('../subsitude/sub/sub_sec.vue')); }); };
const sub_sec_2= resolve => { require.ensure(['../subsitude/sub/sub_sec_2.vue'], ()=>{ resolve(require('../subsitude/sub/sub_sec_2.vue')); }); };

const swap_view= resolve => { require.ensure(['../subsitude/swap_view/swap_view.vue'], ()=>{ resolve(require('../subsitude/swap_view/swap_view.vue')); }); };
const sub_record= resolve => { require.ensure(['../subsitude/report/sub_record.vue'], ()=>{ resolve(require('../subsitude/report/sub_record.vue')); }); };
const sup_op= resolve => { require.ensure(['../subsitude/admin/sup_op.vue'], ()=>{ resolve(require('../subsitude/admin/sup_op.vue')); }); };
const ext_sub= resolve => { require.ensure(['../subsitude/admin/ext_sub.vue'], ()=>{ resolve(require('../subsitude/admin/ext_sub.vue')); }); };
const settings= resolve => { require.ensure(['../subsitude/admin/settings.vue'], ()=>{ resolve(require('../subsitude/admin/settings.vue')); }); };
const my_leave_record= resolve => { require.ensure(['../subsitude/my_record/my_leave_record.vue'], ()=>{ resolve(require('../subsitude/my_record/my_leave_record.vue')); }); };
const my_record= resolve => { require.ensure(['../subsitude/report/my_record.vue'], ()=>{ resolve(require('../subsitude/report/my_record.vue')); }); };
const filter_setting= resolve => { require.ensure(['../subsitude/admin/filter_setting.vue'], ()=>{ resolve(require('../subsitude/admin/filter_setting.vue')); }); };






//sub -end
const Buttons = resolve => { require.ensure(['../components/Buttons.vue'], ()=>{ resolve(require('../components/Buttons.vue')); }); };
const Badges = resolve => { require.ensure(['../components/Badges.vue'], ()=>{ resolve(require('../components/Badges.vue')); }); };
const Alerts = resolve => { require.ensure(['../components/Alerts.vue'], ()=>{ resolve(require('../components/Alerts.vue')); }); };
const ProgressBars = resolve => { require.ensure(['../components/ProgressBars.vue'], ()=>{ resolve(require('../components/ProgressBars.vue')); }); };

const BasicForms = resolve => { require.ensure(['../components/forms/BasicForms.vue'], ()=>{ resolve(require('../components/forms/BasicForms.vue')); }); };
const Grids = resolve => { require.ensure(['../components/Grids.vue'], ()=>{ resolve(require('../components/Grids.vue')); }); };
const Widgets = resolve => { require.ensure(['../components/Widgets.vue'], ()=>{ resolve(require('../components/Widgets.vue')); }); };
const Typography = resolve => { require.ensure(['../components/Typography.vue'], ()=>{ resolve(require('../components/Typography.vue')); }); };
const Icons = resolve => { require.ensure(['../components/icons/Icons.vue'], ()=>{ resolve(require('../components/icons/Icons.vue')); }); };
const SetsList = resolve => { require.ensure(['../components/icons/SetsList.vue'], ()=>{ resolve(require('../components/icons/SetsList.vue')); }); };
const Sets = resolve => { require.ensure(['../components/icons/Set.vue'], ()=>{ resolve(require('../components/icons/Set.vue')); }); };
const Tables = resolve => { require.ensure(['../components/tables/Tables.vue'], ()=>{ resolve(require('../components/tables/Tables.vue')); }); };

//Inventory
const inventory_list = resolve => { require.ensure(['../inventory/web/inventory_list.vue'], ()=>{ resolve(require('../inventory/web/inventory_list.vue')); }); };
const edit_item = resolve => { require.ensure(['../inventory/web/edit_item.vue'], ()=>{ resolve(require('../inventory/web/edit_item.vue')); }); };
const insert_item = resolve => { require.ensure(['../inventory/web/insert_item.vue'], ()=>{ resolve(require('../inventory/web/insert_item.vue')); }); };
const pending_inventory = resolve => { require.ensure(['../inventory/web/pending_inventory.vue'], ()=>{ resolve(require('../inventory/web/pending_inventory.vue')); }); };
const admin_setting = resolve => { require.ensure(['../inventory/web/admin_setting.vue'], ()=>{ resolve(require('../inventory/web/admin_setting.vue')); }); };
const category_setting = resolve => { require.ensure(['../inventory/web/category_setting.vue'], ()=>{ resolve(require('../inventory/web/category_setting.vue')); }); };
const inventory_export = resolve => { require.ensure(['../inventory/web/inventory_export.vue'], ()=>{ resolve(require('../inventory/web/inventory_export.vue')); }); };
const write_off_pending = resolve => { require.ensure(['../inventory/web/write_off_pending.vue'], ()=>{ resolve(require('../inventory/web/write_off_pending.vue')); }); };
const broadcast = resolve => { require.ensure(['../inventory/web/broadcast.vue'], ()=>{ resolve(require('../inventory/web/broadcast.vue')); }); };
const borrow = resolve => { require.ensure(['../inventory/web/borrow.vue'], ()=>{ resolve(require('../inventory/web/borrow.vue')); }); };
const NewBorrowRecord = resolve => { require.ensure(['../inventory/web/NewBorrowRecord.vue'], ()=>{ resolve(require('../inventory/web/NewBorrowRecord.vue')); }); };
const group_setting = resolve => { require.ensure(['../inventory/web/group_setting.vue'], ()=>{ resolve(require('../inventory/web/group_setting.vue')); }); };
const stocktakelist = resolve => { require.ensure(['../inventory/web/stocktakelist.vue'], ()=>{ resolve(require('../inventory/web/stocktakelist.vue')); }); };

//[End]Inventory

//Charts
const ChartJS = resolve => { require.ensure(['../components/charts/ChartJS.vue'], ()=>{ resolve(require('../components/charts/ChartJS.vue')); }); };


//Maps
const GoogleMapsPage = resolve => { require.ensure(['../components/maps/google-maps/GoogleMapsPage.vue'], ()=>{ resolve(require('../components/maps/google-maps/GoogleMapsPage.vue')); }); };
const LeafletMapsPage = resolve => { require.ensure(['../components/maps/leaflet-maps/LeafletMapsPage.vue'], ()=>{ resolve(require('../components/maps/leaflet-maps/LeafletMapsPage.vue')); }); };


// // User Info
// const User = resolve => { require.ensure(['../layouts/User.vue'], ()=>{ resolve(require('../layouts/User.vue')); }); };

//Pages
const Login = resolve => { require.ensure(['../pages/login/Login.vue'], ()=>{ resolve(require('../pages/login/Login.vue')); }); };
const Register = resolve => { require.ensure(['../pages/register/Register.vue'], ()=>{ resolve(require('../pages/register/Register.vue')); }); };
const Page404 = resolve => { require.ensure(['../pages/Page404.vue'], ()=>{ resolve(require('../pages/Page404.vue')); }); };
const Page500 = resolve => { require.ensure(['../pages/Page500.vue'], ()=>{ resolve(require('../pages/Page500.vue')); }); };


export const routes = [
    { path : '/views/AuthHome', name: 'AuthHome', component: AuthHome},
    { path : '', name: 'PortalHome', components:{ default: PortalHome } },
    { path : '/RequestPortal/PortalHome',name: 'PortalHome', components:{ default: PortalHome } },
    // // UI Components
    { path : '/RequestPortal/portal', name: 'portal', component: Portal},
    { path : '/RequestPortal/NewRequest', name: 'NewRequest', component: NewRequest},
    { path : '/RequestPortal/pool', name: 'pool', component: pool},
    { path : '/RequestPortal/IR', name: 'IR', component: IR},
    { path : '/RequestPortal/edit_form', name: 'edit_form', component: edit_form},
    { path : '/RequestPortal/ticket', name: 'ticket', component: ticket},
    { path : '/RequestPortal/edit_form_user', name: 'edit_form_user', component: edit_form_user},
    { path : '/RequestPortal/academic', name: 'academic', component: academic},
    { path : '/RequestPortal/fullctrl', name: 'fullctrl', component: fullctrl},
    { path : '/RequestPortal/PortalHome', name: 'PortalHome', component: PortalHome},
    { path : '/RequestPortal/locker', name: 'locker', component: locker},
    { path : '/RequestPortal/edit_locker', name: 'edit_locker', component: edit_locker},
    { path : '/RequestPortal/admin', name: 'admin', component: admin},
    { path : '/RequestPortal/Req_chart', name: 'admin', component:Req_chart},
    { path : '/RequestPortal/Console_display_Recent', name: 'Console_display_Recent', component: Console_display_Recent},
    { path : '/RequestPortal/Console_display_Handling', name: 'Console_display_Handling', component: Console_display_Handling},
    { path : '/RequestPortal/Console_display_Unhandled', name: 'Console_display_Unhandled', component: Console_display_Unhandled},
    { path : '/RequestPortal/checklist', name: 'checklist', component: checklist},
    { path : '/RequestPortal/edit_checklist', name: 'edit_checklist', component: edit_checklist},
    { path : '/RequestPortal/submitForm', name: 'submitForm', component: submitForm},
    { path : '/RequestPortal/outstanding', name: 'outstanding', component: outstanding},
    { path : '/RequestPortal/calendar_view', name: 'calendar_view', component: calendar_view},
    { path : '/RequestPortal/sl', name: 'sl', component: sl},


    // end portal
    { path : '/Procurement/admin/usermngt', name: 'usermngt', component:usermngt},
    { path : '/Procurement/admin/locmngt', name: 'locmngt', component:locmngt},
    { path : '/Procurement/admin/deptmngt', name: 'deptmngt', component:deptmngt},
    { path : '/Procurement/admin/dptmngt', name: 'dptmngt', component:dptmngt},
    { path : '/Procurement/admin/med_setting', name: 'med_setting', component:med_setting},
    { path : '/Procurement/admin/actionlog', name: 'actionlog', component:actionlog},

    { path : '/Procurement/department/member_mngt', name: 'member_mngt', component:member_mngt},
    { path : '/Procurement/department/fund', name: 'fund', component:fund},
    { path : '/Procurement/department/asset_mngt', name: 'asset_mngt', component:asset_mngt},
    { path : '/Procurement/budget/view_budget', name: 'view_budget', component:view_budget},
    { path : '/Procurement/budget/submit_bp', name: 'submit_bp', component:submit_bp},
    { path : '/Procurement/budget/sp_budget', name: 'sp_budget', component:sp_budget},    
    { path : '/Procurement/budget/edit_bp', name: 'edit_bp', component:edit_bp},
    { path : '/Procurement/budget/edit_budget', name: 'edit_budget', component:edit_budget},
    { path : '/Procurement/budget/budget_carry', name: 'budget_carry', component:budget_carry},
    { path : '/Procurement/budget/create_bp', name: 'create_bp', component:create_bp},
    { path : '/Procurement/budget/edit_bp_full', name: 'edit_bp_full', component:edit_bp_full},
    { path : '/Procurement/budget/view_bp_json', name: 'view_bp_json', component:view_bp_json},
    { path : '/Procurement/budget/edit_bp_json', name: 'edit_bp_json', component:edit_bp_json},


    { path : '/Procurement/user_setup', name: 'user_setup', component:user_setup},
    { path : '/Procurement/reimbursement/reimbursement_form', name: 'reimbursement_form', component:reimbursement_form},
    { path : '/Procurement/reimbursement/view_record', name: 'view_record', component:view_record},
    { path : '/Procurement/reimbursement/reimb_full_ctrl', name: 'reimb_full_ctrl', component:reimb_full_ctrl},
    { path : '/Procurement/reimbursement/edit_reimb_record', name: 'edit_reimb_record', component:edit_reimb_record},
    { path : '/Procurement/reimbursement/proc_reimb', name: 'proc_reimb', component:proc_reimb},
    { path : '/Procurement/reimbursement/recur_reimb', name: 'recur_reimb', component:recur_reimb},
    { path : '/Procurement/reimbursement/recur_setup', name: 'recur_setup', component:recur_setup},
    { path : '/Procurement/reimbursement/med_reimb', name: 'med_reimb', component:med_reimb},
    { path : '/Procurement/reimbursement/req_reimb', name: 'req_reimb', component:req_reimb},
    { path : '/Procurement/reimbursement/gen_req_reimb', name: 'gen_req_reimb', component:gen_req_reimb},
    { path : '/Procurement/reimbursement/reimb_records', name: 'reimb_records', component:reimb_records},
    { path : '/Procurement/reimbursement/reimbursement_entry', name: 'reimbursement_entry', component:reimbursement_entry},
    { path : '/Procurement/reimbursement/my_reimb_records', name: 'my_reimb_records', component:my_reimb_records},


    { path : '/Procurement/procurement/new_proc', name: 'new_proc', component:new_proc},
    { path : '/Procurement/procurement/view_proc', name: 'view_proc', component:view_proc},
    { path : '/Procurement/procurement/edit_proc', name: 'edit_proc', component:edit_proc},
    { path : '/Procurement/procurement/live_sign_proc', name: 'live_sign_proc', component:live_sign_proc},
    { path : '/Procurement/procurement/fill_return', name: 'fill_return', component:fill_return},
    { path : '/Procurement/procurement/return_info', name: 'return_info', component:return_info},
    { path : '/Procurement/procurement/live_sign_principal', name: 'live_sign_principal', component:live_sign_principal},
    { path : '/Procurement/procurement/sign_code', name: 'sign_code', component:sign_code},
    { path : '/Procurement/procurement/tender_meeting_setup', name: 'tender_meeting_setup', component:tender_meeting_setup},
    { path : '/Procurement/procurement/live_sign_attend', name: 'live_sign_attend', component:live_sign_attend},
    { path : '/Procurement/procurement/tender_meeting_mat', name: 'tender_meeting_mat', component:tender_meeting_mat},
    { path : '/Procurement/procurement/live_sign_combine', name: 'live_sign_combine', component:live_sign_combine},
    { path : '/Procurement/procurement/retender', name: 'retender', component:retender},
    { path : '/Procurement/procurement/view_only', name: 'view_only', component:view_only},
    { path : '/Procurement/procurement/view_proc_render', name: 'view_proc_render', component:view_proc_render},


    { path : '/Procurement/report/IRG', name: 'IRG', component:IRG},
    { path : '/Procurement/report/asset_report', name: 'asset_report', component:asset_report},
    { path : '/Procurement/report/fund_report', name: 'fund_report', component:fund_report},
    { path : '/Procurement/report/budget_report', name: 'budget_report', component:budget_report},
    { path : '/Procurement/report/reimb_report', name: 'reimb_report', component:reimb_report},
    { path : '/Procurement/report/reimb_report_json', name: 'reimb_report_json', component:reimb_report_json},


    { path : '/Procurement/stat/proc_stat', name: 'proc_stat', component:proc_stat},
    { path : '/Procurement/stat/reimb_stat', name: 'reimb_stat', component:reimb_stat},
    { path : '/Procurement/wrapper/form_view', name: 'form_view', component:form_view},


    { path : '/Procurement/report/asset_rp', name: 'asset_rp', component:asset_rp},


    //end procurement
    { path : '/subsitude/sub/sub', name: 'sub', component:sub},
    { path : '/subsitude/sub/sub_ui2', name: 'sub_ui2', component:sub_ui2},
    { path : '/subsitude/sub/sub_sec', name: 'sub_sec', component:sub_sec},
    { path : '/subsitude/sub/sub_sec_2', name: 'sub_sec_2', component:sub_sec_2},

    { path : '/subsitude/swap_view/swap_view', name: 'swap_view', component:swap_view},
    { path : '/subsitude/report/sub_record', name: 'sub_record', component:sub_record},
    { path : '/subsitude/admin/sup_op', name: 'sup_op', component:sup_op},
    { path : '/subsitude/admin/settings', name: 'settings', component:settings},
    { path : '/subsitude/admin/ext_sub', name: 'ext_sub', component:ext_sub},
    { path : '/subsitude/admin/filter_setting', name: 'filter_setting', component:filter_setting},
    { path : '/subsitude/my_record/my_leave_record', name: 'my_leave_record', component:my_leave_record},
    { path : '/subsitude/report/my_record', name: 'my_record', component:my_record},


    //end sub

    //Inventory
    { path : '/inventory/web/inventory_list', name: 'inventory_list', component:inventory_list},
    { path : '/inventory/web/edit_item', name: 'edit_item', component:edit_item},
    { path : '/inventory/web/insert_item', name: 'insert_item', component:insert_item},
    { path : '/inventory/web/pending_inventory', name: 'pending_inventory', component:pending_inventory},
    { path : '/inventory/web/admin_setting', name: 'admin_setting', component:admin_setting},
    { path : '/inventory/web/category_setting', name: 'category_setting', component:category_setting},
    { path : '/inventory/web/inventory_export', name: 'inventory_export', component:inventory_export},
    { path : '/inventory/web/write_off_pending', name: 'write_off_pending', component:write_off_pending},
    { path : '/inventory/web/broadcast', name: 'broadcast', component:broadcast},
    { path : '/inventory/web/borrow', name: 'borrow', component:borrow},
    { path : '/inventory/web/NewBorrowRecord', name: 'NewBorrowRecord', component:NewBorrowRecord},
    { path : '/inventory/web/group_setting', name: 'group_setting', component:group_setting},
    { path : '/inventory/web/stocktakelist', name: 'stocktakelist', component:stocktakelist},

    //[End] Inventory
    { path : '/components/buttons', name: 'buttons', component: Buttons },
    { path : '/components/badges', name: 'badges', component: Badges },
    { path : '/components/alerts', name: 'alerts', component: Alerts },
    { path : '/components/progressbars', name: 'progressbars', component: ProgressBars },
    { path : '/components/basic-form', name: 'basic-form', component: BasicForms },
    { path : '/components/grids', name: 'grids', component: Grids },
    { path : '/components/widgets', name: 'widgets', component: Widgets },
    { path : '/components/typography', name: 'typography', component: Typography },
    { path : '/components/tables', name: 'tables', component: Tables },

    {
        path : '/components/icons',
        component: Icons,
        children:[
            {
                path: '',
                component: SetsList,
                name: 'Icons'
            },
            {
                path: ':name',
                component: Sets,
                props: true,

            }
        ]
    },
    {
        path : '/components/charts',
        name: 'Charts',
        component: { render (c) { return c('router-view') }},
        children:[

            {
                path: '/components/chartjs',
                component: ChartJS,
                name: 'chart-js'
            }
        ]
    },
    {
        path : '/components/maps',
        name: 'Maps',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/maps/google-maps',
                component: GoogleMapsPage,
                name: 'google-maps-page'
            },
            {
                path: '/components/maps/leaflet-maps',
                component: LeafletMapsPage,
                name: 'leaflet-maps-page'
            }
        ]
    },
    /*
    {
        path : '/components/auth',
        name: 'auth',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/auth/login',
                component: Login,
                name: 'login',
                meta: {
                    default: false,
                    title: 'Login'
                }
            },
            {
                path: '/auth/register',
                component: Register,
                name: 'Register'
            },
            {
                path: '/auth/Page404',
                component: Page404,
                name: 'Page404'
            },
            {
                path: '/auth/Page500',
                component: Page500,
                name: 'Page500'
            }

        ]
    },
    */
    //Redirect to Home
    { path: '/redirect-me', redirect: { name: 'home' } },

    // 404 redirect to home
    { path: '*', redirect: { name: 'Page404', component: Page404 }  }
];