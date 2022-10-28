"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessToken = exports.allSiteBottomlines = exports.allReviews = exports.allProductBottomlines = void 0;
var _request = _interopRequireDefault(require("request"));
var getAccessToken = function getAccessToken(_ref) {
  var appKey = _ref.appKey,
    appSecret = _ref.appSecret,
    page = _ref.page,
    pageSize = _ref.pageSize;
  var options = {
    method: "POST",
    url: "https://api.yotpo.com/oauth/token",
    json: {
      client_id: appKey,
      client_secret: appSecret,
      grant_type: "client_credentials"
    }
  };
  return new Promise(function (resolve, reject) {
    (0, _request["default"])(options, function (error, response, body) {
      if (error) reject(error);
      resolve(body.access_token);
    });
  });
};
exports.getAccessToken = getAccessToken;
var allReviews = function allReviews(_ref2) {
  var appKey = _ref2.appKey,
    accessToken = _ref2.accessToken,
    page = _ref2.page,
    pageSize = _ref2.pageSize;
  var options = {
    method: "GET",
    url: "https://api.yotpo.com/v1/apps/".concat(appKey, "/reviews"),
    qs: {
      utoken: accessToken,
      page: page,
      count: pageSize
    },
    json: true
  };
  return new Promise(function (resolve, reject) {
    (0, _request["default"])(options, function (error, response, body) {
      if (error) reject(error);
      resolve(body.reviews);
    });
  });
};
exports.allReviews = allReviews;
var allProductBottomlines = function allProductBottomlines(_ref3) {
  var appKey = _ref3.appKey,
    page = _ref3.page,
    pageSize = _ref3.pageSize;
  var options = {
    method: "GET",
    url: "https://api.yotpo.com/v1/apps/".concat(appKey, "/bottom_lines"),
    qs: {
      page: page,
      count: pageSize
    },
    json: true
  };
  return new Promise(function (resolve, reject) {
    (0, _request["default"])(options, function (error, response, body) {
      if (error) reject(error);
      resolve(body.response.bottomlines);
    });
  });
};
exports.allProductBottomlines = allProductBottomlines;
var allSiteBottomlines = function allSiteBottomlines(_ref4) {
  var appKey = _ref4.appKey,
    page = _ref4.page,
    pageSize = _ref4.pageSize;
  var options = {
    method: "GET",
    url: "https://api.yotpo.com/products/".concat(appKey, "/yotpo_site_reviews/bottomline"),
    qs: {
      page: page,
      count: pageSize
    },
    json: true
  };
  return new Promise(function (resolve, reject) {
    (0, _request["default"])(options, function (error, response, body) {
      if (error) reject(error);
      resolve([body.response.bottomline]);
    });
  });
};
exports.allSiteBottomlines = allSiteBottomlines;
//# sourceMappingURL=yotpo.js.map