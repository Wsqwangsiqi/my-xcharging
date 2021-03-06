
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../../../../tslib/tslib");
var util_1 = require("../util/index");
// 将 on 开头的生命周期函数转变成非 on 开头的
var RAW_LIFE_CYCLES = ['Created', 'Attached', 'Ready', 'Moved', 'Detached'];
var ON_LIFE_CYCLES = RAW_LIFE_CYCLES.map(function (k) { return 'on' + k; });
var NATIVE_LIFE_CYCLES = RAW_LIFE_CYCLES.map(function (k) { return k.toLowerCase(); });
// https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/component.html
var COMPONENT_NATIVE_PROPS = [
    'externalClasses',
    'properties',
    'data',
    'options',
    'relations',
    'behaviors'
];
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    /**
     * 获取 App 实例，即微信原生函数 getApp() 返回的对象
     *
     * @deprecated 直接使用 this.app 即可，无需使用函数调用
     */
    BaseComponent.prototype.getApp = function () {
        return getApp();
    };
    /**
     * 对 setData 的封装，不过它更新的 data 可以支持数据双向绑定
     *
     * @memberof BaseComponent
     */
    BaseComponent.prototype.setDataSmart = function (data, callback) {
        var origin = this.data;
        var minappsync = origin.minappsync;
        if (!minappsync)
            return this.setData(data, callback);
        var mixedData = data;
        var parentData = {};
        minappsync.split('&').forEach(function (pair) {
            var _a = pair.split('='), key = _a[0], parentKey = _a[1];
            // 需要将 key 转化成驼峰形式，见 https://github.com/qiu8310/minapp/issues/53
            if (key.indexOf('-') >= 0) {
                key = key.replace(/[-](\w)/g, function (r, k) { return k.toUpperCase(); });
            }
            if (mixedData[key] !== undefined) {
                parentData[parentKey] = mixedData[key];
                delete mixedData[key];
            }
        });
        var count = 0;
        var done = function () {
            count++;
            if (count >= 2 && callback)
                callback();
        };
        if (Object.keys(mixedData).length) {
            this.setData(mixedData, done);
        }
        else {
            done();
        }
        if (Object.keys(parentData).length) {
            parentData.minappdone = done;
            this.triggerEvent('minappsyncupdate', parentData, {});
        }
        else {
            done();
        }
    };
    // @ts-ignore
    // 双向绑定用于更新父组件的数据
    BaseComponent.prototype.minappsyncupdate = function (e) {
        var _a = e.detail, minappdone = _a.minappdone, data = tslib_1.__rest(_a, ["minappdone"]);
        this.setDataSmart(data, minappdone);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
/**
 * 将一个继承了 BaseComponent 的类转化成 小程序 Component 的调用
 */
function comify(options, polluteObj) {
    if (options === void 0) { options = {}; }
    return function (SomeComponent) {
        var obj = util_1.pollute(SomeComponent, options, polluteObj);
        if (obj.properties) {
            Object.keys(obj.properties).forEach(function (k) {
                // @ts-ignore
                var opt = obj.properties[k];
                if (!util_1.isPlainObject(opt)) {
                    opt = { type: opt };
                }
                // @ts-ignore
                obj.properties[k] = opt;
                if (obj.onPropUpdate)
                    injectObserver(obj, k, opt);
            });
            obj.properties.minappsync = { type: String };
        }
        // 处理自定义的方法和生命周期函数
        if (!obj.methods)
            obj.methods = {};
        var inits = {};
        Object.getOwnPropertyNames(obj).forEach(function (k) {
            var desc = Object.getOwnPropertyDescriptor(obj, k);
            if (!desc)
                return;
            if (ON_LIFE_CYCLES.indexOf(k) >= 0) {
                Object.defineProperty(obj, k.substr(2).toLowerCase(), desc);
                delete obj[k];
            }
            else if (NATIVE_LIFE_CYCLES.indexOf(k) < 0 && (typeof desc.value === 'function')) {
                Object.defineProperty(obj.methods, k, desc);
                delete obj[k];
            }
            else if (COMPONENT_NATIVE_PROPS.indexOf(k) < 0) {
                // 非函数，也组件内部属性
                // 由于小程序组件会忽略不能识别的字段，需要这里需要把这些字段配置在组件 created 的时候赋值
                inits[k] = desc;
            }
        });
        if (Object.keys(inits).length) {
            var oldCreated_1 = obj.created;
            obj.created = function () {
                Object.defineProperties(this, inits);
                if (oldCreated_1)
                    oldCreated_1.apply(this, arguments);
            };
        }
        Component(obj);
    };
}
exports.comify = comify;
function injectObserver(obj, key, propOption) {
    var oldObserver = propOption.observer;
    propOption.observer = function (newValue, oldValue) {
        this.onPropUpdate(key, newValue, oldValue);
        // obj.methods.onPropUpdate.call(this, key, newValue, oldValue)
        if (typeof oldObserver === 'function')
            oldObserver.apply(this, arguments);
    };
}

