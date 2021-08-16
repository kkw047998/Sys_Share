webpackJsonp([27],{

/***/ 1264:
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

exports.default = {
    data: function data() {
        return {
            dp_period: ['Class Teacher', '1', '2', '3', '4', '5', '6', '7'],
            ready_change: false,
            by_day: ['1', '2', '3', '4', '5', '6'],
            day_list: ['', '', '', '', '', ''],
            order: 'day',
            blk: false,
            ava_lesson_list: [],
            ava_session_list: [],
            sel_sup: false,
            tmp_date: '',
            message: [],
            swap_loc: [],
            swap_sub: [],
            swap_date: [],
            swap_day: [],
            swap_session: [],
            old_session: '',
            original_date: '',
            cycle_date: [],
            swap_subject_code: '',
            loc_list: [],
            sup1: '',
            sup2: '',
            sup3: '',
            app_type: 'swap',
            selected_cls: '',
            selected_loc: '',
            subject_list: [],
            subject_code: '',
            type: 'official',
            user_check: '',
            ava_list: [],
            select_day: '',
            select_session: '',
            target_date: '',
            open_list: false,
            tdy_date: '',
            style: [],
            tdy_day: '',
            lesson: [], //format : lesson[session][day]
            subject: [],
            location: [],
            class_a: [],
            ready: false
        };
    },

    watch: {
        tdy_date: function tdy_date(newDate, oldDate) {
            this.original_date = oldDate;
        },
        tmp_date: function tmp_date(newDate, oldDate) {
            this.original_date = oldDate;
        }
    },
    created: async function created() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.tdy_date = today;
        await this.check_sub_date();
        var i = 0;
        var j = 0;
        for (i = 0; i < 8; i++) {
            this.message[i] = [];
            this.style[i] = [];
            this.lesson[i] = [];
            this.subject[i] = [];
            this.location[i] = [];
            this.class_a[i] = [];
            for (j = 0; j < 8; j++) {
                this.message[i][j] = '';
                this.style[i][j] = 'pointer-events:none';
                this.lesson[i][j] = '';
                this.subject[i][j] = '';
                this.location[i][j] = '';
                this.class_a[i][j] = '';
            }
        }
        await this.fetch_cycle();
        await this.fetch_subject();
        await this.fetch_loc();
        await this.fetch_timetable();
        await this.check_overlay();
        this.ready_change = true;
        this.ready = true;
    },
    mounted: async function mounted() {},

    methods: {
        change_view: async function change_view() {
            var _this = this;

            this.ready_change = false;
            var j = 0;
            var m = 0;
            for (j = 0; j < 6; j++) {
                this.cycle_date[j] = '';
                this.by_day[j] = '';
                for (m = 0; m < 8; m++) {
                    this.lesson[j][m] = '';
                    this.subject[j][m] = '';
                    this.class_a[j][m] = '';
                    this.location[j][m] = '';
                    this.message[j][m] = '';
                    this.style[j][m] = 'pointer-events:none';
                }
            }
            if (this.order == 'date') {
                var formData = new FormData();
                formData.append('date', this.tdy_date);
                await axios.post('subsitude/sub/backend/change_view.php', formData).then(function (response) {
                    _this.day_list = response.data;
                    var i = 0;
                    var s = 0;
                    for (i = 0; i < _this.day_list.length; i++) {
                        _this.cycle_date[i] = _this.day_list[i].date;
                        _this.by_day[i] = _this.day_list[i].day;
                        s = 0;
                        for (s = 0; s < 8; s++) {
                            if (_this.tdy_date == _this.cycle_date[i]) {
                                _this.style[i][s] = "cursor:pointer;background-color:rgba(178, 255, 186, 0.75)";
                            }
                            _this.lesson[i][s] = _this.day_list[i][s].subject;
                            _this.subject[i][s] = _this.day_list[i][s].subject;
                            _this.class_a[i][s] = _this.day_list[i][s].class;
                            _this.location[i][s] = _this.day_list[i][s].classroom;
                        }
                    }
                });
                await this.new_day();
                await this.check_overlay();
                this.ready_change = true;
            } else {
                /*
                await this.fetch_cycle();
                await this.fetch_subject();
                await this.fetch_loc();
                await this.fetch_timetable();                
                await this.check_sub_date();
                await this.check_overlay();*/
                this.new_day();
                this.ready_change = true;
            }
        },
        change_lesson: function change_lesson() {
            var i = 0;
            var tmp_sess = 0;
            var session = Number(this.swap_session[0]);
            for (i = 0; i < this.ava_session_list.length; i++) {
                tmp_sess = Number(this.ava_lesson_list[i].session);
                if (tmp_sess == session) {
                    this.swap_loc[0] = this.ava_lesson_list[i].location;
                    this.swap_sub[0] = this.ava_lesson_list[i].subject;
                }
            }
            this.$forceUpdate();
        },
        fetch_info: async function fetch_info(mode) {
            var _this2 = this;

            //auto choose session + location + subject by class+date+day+username
            var formData = new FormData();
            formData.append('apply_session', this.select_session);
            formData.append('teacher', this.sup1);
            formData.append('date', this.swap_date[0]);
            formData.append('original_day', this.tdy_day);
            formData.append('original_loc', this.selected_loc);
            formData.append('class', this.selected_cls);
            formData.append('mmode', mode);
            if (mode == 1) {
                this.sup1 = 'Please Select Date first';
            }
            await axios.post('subsitude/sub/backend/swap_info.php', formData).then(function (response) {
                if (mode == 1) {
                    if (response.data[0].name != '') {
                        _this2.ava_list = response.data;
                        if (_this2.ava_list.length > 0) {
                            _this2.sel_sup = true;
                        } else {
                            _this2.sup1 = 'No available Teacher';
                            _this2.sel_sup = false;
                        }
                    } else {
                        _this2.$alert('No available swap pair!');
                    }
                } else if (mode == 0) {
                    if (response.data[0].session != '') {
                        _this2.ava_lesson_list = response.data;
                        _this2.swap_session[0] = response.data[0].session;
                        _this2.swap_loc[0] = response.data[0].location;
                        _this2.swap_sub[0] = response.data[0].subject;
                        var i = 0;
                        for (i = 0; i < response.data.length; i++) {
                            _this2.ava_session_list[i] = response.data[i];
                        }
                    } else {
                        _this2.$alert('Swap Record Exist. Teacher in not available');
                    }
                }
                _this2.$forceUpdate();
            });
        },
        check_overlay: async function check_overlay() {
            var _this3 = this;

            var i = 0;
            for (i = 0; i < 6; i++) {
                var formData = new FormData();
                formData.append('cycle_date', this.cycle_date[i]);
                await axios.post('subsitude/sub/backend/fetch_leave.php', formData).then(function (response) {
                    if (response.data != 'empty') {
                        var n = 0;
                        var k = 0; //day
                        var s = 0; //session
                        var l = 0;
                        for (l = 0; l < response.data.length; l++) {
                            if (_this3.order == 'day') {
                                k = response.data[l].day;
                                s = response.data[l].session;
                            } else if (_this3.order == 'date') {
                                for (n = 0; n < 6; n++) {
                                    if (response.data[l].date == _this3.cycle_date[n]) {
                                        k = n + 1;
                                    }
                                }
                                s = response.data[l].session;
                            }
                            _this3.subject[k - 1][s] = response.data[l].subject;
                            _this3.class_a[k - 1][s] = response.data[l].class;
                            _this3.location[k - 1][s] = response.data[l].location;
                            _this3.message[k - 1][s] = 'Leave type : ' + response.data[l].type + ' ' + response.data[l].app_type + ' by ' + response.data[l].assigned_id;
                            if (response.data[l].type == 'sick') {
                                _this3.style[k - 1][s] = 'background-color:rgb(170, 128, 255);color:rgba(255,255,255,0.8);pointer-events:none';
                            } else {
                                _this3.style[k - 1][s] = 'background-color:rgb(170, 128, 255);color:rgba(255,255,255,0.8);pointer-events:none';
                            }
                        }
                    }
                });
            }
        },
        fetch_cycle: async function fetch_cycle() {
            var _this4 = this;

            await axios.get('subsitude/sub/backend/fetch_cycle.php').then(function (response) {
                if (response.data != 'empty') {
                    _this4.tdy_day = response.data[0].day;
                    var tmp_day = Number(_this4.tdy_day) - 1;
                    var i = 0;
                    var clr = '';
                    for (i = 0; i < 8; i++) {
                        if (i % 2 == 0) {
                            clr = 'rgba(145, 255, 156, 0.75)';
                        } else {
                            clr = 'rgba(178, 255, 186, 0.75)';
                        }
                        _this4.style[tmp_day][i] = 'cursor:pointer;background-color:' + clr;
                    }
                }
            });
        },
        fetch_subject: async function fetch_subject() {
            var _this5 = this;

            await axios.get('subsitude/sub/backend/fetch_subject.php').then(function (response) {
                _this5.subject_list = response.data;
                _this5.subject_code = _this5.subject_list[0].subject_code;
            });
        },
        fetch_loc: async function fetch_loc() {
            var _this6 = this;

            await axios.get('subsitude/sub/backend/fetch_loc.php').then(function (response) {
                _this6.loc_list = response.data;
            });
        },
        fetch_timetable: async function fetch_timetable() {
            var _this7 = this;

            axios.get('subsitude/sub/backend/fetch_time_table.php').then(function (response) {
                var i = 0;
                var j = 0;
                var counter = 0;
                for (i = 0; i < 6; i++) {
                    for (j = 0; j < 8; j++) {
                        _this7.lesson[i][j] = response.data[counter].subject;
                        if (_this7.lesson[i][j] == '') {
                            _this7.check_sub_record(i, j);
                        } else {
                            _this7.class_a[i][j] = response.data[counter].class;
                            _this7.subject[i][j] = response.data[counter].subject;
                            _this7.location[i][j] = response.data[counter].classroom;
                        }
                        counter++;
                    }
                }
            });
        },
        fetch_day: async function fetch_day(i) {
            var _this8 = this;

            var date = this.swap_date[i];
            var old_date = this.tmp_date;
            var formData = new FormData();
            formData.append('date', this.swap_date[i]);
            await axios.post('subsitude/sub/backend/new_day.php', formData).then(function (response) {
                if (response.data == 'empty') {
                    _this8.$alert('Selected Date is not a cycle Day !');
                    _this8.swap_date[i] = old_date;
                    _this8.$forceUpdate();
                } else {
                    _this8.swap_day[i] = response.data[0].day;
                    _this8.tmp_date = _this8.swap_date[i];
                    _this8.$forceUpdate();
                }
            });
        },
        new_day: async function new_day() {
            var _this9 = this;

            var tmp = '';
            if (this.order == 'day') {
                var formData = new FormData();
                formData.append('date', this.tdy_date);
                await axios.post('subsitude/sub/backend/new_day.php', formData).then(function (response) {
                    if (!(response.data == 'empty')) {
                        tmp = '';
                        _this9.tdy_day = response.data[0].day;
                        var tmp_day = Number(_this9.tdy_day) - 1;
                        var i = 0;
                        var clr = '';
                        var n = 0;
                        var m = 0;
                        for (n = 0; n < 6; n++) {
                            for (m = 0; m < 8; m++) {
                                _this9.style[n][m] = 'pointer-events:none';
                            }
                        }
                        for (i = 0; i < 8; i++) {
                            if (i % 2 == 0) {
                                clr = 'rgba(145, 255, 156, 0.75)';
                            } else {
                                clr = 'rgba(178, 255, 186, 0.75)';
                            }
                            _this9.style[tmp_day][i] = 'cursor:pointer;background-color:' + clr;
                        }
                    } else {
                        tmp = 'empty';
                        _this9.$alert('Selected Date is not a cycle Day !');
                        _this9.tdy_date = _this9.original_date;
                        /*
                        var k=0;
                        var l=0;
                        for(k=0;k<8;k++){
                            for(l=0;l<8;l++){
                                this.style[k][l] = 'pointer-events:none';
                            }
                            
                        }*/
                    }
                });
                if (tmp != 'empty') {
                    await this.check_sub_date();
                    await this.reload_timetable();
                    await this.check_overlay();
                }
                this.$forceUpdate();
            } else {
                //order date
                this.ready_change = false;
                var j = 0;
                var m = 0;
                for (j = 0; j < 6; j++) {
                    this.cycle_date[j] = '';
                    this.by_day[j] = '';
                    for (m = 0; m < 8; m++) {
                        this.lesson[j][m] = '';
                        this.subject[j][m] = '';
                        this.class_a[j][m] = '';
                        this.location[j][m] = '';
                        this.message[j][m] = '';
                        this.style[j][m] = 'pointer-events:none';
                    }
                }
                var formData = new FormData();
                formData.append('date', this.tdy_date);
                await axios.post('subsitude/sub/backend/change_view.php', formData).then(function (response) {
                    if (!(response.data == 'empty')) {
                        tmp = '';
                        _this9.day_list = response.data;
                        var i = 0;
                        var s = 0;
                        for (i = 0; i < _this9.day_list.length; i++) {
                            _this9.cycle_date[i] = _this9.day_list[i].date;
                            _this9.by_day[i] = _this9.day_list[i].day;
                            s = 0;
                            for (s = 0; s < 8; s++) {
                                if (_this9.tdy_date == _this9.cycle_date[i]) {
                                    _this9.style[i][s] = "cursor:pointer;background-color:rgba(178, 255, 186, 0.75)";
                                }
                                _this9.lesson[i][s] = _this9.day_list[i][s].subject;
                                _this9.subject[i][s] = _this9.day_list[i][s].subject;
                                _this9.class_a[i][s] = _this9.day_list[i][s].class;
                                _this9.location[i][s] = _this9.day_list[i][s].classroom;
                            }
                        }
                    } else {
                        tmp = 'empty';
                        _this9.$alert('Selected Date is not a cycle Day !');
                        _this9.tdy_date = _this9.original_date;
                    }
                });
                if (tmp != 'empty') {
                    await this.check_sub_date();
                    await this.reload_timetable();
                    await this.check_overlay();
                }
                this.$forceUpdate();
                this.ready_change = true;
            }
        },
        reload_timetable: async function reload_timetable() {
            var _this10 = this;

            if (this.order == 'day') {
                await axios.get('subsitude/sub/backend/fetch_time_table.php') //day
                .then(function (response) {
                    var i = 0;
                    var j = 0;
                    var counter = 0;
                    for (i = 0; i < 6; i++) {
                        for (j = 0; j < 8; j++) {
                            _this10.lesson[i][j] = response.data[counter].subject;
                            if (_this10.lesson[i][j] == '') {
                                _this10.check_sub_record(i, j);
                            } else {
                                _this10.message[i][j] = '';
                                _this10.class_a[i][j] = response.data[counter].class;
                                _this10.subject[i][j] = response.data[counter].subject;
                                _this10.location[i][j] = response.data[counter].classroom;
                            }
                            counter++;
                        }
                    }
                });
            } else {
                var i = 0;
                var j = 0;
                var d = 0;
                var s = 0;
                for (i = 0; i < 6; i++) {
                    var formData = new FormData();
                    formData.append('date', this.cycle_date[i]);
                    await axios.post('subsitude/sub/backend/sub_by_date.php', formData).then(function (response) {
                        if (response.data != '') {
                            for (j = 0; j < response.data.length; j++) {
                                d = Number(response.data[j].day) - 1;
                                s = response.data[j].session;
                                _this10.class_a[d][s] = response.data[j].class;
                                _this10.subject[d][s] = response.data[j].subject;
                                _this10.location[d][s] = response.data[j].location;
                                _this10.message[d][s] = response.data[j].app_type + ' - ( From : ' + response.data[j].leave_id + ')';
                                _this10.style[d][s] = 'background-color:rgb(138, 155, 242);color:rgba(60, 60, 60, 0.7);pointer-events:none';
                            }
                        }
                    });
                }
            }
        },
        close_overlay: function close_overlay() {
            this.open_list = false;
        },
        leave_type: function leave_type() {
            this.old_session = this.select_session;
            if (this.type == 'sick') {
                if (this.select_session != 'Full day') {
                    this.old_session = this.select_session;
                    this.select_session = 'Full Day';
                }
                //this.app_type ='sup';
            } else {
                this.select_session = this.old_session;
                this.app_type = 'swap';
            }
        },
        check_sub_date: async function check_sub_date() {
            var _this11 = this;

            var formData = new FormData();
            formData.append('date', this.tdy_date);
            await axios.post('subsitude/sub/backend/fetch_cycle_date.php', formData).then(function (response) {
                var i = 0;
                for (i = 0; i < response.data.length; i++) {
                    if (!(response.data == 'No cycle day')) {
                        if (!(response.data[i] == undefined) || !(response.data[i] == null)) {
                            var index = response.data[i].day;
                            index = Number(index) - 1;
                            _this11.cycle_date[index] = response.data[i].date;
                        }
                    }
                }
            });
        },
        check_sub_record: async function check_sub_record(i, j) {
            var _this12 = this;

            var formData = new FormData();
            formData.append('cycle_date', this.cycle_date[i]);
            formData.append('day', i + 1);
            formData.append('session', j);
            await axios.post('subsitude/sub/backend/check_sub_info.php', formData).then(function (response) {
                if (response.data.length > 0) {
                    _this12.message[i][j] = response.data[0].app_type + ' - ( From : ' + response.data[0].leave_id + ')';
                    _this12.lesson[i][j] = response.data[0].subject;
                    _this12.subject[i][j] = response.data[0].subject;
                    _this12.class_a[i][j] = response.data[0].class;
                    _this12.location[i][j] = response.data[0].location;
                    _this12.style[i][j] = 'background-color:rgb(138, 155, 242);color:rgba(60, 60, 60, 0.7);pointer-events:none';
                } else {
                    _this12.message[i][j] = '';
                    _this12.lesson[i][j] = '';
                    _this12.subject[i][j] = '';
                    _this12.class_a[i][j] = '';
                    _this12.location[i][j] = '';
                }
            });
            this.$forceUpdate();
        },
        swap: async function swap(i, j) {
            var _this13 = this;

            this.blk = false;
            var l = 0;
            for (l = 0; l < 3; l++) {
                this.swap_sub[l] = 'Select Subject';
                this.swap_loc[l] = 'Select Location';
                this.swap_date[l] = 'Select Date';
                this.swap_day[l] = 'Select Day';
                this.swap_session[l] = 'Select Session';
            }
            this.type = 'official';
            this.app_type = 'swap';
            var day = this.by_day[i];
            this.select_day = this.by_day[i];
            var session = j;
            this.select_session = session;
            var formData = new FormData();
            formData.append('sel_date', this.tdy_date);
            formData.append('session', session);
            formData.append('day', day);
            formData.append('app_type', this.app_type);
            formData.append('class', this.class_a[i][j]);
            await axios.post('subsitude/sub/backend/fetch_ava_teacher.php', formData).then(function (response) {
                _this13.ava_list = response.data;
                _this13.subject_code = _this13.subject[i][j];
                _this13.selected_cls = _this13.class_a[i][j];
                _this13.selected_loc = _this13.location[i][j];
                _this13.sup1 = 'Please Select Date first';
                _this13.sup2 = '';
                _this13.sup3 = '';
            });
            if (this.swap_sub[0].indexOf("Blk") != -1) {
                this.blk = true;
                //this.app_type = 'sup';
            }
            this.open_list = true;
            this.tmp_date = this.tdy_date;
        },
        new_list: async function new_list() {
            var _this14 = this;

            var i = Number(this.select_day) - 1;
            var j = this.select_session;
            var formData = new FormData();
            formData.append('sel_date', this.tdy_date);
            formData.append('session', this.select_session);
            formData.append('day', this.select_day);
            formData.append('app_type', this.app_type);
            formData.append('class', this.class_a[i][j]);
            await axios.post('subsitude/sub/backend/fetch_ava_teacher.php', formData).then(function (response) {
                _this14.ava_list = response.data;
            });
            this.$forceUpdate();
        },
        handleSubmit: function handleSubmit() {
            var _this15 = this;

            var formData = new FormData();
            formData.append('sel_date', this.tdy_date);
            formData.append('day', this.select_day);
            formData.append('session', this.select_session);
            formData.append('original_subject', this.subject_code);
            formData.append('swap_subject', this.swap_subject_code);
            formData.append('class', this.selected_cls);
            formData.append('location', this.selected_loc);
            formData.append('type', this.type);
            formData.append('app_type', this.app_type);
            formData.append('sup1', this.sup1);
            formData.append('sup2', this.sup2);
            formData.append('sup3', this.sup3);
            //append swap info if is swap
            if (this.app_type == 'swap') {
                var i = 0;
                for (i = 0; i < 3; i++) {
                    formData.append('subject' + i, this.swap_sub[i]);
                    formData.append('location' + i, this.swap_loc[i]);
                    formData.append('date' + i, this.swap_date[i]);
                    formData.append('day' + i, this.swap_day[i]);
                    formData.append('session' + i, this.swap_session[i]);
                }
            }
            //
            axios.post('subsitude/sub/backend/apply_swap.php', formData).then(function (response) {
                if (response.data == "Successfully Submitted Application") {
                    _this15.$alert(response.data);
                    _this15.open_list = false;
                    _this15.$router.push('../swap_view/swap_view');
                } else {
                    _this15.$alert(response.data);
                }
            });
        }
    }
};

/***/ }),

