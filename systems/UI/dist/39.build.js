webpackJsonp([39],{

/***/ 1283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            new_item_list: [],
            view: 'form',
            blk: 'All',
            blks: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            index_sup: ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th'],
            mode: 'global',
            zindex: 'z-index:0',
            item_index: 0,
            hv_supplier: false,
            supplier_list: [],
            headers: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Name', value: 'name', sortable: false }, { text: 'Address', value: 'loc', sortable: false }, { text: 'Contact', value: 'contact_num', sortable: false }],
            hv_reimb: false,
            reimb_list: [],
            headers_reimb: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Tag', value: 'tag', sortable: false }, { text: 'Purchase', value: 'nature', sortable: false }, { text: 'Invoice', value: 'invoice_num', sortable: false }, { text: 'Fund Source', value: 'fundsrc', sortable: false }, { text: 'Total', value: 'total', sortable: false }],
            hv_proc: false,
            proc_list: [],
            headers_proc: [{ text: 'Action', value: 'action', sortable: false }, { text: 'Department', value: 'dept_full', sortable: false }, { text: 'Category', value: 'category', sortable: false }, { text: 'Title', value: 'record_descript', sortable: false }, { text: 'Tag', value: 'proc_id', sortable: false }],
            headers_response: [{ text: 'Item Code', value: 'item_code', sortable: false }, { text: 'Barcode', value: 'barcode', sortable: false }, { text: 'Item Name', value: 'item_eng_name', sortable: false }, { text: 'S/N', value: 'sn', sortable: false }],
            section: '',
            pdf: '',
            step: 0,
            ready: false,
            uploaded_pdf: false,
            pdf_url: '',
            pdf_ready: false,
            procurement: {
                unit_cost: [],
                reimb_id: '',
                proc_id: '',
                fundsrc: []
            },
            supplier: {
                name: '',
                supplier_contact: '',
                supplier_address: ''
            },
            purchase: {
                type: ['single'],
                purchase_date: '',
                warranty_exp: '',
                quantity: [1, 1, 1, 1, 1],
                total_cost: [],
                invoice: '',
                variance: ''
            },
            code: {
                barcode: [],
                sn: [],
                category: [''],
                sub_category: ['']
            },
            location: {
                grp_code: '',
                building_code: '',
                location_code: 'All',
                sub_location_code: ''
            },
            product: {
                eng_name: [],
                chi_name: [],
                eng_dp: [],
                chi_dp: [],
                brand: [],
                license: [],
                ownership: []
            },
            action: {
                remarks: '',
                stocktake: '',
                tag: '',
                maint_details: ''
            },
            category_list: [],
            sub_category_list: [],
            grp_list: [],
            max_id: 1
        };
    },
    created: async function created() {
        this.sub_category_list[this.item_index] = [];
        this.code.sn[this.item_index] = [];
        await this.load_filter();
        await this.check_entry();
        this.ready = true;
        document.getElementById('entry').value = '';
        document.getElementById('tmp_id').value = '';
    },
    mounted: async function mounted() {},

    methods: {
        check_entry: async function check_entry() {
            var entry = document.getElementById('entry').value;
            var id = document.getElementById('tmp_id').value;
            if (entry == 'pending_inventory') {
                await this.select_reimb(id);
            }
        },
        reset_flr: function reset_flr() {
            this.location.location_code = 'All';
        },
        rerender: function rerender() {
            this.$forceUpdate();
        },
        trigger: function trigger(target) {
            this.mode = target;
            document.getElementById('smbtn').click();
            this.mode = '';
        },
        append_sn: function append_sn() {
            var index = this.item_index;
            var i = 0;
            if (this.purchase.quantity[index] == '') {
                this.purchase.quantity[index] = 1;
            }
            this.purchase.quantity[index] = parseInt(this.purchase.quantity[index]);
            var max = this.purchase.quantity[index];
            for (i = 0; i < max; i++) {
                if (this.code.sn[i] == undefined) {
                    this.code.sn[i] = [];
                }
            }
            this.$forceUpdate();
        },
        prev_item: function prev_item() {
            this.item_index--;
        },
        next_item: function next_item() {
            var next = this.item_index + 1;
            if (this.code.category[next] == null) {
                this.code.category[next] = '';
                this.code.sub_category[next] = '';
                this.code.sn[next] = [];
                this.sub_category_list[next] = [];
                this.purchase.type[next] = 'single';
                this.purchase.quantity[next] = 1;
                this.procurement.fundsrc[next] = this.procurement.fundsrc[0];
                //this.procurement.unit_cost[next] = 0;
            }
            this.item_index++;
            if (this.max_id < this.item_index + 1) {
                this.max_id = this.item_index + 1;
            }
        },
        add_item_grp: function add_item_grp() {
            var next = this.item_index + 1;
            if (this.code.category[next] == null) {
                this.product.eng_name[next] = '';
                this.code.category[next] = '';
                this.code.sub_category[next] = '';
                this.code.sn[next] = [];
                this.sub_category_list[next] = [];
                this.purchase.type[next] = 'single';
                this.purchase.quantity[next] = 1;
                this.procurement.fundsrc[next] = this.procurement.fundsrc[0];
            }
            this.item_index++;
            this.max_id++;
        },
        return_pg: function return_pg() {
            this.$router.go(-1);
        },
        oncompleted: function oncompleted() {
            var _this = this;

            this.$confirm('Confirm existing current page?').then(function () {
                _this.$router.push('inventory_list');
            });
        },
        load_filter: async function load_filter() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('section', this.section);
            await axios.post('inventory/web/backend/filter_preload.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this2.category_list = response.data.category;
                    _this2.grp_list = response.data.grp_code;
                }
            });
        },
        fetch_sub_category: async function fetch_sub_category() {
            var _this3 = this;

            var index = this.item_index;
            var formData = new FormData();
            formData.append('category', this.code.category[index]);
            await axios.post('inventory/web/backend/fetch_sub_category.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this3.sub_category_list[index] = response.data;
                    _this3.$forceUpdate();
                    //this.code.sub_category = 'All';
                } else {
                    _this3.code.category[index] = 'All';
                    _this3.code.sub_category = 'All';
                    _this3.sub_category_list[index] = [];
                }
            });
        },
        search_inv_num: async function search_inv_num() {
            var _this4 = this;

            var formData = new FormData();
            formData.append('key', this.purchase.invoice);
            await axios.post('inventory/web/backend/search_reimb.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this4.reimb_list = response.data;
                    _this4.hv_reimb = true;
                } else {
                    _this4.hv_reimb = false;
                }
            });
        },
        close_overlay: function close_overlay() {
            this.hv_proc = false;
            this.hv_reimb = false;
            this.hv_supplier = false;
            this.zindex = 'z-index:0';
        },
        search_records: function search_records(type) {
            this.hv_supplier = false;
            this.hv_reimb = false;
            this.hv_proc = false;
            if (type == 'supplier') {
                this.search_supplier();
            } else if (type == 'reimb') {
                this.search_reimbursement();
            } else if (type == 'proc') {
                this.search_procurement();
            } else if (type = 'invoice') {
                this.search_inv_num();
            }
            this.zindex = 'z-index:9999!important';
        },
        addfile_pdf: function addfile_pdf(event) {
            var type = this.$refs.pdf_file.files[0].type;
            if (type == 'application/pdf') {
                this.pdf = this.$refs.pdf_file.files[0];
                this.pdf_url = URL.createObjectURL(this.pdf);
                this.pdf_ready = true;
                console.log(this.pdf_url);
            } else {
                this.$alert('Please upload pdf file with extension (.pdf)');
                this.$refs.pdf_file.value = '';
                this.pdf_ready = false;
            }
        },
        change_step: function change_step(mode) {
            console.log(this.max_id);
            var i = 0;
            var ready = true;
            if (mode == 'prev') {
                if (this.step > 0) {
                    this.step--;
                }
            } else if (mode == 'next') {
                if (this.step < 3) {
                    if (this.step == 1) {
                        for (i = 0; i < this.max_id; i++) {
                            console.log(this.max_id);
                            if (this.product.brand[i] == null || this.product.brand[i] == '' || this.product.brand[i] == undefined) {
                                ready = false;
                            }
                        }
                    } else {
                        ready = true;
                    }
                    if (ready) {
                        this.step++;
                    } else {
                        this.$alert('Please fill in all info for all items.');
                    }
                }
            }
        },
        next_step: function next_step() {
            var mode = this.mode;
            var i = 0;
            var ready = true;
            if (mode == 'inner_item') {
                this.add_item_grp();
            } else if (mode == 'next_item') {
                this.next_item();
            } else {
                if (this.step < 2) {
                    if (this.step == 1) {
                        for (i = 0; i < this.max_id; i++) {
                            if (this.product.brand[i] == null || this.product.brand[i] == '' || this.product.brand[i] == undefined) {
                                ready = false;
                            }
                        }
                        if (ready) {
                            this.step++;
                        } else {
                            this.$alert('Please fill in all info for all items.');
                        }
                    } else if (this.purchase.purchase_date == '') {
                        this.$alert('Please select purchase date');
                    } else {
                        this.step++;
                    }
                } else if (this.step == 2) {
                    this.handleSubmit();
                }
            }
        },
        handleSubmit: async function handleSubmit() {
            var _this5 = this;

            var i = 0;
            var j = 0;
            var k = 0;
            var formData = new FormData();
            //Pg1
            formData.append('pdf', this.pdf);
            formData.append('section', this.section);
            formData.append('proc_id', this.procurement.proc_id);
            formData.append('reimb_id', this.procurement.reimb_id);
            formData.append('invoice', this.purchase.invoice);
            formData.append('supplier_name', this.supplier.name);
            formData.append('supplier_contact', this.supplier.supplier_contact);
            formData.append('supplier_address', this.supplier.supplier_address);
            formData.append('purchase_date', this.purchase.purchase_date);
            //Pg2          
            formData.append('item_set', this.max_id);
            for (i = 0; i < this.max_id; i++) {
                if (this.product.eng_name[i] != undefined && this.product.eng_name[i] != '' && this.product.eng_name[i] != null) {
                    formData.append('type_' + i, this.purchase.type[i]);
                    formData.append('category_' + i, this.code.category[i]);
                    formData.append('subcategory_' + i, this.code.sub_category[i]);
                    formData.append('brand_' + i, this.product.brand[i]);
                    formData.append('engname_' + i, this.product.eng_name[i]);
                    formData.append('engdp_' + i, this.product.eng_dp[i]);
                    formData.append('chiname_' + i, this.product.chi_name[i]);
                    formData.append('chidp_' + i, this.product.chi_dp[i]);
                    formData.append('fundsrc_' + i, this.procurement.fundsrc[i]);
                    formData.append('quantity_' + i, this.purchase.quantity[i]);
                    if (this.purchase.type[i] == 'single') {
                        formData.append('unitcost_' + i, this.procurement.unit_cost[i]);
                    } else {
                        formData.append('totalcost_' + i, this.purchase.total_cost[i]);
                    }
                    j = parseInt(this.purchase.quantity[i]);
                    k = 0;
                    for (k = 0; k < j; k++) {
                        if (this.purchase.type[i] == 'single') {
                            formData.append('sn_' + i + '_' + k, this.code.sn[i][k]);
                        }
                    }
                }
            }
            //Pg3
            formData.append('grp_code', this.location.grp_code);
            formData.append('building_code', this.location.building_code);
            formData.append('location_code', this.location.location_code);
            formData.append('sublocation_code', this.location.sub_location_code);
            formData.append('remarks', this.action.remarks);
            formData.append('warranty', this.purchase.warranty_exp);
            await axios.post('inventory/web/backend/insert_new_item.php', formData).then(function (response) {
                _this5.$alert('Successfully Submitted Record');
                console.log(response.data);
                _this5.new_item_list = response.data;
                _this5.view = 'completed';
                //this.$router.push('inventory_list');
            });
        },
        search_reimbursement: async function search_reimbursement() {
            var _this6 = this;

            if (this.procurement.reimb_id != '') {
                var formData = new FormData();
                formData.append('key', this.procurement.reimb_id);
                await axios.post('inventory/web/backend/search_reimb.php', formData).then(function (response) {
                    if (response.data != 'empty') {
                        _this6.reimb_list = response.data;
                        _this6.hv_reimb = true;
                    } else {
                        _this6.hv_reimb = false;
                    }
                });
                this.zindex = 'z-index:9999!important';
            }
        },
        search_procurement: async function search_procurement() {
            var _this7 = this;

            if (this.procurement.proc_id != '') {
                var formData = new FormData();
                formData.append('key', this.procurement.proc_id);
                await axios.post('inventory/web/backend/search_procurement.php', formData).then(function (response) {
                    if (response.data != 'empty') {
                        _this7.proc_list = response.data;
                        _this7.hv_proc = true;
                    } else {
                        _this7.hv_proc = false;
                    }
                });
                this.zindex = 'z-index:9999!important';
            }
        },
        search_supplier: async function search_supplier() {
            var _this8 = this;

            if (this.supplier.name != '') {
                var formData = new FormData();
                formData.append('key', this.supplier.name);
                await axios.post('inventory/web/backend/search_supplier.php', formData).then(function (response) {
                    if (response.data != 'empty') {
                        _this8.supplier_list = response.data;
                        _this8.hv_supplier = true;
                    } else {
                        _this8.hv_supplier = false;
                    }
                });
                this.zindex = 'z-index:9999!important';
            }
        },
        select_sup: function select_sup(name, loc, contact) {
            this.supplier.name = name;
            this.supplier.supplier_contact = contact;
            this.supplier.supplier_address = loc;
            this.zindex = 'z-index:0';
            this.hv_supplier = false;
        },
        select_reimb: async function select_reimb(id) {
            var _this9 = this;

            var formData = new FormData();
            formData.append('id', id);
            await axios.post('inventory/web/backend/select_reimb.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    var i = 0;
                    _this9.pdf_url = response.data[0].pdf[0];
                    _this9.procurement.reimb_id = response.data[0].tag;
                    _this9.procurement.proc_id = response.data[0].proc_id;
                    _this9.purchase.invoice = response.data[0].invoice_num;
                    for (i = 0; i < response.data.length; i++) {
                        _this9.purchase.total_cost[i] = parseFloat(response.data[i].amount);
                        _this9.procurement.unit_cost[i] = parseFloat(response.data[i].amount) / parseInt(_this9.purchase.quantity[i]);
                        _this9.product.eng_name[i] = response.data[i].nature;
                        _this9.product.eng_dp[i] = response.data[i].reason;
                        _this9.procurement.fundsrc[i] = response.data[i].fundsrc;
                        if (response.data[0].receiver_type == 'company') {
                            _this9.supplier.name = response.data[0].receiver_name;
                            _this9.supplier.supplier_address = response.data[0].address;
                            _this9.supplier.supplier_contact = response.data[0].contact;
                        }
                        _this9.max_id++;
                    }
                    _this9.pdf_ready = true;
                }
            });
            this.max_id--;
            this.zindex = 'z-index:0';
            this.hv_reimb = false;
        },
        select_proc: async function select_proc(proc_id, dept, record_descript, category) {
            this.procurement.proc_id = proc_id;
            this.zindex = 'z-index:0';
            this.hv_proc = false;
            await this.proc_reimb(proc_id);
        },
        proc_reimb: async function proc_reimb(proc_id) {
            var _this10 = this;

            var formData = new FormData();
            formData.append('proc_id', proc_id);
            await axios.post('inventory/web/backend/search_proc_reimb.php', formData).then(function (response) {
                if (response.data != 'empty') {
                    _this10.reimb_list = response.data;
                    _this10.hv_reimb = true;
                } else {
                    _this10.hv_reimb = false;
                }
            });
            this.zindex = 'z-index:9999!important';
        }
    }
};

