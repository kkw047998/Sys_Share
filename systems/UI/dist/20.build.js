webpackJsonp([20],{

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(266);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  created: async function created() {
    var _this = this;

    await _axios2.default.get('../user_info.php').then(function (response) {
      _this.userid = response.data;
    });
    await _axios2.default.get('../permission.php').then(function (response) {
      _this.permission = response.data[0].portal_level;
      if (_this.permission >= 2) {
        _this.card_cls = 'col-12';
      } else {
        _this.card_cls = 'col-12';
      }
      _this.ready_permission = true;
    });
  },
  mounted: function mounted() {
    window.onbeforeunload = function (e) {
      e = e || window.event;
      // 兼容IE8和Firefox 4之前的版本
      if (e) {
        e.returnValue = 'Changes you made may not be saved.';
      }
      // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      return 'Changes you made may not be saved.';
    };
    var tdy = new Date();
    var month_tdy = ('0' + (tdy.getMonth() + 1)).slice(-2);
    var date_tdy = ('0' + tdy.getDate()).slice(-2);
    var year_tdy = tdy.getFullYear();
    var formattedDate_tdy = year_tdy + '-' + month_tdy + '-' + date_tdy;

    var tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    var month = ('0' + (tmr.getMonth() + 1)).slice(-2);
    var date = ('0' + tmr.getDate()).slice(-2);
    var year = tmr.getFullYear();
    var formattedDate = year + '-' + month + '-' + date;
    this.min_date = formattedDate;
    this.req.dd = this.min_date;
    this.hall.rdate = this.min_date;
    this.req.ddt = this.min_date + ' 12:00';
    this.hall.rdatetime = formattedDate + ' 07:45';
  },
  destroyed: function destroyed() {
    window.onbeforeunload = null;
  },
  data: function data() {
    return {
      card_cls: '',
      req: {
        req_for: 'IT & Resources',
        descript: '',
        location: '',
        dd: '',
        dt: '00:00',
        ddt: ''
      },
      locker: {
        locker_form: 'F1',
        locker_class: 'A',
        locker_id: '1',
        locker_desc: ''
      },
      hall: {
        st_time: '07:45',
        ed_time: '12:00',
        rdate: '',
        etitle: '',
        rdatetime: ''
      },
      eq: {
        subdept: 'ITSD',
        it_item: '',
        r_item: '',
        item_other: '',
        item_desc: '',
        location: '',
        descript: ''

      },
      min_date: '',
      files: '',
      pdf: '',
      img_upload: '',
      submitted: false,
      reqdp: ['IT & Resources', 'Academic'],
      formlevel: ['F1', 'F2', 'F4', 'F5'],
      //formlevel:['F1','F2','F3','F4','F5'],  
      formclass: ['A', 'B', 'C', 'D', 'E'],
      userid: [],
      subreqdp: ['Resources', 'ITSD'],
      it_assets: ['IPAD Mount', 'Monitor', 'Computer', 'Peripherals', 'Amplifier', 'Matrix', 'Projector', 'Apple TV', 'Cabling', 'Visualizer', 'Others'],
      r_assets: ['Teacher Desk', 'IPAD Desk', 'Chairs', 'Projector Screen', 'Projector', 'Student Desk', 'Others'],
      currentform: 'General Request',
      special: ['General Request', 'Locker Report', 'Hall Support'],
      form_display: 'General Request',
      permission: 0,
      ready_permission: false
    };
  },

  methods: {
    addfile: function addfile() {
      var type = this.$refs.multimedia_info.files[0].type;
      if (type == 'image/jpeg') {
        this.files = this.$refs.multimedia_info.files[0];
      } else {
        this.$alert('Please upload image file with extension (.jpg / .jpeg)');
        this.$refs.multimedia_info.value = '';
      }
    },
    addfile_check: function addfile_check() {
      var type = this.$refs.check_info.files[0].type;
      if (type == 'image/jpeg') {
        this.files = this.$refs.check_info.files[0];
      } else {
        this.$alert('Please upload image file with extension (.jpg / .jpeg)');
        this.$refs.check_info.value = '';
      }
    },
    handleSubmit: function handleSubmit(scope) {
      var _this2 = this;

      this.submitted = true;
      var formData = new FormData();
      var ddt = this.req.ddt.split(' ');
      this.req.dd = ddt[0];
      this.req.dt = ddt[1];
      formData.append('Requester', this.userid[0]);
      formData.append('Request_for', this.req.req_for);
      formData.append('Description', this.req.descript);
      formData.append('img', this.files);
      formData.append('Location', this.req.location);
      formData.append('Due_date', this.req.dd);
      formData.append('Due_time', this.req.dt);
      _axios2.default.post('RequestPortal/backend/insert_new_request.php', formData).then(function (response) {
        if (response.data == 'OK') {
          _this2.$alert("Successfully Submitted Form");
          _this2.$router.push('PortalHome');
        } else {
          _this2.$alert(response.data);
        }
      });
    },
    handleSubmit_locker: function handleSubmit_locker(scope) {
      var _this3 = this;

      this.submitted = true;
      this.$validator.validateAll(scope).then(function (valid) {
        if (valid) {
          var formData = new FormData();
          formData.append('Requester', _this3.userid[0]);
          formData.append('Form', _this3.locker.locker_form);
          formData.append('Classroom', _this3.locker.locker_class);
          formData.append('LockerID', _this3.locker.locker_id);
          formData.append('Problem', _this3.locker.locker_desc);
          _axios2.default.post('RequestPortal/backend/insert_locker.php', formData);
          _this3.$alert("Successfully Submitted Form");
          _this3.$router.push('PortalHome');
        }
      });
    },
    handleSubmit_hall: function handleSubmit_hall(scope) {
      var _this4 = this;

      this.submitted = true;
      this.$validator.validateAll(scope).then(function (valid) {
        if (valid) {
          var formData = new FormData();
          var ddt = _this4.req.ddt.split(' ');
          _this4.hall.rdate = ddt[0];
          _this4.hall.st_time = ddt[1];
          formData.append('Requester', _this4.userid[0]);
          formData.append('start_time', _this4.hall.st_time);
          formData.append('end_time', _this4.hall.ed_time);
          formData.append('date', _this4.hall.rdate);
          formData.append('event', _this4.hall.etitle);
          formData.append('pdf', _this4.pdf);
          _axios2.default.post('RequestPortal/backend/insert_hall.php', formData);
          _this4.$alert("Successfully Submitted Form");
          _this4.$router.push('PortalHome');
        }
      });
    },
    handlecheck: function handlecheck(scope) {
      this.submitted = true;
      var formData = new FormData();
      formData.append('Requester', this.userid[0]);
      formData.append('Sub_dept', this.eq.subdept);
      formData.append('Item_category_it', this.eq.it_item);
      formData.append('Item_category_r', this.eq.r_item);
      formData.append('others', this.eq.item_desc);
      formData.append('problem', this.eq.descript);
      formData.append('img', this.files);
      formData.append('location', this.eq.location);
      _axios2.default.post('RequestPortal/backend/insert_check.php', formData);
      this.$router.push('PortalHome');
    },
    clear_item: function clear_item() {
      this.eq.it_item = '';
      this.eq.r_item = '';
      this.eq.item_desc = '';
    },
    switchform: function switchform(event) {
      this.currentform = this.form_display;
    },
    addfile_pdf: function addfile_pdf(event) {
      var type = this.$refs.pdf_file.files[0].type;
      if (type == 'application/pdf') {
        this.pdf = this.$refs.pdf_file.files[0];
      } else {
        this.$alert('Please upload pdf file with extension (.pdf)');
        this.$refs.pdf_file.value = '';
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("674d7849", content, true, {});

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".input-group-addon[data-v-ebe462be]{background-color:transparent;border-left:0}input[type=date][data-v-ebe462be]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.card[data-v-ebe462be]{max-height:90vh!important}", ""]);

// exports


/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("a7fc04c2", content, true, {});

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".date-time-picker{z-index:100!important}", ""]);

// exports


/***/ }),

