
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _page = require("./page.helper");

Object.keys(_page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _page[key];
    }
  });
});

var _wxml = require("./wxml.helper");

Object.keys(_wxml).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wxml[key];
    }
  });
});

var _string = require("./string.helper");

Object.keys(_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _string[key];
    }
  });
});

var _convertor = require("./convertor.helper");

Object.keys(_convertor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _convertor[key];
    }
  });
});