/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1619);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3b465e4f", content, true, {});

/***/ }),

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".px0[data-v-3a137f1f]{padding-left:0;padding-right:0}.flex[data-v-3a137f1f]{display:flex;flex-direction:row}.framewrapper[data-v-3a137f1f]{height:77.25vh!important;padding:0;width:100%}.scroll_frame[data-v-3a137f1f]{height:77vh!important;overflow-y:hidden!important;width:100%}.ios_frame[data-v-3a137f1f]{height:76.5vh!important;overflow-y:hidden!important;padding:0}.pdf[data-v-3a137f1f]{height:70vh!important}.overlay_bar[data-v-3a137f1f]{width:100%;height:1.5rem;background-color:#ee1c25;color:#fff;font-weight:700;font-size:1rem;padding:.25rem auto .25rem .5rem}label[data-v-3a137f1f]{padding-top:.35rem}.indicator[data-v-3a137f1f]{padding-top:.6rem;margin-right:1rem;color:#ee1c25;margin-left:auto}.col-12.flex[data-v-3a137f1f]{margin-bottom:.45rem}.col-12.flex[data-v-3a137f1f]:last-child{margin-bottom:0}.inner_overlay[data-v-3a137f1f]{position:relative;margin-top:0;width:80%;margin-left:10%;margin-bottom:5%}.cross_box[data-v-3a137f1f]{position:absolute;right:0;top:0}.fa-window-close[data-v-3a137f1f]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-3a137f1f]:hover{color:#fff}.item_wrapper[data-v-3a137f1f]{height:70vh!important}.search_table[data-v-3a137f1f]{position:absolute;bottom:5%}.item_indicator[data-v-3a137f1f]{font-weight:400;padding-left:.3rem;padding-right:.3rem;margin-left:auto;color:#1a73e8;cursor:pointer;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s}.item_indicator[data-v-3a137f1f]:hover{background-color:#1a73e8;color:hsla(0,0%,100%,.8)}.item_indicator_wrapper[data-v-3a137f1f]{font-weight:400;padding-left:.3rem;padding-right:.3rem;color:#1a73e8;margin-left:auto}.direction_indicator[data-v-3a137f1f]{cursor:pointer;transition:.3s;width:1.5rem;-webkit-transition:.3s;-moz-transition:.3s}.direction_indicator[data-v-3a137f1f]:hover{background-color:#1a73e8;color:hsla(0,0%,100%,.8)}.item_title[data-v-3a137f1f]{color:rgba(0,0,0,.65);font-weight:400;text-transform:capitalize}.flex_container[data-v-3a137f1f]{justify-content:space-between;display:flex;flex-wrap:wrap;overflow-y:auto;max-height:12vh;z-index:100}.child_flex[data-v-3a137f1f]{flex-grow:1}div.col-8.px0.flex_container>div.child_flex>input[type=text].form-control[data-v-3a137f1f]{margin-bottom:.4rem}.left[data-v-3a137f1f]{margin-right:.25rem!important}.right[data-v-3a137f1f]{margin-left:.25rem!important}", ""]);

