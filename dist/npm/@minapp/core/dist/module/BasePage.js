
"use strict";
/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../../../../tslib/tslib");
var Location_1 = require("../feat/Location");
var util_1 = require("../util/index");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.$minappSetDataSyncStacks = [];
        this.$lazySetData = true;
        /**
         * 当前页面是否显示
         */
        this.$visiable = false;
        /**
         * 当前 Page 的变量，类似于 React 中的 state，
         * 不能直接修改里面的值，可以通过 setData 来修改
         */
        this.data = {}; // 初始化一个空对象
    }
    /**
     * 获取当前 page 的 location 相关信息，包括当前 pathname 和 query 参数
     */
    BasePage.prototype.getLocation = function () {
        return new Location_1.Location();
    };
    /**
     * 对 setData 的封装，不过它更新的 data 可以支持数据双向绑定
     *
     * @memberof BaseComponent
     */
    BasePage.prototype.setDataSmart = function (data, callback) {
        if (this.$visiable || !this.$lazySetData) {
            this.setData(data, callback);
        }
        else {
            this.$minappSetDataSyncStacks.push([data, callback]);
        }
    };
    // @ts-ignore
    // 双向绑定用于更新父组件的数据
    BasePage.prototype.minappsyncupdate = function (e) {
        var _a = e.detail, minappdone = _a.minappdone, data = tslib_1.__rest(_a, ["minappdone"]);
        this.setDataSmart(data, minappdone);
    };
    return BasePage;
}());
exports.BasePage = BasePage;
/**
 * 将一个继承了 BasePage 的类转化成 小程序 Page 的调用
 */
function pagify(options, polluteObj) {
    if (options === void 0) { options = {}; }
    return function (SomePage) {
        if (!options.mixins)
            options.mixins = [];
        options.mixins.push({
            onShow: function () {
                if (this.$lazySetData && this.$minappSetDataSyncStacks && this.$minappSetDataSyncStacks.length) {
                    var data_1 = {};
                    var callbacks_1 = [];
                    this.$minappSetDataSyncStacks.forEach(function (it) {
                        data_1 = tslib_1.__assign({}, data_1, it[0]);
                        if (typeof it[1] === 'function')
                            callbacks_1.push(it[1]);
                    });
                    this.$minappSetDataSyncStacks.length = 0; // 清空队列
                    this.setData(data_1, function () { return callbacks_1.forEach(function (cb) { return cb(); }); });
                }
                this.$visiable = true;
            },
            onHide: function () {
                this.$visiable = false;
            }
        });
        var obj = util_1.pollute(SomePage, options, polluteObj);
        obj.$lazySetData = options.lazySetData === undefined ? true : !!options.lazySetData;
        Page(obj);
    };
}
exports.pagify = pagify;

