(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["queryString"],{

/***/ "../../node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/index.js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /Users/mPoulain/Desktop/Lab/Modules/psxmarketingwithgoogle/_dev/node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: queryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryString\", function() { return queryString; });\n/* harmony import */ var _pickPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickPrefix */ \"../../node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/pickPrefix.js\");\n/* harmony import */ var _gracefulDecodeURIComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gracefulDecodeURIComponent */ \"../../node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/gracefulDecodeURIComponent.js\");\n\n\nfunction queryString(analytics, query) {\n    var a = document.createElement('a');\n    a.href = query;\n    var parsed = a.search.slice(1);\n    var params = parsed.split('&').reduce(function (acc, str) {\n        var _a = str.split('='), k = _a[0], v = _a[1];\n        acc[k] = Object(_gracefulDecodeURIComponent__WEBPACK_IMPORTED_MODULE_1__[\"gracefulDecodeURIComponent\"])(v);\n        return acc;\n    }, {});\n    var calls = [];\n    var ajs_uid = params.ajs_uid, ajs_event = params.ajs_event, ajs_aid = params.ajs_aid;\n    if (ajs_aid) {\n        var anonId = Array.isArray(params.ajs_aid)\n            ? params.ajs_aid[0]\n            : params.ajs_aid;\n        analytics.setAnonymousId(anonId);\n    }\n    if (ajs_uid) {\n        var uid = Array.isArray(params.ajs_uid)\n            ? params.ajs_uid[0]\n            : params.ajs_uid;\n        var traits = Object(_pickPrefix__WEBPACK_IMPORTED_MODULE_0__[\"pickPrefix\"])('ajs_trait_', params);\n        calls.push(analytics.identify(uid, traits));\n    }\n    if (ajs_event) {\n        var event_1 = Array.isArray(params.ajs_event)\n            ? params.ajs_event[0]\n            : params.ajs_event;\n        var props = Object(_pickPrefix__WEBPACK_IMPORTED_MODULE_0__[\"pickPrefix\"])('ajs_prop_', params);\n        calls.push(analytics.track(event_1, props));\n    }\n    return Promise.all(calls);\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:////Users/mPoulain/Desktop/Lab/Modules/psxmarketingwithgoogle/_dev/node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/index.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/pickPrefix.js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /Users/mPoulain/Desktop/Lab/Modules/psxmarketingwithgoogle/_dev/node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/pickPrefix.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: pickPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pickPrefix\", function() { return pickPrefix; });\n/**\n * Returns an object containing only the properties prefixed by the input\n * string.\n * Ex: prefix('ajs_traits_', { ajs_traits_address: '123 St' })\n * will return { address: '123 St' }\n **/\nfunction pickPrefix(prefix, object) {\n    return Object.keys(object).reduce(function (acc, key) {\n        if (key.startsWith(prefix)) {\n            var field = key.substr(prefix.length);\n            acc[field] = object[key];\n        }\n        return acc;\n    }, {});\n}\n//# sourceMappingURL=pickPrefix.js.map\n\n//# sourceURL=webpack:////Users/mPoulain/Desktop/Lab/Modules/psxmarketingwithgoogle/_dev/node_modules/.pnpm/@segment+analytics-next@1.44.0/node_modules/@segment/analytics-next/dist/pkg/core/query-string/pickPrefix.js?");

/***/ })

}]);