/***/ 1328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"100%","height":"100%","position":"relative"},attrs:{"onbeforeunload":"return unloader()"}},[(_vm.ready_permission)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","padding-right":"0"}},[(_vm.currentform=='General Request')?_c('div',{class:_vm.card_cls},[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form1"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit('form1')}}},[_c('div',{staticClass:"card",staticStyle:{"height":"auto"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-9"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form_display),expression:"form_display"}],staticClass:"form-control-input",attrs:{"type":"radio","value":"General Request"},domProps:{"checked":_vm._q(_vm.form_display,"General Request")},on:{"change":[function($event){_vm.form_display="General Request"},_vm.switchform]}}),_vm._v(" "),_c('label',[_vm._v("General Request")])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-9"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.req_for),expression:"req.req_for"}],staticClass:"form-control-input",attrs:{"type":"radio","id":"ir","value":"IT & Resources"},domProps:{"checked":_vm._q(_vm.req.req_for,"IT & Resources")},on:{"change":function($event){return _vm.$set(_vm.req, "req_for", "IT & Resources")}}}),_vm._v(" "),_c('label',{attrs:{"for":"one"}},[_vm._v("IT & Resources")])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.descript),expression:"req.descript"}],staticClass:"form-control",attrs:{"id":"Description","name":"Description","rows":"2","cols":"80","placeholder":"Enter description","maxlength":"250","required":""},domProps:{"value":(_vm.req.descript)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "descript", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-9"},[_c('input',{ref:"multimedia_info",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"image/jpeg"},on:{"change":function($event){return _vm.addfile()}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"col-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.req.location),expression:"req.location"}],staticClass:"form-control",attrs:{"type":"text","id":"Location","name":"Location","placeholder":"Enter Location","maxlength":"15","required":""},domProps:{"value":(_vm.req.location)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.req, "location", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"col-9"},[_c('input',{attrs:{"type":"hidden","id":"date_limit","name":"date_limit","value":""}}),_vm._v(" "),_c('VueCtkDateTimePicker',{attrs:{"minuteInterval":5,"noHeader":true,"inline":true,"noKeyboard":true,"minDate":_vm.min_date,"buttonColor":'rgb(237,28,37)',"color":'rgb(237,28,37)',"format":'YYYY-MM-DD HH:mm',"id":'DateTimePicker',"label":'Select Date',"noButtonNow":true,"disabledWeekly":'0'},model:{value:(_vm.req.ddt),callback:function ($$v) {_vm.$set(_vm.req, "ddt", $$v)},expression:"req.ddt"}})],1)])]),_vm._v(" "),_vm._m(7)])])]):_vm._e(),_vm._v(" "),(_vm.currentform=='Locker Report')?_c('div',{class:_vm.card_cls},[_c('div',{staticClass:"card"},[_vm._m(8),_vm._v(" "),_c('form',{staticClass:"form-horizontal",attrs:{"id":"locker_form","data-vv-scope":"form2"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit_locker('form2')}}},[_c('div',{staticClass:"card-body card-block",staticStyle:{"height":"41.5vh!important"}},[_c('div',{staticClass:"row form-group"},[_vm._m(9),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form_display),expression:"form_display"}],staticClass:"form-control-input",attrs:{"type":"radio","value":"General Request"},domProps:{"checked":_vm._q(_vm.form_display,"General Request")},on:{"change":[function($event){_vm.form_display="General Request"},_vm.switchform]}}),_vm._v(" "),_c('label',[_vm._v("General Request")])]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"2em"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form_display),expression:"form_display"}],staticClass:"form-control-input",attrs:{"type":"radio","value":"Locker Report"},domProps:{"checked":_vm._q(_vm.form_display,"Locker Report")},on:{"change":[function($event){_vm.form_display="Locker Report"},_vm.switchform]}}),_vm._v(" "),_c('label',[_vm._v("Locker Report")])]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"2em"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form_display),expression:"form_display"}],staticClass:"form-control-input",attrs:{"type":"radio","value":"Hall Support"},domProps:{"checked":_vm._q(_vm.form_display,"Hall Support")},on:{"change":[function($event){_vm.form_display="Hall Support"},_vm.switchform]}}),_vm._v(" "),_c('label',[_vm._v("Hall Support")])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(10),_vm._v(" "),_c('div',{staticClass:"col col-md-9",staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',{staticClass:"col-4",staticStyle:{"padding-left":"0"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.locker_form),expression:"locker.locker_form"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"f"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "locker_form", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.formlevel),function(fl){return _c('option',[_vm._v(_vm._s(fl))])}),0)]),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-right":"0"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.locker_class),expression:"locker.locker_class"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"cls"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.locker, "locker_class", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.formclass),function(fcls){return _c('option',[_vm._v(_vm._s(fcls))])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(12),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.locker_id),expression:"locker.locker_id"}],staticClass:"form-control",attrs:{"type":"number","id":"locker_id","name":"locker_id"},domProps:{"value":(_vm.locker.locker_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.locker, "locker_id", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(13),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.locker.locker_desc),expression:"locker.locker_desc"}],staticClass:"form-control",attrs:{"id":"locker_descp","name":"locker_descp","rows":"2","cols":"80","placeholder":"Enter Description","required":""},domProps:{"value":(_vm.locker.locker_desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.locker, "locker_desc", $event.target.value)}}})])])]),_vm._v(" "),_vm._m(14)])])]):_vm._e(),_vm._v(" "),(_vm.currentform=='Hall Support')?_c('div',{class:_vm.card_cls},[_c('div',{staticClass:"card",staticStyle:{"height":"auto"}},[_vm._m(15),_vm._v(" "),_c('form',{staticClass:"form-horizontal",attrs:{"data-vv-scope":"form3"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit_hall('form3')}}},[_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(16),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('div',{staticStyle:{"display":"flex","flex-direction":"row"}},[_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form_display),expression:"form_display"}],staticClass:"form-control-input",attrs:{"type":"radio","value":"General Request"},domProps:{"checked":_vm._q(_vm.form_display,"General Request")},on:{"change":[function($event){_vm.form_display="General Request"},_vm.switchform]}}),_vm._v(" "),_c('label',[_vm._v("General Request")])]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"2em"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form_display),expression:"form_display"}],staticClass:"form-control-input",attrs:{"type":"radio","value":"Locker Report"},domProps:{"checked":_vm._q(_vm.form_display,"Locker Report")},on:{"change":[function($event){_vm.form_display="Locker Report"},_vm.switchform]}}),_vm._v(" "),_c('label',[_vm._v("Locker Report")])]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"2em"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form_display),expression:"form_display"}],staticClass:"form-control-input",attrs:{"type":"radio","value":"Hall Support"},domProps:{"checked":_vm._q(_vm.form_display,"Hall Support")},on:{"change":[function($event){_vm.form_display="Hall Support"},_vm.switchform]}}),_vm._v(" "),_c('label',[_vm._v("Hall Support")])])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(17),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.hall.etitle),expression:"hall.etitle"}],staticClass:"form-control",attrs:{"type":"text","name":"hall_desc","placeholder":"Enter Event Title","required":""},domProps:{"value":(_vm.hall.etitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.hall, "etitle", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(18),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('div',{staticClass:"flex"},[_vm._m(19),_vm._v(" "),_c('div',[_c('label',{staticStyle:{"font-size":"0.85em"}},[_vm._v("Step2: Upload IR03 Form")]),_vm._v(" "),_c('input',{ref:"pdf_file",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":".pdf","required":""},on:{"change":function($event){return _vm.addfile_pdf()}}})])])])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(20),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('VueCtkDateTimePicker',{attrs:{"minuteInterval":5,"noHeader":true,"inline":true,"noKeyboard":true,"minDate":_vm.min_date,"buttonColor":'rgb(237,28,37)',"color":'rgb(237,28,37)',"format":'YYYY-MM-DD HH:mm',"id":'DateTimePicker',"label":'Select Date',"noButtonNow":true},model:{value:(_vm.hall.rdatetime),callback:function ($$v) {_vm.$set(_vm.hall, "rdatetime", $$v)},expression:"hall.rdatetime"}})],1)]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(21),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('VueCtkDateTimePicker',{attrs:{"minuteInterval":5,"noHeader":true,"inline":true,"noKeyboard":true,"buttonColor":'rgb(237,28,37)',"color":'rgb(237,28,37)',"only-time":true,"format":'HH:mm',"id":'TimePicker',"label":'Select Time',"formatted":'HH:mm'},model:{value:(_vm.hall.ed_time),callback:function ($$v) {_vm.$set(_vm.hall, "ed_time", $$v)},expression:"hall.ed_time"}})],1)])]),_vm._v(" "),_vm._m(22)])])]):_vm._e(),_vm._v(" "),(_vm.permission>=2)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}]},[_c('form',{staticClass:"form-horizontal",attrs:{"id":"general_req_form","enctype":"multipart/form-data","data-vv-scope":"form4"},on:{"submit":function($event){$event.preventDefault();return _vm.handlecheck('form4')}}},[_c('div',{staticClass:"card",staticStyle:{"height":"auto"}},[_vm._m(23),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"row form-group"},[_vm._m(24),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.eq.subdept),expression:"eq.subdept"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"rf"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.eq, "subdept", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.clear_item]}},_vm._l((_vm.subreqdp),function(subdp){return _c('option',[_vm._v(_vm._s(subdp))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(25),_vm._v(" "),(_vm.eq.subdept=='ITSD')?_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.eq.it_item),expression:"eq.it_item"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"rf"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.eq, "it_item", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.it_assets),function(itac){return _c('option',[_vm._v(_vm._s(itac))])}),0)]):_vm._e(),_vm._v(" "),(_vm.eq.subdept=='Resources')?_c('div',{staticClass:"col-12 col-md-9"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.eq.r_item),expression:"eq.r_item"}],staticClass:"form-control select",attrs:{"name":"Request_for","id":"rf"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.eq, "r_item", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.r_assets),function(rac){return _c('option',[_vm._v(_vm._s(rac))])}),0)]):_vm._e()]),_vm._v(" "),(_vm.eq.r_item=='Others' || _vm.eq.it_item=='Others')?_c('div',{staticClass:"row form-group",model:{value:(_vm.eq.item_other),callback:function ($$v) {_vm.$set(_vm.eq, "item_other", $$v)},expression:"eq.item_other"}},[_vm._m(26),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.eq.item_desc),expression:"eq.item_desc"}],staticClass:"form-control",attrs:{"type":"text","id":"Location","name":"Location","placeholder":"Enter Item Description","maxlength":"150","required":""},domProps:{"value":(_vm.eq.item_desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.eq, "item_desc", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(27),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.eq.descript),expression:"eq.descript"}],staticClass:"form-control",attrs:{"id":"Description","name":"Description","rows":"2","cols":"80","placeholder":"Enter description","maxlength":"250","required":""},domProps:{"value":(_vm.eq.descript)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.eq, "descript", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(28),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{ref:"check_info",staticClass:"form-control-button",staticStyle:{"height":"100%"},attrs:{"type":"file","accept":"image/jpeg","capture":"camera"},on:{"change":function($event){return _vm.addfile_check()}}})])]),_vm._v(" "),_c('div',{staticClass:"row form-group"},[_vm._m(29),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.eq.location),expression:"eq.location"}],staticClass:"form-control",attrs:{"type":"text","id":"Location","name":"Location","placeholder":"Enter Location","maxlength":"15","required":""},domProps:{"value":(_vm.eq.location)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.eq, "location", $event.target.value)}}})])])]),_vm._v(" "),_vm._m(30)])])]):_vm._e()])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("General Request Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Request Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Request For")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Description")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Extra Info (Image)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Location"}},[_vm._v("Location")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Due_date"}},[_vm._v("Due Date & Time")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n          ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset","onclick":"document.getElementById('general_req_form').reset()"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\n          ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Locker Issues Report Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Request Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4",staticStyle:{"text-align":"right","padding-top":"0.2rem"}},[_c('label',{staticClass:" form-control-label"},[_vm._v("Class")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Locker ID")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Description")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n          ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\n          ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Hall Support Request Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Request Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Event Title")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Application Form")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticStyle:{"font-size":"0.85em"}},[_vm._v("Step1:")]),_vm._v(" "),_c('a',{staticClass:"button",staticStyle:{"margin-right":"3em"},attrs:{"href":"src/RequestPortal/pdf_files/IR03_base_form.pdf","target":"_blank"}},[_c('u',[_vm._v("Download IR03 Form")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"nf-email"}},[_vm._v("Date & Start time")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("End Time")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n          ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\n          ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Regular Request Form for IR Committee")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Sub-Department")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"select"}},[_vm._v("Item Category")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label"},[_vm._v("Item Description")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Problem Description")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Description"}},[_vm._v("Extra Info (Image)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"Location"}},[_vm._v("Location")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n          ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset","onclick":"document.getElementById('general_req_form').reset()"}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Reset\n          ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewRequest_vue__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewRequest_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewRequest_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewRequest_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewRequest_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ebe462be_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NewRequest_vue__ = __webpack_require__(1328);
function injectStyle (ssrContext) {
  __webpack_require__(1324)
  __webpack_require__(1326)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ebe462be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NewRequest_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ebe462be_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NewRequest_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=20.build.js.map