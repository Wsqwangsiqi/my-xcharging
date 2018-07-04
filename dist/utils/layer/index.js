
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toast = require("./toast.layer");

Object.keys(_toast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toast[key];
    }
  });
});

var _modal = require("./modal.layer");

Object.keys(_modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modal[key];
    }
  });
});
