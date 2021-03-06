
"use strict";
/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = require("./object");
var mixin_1 = require("./mixin");
function pollute(Klass, options, callback) {
    var obj = object_1.toObject(new Klass());
    var app = getApp();
    if (options.mixins && options.mixins.length) {
        mixin_1.mixin(obj, options.mixins);
    }
    obj.app = app;
    if (callback)
        callback(obj);
    return obj;
}
exports.pollute = pollute;

