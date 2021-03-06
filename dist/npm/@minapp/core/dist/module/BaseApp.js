
"use strict";
/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util/index");
// import {TAB_PAGES, PAGES} from '../feat/data'
var Url_1 = require("../feat/Url");
function appify(options, polluteObj) {
    return function (SomeApp) {
        var app = new SomeApp();
        // @ts-ignore
        app.__init$home$url(options.pages || [], options.tabBarList || []);
        var obj = util_1.toObject(app);
        if (polluteObj)
            polluteObj(obj);
        App(obj);
    };
}
exports.appify = appify;
var BaseApp = /** @class */ (function () {
    function BaseApp() {
    }
    // @ts-ignore
    BaseApp.prototype.__init$home$url = function (pages, tabBarList) {
        if (pages === void 0) { pages = []; }
        if (tabBarList === void 0) { tabBarList = []; }
        var $home;
        var $url = {};
        var tabPages = tabBarList.map(function (t) { return t.pagePath; });
        pages.forEach(function (page) {
            // 需要驼峰形式的名字
            var camelPageName = util_1.camelCase(page.split('/').pop());
            // 判重
            if ($url.hasOwnProperty(camelPageName)) {
                util_1.warn("app.$url \u4E2D " + $url[camelPageName] + " \u548C " + page + " \u7684\u952E\u540D " + camelPageName + " \u91CD\u590D\u4E86\uFF0C\u53EA\u80FD\u4FDD\u7559\u4E00\u4E2A\uFF0C\u8BF7\u6CE8\u610F\u4FEE\u6539\uFF01");
            }
            // url 需要以 / 开头
            var url = new Url_1.Url('/' + page, tabPages.indexOf(page) >= 0);
            if (!$home)
                $home = url; // $home 是 PAGES 中的第一个 url
            $url[camelPageName] = url;
        });
        // @ts-ignore
        this.$home = $home;
        // @ts-ignore
        this.$url = $url;
    };
    /**
     * 返回上 1/N 级页面，通过 delta 指定要返回的层级，默认 1
     *
     * @param {number} [delta=1] 要返回的层级
     * @returns
     * @memberof BaseApp
     */
    BaseApp.prototype.$back = function (delta) {
        if (delta === void 0) { delta = 1; }
        return wx.navigateBack({ delta: delta });
    };
    return BaseApp;
}());
exports.BaseApp = BaseApp;

