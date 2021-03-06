
"use strict";
/******************************************************************
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将 str 转化成 camelCase
 */
function camelCase(str) {
    return str.replace(/[-_](\w)/g, function (r, k) { return k.toUpperCase(); });
}
exports.camelCase = camelCase;

