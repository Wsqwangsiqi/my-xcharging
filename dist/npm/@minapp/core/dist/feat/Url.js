
"use strict";
/******************************************************************
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var Url = /** @class */ (function () {
    function Url(url, isTabBar) {
        if (isTabBar === void 0) { isTabBar = false; }
        this.url = url;
        this.isTabBar = isTabBar;
    }
    /**
     * 跳转当前 url 所指定的页面
     *
     * 注意：当页面是 tabBar 中的页面是，不能带参数
     */
    Url.prototype.go = function (searchOrQuery) {
        var url = this.url;
        if (this.isTabBar) {
            if (searchOrQuery) {
                console.warn(this.url + " \u662F tabBar \u9875\u9762\uFF0C\u4E0D\u80FD\u5E26\u53C2\u6570\uFF0C\u5DF2\u81EA\u52A8\u5FFD\u7565");
            }
            wx.switchTab({ url: url });
        }
        else {
            wx.navigateTo({ url: url + getSearchFromRaw(searchOrQuery) });
        }
    };
    /**
     * 重定向到当前 url 所指定的页面
     *
     * 注意：当页面是 tabBar 时，无法使用此函数
     */
    Url.prototype.redirect = function (searchOrQuery) {
        if (this.isTabBar) {
            console.error(this.url + " \u662F tabBar \u9875\u9762\uFF0C\u4E0D\u80FD\u4F7F\u7528\u6B64 redirect\uFF0C\u4E0D\u8FC7\u4F60\u53EF\u4EE5\u4F7F\u7528 reload \u6765\u8DF3\u5230 tabBar \u9875\u9762\u4E0A");
            console.error("\u8BE6\u60C5\u67E5\u770B\uFF1A https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#tip");
        }
        else {
            wx.redirectTo({ url: this.url + getSearchFromRaw(searchOrQuery) });
        }
    };
    /**
     * 关闭所有页面，打开到应用内的某个页面
     *
     * @since 1.1.0
     */
    Url.prototype.reload = function (searchOrQuery) {
        if (this.isTabBar && searchOrQuery) {
            console.warn(this.url + " \u662F tabBar \u9875\u9762\uFF0C\u4E0D\u80FD\u5E26\u53C2\u6570\uFF0C\u5DF2\u81EA\u52A8\u5FFD\u7565");
            searchOrQuery = '';
        }
        wx.reLaunch({ url: this.url + getSearchFromRaw(searchOrQuery) });
    };
    return Url;
}());
exports.Url = Url;
function getSearchFromRaw(searchOrQuery) {
    if (!searchOrQuery)
        return '';
    var search = '';
    if (typeof searchOrQuery === 'string') {
        search += searchOrQuery;
    }
    else {
        search = Object.keys(searchOrQuery).map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent((searchOrQuery[k] || '') + ''); }).join('&');
    }
    if (search && search[0] !== '?')
        search = '?' + search;
    return search;
}