// exports


/***/ }),

/***/ 1620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"position":"relative"}},[(_vm.view=='completed')?_c('div',{staticClass:"col-12 px0",staticStyle:{"z-index":"15"}},[_c('div',{staticClass:"col-12 px0",staticStyle:{"width":"100%!important"}},[_c('div',{staticClass:"cross_box"},[_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.oncompleted}})]),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_response,"items":_vm.new_item_list,"rows-per-page-items":[15]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"}},[_c('td',[_vm._v(_vm._s(props.item.item_code))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.barcode))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.item_eng_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.sn))])])]}}],null,false,1126801442)})],1)]):_vm._e(),_vm._v(" "),(_vm.view=='form')?_c('form',{staticClass:"col-12 px0",on:{"submit":function($event){$event.preventDefault();return _vm.next_step($event)}}},[_c('div',{staticClass:"card",staticStyle:{"height":"auto","margin-top":"0","margin-bottom":"0.4rem"}},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("New Inventory Record : Step "+_vm._s((_vm.step+1))+" of 3")])]),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"col-12 flex px0"},[(_vm.step==0)?_c('div',{staticClass:"col-6"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 px0 item_wrapper",staticStyle:{"border":"1px solid rgb(153,153,153)","padding-top":"0.5rem"}},[_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Select Invoice")]),_vm._v(" "),(!_vm.pdf_ready)?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{ref:"pdf_file",staticClass:"form-control",attrs:{"type":"file","accept":"application/pdf","required":!_vm.pdf_ready},on:{"change":_vm.addfile_pdf}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Select Section")]),_vm._v(" "),(_vm.pdf_ready&&(_vm.section==''))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.section),expression:"section"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.section=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.load_filter]}},[_c('option',{attrs:{"disabled":"","value":""}},[_vm._v("Choose section below")]),_vm._v(" "),_c('option',{attrs:{"value":"S"}},[_vm._v("Secondary Section")]),_vm._v(" "),_c('option',{attrs:{"value":"P"}},[_vm._v("Primary Section")]),_vm._v(" "),_c('option',{attrs:{"value":"K"}},[_vm._v("Kindergarten Section")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.proc_id),expression:"procurement.proc_id"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Procurement ID"},domProps:{"value":(_vm.procurement.proc_id)},on:{"keyup":function($event){return _vm.search_records('proc')},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "proc_id", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.reimb_id),expression:"procurement.reimb_id"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Reimbursement ID"},domProps:{"value":(_vm.procurement.reimb_id)},on:{"keyup":function($event){return _vm.search_records('reimb')},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement, "reimb_id", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Invoice Number")]),_vm._v(" "),((_vm.pdf_ready)&&(_vm.section!='')&&(_vm.purchase.invoice==''))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.invoice),expression:"purchase.invoice"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Invoice Number","required":""},domProps:{"value":(_vm.purchase.invoice)},on:{"keyup":function($event){return _vm.search_records('invoice')},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase, "invoice", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Supplier")]),_vm._v(" "),((_vm.pdf_ready)&&(_vm.section!='')&&(_vm.supplier.name==''))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.supplier.name),expression:"supplier.name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Supplier","required":""},domProps:{"value":(_vm.supplier.name)},on:{"keyup":function($event){return _vm.search_records('supplier')},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.supplier, "name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Contact Number")]),_vm._v(" "),((_vm.pdf_ready)&&(_vm.section!='')&&(_vm.supplier.supplier_contact==''))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.supplier.supplier_contact),expression:"supplier.supplier_contact"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Contact Number","required":""},domProps:{"value":(_vm.supplier.supplier_contact)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.supplier, "supplier_contact", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Address")]),_vm._v(" "),((_vm.pdf_ready)&&(_vm.section!='')&&(_vm.supplier.supplier_address==''))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.supplier.supplier_address),expression:"supplier.supplier_address"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Address","required":""},domProps:{"value":(_vm.supplier.supplier_address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.supplier, "supplier_address", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Purchase Date")]),_vm._v(" "),((_vm.pdf_ready)&&(_vm.section!='')&&(_vm.purchase.purchase_date==''))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('VueCtkDateTimePicker',{attrs:{"noHeader":true,"noKeyboard":true,"minDate":_vm.min_date,"buttonColor":'rgb(237,28,37)',"color":'rgb(237,28,37)',"format":'YYYY-MM-DD',"formatted":'ll',"id":'DatePicker',"onlyDate":true,"label":'Select Date',"noButtonNow":true},model:{value:(_vm.purchase.purchase_date),callback:function ($$v) {_vm.$set(_vm.purchase, "purchase_date", $$v)},expression:"purchase.purchase_date"}})],1)])])]):_vm._e(),_vm._v(" "),(_vm.step==1)?_c('div',{staticClass:"col-6"},[_c('div',{staticClass:"inner_item col-12 px0"},[_c('div',{staticClass:"overlay_bar",staticStyle:{"padding-left":"0.5rem!important"}},[_vm._v("\n                            Product Information\n                        ")]),_vm._v(" "),_c('div',{staticClass:"col-12 px0 item_wrapper",staticStyle:{"border":"1px solid rgb(153,153,153)","padding-top":"0.5rem"}},[_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-7 flex px0"},[_c('u',{staticClass:"item_title"},[_vm._v(_vm._s(_vm.product.eng_name[_vm.item_index]))])]),_vm._v(" "),_c('div',{staticClass:"col-5 px0 flex"},[((_vm.product.eng_name[1]!=undefined))?_c('div',{staticClass:"item_indicator_wrapper"},[(_vm.item_index>0)?_c('i',{staticClass:"fa fa-angle-left direction_indicator",staticStyle:{"padding-right":"0.5rem","text-align":"right"},on:{"click":_vm.prev_item}}):_vm._e(),_vm._v("                                       \n                                        Item Set "+_vm._s((_vm.item_index+1))+" of "+_vm._s(_vm.max_id)+"\n                                        "),_c('i',{staticClass:"fa fa-angle-right direction_indicator",staticStyle:{"padding-left":"0.5rem","text-align":"left"},on:{"click":function($event){return _vm.trigger('next_item')}}})]):_vm._e(),_vm._v(" "),((_vm.product.eng_name[1]==undefined)&&(_vm.item_index==0))?_c('div',{staticClass:"item_indicator",on:{"click":function($event){return _vm.trigger('inner_item')}}},[_c('i',{staticClass:"fa fa-plus",staticStyle:{"margin-right":"0.25rem"}}),_vm._v("More Item\n                                    ")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.type[_vm.item_index]),expression:"purchase.type[item_index]"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.purchase.type, _vm.item_index, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"single"}},[_vm._v("Single")]),_vm._v(" "),_c('option',{attrs:{"value":"bulk"}},[_vm._v("Bulk")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Item Category")]),_vm._v(" "),(_vm.code.category[_vm.item_index]=='')?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.code.category[_vm.item_index]),expression:"code.category[item_index]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.code.category, _vm.item_index, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.fetch_sub_category]}},[_c('option',{attrs:{"value":""}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.category_list.length),function(l){return _c('option',{domProps:{"value":_vm.category_list[l-1].main_category}},[_vm._v(_vm._s(_vm.category_list[l-1].main_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Sub-Category")]),_vm._v(" "),(_vm.code.sub_category[_vm.item_index]=='')?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.code.sub_category[_vm.item_index]),expression:"code.sub_category[item_index]"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.code.sub_category, _vm.item_index, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":""}},[_vm._v("All")]),_vm._v(" "),_vm._l((_vm.sub_category_list[_vm.item_index].length),function(sl){return _c('option',{domProps:{"value":_vm.sub_category_list[_vm.item_index][sl-1].sub_category}},[_vm._v(_vm._s(_vm.sub_category_list[_vm.item_index][sl-1].sub_cat_name))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Brand")]),_vm._v(" "),((_vm.product.brand[_vm.item_index]=='')||(_vm.product.brand[_vm.item_index]==undefined))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.brand[_vm.item_index]),expression:"product.brand[item_index]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Brand of Product","required":""},domProps:{"value":(_vm.product.brand[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product.brand, _vm.item_index, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Item Name")]),_vm._v(" "),((_vm.product.eng_name[_vm.item_index]=='')||(_vm.product.eng_name[_vm.item_index]==undefined))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.eng_name[_vm.item_index]),expression:"product.eng_name[item_index]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Name of Product","required":""},domProps:{"value":(_vm.product.eng_name[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product.eng_name, _vm.item_index, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.eng_dp[_vm.item_index]),expression:"product.eng_dp[item_index]"}],staticClass:"form-control",attrs:{"placeholder":"Product Description"},domProps:{"value":(_vm.product.eng_dp[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product.eng_dp, _vm.item_index, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.chi_name[_vm.item_index]),expression:"product.chi_name[item_index]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"物品名稱"},domProps:{"value":(_vm.product.chi_name[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product.chi_name, _vm.item_index, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.chi_dp[_vm.item_index]),expression:"product.chi_dp[item_index]"}],staticClass:"form-control",attrs:{"placeholder":"物品描述"},domProps:{"value":(_vm.product.chi_dp[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product.chi_dp, _vm.item_index, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Fund Source")]),_vm._v(" "),((_vm.procurement.fundsrc[_vm.item_index]=='')||(_vm.procurement.fundsrc[_vm.item_index]==null))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.fundsrc[_vm.item_index]),expression:"procurement.fundsrc[item_index]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Fund Source","required":""},domProps:{"value":(_vm.procurement.fundsrc[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement.fundsrc, _vm.item_index, $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.quantity[_vm.item_index]),expression:"purchase.quantity[item_index]"}],staticClass:"form-control",attrs:{"type":"number","min":"1"},domProps:{"value":(_vm.purchase.quantity[_vm.item_index])},on:{"change":_vm.append_sn,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase.quantity, _vm.item_index, $event.target.value)}}})])]),_vm._v(" "),(_vm.purchase.type[_vm.item_index]=='bulk')?_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Total Cost")]),_vm._v(" "),((_vm.purchase.total_cost[_vm.item_index]=='')||(_vm.purchase.total_cost[_vm.item_index]==null))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.purchase.total_cost[_vm.item_index]),expression:"purchase.total_cost[item_index]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","placeholder":"Enter Total Cost","min":"0","required":""},domProps:{"value":(_vm.purchase.total_cost[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.purchase.total_cost, _vm.item_index, $event.target.value)}}})])]):_vm._e(),_vm._v(" "),(_vm.purchase.type[_vm.item_index]=='single')?_c('div',{staticClass:"col-12 flex"},[_vm._m(8),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.procurement.unit_cost[_vm.item_index]),expression:"procurement.unit_cost[item_index]"}],staticClass:"form-control",attrs:{"type":"number","step":"0.01","placeholder":"Enter Unit Cost","min":"0","required":""},domProps:{"value":(_vm.procurement.unit_cost[_vm.item_index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.procurement.unit_cost, _vm.item_index, $event.target.value)}}})])]):_vm._e(),_vm._v(" "),(_vm.purchase.type[_vm.item_index]=='single')?_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Serial Number")]),_vm._v(" "),(((_vm.product.eng_name[_vm.item_index]!='')&&(_vm.product.eng_name[_vm.item_index]!=undefined))&&((_vm.code.sn[_vm.item_index][0]=='')||(_vm.code.sn[_vm.item_index][0]==undefined)))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0 flex_container"},_vm._l((parseInt(_vm.purchase.quantity[_vm.item_index])),function(child_items){return _c('div',{staticClass:"child_flex col-12 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.code.sn[_vm.item_index][(child_items-1)]),expression:"code.sn[item_index][(child_items-1)]"}],staticClass:"form-control",attrs:{"type":"text","placeholder":'S/N for item: '+child_items,"required":""},domProps:{"value":(_vm.code.sn[_vm.item_index][(child_items-1)])},on:{"change":_vm.rerender,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.code.sn[_vm.item_index], (child_items-1), $event.target.value)}}})])}),0)]):_vm._e()])])]):_vm._e(),_vm._v(" "),(_vm.step==2)?_c('div',{staticClass:"col-6"},[_vm._m(9),_vm._v(" "),_c('div',{staticClass:"col-12 px0 item_wrapper",staticStyle:{"border":"1px solid rgb(153,153,153)","padding-top":"0.5rem"}},[(_vm.purchase.type[_vm.item_index]=='single')?_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Group Code")]),_vm._v(" "),(_vm.location.grp_code=='')?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.grp_code),expression:"location.grp_code"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.location, "grp_code", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","disabled":""}},[_vm._v("Choose below")]),_vm._v(" "),_vm._l((_vm.grp_list),function(grps){return _c('option',{domProps:{"value":grps.groupcode}},[_vm._v(_vm._s(grps.group_description))])})],2)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Block")]),_vm._v(" "),(_vm.location.building_code=='')?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.building_code),expression:"location.building_code"}],staticClass:"form-control select",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.location, "building_code", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.reset_flr]}},[_c('option',{attrs:{"value":""}},[_vm._v("All Blocks")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_vm._l((8),function(n){return _c('option',{domProps:{"value":_vm.blks[n-1]}},[_vm._v("Block "+_vm._s(_vm.blks[n-1]))])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")]),_vm._v(" "),_c('option',{attrs:{"value":"OC"}},[_vm._v("Common Area")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(10),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.location_code),expression:"location.location_code"}],staticClass:"form-control select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.location, "location_code", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"All"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"WHC"}},[_vm._v("Whole Campus")]),_vm._v(" "),_c('option',{attrs:{"value":"G"}},[_vm._v("Ground floor")]),_vm._v(" "),_vm._l((8),function(f){return _c('option',{domProps:{"value":_vm.location.building_code+f}},[_vm._v(" "+_vm._s(f)),_c('sup',[_vm._v(_vm._s(_vm.index_sup[f-1]))]),_vm._v(" floor")])}),_vm._v(" "),_c('option',{attrs:{"value":"SP"}},[_vm._v("Special")])],2)])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Room Code")]),_vm._v(" "),(_vm.location.sub_location_code=='')?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.location.sub_location_code),expression:"location.sub_location_code"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Room Code","required":""},domProps:{"value":(_vm.location.sub_location_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.location, "sub_location_code", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_vm._m(11),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.action.remarks),expression:"action.remarks"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Remarks"},domProps:{"value":(_vm.action.remarks)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.action, "remarks", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex"},[_c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Warranty Expire")]),_vm._v(" "),((_vm.pdf_ready)&&(_vm.section!='')&&(_vm.purchase.purchase_date==''))?_c('i',{staticClass:"fa fa-hand-o-right indicator"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-8 px0"},[_c('VueCtkDateTimePicker',{attrs:{"noHeader":true,"noKeyboard":true,"minDate":_vm.min_date,"buttonColor":'rgb(237,28,37)',"color":'rgb(237,28,37)',"formatted":'ll',"format":'YYYY-MM-DD',"id":'DatePicker',"onlyDate":true,"label":'Select Date',"noButtonNow":true},model:{value:(_vm.purchase.warranty_exp),callback:function ($$v) {_vm.$set(_vm.purchase, "warranty_exp", $$v)},expression:"purchase.warranty_exp"}})],1)])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-6 out_wrapper"},[_vm._m(12),_vm._v(" "),_c('div',{staticClass:"col-12 framewrapper pdf"},[_c('div',{staticClass:"scroll_frame pdf"},[(_vm.pdf_ready)?_c('iframe',{staticClass:"col-12 ios_frame pdf",attrs:{"src":_vm.pdf_url}}):_vm._e()])])])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[(_vm.step>0)?_c('button',{staticClass:"btn btn-danger btn-sm",staticStyle:{"margin-left":"5%","float":"left"},attrs:{"type":"button"},on:{"click":function($event){return _vm.change_step('prev')}}},[_c('i',{staticClass:"fa fa-arrow-left"}),_vm._v(" Previous Step\n            ")]):_vm._e(),_vm._v(" "),(_vm.step==0)?_c('button',{staticClass:"btn btn-danger btn-sm",staticStyle:{"margin-left":"5%","float":"left"},attrs:{"type":"button"},on:{"click":_vm.return_pg}},[_c('i',{staticClass:"fa fa-undo"}),_vm._v(" Return\n            ")]):_vm._e(),_vm._v(" "),(_vm.step<2)?_c('button',{staticClass:"btn btn-primary btn-sm",staticStyle:{"margin-right":"5%","float":"right"},attrs:{"type":"submit","id":"smbtn"}},[_vm._v("\n                Next Step "),_c('i',{staticClass:"fa fa-arrow-right"})]):_vm._e(),_vm._v(" "),(_vm.step==2)?_c('button',{staticClass:"btn btn-primary btn-sm",staticStyle:{"margin-right":"5%","float":"right"},attrs:{"type":"submit","id":"smbtn"}},[_vm._v("\n                Submit "),_c('i',{staticClass:"fa fa-paper-plane"})]):_vm._e()])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"search_table col-12",style:(_vm.zindex)},[_c('div',{staticClass:"inner_overlay"},[_c('div',{staticClass:"cross_box"},[_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})]),_vm._v(" "),(_vm.hv_supplier)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.supplier_list,"rows-per-page-items":[5]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_sup(props.item.name,props.item.loc,props.item.contact_num)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.loc))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.contact_num))])])]}}],null,false,85396573)}):_vm._e(),_vm._v(" "),(_vm.hv_reimb)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_reimb,"items":_vm.reimb_list,"rows-per-page-items":[5]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_reimb(props.item.id)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.tag))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.nature))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.invoice_num))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.fundsrc))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.total))])])]}}],null,false,3855798013)}):_vm._e(),_vm._v(" "),(_vm.hv_proc)?_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers_proc,"items":_vm.proc_list,"rows-per-page-items":[5]},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('tr',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.select_proc(props.item.proc_id,props.item.dept,props.item.record_descript,props.item.category)}}},[_c('td',[_vm._v("Select")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.dept_full))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.category))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.record_descript))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.proc_id))])])]}}],null,false,3224055247)}):_vm._e()],1)])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner_item col-12 px0"},[_c('div',{staticClass:"overlay_bar",staticStyle:{"padding-left":"0.5rem!important"}},[_vm._v("\n                            Pruchase Information\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Procurement ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Reimbursement ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Purchase Type")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Item Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("物品名稱")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("物品描述")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Quantity")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 flex px0"},[_c('label',[_vm._v("Unit Cost")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner_item col-12 px0"},[_c('div',{staticClass:"overlay_bar",staticStyle:{"padding-left":"0.5rem!important"}},[_vm._v("\n                            Extra Information\n                        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("Floor Code")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4 px0"},[_c('label',[_vm._v("Remarks")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inner_item"},[_c('div',{staticClass:"overlay_bar",staticStyle:{"padding-left":"0.5rem!important"}},[_vm._v("\n                            Invoice Preview\n                        ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_insert_item_vue__ = __webpack_require__(1283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_insert_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_insert_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_insert_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_insert_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a137f1f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_insert_item_vue__ = __webpack_require__(1620);
function injectStyle (ssrContext) {
  __webpack_require__(1618)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3a137f1f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_insert_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a137f1f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_insert_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=39.build.js.map