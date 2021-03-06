
"use strict";
/******************************************************************
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../../../../tslib/tslib");
var object_1 = require("./object");
var warn_1 = require("./warn");
function mixin(target, source) {
    var sources = Array.isArray(source) ? source : [source];
    sources.forEach(function (src) {
        if (!src || !object_1.isObject(src))
            return;
        Object.getOwnPropertyNames(src).forEach(function (name) {
            var srcDesc = Object.getOwnPropertyDescriptor(src, name);
            var distDesc = Object.getOwnPropertyDescriptor(target, name);
            if (!distDesc) {
                Object.defineProperty(target, name, srcDesc);
            }
            else {
                if (typeof distDesc.value === 'function' && typeof srcDesc.value === 'function') {
                    Object.defineProperty(target, name, tslib_1.__assign({}, distDesc, { value: function () {
                            distDesc.value.apply(this, arguments);
                            srcDesc.value.apply(this, arguments);
                        } }));
                }
                else {
                    warn_1.warn("\u65E0\u6CD5\u5C06 %o \u5BF9\u8C61 mixin \u5230 %o \u5BF9\u8C61\u4E2D\uFF0C%o \u5B57\u6BB5\u503C\u7684\u7C7B\u578B\u4E0D\u4E00\u81F4", src, target, name);
                }
            }
        });
    });
}
exports.mixin = mixin;

