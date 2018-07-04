
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MyApp = require("./MyApp");

Object.keys(_MyApp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MyApp[key];
    }
  });
});

var _MyPage = require("./MyPage");

Object.keys(_MyPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MyPage[key];
    }
  });
});

var _MyComponent = require("./MyComponent");

Object.keys(_MyComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MyComponent[key];
    }
  });
});

var _core = require("../npm/@minapp/core/system");

Object.defineProperty(exports, 'wxp', {
  enumerable: true,
  get: function get() {
    return _core.wxp;
  }
});
Object.defineProperty(exports, 'pagify', {
  enumerable: true,
  get: function get() {
    return _core.pagify;
  }
});
Object.defineProperty(exports, 'appify', {
  enumerable: true,
  get: function get() {
    return _core.appify;
  }
});
Object.defineProperty(exports, 'comify', {
  enumerable: true,
  get: function get() {
    return _core.comify;
  }
});
