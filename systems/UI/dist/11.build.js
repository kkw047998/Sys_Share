webpackJsonp([11],{

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1121);
var global = __webpack_require__(24);
var hide = __webpack_require__(33);
var Iterators = __webpack_require__(42);
var TO_STRING_TAG = __webpack_require__(13)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(1122);
var step = __webpack_require__(1123);
var Iterators = __webpack_require__(42);
var toIObject = __webpack_require__(66);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(271)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 1122:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 1123:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(1163);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'set',
    props: ['name', 'sets'],
    methods: {
        iconClass: function iconClass(icon) {
            return this.set.prefix + ' ' + this.set.prefix + '-' + icon;
        }
    },
    computed: {
        set: function set() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.sets), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var set = _step.value;

                    if (set.href === this.name) return set;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        validatedLists: function validatedLists() {
            var _this = this;

            if (this.selector === '') {
                return this.set.lists;
            }
            var result = [{ name: 'Icons Founded', icons: [] }];
            this.set.lists.forEach(function (list) {
                list.icons.forEach(function (icon) {
                    if (icon.match(_this.selector)) {
                        result[0].icons.push(icon);
                    }
                });
            });
            return result;
        }
    },
    data: function data() {
        return {
            selector: '',
            iconSize: 30,
            slider: {
                formatter: function formatter(v) {
                    return v + 'px';
                },
                height: 2,
                direction: 'horizontal',
                min: 20,
                max: 40,
                interval: 1,
                speed: 0.5
            }
        };
    }
};

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("a85a9c12", content, true, {});

/***/ }),

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".Set .header{background-color:#fff;padding:2rem 0;margin-bottom:2rem}.Set .header .header-text{text-align:left;padding-left:2.5rem}.Set .header .header-text h2{margin-bottom:0}.Set .back-to-fonts{font-size:25px;padding-right:20px}.Set .icons .icon-grid-container{padding:.5rem 0 5rem;margin:0 0 2rem;text-align:center;height:6rem;position:relative;min-height:1px;float:left;width:200px;height:80px}.Set .icons .icon-grid-container:hover{background-color:#20a8d8;color:#fff;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1164), __esModule: true };

/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1120);
__webpack_require__(270);
module.exports = __webpack_require__(1165);


/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(34);
var get = __webpack_require__(277);
module.exports = __webpack_require__(41).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Set"},[_c('card',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"header-text col-lg-4"},[_c('h2',[_vm._v(_vm._s(_vm.set.name))])]),_vm._v(" "),_c('div',{staticClass:"search col-lg-4"},[_c('div',{staticClass:"form-group with-icon-left"},[_c('div',{staticClass:"input-group"},[_c('span',{staticClass:"back-to-fonts"},[_c('router-link',{attrs:{"to":{path: '/components/icons'}}},[_c('i',{staticClass:"fa fa-hand-o-left"})])],1),_vm._v(" "),_c('form',{staticClass:"form-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selector),expression:"selector"}],staticClass:"form-control mr-sm-2",attrs:{"type":"text","placeholder":"Search Icon","required":"","aria-label":"Search"},domProps:{"value":(_vm.selector)},on:{"input":function($event){if($event.target.composing){ return; }_vm.selector=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa fa-search"})])])])])])])]),_vm._v(" "),_vm._l((_vm.validatedLists),function(list){return [_c('card',{attrs:{"headerText":list.name}},[(list.icons.length === 0)?_c('span',[_vm._v("No icons found")]):_vm._e(),_vm._v(" "),_vm._l((Math.floor(list.icons.length/8+1)),function(i){return [_c('div',{staticClass:"icons"},_vm._l((8),function(j){return (list.icons[(i-1)*8 + j-1])?_c('div',{staticClass:"icon-grid-container"},[_c('span',{class:_vm.iconClass(list.icons[(i-1)*8 + j-1]),style:('font-size: '+_vm.iconSize+'px'),attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('div',{staticClass:"iconText"},[_vm._v(_vm._s(list.icons[(i-1)*8 + j-1]))])]):_vm._e()}),0)]})],2)]})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_023b0342_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Set_vue__ = __webpack_require__(1166);
function injectStyle (ssrContext) {
  __webpack_require__(1161)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_023b0342_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Set_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=11.build.js.map