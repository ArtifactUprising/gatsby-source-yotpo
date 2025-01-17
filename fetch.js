"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _yotpo = require("./yotpo");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(assetsUrl) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.time("Fetch Yotpo reviews");
            console.log("Starting to fetch reviews from Yotpo using AU's fork of gatsby-source-yotpo");
            _context.next = 4;
            return (0, _yotpo.getCachedData)(assetsUrl);

          case 4:
            data = _context.sent;
            console.timeEnd("Fetch Yotpo reviews");
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;

function pagedGet(_x2, _x3) {
  return _pagedGet.apply(this, arguments);
}

function _pagedGet() {
  _pagedGet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(method, options) {
    var page,
        pageSize,
        aggregatedResponse,
        reviews,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 1;
            pageSize = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 1000;
            aggregatedResponse = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : null;
            _context2.next = 5;
            return method(_objectSpread(_objectSpread({}, options), {}, {
              page: page,
              pageSize: pageSize
            }));

          case 5:
            reviews = _context2.sent;

            if (!aggregatedResponse) {
              aggregatedResponse = reviews;
            } else {
              aggregatedResponse = aggregatedResponse.concat(reviews);
            }

            if (!(reviews.length > 0)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", pagedGet(method, options, page + 1, pageSize, aggregatedResponse));

          case 9:
            return _context2.abrupt("return", aggregatedResponse);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _pagedGet.apply(this, arguments);
}