/***/ 1555:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1556);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("63a197a2", content, true, {});

/***/ }),

/***/ 1556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "th[data-v-2f6e93e9]{width:15.7%;text-align:center;font-size:1.1rem}td[data-v-2f6e93e9]{padding-left:1.25rem;padding-right:1.25rem;border:2px solid #fff;height:5rem;transition:all .3s ease-in-out}td[data-v-2f6e93e9]:hover{background-color:rgba(160,237,255,.8)!important}.inner_overlay[data-v-2f6e93e9]{z-index:5;width:65%;max-height:60%;position:absolute;margin:auto;top:0;bottom:0;left:0;right:0;background-color:hsla(0,0%,100%,.95);box-shadow:5px 5px 5px 5px hsla(0,0%,83%,.6)}.fa-window-close[data-v-2f6e93e9]{transition:all .15s ease-in-out;color:hsla(0,0%,100%,.55)}.fa-window-close[data-v-2f6e93e9]:hover{color:#fff}.sub_tr[data-v-2f6e93e9]{height:5rem!important}", ""]);

// exports


/***/ }),

/***/ 1557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('div',{staticStyle:{"position":"relative"}},[_c('form',{attrs:{"id":"form","enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-bottom":"0.75rem","padding-right":"0"}},[_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4 flex",staticStyle:{"padding-right":"0"}},[_c('div',{staticClass:"col-5"}),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-4",staticStyle:{"padding-right":"0"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.order),expression:"order"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.order=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.change_view]}},[_c('option',{attrs:{"value":"day"}},[_vm._v("Day")]),_vm._v(" "),_c('option',{attrs:{"value":"date"}},[_vm._v("Date")])])])]),_vm._v(" "),_c('div',{staticClass:"col-4 flex",staticStyle:{"padding-right":"0"}},[_c('div',{staticClass:"col-2"}),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-6",staticStyle:{"padding-right":"0"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tdy_date),expression:"tdy_date"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.tdy_date)},on:{"change":_vm.new_day,"input":function($event){if($event.target.composing){ return; }_vm.tdy_date=$event.target.value}}})])])]),_vm._v(" "),(_vm.open_list)?_c('div',{staticClass:"inner_overlay"},[_c('div',{staticClass:"card",staticStyle:{"height":"100%"}},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"flex"},[_c('strong',[_vm._v("Fill Application Info.")]),_vm._v(" "),_c('i',{staticClass:"fa fa-window-close",staticStyle:{"margin-left":"auto","margin-top":"0.25rem","margin-right":"0.5rem","cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":_vm.close_overlay}})])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"col-12 flex",staticStyle:{"margin-top":"1.5rem","padding-left":"0","padding-right":"0"}},[_c('div',{staticClass:"col-12",staticStyle:{"padding-left":"0"}},[_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0"}},[_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Selected Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tdy_date),expression:"tdy_date"}],staticClass:"form-control",attrs:{"type":"date","readonly":""},domProps:{"value":(_vm.tdy_date)},on:{"input":function($event){if($event.target.composing){ return; }_vm.tdy_date=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Class")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selected_cls),expression:"selected_cls"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.selected_cls)},on:{"input":function($event){if($event.target.composing){ return; }_vm.selected_cls=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[((_vm.type!='sick')&&(_vm.type!='special'))?_c('u'):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","margin-top":"0.5rem"}},[_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Selected Day")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.select_day),expression:"select_day"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.select_day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.select_day=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Application Reason")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],staticClass:"form-control select",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.leave_type]}},[_c('option',{attrs:{"value":"event"}},[_vm._v("Event")]),_vm._v(" "),_c('option',{attrs:{"value":"official"}},[_vm._v("Official Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"casual"}},[_vm._v("Casual Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"sick"}},[_vm._v("Sick Leave")]),_vm._v(" "),_c('option',{attrs:{"value":"special"}},[_vm._v("Special Leave")])])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Application Type")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.app_type),expression:"app_type"}],staticClass:"form-control select",attrs:{"disabled":_vm.type=='sick'},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.app_type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.new_list]}},[_c('option',{attrs:{"value":"swap"}},[_vm._v("Swap Lesson")])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","margin-top":"0.5rem"}},[_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Selected Session")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.select_session),expression:"select_session"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.select_session)},on:{"input":function($event){if($event.target.composing){ return; }_vm.select_session=$event.target.value}}})]),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-4 bottom"},[_c('label',[_vm._v("Swap Date")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.swap_date[0]),expression:"swap_date[0]"}],staticClass:"form-control",attrs:{"type":"date","required":""},domProps:{"value":(_vm.swap_date[0])},on:{"change":function($event){_vm.fetch_day(0);_vm.fetch_info(1)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.swap_date, 0, $event.target.value)}}})]):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2 bottom"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.swap_day[0]),expression:"swap_day[0]"}],staticClass:"form-control select",attrs:{"required":"","disabled":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.swap_day, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":"","value":"Select Day"}},[_vm._v("Select Day")]),_vm._v(" "),_vm._l((6),function(i){return _c('option',{domProps:{"value":i}},[_vm._v("Day "+_vm._s(i))])})],2)]):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2 bottom"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.swap_session[0]),expression:"swap_session[0]"}],staticClass:"form-control select",attrs:{"required":"","disabled":_vm.sel_sup==false},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.swap_session, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.change_lesson]}},[_c('option',{attrs:{"selected":"","disabled":"","value":"Select Session"}},[_vm._v("Select Session")]),_vm._v(" "),_vm._l((_vm.ava_session_list),function(n){return _c('option',{domProps:{"value":n.session}},[_vm._v("Session "+_vm._s(n.session))])})],2)]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","margin-top":"0.5rem"}},[((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Selected Subject")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.subject_code),expression:"subject_code"}],staticClass:"form-control",attrs:{"type":"text","readonly":""},domProps:{"value":(_vm.subject_code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.subject_code=$event.target.value}}})]):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-4"},[_c('label',[_vm._v("Swap With")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sup1),expression:"sup1"}],staticClass:"form-control select",attrs:{"required":"","disabled":_vm.sel_sup==false},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sup1=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.fetch_info(0)}]}},[_c('option',{attrs:{"disabled":_vm.sel_sup},domProps:{"selected":_vm.sel_sup==false}},[_vm._v("Please Select Date first")]),_vm._v(" "),_vm._l((_vm.ava_list),function(l){return _c('option',{domProps:{"value":l.username}},[_vm._v(_vm._s(l.name))])})],2)]):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.swap_sub[0]),expression:"swap_sub[0]"}],staticClass:"form-control select",attrs:{"required":"","disabled":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.swap_sub, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":"","value":"Select Subject"}},[_vm._v("Select Subject")]),_vm._v(" "),_vm._l((_vm.subject_list),function(n){return _c('option',[_vm._v(_vm._s(n.subject_code))])})],2)]):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2"},[_c('label',[_vm._v(" ")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.swap_loc[0]),expression:"swap_loc[0]"}],staticClass:"form-control select",attrs:{"required":"","disabled":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.swap_loc, 0, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":"","value":"Select Location"}},[_vm._v("Select Location")]),_vm._v(" "),_vm._l((_vm.loc_list),function(l){return _c('option',[_vm._v(_vm._s(l.classroom))])})],2)]):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","margin-top":"0.5rem"}},[((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-4"}):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-4 bottom"}):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2 bottom"}):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2 bottom"},[_c('label',[_vm._v(" ")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","margin-top":"0.5rem"}},[((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-4"}):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2"}):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-12 flex",staticStyle:{"padding-left":"0","margin-top":"0.5rem"}},[_c('div',{staticClass:"col-4"}),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-4"}):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2"},[_c('label',[_vm._v(" ")])]):_vm._e(),_vm._v(" "),((_vm.type!='sick')&&(_vm.type!='special'))?_c('div',{staticClass:"col-2"}):_vm._e()])])])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_vm._m(3),_vm._v(" "),_c('button',{staticClass:"btn btn-danger btn-sm",attrs:{"type":"reset"},on:{"click":_vm.close_overlay}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" Cancel\n                            ")])])])]):_vm._e(),_vm._v(" "),_c('table',{staticClass:"table table-striped first-td-padding"},[_c('thead',[(_vm.order=='day'&&this.ready_change)?_c('tr',[_c('th',{staticStyle:{"width":"5.8%"}},[_vm._v("Period")]),_vm._v(" "),_c('th',[_vm._v("Day 1"),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v(_vm._s(_vm.cycle_date[0]))])]),_vm._v(" "),_c('th',[_vm._v("Day 2"),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v(_vm._s(_vm.cycle_date[1]))])]),_vm._v(" "),_c('th',[_vm._v("Day 3"),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v(_vm._s(_vm.cycle_date[2]))])]),_vm._v(" "),_c('th',[_vm._v("Day 4"),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v(_vm._s(_vm.cycle_date[3]))])]),_vm._v(" "),_c('th',[_vm._v("Day 5"),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v(_vm._s(_vm.cycle_date[4]))])]),_vm._v(" "),_c('th',[_vm._v("Day 6"),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v(_vm._s(_vm.cycle_date[5]))])])]):_vm._e(),_vm._v(" "),(_vm.order=='date'&&this.ready_change)?_c('tr',[_c('th',{staticStyle:{"width":"5.8%"}},[_vm._v("Period")]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[0])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[0]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[1])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[1]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[2])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[2]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[3])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[3]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[4])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[4]))])]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.cycle_date[5])),_c('br'),_c('u',{staticStyle:{"font-size":"90%"}},[_vm._v("Day "+_vm._s(_vm.by_day[5]))])])]):_vm._e()]),_vm._v(" "),_c('tbody',_vm._l((8),function(i){return _c('tr',{staticClass:"sub_tr"},[_c('td',{staticStyle:{"point-events":"none","width":"5.8%","text-align":"center"}},[_c('b',[_vm._v(_vm._s(_vm.dp_period[i-1]))])]),_vm._v(" "),_vm._l((6),function(j){return _c('td',{style:(_vm.style[j-1][i-1]),on:{"click":function($event){_vm.swap((j-1),(i-1))}}},[_c('b',[_vm._v(_vm._s(_vm.subject[j-1][i-1]))]),_c('br'),_vm._v(_vm._s(_vm.message[j-1][i-1])),_c('br'),_vm._v(" "),_c('div',{staticClass:"flex",staticStyle:{"margin-top":"0.55rem"}},[_c('div',{staticStyle:{"float":"left"}},[_vm._v(_vm._s(_vm.class_a[j-1][i-1]))]),_vm._v(" "),_c('div',{staticStyle:{"float":"right","margin-left":"auto"}},[_vm._v(_vm._s(_vm.location[j-1][i-1]))])])])})],2)}),0)])])])])]):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Lesson Swap")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-3",staticStyle:{"padding-top":"0.35rem"}},[_c('label',[_vm._v("Order By:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-4",staticStyle:{"padding-top":"0.35rem"}},[_c('label',[_vm._v("Select Date:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Submit\n                            ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_vue__ = __webpack_require__(1264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f6e93e9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_vue__ = __webpack_require__(1557);
function injectStyle (ssrContext) {
  __webpack_require__(1555)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f6e93e9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f6e93e9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=27.build.js.map