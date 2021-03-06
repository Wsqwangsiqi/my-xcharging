
"use strict";
/******************************************************************
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../wx/dist/wx");
var Location = /** @class */ (function () {
    function Location() {
        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        this.pathname = page.route;
        this.query = page.options || {};
    }
    return Location;
}());
exports.Location = Location;

