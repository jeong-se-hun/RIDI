/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  }; // import a list of modules into the list

  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.17.21';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function',INVALID_TEMPL_VAR_ERROR_TEXT='Invalid `variable` option passed into `_.template`';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/** Used to match a single whitespace character. */var reWhitespace=/\s/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */var reForbiddenIdentifierChars=/[()=,{}\[\]\/\s]/;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f',reComboHalfMarksRange='\\ufe20-\\ufe2f',rsComboSymbolsRange='\\u20d0-\\u20ff',rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',rsOrdUpper='\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
'\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010a':'C','\u010c':'C','\u0107':'c','\u0109':'c','\u010b':'c','\u010d':'c','\u010e':'D','\u0110':'D','\u010f':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011a':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011b':'e','\u011c':'G','\u011e':'G','\u0120':'G','\u0122':'G','\u011d':'g','\u011f':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012a':'I','\u012c':'I','\u012e':'I','\u0130':'I','\u0129':'i','\u012b':'i','\u012d':'i','\u012f':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013b':'L','\u013d':'L','\u013f':'L','\u0141':'L','\u013a':'l','\u013c':'l','\u013e':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014a':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014b':'n','\u014c':'O','\u014e':'O','\u0150':'O','\u014d':'o','\u014f':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015a':'S','\u015c':'S','\u015e':'S','\u0160':'S','\u015b':'s','\u015d':'s','\u015f':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016a':'U','\u016c':'U','\u016e':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016b':'u','\u016d':'u','\u016f':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017b':'Z','\u017d':'Z','\u017a':'z','\u017c':'z','\u017e':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017f':'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=typeof __webpack_require__.g=='object'&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g;/** Detect free variable `self`. */var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&"object"=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*/ /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var asciiSize=baseProperty('length');/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function asciiToArray(string){return string.split('');}/**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function baseIsNaN(value){return value!==value;}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN;}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}/**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function baseUnary(func){return function(value){return func(value);};}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function cacheHas(cache,key){return cache.has(key);}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var deburrLetter=basePropertyOf(deburredLetters);/**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */function getValue(object,key){return object==null?undefined:object[key];}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function hasUnicode(string){return reHasUnicode.test(string);}/**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*/ /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined,symIterator=Symbol?Symbol.iterator:undefined,symToStringTag=Symbol?Symbol.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function baseLodash(){// No operation performed.
}/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */lodash.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'escape':reEscape,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'evaluate':reEvaluate,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'interpolate':reInterpolate,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */'variable':'',/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */'imports':{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*/ /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*/ /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*/ /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function listCacheClear(){this.__data__=[];this.size=0;}/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*/ /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*/ /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*/ /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function stackGet(key){return this.__data__.get(key);}/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function stackHas(key){return this.__data__.has(key);}/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*/ /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined;}/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get(object,paths[index]);}return result;}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number;}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});}else if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}/**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false;}}return true;}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined,args);},wait);}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEach=createBaseEach(baseForOwn);/**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseFor=createBaseFor();/**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseForRight=createBaseFor(true);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function baseGt(value,other){return value>other;}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args);}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(typeof value=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function baseLt(value,other){return value<other;}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){stack||(stack=new Stack());if(isObject(srcValue)){baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(safeGet(object,key),srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function baseOrderBy(collection,iteratees,orders){if(iteratees.length){iteratees=arrayMap(iteratees,function(iteratee){if(isArray(iteratee)){return function(value){return baseGet(value,iteratee.length===1?iteratee[0]:iteratee);};}return iteratee;});}else{iteratees=[identity];}var index=-1;iteratees=arrayMap(iteratees,baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array;}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function baseSample(collection){return arraySample(values(collection));}/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(key==='__proto__'||key==='constructor'||key==='prototype'){return object;}if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function baseShuffle(collection){return shuffleSelf(values(collection));}/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndexBy(array,value,iteratee,retHighest){var low=0,high=array==null?0:array.length;if(high===0){return 0;}value=iteratee(value);var valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator);}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result;}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function castFunction(value){return typeof value=='function'?value:identity;}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}/**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */var castRest=baseRest;/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}/**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision&&nativeIsFinite(number)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack['delete'](srcValue);}return objValue;}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function customOmitClone(value){return isPlainObject(value)?undefined:value;}/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return{'start':start,'end':end};}/**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function isIndex(value,length){var type=typeof value;length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index;if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */function isKeyable(value){var type=typeof value;return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}/**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var isMaskable=coreJsData?isFunction:stubFalse;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */function isStrictComparable(value){return value===value&&!isObject(value);}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data;}/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */function objectToString(value){return nativeObjectToString.call(value);}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}/**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */function safeGet(object,key){if(key==='constructor'&&typeof object[key]==='function'){return;}if(key=='__proto__'){return;}return object[key];}/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var setData=shortOut(baseSetData);/**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var setToString=shortOut(baseSetToString);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*/ /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */function concat(){var length=arguments.length;if(!length){return[];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[];}/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[];}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */function head(array){return array&&array.length?array[0]:undefined;}/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[];});/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined;}/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var pull=baseRest(pullAll);/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array;}/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function reverse(array){return array==null?array:nativeReverse.call(array);}/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined;return array&&array.length?baseUniq(array,undefined,comparator):[];}/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});/**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */var zip=baseRest(unzip);/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */function tap(value,interceptor){interceptor(value);return value;}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */function thru(value,interceptor){return interceptor(value);}/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array;});});/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */function wrapperChain(){return chain(this);}/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */function wrapperToIterator(){return this;}/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*/ /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */var find=createFind(findIndex);/**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */var findLast=createFind(findLastIndex);/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*/ /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*/ /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n);}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result;};}/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
clearTimeout(timerId);timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */function once(func){return before(2,func);}/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders);});/**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders);});/**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined,undefined,undefined,indexes);});/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?start:toInteger(start);return baseRest(func,start);}/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */function unary(func){return ary(func,1);}/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */function wrap(value,wrapper){return partial(castFunction(wrapper),value);}/*------------------------------------------------------------------------*/ /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */function eq(value,other){return value===other||value!==value&&other!==other;}/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var gt=createRelationalOperation(baseGt);/**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */var isArray=Array.isArray;/**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag;}/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var isBuffer=nativeIsBuffer||stubFalse;/**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */function isEqual(value,other){return baseIsEqual(value,other);}/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result;}/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */function isObject(value){var type=typeof value;return value!=null&&(type=='object'||type=='function');}/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */function isObjectLike(value){return value!=null&&typeof value=='object';}/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value;}/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */function isNull(value){return value===null;}/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */function isNil(value){return value==null;}/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag;}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */function isUndefined(value){return value===undefined;}/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}/**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */var lt=createRelationalOperation(baseLt);/**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */function toArray(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0;}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*/ /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */var at=flatRest(baseAt);/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}/**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var defaults=baseRest(function(object,sources){object=Object(object);var index=-1;var length=sources.length;var guard=length>2?sources[2]:undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){length=1;}while(++index<length){var source=sources[index];var props=keysIn(source);var propsIndex=-1;var propsLength=props.length;while(++propsIndex<propsLength){var key=props[propsIndex];var value=object[key];if(value===undefined||eq(value,objectProto[key])&&!hasOwnProperty.call(object,key)){object[key]=source[key];}}}return object;});/**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args);});/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */var invert=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}result[value]=key;},constant(identity));/**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */var invertBy=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */var invoke=baseRest(baseInvoke);/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result;});/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */function pickBy(object,predicate){if(object==null){return{};}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){length=1;object=undefined;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var toPairs=createToPairs(keys);/**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */var toPairsIn=createToPairs(keysIn);/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function values(object){return object==null?[]:baseValues(object,keys(object));}/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*/ /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*/ /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */var lowerFirst=createCaseFirst('toLowerCase');/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
// The sourceURL gets injected into the source that's eval-ed, so be careful
// to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
// and escape the comment, thus injecting code that gets evaled.
var sourceURL='//# sourceURL='+(hasOwnProperty.call(options,'sourceURL')?(options.sourceURL+'').replace(/\s/g,' '):'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=hasOwnProperty.call(options,'variable')&&options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Throw an error if a forbidden character was found in `variable`, to prevent
// potential command injection attacks.
else if(reForbiddenIdentifierChars.test(variable)){throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function toLower(value){return toString(value).toLowerCase();}/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */function toUpper(value){return toString(value).toUpperCase();}/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return baseTrim(string);}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.slice(0,trimmedEndIndex(string)+1);}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */var upperFirst=createCaseFirst('toUpperCase');/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*/ /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});/**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */function constant(value){return function(){return value;};}/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var flow=createFlow();/**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */var flowRight=createFlow(true);/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */function identity(value){return value;}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */function noop(){// No operation performed.
}/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var over=createOver(arrayMap);/**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */var overEvery=createOver(arrayEvery);/**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */var overSome=createOver(arraySome);/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var range=createRange();/**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */var rangeRight=createRange(true);/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */function stubArray(){return[];}/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function stubFalse(){return false;}/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */function stubObject(){return{};}/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function stubString(){return'';}/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */function stubTrue(){return true;}/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*/ /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */var ceil=createRound('ceil');/**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */var floor=createRound('floor');/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined;}/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */function mean(array){return baseMean(array,identity);}/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined;}/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}/**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */var round=createRound('round');/**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/ // Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
mixin(lodash,lodash);/*------------------------------------------------------------------------*/ // Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*/ /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */lodash.VERSION=VERSION;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'';if(!hasOwnProperty.call(realNames,key)){realNames[key]=[];}realNames[key].push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/ // Export lodash.
var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
if(true){// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
root._=_;// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return _;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}// Check for `exports` after `define` in case a build optimizer adds it.
else {}}).call(this);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"NanumBarunGothic\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot\");\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix\") format(\"embedded-opentype\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff\") format(\"woff\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"NanumBarunGothic\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot\");\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff\") format(\"woff\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"NanumBarunGothic\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot\");\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix\") format(\"embedded-opentype\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff\") format(\"woff\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pretendard-Regular\";\n  src: url(\"https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: apple-system, \"Apple SD Gothic Neo\", \"Pretendard-Regular\", \"Noto Sans KR\", sans-serif;\n}\n\n.sr-only {\n  overflow: hidden;\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  clip-path: inset(50%);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n}\n\nhtml {\n  font-size: 16px;\n  overflow-y: visible;\n}\n\nbody,\nbody::before,\nbody::after,\nbody *,\nbody *::before,\nbody *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody * {\n  -webkit-tap-highlight-color: rgba(255, 255, 200, 0.3);\n}\n\nbody {\n  font-family: \"Spoqa Han Sans\", \"Sans-serif\";\n  font-size: inherit;\n  background-color: #fff;\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: inherit;\n}\n\nul,\nol {\n  padding-left: 0;\n  list-style: none;\n}\n\nimg {\n  vertical-align: middle;\n  max-width: 100%;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\naddress,\nem {\n  font-style: normal;\n}\n\nfieldset {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\n\nlegend {\n  overflow: hidden;\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  clip-path: inset(50%);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.container {\n  min-width: 320px;\n}\n\n.header-top {\n  width: 100%;\n  border-bottom: 1px solid #f2f4f5;\n  font-size: 0.875rem;\n}\n.header-top__container {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 0 1.875rem;\n}\n@media (max-width: 767px) {\n  .header-top__container {\n    height: 39px;\n  }\n}\n.header-top__category {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-top__category__item {\n  position: relative;\n  padding: 0.6875rem 0.75rem;\n}\n.header-top__category__item.dot::after {\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  position: absolute;\n  right: 0;\n  width: 3px;\n  height: 3px;\n  border-radius: 3px;\n  background: #e6e6e6;\n}\n.header-top__category__item:first-child {\n  padding-left: 0;\n}\n.header-top__category__link {\n  display: block;\n  color: #666666;\n  font-weight: 600;\n}\n.header-top__category__link:hover {\n  color: #d1d5d9;\n}\n.header-top__category__link.is-selected {\n  color: #000;\n}\n.header-top__category__link:last-child {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-top__service {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-top__service__list {\n  color: #666666;\n}\n.header-top__service__link {\n  position: relative;\n  display: block;\n  padding: 0.6875rem 0.75rem;\n  color: #666666;\n}\n.header-top__service__link.dot::after {\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  position: absolute;\n  right: 0;\n  width: 3px;\n  height: 3px;\n  border-radius: 3px;\n  background: #e6e6e6;\n}\n\n.header-down {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  background: #fff;\n  max-width: 1170px;\n  padding: 1.125rem 1.875rem;\n}\n.header-down__nav {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-down__nav__title {\n  margin-right: auto;\n}\n.header-down__form {\n  position: relative;\n  margin-right: 8px;\n}\n.header-down__form__search__container {\n  display: none;\n}\n.header-down__form__search__container.is-focus {\n  display: block;\n  position: absolute;\n  width: 464px;\n  margin-top: 0.625rem;\n  padding-top: 0.375rem;\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n  background: #fff;\n  overflow: hidden;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out 0s;\n  box-shadow: rgba(0, 0, 0, 0.08) 5px 5px 10px;\n  z-index: 8000;\n}\n.header-down__form__search__books {\n  text-align: center;\n  line-height: 18px;\n  padding-top: 3.75rem;\n  padding-bottom: 3.75rem;\n  color: #a5a5a5;\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n.header-down__form__search__item {\n  padding: 0.5rem 0.75rem;\n}\n.header-down__form__search__title {\n  display: inline-block;\n  margin: 0px 0.3125rem 0.1875rem;\n  line-height: 22px;\n  font-size: 0.875rem;\n}\n.header-down__form__search__title__match {\n  color: #1e9eff;\n}\n.header-down__form__search__author {\n  display: inline-block;\n  margin: 0px 0.3125rem 0.1875rem;\n  line-height: 22px;\n  font-size: 0.75rem;\n  color: #787878;\n}\n.header-down__form__container {\n  width: 259px;\n  background: #f0f0f0;\n  border-radius: 8px;\n}\n.header-down__form__input {\n  border: none;\n  background: #f0f0f0;\n  caret-color: #1e9eff;\n}\n.header-down__form__input:focus {\n  outline: none;\n}\n.header-down__form__label {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 0.6875rem;\n  height: 40px;\n}\n.header-down__form__icon {\n  width: 20px;\n  height: 20px;\n  color: #808991;\n  margin-right: 0.75rem;\n  transform: translateY(3px);\n}\n@media (max-width: 767px) {\n  .header-down__form__icon {\n    transform: translateY(0px);\n  }\n}\n.header-down__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 208px;\n}\n.header-down__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  width: 40px;\n  height: 40px;\n  font-size: 1.625rem;\n  color: #141414;\n}\n.header-down__item:last-child {\n  margin-right: 0;\n}\n.header-down__login {\n  display: none;\n}\n.header-down__login__link {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #dddddd;\n  border-radius: 16px;\n}\n\n.toaster {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  left: 50%;\n  width: 400px;\n  padding: 0.375rem 0.375rem 0.375rem 1.625rem;\n  color: #5abf0d;\n  background-color: #191919;\n  transform: translate3d(-50%, 0, 0);\n  border-radius: 5px;\n  animation: toast 4s ease forwards;\n  opacity: 0;\n}\n.toaster .toaster-text {\n  width: 310px;\n}\n.toaster .bxs-check-circle {\n  margin-top: 0.0625rem;\n}\n.toaster .bx-x {\n  color: #666666;\n  font-size: 30px;\n  margin-top: 0.0625rem;\n  cursor: pointer;\n}\n\n@keyframes toast {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 0, 0);\n  }\n  20%, 50%, 80% {\n    opacity: 1;\n    transform: translate3d(-50%, 220%, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n.carousel__button .prev {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  border: 2px solid #f2f4f5;\n  border-radius: 50%;\n  font-size: 1.625rem;\n  color: #787878;\n  left: -20px;\n}\n.carousel__button .next {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  border: 2px solid #f2f4f5;\n  border-radius: 50%;\n  font-size: 1.625rem;\n  color: #787878;\n  right: -20px;\n}\n\n.top-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 30px;\n  right: 25px;\n  width: 58px;\n  height: 58px;\n  border: 1px solid #e6e6e6;\n  border-radius: 50%;\n  background: #fff;\n  font-size: 1.875rem;\n  color: #787878;\n}\n@media (max-width: 767px) {\n  .top-button {\n    width: 40px;\n    height: 40px;\n    font-size: 1.5rem;\n  }\n}\n\n.carousel__star {\n  color: #dc3232;\n  font-size: 0.875rem;\n}\n@media (max-width: 767px) {\n  .carousel__star {\n    font-size: 0.75rem;\n  }\n}\n.carousel__rate {\n  color: #666666;\n  font-size: 0.875rem;\n}\n@media (max-width: 767px) {\n  .carousel__rate {\n    font-size: 0.75rem;\n  }\n}\n\n.main__carousel {\n  position: relative;\n  height: 400px;\n  margin: 0 1.875rem;\n  border-radius: 5px;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 767px) {\n  .main__carousel {\n    margin: 1.125rem;\n    height: 330px;\n  }\n}\n.main__carousel__inner {\n  height: 100%;\n  overflow: hidden;\n}\n.main__carousel__wrap {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  transform: translateX(-53px);\n}\n.main__carousel__item {\n  min-width: 45px;\n  height: 400px;\n  margin-left: 8px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .main__carousel__item {\n    height: 330px;\n  }\n}\n.main__carousel__item.currentSlide {\n  min-width: calc(100% - 108px);\n}\n.main__carousel__item.currentSlide .main__carousel__desc {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.main__carousel__item.nextSlide .main__carousel__desc {\n  opacity: 0;\n}\n.main__carousel__item:first-child {\n  margin-left: 0;\n}\n.main__carousel__link {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.main__carousel__link img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@keyframes visible {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.main__carousel__desc {\n  position: absolute;\n  bottom: 40px;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  animation-fill-mode: forwards;\n  padding-left: 2.5rem;\n}\n@media (max-width: 767px) {\n  .main__carousel__desc {\n    bottom: 20px;\n    padding-left: 1.25rem;\n  }\n}\n.main__carousel__info {\n  display: flex;\n}\n.main__carousel__info span {\n  font-size: 0.6875rem;\n  padding: 0.25rem 0.375rem;\n  border: 1px solid #fff;\n}\n.main__carousel__title {\n  font-size: calc(0.875rem + 1.5vw);\n  font-size: 2rem;\n  font-weight: 600;\n  margin-top: 0.5rem;\n}\n.main__carousel__subTitle {\n  margin-top: 0.375rem;\n  opacity: 0.8;\n  font-size: calc(0.53125rem + 0.5vw);\n}\n.main__carousel__counter {\n  position: absolute;\n  right: 40px;\n  bottom: 0;\n  width: fit-content;\n  height: 20px;\n  padding: 0 0.5rem;\n  line-height: 22px;\n  font-size: 0.875rem;\n  background: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n}\n@media (max-width: 767px) {\n  .main__carousel__counter {\n    right: 10px;\n    font-size: 0.6875rem;\n    padding: 0 0.375rem;\n  }\n}\n.main__carousel__counter span {\n  color: #fff;\n}\n.main__carousel .carousel__button {\n  display: flex;\n}\n.main__carousel .carousel__button .prev {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  position: absolute;\n  bottom: 0;\n}\n.carousel__info .bxl-upwork {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 28px;\n  height: 28px;\n  background: #20cdcc;\n  color: #fff;\n  border-radius: 0 0 0 5px;\n}\n@media (max-width: 767px) {\n  .carousel__info .bxl-upwork {\n    font-size: 0.875rem;\n    width: 23px;\n    height: 23px;\n  }\n}\n.carousel__info .bx-time-five {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 28px;\n  height: 28px;\n  background: #1f9fff;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .carousel__info .bx-time-five {\n    font-size: 0.875rem;\n    width: 23px;\n    height: 23px;\n  }\n}\n.carousel__free-count {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n  height: 28px;\n  background: #324254;\n  padding: 0.5rem 0.375rem;\n  border-radius: 0 5px 0 0;\n}\n@media (max-width: 767px) {\n  .carousel__free-count {\n    height: 23px;\n    font-size: 0.375rem;\n  }\n}\n\n.main-container .rank {\n  position: relative;\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .rank {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .rank__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__title {\n    font-size: 1.125rem;\n  }\n}\n.main-container .rank__carousel {\n  margin-top: 1rem;\n  overflow: hidden;\n}\n.main-container .rank__carousel .carousel__button .prev {\n  top: 230px;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel .carousel__button .prev {\n    top: 155.5px;\n  }\n}\n.main-container .rank__carousel .carousel__button .next {\n  top: 230px;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel .carousel__button .next {\n    top: 155.5px;\n  }\n}\n.main-container .rank__carousel__list {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: 368px;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__list {\n    height: 273px;\n  }\n}\n.main-container .rank__carousel__item {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 370px;\n  height: 116px;\n  margin-bottom: 0.375rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__item {\n    width: 327px;\n    height: 87px;\n    margin-bottom: 0.1875rem;\n  }\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__link {\n    width: 60px;\n    height: 87px;\n  }\n}\n.main-container .rank__carousel__img {\n  display: block;\n  width: 80px;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n}\n.main-container .rank__carousel__desc {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: stretch;\n  width: 184px;\n  margin-right: 1.625rem;\n}\n.main-container .rank__carousel__num {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  font-weight: 600;\n  font-size: 1.125rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__num {\n    font-size: 0.875rem;\n  }\n}\n.main-container .rank__carousel__title {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__title {\n    font-size: 0.875rem;\n  }\n}\n.main-container .rank__carousel__info {\n  color: #666666;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__info {\n    font-size: 0.6875rem;\n  }\n}\n\n.main-container .webtoon {\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .webtoon__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 1.25rem;\n}\n.main-container .webtoon__carousel {\n  position: relative;\n}\n.main-container .webtoon__carousel .carousel__button .prev {\n  top: 130.5px;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel .carousel__button .prev {\n    top: 84px;\n  }\n}\n.main-container .webtoon__carousel .carousel__button .next {\n  top: 130.5px;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel .carousel__button .next {\n    top: 84px;\n  }\n}\n.main-container .webtoon__carousel__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.main-container .webtoon__carousel__item {\n  width: 16.66%;\n  min-width: 180px;\n  height: 355px;\n  margin-right: 0.3125rem;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__item {\n    min-width: 120px;\n    height: 249px;\n  }\n}\n.main-container .webtoon__carousel__thumbnail {\n  position: relative;\n  width: 177px;\n  height: 258px;\n  margin-bottom: 0.625rem;\n  border: 1px solid #dddddd;\n  border-radius: 5px;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__thumbnail {\n    width: 120px;\n    height: 170px;\n  }\n}\n.main-container .webtoon__carousel__img {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n}\n.main-container .webtoon__carousel__title {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.375rem;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__title {\n    margin-bottom: 0.125rem;\n    font-size: 0.8125rem;\n  }\n}\n.main-container .webtoon__carousel__author {\n  color: #666666;\n  font-size: 0.875rem;\n  margin-bottom: 0.375rem;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__author {\n    margin-bottom: 0.125rem;\n    font-size: 0.75rem;\n  }\n}\n\n.my__left__menu__container {\n  display: table-cell;\n  vertical-align: top;\n  width: 235px;\n  padding-bottom: 20rem;\n}\n.my__left__menu__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1rem;\n  color: #212529;\n  letter-spacing: -0.03rem;\n}\n\n.my__nav__menu {\n  width: 130px;\n  margin-top: 0.5625rem;\n}\n.my__nav__menu__home {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n}\n.my__nav__menu__section {\n  padding: 1.0625rem 0 1.1875rem;\n  border-bottom: 2px solid #e5e5e5;\n}\n.my__nav__menu__section__title {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n}\n.my__nav__menu__section__title span {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #738096;\n  letter-spacing: -0.03rem;\n  padding-right: 0.4375rem;\n  vertical-align: -5%;\n}\n.my__nav__menu__section__list {\n  padding: 0.0625rem 0 0 1.375rem;\n  list-style: none;\n}\n\n.my__left__icon {\n  padding-top: 0.25rem;\n  margin-right: 0.4375rem;\n  font-size: 1rem;\n  color: #738096;\n}\n\n.my__section__link {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  display: block;\n  padding-top: 0.875rem;\n}\n.my__section__link:hover {\n  color: #666666;\n}\n.my__section__link.active {\n  color: #1f8ce6;\n}\n\n.my__myridi__header {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 100%;\n  max-width: 717px;\n  border: 2px solid #000;\n  table-layout: fixed;\n}\n.my__myridi__header .my__account__info {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  margin: 0.0625rem;\n  flex-shrink: 0;\n  max-width: 150px;\n  padding: 1.5rem 1.25rem 1.25rem;\n  background: #ebf6ff;\n  box-sizing: content-box;\n}\n.my__myridi__header .my__account__info__container {\n  min-height: 85px;\n  padding-bottom: 1.25rem;\n}\n.my__myridi__header .my__account__info__id {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.2rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n  word-break: break-all;\n}\n.my__myridi__header .my__account__info__email {\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 1.5rem;\n  color: #808991;\n  letter-spacing: -0.01rem;\n  word-break: break-all;\n  margin-top: 0.3125rem;\n}\n.my__myridi__header .my__account__info .my__btn__logout {\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1.2rem;\n  color: #9ea7ad;\n  letter-spacing: -0.03rem;\n  display: block;\n  width: 64px;\n  text-align: center;\n  padding: 0.4375rem 0;\n  border: 2px solid #d6deeb;\n  border-radius: 3px;\n}\n.my__myridi__header .my__account__info .my__btn__logout:hover {\n  background: #dfeef8;\n  border-color: #b3c2d1;\n}\n.my__myridi__header .my__asset__info {\n  padding: 1.6875rem 0;\n}\n.my__myridi__header .my__asset__info .my__border__line {\n  display: block;\n  width: calc(100% - 60px);\n  border: none;\n  border-top: 1px solid #e5e8eb;\n  margin: 1.75rem auto 1.8125rem;\n}\n.my__myridi__header .my__asset__table {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.my__myridi__header .my__asset__cell {\n  display: table-cell;\n  text-align: center;\n  vertical-align: top;\n}\n.my__myridi__header .my__asset__cell .my__info__container {\n  position: relative;\n  text-align: center;\n}\n.my__myridi__header .my__asset__cell .my__info__title .my__text {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1.125rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n  display: block;\n  margin-top: 0.625rem;\n}\n.my__myridi__header .my__asset__cell .my__info__icon {\n  font-size: 1.875rem;\n}\n.my__myridi__header .my__asset__cell .my__info__amount {\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  color: #4b9bf8;\n  letter-spacing: -0.02rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  margin-top: 0.4375rem;\n}\n.my__myridi__header .my__asset__cell .my__info__amount .my__amount {\n  font-weight: 400;\n  font-size: 1.75rem;\n  line-height: 2.0625rem;\n  color: #4b9bf8;\n  letter-spacing: -0.01rem;\n  font-family: \"Roboto\";\n  vertical-align: -8%;\n  padding-right: 0.125rem;\n}\n.my__myridi__header .my__asset__cell .my__info__link {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-indent: -9999px;\n  left: 0;\n  top: 0;\n}\n.my__myridi__header .my__asset__cell .my__extra__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: stretch;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #626d75;\n  letter-spacing: -0.02rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  position: relative;\n  left: 5px;\n  margin-top: 1.0625rem;\n}\n.my__myridi__header .my__asset__cell .my__extra__info .my__checkout__link {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #626d75;\n  letter-spacing: -0.02rem;\n}\n.my__myridi__header .my__asset__cell .my__extra__info .my__point {\n  margin-left: 0.25rem;\n  font-weight: 600;\n  color: #000;\n}\n.my__myridi__header .my__asset__cell .my__extra__info .my__coupon__btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #626d75;\n  letter-spacing: -0.02rem;\n  padding-right: 0.875rem;\n}\n\n.my__myridi__recents {\n  margin-top: 2.5rem;\n  max-width: 717px;\n  overflow: hidden;\n}\n.my__myridi__recents .my__recents__container {\n  position: relative;\n}\n.my__myridi__recents .my__recents__container::before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e5e5e5;\n  left: 0;\n  top: 50%;\n  margin-top: -0.1875rem;\n  z-index: 1;\n}\n.my__myridi__recents .my__recents__container::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  display: block;\n  clear: both;\n}\n.my__myridi__recents .my__recents__title {\n  font-weight: 700;\n  font-size: 1.125rem;\n  line-height: 1rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n  float: left;\n  position: relative;\n  background: #fff;\n  padding: 0.3125rem 0.875rem 0.375rem 0;\n  margin: 0;\n  z-index: 2;\n}\n.my__myridi__recents .my__more__btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #fff;\n  letter-spacing: -0.03rem;\n  position: relative;\n  display: inline-block;\n  width: 80px;\n  text-align: center;\n  padding: 0.4375rem 0.9375rem 0.4375rem 0.4375rem;\n  background: #303538;\n  border-radius: 2px;\n  border: 1px solid #303538;\n}\n.my__myridi__recents .my__more__btn__wrapper {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  float: right;\n  background: #fff;\n  padding-left: 0.875rem;\n  z-index: 2;\n}\n.my__myridi__recents .my__more__btn .my__icon-arrow__right::before {\n  position: absolute;\n  display: inline-block;\n  font-size: 0.375rem;\n  top: calc(50% - 4px);\n}\n.my__myridi__recents .my__recents__empty {\n  padding-top: 5.625rem;\n  padding-bottom: 5.625rem;\n  margin-top: 1.25rem;\n  border: 4px solid #f2f4f5;\n}\n.my__myridi__recents .my__recents__empty__desc {\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  color: #9ea7ad;\n  letter-spacing: -0.03em;\n  text-align: center;\n}\n.my__myridi__recents .my__recents__books {\n  margin-top: 1.25rem;\n  display: flex;\n  gap: 40px;\n  overflow: hidden;\n}\n.my__myridi__recents .my__recents__books .my__book__thumbnail__wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  display: block;\n  text-align: left;\n  height: 167px;\n  width: 110px;\n}\n.my__myridi__recents .my__recents__books .my__book__thumbnail__wrapper .my__book__thumbnail {\n  border: 1px solid #f0f0f0;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: block;\n  margin-top: 0.1875rem;\n  width: 110px;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper .my__meta__title {\n  margin-top: 0.1875rem;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper .my__meta__title .my__title__link {\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1.4rem;\n  color: #333;\n  letter-spacing: -0.03rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: block;\n  max-height: 2.7em;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper .my__author {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.2rem;\n  color: #666666;\n  letter-spacing: -0.03rem;\n  max-height: 3.1em;\n}\n\n.my__ridicash__header {\n  padding: 2.625rem 0 1.875rem 0;\n  background: url(\"/assets/mypage/ridicash@2x.png\") right top no-repeat;\n  background-size: 269px 177px;\n  max-width: 740px;\n}\n.my__ridicash__header__title {\n  font-weight: 400;\n  font-size: 1.625rem;\n  line-height: 2.25rem;\n  color: #212529;\n  letter-spacing: -0.03rem;\n}\n.my__ridicash__header__desc {\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.3125rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  margin-top: 0.9375rem;\n}\n.my__ridicash__header__btn {\n  font-weight: 700;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  position: relative;\n  border-radius: 0.25rem;\n  display: inline-block;\n  text-align: center;\n  vertical-align: baseline;\n  border: 0.0625rem solid #d1d5d9;\n  box-shadow: 0 0.0625rem 0.0625rem rgba 209, 213, 217, 0.3;\n  margin-top: 0.875rem;\n  padding: 0.5rem 1.25rem 0.5rem 0.75rem;\n  height: 2rem;\n}\n.my__ridicash__header__btn:hover {\n  background-color: #f2f4f5;\n}\n.my__ridicash__header__btn i {\n  color: #1f8ce6;\n}\n.my__ridicash__amount {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n  margin-top: 2.5rem;\n}\n.my__ridicash__amount__won {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1rem;\n  color: #1f8ce6;\n  letter-spacing: -0.03rem;\n  padding-left: 0.1875rem;\n}\n.my__ridicash__amount__num {\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1.0625rem;\n  color: #1f8ce6;\n  letter-spacing: -0.03rem;\n  vertical-align: top;\n}\n.my__ridicash__select {\n  border-top: 2px solid #ccc;\n  border-bottom: 2px solid #ccc;\n}\n.my__ridicash__select__column {\n  padding-top: 0.625rem;\n  border-top: 1px solid #d1d5d9;\n}\n.my__ridicash__select__column:first-child {\n  border-top: 0;\n}\n.my__ridicash__select__column hr {\n  border: 0;\n  height: 0.5px;\n  background-color: #d1d5d9;\n}\n.my__ridicash__select__head {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  text-align: right;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.my__ridicash__select__head span {\n  flex-grow: 1;\n}\n.my__ridicash__select__head span:nth-child(3) {\n  flex-grow: 1.2;\n  margin-right: 0.9375rem;\n}\n.my__ridicash__select__head.my__auto span:nth-child(2) {\n  position: relative;\n}\n.my__ridicash__select__head.my__auto span:nth-child(2) i {\n  position: absolute;\n  font-size: 1.875rem;\n  color: #EECF4E;\n  top: -0.375rem;\n}\n.my__ridicash__select__head.my__auto span:nth-child(2) i::after {\n  content: \"x2\";\n  position: absolute;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #fff;\n  letter-spacing: -0.03rem;\n  top: 5px;\n  left: 7px;\n}\n.my__ridicash__select__list {\n  text-align: right;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-top: 0.125rem;\n}\n.my__ridicash__select__list:first-child {\n  margin-top: 0;\n}\n.my__ridicash__select__list input[type=radio] {\n  display: none;\n}\n.my__ridicash__select__list input[type=radio]:checked + label, .my__ridicash__select__list input[type=radio]:checked + label em {\n  background: #f7fbff;\n  border-radius: 1.5625rem;\n  color: #1f8ce6;\n}\n.my__ridicash__select__list input[type=radio]:checked + label .my__auto__span span:nth-child(1), .my__ridicash__select__list input[type=radio]:checked + label em .my__auto__span span:nth-child(1) {\n  color: #99d1ff;\n}\n.my__ridicash__select__list input[type=radio]:checked + label .my__auto__span span:nth-child(2), .my__ridicash__select__list input[type=radio]:checked + label em .my__auto__span span:nth-child(2) {\n  color: #99d1ff;\n}\n.my__ridicash__select__list input[type=radio]:checked + label::before {\n  content: \"\";\n  position: absolute;\n  left: 0.9375rem;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #0077d9;\n  border-radius: 50%;\n  background: #1e9eff;\n}\n.my__ridicash__select__list input[type=radio]:checked + label::after {\n  content: \"\";\n  position: absolute;\n  transform: translateY(-50%);\n  top: 50%;\n  left: 1.3125rem;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.my__ridicash__select__list label {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n}\n.my__ridicash__select__list label:hover {\n  background: #f2f4f5;\n  border-radius: 1.5625rem;\n  transition: all 0.25s ease;\n}\n.my__ridicash__select__list label::before {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  background: #fff;\n  transform: translateY(-1px);\n}\n.my__ridicash__select__list label em {\n  font-size: 0.8125rem;\n  font-weight: 400;\n  color: #808991;\n}\n.my__ridicash__select__list span:nth-of-type(1) {\n  width: 210px;\n}\n.my__ridicash__select__list span:nth-of-type(2) {\n  width: 165px;\n}\n.my__ridicash__select__list span:nth-of-type(2).my__auto__span {\n  position: relative;\n  left: 30px;\n}\n.my__ridicash__select__list span:nth-of-type(2).my__auto__span span:nth-child(1) {\n  color: #d1d5d9;\n  text-decoration: line-through;\n}\n.my__ridicash__select__list span:nth-of-type(2).my__auto__span span:nth-child(2) {\n  color: #d1d5d9;\n  position: relative;\n  top: 2px;\n}\n.my__ridicash__select__list span:nth-of-type(3) {\n  width: 247px;\n  margin-right: 0.9375rem;\n}\n.my__ridicash__select__list span.my__auto {\n  margin: 0;\n}\n.my__ridicash__payment__ul {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 0.75rem 1rem 1.25rem;\n  border: 1px solid #d6e3f0;\n}\n.my__ridicash__payment__title {\n  padding-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #303538;\n  line-height: 19px;\n  margin-top: 1.25rem;\n}\n.my__ridicash__payment__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  position: relative;\n  width: 140px;\n  height: 20px;\n  margin: 0.3125rem;\n  color: #636c73;\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.my__ridicash__payment__list input {\n  appearance: none;\n  width: 0;\n  height: 0;\n}\n.my__ridicash__payment__list input:checked + label::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #0077d9;\n  border-radius: 50%;\n  background: #1e9eff;\n}\n.my__ridicash__payment__list input:checked + label::after {\n  content: \"\";\n  position: absolute;\n  transform: translateY(-65%);\n  top: 45%;\n  left: 6px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.my__ridicash__payment__list__label {\n  padding-left: 0.625rem;\n}\n.my__ridicash__payment__list__label::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  background: #fff;\n  transform: translateY(-1px);\n}\n.my__ridicash__payment__list__label .naver-pay {\n  display: block;\n  background: url(\"/assets/mypage/naverPay.svg\") center center no-repeat;\n  text-indent: -9999px;\n  font-size: 0;\n  width: 100px;\n}\n.my__ridicash__payment__list__label .kakao-pay {\n  display: block;\n  background: url(\"/assets/mypage/kakaoPay.svg\") center center no-repeat;\n  text-indent: -9999px;\n  background-color: #ffeb00;\n  background-size: 36px 11px;\n  width: 48px;\n  height: 20px;\n  border-radius: 10px;\n  margin-left: 1.25rem;\n}\n.my__ridicash__payment__list__label .samsung-pay {\n  background: url(\"/assets/mypage/samsungPay.svg\") center center no-repeat;\n  text-indent: -9999px;\n  margin-left: 1.25rem;\n  width: 100px;\n}\n.my__ridicash__payment__list__label .payco {\n  background: url(\"/assets/mypage/payco.svg\") center center no-repeat;\n  text-indent: -9999px;\n  width: 100px;\n}\n.my__ridicash__payment__list__label span {\n  display: block;\n  text-indent: 15px;\n}\n\n.my__ridicash__auto__desc {\n  display: flex;\n  padding-left: 2rem;\n  border: solid 0.25rem #f2f4f5;\n  margin-top: 0.875rem;\n}\n.my__ridicash__auto__desc__box1 {\n  display: flex;\n  width: 100%;\n  padding: 1.625rem 0;\n}\n.my__ridicash__auto__desc__box1 img {\n  width: 5rem;\n  height: 3.125rem;\n}\n.my__ridicash__auto__desc__box2 {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-left: 1.25rem;\n}\n.my__ridicash__auto__desc__box2 span:nth-child(1) {\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1.33rem;\n  color: #525a61;\n  letter-spacing: -0.03rem;\n  margin-top: 0.625rem;\n}\n.my__ridicash__auto__desc__box2 span:nth-child(2) {\n  margin-top: 0.1875rem;\n}\n.my__ridicash__auto__header {\n  padding: 1.875rem 5rem 1.25rem 0;\n}\n.my__ridicash__auto__header__desc {\n  margin-top: 0.25rem;\n}\n.my__ridicash__auto__header__title {\n  font-weight: 400;\n  font-size: 1.625rem;\n  line-height: 1.38rem;\n  color: #212529;\n  letter-spacing: -0.03rem;\n  height: 2.1875rem;\n}\n.my__ridicash__auto__form__title {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n  margin: 0.625rem 0 1.125rem 0;\n}\n.my__ridicash__auto__payment {\n  padding: 1.875rem 0 1.25rem 0;\n  display: flex;\n}\n.my__ridicash__auto__payment__title {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n}\n.my__ridicash__auto__payment input[type=radio] {\n  display: none;\n}\n.my__ridicash__auto__payment input[type=radio]:checked + label {\n  color: #1f8ce6;\n}\n.my__ridicash__auto__payment input[type=radio]:checked + label::before {\n  content: \"\";\n  position: absolute;\n  left: -1.5625rem;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #0077d9;\n  border-radius: 50%;\n  background: #1e9eff;\n}\n.my__ridicash__auto__payment input[type=radio]:checked + label::after {\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  position: absolute;\n  left: -1.1875rem;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.my__ridicash__auto__payment label {\n  position: relative;\n  margin-left: 3.125rem;\n}\n.my__ridicash__auto__payment label::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  background: #fff;\n  transform: translateY(-1px);\n}\n.my__ridicash__auto__payment__notice {\n  padding: 1.25rem 0 1.25rem 13.125rem;\n  border: 4px solid #f2f4f5;\n  margin-bottom: 1.25rem;\n}\n.my__ridicash__auto__payment__notice p:nth-child(1) {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n  margin-bottom: 0.25rem;\n}\n.my__ridicash__auto__payment__notice p:nth-child(1) i {\n  font-size: 1.25rem;\n  color: #1f8ce6;\n}\n.my__ridicash__auto__payment__notice p:nth-child(1) span {\n  color: #1f8ce6;\n}\n.my__ridicash__auto__payment__notice p:nth-child(2) {\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n  text-indent: 1.375rem;\n}\n\n.main-container .nav {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 0 1.875rem;\n}\n@media (max-width: 767px) {\n  .main-container .nav {\n    padding: 0;\n  }\n}\n.main-container .nav__category__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  border-bottom: 1px solid #f2f4f5;\n}\n@media (max-width: 767px) {\n  .main-container .nav__category__list {\n    margin: 0;\n  }\n}\n.main-container .nav__category__item {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 60px;\n  height: 65px;\n}\n@media (max-width: 767px) {\n  .main-container .nav__category__item {\n    height: 40px;\n    justify-content: center;\n  }\n}\n.main-container .nav__category__item:hover {\n  color: #666666;\n}\n.main-container .nav__category__item.is-selected {\n  color: #1e9eff;\n  font-weight: 700;\n}\n.main-container .nav__category__link {\n  display: block;\n  font-size: 1.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .nav__category__link {\n    font-size: 1rem;\n  }\n}\n.main-container .nav__genre__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 100%;\n  padding: 0.625rem 0;\n  height: 52px;\n}\n@media (max-width: 767px) {\n  .main-container .nav__genre__list {\n    padding: 0.625rem;\n    font-size: 0.875rem;\n  }\n}\n.main-container .nav__genre__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 51px;\n  height: 100%;\n  margin-right: 0.625rem;\n}\n@media (max-width: 767px) {\n  .main-container .nav__genre__item {\n    margin: 0 0.1875rem;\n  }\n}\n.main-container .nav__genre__item:hover {\n  color: #666666;\n}\n.main-container .nav__genre__item.is-selected {\n  color: #fff;\n  background: #1e9eff;\n  border-radius: 40px;\n}\n.main-container .main {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n}\n.main-container .main .new-arrival {\n  margin: 1.875rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival {\n    margin: 0;\n  }\n}\n.main-container .main .new-arrival__list {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__list {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.main-container .main .new-arrival__item {\n  text-align: center;\n  margin-right: 1.25rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__item {\n    margin-right: 0.625rem;\n  }\n}\n.main-container .main .new-arrival__item:last-child {\n  margin-right: 0;\n}\n.main-container .main .new-arrival__icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__icon {\n    width: 56px;\n    height: 56px;\n  }\n}\n.main-container .main .new-arrival__icon .bx {\n  font-size: 1.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__icon .bx {\n    font-size: 1.125rem;\n  }\n}\n.main-container .main .new-arrival__title {\n  font-size: 0.8125rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__title {\n    font-size: 0.6875rem;\n  }\n}\n.main-container .event {\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .event {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .event__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 1.875rem;\n}\n@media (max-width: 767px) {\n  .main-container .event__title {\n    margin-bottom: 0.625rem;\n  }\n}\n.main-container .event__carousel {\n  position: relative;\n}\n.main-container .event__carousel__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  justify-content: space-between;\n}\n.main-container .event__carousel__item {\n  border-radius: 5px;\n  width: calc(33.33% - 7px);\n  flex-shrink: 0;\n  margin: 0 3.5px;\n}\n@media (max-width: 1169px) {\n  .main-container .event__carousel__item {\n    width: calc(50% - 7px);\n  }\n}\n@media (max-width: 767px) {\n  .main-container .event__carousel__item {\n    width: calc(100% - 7px);\n  }\n}\n.main-container .event__carousel__item.switch {\n  background: #007af0;\n}\n.main-container .event__carousel__item.up {\n  background: #987db3;\n}\n.main-container .event__carousel__item.early {\n  background: #954cc3;\n}\n.main-container .event__carousel__item.cash {\n  background: #be1d22;\n}\n.main-container .event__carousel__link {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n.main-container .event__carousel__sub {\n  position: absolute;\n  left: 0;\n  margin-left: 1.5rem;\n  font-size: 0.875rem;\n  color: #fff;\n}\n.main-container .event__carousel__img {\n  width: 200px;\n  border-radius: 5px;\n}\n.main-container .only-ridi {\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .only-ridi {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .only-ridi__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.main-container .only-ridi__carousel {\n  position: relative;\n}\n.main-container .only-ridi__carousel .carousel__button .prev {\n  top: 90px;\n}\n.main-container .only-ridi__carousel .carousel__button .next {\n  top: 90px;\n}\n.main-container .only-ridi__carousel__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding-top: 2.5rem;\n}\n.main-container .only-ridi__carousel__item {\n  margin: 0 3.5px;\n  width: calc(33.33% - 7px);\n  flex-shrink: 0;\n}\n@media (max-width: 1169px) {\n  .main-container .only-ridi__carousel__item {\n    width: calc(50% - 7px);\n  }\n}\n@media (max-width: 767px) {\n  .main-container .only-ridi__carousel__item {\n    width: calc(100% - 7px);\n  }\n}\n.main-container .only-ridi__carousel__bg {\n  position: relative;\n  height: 100px;\n  border-radius: 5px;\n}\n.main-container .only-ridi__carousel__bg.bg-red {\n  background: #e05427;\n}\n.main-container .only-ridi__carousel__bg.bg-purple {\n  background: #382e48;\n}\n.main-container .only-ridi__carousel__bg.bg-yellow {\n  background: #f8b11a;\n}\n.main-container .only-ridi__carousel__bg.bg-urquoise {\n  background: #71adb3;\n}\n.main-container .only-ridi__carousel__img-bg {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.main-container .only-ridi__carousel__img-main {\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  bottom: 0;\n  width: 250px;\n}\n.main-container .only-ridi__carousel__info {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.main-container .only-ridi__carousel__title {\n  font-weight: 600;\n  margin-bottom: 0.625rem;\n  text-align: center;\n}\n.main-container .only-ridi__carousel__sub {\n  color: #666666;\n  font-size: 0.875rem;\n}\n.main-container .carousel-wrap {\n  overflow: hidden;\n}\n.main-container .carousel-list {\n  transition: transform 0.8s;\n}\n.main-container .mini-banner .carousel-list {\n  transition: transform 0.5s;\n}\n.main-container .mini-banner .carousel__button .prev {\n  left: -18px;\n}\n.main-container .mini-banner .carousel__button .next {\n  right: -18px;\n}\n\n.books {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  min-width: 793px;\n  padding-bottom: 6.25rem;\n}\n.books__info {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 2.5rem 1.8125rem;\n}\n.books__info__body {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.books__info__body__thumbnail-wrap {\n  width: 200px;\n}\n.books__info__body__thumbnail-wrap__image {\n  display: block;\n  width: 200px;\n}\n.books__info__body__thumbnail-wrap__preference {\n  display: block;\n  width: 130px;\n  margin: 1rem auto 0;\n  padding: 0.5rem 0;\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px solid #d1d5d9;\n}\n.books__info__body__thumbnail-wrap__preference:hover {\n  background: #f2f4f5;\n}\n.books__info__body__thumbnail-wrap__preference .button_content {\n  color: #787878;\n}\n.books__info__body__thumbnail-wrap__preference .bx {\n  color: #dc3232;\n  vertical-align: middle;\n  margin-right: 0.125rem;\n}\n.books__info__body__thumbnail-wrap__notification {\n  display: block;\n  min-width: 168px;\n  padding: 0.5rem 0.5rem 0.4375rem 0.5rem;\n  font-size: 0.75rem;\n  letter-spacing: -0.3px;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n  color: #1f8ce6;\n  background: #fff;\n  border: 1px solid #1f8ce6;\n  margin: 1rem auto 0;\n}\n.books__info__body__thumbnail-wrap__notification .bx {\n  font-weight: 700;\n}\n.books__info__body__thumbnail-wrap__notification:hover {\n  background: #ebf6ff;\n  color: #1f8ce6;\n}\n.books__info__body__thumbnail-wrap__notification.active {\n  color: #787878;\n  border: 1px solid #9ea7ad;\n}\n.books__info__body__thumbnail-wrap__notification.active:hover {\n  background: none;\n}\n.books__info__body__details-wrap {\n  width: 500px;\n}\n.books__info__body__details-wrap__title {\n  font-size: 1.875rem;\n  color: #333;\n  font-weight: 700;\n}\n.books__info__body__details-wrap__star-rate-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.books__info__body__details-wrap__star-rate-wrap .star-bg {\n  margin-top: 0 !important;\n  margin-right: 0.1875rem;\n}\n.books__info__body__details-wrap__star-rate-wrap__score {\n  color: #fa722e;\n  font-size: 0.875rem;\n  margin-right: 0.125rem;\n  font-weight: 600;\n}\n.books__info__body__details-wrap__star-rate-wrap__people {\n  font-size: 0.75rem;\n  font-weight: 100;\n}\n.books__info__body__details-wrap__metadata-wrap {\n  margin: 1.25rem 0;\n  font-size: 0.8125rem;\n  color: #666666;\n  line-height: 20px;\n}\n.books__info__body__details-wrap__metadata-wrap .font-bold {\n  font-weight: 700;\n}\n.books__info__body__details-wrap__metadata-wrap__writer-info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__info__body__details-wrap__metadata-wrap__writer-info__painter::before {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 11px;\n  background-color: #d1d5d9;\n}\n.books__info__body__details-wrap__metadata-wrap__writer-info__painter::after {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 11px;\n  background-color: #d1d5d9;\n}\n.books__info__body__details-wrap__metadata-wrap__series-complete-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__info__body__details-wrap__metadata-wrap__series-complete-wrap__book-count {\n  letter-spacing: -0.3px;\n}\n.books__info__body__details-wrap__metadata-wrap__series-complete-wrap__book-count::after {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 11px;\n  background-color: #d1d5d9;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  border-top: 1px solid #e6e8eb;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item:last-child {\n  border-bottom: 1px solid #e6e8eb;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .notice-title {\n  display: block;\n  width: 40px;\n  height: 18px;\n  border-radius: 2px;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: center;\n  margin-right: 1rem;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .info-title {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 20px;\n  color: #666666;\n  letter-spacing: -0.7px;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #646c73;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .schedule-title {\n  background: #e3edf7;\n  color: #738097;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-title {\n  background: #f1faeb;\n  color: #5abf0d;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-title {\n  background: #e3e0ee;\n  color: #605baf;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .Wait-free-title {\n  background: #ebf6ff;\n  color: #1f8ce6;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-info a,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-info {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-info a .info-text,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-info a .info-event-more,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-info .info-text,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-info .info-event-more {\n  color: #808991;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n}\n.books__info__body__details-wrap__benefits-Period {\n  position: relative;\n  display: block;\n  margin-top: 1.25rem;\n  text-align: right;\n  color: #808991;\n  font-size: 0.75rem;\n}\n.books__info__body__details-wrap__benefits-Period::before {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 4px;\n  height: 4px;\n  background-color: #808991;\n  top: -2px;\n  left: -1px;\n}\n.books__info__body__details-wrap .first-episode {\n  width: 180px;\n  font-size: 0.9375rem;\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-weight: 700;\n  line-height: 1em;\n  transition: background 0.2s, color 0.2s;\n  color: #fff;\n  background: #1f8ce6;\n  border: 1px solid #0077d9;\n  font-size: 1rem;\n  padding: 1rem 2.125rem;\n  margin-top: 1.25rem;\n}\n.books__info__body__details-wrap .first-episode:hover {\n  background: #0077d9;\n}\n.books__info__footer {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 2.5rem;\n  padding: 1rem 1.625rem;\n  border: solid 4px #f3f4f5;\n  font-size: 0.75rem;\n  color: #666666;\n  letter-spacing: 1px;\n}\n.books__info__footer .info-title {\n  display: inline-block;\n  min-width: 70px;\n  max-width: 70px;\n  padding-right: 0.5rem;\n  font-weight: 700;\n  color: #525a61;\n}\n.books__info__footer__support-info {\n  margin-left: 6.25rem;\n}\n.books__info__footer__metadata-info div, .books__info__footer__support-info div {\n  margin: 0.25rem 0;\n}\n.books__series {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 0 1.8125rem;\n}\n.books__series__buy-tab {\n  position: relative;\n  border-top: 2px solid #666666;\n}\n.books__series__buy-tab__rental__title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-right: 1px solid #ccc;\n}\n.books__series__buy-tab__purchase__title {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-left: 1px solid #ccc;\n}\n.books__series__buy-tab .tab-list > * {\n  display: none;\n}\n.books__series__buy-tab .tab-list .tab-title {\n  display: block;\n  width: 50%;\n  height: 51px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #ccc;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #333;\n  text-align: center;\n  line-height: 51px;\n  cursor: pointer;\n}\n.books__series__buy-tab .tab-list .tab-title:hover {\n  color: #1f8ce6;\n}\n.books__series__buy-tab .tab-list.active > * {\n  display: block;\n}\n.books__series__buy-tab .tab-list.active .tab-title {\n  background: #fff;\n  border: none;\n}\n.books__series__buy-tab .tab-list.active .list-option {\n  display: flex;\n}\n.books__series__buy-tab .tab-list .list-option {\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 3.1875rem;\n  padding: 0.625rem 1.25rem 0.625rem 0.625rem;\n  border-bottom: 1px dotted #bbb;\n}\n.books__series__buy-tab .tab-list .list-option__left {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__series__buy-tab .tab-list .list-option__left .select-all {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n  color: #636c73;\n  font-size: 0.875rem;\n  font-weight: 700;\n  margin-right: 0.625rem;\n  letter-spacing: -0.3px;\n}\n.books__series__buy-tab .tab-list .list-option__left .alignment {\n  padding: 0.375rem 0.75rem;\n  background: #fff;\n  color: #63696e;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  font-size: 0.75rem;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n}\n.books__series__buy-tab .tab-list .list-option__left .alignment:hover {\n  background: #f2f4f5;\n}\n.books__series__buy-tab .tab-list .list-option__right {\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.books__series__buy-tab .tab-list .list-option__right .info_volume {\n  color: #666666;\n}\n.books__series__buy-tab .tab-list .list-option__right .info_price {\n  color: #1f8ce6;\n}\n.books__series__buy-tab .tab-list .list-option__right .cart {\n  padding: 0.375rem 0.75rem;\n  background: #fff;\n  color: #808991;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  border-radius: 4px;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__buy-tab .tab-list .list-option__right .cart:hover {\n  background: #f2f4f5;\n}\n.books__series__buy-tab .tab-list .list-option__right .rental {\n  padding: 0.375rem 0.75rem;\n  color: #fff;\n  background: #1f8ce6;\n  border: 1px solid #0077d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  border-radius: 4px;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__buy-tab .tab-list .list-option__right .rental:hover {\n  background: #0077d9;\n}\n.books__series__item__wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.625rem 1.25rem 0.625rem 0.625rem;\n  transition: background-color 0.2s;\n  cursor: pointer;\n  border-bottom: 1px solid #f2f4f5;\n}\n.books__series__item__wrap:hover {\n  background: #eef1f1;\n}\n.books__series__item__wrap__left-position {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__series__item__wrap__left-position__image {\n  max-width: 40px;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-right: 0.75rem;\n}\n.books__series__item__wrap__left-position__info-wrap__title-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__series__item__wrap__left-position__info-wrap__title-wrap__badge {\n  padding: 0.0625rem 0.1875rem;\n  font-size: 0.5625rem;\n  font-weight: 600;\n  border-radius: 3px;\n  color: #fff;\n  background-color: #1f8ce6;\n  margin-right: 0.3125rem;\n}\n.books__series__item__wrap__left-position__info-wrap__title-wrap__title {\n  color: #000;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__item__wrap__left-position__info-wrap__description-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #666666;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  font-weight: 400;\n}\n.books__series__item__wrap__left-position__info-wrap__description-wrap__date::after {\n  content: \"\";\n  display: inline-block;\n  width: 0.0625rem;\n  height: 0.6875rem;\n  background-color: #d1d5d9;\n  margin: 0 0.375rem;\n}\n.books__series__item__wrap__view-button {\n  padding: 0.375rem 0.75rem;\n  background: #fff;\n  color: #808991;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  border-radius: 4px;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__item__wrap__view-button:hover {\n  background: #f2f4f5;\n}\n.books__series .view-all-button {\n  width: 100%;\n  margin-top: 0.625rem;\n  font-size: 0.8125rem;\n  padding: 0.625rem;\n  border-width: 2px;\n  background-color: #fff;\n  transition: background-color 0.3s;\n  border: 2px solid #d1d5d9;\n  border-radius: 4px;\n  font-weight: 700;\n  color: #808991;\n}\n.books__series .view-all-button .bx {\n  font-size: 0.625rem;\n  margin-left: 0.125rem;\n}\n.books__series .view-all-button:hover {\n  background-color: #f2f4f5;\n}\n.books__keyword {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__keyword__list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  transition: background-color 0.2s;\n  margin-top: 0.9375rem;\n}\n.books__keyword__list__item button {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  white-space: nowrap;\n  margin: 0 0.625rem 0.9375rem 0;\n  height: 30px;\n  border-radius: 3px;\n  background: #f3f4f5;\n  border: 0;\n  font-weight: 700;\n  color: #666666;\n}\n.books__keyword__list__item button:hover {\n  background: #c4e1f5;\n}\n.books__introduce {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__introduce__description {\n  margin-top: 0.9375rem;\n  font-size: 0.8125rem;\n  color: #333;\n}\n.books__author {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__author__description {\n  margin-top: 0.9375rem;\n  font-size: 0.8125rem;\n  color: #333;\n  line-height: 1.8;\n}\n.books__author__representative-book {\n  margin-top: 1.25rem;\n  border-top: 1px solid rgb(209, 204, 204);\n}\n.books__author__representative-book__title {\n  margin-top: 1.25rem;\n  padding-left: 1rem;\n  vertical-align: top;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.books__author__representative-book__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.books__author__representative-book__list__item {\n  display: block;\n  margin: 0.9375rem 0.9375rem;\n}\n.books__author__representative-book__list__item img {\n  width: 90px;\n  height: 130px;\n  border-radius: 3px;\n}\n.books__review {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__review__review-wrap__score-wrap {\n  display: flex;\n}\n.books__review__review-wrap__score-wrap__left {\n  width: 120px;\n  padding: 2.75rem 0 1.25rem 0;\n  text-align: center;\n  margin-right: 0.625rem;\n  flex-shrink: 0;\n}\n.books__review__review-wrap__score-wrap__left__score {\n  display: block;\n  margin-top: 0.625rem;\n  font-size: 2.1875rem;\n  color: #212529;\n  font-weight: 700;\n}\n.books__review__review-wrap__score-wrap__left__score_graph {\n  padding: 0.375rem 0 0.625rem 0;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.375rem;\n  color: #808991;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item .bx {\n  font-size: 0.6875rem;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item .star-bar-wrap {\n  display: inline-block;\n  width: 72px;\n  height: 8px;\n  background-color: #e8edf3;\n  margin-left: 0.375rem;\n  box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item .star-bar-wrap__bar {\n  display: block;\n  width: 0;\n  height: 8px;\n  background: #738097 linear-gradient(to bottom, #9daab5, #718392);\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(1) .star-bar-wrap__bar {\n  width: 84%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(2) .star-bar-wrap__bar {\n  width: 71%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(3) .star-bar-wrap__bar {\n  width: 39%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(4) .star-bar-wrap__bar {\n  width: 18%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(5) .star-bar-wrap__bar {\n  width: 8%;\n}\n.books__review__review-wrap__score-wrap__right {\n  flex-grow: 1;\n  margin-top: 0.875rem;\n}\n.books__review__review-wrap__score-wrap__right__starrate {\n  position: relative;\n  padding-bottom: 1.125rem;\n}\n.books__review__review-wrap__score-wrap__right__starrate__title {\n  display: block;\n  height: 42px;\n  text-align: center;\n  font-size: 1.125rem;\n  color: #999;\n  font-weight: 700;\n  padding-top: 0.625rem;\n  letter-spacing: -0.03em;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.3125rem;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars__star {\n  display: inline-block;\n  width: 50px;\n  height: 48px;\n  background: url(\"/assets/books/star.png\") no-repeat;\n  background-position: 50% 0%;\n  background-size: 45px 90px;\n  cursor: pointer;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars__star.hovered {\n  background-position: 0% 110%;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars__star.selected {\n  background-position: 0% 110%;\n  animation-duration: 0.7s;\n  animation-timing-function: ease;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form .review-textarea {\n  max-width: 605px;\n  min-width: 605px;\n  border: 2px solid #d1d5d9;\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 112px;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  padding: 0.75rem 0.9375rem;\n  color: #a7b1bb;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form .review-textarea:focus {\n  outline-color: #7d8e9e;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form .review-textarea:focus::placeholder {\n  color: #d1d5d9;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.625rem;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .write-tip-button {\n  letter-spacing: -0.6px;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n  color: #808991;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  font-size: 0.75rem;\n  padding: 0.5rem 1.125rem;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .write-tip-button .bx {\n  margin-right: 0.125rem;\n  font-size: 0.9375rem;\n  transform: translate3d(0, 1.9px, 0);\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .write-tip-button:hover {\n  background: #f2f4f5;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button {\n  letter-spacing: -0.03em;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n  color: #fff;\n  border: 1px solid #0077d9;\n  box-shadow: 0 1px 1px 0 rgba(31, 140, 230, 0.3);\n  font-size: 0.75rem;\n  padding: 0.5rem 1.125rem;\n  background: #1f8ce6;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button.opacity {\n  opacity: 0.5;\n  cursor: default;\n  pointer-events: none;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button.opacity:hover {\n  background: #1f8ce6;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button:hover {\n  background: #0077d9;\n}\n.books__review__review-wrap__list-wrap {\n  margin-top: 2.5rem;\n}\n.books__review__review-wrap__list-wrap__title {\n  display: block;\n  border-bottom: 2px solid #d1d5d9;\n  padding-bottom: 0.625rem;\n  padding-left: 0.3125rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #636c73;\n}\n.books__review__review-wrap__list-wrap__list__item {\n  display: flex;\n  padding-top: 0.875rem;\n  padding-bottom: 0.3125rem;\n  border-top: 1px solid #d1d5d9;\n}\n.books__review__review-wrap__list-wrap__list__item:first-child {\n  border-top: 0px;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-shrink: 0;\n  width: 115px;\n  padding-top: 0.1875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap__star {\n  display: block;\n  margin-bottom: 0.625rem;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap__reviewer {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #212529;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap__date {\n  margin-top: 0.4375rem;\n  padding-bottom: 0.25rem;\n  color: #808991;\n  font-size: 0.75rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-grow: 1;\n  padding-top: 0.375rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__content {\n  font-size: 0.8125rem;\n  color: #212529;\n  width: 100%;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  padding-bottom: 0.625rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap {\n  align-self: flex-end;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  font-size: 0.6875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap .bx {\n  margin-right: 0.125rem;\n  font-size: 0.6875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__comment-btn {\n  margin-right: 0.1875rem;\n  padding: 0.375rem 0.875rem;\n  color: #808991;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  border-radius: 4px;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__comment-btn:hover {\n  background: #f2f4f5;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__like-btn {\n  border-radius: 4px;\n  color: #808991;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  padding: 0.375rem 0.875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__like-btn:hover {\n  background: #f2f4f5;\n}\n.books__similar {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__similar__list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.books__similar__list__item {\n  display: block;\n  margin: 0.9375rem 0.9375rem;\n}\n.books__similar__list__item img {\n  width: 90px;\n  height: 130px;\n  border: 1px solid #d1d5d9;\n  border-radius: 3px;\n}\n.books .star-bg {\n  position: relative;\n  width: 75px;\n  height: 15px;\n  display: inline-block;\n  background: url(\"/assets/books/emptyStar.svg\") center center no-repeat;\n  background-size: 100% 100%;\n  margin-top: 0.1875rem;\n}\n.books .star-bg__stars {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 0%;\n  height: 15px;\n}\n.books .star-bg__stars::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  background: url(\"/assets/books/stars.svg\") center center no-repeat;\n  background-size: 100% 100%;\n  left: 0;\n  top: 0;\n  width: 75px;\n  height: 15px;\n}\n.books .middle-title {\n  display: block;\n  font-size: 1.25rem;\n  color: #59667a;\n  font-weight: 700;\n  letter-spacing: -0.6px;\n  padding-bottom: 0.625rem;\n  border-bottom: 2px solid #7d8e9e;\n}\n.books input[type=checkbox] {\n  display: none;\n}\n.books .checkbox {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 2px;\n  transition: background-color 0.2s, border-color 0.2s;\n  margin-top: 0.125rem;\n  margin-right: 0.5rem;\n}\n.books input[type=checkbox]:checked + .checkbox {\n  border-color: #0077d9;\n  background: #1f8ce6;\n}\n.books input[type=checkbox]:checked + .checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 2px;\n  display: block;\n  width: 6px;\n  height: 2px;\n  background-color: #fff;\n  transform: rotate(45deg);\n}\n.books input[type=checkbox]:checked + .checkbox::after {\n  content: \"\";\n  position: absolute;\n  top: 6px;\n  right: 0;\n  display: block;\n  width: 12px;\n  height: 2px;\n  background-color: #fff;\n  transform: rotate(-45deg);\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(100%);\n  }\n  50% {\n    transform: scale(110%);\n  }\n  100% {\n    transform: scale(100%);\n  }\n}\n.my__container {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #666666;\n  letter-spacing: -0.03rem;\n  width: 100%;\n}\n.my__container .active {\n  color: #1f8ce6;\n}\n.my__container__contents {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  width: 1000px;\n  margin-top: 2.0625rem;\n}\n.my__myridi__modal {\n  display: none;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.my__myridi__modal.active {\n  display: block;\n}\n.my__myridi__modal__dimmed {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: #0f1724;\n  opacity: 0.3;\n}\n.my__myridi__modal__popup {\n  position: absolute;\n  left: 50%;\n  top: 8.125rem;\n  transform: translate3d(-50%, 0, 0);\n  width: 21.25rem;\n  border: 0.1875rem solid #000;\n  animation: move 500ms ease forwards;\n  border-radius: 5px;\n}\n@keyframes move {\n  from {\n    opacity: 0;\n    transform: translate3d(-50%, -15%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n.my__myridi__modal__popup__header {\n  background-color: #41474c;\n  height: 34px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 0.5625rem 0.625rem 0.625rem;\n}\n.my__myridi__modal__popup__header button {\n  border: none;\n  background-color: #41474c;\n}\n.my__myridi__modal__popup__header button span {\n  font-size: 1.875rem;\n}\n.my__myridi__modal__popup__header button span i {\n  transform: translate3d(5px, -5px, 0);\n  color: #d1d5d9;\n}\n.my__myridi__modal__popup__title {\n  color: #d1d5d9;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 0.875rem;\n  color: #d1d5d9;\n  letter-spacing: -0.03rem;\n}\n.my__myridi__modal__popup__content {\n  background-color: #fff;\n}\n.my__myridi__modal__popup__content p {\n  font-weight: 700;\n  font-size: 1.125rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n  padding: 2.4375rem 0 1.1875rem 0;\n  text-align: center;\n}\n.my__myridi__modal__popup__content input {\n  margin: 1rem 0 1.6875rem 1.25rem;\n  width: 14.625rem;\n  height: 2.4375rem;\n  padding: 0.5rem;\n}\n.my__myridi__modal__popup__content button {\n  border: 0;\n  background-color: #1f8ce6;\n  width: 3.75rem;\n  height: 2.4375rem;\n  border: 1px solid #0077d9;\n  border-radius: 3px;\n  color: #fff;\n}\n.my__myridi__modal__popup__content ul {\n  padding: 0 1.25rem 3rem;\n  list-style: disc;\n}\n.my__myridi__modal__popup__content ul li {\n  margin-left: 15px;\n  padding-left: 0.375rem;\n  margin-bottom: 0.1875rem;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.4rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n}\n.my__thumbnail__btn {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n#my__hover:hover {\n  color: #0077d9;\n}\n\n.my__ridicash__section {\n  width: 720px;\n  padding: 0 0 5rem 0;\n}\n.my__ridicash__title {\n  font-weight: 700;\n  font-size: 1.3125rem;\n  line-height: 1rem;\n  color: #333;\n  letter-spacing: -0.03rem;\n  width: 100%;\n  text-align: left;\n}\n.my__ridicash__tab {\n  list-style: none;\n  border-bottom: 0.125rem solid #d1d5d9;\n  margin-top: 1.25rem;\n}\n.my__ridicash__tablist {\n  display: inline-block;\n  margin-right: 0.8125rem;\n  color: #666666;\n  font-size: 0.75rem;\n}\n.my__ridicash__tablist a {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  display: block;\n  position: relative;\n  min-width: 1.5625rem;\n  padding: 0.625rem 0;\n  text-align: center;\n}\n.my__ridicash__tablist a:hover {\n  color: #636c73;\n}\n.my__ridicash__tablist a:hover::after {\n  height: 0.1875rem;\n  background: #636c73;\n}\n.my__ridicash__tablist a.active {\n  color: #40474d;\n}\n.my__ridicash__tablist a.active::after {\n  height: 0.1875rem;\n  background: #1f8ce6;\n}\n.my__ridicash__tablist a::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 0;\n  background: #d1d5d9;\n  left: 0;\n  bottom: -0.125rem;\n}\n.my__ridicash__form {\n  width: 640px;\n}\n.my__ridicash__caution__list {\n  position: relative;\n  padding: 0.1875rem 0.5rem;\n  color: #808991;\n  font-weight: 400;\n  line-height: 1.1rem;\n}\n.my__ridicash__caution__list::before {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  width: 4px;\n  height: 4px;\n  background: #808991;\n  margin-right: 0.25rem;\n}\n.my__ridicash__agreement {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  position: relative;\n  width: 89%;\n  text-align: center;\n  font-size: 0.875rem;\n  color: #40474d;\n}\n.my__ridicash__agreement input {\n  appearance: none;\n  width: 0;\n  height: 0;\n}\n.my__ridicash__agreement input:checked + label::before {\n  border-color: #0077d9;\n  background: #1f8ce6;\n}\n.my__ridicash__agreement label {\n  width: 300px;\n}\n.my__ridicash__agreement label::before {\n  content: \"\";\n  position: absolute;\n  background: #fff;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n  left: 80px;\n  top: 50%;\n  margin-top: -0.5625rem;\n  border-radius: 2px;\n  border: 1px solid #d1d5d9;\n}\n.my__ridicash__agreement label::after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  text-indent: -444px;\n  font-size: 0;\n  overflow: hidden;\n  background: url(\"/assets/mypage/check.svg\") center center no-repeat;\n  background-size: 100% 100%;\n  width: 10px;\n  height: 10px;\n  left: 84px;\n  top: 50%;\n  margin-top: -0.3125rem;\n}\n.my__ridicash__submit__btn__container {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.my__ridicash__submit__btn__container i {\n  margin-right: 0.3125rem;\n}\n.my__ridicash__submit__btn__container button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 240px;\n  padding: 0.875rem 2.125rem;\n  background: #1f8ce6;\n  border: 1px solid #0077d9;\n  border-radius: 4px;\n  font-weight: 700;\n  color: #fff;\n  font-size: 1rem;\n}\n.my__ridicash__empty {\n  padding: 10rem;\n  text-align: center;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n}\n.my__ridicash__empty span {\n  margin: 0 auto;\n}\n.my__ridicash__empty span i {\n  font-size: 80px;\n  color: #9daab5;\n}\n.my__ridicash__bill__empty {\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  margin: 0 auto;\n}\n.my__ridicash__bill__empty i {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  font-size: 5.25rem;\n  width: 84px;\n  margin-bottom: 0.9375rem;\n}\n.my__ridicash__bill__empty__desc {\n  display: block;\n  text-align: center;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n}\n\n.viewer {\n  color: #999;\n}\n.viewer__title .title {\n  margin-left: 0.3125rem;\n}\n.viewer__header {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #262626;\n  border-bottom: 1px solid #4d4d4d;\n  transform: translate3d(0, 0, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__header__inner {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 700px;\n  height: 50px;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.viewer__header__inner .link-back {\n  font-weight: 500;\n  line-height: 50px;\n}\n.viewer__header__inner .bx-arrow-back {\n  font-size: 22px;\n  transform: translateY(4px);\n}\n.viewer__header__right button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n  color: #999;\n  margin-left: 10px;\n}\n.viewer__header__right button.preference .active {\n  color: #dc3232;\n}\n.viewer__header__right button.notification .active {\n  color: #f8b11a;\n}\n.viewer__header.hidden {\n  transform: translate3d(0, -100%, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__webtoon {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 55px;\n  background: #000;\n}\n.viewer__webtoon img {\n  display: block;\n  width: 740px;\n  margin: 0 auto;\n}\n.viewer__footer {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  background: #262626;\n  font-size: 13px;\n  transform: translate3d(0, 0, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__footer__top.hidden {\n  display: none;\n}\n.viewer__footer__top__inner {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 700px;\n  height: 37px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n.viewer__footer__top__right {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  gap: 18px;\n}\n.viewer__footer__top__right__link {\n  display: block;\n}\n.viewer__footer__top__right__link button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #999;\n}\n.viewer__footer__top__right__link button .arrow-left i {\n  font-size: 22px;\n  width: 18px;\n}\n.viewer__footer__top__right__link button .arrow-right {\n  transform: rotate(180deg);\n}\n.viewer__footer__top__right__link button .arrow-right i {\n  font-size: 22px;\n  width: 18px;\n}\n.viewer__footer__bottom {\n  width: 100%;\n  background: #000;\n  border-top: 1px solid #4d4d4d;\n  position: relative;\n}\n.viewer__footer__bottom__inner {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 700px;\n}\n.viewer__footer__bottom__inner ul {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n  height: 50px;\n}\n.viewer__footer__bottom__button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  font-size: 24px;\n  color: #999;\n}\n.viewer__footer__bottom__link {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  position: relative;\n}\n.viewer__footer__bottom__title {\n  font-size: 11px;\n  margin-top: 3px;\n}\n.viewer__footer__bottom__comment {\n  position: absolute;\n  top: -3px;\n  right: -20px;\n  background: #d1d5d9;\n  border: 2px solid #000;\n  border-radius: 25px;\n  font-size: 9px;\n  color: #000;\n  font-weight: 300;\n  letter-spacing: -0.5px;\n  padding: 2px 4px;\n}\n.viewer__footer.hidden {\n  transform: translate3d(0, 100%, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__footer__settings {\n  z-index: -1;\n  width: 40rem;\n  position: absolute;\n  left: 50%;\n  transform: translate3d(-50%, 100%, 0);\n  box-shadow: 0 0 10px 0;\n  transition: transform 0.5s ease;\n}\n.viewer__footer__settings.visible {\n  transform: translate3d(-50%, calc(-100% - 51px), 0);\n  transition: transform 0.5s ease;\n}\n.viewer__footer__settings__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  background-color: #fff;\n  height: 3rem;\n  box-shadow: 1px 1px #9daab5;\n  border-radius: 3px;\n}\n.viewer__footer__settings__list:nth-of-type(1) {\n  margin-bottom: 0.5rem;\n}\n.viewer__footer__settings__item i {\n  font-size: 1.5rem;\n}\n.viewer__footer__settings__item:nth-child(1) {\n  padding: 0.5rem 0.75rem 0;\n  line-height: 3rem;\n}\n.viewer__footer__settings__item:nth-child(2) {\n  flex-grow: 1;\n}\n.viewer__footer__settings__item:nth-child(2).width__desc {\n  margin-left: 0.5rem;\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 3rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n}\n.viewer__footer__settings__item:nth-child(2).width__desc span {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  padding-left: 0.1875rem;\n}\n.viewer__footer__settings__item:nth-child(3) {\n  padding: 0.3125rem 0.625rem 0 0;\n}\n.viewer__footer__settings__color__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-left: 0.5rem;\n  padding: 0.5rem 0;\n}\n.viewer__footer__settings__color__item {\n  margin-right: 0.5rem;\n}\n.viewer__footer__settings__color__item button {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 2rem;\n  border: 0;\n}\n.viewer__footer__settings__color__item button.active {\n  border: 2px solid #457ad3;\n}\n.viewer__footer__settings__color__item button:hover {\n  border: 1px solid #457ad3;\n}\n.viewer__footer__settings__color__item button[data-mode=light] {\n  background-color: #fff;\n}\n.viewer__footer__settings__color__item button[data-mode=sepia] {\n  background-color: #f0e8d1;\n}\n.viewer__footer__settings__color__item button[data-mode=dark] {\n  background-color: #000;\n}\n.viewer__footer__settings__width__container {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding-top: 0.3125rem;\n}\n.viewer__footer__settings__width__container div {\n  width: 3rem;\n  height: 1.875rem;\n  border: 1px solid #9ea7ad;\n  padding-top: 0.125rem;\n  text-align: center;\n  cursor: pointer;\n}\n.viewer__footer__settings__width__container div:nth-child(1) {\n  border-right: 0;\n}\n.viewer__footer__settings__width__container div.active {\n  border-color: #339cf2;\n  color: #339cf2;\n}\n.viewer__footer__settings__width__container div.active:hover {\n  background-color: #98ade4;\n}\n.viewer__footer__settings__width__reduce {\n  border-radius: 1.875rem 0 0 1.875rem;\n}\n.viewer__footer__settings__width__enlarge {\n  border-radius: 0 1.875rem 1.875rem 0;\n}\n\n[data-theme=light] {\n  background-color: #fff;\n}\n[data-theme=light].viewer__footer__settings {\n  background-color: #f2f4f5;\n}\n[data-theme=light].viewer__header, [data-theme=light].viewer__footer__top {\n  background-color: #f2f4f5;\n}\n[data-theme=light] .viewer__footer__bottom__comment {\n  border-color: #fff;\n}\n[data-theme=light].viewer__footer__top, [data-theme=light].viewer__footer__bottom {\n  border-top: 1px solid #e6e8eb;\n}\n[data-theme=light].viewer__header {\n  border-bottom: 1px solid #e6e8eb;\n}\n[data-theme=light].viewer__webtoon {\n  transition: all 0.8s ease;\n}\n\n[data-theme=sepia] {\n  background-color: #f0e8d1;\n}\n[data-theme=sepia].viewer__footer__settings {\n  background-color: #d7ccb3;\n}\n[data-theme=sepia].viewer__header, [data-theme=sepia].viewer__footer__top, [data-theme=sepia].viewer__footer__settings__list {\n  background-color: #e8dec5;\n}\n[data-theme=sepia] .viewer__footer__bottom__comment {\n  border-color: #f0e8d1;\n}\n[data-theme=sepia].viewer__footer__top, [data-theme=sepia].viewer__footer__bottom {\n  border-top: 1px solid #beb6a1;\n}\n[data-theme=sepia].viewer__header {\n  border-bottom: 1px solid #beb6a1;\n}\n[data-theme=sepia].viewer__webtoon {\n  transition: all 0.8s ease;\n}\n\n[data-theme=dark] {\n  background-color: #000;\n}\n[data-theme=dark].viewer__header, [data-theme=dark].viewer__footer__top, [data-theme=dark].viewer__footer__settings__list {\n  background-color: #262626;\n}\n[data-theme=dark] .viewer__footer__bottom__comment {\n  border-color: #000;\n}\n[data-theme=dark].viewer__footer__top, [data-theme=dark].viewer__footer__bottom {\n  border-top: 1px solid #4d4d4d;\n}\n[data-theme=dark].viewer__header {\n  border-bottom: 1px solid #4d4d4d;\n}\n[data-theme=dark] .viewer__footer__settings__item:nth-child(2).width__desc {\n  color: #b3b3b3;\n}\n[data-theme=dark].viewer__webtoon {\n  transition: all 0.8s ease;\n}\n[data-theme=dark].viewer__footer__settings {\n  background-color: #333;\n}\n\n@media (max-width: 767px) {\n  .header.main {\n    background: #000;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top {\n    background: #000;\n    border-bottom: 0;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__container {\n    height: 39px;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category {\n    width: 100%;\n    justify-content: space-around;\n    font-size: 0.8125rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category__item.dot::after {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category__link:hover {\n    color: #666666;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category__link.is-selected {\n    color: #fff;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__service {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down {\n    border-radius: 16px 16px 0 0;\n    padding: 0.625rem 0;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav {\n    flex-direction: column;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__title {\n    width: 171px;\n  }\n}\n.header.main .header-down__nav__link {\n  display: flex;\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__link {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n  }\n}\n.header.main .header-down__nav__ridi {\n  height: 20px;\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__ridi {\n    height: 42px;\n    padding: 0.8125rem 0.3125rem 0.875rem 1rem;\n  }\n}\n.header.main .header-down__nav__webtoon {\n  height: 20px;\n  margin-left: 0.3125rem;\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__webtoon {\n    height: 42px;\n    padding: 0.8125rem 0 0.875rem 0;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form__search__container.is-focus {\n    width: 95%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form {\n    padding: 0.5625rem 1rem 0.3125rem;\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form__container {\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form__icon {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__list {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__login {\n    display: block;\n    position: absolute;\n    font-size: 0.75rem;\n    top: 16px;\n    right: 22px;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form__search__container.is-focus {\n    width: 95%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form {\n    padding: 0.5625rem 1rem 0.3125rem;\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form__container {\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form__icon {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__list {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__login {\n    display: block;\n    position: absolute;\n    font-size: 0.75rem;\n    top: 16px;\n    right: 22px;\n  }\n}\n\n@media (max-width: 767px) {\n  .header.sub .header-top {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.sub .header-down {\n    padding: 9px 0 6px 0;\n  }\n}\n.header.sub .header-down__nav__title {\n  margin-right: auto;\n}\n@media (max-width: 767px) {\n  .header.sub .header-down__nav__title .header-down__nav__link .header-down__nav__ridi {\n    width: auto;\n    height: 42px;\n    padding: 0.8125rem 0.3125rem 0.875rem 1rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.sub .header-down__nav__title .header-down__nav__link .header-down__nav__webtoon {\n    display: none;\n  }\n}\n.header.sub .header-down__nav__ridi {\n  height: 20px;\n}\n.header.sub .header-down__nav__webtoon {\n  display: none;\n}\n.header.sub .header-down__form {\n  display: none;\n}\n@media (max-width: 767px) {\n  .header.sub .header-down__list {\n    display: none;\n  }\n}\n\n.login {\n  width: 100%;\n  min-height: 100vh;\n  background: #ebf6ff;\n  letter-spacing: -0.4px;\n}\n.login__header {\n  height: 40px;\n  border-bottom: 1px solid #d6deeb;\n  text-align: center;\n  font-size: 19px;\n  font-weight: 700;\n  line-height: 38px;\n  color: #1f8ce6;\n}\n.login .link-mainpage {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n.login .login-form {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  width: 360px;\n}\n.login .login-form .user-id,\n.login .login-form .user-pw {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 1.125rem;\n  padding-bottom: 1.125rem;\n  width: 340px;\n  height: 48px;\n  border: 1px solid #d6deeb;\n  font-size: 0.875rem;\n}\n.login .login-form .user-id::placeholder,\n.login .login-form .user-pw::placeholder {\n  color: #808991;\n}\n.login .login-form .user-id:hover,\n.login .login-form .user-pw:hover {\n  box-shadow: inset 0 0 1px 0.5px #9ea7ad;\n}\n.login .login-form .user-id {\n  border-radius: 4px 4px 0 0;\n}\n.login .login-form .user-pw {\n  border-top: 0;\n}\n.login .login-form button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  width: 100%;\n  height: 50px;\n  border-radius: 4px;\n  background: #1f8ce6;\n  color: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  box-shadow: 0 2px 4px 0 rgba(31, 140, 230, 0.3);\n  border: 1px solid #0077d9;\n}\n.login__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  background: #f7fbff;\n  border-radius: 0 0 4px 4px;\n  border: 1px solid #d6deeb;\n  border-top: 0;\n  padding: 0.8125rem 0.5rem 1rem 0.8125rem;\n  font-size: 0.75rem;\n  color: #738097;\n}\n.login__info [type=checkbox] {\n  display: none;\n}\n.login__info [type=checkbox]:checked + label .save-box::before {\n  content: \"\";\n  position: absolute;\n  top: 0.1875rem;\n  right: 0.125rem;\n  width: 0.625rem;\n  height: 0.3125rem;\n  transform: rotate(-45deg);\n  border-style: solid;\n  border-color: #1f8ce6;\n  border-width: 0px 0px 0.125rem 0.125rem;\n}\n.login__info label {\n  cursor: pointer;\n}\n.login__info label:hover {\n  color: #1f8ce6;\n}\n.login__info label .save-box {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border: 1px solid #d6deeb;\n  border-radius: 2px;\n  box-shadow: inset 0 1px 2px 0 rgba(115, 128, 150, 0.2);\n  transform: translateY(3px);\n  margin-right: 3px;\n}\n.login__info__right {\n  transform: translateY(2px);\n}\n.login__info__right span {\n  padding: 0 6px;\n  cursor: pointer;\n}\n.login__info__right span:hover {\n  color: #1f8ce6;\n}\n.login__info .search-id {\n  position: relative;\n  margin-right: -4px;\n}\n.login__info .search-id::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  right: 0;\n  width: 1px;\n  height: 12px;\n  background-color: #d6deeb;\n  transform: translateY(1px);\n}\n.login__signup-link {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  width: 360px;\n}\n.login__signup-link .signin-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  color: #808991;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(209, 213, 217, 0.3);\n  border: 1px solid #d1d5d9;\n  width: 100%;\n  height: 50px;\n  border-radius: 4px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n}\n.login__error-message {\n  margin: 0.25rem 0;\n  display: block;\n  padding-left: 0.25rem;\n  width: 100%;\n  height: 20px;\n  color: #e64938;\n  font-size: 0.6875rem;\n  font-weight: 700;\n}\n\n.signup {\n  width: 100%;\n  min-height: 100vh;\n  background: #ebf6ff;\n  letter-spacing: -0.4px;\n}\n.signup__header {\n  height: 40px;\n  border-bottom: 1px solid #d6deeb;\n  text-align: center;\n  font-size: 1.1875rem;\n  font-weight: 700;\n  line-height: 38px;\n  color: #1f8ce6;\n}\n.signup .link-mainpage {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n.signup__form {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  width: 360px;\n  font-size: 0.875rem;\n}\n.signup__input__area {\n  position: relative;\n  width: 340px;\n  height: 48px;\n  margin-top: 1.5625rem;\n}\n.signup__input__area:nth-child(4) {\n  margin-top: 0;\n}\n.signup__input__text {\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n  left: 10px;\n  color: #808991;\n}\n.signup__input__text.focus-text {\n  color: #1f8ce6;\n  font-size: 0.6875rem;\n  transform: translateY(-20px);\n  transition: all 0.2s ease;\n}\n.signup__input__box {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #d1d5d9;\n  border-radius: 4px;\n  text-indent: 10px;\n}\n.signup__input__box:hover {\n  box-shadow: inset 0 0 1px 1px #738097;\n}\n.signup__input__box.is-correct {\n  background: 98% center/6% url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %2301d760;transform: ;msFilter:;'%3E%3Cpath d='m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z'%3E%3C/path%3E%3C/svg%3E\") no-repeat, #fff;\n}\n.signup__input__box[name=birth] {\n  background-size: 12%;\n  background-position: 96% center;\n}\n.signup__password div:nth-child(1) input {\n  border-radius: 4px 4px 0 0;\n}\n.signup__password div:nth-child(2) {\n  margin-top: 0;\n}\n.signup__password div:nth-child(2) input {\n  border-top: 0;\n  border-radius: 0 0 4px 4px;\n}\n.signup__option {\n  margin-top: 1.5625rem;\n}\n.signup__option__title {\n  font-size: 0.75rem;\n  color: #808991;\n}\n.signup__option__area {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-top: 0.5rem;\n}\n.signup__option__area__birth {\n  width: 50%;\n  height: 48px;\n}\n.signup__option__area__birth:focus-within .focus-text {\n  color: #1f8ce6;\n  font-size: 0.6875rem;\n  transform: translateY(-20px);\n  transition: all 0.2s ease;\n}\n.signup__option__area .user-birth {\n  width: 100%;\n  height: 100%;\n}\n.signup__option__area__gender {\n  width: 48%;\n  height: 48px;\n  border-radius: 4px;\n}\n.signup__option__area__gender button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 50%;\n  height: 100%;\n  background: #fff;\n  border-radius: 4px 0 0 4px;\n  color: #808991;\n  font-size: 0.875rem;\n  border: 1px solid #d1d5d9;\n}\n.signup__option__area__gender button:nth-child(2) {\n  border-radius: 0 4px 4px 0;\n  border-left: 0;\n}\n.signup__option__area__gender button:hover {\n  box-shadow: inset 0 0 1px 0.5px #738097;\n}\n.signup__option__area__gender button.is-selected {\n  border: 1px solid #738097;\n  background: #dbefff;\n  pointer-events: none;\n}\n.signup__tos {\n  width: 340px;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  color: #738097;\n}\n.signup__tos label {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n}\n.signup__tos label:hover .agreement-text {\n  color: #141414;\n}\n.signup__tos .all-agree {\n  padding-left: 0.8125rem;\n  padding-right: 0.8125rem;\n  padding-top: 0.8125rem;\n  padding-bottom: 0.8125rem;\n  border-bottom: 1px solid #d1d5d9;\n  font-weight: 600;\n}\n.signup__tos__list {\n  padding-left: 0.8125rem;\n  padding-right: 0.8125rem;\n}\n.signup__tos__item {\n  margin-top: 0.9375rem;\n  margin-bottom: 0.9375rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.signup__tos .check-rounded {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  margin-right: 0.375rem;\n  position: relative;\n}\n.signup__tos .check-rounded::before {\n  content: \"\";\n  position: absolute;\n  top: 0.3125rem;\n  right: 0.25rem;\n  width: 0.5rem;\n  height: 0.3125rem;\n  transform: rotate(-45deg);\n  border-style: solid;\n  border-color: #d1d5d9;\n  border-width: 0px 0px 0.125rem 0.125rem;\n}\n.signup__tos [type=checkbox] {\n  display: none;\n}\n.signup__tos [type=checkbox]:checked + label .check-rounded, .signup__tos [type=checkbox]:checked + label .check-rounded::before {\n  border-color: #1f8ce6;\n}\n.signup__tos .link-more {\n  position: relative;\n  font-size: 0.75rem;\n  color: #9ea7ad;\n  margin-right: 10px;\n}\n.signup__tos .link-more::after {\n  content: \"\";\n  position: absolute;\n  right: -8px;\n  top: 50%;\n  transform: translateY(-50%) rotate(45deg);\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-width: 0.0625rem 0.0625rem 0 0;\n  border-color: #9ea7ad;\n}\n.signup__tos .link-more:hover {\n  color: #808991;\n}\n.signup__tos .link-more:hover::after {\n  border-color: #808991;\n}\n.signup__error-message {\n  margin: 0.25rem 0;\n  display: block;\n  padding-left: 0.25rem;\n  width: 100%;\n  height: 20px;\n  color: #e64938;\n  font-size: 0.6875rem;\n  font-weight: 700;\n}\n.signup .btn-submit {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 100%;\n  height: 50px;\n  background: #1f8ce6;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  border: 1px solid #0077d9;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  margin-top: 0.9375rem;\n}\n.signup .btn-submit:disabled {\n  background: #ccc;\n  color: #f0f0f0;\n  border: 1px solid #d1d5d9;\n}\n\n.footer {\n  margin-top: 3.75rem;\n  border-top: 1px solid #f2f4f5;\n}\n.footer__container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 2.5625rem 1.625rem 1.25rem;\n  min-width: 340px;\n}\n@media (max-width: 767px) {\n  .footer__container {\n    padding: 1.875rem 0.75rem 3.125rem;\n    flex-direction: column;\n  }\n}\n.footer__wrap {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding: 0 0.25rem;\n  flex: 1;\n}\n.footer__wrap__customer-guide {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide {\n    flex-direction: column;\n  }\n}\n.footer__wrap__customer-guide__centerAndNotice {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__centerAndNotice {\n    width: auto;\n    flex-direction: row;\n    margin-bottom: 1.875rem;\n  }\n}\n.footer__wrap__customer-guide__centerAndNotice li {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0.625rem 0;\n  font-weight: bold;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.3px;\n  color: #787878;\n}\n.footer__wrap__customer-guide__centerAndNotice li:hover {\n  opacity: 0.6;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__centerAndNotice li {\n    flex: 1;\n    margin: 0;\n  }\n}\n.footer__wrap__customer-guide__centerAndNotice li a {\n  margin-left: 0.25rem;\n}\n.footer__wrap__customer-guide__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n}\n.footer__wrap__customer-guide__info__service {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n  max-width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__service {\n    max-width: inherit;\n  }\n}\n.footer__wrap__customer-guide__info__service__title {\n  color: #787878;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.3px;\n  padding: 0.25rem 0;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__service__title {\n    padding: 0;\n    margin-bottom: 1rem;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__service__list {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.footer__wrap__customer-guide__info__service__list__item {\n  color: #787878;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n  padding: 0.375rem 0;\n}\n.footer__wrap__customer-guide__info__service__list__item:first-child {\n  padding-top: 0;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__service__list__item {\n    padding: 0.4375rem 0;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__service__list__item:hover {\n  opacity: 0.6;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 2;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce {\n    flex: 1;\n    flex-direction: column;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n  max-width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__etc {\n    max-width: initial;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__title {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  color: #787878;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__etc__title {\n    padding: 0;\n    margin-bottom: 1rem;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  color: #787878;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item:first-child {\n  padding-top: 0;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item {\n    padding: 0.4375rem 0;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item:hover {\n  opacity: 0.6;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n  max-width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__introduce {\n    max-width: initial;\n    margin-top: 1.875rem;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__title {\n  color: #787878;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.3px;\n  padding: 0.25rem 0;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__introduce__title {\n    padding: 0;\n    margin-bottom: 1rem;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item {\n  color: #787878;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n  padding: 0.375rem 0;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item:first-child {\n  padding-top: 0;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item {\n    padding: 0.4375rem 0;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item svg {\n  color: #1e9eff;\n  margin-left: 0.25rem;\n  font-size: 0.875rem;\n  transform: translate3d(0, 2px, 0);\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item:hover {\n  opacity: 0.6;\n}\n.footer__wrap__business-info {\n  margin-top: 3.75rem;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info {\n    margin-top: 3.4375rem;\n  }\n}\n.footer__wrap__business-info__more {\n  color: #787878;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 14px;\n  letter-spacing: -0.03px;\n  margin-bottom: 0.75rem;\n  cursor: pointer;\n}\n.footer__wrap__business-info__more[open] .business-info__title__icon {\n  transform: rotate(270deg);\n}\n.footer__wrap__business-info__more .business-info__title__icon {\n  font-size: 0.5625rem;\n  transform: rotate(90deg);\n}\n.footer__wrap__business-info__more .business-info__title::marker {\n  content: \"\";\n}\n.footer__wrap__business-info__content {\n  margin-bottom: 0.1875rem;\n}\n.footer__wrap__business-info__content__list {\n  margin: 0.625rem 0 -0.1875rem -0.8125rem;\n}\n.footer__wrap__business-info__content__list__item {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.6875rem;\n  line-height: 22px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__content__list__item {\n    font-size: 0.625rem;\n    line-height: 18px;\n  }\n}\n.footer__wrap__business-info__content__list__item::before {\n  content: \"\";\n  display: inline-block;\n  background: rgb(228, 222, 222);\n  width: 1px;\n  height: 9px;\n  margin: 0.125rem 0.375rem;\n}\n.footer__wrap__business-info__content__list__item__title {\n  margin-right: 0.375rem;\n}\n.footer__wrap__business-info__link-list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__link-list {\n    margin-top: 0.625rem;\n  }\n}\n.footer__wrap__business-info__link-list__item {\n  color: #787878;\n  font-size: 0.6875rem;\n  line-height: 19px;\n  letter-spacing: -0.01em;\n  display: inline-flex;\n  height: 13px;\n  line-height: 13px;\n  letter-spacing: -0.03px;\n}\n.footer__wrap__business-info__link-list__item:first-child::before {\n  content: \"\";\n  display: none;\n}\n.footer__wrap__business-info__link-list__item:nth-of-type(2) {\n  font-weight: 700;\n}\n.footer__wrap__business-info__link-list__item::before {\n  content: \"\";\n  display: inline-block;\n  background: #f0f0f0;\n  width: 1px;\n  height: 9px;\n  margin: 0.125rem 0.375rem;\n}\n.footer__wrap__business-info__link-list__item:hover {\n  opacity: 0.6;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__link-list__item {\n    font-size: 0.625rem;\n    line-height: 18px;\n  }\n}\n.footer__wrap__business-info__copyright {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  color: #787878;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  letter-spacing: -0.03px;\n  margin-top: 1rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__copyright {\n    font-size: 0.625rem;\n    font-weight: 400;\n    line-height: 12px;\n    margin-top: 0.75rem;\n  }\n}\n.footer__wrap__business-info__copyright span {\n  font-size: 0.6875rem;\n  margin-right: 0.25rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__copyright span {\n    margin-right: 0.125rem;\n  }\n}\n.footer__icon-list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding-bottom: 1.875rem;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.footer__icon-list__item {\n  color: #787878;\n  margin-left: 0.625rem;\n}\n.footer__icon-list__item:first-child {\n  margin-left: 0;\n}\n.footer__icon-list__item a {\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e6e6e6;\n  border-radius: 22px;\n}\n\n.recent {\n  width: 100%;\n}\n.recent__title {\n  color: #141414;\n  font-size: 1.375rem;\n  font-weight: 600;\n}\n.recent__empty {\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n}\n.recent__empty .bx-book-open {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  font-size: 5.25rem;\n  width: 84px;\n  margin-bottom: 0.9375rem;\n}\n.recent__empty__title {\n  display: block;\n  text-align: center;\n  font-size: 0.8125rem;\n  color: #636c73;\n  font-weight: 400;\n}\n.recent__fill__clear-btn {\n  text-align: end;\n  padding-right: 1.0625rem;\n}\n.recent__fill__button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  border: 1px solid #d1d5d9;\n  border-radius: 7px;\n  padding: 0.4375rem 1.0625rem;\n  color: #808991;\n}\n.recent__fill__list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 1.875rem;\n  gap: 50px;\n}\n.recent__fill__item {\n  width: 110px;\n}\n.recent__fill__item p {\n  margin-top: 0.1875rem;\n}\n.recent__fill__item p .carousel__star {\n  font-size: 0.75rem;\n}\n.recent__fill__item p .carousel__rate {\n  font-size: 0.75rem;\n  color: #a7b1bb;\n  font-weight: 400;\n  margin-left: 0.125rem;\n}\n.recent__fill__link {\n  display: block;\n  height: 160px;\n}\n.recent__fill__thumbnail {\n  position: relative;\n  height: 100%;\n}\n.recent__fill__img {\n  width: 100%;\n  height: 100%;\n}\n.recent__fill__wait-free {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 34px;\n  height: 34px;\n  top: -7px;\n  left: -7px;\n  font-size: 1.375rem;\n  background: #1f8ce6;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);\n  color: #fff;\n}\n.recent__fill__free-count {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-right: 0;\n  border-bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 3px 0 0 0;\n  padding: 0.4375rem 0.375rem 0.3125rem 0.375rem;\n  line-height: 12px;\n  opacity: 0.9;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.75rem;\n}\n.recent__fill__title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #333;\n}\n.recent__fill__sub {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 0.1875rem;\n  font-size: 0.75rem;\n  color: #666666;\n  line-height: 18px;\n}\n\n.notFound-image {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.notFound-image img {\n  max-width: none;\n}", "",{"version":3,"sources":["webpack://./src/scss/01_config/_fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/02_utils/_a11y.scss","webpack://./src/scss/03_base/_default.scss","webpack://./src/scss/02_utils/_units.scss","webpack://./src/scss/01_config/_colors.scss","webpack://./src/scss/04_component/common/_headerTop.scss","webpack://./src/scss/02_utils/_mixins.scss","webpack://./src/scss/01_config/_mediaQuery.scss","webpack://./src/scss/04_component/common/_headerDown.scss","webpack://./src/scss/04_component/common/_toaster.scss","webpack://./src/scss/04_component/mainpage/_carouselButton.scss","webpack://./src/scss/04_component/mainpage/_topButton.scss","webpack://./src/scss/04_component/mainpage/_starRating.scss","webpack://./src/scss/04_component/mainpage/_mainCarousel.scss","webpack://./src/scss/04_component/mainpage/_carouselInfo.scss","webpack://./src/scss/04_component/mainpage/_rankingSection.scss","webpack://./src/scss/04_component/mainpage/_webtoonSection.scss","webpack://./src/scss/04_component/mypage/_myLeftMenu.scss","webpack://./src/scss/04_component/mypage/_myRidiHeader.scss","webpack://./src/scss/04_component/mypage/_myRidiRecent.scss","webpack://./src/scss/04_component/mypage/_myRidiCashCharge.scss","webpack://./src/scss/04_component/mypage/_myRidiAutoCharge.scss","webpack://./src/scss/05_pages/_mainpage.scss","webpack://./src/scss/05_pages/_books.scss","webpack://./src/scss/05_pages/_mypage.scss","webpack://./src/scss/05_pages/_myRidiCash.scss","webpack://./src/scss/05_pages/_viewer.scss","webpack://./src/scss/05_pages/_header.scss","webpack://./src/scss/05_pages/_login.scss","webpack://./src/scss/05_pages/_signup.scss","webpack://./src/scss/05_pages/_footer.scss","webpack://./src/scss/05_pages/_myRecent.scss","webpack://./src/scss/05_pages/_notFound.scss"],"names":[],"mappings":"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6E;EAK7E,4BAL4F;EAU5F,gBADwB;EAExB,kBAFoC;EAGpC,mBa2BkC;Eb1BlC,cFhGe;EEiGf,wBALiG;EagC3F,iBAAA;AnBunCR;;AoB/vCE;EACE,8BAAA;EACA,qEAAA;EACA,4BAAA;EACA,gBAAA;ApBkwCJ;AoBhwCI;EdmGF,gBclGuB;EdmGvB,mBcnG4B;EdoG5B,oBcpGkD;EdqGlD,cFlGS;EEmGT,wBALiG;ANqqCnG;AoBnwCI;Ed+FF,gBc9FuB;Ed+FvB,oBc/F4B;EdgG5B,sBchGoD;EdiGpD,cFjFW;EEkFX,wBALiG;Ec3F7F,qBAAA;ApBwwCN;AoBrwCI;EdyFF,gBcxFuB;EdyFvB,kBczF4B;Ed0F5B,iBc1FoD;Ed2FpD,cFjFW;EEkFX,wBALiG;EcrF7F,kBAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,wBAAA;EACA,+BAAA;EACA,yDAAA;EACA,oBAAA;EACA,sCAAA;EACA,YAAA;ApB0wCN;AoBxwCM;EACE,yBhBcO;AJ4vCf;AoBvwCM;EACE,chBbD;AJsxCP;AoBpwCE;EdiEA,gBchEqB;EdiErB,ecjE0B;EdkE1B,iBAHiF;EAIjF,cFjGmB;EEkGnB,wBALiG;Ec7D/F,kBAAA;ApBywCJ;AoBvwCI;Ed4DF,gBc3DuB;Ed4DvB,kBc5D4B;Ed6D5B,iBAHiF;EAIjF,cFtFK;EEuFL,wBALiG;EcxD7F,uBAAA;ApB4wCN;AoBzwCI;EdsDF,gBcrDuB;EdsDvB,iBctD4B;EduD5B,sBcvD8C;EdwD9C,cFtFK;EEuFL,wBALiG;EclD7F,mBAAA;ApB8wCN;AoB1wCE;EACE,0BAAA;EACA,6BAAA;ApB4wCJ;AoB1wCI;EACE,qBAAA;EAGA,6BAAA;ApB0wCN;AoBxwCM;EACE,aAAA;ApB0wCR;AoBvwCM;EACE,SAAA;EACA,aAAA;EACA,yBhB7DA;AJs0CR;AoBrwCI;EdvEF,oBAAA;EACA,uBAAA;EA4BA,aAAA;EACA,qBAAA;EACA,2BAHwC;EAIxC,oBAJ4D;Ec+CxD,iBAAA;EACA,mBAAA;EACA,gBAAA;ApB0wCN;AoBxwCM;EACE,YAAA;ApB0wCR;AoBxwCQ;EA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AA;A1BszGV;A0BnzGQ;EACE,YAAA;A1BqzGV;A0BnzGU;EACE,mBAAA;EpBxHV,gBoByH6B;EpBxH7B,oBoBwHkC;EpBvHlC,iBoBuHqD;EpBtHrD,WF3GM;EE4GN,wBALiG;ANm7GnG;A0BvzGY;EpB3HV,gBoB4H+B;EpB3H/B,mBoB2HoC;EpB1HpC,iBAHiF;EAIjF,cFjFW;EEkFX,wBALiG;EoB8HrF,uBAAA;A1B6zGd;A0BxzGQ;EACE,+BAAA;A1B0zGV;A0BpzGQ;EpB7MN,aAAA;EACA,qBAAA;EACA,2BAHwC;EAIxC,oBAJ4D;EoBgNpD,mBAAA;EACA,iBAAA;A1ByzGV;A0BtzGQ;EACE,oBAAA;A1BwzGV;A0BtzGU;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,SAAA;A1BwzGZ;A0BtzGY;EACE,yBAAA;A1BwzGd;A0BrzGY;EACE,yBAAA;A1BuzGd;A0BpzGY;EACE,sBtB1QN;AJgkHR;A0BnzGY;EACE,yBtB3QN;AJgkHR;A0BlzGY;EACE,sBtBjRN;AJqkHR;A0B9yGQ;EpBnPN,aAAA;EACA,qBAAA;EACA,2BAHwC;EAIxC,oBAJ4D;EoBsPpD,sBAAA;A1BmzGV;A0BjzGU;EACE,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;A1BmzGZ;A0BjzGY;EACE,eAAA;A1BmzGd;A0BhzGY;EACE,qBtBpPC;EsBqPD,ctBrPC;AJuiHf;A0BhzGc;EACE,yBtB9NF;AJghHd;A0B5yGQ;EACE,oCAAA;A1B8yGV;A0B3yGQ;EACE,oCAAA;A1B6yGV;;A0BtyGA;EACE,sBtBhUM;AJymHR;A0BvyGE;EACE,yBtBtRW;AJ+jHf;A0BtyGE;EAEE,yBtB3RW;AJkkHf;A0BpyGE;EACE,kBtB5UI;AJknHR;A0BnyGE;EAEE,6BAAA;A1BoyGJ;A0BjyGE;EACE,gCAAA;A1BmyGJ;A0BhyGE;EACE,yBAAA;A1BkyGJ;;A0B9xGA;EACE,yBtB3VM;AJ4nHR;A0B/xGE;EACE,yBtB/QY;AJgjHhB;A0B9xGE;EAGE,yBtB1RW;AJwjHf;A0B3xGE;EACE,qBtBxWI;AJqoHR;A0B1xGE;EAEE,6BAAA;A1B2xGJ;A0BxxGE;EACE,gCAAA;A1B0xGJ;A0BvxGE;EACE,yBAAA;A1ByxGJ;;A0BrxGA;EACE,sBtB5XM;AJopHR;A0BtxGE;EAGE,yBtBpTU;AJ0kHd;A0BnxGE;EACE,kBtBrYI;AJ0pHR;A0BlxGE;EAEE,6BAAA;A1BmxGJ;A0BhxGE;EACE,gCAAA;A1BkxGJ;A0B/wGE;EACE,ctB1WY;AJ2nHhB;A0B9wGE;EACE,yBAAA;A1BgxGJ;A0B7wGE;EACE,sBtBnXa;AJkoHjB;;AO1qHE;EoBDF;IAEI,gBAAA;E3B8qHF;AACF;AOhrHE;EoBIA;IAEI,gBvBLE;IuBMF,gBAAA;E3B8qHJ;AACF;AOtrHE;EoBUE;IAEI,YAAA;E3B8qHN;AACF;AO3rHE;EoBgBE;IAEI,WAAA;IACA,6BAAA;IACA,oBAAA;E3B6qHN;AACF;AOlsHE;EoByBQ;IAEI,aAAA;E3B2qHZ;AACF;AOvsHE;EoBkCM;IAEI,cvBxBK;EJ+rHf;AACF;AO5sHE;EoBwCM;IAEI,WvB1CJ;EJgtHN;AACF;AOjtHE;EoBgDE;IAEI,aAAA;E3BmqHN;AACF;AOttHE;EoBuDA;IAEI,4BAAA;IACA,mBAAA;E3BiqHJ;AACF;AO5tHE;EoB6DE;IAEI,sBAAA;E3BiqHN;AACF;AOjuHE;EoBkEI;IAEI,YAAA;E3BiqHR;AACF;A2B9pHM;EACE,aAAA;A3BgqHR;AOzuHE;EoBwEI;IrBnCJ,aAAA;IACA,qBAAA;IACA,2BAHwC;IAIxC,oBAJ4D;EN4sH5D;AACF;A2BjqHM;EACE,YAAA;A3BmqHR;AOpvHE;EoBgFI;IAII,YAAA;IACA,0CAAA;E3BoqHR;AACF;A2BjqHM;EACE,YAAA;EACA,sBAAA;A3BmqHR;AO9vHE;EoByFI;IAKI,YAAA;IACA,+BAAA;E3BoqHR;AACF;AOpwHE;EoBuGQ;IAEI,UAAA;E3B+pHZ;AACF;AOzwHE;EoBoGE;IAYI,iCAAA;IACA,WAAA;E3B6pHN;AACF;AO/wHE;EoBoHI;IAEI,WAAA;E3B6pHR;AACF;AOpxHE;EoB0HI;IAEI,kBAAA;E3B4pHR;AACF;AOzxHE;EoBmIE;IAEI,aA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","sourcesContent":["@font-face {\r\n  font-family: 'NanumBarunGothic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');\r\n  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'),\r\n    url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'),\r\n    url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'NanumBarunGothic';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');\r\n  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix') format('embedded-opentype'),\r\n    url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'),\r\n    url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'NanumBarunGothic';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');\r\n  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix') format('embedded-opentype'),\r\n    url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'),\r\n    url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Pretendard-Regular';\r\n  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  font-family: apple-system, 'Apple SD Gothic Neo', 'Pretendard-Regular', 'Noto Sans KR', sans-serif;\r\n}\r\n","@font-face {\n  font-family: \"NanumBarunGothic\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot\");\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix\") format(\"embedded-opentype\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff\") format(\"woff\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"NanumBarunGothic\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot\");\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff\") format(\"woff\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"NanumBarunGothic\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot\");\n  src: url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix\") format(\"embedded-opentype\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff\") format(\"woff\"), url(\"//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Pretendard-Regular\";\n  src: url(\"https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: apple-system, \"Apple SD Gothic Neo\", \"Pretendard-Regular\", \"Noto Sans KR\", sans-serif;\n}\n\n.sr-only {\n  overflow: hidden;\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  clip-path: inset(50%);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n}\n\nhtml {\n  font-size: 16px;\n  overflow-y: visible;\n}\n\nbody,\nbody::before,\nbody::after,\nbody *,\nbody *::before,\nbody *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody * {\n  -webkit-tap-highlight-color: rgba(255, 255, 200, 0.3);\n}\n\nbody {\n  font-family: \"Spoqa Han Sans\", \"Sans-serif\";\n  font-size: inherit;\n  background-color: #fff;\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: inherit;\n}\n\nul,\nol {\n  padding-left: 0;\n  list-style: none;\n}\n\nimg {\n  vertical-align: middle;\n  max-width: 100%;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\naddress,\nem {\n  font-style: normal;\n}\n\nfieldset {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\n\nlegend {\n  overflow: hidden;\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  clip-path: inset(50%);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.container {\n  min-width: 320px;\n}\n\n.header-top {\n  width: 100%;\n  border-bottom: 1px solid #f2f4f5;\n  font-size: 0.875rem;\n}\n.header-top__container {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 0 1.875rem;\n}\n@media (max-width: 767px) {\n  .header-top__container {\n    height: 39px;\n  }\n}\n.header-top__category {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-top__category__item {\n  position: relative;\n  padding: 0.6875rem 0.75rem;\n}\n.header-top__category__item.dot::after {\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  position: absolute;\n  right: 0;\n  width: 3px;\n  height: 3px;\n  border-radius: 3px;\n  background: #e6e6e6;\n}\n.header-top__category__item:first-child {\n  padding-left: 0;\n}\n.header-top__category__link {\n  display: block;\n  color: #666666;\n  font-weight: 600;\n}\n.header-top__category__link:hover {\n  color: #d1d5d9;\n}\n.header-top__category__link.is-selected {\n  color: #000;\n}\n.header-top__category__link:last-child {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-top__service {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-top__service__list {\n  color: #666666;\n}\n.header-top__service__link {\n  position: relative;\n  display: block;\n  padding: 0.6875rem 0.75rem;\n  color: #666666;\n}\n.header-top__service__link.dot::after {\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  position: absolute;\n  right: 0;\n  width: 3px;\n  height: 3px;\n  border-radius: 3px;\n  background: #e6e6e6;\n}\n\n.header-down {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  background: #fff;\n  max-width: 1170px;\n  padding: 1.125rem 1.875rem;\n}\n.header-down__nav {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header-down__nav__title {\n  margin-right: auto;\n}\n.header-down__form {\n  position: relative;\n  margin-right: 8px;\n}\n.header-down__form__search__container {\n  display: none;\n}\n.header-down__form__search__container.is-focus {\n  display: block;\n  position: absolute;\n  width: 464px;\n  margin-top: 0.625rem;\n  padding-top: 0.375rem;\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n  background: #fff;\n  overflow: hidden;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out 0s;\n  box-shadow: rgba(0, 0, 0, 0.08) 5px 5px 10px;\n  z-index: 8000;\n}\n.header-down__form__search__books {\n  text-align: center;\n  line-height: 18px;\n  padding-top: 3.75rem;\n  padding-bottom: 3.75rem;\n  color: #a5a5a5;\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n.header-down__form__search__item {\n  padding: 0.5rem 0.75rem;\n}\n.header-down__form__search__title {\n  display: inline-block;\n  margin: 0px 0.3125rem 0.1875rem;\n  line-height: 22px;\n  font-size: 0.875rem;\n}\n.header-down__form__search__title__match {\n  color: #1e9eff;\n}\n.header-down__form__search__author {\n  display: inline-block;\n  margin: 0px 0.3125rem 0.1875rem;\n  line-height: 22px;\n  font-size: 0.75rem;\n  color: #787878;\n}\n.header-down__form__container {\n  width: 259px;\n  background: #f0f0f0;\n  border-radius: 8px;\n}\n.header-down__form__input {\n  border: none;\n  background: #f0f0f0;\n  caret-color: #1e9eff;\n}\n.header-down__form__input:focus {\n  outline: none;\n}\n.header-down__form__label {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 0.6875rem;\n  height: 40px;\n}\n.header-down__form__icon {\n  width: 20px;\n  height: 20px;\n  color: #808991;\n  margin-right: 0.75rem;\n  transform: translateY(3px);\n}\n@media (max-width: 767px) {\n  .header-down__form__icon {\n    transform: translateY(0px);\n  }\n}\n.header-down__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 208px;\n}\n.header-down__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  width: 40px;\n  height: 40px;\n  font-size: 1.625rem;\n  color: #141414;\n}\n.header-down__item:last-child {\n  margin-right: 0;\n}\n.header-down__login {\n  display: none;\n}\n.header-down__login__link {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #dddddd;\n  border-radius: 16px;\n}\n\n.toaster {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  left: 50%;\n  width: 400px;\n  padding: 0.375rem 0.375rem 0.375rem 1.625rem;\n  color: #5abf0d;\n  background-color: #191919;\n  transform: translate3d(-50%, 0, 0);\n  border-radius: 5px;\n  animation: toast 4s ease forwards;\n  opacity: 0;\n}\n.toaster .toaster-text {\n  width: 310px;\n}\n.toaster .bxs-check-circle {\n  margin-top: 0.0625rem;\n}\n.toaster .bx-x {\n  color: #666666;\n  font-size: 30px;\n  margin-top: 0.0625rem;\n  cursor: pointer;\n}\n\n@keyframes toast {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 0, 0);\n  }\n  20%, 50%, 80% {\n    opacity: 1;\n    transform: translate3d(-50%, 220%, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n.carousel__button .prev {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  border: 2px solid #f2f4f5;\n  border-radius: 50%;\n  font-size: 1.625rem;\n  color: #787878;\n  left: -20px;\n}\n.carousel__button .next {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  border: 2px solid #f2f4f5;\n  border-radius: 50%;\n  font-size: 1.625rem;\n  color: #787878;\n  right: -20px;\n}\n\n.top-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 30px;\n  right: 25px;\n  width: 58px;\n  height: 58px;\n  border: 1px solid #e6e6e6;\n  border-radius: 50%;\n  background: #fff;\n  font-size: 1.875rem;\n  color: #787878;\n}\n@media (max-width: 767px) {\n  .top-button {\n    width: 40px;\n    height: 40px;\n    font-size: 1.5rem;\n  }\n}\n\n.carousel__star {\n  color: #dc3232;\n  font-size: 0.875rem;\n}\n@media (max-width: 767px) {\n  .carousel__star {\n    font-size: 0.75rem;\n  }\n}\n.carousel__rate {\n  color: #666666;\n  font-size: 0.875rem;\n}\n@media (max-width: 767px) {\n  .carousel__rate {\n    font-size: 0.75rem;\n  }\n}\n\n.main__carousel {\n  position: relative;\n  height: 400px;\n  margin: 0 1.875rem;\n  border-radius: 5px;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 767px) {\n  .main__carousel {\n    margin: 1.125rem;\n    height: 330px;\n  }\n}\n.main__carousel__inner {\n  height: 100%;\n  overflow: hidden;\n}\n.main__carousel__wrap {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  transform: translateX(-53px);\n}\n.main__carousel__item {\n  min-width: 45px;\n  height: 400px;\n  margin-left: 8px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .main__carousel__item {\n    height: 330px;\n  }\n}\n.main__carousel__item.currentSlide {\n  min-width: calc(100% - 108px);\n}\n.main__carousel__item.currentSlide .main__carousel__desc {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.main__carousel__item.nextSlide .main__carousel__desc {\n  opacity: 0;\n}\n.main__carousel__item:first-child {\n  margin-left: 0;\n}\n.main__carousel__link {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.main__carousel__link img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@keyframes visible {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.main__carousel__desc {\n  position: absolute;\n  bottom: 40px;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  animation-fill-mode: forwards;\n  padding-left: 2.5rem;\n}\n@media (max-width: 767px) {\n  .main__carousel__desc {\n    bottom: 20px;\n    padding-left: 1.25rem;\n  }\n}\n.main__carousel__info {\n  display: flex;\n}\n.main__carousel__info span {\n  font-size: 0.6875rem;\n  padding: 0.25rem 0.375rem;\n  border: 1px solid #fff;\n}\n.main__carousel__title {\n  font-size: calc(0.875rem + 1.5vw);\n  font-size: 2rem;\n  font-weight: 600;\n  margin-top: 0.5rem;\n}\n.main__carousel__subTitle {\n  margin-top: 0.375rem;\n  opacity: 0.8;\n  font-size: calc(0.53125rem + 0.5vw);\n}\n.main__carousel__counter {\n  position: absolute;\n  right: 40px;\n  bottom: 0;\n  width: fit-content;\n  height: 20px;\n  padding: 0 0.5rem;\n  line-height: 22px;\n  font-size: 0.875rem;\n  background: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n}\n@media (max-width: 767px) {\n  .main__carousel__counter {\n    right: 10px;\n    font-size: 0.6875rem;\n    padding: 0 0.375rem;\n  }\n}\n.main__carousel__counter span {\n  color: #fff;\n}\n.main__carousel .carousel__button {\n  display: flex;\n}\n.main__carousel .carousel__button .prev {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  position: absolute;\n  bottom: 0;\n}\n.carousel__info .bxl-upwork {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 28px;\n  height: 28px;\n  background: #20cdcc;\n  color: #fff;\n  border-radius: 0 0 0 5px;\n}\n@media (max-width: 767px) {\n  .carousel__info .bxl-upwork {\n    font-size: 0.875rem;\n    width: 23px;\n    height: 23px;\n  }\n}\n.carousel__info .bx-time-five {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 28px;\n  height: 28px;\n  background: #1f9fff;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .carousel__info .bx-time-five {\n    font-size: 0.875rem;\n    width: 23px;\n    height: 23px;\n  }\n}\n.carousel__free-count {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #fff;\n  height: 28px;\n  background: #324254;\n  padding: 0.5rem 0.375rem;\n  border-radius: 0 5px 0 0;\n}\n@media (max-width: 767px) {\n  .carousel__free-count {\n    height: 23px;\n    font-size: 0.375rem;\n  }\n}\n\n.main-container .rank {\n  position: relative;\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .rank {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .rank__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__title {\n    font-size: 1.125rem;\n  }\n}\n.main-container .rank__carousel {\n  margin-top: 1rem;\n  overflow: hidden;\n}\n.main-container .rank__carousel .carousel__button .prev {\n  top: 230px;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel .carousel__button .prev {\n    top: 155.5px;\n  }\n}\n.main-container .rank__carousel .carousel__button .next {\n  top: 230px;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel .carousel__button .next {\n    top: 155.5px;\n  }\n}\n.main-container .rank__carousel__list {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: 368px;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__list {\n    height: 273px;\n  }\n}\n.main-container .rank__carousel__item {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 370px;\n  height: 116px;\n  margin-bottom: 0.375rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__item {\n    width: 327px;\n    height: 87px;\n    margin-bottom: 0.1875rem;\n  }\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__link {\n    width: 60px;\n    height: 87px;\n  }\n}\n.main-container .rank__carousel__img {\n  display: block;\n  width: 80px;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n}\n.main-container .rank__carousel__desc {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: stretch;\n  width: 184px;\n  margin-right: 1.625rem;\n}\n.main-container .rank__carousel__num {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  font-weight: 600;\n  font-size: 1.125rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__num {\n    font-size: 0.875rem;\n  }\n}\n.main-container .rank__carousel__title {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__title {\n    font-size: 0.875rem;\n  }\n}\n.main-container .rank__carousel__info {\n  color: #666666;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .rank__carousel__info {\n    font-size: 0.6875rem;\n  }\n}\n\n.main-container .webtoon {\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .webtoon__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 1.25rem;\n}\n.main-container .webtoon__carousel {\n  position: relative;\n}\n.main-container .webtoon__carousel .carousel__button .prev {\n  top: 130.5px;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel .carousel__button .prev {\n    top: 84px;\n  }\n}\n.main-container .webtoon__carousel .carousel__button .next {\n  top: 130.5px;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel .carousel__button .next {\n    top: 84px;\n  }\n}\n.main-container .webtoon__carousel__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.main-container .webtoon__carousel__item {\n  width: 16.66%;\n  min-width: 180px;\n  height: 355px;\n  margin-right: 0.3125rem;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__item {\n    min-width: 120px;\n    height: 249px;\n  }\n}\n.main-container .webtoon__carousel__thumbnail {\n  position: relative;\n  width: 177px;\n  height: 258px;\n  margin-bottom: 0.625rem;\n  border: 1px solid #dddddd;\n  border-radius: 5px;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__thumbnail {\n    width: 120px;\n    height: 170px;\n  }\n}\n.main-container .webtoon__carousel__img {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n}\n.main-container .webtoon__carousel__title {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.375rem;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__title {\n    margin-bottom: 0.125rem;\n    font-size: 0.8125rem;\n  }\n}\n.main-container .webtoon__carousel__author {\n  color: #666666;\n  font-size: 0.875rem;\n  margin-bottom: 0.375rem;\n}\n@media (max-width: 767px) {\n  .main-container .webtoon__carousel__author {\n    margin-bottom: 0.125rem;\n    font-size: 0.75rem;\n  }\n}\n\n.my__left__menu__container {\n  display: table-cell;\n  vertical-align: top;\n  width: 235px;\n  padding-bottom: 20rem;\n}\n.my__left__menu__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1rem;\n  color: #212529;\n  letter-spacing: -0.03rem;\n}\n\n.my__nav__menu {\n  width: 130px;\n  margin-top: 0.5625rem;\n}\n.my__nav__menu__home {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n}\n.my__nav__menu__section {\n  padding: 1.0625rem 0 1.1875rem;\n  border-bottom: 2px solid #e5e5e5;\n}\n.my__nav__menu__section__title {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n}\n.my__nav__menu__section__title span {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #738096;\n  letter-spacing: -0.03rem;\n  padding-right: 0.4375rem;\n  vertical-align: -5%;\n}\n.my__nav__menu__section__list {\n  padding: 0.0625rem 0 0 1.375rem;\n  list-style: none;\n}\n\n.my__left__icon {\n  padding-top: 0.25rem;\n  margin-right: 0.4375rem;\n  font-size: 1rem;\n  color: #738096;\n}\n\n.my__section__link {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  display: block;\n  padding-top: 0.875rem;\n}\n.my__section__link:hover {\n  color: #666666;\n}\n.my__section__link.active {\n  color: #1f8ce6;\n}\n\n.my__myridi__header {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 100%;\n  max-width: 717px;\n  border: 2px solid #000;\n  table-layout: fixed;\n}\n.my__myridi__header .my__account__info {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  margin: 0.0625rem;\n  flex-shrink: 0;\n  max-width: 150px;\n  padding: 1.5rem 1.25rem 1.25rem;\n  background: #ebf6ff;\n  box-sizing: content-box;\n}\n.my__myridi__header .my__account__info__container {\n  min-height: 85px;\n  padding-bottom: 1.25rem;\n}\n.my__myridi__header .my__account__info__id {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.2rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n  word-break: break-all;\n}\n.my__myridi__header .my__account__info__email {\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 1.5rem;\n  color: #808991;\n  letter-spacing: -0.01rem;\n  word-break: break-all;\n  margin-top: 0.3125rem;\n}\n.my__myridi__header .my__account__info .my__btn__logout {\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1.2rem;\n  color: #9ea7ad;\n  letter-spacing: -0.03rem;\n  display: block;\n  width: 64px;\n  text-align: center;\n  padding: 0.4375rem 0;\n  border: 2px solid #d6deeb;\n  border-radius: 3px;\n}\n.my__myridi__header .my__account__info .my__btn__logout:hover {\n  background: #dfeef8;\n  border-color: #b3c2d1;\n}\n.my__myridi__header .my__asset__info {\n  padding: 1.6875rem 0;\n}\n.my__myridi__header .my__asset__info .my__border__line {\n  display: block;\n  width: calc(100% - 60px);\n  border: none;\n  border-top: 1px solid #e5e8eb;\n  margin: 1.75rem auto 1.8125rem;\n}\n.my__myridi__header .my__asset__table {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.my__myridi__header .my__asset__cell {\n  display: table-cell;\n  text-align: center;\n  vertical-align: top;\n}\n.my__myridi__header .my__asset__cell .my__info__container {\n  position: relative;\n  text-align: center;\n}\n.my__myridi__header .my__asset__cell .my__info__title .my__text {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1.125rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n  display: block;\n  margin-top: 0.625rem;\n}\n.my__myridi__header .my__asset__cell .my__info__icon {\n  font-size: 1.875rem;\n}\n.my__myridi__header .my__asset__cell .my__info__amount {\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  color: #4b9bf8;\n  letter-spacing: -0.02rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  margin-top: 0.4375rem;\n}\n.my__myridi__header .my__asset__cell .my__info__amount .my__amount {\n  font-weight: 400;\n  font-size: 1.75rem;\n  line-height: 2.0625rem;\n  color: #4b9bf8;\n  letter-spacing: -0.01rem;\n  font-family: \"Roboto\";\n  vertical-align: -8%;\n  padding-right: 0.125rem;\n}\n.my__myridi__header .my__asset__cell .my__info__link {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-indent: -9999px;\n  left: 0;\n  top: 0;\n}\n.my__myridi__header .my__asset__cell .my__extra__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: stretch;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #626d75;\n  letter-spacing: -0.02rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  position: relative;\n  left: 5px;\n  margin-top: 1.0625rem;\n}\n.my__myridi__header .my__asset__cell .my__extra__info .my__checkout__link {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #626d75;\n  letter-spacing: -0.02rem;\n}\n.my__myridi__header .my__asset__cell .my__extra__info .my__point {\n  margin-left: 0.25rem;\n  font-weight: 600;\n  color: #000;\n}\n.my__myridi__header .my__asset__cell .my__extra__info .my__coupon__btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #626d75;\n  letter-spacing: -0.02rem;\n  padding-right: 0.875rem;\n}\n\n.my__myridi__recents {\n  margin-top: 2.5rem;\n  max-width: 717px;\n  overflow: hidden;\n}\n.my__myridi__recents .my__recents__container {\n  position: relative;\n}\n.my__myridi__recents .my__recents__container::before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e5e5e5;\n  left: 0;\n  top: 50%;\n  margin-top: -0.1875rem;\n  z-index: 1;\n}\n.my__myridi__recents .my__recents__container::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  display: block;\n  clear: both;\n}\n.my__myridi__recents .my__recents__title {\n  font-weight: 700;\n  font-size: 1.125rem;\n  line-height: 1rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n  float: left;\n  position: relative;\n  background: #fff;\n  padding: 0.3125rem 0.875rem 0.375rem 0;\n  margin: 0;\n  z-index: 2;\n}\n.my__myridi__recents .my__more__btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #fff;\n  letter-spacing: -0.03rem;\n  position: relative;\n  display: inline-block;\n  width: 80px;\n  text-align: center;\n  padding: 0.4375rem 0.9375rem 0.4375rem 0.4375rem;\n  background: #303538;\n  border-radius: 2px;\n  border: 1px solid #303538;\n}\n.my__myridi__recents .my__more__btn__wrapper {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  float: right;\n  background: #fff;\n  padding-left: 0.875rem;\n  z-index: 2;\n}\n.my__myridi__recents .my__more__btn .my__icon-arrow__right::before {\n  position: absolute;\n  display: inline-block;\n  font-size: 0.375rem;\n  top: calc(50% - 4px);\n}\n.my__myridi__recents .my__recents__empty {\n  padding-top: 5.625rem;\n  padding-bottom: 5.625rem;\n  margin-top: 1.25rem;\n  border: 4px solid #f2f4f5;\n}\n.my__myridi__recents .my__recents__empty__desc {\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  color: #9ea7ad;\n  letter-spacing: -0.03em;\n  text-align: center;\n}\n.my__myridi__recents .my__recents__books {\n  margin-top: 1.25rem;\n  display: flex;\n  gap: 40px;\n  overflow: hidden;\n}\n.my__myridi__recents .my__recents__books .my__book__thumbnail__wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  display: block;\n  text-align: left;\n  height: 167px;\n  width: 110px;\n}\n.my__myridi__recents .my__recents__books .my__book__thumbnail__wrapper .my__book__thumbnail {\n  border: 1px solid #f0f0f0;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: block;\n  margin-top: 0.1875rem;\n  width: 110px;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper .my__meta__title {\n  margin-top: 0.1875rem;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper .my__meta__title .my__title__link {\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1.4rem;\n  color: #333;\n  letter-spacing: -0.03rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: block;\n  max-height: 2.7em;\n}\n.my__myridi__recents .my__recents__books .my__book__metadata__wrapper .my__author {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.2rem;\n  color: #666666;\n  letter-spacing: -0.03rem;\n  max-height: 3.1em;\n}\n\n.my__ridicash__header {\n  padding: 2.625rem 0 1.875rem 0;\n  background: url(\"/assets/mypage/ridicash@2x.png\") right top no-repeat;\n  background-size: 269px 177px;\n  max-width: 740px;\n}\n.my__ridicash__header__title {\n  font-weight: 400;\n  font-size: 1.625rem;\n  line-height: 2.25rem;\n  color: #212529;\n  letter-spacing: -0.03rem;\n}\n.my__ridicash__header__desc {\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.3125rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  margin-top: 0.9375rem;\n}\n.my__ridicash__header__btn {\n  font-weight: 700;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  position: relative;\n  border-radius: 0.25rem;\n  display: inline-block;\n  text-align: center;\n  vertical-align: baseline;\n  border: 0.0625rem solid #d1d5d9;\n  box-shadow: 0 0.0625rem 0.0625rem rgba 209, 213, 217, 0.3;\n  margin-top: 0.875rem;\n  padding: 0.5rem 1.25rem 0.5rem 0.75rem;\n  height: 2rem;\n}\n.my__ridicash__header__btn:hover {\n  background-color: #f2f4f5;\n}\n.my__ridicash__header__btn i {\n  color: #1f8ce6;\n}\n.my__ridicash__amount {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n  margin-top: 2.5rem;\n}\n.my__ridicash__amount__won {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1rem;\n  color: #1f8ce6;\n  letter-spacing: -0.03rem;\n  padding-left: 0.1875rem;\n}\n.my__ridicash__amount__num {\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1.0625rem;\n  color: #1f8ce6;\n  letter-spacing: -0.03rem;\n  vertical-align: top;\n}\n.my__ridicash__select {\n  border-top: 2px solid #ccc;\n  border-bottom: 2px solid #ccc;\n}\n.my__ridicash__select__column {\n  padding-top: 0.625rem;\n  border-top: 1px solid #d1d5d9;\n}\n.my__ridicash__select__column:first-child {\n  border-top: 0;\n}\n.my__ridicash__select__column hr {\n  border: 0;\n  height: 0.5px;\n  background-color: #d1d5d9;\n}\n.my__ridicash__select__head {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  text-align: right;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.my__ridicash__select__head span {\n  flex-grow: 1;\n}\n.my__ridicash__select__head span:nth-child(3) {\n  flex-grow: 1.2;\n  margin-right: 0.9375rem;\n}\n.my__ridicash__select__head.my__auto span:nth-child(2) {\n  position: relative;\n}\n.my__ridicash__select__head.my__auto span:nth-child(2) i {\n  position: absolute;\n  font-size: 1.875rem;\n  color: #EECF4E;\n  top: -0.375rem;\n}\n.my__ridicash__select__head.my__auto span:nth-child(2) i::after {\n  content: \"x2\";\n  position: absolute;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #fff;\n  letter-spacing: -0.03rem;\n  top: 5px;\n  left: 7px;\n}\n.my__ridicash__select__list {\n  text-align: right;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin-top: 0.125rem;\n}\n.my__ridicash__select__list:first-child {\n  margin-top: 0;\n}\n.my__ridicash__select__list input[type=radio] {\n  display: none;\n}\n.my__ridicash__select__list input[type=radio]:checked + label, .my__ridicash__select__list input[type=radio]:checked + label em {\n  background: #f7fbff;\n  border-radius: 1.5625rem;\n  color: #1f8ce6;\n}\n.my__ridicash__select__list input[type=radio]:checked + label .my__auto__span span:nth-child(1), .my__ridicash__select__list input[type=radio]:checked + label em .my__auto__span span:nth-child(1) {\n  color: #99d1ff;\n}\n.my__ridicash__select__list input[type=radio]:checked + label .my__auto__span span:nth-child(2), .my__ridicash__select__list input[type=radio]:checked + label em .my__auto__span span:nth-child(2) {\n  color: #99d1ff;\n}\n.my__ridicash__select__list input[type=radio]:checked + label::before {\n  content: \"\";\n  position: absolute;\n  left: 0.9375rem;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #0077d9;\n  border-radius: 50%;\n  background: #1e9eff;\n}\n.my__ridicash__select__list input[type=radio]:checked + label::after {\n  content: \"\";\n  position: absolute;\n  transform: translateY(-50%);\n  top: 50%;\n  left: 1.3125rem;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.my__ridicash__select__list label {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n}\n.my__ridicash__select__list label:hover {\n  background: #f2f4f5;\n  border-radius: 1.5625rem;\n  transition: all 0.25s ease;\n}\n.my__ridicash__select__list label::before {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  background: #fff;\n  transform: translateY(-1px);\n}\n.my__ridicash__select__list label em {\n  font-size: 0.8125rem;\n  font-weight: 400;\n  color: #808991;\n}\n.my__ridicash__select__list span:nth-of-type(1) {\n  width: 210px;\n}\n.my__ridicash__select__list span:nth-of-type(2) {\n  width: 165px;\n}\n.my__ridicash__select__list span:nth-of-type(2).my__auto__span {\n  position: relative;\n  left: 30px;\n}\n.my__ridicash__select__list span:nth-of-type(2).my__auto__span span:nth-child(1) {\n  color: #d1d5d9;\n  text-decoration: line-through;\n}\n.my__ridicash__select__list span:nth-of-type(2).my__auto__span span:nth-child(2) {\n  color: #d1d5d9;\n  position: relative;\n  top: 2px;\n}\n.my__ridicash__select__list span:nth-of-type(3) {\n  width: 247px;\n  margin-right: 0.9375rem;\n}\n.my__ridicash__select__list span.my__auto {\n  margin: 0;\n}\n.my__ridicash__payment__ul {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 0.75rem 1rem 1.25rem;\n  border: 1px solid #d6e3f0;\n}\n.my__ridicash__payment__title {\n  padding-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #303538;\n  line-height: 19px;\n  margin-top: 1.25rem;\n}\n.my__ridicash__payment__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  position: relative;\n  width: 140px;\n  height: 20px;\n  margin: 0.3125rem;\n  color: #636c73;\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.my__ridicash__payment__list input {\n  appearance: none;\n  width: 0;\n  height: 0;\n}\n.my__ridicash__payment__list input:checked + label::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #0077d9;\n  border-radius: 50%;\n  background: #1e9eff;\n}\n.my__ridicash__payment__list input:checked + label::after {\n  content: \"\";\n  position: absolute;\n  transform: translateY(-65%);\n  top: 45%;\n  left: 6px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.my__ridicash__payment__list__label {\n  padding-left: 0.625rem;\n}\n.my__ridicash__payment__list__label::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  background: #fff;\n  transform: translateY(-1px);\n}\n.my__ridicash__payment__list__label .naver-pay {\n  display: block;\n  background: url(\"/assets/mypage/naverPay.svg\") center center no-repeat;\n  text-indent: -9999px;\n  font-size: 0;\n  width: 100px;\n}\n.my__ridicash__payment__list__label .kakao-pay {\n  display: block;\n  background: url(\"/assets/mypage/kakaoPay.svg\") center center no-repeat;\n  text-indent: -9999px;\n  background-color: #ffeb00;\n  background-size: 36px 11px;\n  width: 48px;\n  height: 20px;\n  border-radius: 10px;\n  margin-left: 1.25rem;\n}\n.my__ridicash__payment__list__label .samsung-pay {\n  background: url(\"/assets/mypage/samsungPay.svg\") center center no-repeat;\n  text-indent: -9999px;\n  margin-left: 1.25rem;\n  width: 100px;\n}\n.my__ridicash__payment__list__label .payco {\n  background: url(\"/assets/mypage/payco.svg\") center center no-repeat;\n  text-indent: -9999px;\n  width: 100px;\n}\n.my__ridicash__payment__list__label span {\n  display: block;\n  text-indent: 15px;\n}\n\n.my__ridicash__auto__desc {\n  display: flex;\n  padding-left: 2rem;\n  border: solid 0.25rem #f2f4f5;\n  margin-top: 0.875rem;\n}\n.my__ridicash__auto__desc__box1 {\n  display: flex;\n  width: 100%;\n  padding: 1.625rem 0;\n}\n.my__ridicash__auto__desc__box1 img {\n  width: 5rem;\n  height: 3.125rem;\n}\n.my__ridicash__auto__desc__box2 {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-left: 1.25rem;\n}\n.my__ridicash__auto__desc__box2 span:nth-child(1) {\n  font-weight: 700;\n  font-size: 0.8125rem;\n  line-height: 1.33rem;\n  color: #525a61;\n  letter-spacing: -0.03rem;\n  margin-top: 0.625rem;\n}\n.my__ridicash__auto__desc__box2 span:nth-child(2) {\n  margin-top: 0.1875rem;\n}\n.my__ridicash__auto__header {\n  padding: 1.875rem 5rem 1.25rem 0;\n}\n.my__ridicash__auto__header__desc {\n  margin-top: 0.25rem;\n}\n.my__ridicash__auto__header__title {\n  font-weight: 400;\n  font-size: 1.625rem;\n  line-height: 1.38rem;\n  color: #212529;\n  letter-spacing: -0.03rem;\n  height: 2.1875rem;\n}\n.my__ridicash__auto__form__title {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n  margin: 0.625rem 0 1.125rem 0;\n}\n.my__ridicash__auto__payment {\n  padding: 1.875rem 0 1.25rem 0;\n  display: flex;\n}\n.my__ridicash__auto__payment__title {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n}\n.my__ridicash__auto__payment input[type=radio] {\n  display: none;\n}\n.my__ridicash__auto__payment input[type=radio]:checked + label {\n  color: #1f8ce6;\n}\n.my__ridicash__auto__payment input[type=radio]:checked + label::before {\n  content: \"\";\n  position: absolute;\n  left: -1.5625rem;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #0077d9;\n  border-radius: 50%;\n  background: #1e9eff;\n}\n.my__ridicash__auto__payment input[type=radio]:checked + label::after {\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  position: absolute;\n  left: -1.1875rem;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.my__ridicash__auto__payment label {\n  position: relative;\n  margin-left: 3.125rem;\n}\n.my__ridicash__auto__payment label::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  background: #fff;\n  transform: translateY(-1px);\n}\n.my__ridicash__auto__payment__notice {\n  padding: 1.25rem 0 1.25rem 13.125rem;\n  border: 4px solid #f2f4f5;\n  margin-bottom: 1.25rem;\n}\n.my__ridicash__auto__payment__notice p:nth-child(1) {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n  margin-bottom: 0.25rem;\n}\n.my__ridicash__auto__payment__notice p:nth-child(1) i {\n  font-size: 1.25rem;\n  color: #1f8ce6;\n}\n.my__ridicash__auto__payment__notice p:nth-child(1) span {\n  color: #1f8ce6;\n}\n.my__ridicash__auto__payment__notice p:nth-child(2) {\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n  text-indent: 1.375rem;\n}\n\n.main-container .nav {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 0 1.875rem;\n}\n@media (max-width: 767px) {\n  .main-container .nav {\n    padding: 0;\n  }\n}\n.main-container .nav__category__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  border-bottom: 1px solid #f2f4f5;\n}\n@media (max-width: 767px) {\n  .main-container .nav__category__list {\n    margin: 0;\n  }\n}\n.main-container .nav__category__item {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 60px;\n  height: 65px;\n}\n@media (max-width: 767px) {\n  .main-container .nav__category__item {\n    height: 40px;\n    justify-content: center;\n  }\n}\n.main-container .nav__category__item:hover {\n  color: #666666;\n}\n.main-container .nav__category__item.is-selected {\n  color: #1e9eff;\n  font-weight: 700;\n}\n.main-container .nav__category__link {\n  display: block;\n  font-size: 1.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .nav__category__link {\n    font-size: 1rem;\n  }\n}\n.main-container .nav__genre__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 100%;\n  padding: 0.625rem 0;\n  height: 52px;\n}\n@media (max-width: 767px) {\n  .main-container .nav__genre__list {\n    padding: 0.625rem;\n    font-size: 0.875rem;\n  }\n}\n.main-container .nav__genre__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 51px;\n  height: 100%;\n  margin-right: 0.625rem;\n}\n@media (max-width: 767px) {\n  .main-container .nav__genre__item {\n    margin: 0 0.1875rem;\n  }\n}\n.main-container .nav__genre__item:hover {\n  color: #666666;\n}\n.main-container .nav__genre__item.is-selected {\n  color: #fff;\n  background: #1e9eff;\n  border-radius: 40px;\n}\n.main-container .main {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n}\n.main-container .main .new-arrival {\n  margin: 1.875rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival {\n    margin: 0;\n  }\n}\n.main-container .main .new-arrival__list {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__list {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.main-container .main .new-arrival__item {\n  text-align: center;\n  margin-right: 1.25rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__item {\n    margin-right: 0.625rem;\n  }\n}\n.main-container .main .new-arrival__item:last-child {\n  margin-right: 0;\n}\n.main-container .main .new-arrival__icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__icon {\n    width: 56px;\n    height: 56px;\n  }\n}\n.main-container .main .new-arrival__icon .bx {\n  font-size: 1.5rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__icon .bx {\n    font-size: 1.125rem;\n  }\n}\n.main-container .main .new-arrival__title {\n  font-size: 0.8125rem;\n}\n@media (max-width: 767px) {\n  .main-container .main .new-arrival__title {\n    font-size: 0.6875rem;\n  }\n}\n.main-container .event {\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .event {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .event__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 1.875rem;\n}\n@media (max-width: 767px) {\n  .main-container .event__title {\n    margin-bottom: 0.625rem;\n  }\n}\n.main-container .event__carousel {\n  position: relative;\n}\n.main-container .event__carousel__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  justify-content: space-between;\n}\n.main-container .event__carousel__item {\n  border-radius: 5px;\n  width: calc(33.33% - 7px);\n  flex-shrink: 0;\n  margin: 0 3.5px;\n}\n@media (max-width: 1169px) {\n  .main-container .event__carousel__item {\n    width: calc(50% - 7px);\n  }\n}\n@media (max-width: 767px) {\n  .main-container .event__carousel__item {\n    width: calc(100% - 7px);\n  }\n}\n.main-container .event__carousel__item.switch {\n  background: #007af0;\n}\n.main-container .event__carousel__item.up {\n  background: #987db3;\n}\n.main-container .event__carousel__item.early {\n  background: #954cc3;\n}\n.main-container .event__carousel__item.cash {\n  background: #be1d22;\n}\n.main-container .event__carousel__link {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n.main-container .event__carousel__sub {\n  position: absolute;\n  left: 0;\n  margin-left: 1.5rem;\n  font-size: 0.875rem;\n  color: #fff;\n}\n.main-container .event__carousel__img {\n  width: 200px;\n  border-radius: 5px;\n}\n.main-container .only-ridi {\n  margin: 2.5rem 1.875rem 0;\n}\n@media (max-width: 767px) {\n  .main-container .only-ridi {\n    margin: 2.5rem 1.125rem 0;\n  }\n}\n.main-container .only-ridi__title {\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.main-container .only-ridi__carousel {\n  position: relative;\n}\n.main-container .only-ridi__carousel .carousel__button .prev {\n  top: 90px;\n}\n.main-container .only-ridi__carousel .carousel__button .next {\n  top: 90px;\n}\n.main-container .only-ridi__carousel__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding-top: 2.5rem;\n}\n.main-container .only-ridi__carousel__item {\n  margin: 0 3.5px;\n  width: calc(33.33% - 7px);\n  flex-shrink: 0;\n}\n@media (max-width: 1169px) {\n  .main-container .only-ridi__carousel__item {\n    width: calc(50% - 7px);\n  }\n}\n@media (max-width: 767px) {\n  .main-container .only-ridi__carousel__item {\n    width: calc(100% - 7px);\n  }\n}\n.main-container .only-ridi__carousel__bg {\n  position: relative;\n  height: 100px;\n  border-radius: 5px;\n}\n.main-container .only-ridi__carousel__bg.bg-red {\n  background: #e05427;\n}\n.main-container .only-ridi__carousel__bg.bg-purple {\n  background: #382e48;\n}\n.main-container .only-ridi__carousel__bg.bg-yellow {\n  background: #f8b11a;\n}\n.main-container .only-ridi__carousel__bg.bg-urquoise {\n  background: #71adb3;\n}\n.main-container .only-ridi__carousel__img-bg {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.main-container .only-ridi__carousel__img-main {\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  bottom: 0;\n  width: 250px;\n}\n.main-container .only-ridi__carousel__info {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.main-container .only-ridi__carousel__title {\n  font-weight: 600;\n  margin-bottom: 0.625rem;\n  text-align: center;\n}\n.main-container .only-ridi__carousel__sub {\n  color: #666666;\n  font-size: 0.875rem;\n}\n.main-container .carousel-wrap {\n  overflow: hidden;\n}\n.main-container .carousel-list {\n  transition: transform 0.8s;\n}\n.main-container .mini-banner .carousel-list {\n  transition: transform 0.5s;\n}\n.main-container .mini-banner .carousel__button .prev {\n  left: -18px;\n}\n.main-container .mini-banner .carousel__button .next {\n  right: -18px;\n}\n\n.books {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  min-width: 793px;\n  padding-bottom: 6.25rem;\n}\n.books__info {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 2.5rem 1.8125rem;\n}\n.books__info__body {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.books__info__body__thumbnail-wrap {\n  width: 200px;\n}\n.books__info__body__thumbnail-wrap__image {\n  display: block;\n  width: 200px;\n}\n.books__info__body__thumbnail-wrap__preference {\n  display: block;\n  width: 130px;\n  margin: 1rem auto 0;\n  padding: 0.5rem 0;\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px solid #d1d5d9;\n}\n.books__info__body__thumbnail-wrap__preference:hover {\n  background: #f2f4f5;\n}\n.books__info__body__thumbnail-wrap__preference .button_content {\n  color: #787878;\n}\n.books__info__body__thumbnail-wrap__preference .bx {\n  color: #dc3232;\n  vertical-align: middle;\n  margin-right: 0.125rem;\n}\n.books__info__body__thumbnail-wrap__notification {\n  display: block;\n  min-width: 168px;\n  padding: 0.5rem 0.5rem 0.4375rem 0.5rem;\n  font-size: 0.75rem;\n  letter-spacing: -0.3px;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n  color: #1f8ce6;\n  background: #fff;\n  border: 1px solid #1f8ce6;\n  margin: 1rem auto 0;\n}\n.books__info__body__thumbnail-wrap__notification .bx {\n  font-weight: 700;\n}\n.books__info__body__thumbnail-wrap__notification:hover {\n  background: #ebf6ff;\n  color: #1f8ce6;\n}\n.books__info__body__thumbnail-wrap__notification.active {\n  color: #787878;\n  border: 1px solid #9ea7ad;\n}\n.books__info__body__thumbnail-wrap__notification.active:hover {\n  background: none;\n}\n.books__info__body__details-wrap {\n  width: 500px;\n}\n.books__info__body__details-wrap__title {\n  font-size: 1.875rem;\n  color: #333;\n  font-weight: 700;\n}\n.books__info__body__details-wrap__star-rate-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.books__info__body__details-wrap__star-rate-wrap .star-bg {\n  margin-top: 0 !important;\n  margin-right: 0.1875rem;\n}\n.books__info__body__details-wrap__star-rate-wrap__score {\n  color: #fa722e;\n  font-size: 0.875rem;\n  margin-right: 0.125rem;\n  font-weight: 600;\n}\n.books__info__body__details-wrap__star-rate-wrap__people {\n  font-size: 0.75rem;\n  font-weight: 100;\n}\n.books__info__body__details-wrap__metadata-wrap {\n  margin: 1.25rem 0;\n  font-size: 0.8125rem;\n  color: #666666;\n  line-height: 20px;\n}\n.books__info__body__details-wrap__metadata-wrap .font-bold {\n  font-weight: 700;\n}\n.books__info__body__details-wrap__metadata-wrap__writer-info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__info__body__details-wrap__metadata-wrap__writer-info__painter::before {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 11px;\n  background-color: #d1d5d9;\n}\n.books__info__body__details-wrap__metadata-wrap__writer-info__painter::after {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 11px;\n  background-color: #d1d5d9;\n}\n.books__info__body__details-wrap__metadata-wrap__series-complete-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__info__body__details-wrap__metadata-wrap__series-complete-wrap__book-count {\n  letter-spacing: -0.3px;\n}\n.books__info__body__details-wrap__metadata-wrap__series-complete-wrap__book-count::after {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 11px;\n  background-color: #d1d5d9;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  border-top: 1px solid #e6e8eb;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item:last-child {\n  border-bottom: 1px solid #e6e8eb;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .notice-title {\n  display: block;\n  width: 40px;\n  height: 18px;\n  border-radius: 2px;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: center;\n  margin-right: 1rem;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .info-title {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 20px;\n  color: #666666;\n  letter-spacing: -0.7px;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #646c73;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .schedule-title {\n  background: #e3edf7;\n  color: #738097;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-title {\n  background: #f1faeb;\n  color: #5abf0d;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-title {\n  background: #e3e0ee;\n  color: #605baf;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .Wait-free-title {\n  background: #ebf6ff;\n  color: #1f8ce6;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-info a,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-info {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-info a .info-text,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .benefits-info a .info-event-more,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-info .info-text,\n.books__info__body__details-wrap__book-detail-notice-wrap .notice-item .event-info .info-event-more {\n  color: #808991;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n}\n.books__info__body__details-wrap__benefits-Period {\n  position: relative;\n  display: block;\n  margin-top: 1.25rem;\n  text-align: right;\n  color: #808991;\n  font-size: 0.75rem;\n}\n.books__info__body__details-wrap__benefits-Period::before {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 4px;\n  height: 4px;\n  background-color: #808991;\n  top: -2px;\n  left: -1px;\n}\n.books__info__body__details-wrap .first-episode {\n  width: 180px;\n  font-size: 0.9375rem;\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-weight: 700;\n  line-height: 1em;\n  transition: background 0.2s, color 0.2s;\n  color: #fff;\n  background: #1f8ce6;\n  border: 1px solid #0077d9;\n  font-size: 1rem;\n  padding: 1rem 2.125rem;\n  margin-top: 1.25rem;\n}\n.books__info__body__details-wrap .first-episode:hover {\n  background: #0077d9;\n}\n.books__info__footer {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 2.5rem;\n  padding: 1rem 1.625rem;\n  border: solid 4px #f3f4f5;\n  font-size: 0.75rem;\n  color: #666666;\n  letter-spacing: 1px;\n}\n.books__info__footer .info-title {\n  display: inline-block;\n  min-width: 70px;\n  max-width: 70px;\n  padding-right: 0.5rem;\n  font-weight: 700;\n  color: #525a61;\n}\n.books__info__footer__support-info {\n  margin-left: 6.25rem;\n}\n.books__info__footer__metadata-info div, .books__info__footer__support-info div {\n  margin: 0.25rem 0;\n}\n.books__series {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 0 1.8125rem;\n}\n.books__series__buy-tab {\n  position: relative;\n  border-top: 2px solid #666666;\n}\n.books__series__buy-tab__rental__title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-right: 1px solid #ccc;\n}\n.books__series__buy-tab__purchase__title {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-left: 1px solid #ccc;\n}\n.books__series__buy-tab .tab-list > * {\n  display: none;\n}\n.books__series__buy-tab .tab-list .tab-title {\n  display: block;\n  width: 50%;\n  height: 51px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #ccc;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #333;\n  text-align: center;\n  line-height: 51px;\n  cursor: pointer;\n}\n.books__series__buy-tab .tab-list .tab-title:hover {\n  color: #1f8ce6;\n}\n.books__series__buy-tab .tab-list.active > * {\n  display: block;\n}\n.books__series__buy-tab .tab-list.active .tab-title {\n  background: #fff;\n  border: none;\n}\n.books__series__buy-tab .tab-list.active .list-option {\n  display: flex;\n}\n.books__series__buy-tab .tab-list .list-option {\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 3.1875rem;\n  padding: 0.625rem 1.25rem 0.625rem 0.625rem;\n  border-bottom: 1px dotted #bbb;\n}\n.books__series__buy-tab .tab-list .list-option__left {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__series__buy-tab .tab-list .list-option__left .select-all {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n  color: #636c73;\n  font-size: 0.875rem;\n  font-weight: 700;\n  margin-right: 0.625rem;\n  letter-spacing: -0.3px;\n}\n.books__series__buy-tab .tab-list .list-option__left .alignment {\n  padding: 0.375rem 0.75rem;\n  background: #fff;\n  color: #63696e;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  font-size: 0.75rem;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n}\n.books__series__buy-tab .tab-list .list-option__left .alignment:hover {\n  background: #f2f4f5;\n}\n.books__series__buy-tab .tab-list .list-option__right {\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.books__series__buy-tab .tab-list .list-option__right .info_volume {\n  color: #666666;\n}\n.books__series__buy-tab .tab-list .list-option__right .info_price {\n  color: #1f8ce6;\n}\n.books__series__buy-tab .tab-list .list-option__right .cart {\n  padding: 0.375rem 0.75rem;\n  background: #fff;\n  color: #808991;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  border-radius: 4px;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__buy-tab .tab-list .list-option__right .cart:hover {\n  background: #f2f4f5;\n}\n.books__series__buy-tab .tab-list .list-option__right .rental {\n  padding: 0.375rem 0.75rem;\n  color: #fff;\n  background: #1f8ce6;\n  border: 1px solid #0077d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  border-radius: 4px;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__buy-tab .tab-list .list-option__right .rental:hover {\n  background: #0077d9;\n}\n.books__series__item__wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.625rem 1.25rem 0.625rem 0.625rem;\n  transition: background-color 0.2s;\n  cursor: pointer;\n  border-bottom: 1px solid #f2f4f5;\n}\n.books__series__item__wrap:hover {\n  background: #eef1f1;\n}\n.books__series__item__wrap__left-position {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__series__item__wrap__left-position__image {\n  max-width: 40px;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-right: 0.75rem;\n}\n.books__series__item__wrap__left-position__info-wrap__title-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.books__series__item__wrap__left-position__info-wrap__title-wrap__badge {\n  padding: 0.0625rem 0.1875rem;\n  font-size: 0.5625rem;\n  font-weight: 600;\n  border-radius: 3px;\n  color: #fff;\n  background-color: #1f8ce6;\n  margin-right: 0.3125rem;\n}\n.books__series__item__wrap__left-position__info-wrap__title-wrap__title {\n  color: #000;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__item__wrap__left-position__info-wrap__description-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #666666;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  font-weight: 400;\n}\n.books__series__item__wrap__left-position__info-wrap__description-wrap__date::after {\n  content: \"\";\n  display: inline-block;\n  width: 0.0625rem;\n  height: 0.6875rem;\n  background-color: #d1d5d9;\n  margin: 0 0.375rem;\n}\n.books__series__item__wrap__view-button {\n  padding: 0.375rem 0.75rem;\n  background: #fff;\n  color: #808991;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  border-radius: 4px;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n.books__series__item__wrap__view-button:hover {\n  background: #f2f4f5;\n}\n.books__series .view-all-button {\n  width: 100%;\n  margin-top: 0.625rem;\n  font-size: 0.8125rem;\n  padding: 0.625rem;\n  border-width: 2px;\n  background-color: #fff;\n  transition: background-color 0.3s;\n  border: 2px solid #d1d5d9;\n  border-radius: 4px;\n  font-weight: 700;\n  color: #808991;\n}\n.books__series .view-all-button .bx {\n  font-size: 0.625rem;\n  margin-left: 0.125rem;\n}\n.books__series .view-all-button:hover {\n  background-color: #f2f4f5;\n}\n.books__keyword {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__keyword__list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  transition: background-color 0.2s;\n  margin-top: 0.9375rem;\n}\n.books__keyword__list__item button {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  white-space: nowrap;\n  margin: 0 0.625rem 0.9375rem 0;\n  height: 30px;\n  border-radius: 3px;\n  background: #f3f4f5;\n  border: 0;\n  font-weight: 700;\n  color: #666666;\n}\n.books__keyword__list__item button:hover {\n  background: #c4e1f5;\n}\n.books__introduce {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__introduce__description {\n  margin-top: 0.9375rem;\n  font-size: 0.8125rem;\n  color: #333;\n}\n.books__author {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__author__description {\n  margin-top: 0.9375rem;\n  font-size: 0.8125rem;\n  color: #333;\n  line-height: 1.8;\n}\n.books__author__representative-book {\n  margin-top: 1.25rem;\n  border-top: 1px solid rgb(209, 204, 204);\n}\n.books__author__representative-book__title {\n  margin-top: 1.25rem;\n  padding-left: 1rem;\n  vertical-align: top;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.books__author__representative-book__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.books__author__representative-book__list__item {\n  display: block;\n  margin: 0.9375rem 0.9375rem;\n}\n.books__author__representative-book__list__item img {\n  width: 90px;\n  height: 130px;\n  border-radius: 3px;\n}\n.books__review {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__review__review-wrap__score-wrap {\n  display: flex;\n}\n.books__review__review-wrap__score-wrap__left {\n  width: 120px;\n  padding: 2.75rem 0 1.25rem 0;\n  text-align: center;\n  margin-right: 0.625rem;\n  flex-shrink: 0;\n}\n.books__review__review-wrap__score-wrap__left__score {\n  display: block;\n  margin-top: 0.625rem;\n  font-size: 2.1875rem;\n  color: #212529;\n  font-weight: 700;\n}\n.books__review__review-wrap__score-wrap__left__score_graph {\n  padding: 0.375rem 0 0.625rem 0;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.375rem;\n  color: #808991;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item .bx {\n  font-size: 0.6875rem;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item .star-bar-wrap {\n  display: inline-block;\n  width: 72px;\n  height: 8px;\n  background-color: #e8edf3;\n  margin-left: 0.375rem;\n  box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item .star-bar-wrap__bar {\n  display: block;\n  width: 0;\n  height: 8px;\n  background: #738097 linear-gradient(to bottom, #9daab5, #718392);\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(1) .star-bar-wrap__bar {\n  width: 84%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(2) .star-bar-wrap__bar {\n  width: 71%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(3) .star-bar-wrap__bar {\n  width: 39%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(4) .star-bar-wrap__bar {\n  width: 18%;\n}\n.books__review__review-wrap__score-wrap__left__score_graph__item:nth-child(5) .star-bar-wrap__bar {\n  width: 8%;\n}\n.books__review__review-wrap__score-wrap__right {\n  flex-grow: 1;\n  margin-top: 0.875rem;\n}\n.books__review__review-wrap__score-wrap__right__starrate {\n  position: relative;\n  padding-bottom: 1.125rem;\n}\n.books__review__review-wrap__score-wrap__right__starrate__title {\n  display: block;\n  height: 42px;\n  text-align: center;\n  font-size: 1.125rem;\n  color: #999;\n  font-weight: 700;\n  padding-top: 0.625rem;\n  letter-spacing: -0.03em;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.3125rem;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars__star {\n  display: inline-block;\n  width: 50px;\n  height: 48px;\n  background: url(\"/assets/books/star.png\") no-repeat;\n  background-position: 50% 0%;\n  background-size: 45px 90px;\n  cursor: pointer;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars__star.hovered {\n  background-position: 0% 110%;\n}\n.books__review__review-wrap__score-wrap__right__starrate__stars__star.selected {\n  background-position: 0% 110%;\n  animation-duration: 0.7s;\n  animation-timing-function: ease;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form .review-textarea {\n  max-width: 605px;\n  min-width: 605px;\n  border: 2px solid #d1d5d9;\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 112px;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  padding: 0.75rem 0.9375rem;\n  color: #a7b1bb;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form .review-textarea:focus {\n  outline-color: #7d8e9e;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form .review-textarea:focus::placeholder {\n  color: #d1d5d9;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.625rem;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .write-tip-button {\n  letter-spacing: -0.6px;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n  color: #808991;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  font-size: 0.75rem;\n  padding: 0.5rem 1.125rem;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .write-tip-button .bx {\n  margin-right: 0.125rem;\n  font-size: 0.9375rem;\n  transform: translate3d(0, 1.9px, 0);\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .write-tip-button:hover {\n  background: #f2f4f5;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button {\n  letter-spacing: -0.03em;\n  border-radius: 4px;\n  font-weight: 700;\n  transition: background-color 0.2s, color 0.2s;\n  color: #fff;\n  border: 1px solid #0077d9;\n  box-shadow: 0 1px 1px 0 rgba(31, 140, 230, 0.3);\n  font-size: 0.75rem;\n  padding: 0.5rem 1.125rem;\n  background: #1f8ce6;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button.opacity {\n  opacity: 0.5;\n  cursor: default;\n  pointer-events: none;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button.opacity:hover {\n  background: #1f8ce6;\n}\n.books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap .review-button:hover {\n  background: #0077d9;\n}\n.books__review__review-wrap__list-wrap {\n  margin-top: 2.5rem;\n}\n.books__review__review-wrap__list-wrap__title {\n  display: block;\n  border-bottom: 2px solid #d1d5d9;\n  padding-bottom: 0.625rem;\n  padding-left: 0.3125rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #636c73;\n}\n.books__review__review-wrap__list-wrap__list__item {\n  display: flex;\n  padding-top: 0.875rem;\n  padding-bottom: 0.3125rem;\n  border-top: 1px solid #d1d5d9;\n}\n.books__review__review-wrap__list-wrap__list__item:first-child {\n  border-top: 0px;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-shrink: 0;\n  width: 115px;\n  padding-top: 0.1875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap__star {\n  display: block;\n  margin-bottom: 0.625rem;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap__reviewer {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #212529;\n}\n.books__review__review-wrap__list-wrap__list__item__review-info-wrap__date {\n  margin-top: 0.4375rem;\n  padding-bottom: 0.25rem;\n  color: #808991;\n  font-size: 0.75rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-grow: 1;\n  padding-top: 0.375rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__content {\n  font-size: 0.8125rem;\n  color: #212529;\n  width: 100%;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  padding-bottom: 0.625rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap {\n  align-self: flex-end;\n  transition: background-color 0.2s, color 0.2s;\n  font-weight: 700;\n  font-size: 0.6875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap .bx {\n  margin-right: 0.125rem;\n  font-size: 0.6875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__comment-btn {\n  margin-right: 0.1875rem;\n  padding: 0.375rem 0.875rem;\n  color: #808991;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  border-radius: 4px;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__comment-btn:hover {\n  background: #f2f4f5;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__like-btn {\n  border-radius: 4px;\n  color: #808991;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  padding: 0.375rem 0.875rem;\n}\n.books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__like-btn:hover {\n  background: #f2f4f5;\n}\n.books__similar {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 793px;\n  padding: 3.125rem 1.8125rem 0;\n}\n.books__similar__list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.books__similar__list__item {\n  display: block;\n  margin: 0.9375rem 0.9375rem;\n}\n.books__similar__list__item img {\n  width: 90px;\n  height: 130px;\n  border: 1px solid #d1d5d9;\n  border-radius: 3px;\n}\n.books .star-bg {\n  position: relative;\n  width: 75px;\n  height: 15px;\n  display: inline-block;\n  background: url(\"/assets/books/emptyStar.svg\") center center no-repeat;\n  background-size: 100% 100%;\n  margin-top: 0.1875rem;\n}\n.books .star-bg__stars {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 0%;\n  height: 15px;\n}\n.books .star-bg__stars::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  background: url(\"/assets/books/stars.svg\") center center no-repeat;\n  background-size: 100% 100%;\n  left: 0;\n  top: 0;\n  width: 75px;\n  height: 15px;\n}\n.books .middle-title {\n  display: block;\n  font-size: 1.25rem;\n  color: #59667a;\n  font-weight: 700;\n  letter-spacing: -0.6px;\n  padding-bottom: 0.625rem;\n  border-bottom: 2px solid #7d8e9e;\n}\n.books input[type=checkbox] {\n  display: none;\n}\n.books .checkbox {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 2px;\n  transition: background-color 0.2s, border-color 0.2s;\n  margin-top: 0.125rem;\n  margin-right: 0.5rem;\n}\n.books input[type=checkbox]:checked + .checkbox {\n  border-color: #0077d9;\n  background: #1f8ce6;\n}\n.books input[type=checkbox]:checked + .checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 2px;\n  display: block;\n  width: 6px;\n  height: 2px;\n  background-color: #fff;\n  transform: rotate(45deg);\n}\n.books input[type=checkbox]:checked + .checkbox::after {\n  content: \"\";\n  position: absolute;\n  top: 6px;\n  right: 0;\n  display: block;\n  width: 12px;\n  height: 2px;\n  background-color: #fff;\n  transform: rotate(-45deg);\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(100%);\n  }\n  50% {\n    transform: scale(110%);\n  }\n  100% {\n    transform: scale(100%);\n  }\n}\n.my__container {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #666666;\n  letter-spacing: -0.03rem;\n  width: 100%;\n}\n.my__container .active {\n  color: #1f8ce6;\n}\n.my__container__contents {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  width: 1000px;\n  margin-top: 2.0625rem;\n}\n.my__myridi__modal {\n  display: none;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.my__myridi__modal.active {\n  display: block;\n}\n.my__myridi__modal__dimmed {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: #0f1724;\n  opacity: 0.3;\n}\n.my__myridi__modal__popup {\n  position: absolute;\n  left: 50%;\n  top: 8.125rem;\n  transform: translate3d(-50%, 0, 0);\n  width: 21.25rem;\n  border: 0.1875rem solid #000;\n  animation: move 500ms ease forwards;\n  border-radius: 5px;\n}\n@keyframes move {\n  from {\n    opacity: 0;\n    transform: translate3d(-50%, -15%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n.my__myridi__modal__popup__header {\n  background-color: #41474c;\n  height: 34px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 0.5625rem 0.625rem 0.625rem;\n}\n.my__myridi__modal__popup__header button {\n  border: none;\n  background-color: #41474c;\n}\n.my__myridi__modal__popup__header button span {\n  font-size: 1.875rem;\n}\n.my__myridi__modal__popup__header button span i {\n  transform: translate3d(5px, -5px, 0);\n  color: #d1d5d9;\n}\n.my__myridi__modal__popup__title {\n  color: #d1d5d9;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 0.875rem;\n  color: #d1d5d9;\n  letter-spacing: -0.03rem;\n}\n.my__myridi__modal__popup__content {\n  background-color: #fff;\n}\n.my__myridi__modal__popup__content p {\n  font-weight: 700;\n  font-size: 1.125rem;\n  line-height: 1rem;\n  color: #40474d;\n  letter-spacing: -0.03rem;\n  padding: 2.4375rem 0 1.1875rem 0;\n  text-align: center;\n}\n.my__myridi__modal__popup__content input {\n  margin: 1rem 0 1.6875rem 1.25rem;\n  width: 14.625rem;\n  height: 2.4375rem;\n  padding: 0.5rem;\n}\n.my__myridi__modal__popup__content button {\n  border: 0;\n  background-color: #1f8ce6;\n  width: 3.75rem;\n  height: 2.4375rem;\n  border: 1px solid #0077d9;\n  border-radius: 3px;\n  color: #fff;\n}\n.my__myridi__modal__popup__content ul {\n  padding: 0 1.25rem 3rem;\n  list-style: disc;\n}\n.my__myridi__modal__popup__content ul li {\n  margin-left: 15px;\n  padding-left: 0.375rem;\n  margin-bottom: 0.1875rem;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.4rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n}\n.my__thumbnail__btn {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n#my__hover:hover {\n  color: #0077d9;\n}\n\n.my__ridicash__section {\n  width: 720px;\n  padding: 0 0 5rem 0;\n}\n.my__ridicash__title {\n  font-weight: 700;\n  font-size: 1.3125rem;\n  line-height: 1rem;\n  color: #333;\n  letter-spacing: -0.03rem;\n  width: 100%;\n  text-align: left;\n}\n.my__ridicash__tab {\n  list-style: none;\n  border-bottom: 0.125rem solid #d1d5d9;\n  margin-top: 1.25rem;\n}\n.my__ridicash__tablist {\n  display: inline-block;\n  margin-right: 0.8125rem;\n  color: #666666;\n  font-size: 0.75rem;\n}\n.my__ridicash__tablist a {\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  display: block;\n  position: relative;\n  min-width: 1.5625rem;\n  padding: 0.625rem 0;\n  text-align: center;\n}\n.my__ridicash__tablist a:hover {\n  color: #636c73;\n}\n.my__ridicash__tablist a:hover::after {\n  height: 0.1875rem;\n  background: #636c73;\n}\n.my__ridicash__tablist a.active {\n  color: #40474d;\n}\n.my__ridicash__tablist a.active::after {\n  height: 0.1875rem;\n  background: #1f8ce6;\n}\n.my__ridicash__tablist a::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 0;\n  background: #d1d5d9;\n  left: 0;\n  bottom: -0.125rem;\n}\n.my__ridicash__form {\n  width: 640px;\n}\n.my__ridicash__caution__list {\n  position: relative;\n  padding: 0.1875rem 0.5rem;\n  color: #808991;\n  font-weight: 400;\n  line-height: 1.1rem;\n}\n.my__ridicash__caution__list::before {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  width: 4px;\n  height: 4px;\n  background: #808991;\n  margin-right: 0.25rem;\n}\n.my__ridicash__agreement {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  position: relative;\n  width: 89%;\n  text-align: center;\n  font-size: 0.875rem;\n  color: #40474d;\n}\n.my__ridicash__agreement input {\n  appearance: none;\n  width: 0;\n  height: 0;\n}\n.my__ridicash__agreement input:checked + label::before {\n  border-color: #0077d9;\n  background: #1f8ce6;\n}\n.my__ridicash__agreement label {\n  width: 300px;\n}\n.my__ridicash__agreement label::before {\n  content: \"\";\n  position: absolute;\n  background: #fff;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n  left: 80px;\n  top: 50%;\n  margin-top: -0.5625rem;\n  border-radius: 2px;\n  border: 1px solid #d1d5d9;\n}\n.my__ridicash__agreement label::after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  text-indent: -444px;\n  font-size: 0;\n  overflow: hidden;\n  background: url(\"/assets/mypage/check.svg\") center center no-repeat;\n  background-size: 100% 100%;\n  width: 10px;\n  height: 10px;\n  left: 84px;\n  top: 50%;\n  margin-top: -0.3125rem;\n}\n.my__ridicash__submit__btn__container {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.my__ridicash__submit__btn__container i {\n  margin-right: 0.3125rem;\n}\n.my__ridicash__submit__btn__container button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 240px;\n  padding: 0.875rem 2.125rem;\n  background: #1f8ce6;\n  border: 1px solid #0077d9;\n  border-radius: 4px;\n  font-weight: 700;\n  color: #fff;\n  font-size: 1rem;\n}\n.my__ridicash__empty {\n  padding: 10rem;\n  text-align: center;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n}\n.my__ridicash__empty span {\n  margin: 0 auto;\n}\n.my__ridicash__empty span i {\n  font-size: 80px;\n  color: #9daab5;\n}\n.my__ridicash__bill__empty {\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  margin: 0 auto;\n}\n.my__ridicash__bill__empty i {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  font-size: 5.25rem;\n  width: 84px;\n  margin-bottom: 0.9375rem;\n}\n.my__ridicash__bill__empty__desc {\n  display: block;\n  text-align: center;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1rem;\n  color: #636c73;\n  letter-spacing: -0.03rem;\n}\n\n.viewer {\n  color: #999;\n}\n.viewer__title .title {\n  margin-left: 0.3125rem;\n}\n.viewer__header {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #262626;\n  border-bottom: 1px solid #4d4d4d;\n  transform: translate3d(0, 0, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__header__inner {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 700px;\n  height: 50px;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.viewer__header__inner .link-back {\n  font-weight: 500;\n  line-height: 50px;\n}\n.viewer__header__inner .bx-arrow-back {\n  font-size: 22px;\n  transform: translateY(4px);\n}\n.viewer__header__right button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n  color: #999;\n  margin-left: 10px;\n}\n.viewer__header__right button.preference .active {\n  color: #dc3232;\n}\n.viewer__header__right button.notification .active {\n  color: #f8b11a;\n}\n.viewer__header.hidden {\n  transform: translate3d(0, -100%, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__webtoon {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 55px;\n  background: #000;\n}\n.viewer__webtoon img {\n  display: block;\n  width: 740px;\n  margin: 0 auto;\n}\n.viewer__footer {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  background: #262626;\n  font-size: 13px;\n  transform: translate3d(0, 0, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__footer__top.hidden {\n  display: none;\n}\n.viewer__footer__top__inner {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 700px;\n  height: 37px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n.viewer__footer__top__right {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  gap: 18px;\n}\n.viewer__footer__top__right__link {\n  display: block;\n}\n.viewer__footer__top__right__link button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #999;\n}\n.viewer__footer__top__right__link button .arrow-left i {\n  font-size: 22px;\n  width: 18px;\n}\n.viewer__footer__top__right__link button .arrow-right {\n  transform: rotate(180deg);\n}\n.viewer__footer__top__right__link button .arrow-right i {\n  font-size: 22px;\n  width: 18px;\n}\n.viewer__footer__bottom {\n  width: 100%;\n  background: #000;\n  border-top: 1px solid #4d4d4d;\n  position: relative;\n}\n.viewer__footer__bottom__inner {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 700px;\n}\n.viewer__footer__bottom__inner ul {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n  height: 50px;\n}\n.viewer__footer__bottom__button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  font-size: 24px;\n  color: #999;\n}\n.viewer__footer__bottom__link {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  position: relative;\n}\n.viewer__footer__bottom__title {\n  font-size: 11px;\n  margin-top: 3px;\n}\n.viewer__footer__bottom__comment {\n  position: absolute;\n  top: -3px;\n  right: -20px;\n  background: #d1d5d9;\n  border: 2px solid #000;\n  border-radius: 25px;\n  font-size: 9px;\n  color: #000;\n  font-weight: 300;\n  letter-spacing: -0.5px;\n  padding: 2px 4px;\n}\n.viewer__footer.hidden {\n  transform: translate3d(0, 100%, 0);\n  transition: transform 0.5s ease;\n}\n.viewer__footer__settings {\n  z-index: -1;\n  width: 40rem;\n  position: absolute;\n  left: 50%;\n  transform: translate3d(-50%, 100%, 0);\n  box-shadow: 0 0 10px 0;\n  transition: transform 0.5s ease;\n}\n.viewer__footer__settings.visible {\n  transform: translate3d(-50%, calc(-100% - 51px), 0);\n  transition: transform 0.5s ease;\n}\n.viewer__footer__settings__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  background-color: #fff;\n  height: 3rem;\n  box-shadow: 1px 1px #9daab5;\n  border-radius: 3px;\n}\n.viewer__footer__settings__list:nth-of-type(1) {\n  margin-bottom: 0.5rem;\n}\n.viewer__footer__settings__item i {\n  font-size: 1.5rem;\n}\n.viewer__footer__settings__item:nth-child(1) {\n  padding: 0.5rem 0.75rem 0;\n  line-height: 3rem;\n}\n.viewer__footer__settings__item:nth-child(2) {\n  flex-grow: 1;\n}\n.viewer__footer__settings__item:nth-child(2).width__desc {\n  margin-left: 0.5rem;\n  font-weight: 700;\n  font-size: 0.9375rem;\n  line-height: 3rem;\n  color: #000;\n  letter-spacing: -0.03rem;\n}\n.viewer__footer__settings__item:nth-child(2).width__desc span {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  color: #808991;\n  letter-spacing: -0.03rem;\n  padding-left: 0.1875rem;\n}\n.viewer__footer__settings__item:nth-child(3) {\n  padding: 0.3125rem 0.625rem 0 0;\n}\n.viewer__footer__settings__color__list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-left: 0.5rem;\n  padding: 0.5rem 0;\n}\n.viewer__footer__settings__color__item {\n  margin-right: 0.5rem;\n}\n.viewer__footer__settings__color__item button {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 2rem;\n  border: 0;\n}\n.viewer__footer__settings__color__item button.active {\n  border: 2px solid #457ad3;\n}\n.viewer__footer__settings__color__item button:hover {\n  border: 1px solid #457ad3;\n}\n.viewer__footer__settings__color__item button[data-mode=light] {\n  background-color: #fff;\n}\n.viewer__footer__settings__color__item button[data-mode=sepia] {\n  background-color: #f0e8d1;\n}\n.viewer__footer__settings__color__item button[data-mode=dark] {\n  background-color: #000;\n}\n.viewer__footer__settings__width__container {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding-top: 0.3125rem;\n}\n.viewer__footer__settings__width__container div {\n  width: 3rem;\n  height: 1.875rem;\n  border: 1px solid #9ea7ad;\n  padding-top: 0.125rem;\n  text-align: center;\n  cursor: pointer;\n}\n.viewer__footer__settings__width__container div:nth-child(1) {\n  border-right: 0;\n}\n.viewer__footer__settings__width__container div.active {\n  border-color: #339cf2;\n  color: #339cf2;\n}\n.viewer__footer__settings__width__container div.active:hover {\n  background-color: #98ade4;\n}\n.viewer__footer__settings__width__reduce {\n  border-radius: 1.875rem 0 0 1.875rem;\n}\n.viewer__footer__settings__width__enlarge {\n  border-radius: 0 1.875rem 1.875rem 0;\n}\n\n[data-theme=light] {\n  background-color: #fff;\n}\n[data-theme=light].viewer__footer__settings {\n  background-color: #f2f4f5;\n}\n[data-theme=light].viewer__header, [data-theme=light].viewer__footer__top {\n  background-color: #f2f4f5;\n}\n[data-theme=light] .viewer__footer__bottom__comment {\n  border-color: #fff;\n}\n[data-theme=light].viewer__footer__top, [data-theme=light].viewer__footer__bottom {\n  border-top: 1px solid #e6e8eb;\n}\n[data-theme=light].viewer__header {\n  border-bottom: 1px solid #e6e8eb;\n}\n[data-theme=light].viewer__webtoon {\n  transition: all 0.8s ease;\n}\n\n[data-theme=sepia] {\n  background-color: #f0e8d1;\n}\n[data-theme=sepia].viewer__footer__settings {\n  background-color: #d7ccb3;\n}\n[data-theme=sepia].viewer__header, [data-theme=sepia].viewer__footer__top, [data-theme=sepia].viewer__footer__settings__list {\n  background-color: #e8dec5;\n}\n[data-theme=sepia] .viewer__footer__bottom__comment {\n  border-color: #f0e8d1;\n}\n[data-theme=sepia].viewer__footer__top, [data-theme=sepia].viewer__footer__bottom {\n  border-top: 1px solid #beb6a1;\n}\n[data-theme=sepia].viewer__header {\n  border-bottom: 1px solid #beb6a1;\n}\n[data-theme=sepia].viewer__webtoon {\n  transition: all 0.8s ease;\n}\n\n[data-theme=dark] {\n  background-color: #000;\n}\n[data-theme=dark].viewer__header, [data-theme=dark].viewer__footer__top, [data-theme=dark].viewer__footer__settings__list {\n  background-color: #262626;\n}\n[data-theme=dark] .viewer__footer__bottom__comment {\n  border-color: #000;\n}\n[data-theme=dark].viewer__footer__top, [data-theme=dark].viewer__footer__bottom {\n  border-top: 1px solid #4d4d4d;\n}\n[data-theme=dark].viewer__header {\n  border-bottom: 1px solid #4d4d4d;\n}\n[data-theme=dark] .viewer__footer__settings__item:nth-child(2).width__desc {\n  color: #b3b3b3;\n}\n[data-theme=dark].viewer__webtoon {\n  transition: all 0.8s ease;\n}\n[data-theme=dark].viewer__footer__settings {\n  background-color: #333;\n}\n\n@media (max-width: 767px) {\n  .header.main {\n    background: #000;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top {\n    background: #000;\n    border-bottom: 0;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__container {\n    height: 39px;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category {\n    width: 100%;\n    justify-content: space-around;\n    font-size: 0.8125rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category__item.dot::after {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category__link:hover {\n    color: #666666;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__category__link.is-selected {\n    color: #fff;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-top__service {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down {\n    border-radius: 16px 16px 0 0;\n    padding: 0.625rem 0;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav {\n    flex-direction: column;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__title {\n    width: 171px;\n  }\n}\n.header.main .header-down__nav__link {\n  display: flex;\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__link {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n  }\n}\n.header.main .header-down__nav__ridi {\n  height: 20px;\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__ridi {\n    height: 42px;\n    padding: 0.8125rem 0.3125rem 0.875rem 1rem;\n  }\n}\n.header.main .header-down__nav__webtoon {\n  height: 20px;\n  margin-left: 0.3125rem;\n}\n@media (max-width: 767px) {\n  .header.main .header-down__nav__webtoon {\n    height: 42px;\n    padding: 0.8125rem 0 0.875rem 0;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form__search__container.is-focus {\n    width: 95%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form {\n    padding: 0.5625rem 1rem 0.3125rem;\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form__container {\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__form__icon {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__list {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main .header-down__login {\n    display: block;\n    position: absolute;\n    font-size: 0.75rem;\n    top: 16px;\n    right: 22px;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form__search__container.is-focus {\n    width: 95%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form {\n    padding: 0.5625rem 1rem 0.3125rem;\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form__container {\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__form__icon {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__list {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.main__login {\n    display: block;\n    position: absolute;\n    font-size: 0.75rem;\n    top: 16px;\n    right: 22px;\n  }\n}\n\n@media (max-width: 767px) {\n  .header.sub .header-top {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .header.sub .header-down {\n    padding: 9px 0 6px 0;\n  }\n}\n.header.sub .header-down__nav__title {\n  margin-right: auto;\n}\n@media (max-width: 767px) {\n  .header.sub .header-down__nav__title .header-down__nav__link .header-down__nav__ridi {\n    width: auto;\n    height: 42px;\n    padding: 0.8125rem 0.3125rem 0.875rem 1rem;\n  }\n}\n@media (max-width: 767px) {\n  .header.sub .header-down__nav__title .header-down__nav__link .header-down__nav__webtoon {\n    display: none;\n  }\n}\n.header.sub .header-down__nav__ridi {\n  height: 20px;\n}\n.header.sub .header-down__nav__webtoon {\n  display: none;\n}\n.header.sub .header-down__form {\n  display: none;\n}\n@media (max-width: 767px) {\n  .header.sub .header-down__list {\n    display: none;\n  }\n}\n\n.login {\n  width: 100%;\n  min-height: 100vh;\n  background: #ebf6ff;\n  letter-spacing: -0.4px;\n}\n.login__header {\n  height: 40px;\n  border-bottom: 1px solid #d6deeb;\n  text-align: center;\n  font-size: 19px;\n  font-weight: 700;\n  line-height: 38px;\n  color: #1f8ce6;\n}\n.login .link-mainpage {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n.login .login-form {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  width: 360px;\n}\n.login .login-form .user-id,\n.login .login-form .user-pw {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 1.125rem;\n  padding-bottom: 1.125rem;\n  width: 340px;\n  height: 48px;\n  border: 1px solid #d6deeb;\n  font-size: 0.875rem;\n}\n.login .login-form .user-id::placeholder,\n.login .login-form .user-pw::placeholder {\n  color: #808991;\n}\n.login .login-form .user-id:hover,\n.login .login-form .user-pw:hover {\n  box-shadow: inset 0 0 1px 0.5px #9ea7ad;\n}\n.login .login-form .user-id {\n  border-radius: 4px 4px 0 0;\n}\n.login .login-form .user-pw {\n  border-top: 0;\n}\n.login .login-form button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  width: 100%;\n  height: 50px;\n  border-radius: 4px;\n  background: #1f8ce6;\n  color: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  box-shadow: 0 2px 4px 0 rgba(31, 140, 230, 0.3);\n  border: 1px solid #0077d9;\n}\n.login__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  background: #f7fbff;\n  border-radius: 0 0 4px 4px;\n  border: 1px solid #d6deeb;\n  border-top: 0;\n  padding: 0.8125rem 0.5rem 1rem 0.8125rem;\n  font-size: 0.75rem;\n  color: #738097;\n}\n.login__info [type=checkbox] {\n  display: none;\n}\n.login__info [type=checkbox]:checked + label .save-box::before {\n  content: \"\";\n  position: absolute;\n  top: 0.1875rem;\n  right: 0.125rem;\n  width: 0.625rem;\n  height: 0.3125rem;\n  transform: rotate(-45deg);\n  border-style: solid;\n  border-color: #1f8ce6;\n  border-width: 0px 0px 0.125rem 0.125rem;\n}\n.login__info label {\n  cursor: pointer;\n}\n.login__info label:hover {\n  color: #1f8ce6;\n}\n.login__info label .save-box {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border: 1px solid #d6deeb;\n  border-radius: 2px;\n  box-shadow: inset 0 1px 2px 0 rgba(115, 128, 150, 0.2);\n  transform: translateY(3px);\n  margin-right: 3px;\n}\n.login__info__right {\n  transform: translateY(2px);\n}\n.login__info__right span {\n  padding: 0 6px;\n  cursor: pointer;\n}\n.login__info__right span:hover {\n  color: #1f8ce6;\n}\n.login__info .search-id {\n  position: relative;\n  margin-right: -4px;\n}\n.login__info .search-id::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  right: 0;\n  width: 1px;\n  height: 12px;\n  background-color: #d6deeb;\n  transform: translateY(1px);\n}\n.login__signup-link {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  width: 360px;\n}\n.login__signup-link .signin-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  color: #808991;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(209, 213, 217, 0.3);\n  border: 1px solid #d1d5d9;\n  width: 100%;\n  height: 50px;\n  border-radius: 4px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n}\n.login__error-message {\n  margin: 0.25rem 0;\n  display: block;\n  padding-left: 0.25rem;\n  width: 100%;\n  height: 20px;\n  color: #e64938;\n  font-size: 0.6875rem;\n  font-weight: 700;\n}\n\n.signup {\n  width: 100%;\n  min-height: 100vh;\n  background: #ebf6ff;\n  letter-spacing: -0.4px;\n}\n.signup__header {\n  height: 40px;\n  border-bottom: 1px solid #d6deeb;\n  text-align: center;\n  font-size: 1.1875rem;\n  font-weight: 700;\n  line-height: 38px;\n  color: #1f8ce6;\n}\n.signup .link-mainpage {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n.signup__form {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  width: 360px;\n  font-size: 0.875rem;\n}\n.signup__input__area {\n  position: relative;\n  width: 340px;\n  height: 48px;\n  margin-top: 1.5625rem;\n}\n.signup__input__area:nth-child(4) {\n  margin-top: 0;\n}\n.signup__input__text {\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n  left: 10px;\n  color: #808991;\n}\n.signup__input__text.focus-text {\n  color: #1f8ce6;\n  font-size: 0.6875rem;\n  transform: translateY(-20px);\n  transition: all 0.2s ease;\n}\n.signup__input__box {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #d1d5d9;\n  border-radius: 4px;\n  text-indent: 10px;\n}\n.signup__input__box:hover {\n  box-shadow: inset 0 0 1px 1px #738097;\n}\n.signup__input__box.is-correct {\n  background: 98% center/6% url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %2301d760;transform: ;msFilter:;'%3E%3Cpath d='m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z'%3E%3C/path%3E%3C/svg%3E\") no-repeat, #fff;\n}\n.signup__input__box[name=birth] {\n  background-size: 12%;\n  background-position: 96% center;\n}\n.signup__password div:nth-child(1) input {\n  border-radius: 4px 4px 0 0;\n}\n.signup__password div:nth-child(2) {\n  margin-top: 0;\n}\n.signup__password div:nth-child(2) input {\n  border-top: 0;\n  border-radius: 0 0 4px 4px;\n}\n.signup__option {\n  margin-top: 1.5625rem;\n}\n.signup__option__title {\n  font-size: 0.75rem;\n  color: #808991;\n}\n.signup__option__area {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-top: 0.5rem;\n}\n.signup__option__area__birth {\n  width: 50%;\n  height: 48px;\n}\n.signup__option__area__birth:focus-within .focus-text {\n  color: #1f8ce6;\n  font-size: 0.6875rem;\n  transform: translateY(-20px);\n  transition: all 0.2s ease;\n}\n.signup__option__area .user-birth {\n  width: 100%;\n  height: 100%;\n}\n.signup__option__area__gender {\n  width: 48%;\n  height: 48px;\n  border-radius: 4px;\n}\n.signup__option__area__gender button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 50%;\n  height: 100%;\n  background: #fff;\n  border-radius: 4px 0 0 4px;\n  color: #808991;\n  font-size: 0.875rem;\n  border: 1px solid #d1d5d9;\n}\n.signup__option__area__gender button:nth-child(2) {\n  border-radius: 0 4px 4px 0;\n  border-left: 0;\n}\n.signup__option__area__gender button:hover {\n  box-shadow: inset 0 0 1px 0.5px #738097;\n}\n.signup__option__area__gender button.is-selected {\n  border: 1px solid #738097;\n  background: #dbefff;\n  pointer-events: none;\n}\n.signup__tos {\n  width: 340px;\n  background: #fff;\n  border: 1px solid #d1d5d9;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  color: #738097;\n}\n.signup__tos label {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n}\n.signup__tos label:hover .agreement-text {\n  color: #141414;\n}\n.signup__tos .all-agree {\n  padding-left: 0.8125rem;\n  padding-right: 0.8125rem;\n  padding-top: 0.8125rem;\n  padding-bottom: 0.8125rem;\n  border-bottom: 1px solid #d1d5d9;\n  font-weight: 600;\n}\n.signup__tos__list {\n  padding-left: 0.8125rem;\n  padding-right: 0.8125rem;\n}\n.signup__tos__item {\n  margin-top: 0.9375rem;\n  margin-bottom: 0.9375rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.signup__tos .check-rounded {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #d1d5d9;\n  border-radius: 50%;\n  margin-right: 0.375rem;\n  position: relative;\n}\n.signup__tos .check-rounded::before {\n  content: \"\";\n  position: absolute;\n  top: 0.3125rem;\n  right: 0.25rem;\n  width: 0.5rem;\n  height: 0.3125rem;\n  transform: rotate(-45deg);\n  border-style: solid;\n  border-color: #d1d5d9;\n  border-width: 0px 0px 0.125rem 0.125rem;\n}\n.signup__tos [type=checkbox] {\n  display: none;\n}\n.signup__tos [type=checkbox]:checked + label .check-rounded, .signup__tos [type=checkbox]:checked + label .check-rounded::before {\n  border-color: #1f8ce6;\n}\n.signup__tos .link-more {\n  position: relative;\n  font-size: 0.75rem;\n  color: #9ea7ad;\n  margin-right: 10px;\n}\n.signup__tos .link-more::after {\n  content: \"\";\n  position: absolute;\n  right: -8px;\n  top: 50%;\n  transform: translateY(-50%) rotate(45deg);\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-width: 0.0625rem 0.0625rem 0 0;\n  border-color: #9ea7ad;\n}\n.signup__tos .link-more:hover {\n  color: #808991;\n}\n.signup__tos .link-more:hover::after {\n  border-color: #808991;\n}\n.signup__error-message {\n  margin: 0.25rem 0;\n  display: block;\n  padding-left: 0.25rem;\n  width: 100%;\n  height: 20px;\n  color: #e64938;\n  font-size: 0.6875rem;\n  font-weight: 700;\n}\n.signup .btn-submit {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 100%;\n  height: 50px;\n  background: #1f8ce6;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  border: 1px solid #0077d9;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(209, 213, 217, 0.3);\n  margin-top: 0.9375rem;\n}\n.signup .btn-submit:disabled {\n  background: #ccc;\n  color: #f0f0f0;\n  border: 1px solid #d1d5d9;\n}\n\n.footer {\n  margin-top: 3.75rem;\n  border-top: 1px solid #f2f4f5;\n}\n.footer__container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 2.5625rem 1.625rem 1.25rem;\n  min-width: 340px;\n}\n@media (max-width: 767px) {\n  .footer__container {\n    padding: 1.875rem 0.75rem 3.125rem;\n    flex-direction: column;\n  }\n}\n.footer__wrap {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding: 0 0.25rem;\n  flex: 1;\n}\n.footer__wrap__customer-guide {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide {\n    flex-direction: column;\n  }\n}\n.footer__wrap__customer-guide__centerAndNotice {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__centerAndNotice {\n    width: auto;\n    flex-direction: row;\n    margin-bottom: 1.875rem;\n  }\n}\n.footer__wrap__customer-guide__centerAndNotice li {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0.625rem 0;\n  font-weight: bold;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.3px;\n  color: #787878;\n}\n.footer__wrap__customer-guide__centerAndNotice li:hover {\n  opacity: 0.6;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__centerAndNotice li {\n    flex: 1;\n    margin: 0;\n  }\n}\n.footer__wrap__customer-guide__centerAndNotice li a {\n  margin-left: 0.25rem;\n}\n.footer__wrap__customer-guide__info {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n}\n.footer__wrap__customer-guide__info__service {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n  max-width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__service {\n    max-width: inherit;\n  }\n}\n.footer__wrap__customer-guide__info__service__title {\n  color: #787878;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.3px;\n  padding: 0.25rem 0;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__service__title {\n    padding: 0;\n    margin-bottom: 1rem;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__service__list {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.footer__wrap__customer-guide__info__service__list__item {\n  color: #787878;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n  padding: 0.375rem 0;\n}\n.footer__wrap__customer-guide__info__service__list__item:first-child {\n  padding-top: 0;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__service__list__item {\n    padding: 0.4375rem 0;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__service__list__item:hover {\n  opacity: 0.6;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 2;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce {\n    flex: 1;\n    flex-direction: column;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n  max-width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__etc {\n    max-width: initial;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__title {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  color: #787878;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__etc__title {\n    padding: 0;\n    margin-bottom: 1rem;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  color: #787878;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item:first-child {\n  padding-top: 0;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item {\n    padding: 0.4375rem 0;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__etc__list__item:hover {\n  opacity: 0.6;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1;\n  max-width: 185px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__introduce {\n    max-width: initial;\n    margin-top: 1.875rem;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__title {\n  color: #787878;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.3px;\n  padding: 0.25rem 0;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__introduce__title {\n    padding: 0;\n    margin-bottom: 1rem;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item {\n  color: #787878;\n  font-size: 0.8125rem;\n  line-height: 16px;\n  letter-spacing: -0.01em;\n  padding: 0.375rem 0;\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item:first-child {\n  padding-top: 0;\n}\n@media (max-width: 767px) {\n  .footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item {\n    padding: 0.4375rem 0;\n    font-size: 0.75rem;\n    line-height: 14px;\n  }\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item svg {\n  color: #1e9eff;\n  margin-left: 0.25rem;\n  font-size: 0.875rem;\n  transform: translate3d(0, 2px, 0);\n}\n.footer__wrap__customer-guide__info__etcAndIntroduce__introduce__list__item:hover {\n  opacity: 0.6;\n}\n.footer__wrap__business-info {\n  margin-top: 3.75rem;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info {\n    margin-top: 3.4375rem;\n  }\n}\n.footer__wrap__business-info__more {\n  color: #787878;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 14px;\n  letter-spacing: -0.03px;\n  margin-bottom: 0.75rem;\n  cursor: pointer;\n}\n.footer__wrap__business-info__more[open] .business-info__title__icon {\n  transform: rotate(270deg);\n}\n.footer__wrap__business-info__more .business-info__title__icon {\n  font-size: 0.5625rem;\n  transform: rotate(90deg);\n}\n.footer__wrap__business-info__more .business-info__title::marker {\n  content: \"\";\n}\n.footer__wrap__business-info__content {\n  margin-bottom: 0.1875rem;\n}\n.footer__wrap__business-info__content__list {\n  margin: 0.625rem 0 -0.1875rem -0.8125rem;\n}\n.footer__wrap__business-info__content__list__item {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.6875rem;\n  line-height: 22px;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__content__list__item {\n    font-size: 0.625rem;\n    line-height: 18px;\n  }\n}\n.footer__wrap__business-info__content__list__item::before {\n  content: \"\";\n  display: inline-block;\n  background: rgb(228, 222, 222);\n  width: 1px;\n  height: 9px;\n  margin: 0.125rem 0.375rem;\n}\n.footer__wrap__business-info__content__list__item__title {\n  margin-right: 0.375rem;\n}\n.footer__wrap__business-info__link-list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__link-list {\n    margin-top: 0.625rem;\n  }\n}\n.footer__wrap__business-info__link-list__item {\n  color: #787878;\n  font-size: 0.6875rem;\n  line-height: 19px;\n  letter-spacing: -0.01em;\n  display: inline-flex;\n  height: 13px;\n  line-height: 13px;\n  letter-spacing: -0.03px;\n}\n.footer__wrap__business-info__link-list__item:first-child::before {\n  content: \"\";\n  display: none;\n}\n.footer__wrap__business-info__link-list__item:nth-of-type(2) {\n  font-weight: 700;\n}\n.footer__wrap__business-info__link-list__item::before {\n  content: \"\";\n  display: inline-block;\n  background: #f0f0f0;\n  width: 1px;\n  height: 9px;\n  margin: 0.125rem 0.375rem;\n}\n.footer__wrap__business-info__link-list__item:hover {\n  opacity: 0.6;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__link-list__item {\n    font-size: 0.625rem;\n    line-height: 18px;\n  }\n}\n.footer__wrap__business-info__copyright {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  color: #787878;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  letter-spacing: -0.03px;\n  margin-top: 1rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__copyright {\n    font-size: 0.625rem;\n    font-weight: 400;\n    line-height: 12px;\n    margin-top: 0.75rem;\n  }\n}\n.footer__wrap__business-info__copyright span {\n  font-size: 0.6875rem;\n  margin-right: 0.25rem;\n}\n@media (max-width: 767px) {\n  .footer__wrap__business-info__copyright span {\n    margin-right: 0.125rem;\n  }\n}\n.footer__icon-list {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding-bottom: 1.875rem;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.footer__icon-list__item {\n  color: #787878;\n  margin-left: 0.625rem;\n}\n.footer__icon-list__item:first-child {\n  margin-left: 0;\n}\n.footer__icon-list__item a {\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e6e6e6;\n  border-radius: 22px;\n}\n\n.recent {\n  width: 100%;\n}\n.recent__title {\n  color: #141414;\n  font-size: 1.375rem;\n  font-weight: 600;\n}\n.recent__empty {\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n}\n.recent__empty .bx-book-open {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  font-size: 5.25rem;\n  width: 84px;\n  margin-bottom: 0.9375rem;\n}\n.recent__empty__title {\n  display: block;\n  text-align: center;\n  font-size: 0.8125rem;\n  color: #636c73;\n  font-weight: 400;\n}\n.recent__fill__clear-btn {\n  text-align: end;\n  padding-right: 1.0625rem;\n}\n.recent__fill__button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  border: 1px solid #d1d5d9;\n  border-radius: 7px;\n  padding: 0.4375rem 1.0625rem;\n  color: #808991;\n}\n.recent__fill__list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 1.875rem;\n  gap: 50px;\n}\n.recent__fill__item {\n  width: 110px;\n}\n.recent__fill__item p {\n  margin-top: 0.1875rem;\n}\n.recent__fill__item p .carousel__star {\n  font-size: 0.75rem;\n}\n.recent__fill__item p .carousel__rate {\n  font-size: 0.75rem;\n  color: #a7b1bb;\n  font-weight: 400;\n  margin-left: 0.125rem;\n}\n.recent__fill__link {\n  display: block;\n  height: 160px;\n}\n.recent__fill__thumbnail {\n  position: relative;\n  height: 100%;\n}\n.recent__fill__img {\n  width: 100%;\n  height: 100%;\n}\n.recent__fill__wait-free {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 34px;\n  height: 34px;\n  top: -7px;\n  left: -7px;\n  font-size: 1.375rem;\n  background: #1f8ce6;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);\n  color: #fff;\n}\n.recent__fill__free-count {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-right: 0;\n  border-bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 3px 0 0 0;\n  padding: 0.4375rem 0.375rem 0.3125rem 0.375rem;\n  line-height: 12px;\n  opacity: 0.9;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.75rem;\n}\n.recent__fill__title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #333;\n}\n.recent__fill__sub {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 0.1875rem;\n  font-size: 0.75rem;\n  color: #666666;\n  line-height: 18px;\n}\n\n.notFound-image {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.notFound-image img {\n  max-width: none;\n}","// 숨김 제목 및 콘텐츠 --------------------------------------------------------------- /\r\n@mixin a11yHidden {\r\n  overflow: hidden;\r\n  position: absolute !important;\r\n  clip: rect(0, 0, 0, 0);\r\n  clip-path: inset(50%);\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n}\r\n\r\n.sr-only {\r\n  @include a11yHidden;\r\n}\r\n","// 기본 스타일 -------------------------------------------------------------------- /\r\n// 루트 요소의 기본 글자 크기 및 가로 스크바 제거 ----------------------------------------------- /\r\nhtml {\r\n  font-size: $rootUnit;\r\n  overflow-y: visible;\r\n}\r\n\r\n// 기본 박스 사이징 설정 -------------------------------------------------------------- /\r\nbody,\r\nbody::before,\r\nbody::after,\r\nbody *,\r\nbody *::before,\r\nbody *::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// 탭 하이라이트 색상 설정 ------------------------------------------------------------- /\r\nbody * {\r\n  $highlightColor: #ffffc8;\r\n\r\n  -webkit-tap-highlight-color: rgba($highlightColor, 0.3);\r\n}\r\n\r\n// 기본 아웃라인 제거 (웹접근성 체크 포인트 - 기본 아웃라인 제거 후에는 반드시 커스텀 아웃라인 스타일 정의가 필요함) ------------------------------------------------------------------ /\r\n// a, input, button, select, textarea{\r\n//   outline: 0;\r\n// }\r\n\r\n// 본문 기본 폰트, 글자 크기, 굵기, 배경 색상 지정 --------------------------------------------- /\r\nbody {\r\n  font-family: \"Spoqa Han Sans\", \"Sans-serif\";\r\n  font-size: inherit;\r\n  background-color: $white;\r\n\r\n  margin: 0;\r\n}\r\n\r\n// 제목 글자 크기 및 굵기 재지정 --------------------------------------------------------- /\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: 100%;\r\n  font-weight: inherit;\r\n}\r\n\r\n// 목록 안쪽 여백 및 불릿 제거 ---------------------------------------------------------- /\r\nul,\r\nol {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n// 이미지에 발생하는 갭 제거 ------------------------------------------------------------ /\r\nimg {\r\n  vertical-align: middle;\r\n  max-width: 100%;\r\n}\r\n\r\n// 링크 요소의 밑줄 및 글자 색상 재 정의 ---------------------------------------------------- /\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n// 주소 및 강조 요소 스타일 재 정의 ------------------------------------------------------- /\r\naddress,\r\nem {\r\n  font-style: normal;\r\n}\r\n\r\n// fieldset 요소의 테두리 및 여백 제거 -------------------------------------------------- /\r\nfieldset {\r\n  border: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n// legend 요소 숨김 콘텐츠 처리 ------------------------------------------------------- /\r\nlegend {\r\n  @include a11yHidden;\r\n}\r\n\r\n// 버튼 마우스 스타일 설정 ------------------------------------------------------------- /\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  min-width: 320px;\r\n}\r\n","@use \"sass:math\";\r\n\r\n$rootUnit: 16px !default;\r\n\r\n@function removeUnit($value) {\r\n  @return math.div($value, $value * 0 + 1);\r\n}\r\n\r\n@function rem($value, $base: $rootUnit) {\r\n  @return (removeUnit(math.div($value, $base))) * 1rem;\r\n}\r\n\r\n@function em($value, $base: $rootUnit) {\r\n  @return (removeUnit(math.div($value, $base))) * 1em;\r\n}\r\n","// Initial ( 기본 색상 ) --------------------------------------------------------- /\r\n$white: #fff;\r\n$black: #000;\r\n$gray: #ccc;\r\n$sepia: #f0e8d1;\r\n\r\n// Primary ( 주요 색상 ) --------------------------------------------------------- /\r\n$primary-color: #1e9eff;\r\n\r\n// Secondary ( 보조 색상 ) ------------------------------------------------------- /\r\n$primary-font: #141414;\r\n$my-title: #212529;\r\n$my-secondary-title: #40474d;\r\n$secondary-font: #666666;\r\n$gray0: #f0f0f0;\r\n$gray2: #d1d5d9;\r\n$gray4: #f3f4f5;\r\n$gray5: #f5f5f5;\r\n$gray6: #f6f6f6;\r\n$gray7: #e6e6e6;\r\n$gray8: #787878;\r\n$gray9: #525a61;\r\n$red: #dc3232;\r\n$blue: #1f8ce6;\r\n$ligt-blue: #99d1ff;\r\n\r\n// Fonts ( 폰트 색상 ) ------------------------------------------------------- /\r\n$font-gray1: #787878;\r\n$font-gray2: #808991;\r\n$font-gray3: #a7b1bb;\r\n$font-gray4: #a5a5a5;\r\n$font-gray5: #646c73;\r\n$font-gray6: #59667a;\r\n$font-gray7: #636c73;\r\n$font-skyblue: #738097;\r\n$font-green: #5abf0d;\r\n$font-purple: #605baf;\r\n$my-font-icon: #738096;\r\n$my-asset-amount: #4b9bf8;\r\n$my-asset-link: #626d75;\r\n$my-asset-arrow: #0077d9;\r\n$my-font-recent: #333;\r\n$nav-dark-gray: #b3b3b3;\r\n\r\n// Borders ( 보더 색상 ) --------------------------------------------------------- /\r\n$border-gray1: #dddddd;\r\n$border-gray2: #f2f4f5;\r\n$border-gray3: #d6deeb;\r\n$border-gray4: #9ea7ad;\r\n$border-gray5: #f2f2f2;\r\n$border-gray6: #e6e8eb;\r\n$border-gray7: #636c73;\r\n$border-gray8: #7d8e9e;\r\n$border-blue: #0077d9;\r\n$border-blue2: #339cf2;\r\n$border-green: #01d760;\r\n$border-btn-gray1: #d6deeb;\r\n$border-btn-gray2: #b3c2d1;\r\n$border-hr-gray1: #e5e8eb;\r\n$border-hr-gray2: #e5e5e5;\r\n$border-btn-mode: #457ad3;\r\n$border-nav-light: #e6e8eb;\r\n$border-nav-sepia: #beb6a1;\r\n$border-nav-sepia: #beb6a1;\r\n$border-nav-dark: #4d4d4d;\r\n\r\n// Grayscale & Backgrounds ( 흑백 색상 ) ----------------------------------------- /\r\n$bg-skyblue: #e3edf7;\r\n$bg-purple: #e3e0ee;\r\n$bg-blue: #ebf6ff;\r\n$bg-charcoal: #7d8d9d;\r\n$bg-btn-gray: #dfeef8;\r\n$bg-lightblue: #f7fbff;\r\n$bg-lightblue2: #dbefff;\r\n$bg-green: #f1faeb;\r\n$bg-bar-gr0: #e8edf3;\r\n$bg-bar-gr1: #9daab5;\r\n$bg-bar-gr2: #718392;\r\n$bg-nav-sepia: #e8dec5;\r\n$bg-nav-dark: #262626;\r\n$bg-nav-zoom: #98ade4; \r\n$bg-modal: #0f1724;\r\n$bg-modal2: #41474c;\r\n$bg-nav-sepia2: #d7ccb3;\r\n\r\n// Accent ( 강조 색상 ) ---------------------------------------------------------- /\r\n$accent-font: #fa722e;\r\n\r\n// Button ( 버튼 색상 ) ------------------------------------------------------- /\r\n$btn-black: #303538;\r\n\r\n// Carousel Info ------------------------------------------------------- /\r\n$up-btn: #20cdcc;\r\n$time-btn: #1f9fff;\r\n$free: #324254;\r\n\r\n//  Event Carousel ------------------------------------------------------- /\r\n$event-switch: #007af0;\r\n$event-up: #987db3;\r\n$event-early: #954cc3;\r\n$event-cash: #be1d22;\r\n\r\n//  Only RIDI ------------------------------------------------------- /\r\n$ridi-red: #e05427;\r\n$ridi-purple: #382e48;\r\n$ridi-yellow: #f8b11a;\r\n$ridi-yellow2: #EECF4E;\r\n$ridi-turquoise: #71adb3;\r\n",".header-top {\r\n  width: 100%;\r\n  border-bottom: 1px solid $border-gray2;\r\n  font-size: rem(14px);\r\n\r\n  &__container {\r\n    @include flexbox($justify: space-between);\r\n    @include autoMargin;\r\n\r\n    max-width: 1170px;\r\n    padding: 0 rem(30px);\r\n\r\n    @include mobile {\r\n      height: 39px;\r\n    }\r\n  }\r\n\r\n  &__category {\r\n    @include flexbox($items: center);\r\n\r\n    &__item {\r\n      position: relative;\r\n      padding: rem(11px) rem(12px);\r\n\r\n      &.dot {\r\n        &::after {\r\n          @include centerTranslateY;\r\n\r\n          content: '';\r\n          position: absolute;\r\n          right: 0;\r\n          width: 3px;\r\n          height: 3px;\r\n          border-radius: 3px;\r\n          background: $gray7;\r\n        }\r\n      }\r\n\r\n      &:first-child {\r\n        padding-left: 0;\r\n      }\r\n    }\r\n\r\n    &__link {\r\n      display: block;\r\n      color: $secondary-font;\r\n      font-weight: 600;\r\n\r\n      &:hover {\r\n        color: $gray2;\r\n      }\r\n\r\n      &.is-selected {\r\n        color: $black;\r\n      }\r\n\r\n      &:last-child {\r\n        @include flexbox($items: center);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__service {\r\n    @include flexbox($items: center);\r\n\r\n    &__list {\r\n      color: $secondary-font;\r\n    }\r\n\r\n    &__link {\r\n      position: relative;\r\n      display: block;\r\n      padding: rem(11px) rem(12px);\r\n      color: $secondary-font;\r\n\r\n      &.dot {\r\n        &::after {\r\n          @include centerTranslateY;\r\n\r\n          content: '';\r\n          position: absolute;\r\n          right: 0;\r\n          width: 3px;\r\n          height: 3px;\r\n          border-radius: 3px;\r\n          background: $gray7;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use 'sass:math';\r\n\r\n// padding 관련 믹스인\r\n@mixin paddingX($paddingX: 0) {\r\n  padding-left: rem($paddingX);\r\n  padding-right: rem($paddingX);\r\n}\r\n\r\n@mixin paddingY($paddingY: 0) {\r\n  padding-top: rem($paddingY);\r\n  padding-bottom: rem($paddingY);\r\n}\r\n\r\n// margin 관련 믹스인\r\n@mixin autoMargin($marginX: auto) {\r\n  margin-left: $marginX;\r\n  margin-right: $marginX;\r\n}\r\n\r\n@mixin marginX($marginX: 0) {\r\n  margin-left: rem($marginX);\r\n  margin-right: rem($marginX);\r\n}\r\n\r\n@mixin marginY($marginY: 0) {\r\n  margin-top: rem($marginY);\r\n  margin-bottom: rem($marginY);\r\n}\r\n\r\n// 박스의 최소 및 최대 너비를 설정하기 위한 믹스인\r\n@mixin boxSizeMinMax($min: 768px, $max: 1200px) {\r\n  min-width: $min;\r\n  max-width: $max;\r\n  @include autoMargin;\r\n}\r\n\r\n// flex 박스 믹스인\r\n@mixin flexbox($direction: row, $justify: flex-start, $items: stretch, $wrap: nowrap) {\r\n  display: flex;\r\n  flex-flow: $direction $wrap;\r\n  justify-content: $justify;\r\n  align-items: $items;\r\n}\r\n\r\n@mixin pos($position: absolute) {\r\n  position: $position;\r\n}\r\n\r\n@mixin flexCenter($dp: flex, $jc: center, $ai: center) {\r\n  display: $dp;\r\n  justify-content: $jc;\r\n  align-items: $ai;\r\n}\r\n\r\n// 이미지 중앙 정렬 (50$)\r\n@mixin centerTranslateY($percent: -50%) {\r\n  top: 50%;\r\n  transform: translateY($percent);\r\n}\r\n\r\n@mixin centerTranslateX($percent: -50%) {\r\n  left: 50%;\r\n  transform: translateX($percent);\r\n}\r\n\r\n// iframe 비율\r\n@mixin respondIframe($w: 16, $h: 9) {\r\n  position: relative;\r\n  padding-top: math.div($h, $w) * 100%;\r\n  height: 0 !important;\r\n\r\n  iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n// 버튼 스타일 제거\r\n@mixin removeBtnStyle($webkit: none, $moz: none, $appear: none, $border: none, $bg: transparent, $pd: 0) {\r\n  -webkit-appearance: $webkit;\r\n  -moz-appearance: $moz;\r\n  appearance: $appear;\r\n  border: $border;\r\n  background: $bg;\r\n  padding: $pd;\r\n}\r\n\r\n// ellipsis\r\n@mixin ellipsis($over: hidden, $to: ellipsis, $ws: nowrap) {\r\n  overflow: $over;\r\n  text-overflow: $to;\r\n  white-space: $ws;\r\n}\r\n\r\n@mixin ellipsisLine($over: hidden, $to: ellipsis, $dp: -webkit-box, $webClamp: 2, $webOrient: vertical) {\r\n  overflow: $over;\r\n  text-overflow: $to;\r\n  display: $dp;\r\n  -webkit-line-clamp: $webClamp;\r\n  -webkit-box-orient: $webOrient;\r\n}\r\n\r\n// font 설정\r\n@mixin fontSetup($weight: 400, $size: rem(12px), $color: $secondary-font, $height: 1rem, $spacing: -0.03rem) {\r\n  font-weight: $weight;\r\n  font-size: $size;\r\n  line-height: $height;\r\n  color: $color;\r\n  letter-spacing: $spacing;\r\n}\r\n\r\n// carousel button\r\n@mixin carouselButton(\r\n  $pos: absolute,\r\n  $top: 50%,\r\n  $trans: translateY(-50%),\r\n  $w: 40px,\r\n  $h: 40px,\r\n  $bg: $white,\r\n  $border: 2px solid $border-gray2,\r\n  $border-radius: 50%,\r\n  $fz: rem(26px),\r\n  $color: $font-gray1\r\n) {\r\n  position: $pos;\r\n  top: $top;\r\n  transform: $trans;\r\n  width: $w;\r\n  height: $h;\r\n  background: $bg;\r\n  border: $border;\r\n  border-radius: $border-radius;\r\n  font-size: $fz;\r\n  color: $color;\r\n}\r\n","@mixin mobile {\r\n  @media (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tab {\r\n  @media (max-width: 1169px) {\r\n    @content;\r\n  }\r\n}\r\n",".header-down {\r\n  @include autoMargin;\r\n\r\n  position: relative;\r\n  background: $white;\r\n  max-width: 1170px;\r\n  padding: rem(18px) rem(30px);\r\n\r\n  &__nav {\r\n    @include flexbox($items: center);\r\n\r\n    &__title {\r\n      margin-right: auto;\r\n    }\r\n  }\r\n\r\n  &__form {\r\n    position: relative;\r\n    margin-right: 8px;\r\n\r\n    &__search {\r\n      &__container {\r\n        display: none;\r\n\r\n        &.is-focus {\r\n          display: block;\r\n          position: absolute;\r\n          width: 464px;\r\n          margin-top: rem(10px);\r\n          padding-top: rem(6px);\r\n          border: 1px solid $gray0;\r\n          border-radius: 8px;\r\n          background: $white;\r\n          overflow: hidden;\r\n          opacity: 1;\r\n          transition: opacity 0.2s ease-in-out 0s;\r\n          box-shadow: rgb(0 0 0 / 8%) 5px 5px 10px;\r\n          z-index: 8000;\r\n        }\r\n      }\r\n\r\n      &__books {\r\n        text-align: center;\r\n        line-height: 18px;\r\n        padding-top: rem(60px);\r\n        padding-bottom: rem(60px);\r\n        color: $font-gray4;\r\n        font-size: rem(14px);\r\n        font-weight: 400;\r\n      }\r\n\r\n      &__item {\r\n        padding: rem(8px) rem(12px);\r\n      }\r\n\r\n      &__title {\r\n        display: inline-block;\r\n        margin: 0px rem(5px) rem(3px);\r\n        line-height: 22px;\r\n        font-size: rem(14px);\r\n\r\n        &__match {\r\n          color: $primary-color;\r\n        }\r\n      }\r\n\r\n      &__author {\r\n        display: inline-block;\r\n        margin: 0px rem(5px) rem(3px);\r\n        line-height: 22px;\r\n        font-size: rem(12px);\r\n        color: $gray8;\r\n      }\r\n    }\r\n\r\n    &__container {\r\n      width: 259px;\r\n      background: $gray0;\r\n      border-radius: 8px;\r\n    }\r\n\r\n    &__input {\r\n      border: none;\r\n      background: $gray0;\r\n      caret-color: $primary-color;\r\n\r\n      &:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n\r\n    &__label {\r\n      @include flexbox($items: center);\r\n\r\n      padding: 0 rem(11px);\r\n      height: 40px;\r\n    }\r\n\r\n    &__icon {\r\n      width: 20px;\r\n      height: 20px;\r\n      color: $font-gray2;\r\n      margin-right: rem(12px);\r\n      transform: translateY(3px);\r\n\r\n      @include mobile {\r\n        transform: translateY(0px);\r\n      }\r\n    }\r\n\r\n    // Input Focus Div\r\n  }\r\n\r\n  &__list {\r\n    @include flexbox($justify: space-between);\r\n    width: 208px;\r\n  }\r\n\r\n  &__item {\r\n    @include flexCenter;\r\n    @include marginX(6px);\r\n\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: rem(26px);\r\n    color: $primary-font;\r\n\r\n    &:last-child {\r\n      margin-right: 0;\r\n    }\r\n  }\r\n\r\n  &__login {\r\n    display: none;\r\n\r\n    &__link {\r\n      display: block;\r\n      width: 100%;\r\n      padding: rem(6px) rem(12px);\r\n      border: 1px solid $border-gray1;\r\n\r\n      border-radius: 16px;\r\n    }\r\n  }\r\n}\r\n",".toaster {\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 400px;\r\n  padding: rem(6px) rem(6px) rem(6px) rem(26px);\r\n  color: #5abf0d;\r\n  background-color: #191919;\r\n  transform: translate3d(-50%, 0, 0);\r\n  border-radius: 5px;\r\n  animation: toast 4s ease forwards;\r\n  opacity: 0;\r\n\r\n  .toaster-text {\r\n    width: 310px;\r\n  }\r\n\r\n  .bxs-check-circle {\r\n    margin-top: rem(1px);\r\n  }\r\n\r\n  .bx-x {\r\n    color: #666666;\r\n    font-size: 30px;\r\n    margin-top: rem(1px);\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@keyframes toast {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(-50%, 0, 0);\r\n  }\r\n\r\n  20%,\r\n  50%,\r\n  80% {\r\n    opacity: 1;\r\n    transform: translate3d(-50%, 220%, 0);\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    transform: translate3d(-50%, 0, 0);\r\n  }\r\n}","// carousel button\r\n.carousel__button {\r\n  .prev {\r\n    @include removeBtnStyle;\r\n    @include flexCenter;\r\n    @include carouselButton;\r\n\r\n    left: -20px;\r\n  }\r\n\r\n  .next {\r\n    @include removeBtnStyle;\r\n    @include flexCenter;\r\n    @include carouselButton;\r\n\r\n    right: -20px;\r\n  }\r\n}\r\n",".top-button {\r\n  @include removeBtnStyle;\r\n  @include flexCenter;\r\n\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 25px;\r\n  width: 58px;\r\n  height: 58px;\r\n  border: 1px solid $gray7;\r\n  border-radius: 50%;\r\n  background: $white;\r\n  font-size: rem(30px);\r\n  color: $gray8;\r\n\r\n  @include mobile {\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: rem(24px);\r\n  }\r\n}\r\n","// 별점 컴포넌트\r\n\r\n.carousel {\r\n  &__star {\r\n    color: $red;\r\n    font-size: rem(14px);\r\n\r\n    @include mobile {\r\n      font-size: rem(12px);\r\n    }\r\n  }\r\n\r\n  &__rate {\r\n    color: $secondary-font;\r\n    font-size: rem(14px);\r\n\r\n    @include mobile {\r\n      font-size: rem(12px);\r\n    }\r\n  }\r\n}\r\n",".main {\r\n  &__carousel {\r\n    position: relative;\r\n    height: 400px;\r\n    margin: 0 rem(30px);\r\n    border-radius: 5px;\r\n    margin-bottom: rem(20px);\r\n\r\n    @include mobile {\r\n      margin: rem(18px);\r\n      height: 330px;\r\n    }\r\n\r\n    &__inner {\r\n      height: 100%;\r\n      overflow: hidden;\r\n    }\r\n\r\n    &__wrap {\r\n      width: 100%;\r\n      height: 100%;\r\n      display: flex;\r\n      transform: translateX(-53px);\r\n    }\r\n\r\n    &__item {\r\n      min-width: 45px;\r\n      height: 400px;\r\n      margin-left: 8px;\r\n      border-radius: 5px;\r\n      overflow: hidden;\r\n\r\n      @include mobile {\r\n        height: 330px;\r\n        // min-width: 30px;\r\n      }\r\n\r\n      &.currentSlide {\r\n        min-width: calc(100% - 108px);\r\n\r\n        .main__carousel__desc {\r\n          @include ellipsis;\r\n        }\r\n      }\r\n\r\n      &.nextSlide {\r\n        .main__carousel__desc {\r\n          opacity: 0;\r\n        }\r\n      }\r\n\r\n      &:first-child {\r\n        margin-left: 0;\r\n      }\r\n    }\r\n\r\n    &__link {\r\n      position: relative;\r\n      display: block;\r\n      width: 100%;\r\n      height: 100%;\r\n\r\n      img {\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n      }\r\n    }\r\n\r\n    @keyframes visible {\r\n      from {\r\n        opacity: 1;\r\n      }\r\n      to {\r\n        opacity: 0;\r\n      }\r\n    }\r\n\r\n    &__desc {\r\n      position: absolute;\r\n      bottom: 40px;\r\n      left: 0;\r\n      width: 100%;\r\n      color: $white;\r\n      animation-fill-mode: forwards;\r\n      padding-left: rem(40px);\r\n\r\n      @include mobile {\r\n        bottom: 20px;\r\n        padding-left: rem(20px);\r\n      }\r\n    }\r\n\r\n    &__info {\r\n      display: flex;\r\n\r\n      span {\r\n        font-size: rem(11px);\r\n        padding: rem(4px) rem(6px);\r\n        border: 1px solid $white;\r\n      }\r\n    }\r\n\r\n    &__title {\r\n      font-size: calc(rem(14px) + 1.5vw);\r\n      font-size: rem(32px);\r\n      font-weight: 600;\r\n      margin-top: rem(8px);\r\n    }\r\n\r\n    &__subTitle {\r\n      margin-top: rem(6px);\r\n      opacity: 0.8;\r\n      font-size: calc(rem(8.5px) + 0.5vw);\r\n    }\r\n\r\n    &__counter {\r\n      position: absolute;\r\n      right: 40px;\r\n      bottom: 0;\r\n      width: fit-content;\r\n      height: 20px;\r\n      padding: 0 rem(8px);\r\n      line-height: 22px;\r\n      font-size: rem(14px);\r\n\r\n      background: rgba(0, 0, 0, 0.3);\r\n      color: rgba(255, 255, 255, 0.3);\r\n      border-radius: 10px;\r\n\r\n      @include mobile {\r\n        right: 10px;\r\n        font-size: rem(11px);\r\n        padding: 0 rem(6px);\r\n      }\r\n\r\n      span {\r\n        color: $white;\r\n      }\r\n    }\r\n\r\n    .carousel__button {\r\n      display: flex;\r\n\r\n      .prev {\r\n        @include flexCenter;\r\n      }\r\n    }\r\n  }\r\n}\r\n","// carousel info 컴포넌트\r\n\r\n.carousel {\r\n  &__info {\r\n    @include flexbox;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    .bxl-upwork {\r\n      @include flexCenter;\r\n\r\n      width: 28px;\r\n      height: 28px;\r\n      background: $up-btn;\r\n      color: $white;\r\n      border-radius: 0 0 0 5px;\r\n\r\n      @include mobile {\r\n        font-size: rem(14px);\r\n        width: 23px;\r\n        height: 23px;\r\n      }\r\n    }\r\n\r\n    .bx-time-five {\r\n      @include flexCenter;\r\n\r\n      width: 28px;\r\n      height: 28px;\r\n      background: $time-btn;\r\n      color: $white;\r\n\r\n      @include mobile {\r\n        font-size: rem(14px);\r\n        width: 23px;\r\n        height: 23px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__free-count {\r\n    @include flexCenter;\r\n\r\n    font-size: rem(12px);\r\n    font-weight: 600;\r\n    color: $white;\r\n    height: 28px;\r\n    background: $free;\r\n    padding: rem(8px) rem(6px);\r\n    border-radius: 0 5px 0 0;\r\n\r\n    @include mobile {\r\n      height: 23px;\r\n      font-size: rem(6px);\r\n    }\r\n  }\r\n}\r\n",".main-container {\r\n  .rank {\r\n    position: relative;\r\n    margin: rem(40px) rem(30px) 0;\r\n\r\n    @include mobile {\r\n      margin: rem(40px) rem(18px) 0;\r\n    }\r\n\r\n    &__title {\r\n      font-weight: 700;\r\n      font-size: rem(24px);\r\n\r\n      @include mobile {\r\n        font-size: rem(18px);\r\n      }\r\n    }\r\n\r\n    &__carousel {\r\n      margin-top: rem(16px);\r\n      overflow: hidden;\r\n\r\n      .carousel__button {\r\n        .prev {\r\n          top: 230px;\r\n\r\n          @include mobile {\r\n            top: 155.5px;\r\n          }\r\n        }\r\n\r\n        .next {\r\n          top: 230px;\r\n\r\n          @include mobile {\r\n            top: 155.5px;\r\n          }\r\n        }\r\n      }\r\n\r\n      &__list {\r\n        @include flexbox($direction: column, $wrap: wrap);\r\n\r\n        height: 368px;\r\n\r\n        @include mobile {\r\n          height: 273px;\r\n        }\r\n      }\r\n\r\n      &__item {\r\n        @include flexbox;\r\n\r\n        width: 370px;\r\n        height: 116px;\r\n        margin-bottom: rem(6px);\r\n\r\n        @include mobile {\r\n          width: 327px;\r\n          height: 87px;\r\n          margin-bottom: rem(3px);\r\n        }\r\n      }\r\n\r\n      &__link {\r\n        @include mobile {\r\n          width: 60px;\r\n          height: 87px;\r\n        }\r\n      }\r\n\r\n      &__img {\r\n        display: block;\r\n        width: 80px;\r\n        height: 100%;\r\n        border-radius: 5px;\r\n        object-fit: cover;\r\n      }\r\n\r\n      &__desc {\r\n        @include flexbox($direction: column, $justify: center);\r\n\r\n        width: 184px;\r\n        margin-right: rem(26px);\r\n      }\r\n\r\n      &__num {\r\n        @include flexCenter;\r\n\r\n        width: 80px;\r\n        font-weight: 600;\r\n        font-size: rem(18px);\r\n\r\n        @include mobile {\r\n          font-size: rem(14px);\r\n        }\r\n      }\r\n\r\n      &__title {\r\n        font-weight: 500;\r\n        margin-bottom: rem(8px);\r\n\r\n        @include mobile {\r\n          font-size: rem(14px);\r\n        }\r\n      }\r\n\r\n      &__info {\r\n        color: $secondary-font;\r\n        font-size: rem(14px);\r\n        margin-bottom: rem(8px);\r\n\r\n        @include mobile {\r\n          font-size: rem(11px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".main-container {\r\n  .webtoon {\r\n    margin: rem(40px) rem(30px) 0;\r\n\r\n    @include mobile {\r\n      margin: rem(40px) rem(18px) 0;\r\n    }\r\n\r\n    &__title {\r\n      font-weight: 700;\r\n      font-size: rem(24px);\r\n      margin-bottom: rem(20px);\r\n    }\r\n\r\n    &__carousel {\r\n      position: relative;\r\n\r\n      .carousel__button {\r\n        .prev {\r\n          top: 130.5px;\r\n\r\n          @include mobile {\r\n            top: 84px;\r\n          }\r\n        }\r\n\r\n        .next {\r\n          top: 130.5px;\r\n\r\n          @include mobile {\r\n            top: 84px;\r\n          }\r\n        }\r\n      }\r\n\r\n      &__list {\r\n        @include flexbox;\r\n      }\r\n\r\n      &__item {\r\n        width: 16.66%;\r\n        min-width: 180px;\r\n        height: 355px;\r\n        margin-right: rem(5px);\r\n\r\n        @include mobile {\r\n          min-width: 120px;\r\n          height: 249px;\r\n        }\r\n      }\r\n\r\n      &__thumbnail {\r\n        position: relative;\r\n        width: 177px;\r\n        height: 258px;\r\n        margin-bottom: rem(10px);\r\n        border: 1px solid $border-gray1;\r\n        border-radius: 5px;\r\n\r\n        @include mobile {\r\n          width: 120px;\r\n          height: 170px;\r\n        }\r\n      }\r\n\r\n      &__img {\r\n        width: 100%;\r\n        height: 100%;\r\n        border-radius: 5px;\r\n        object-fit: cover;\r\n      }\r\n\r\n      &__title {\r\n        display: block;\r\n        font-weight: 600;\r\n        margin-bottom: rem(6px);\r\n\r\n        @include mobile {\r\n          margin-bottom: rem(2px);\r\n          font-size: rem(13px);\r\n        }\r\n      }\r\n\r\n      &__author {\r\n        color: $secondary-font;\r\n        font-size: rem(14px);\r\n        margin-bottom: rem(6px);\r\n\r\n        @include mobile {\r\n          margin-bottom: rem(2px);\r\n          font-size: rem(12px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".my__left__menu {\r\n  &__container {\r\n    display: table-cell;\r\n    vertical-align: top;\r\n    width: 235px;\r\n    padding-bottom: rem(320px);\r\n  }\r\n\r\n  &__title {\r\n    @include fontSetup(700, rem(24px), $my-title);\r\n  }\r\n}\r\n\r\n.my__nav__menu {\r\n  width: 130px;\r\n  margin-top: rem(9px);\r\n\r\n  &__home {\r\n    @include fontSetup(700, rem(15px), $my-secondary-title);\r\n  }\r\n\r\n  &__section {\r\n    padding: rem(17px) 0 rem(19px);\r\n    border-bottom: 2px solid $border-hr-gray2;\r\n\r\n    &__title {\r\n      @include fontSetup(700, rem(15px), $my-secondary-title);\r\n\r\n      span {\r\n        @include fontSetup(700, rem(16px), $my-font-icon);\r\n\r\n        padding-right: rem(7px);\r\n        vertical-align: -5%;\r\n      }\r\n    }\r\n\r\n    &__list {\r\n      padding: rem(1px) 0 0 rem(22px);\r\n      list-style: none;\r\n    }\r\n  }\r\n}\r\n\r\n.my__left__icon {\r\n  padding-top: rem(4px);\r\n  margin-right: rem(7px);\r\n  font-size: rem(16px);\r\n  color: $my-font-icon;\r\n}\r\n\r\n.my__section__link {\r\n  @include fontSetup(700, rem(15px), $font-gray2);\r\n\r\n  display: block;\r\n  padding-top: rem(14px);\r\n\r\n  &:hover {\r\n    color: $secondary-font;\r\n  }\r\n\r\n  &.active {\r\n    color: $blue;\r\n  }\r\n}\r\n",".my__myridi__header {\r\n  @include flexbox;\r\n\r\n  width: 100%;\r\n  max-width: 717px;\r\n  border: 2px solid $black;\r\n  table-layout: fixed;\r\n\r\n  .my__account__info {\r\n    @include flexbox($direction: column, $justify: space-between);\r\n\r\n    margin: rem(1px);\r\n    flex-shrink: 0;\r\n    max-width: 150px;\r\n    padding: rem(24px) rem(20px) rem(20px);\r\n    background: $bg-blue;\r\n    box-sizing: content-box;\r\n\r\n    &__container {\r\n      min-height: 85px;\r\n      padding-bottom: rem(20px);\r\n    }\r\n\r\n    &__id {\r\n      @include fontSetup(700, rem(20px), $black, 1.2rem);\r\n\r\n      word-break: break-all;\r\n    }\r\n\r\n    &__email {\r\n      @include fontSetup(500, $color: $font-gray2, $height: 1.5rem, $spacing: -0.01rem);\r\n\r\n      word-break: break-all;\r\n      margin-top: rem(5px);\r\n    }\r\n\r\n    .my__btn__logout {\r\n      @include fontSetup(700, rem(13px), $border-gray4, 1.2rem);\r\n\r\n      display: block;\r\n      width: 64px;\r\n      text-align: center;\r\n      padding: rem(7px) 0;\r\n      border: 2px solid $border-btn-gray1;\r\n      border-radius: 3px;\r\n\r\n      &:hover {\r\n        background: $bg-btn-gray;\r\n        border-color: $border-btn-gray2;\r\n      }\r\n    }\r\n  }\r\n\r\n  .my__asset {\r\n    &__info {\r\n      padding: rem(27px) 0;\r\n\r\n      .my__border__line {\r\n        display: block;\r\n        width: calc(100% - 60px);\r\n        border: none;\r\n        border-top: 1px solid $border-hr-gray1;\r\n        margin: rem(28px) auto rem(29px);\r\n      }\r\n    }\r\n\r\n    &__table {\r\n      display: table;\r\n      width: 100%;\r\n      table-layout: fixed;\r\n    }\r\n\r\n    &__cell {\r\n      display: table-cell;\r\n      text-align: center;\r\n      vertical-align: top;\r\n\r\n      .my__info {\r\n        &__container {\r\n          position: relative;\r\n          text-align: center;\r\n        }\r\n\r\n        &__title {\r\n          .my__text {\r\n            @include fontSetup(700, rem(15px), $black, rem(18px));\r\n\r\n            display: block;\r\n            margin-top: rem(10px);\r\n          }\r\n        }\r\n\r\n        &__icon {\r\n          font-size: rem(30px);\r\n        }\r\n\r\n        &__amount {\r\n          @include fontSetup(600, rem(16px), $my-asset-amount, rem(19px), -0.02rem);\r\n          @include paddingX(10px);\r\n\r\n          margin-top: rem(7px);\r\n\r\n          .my__amount {\r\n            @include fontSetup(400, rem(28px), $my-asset-amount, rem(33px), -0.01rem);\r\n\r\n            font-family: 'Roboto';\r\n            vertical-align: -8%;\r\n            padding-right: rem(2px);\r\n          }\r\n        }\r\n\r\n        &__link {\r\n          @include pos;\r\n\r\n          display: block;\r\n          width: 100%;\r\n          height: 100%;\r\n          text-indent: -9999px;\r\n          left: 0;\r\n          top: 0;\r\n        }\r\n      }\r\n\r\n      .my__extra__info {\r\n        @include flexbox(row, center);\r\n        @include fontSetup(600, rem(13px), $my-asset-link, rem(16px), -0.02rem);\r\n        @include paddingX(10px);\r\n\r\n        position: relative;\r\n        left: 5px;\r\n        margin-top: rem(17px);\r\n\r\n        .my__checkout__link {\r\n          @include flexbox($items: center);\r\n          @include fontSetup(600, rem(13px), $my-asset-link, rem(16px), -0.02rem);\r\n        }\r\n\r\n        .my__point {\r\n          margin-left: rem(4px);\r\n          font-weight: 600;\r\n          color: $black;\r\n        }\r\n\r\n        .my__coupon__btn {\r\n          @include removeBtnStyle;\r\n          @include flexbox($items: center);\r\n          @include fontSetup(600, rem(13px), $my-asset-link, rem(16px), -0.02rem);\r\n\r\n          padding-right: rem(14px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".my__myridi__recents {\r\n  margin-top: rem(40px);\r\n  max-width: 717px;\r\n  overflow: hidden;\r\n\r\n  .my__recents {\r\n    &__container {\r\n      position: relative;\r\n\r\n      &::before {\r\n        @include pos;\r\n\r\n        content: '';\r\n        display: block;\r\n        width: 100%;\r\n        height: 2px;\r\n        background: $border-hr-gray2;\r\n        left: 0;\r\n        top: 50%;\r\n        margin-top: rem(-3px);\r\n        z-index: 1;\r\n      }\r\n\r\n      &::after {\r\n        content: '';\r\n        width: 0;\r\n        height: 0;\r\n        display: block;\r\n        clear: both;\r\n      }\r\n    }\r\n\r\n    &__title {\r\n      @include fontSetup(700, rem(18px), $black);\r\n\r\n      float: left;\r\n      position: relative;\r\n      background: #fff;\r\n      padding: rem(5px) rem(14px) rem(6px) 0;\r\n      margin: 0;\r\n      z-index: 2;\r\n    }\r\n  }\r\n\r\n  .my__more__btn {\r\n    @include removeBtnStyle;\r\n    @include fontSetup(700, rem(13px), $white);\r\n\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 80px;\r\n    text-align: center;\r\n    padding: rem(7px) rem(15px) rem(7px) rem(7px);\r\n    background: $btn-black;\r\n    border-radius: 2px;\r\n    border: 1px solid $btn-black;\r\n\r\n    &__wrapper {\r\n      position: relative;\r\n      margin: 0;\r\n      padding: 0;\r\n      float: right;\r\n      background: #fff;\r\n      padding-left: rem(14px);\r\n      z-index: 2;\r\n    }\r\n\r\n    .my__icon-arrow__right {\r\n      &::before {\r\n        @include pos;\r\n\r\n        display: inline-block;\r\n        font-size: rem(6px);\r\n        top: calc(50% - 4px);\r\n      }\r\n    }\r\n  }\r\n\r\n  // 조회한 책 X\r\n  .my__recents__empty {\r\n    @include paddingY(90px);\r\n\r\n    margin-top: rem(20px);\r\n    border: 4px solid $border-gray2;\r\n\r\n    &__desc {\r\n      @include fontSetup(400, rem(13px), $border-gray4, 1.5rem, -0.03em);\r\n\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  // 조회한 책  O\r\n  .my__recents__books {\r\n    margin-top: rem(20px);\r\n    display: flex;\r\n    gap: 40px;\r\n    overflow: hidden;\r\n\r\n    .my__book__thumbnail__wrapper {\r\n      @include autoMargin;\r\n\r\n      position: relative;\r\n      display: block;\r\n      text-align: left;\r\n      height: 167px;\r\n      width: 110px;\r\n\r\n      .my__book__thumbnail {\r\n        border: 1px solid $gray0;\r\n      }\r\n    }\r\n\r\n    .my__book__metadata__wrapper {\r\n      @include autoMargin;\r\n\r\n      text-align: left;\r\n      display: block;\r\n      margin-top: rem(3px);\r\n      width: 110px;\r\n\r\n      .my__meta__title {\r\n        margin-top: rem(3px);\r\n\r\n        .my__title__link {\r\n          @include fontSetup(700, rem(13px), $my-font-recent, 1.4rem);\r\n          @include ellipsisLine;\r\n\r\n          display: block;\r\n          max-height: 2.7em;\r\n        }\r\n      }\r\n\r\n      .my__author {\r\n        @include ellipsisLine;\r\n        @include fontSetup($height: 1.2rem);\r\n\r\n        max-height: 3.1em;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".my__ridicash {\r\n  &__header {\r\n    padding: rem(42px) 0 rem(30px) 0;\r\n    background: url('/assets/mypage/ridicash@2x.png') right top no-repeat;\r\n    background-size: 269px 177px;\r\n    max-width: 740px;\r\n\r\n    &__title {\r\n      @include fontSetup(400, rem(26px), $my-title, rem(36px));\r\n    }\r\n\r\n    &__desc {\r\n      @include fontSetup(400, rem(13px), $font-gray2, rem(21px));\r\n\r\n      margin-top: rem(15px);\r\n    }\r\n\r\n    &__btn {\r\n      @include fontSetup(700, rem(12px), $font-gray2, 1rem);\r\n\r\n      position: relative;\r\n      border-radius: rem(4px);\r\n      display: inline-block;\r\n      text-align: center;\r\n      vertical-align: baseline;\r\n      border: rem(1px) solid $gray2;\r\n      box-shadow: 0 rem(1px) rem(1px) rgba (209, 213, 217, 0.3);\r\n      margin-top: rem(14px);\r\n      padding: rem(8px) rem(20px) rem(8px) rem(12px);\r\n      height: rem(32px);\r\n\r\n      &:hover {\r\n        background-color: $border-gray2;\r\n      }\r\n\r\n      i {\r\n        color: $blue;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__amount {\r\n    @include fontSetup(700, rem(16px), $my-secondary-title);\r\n\r\n    margin-top: rem(40px);\r\n\r\n    &__won {\r\n      @include fontSetup(700, rem(20px), $blue);\r\n\r\n      padding-left: rem(3px);\r\n    }\r\n\r\n    &__num {\r\n      @include fontSetup(700, rem(24px), $blue, rem(17px));\r\n\r\n      vertical-align: top;\r\n    }\r\n  }\r\n\r\n  &__select {\r\n    border-top: 2px solid $gray;\r\n    border-bottom: 2px solid $gray;\r\n\r\n    &__column {\r\n      padding-top: rem(10px);\r\n      // padding-bottom: 0;\r\n\r\n      border-top: 1px solid $gray2;\r\n\r\n      &:first-child {\r\n        border-top: 0;\r\n      }\r\n\r\n      hr {\r\n        border: 0;\r\n        height: 0.5px;\r\n        background-color: $gray2;\r\n      }\r\n    }\r\n\r\n    &__head {\r\n      @include paddingY(12px);\r\n      @include flexbox;\r\n\r\n      text-align: right;\r\n      font-size: rem(14px);\r\n      font-weight: 600;\r\n\r\n      span {\r\n        flex-grow: 1;\r\n\r\n        &:nth-child(3) {\r\n          flex-grow: 1.2;\r\n          margin-right: rem(15px);\r\n        }\r\n      }\r\n\r\n      &.my__auto {\r\n        span:nth-child(2) {\r\n          position: relative;\r\n\r\n          i {\r\n            position: absolute;\r\n            font-size: rem(30px);\r\n            color: $ridi-yellow2;\r\n            top: rem(-6px);\r\n\r\n            &::after {\r\n              content: 'x2';\r\n              position: absolute;\r\n              @include fontSetup($weight: 700, $size: rem(16px), $color: $white);\r\n              top: 5px;\r\n              left: 7px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    &__list {\r\n      text-align: right;\r\n      font-size: rem(15px);\r\n      font-weight: 600;\r\n      margin-top: rem(2px);\r\n\r\n      &:first-child {\r\n        margin-top: 0;\r\n      }\r\n\r\n      input[type='radio'] {\r\n        display: none;\r\n\r\n        &:checked + label,\r\n        &:checked + label em {\r\n          background: $bg-lightblue;\r\n          border-radius: rem(25px);\r\n          color: $blue;\r\n\r\n          .my__auto__span {\r\n            span {\r\n              &:nth-child(1) {\r\n                color: $ligt-blue;\r\n              }\r\n\r\n              &:nth-child(2) {\r\n                color: $ligt-blue;\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        &:checked + label::before {\r\n          content: '';\r\n          position: absolute;\r\n          left: rem(15px);\r\n          width: 18px;\r\n          height: 18px;\r\n          border: 1px solid $border-blue;\r\n          border-radius: 50%;\r\n          background: $primary-color;\r\n        }\r\n\r\n        &:checked + label::after {\r\n          content: '';\r\n          position: absolute;\r\n          transform: translateY(-50%);\r\n          top: 50%;\r\n          left: rem(21px);\r\n          width: 6px;\r\n          height: 6px;\r\n          border-radius: 50%;\r\n          background: $white;\r\n        }\r\n      }\r\n\r\n      label {\r\n        @include paddingY(10px);\r\n\r\n        display: flex;\r\n        position: relative;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          background: $border-gray2;\r\n          border-radius: rem(25px);\r\n          transition: all 0.25s ease;\r\n        }\r\n\r\n        &::before {\r\n          content: '';\r\n          position: absolute;\r\n          left: 15px;\r\n          width: 18px;\r\n          height: 18px;\r\n          border: 1px solid $gray2;\r\n          border-radius: 50%;\r\n          background: $white;\r\n          transform: translateY(-1px);\r\n        }\r\n\r\n        em {\r\n          font-size: rem(13px);\r\n          font-weight: 400;\r\n          color: $font-gray2;\r\n        }\r\n      }\r\n\r\n      span {\r\n        &:nth-of-type(1) {\r\n          width: 210px;\r\n        }\r\n        &:nth-of-type(2) {\r\n          width: 165px;\r\n\r\n          &.my__auto__span {\r\n            position: relative;\r\n            left: 30px;\r\n\r\n            span {\r\n              &:nth-child(1) {\r\n                color: $gray2;\r\n                text-decoration: line-through;\r\n              }\r\n              &:nth-child(2) {\r\n                color: $gray2;\r\n                position: relative;\r\n                top: 2px;\r\n              }\r\n            }\r\n          }\r\n        }\r\n        &:nth-of-type(3) {\r\n          width: 247px;\r\n          margin-right: rem(15px);\r\n        }\r\n      }\r\n\r\n      span {\r\n        &.my__auto {\r\n          margin: 0;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__payment {\r\n    &__ul {\r\n      @include flexbox($wrap: wrap, $justify: space-between);\r\n\r\n      padding: rem(12px) rem(16px) rem(20px);\r\n      border: 1px solid #d6e3f0;\r\n    }\r\n\r\n    &__title {\r\n      padding-bottom: rem(16px);\r\n      font-size: rem(16px);\r\n      font-weight: 700;\r\n      color: $btn-black;\r\n      line-height: 19px;\r\n      margin-top: rem(20px);\r\n    }\r\n\r\n    &__list {\r\n      @include flexbox;\r\n\r\n      position: relative;\r\n      width: 140px;\r\n      height: 20px;\r\n      margin: rem(5px);\r\n      color: $font-gray7;\r\n      font-size: rem(13px);\r\n      font-weight: 700;\r\n\r\n      input {\r\n        appearance: none;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        &:checked + label::before {\r\n          content: '';\r\n          position: absolute;\r\n          left: 0;\r\n          width: 18px;\r\n          height: 18px;\r\n          border: 1px solid $border-blue;\r\n          border-radius: 50%;\r\n          background: $primary-color;\r\n        }\r\n\r\n        &:checked + label::after {\r\n          // @include centerTranslateY(-65%);\r\n\r\n          content: '';\r\n          position: absolute;\r\n          transform: translateY(-65%);\r\n          top: 45%;\r\n          left: 6px;\r\n          width: 6px;\r\n          height: 6px;\r\n          border-radius: 50%;\r\n          background: $white;\r\n        }\r\n      }\r\n\r\n      &__label {\r\n        padding-left: rem(10px);\r\n\r\n        &::before {\r\n          content: '';\r\n          position: absolute;\r\n          left: 0px;\r\n          width: 18px;\r\n          height: 18px;\r\n          border: 1px solid $gray2;\r\n          border-radius: 50%;\r\n          background: $white;\r\n          transform: translateY(-1px);\r\n        }\r\n\r\n        .naver-pay {\r\n          display: block;\r\n          background: url('/assets/mypage/naverPay.svg') center center no-repeat;\r\n          text-indent: -9999px;\r\n          font-size: 0;\r\n          width: 100px;\r\n        }\r\n\r\n        .kakao-pay {\r\n          display: block;\r\n          background: url('/assets/mypage/kakaoPay.svg') center center no-repeat;\r\n          text-indent: -9999px;\r\n          background-color: #ffeb00;\r\n          background-size: 36px 11px;\r\n          width: 48px;\r\n          height: 20px;\r\n          border-radius: 10px;\r\n          margin-left: rem(20px);\r\n        }\r\n\r\n        .samsung-pay {\r\n          background: url('/assets/mypage/samsungPay.svg') center center no-repeat;\r\n          text-indent: -9999px;\r\n          margin-left: rem(20px);\r\n          width: 100px;\r\n        }\r\n\r\n        .payco {\r\n          background: url('/assets/mypage/payco.svg') center center no-repeat;\r\n          text-indent: -9999px;\r\n          width: 100px;\r\n        }\r\n\r\n        span {\r\n          display: block;\r\n          text-indent: 15px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".my__ridicash {\r\n  &__auto {\r\n    &__desc {\r\n      display: flex;\r\n      padding-left: rem(32px);\r\n      border: solid rem(4px) $border-gray2;\r\n      margin-top: rem(14px);\r\n\r\n      &__box1 {\r\n        display: flex;\r\n        width: 100%;\r\n        padding: rem(26px) 0;\r\n\r\n        img {\r\n          width: rem(80px);\r\n          height: rem(50px);\r\n        }\r\n      }\r\n\r\n      &__box2 {\r\n        @include flexbox(column);\r\n        margin-left: rem(20px);\r\n\r\n        span:nth-child(1) {\r\n          @include fontSetup(700, rem(13px), $gray9, 1.33rem);\r\n          margin-top: rem(10px);\r\n        }\r\n\r\n        span:nth-child(2) {\r\n          margin-top: rem(3px);\r\n        }\r\n      }\r\n    }\r\n\r\n    &__header {\r\n      padding: rem(30px) rem(80px) rem(20px) 0;\r\n\r\n      &__desc {\r\n        margin-top: rem(4px);\r\n      }\r\n\r\n      &__title {\r\n        @include fontSetup(400, rem(26px), $my-title, 1.38rem);\r\n        height: rem(35px);\r\n      }\r\n    }\r\n\r\n    &__form {\r\n      &__title {\r\n        @include fontSetup(700, rem(16px), $my-secondary-title);\r\n        margin: rem(10px) 0 rem(18px) 0;\r\n      }\r\n    }\r\n\r\n    &__payment {\r\n      padding: rem(30px) 0 rem(20px) 0;\r\n      display: flex;\r\n\r\n      &__title {\r\n        @include fontSetup(700, rem(16px), $my-secondary-title);\r\n      }\r\n\r\n      input[type='radio'] {\r\n        display: none;\r\n\r\n        &:checked + label {\r\n          color: $blue;\r\n        }\r\n\r\n        &:checked + label::before {\r\n          content: '';\r\n          position: absolute;\r\n          left: rem(-25px);\r\n          width: 18px;\r\n          height: 18px;\r\n          border: 1px solid $border-blue;\r\n          border-radius: 50%;\r\n          background: $primary-color;\r\n        }\r\n\r\n        &:checked + label::after {\r\n          @include centerTranslateY();\r\n\r\n          content: '';\r\n          position: absolute;\r\n          left: rem(-19px);\r\n          width: 6px;\r\n          height: 6px;\r\n          border-radius: 50%;\r\n          background: $white;\r\n        }\r\n      }\r\n\r\n      label {\r\n        position: relative;\r\n        margin-left: rem(50px);\r\n\r\n        &::before {\r\n          content: '';\r\n          position: absolute;\r\n          left: 0px;\r\n          width: 18px;\r\n          height: 18px;\r\n          border: 1px solid $gray2;\r\n          border-radius: 50%;\r\n          background: $white;\r\n          transform: translateY(-1px);\r\n        }\r\n      }\r\n\r\n      &__notice {\r\n        padding: rem(20px) 0 rem(20px) rem(210px);\r\n        border: 4px solid $border-gray2;\r\n        margin-bottom: rem(20px);\r\n\r\n        p:nth-child(1) {\r\n          @include fontSetup(700, rem(15px), $font-gray7);\r\n          margin-bottom: rem(4px);\r\n\r\n          i {\r\n            font-size: rem(20px);\r\n            color: $blue;\r\n          }\r\n\r\n          span {\r\n            color: $blue;\r\n          }\r\n        }\r\n\r\n        p:nth-child(2) {\r\n          @include fontSetup($size: rem(13px), $color: $font-gray7, $height: 1.5rem);\r\n          text-indent: rem(22px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".main-container {\r\n  .nav {\r\n    @include autoMargin;\r\n\r\n    max-width: 1170px;\r\n    padding: 0 rem(30px);\r\n\r\n    @include mobile {\r\n      padding: 0;\r\n    }\r\n\r\n    &__category {\r\n      &__list {\r\n        @include flexbox;\r\n\r\n        border-bottom: 1px solid $border-gray2;\r\n\r\n        @include mobile {\r\n          margin: 0;\r\n        }\r\n      }\r\n\r\n      &__item {\r\n        @include flexbox($items: center);\r\n\r\n        width: 60px;\r\n        height: 65px;\r\n\r\n        @include mobile {\r\n          height: 40px;\r\n          justify-content: center;\r\n        }\r\n\r\n        &:hover {\r\n          color: $secondary-font;\r\n        }\r\n\r\n        &.is-selected {\r\n          color: $primary-color;\r\n          font-weight: 700;\r\n        }\r\n      }\r\n\r\n      &__link {\r\n        display: block;\r\n        font-size: rem(24px);\r\n\r\n        @include mobile {\r\n          font-size: rem(16px);\r\n        }\r\n      }\r\n    }\r\n\r\n    &__genre {\r\n      &__list {\r\n        @include flexbox;\r\n\r\n        width: 100%;\r\n        padding: rem(10px) 0;\r\n        height: 52px;\r\n\r\n        @include mobile {\r\n          padding: rem(10px);\r\n          font-size: rem(14px);\r\n        }\r\n      }\r\n\r\n      &__item {\r\n        @include flexCenter;\r\n\r\n        width: 51px;\r\n        height: 100%;\r\n        margin-right: rem(10px);\r\n\r\n        @include mobile {\r\n          margin: 0 rem(3px);\r\n        }\r\n\r\n        &:hover {\r\n          color: $secondary-font;\r\n        }\r\n\r\n        &.is-selected {\r\n          color: $white;\r\n          background: $primary-color;\r\n          border-radius: 40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .main {\r\n    @include autoMargin;\r\n\r\n    max-width: 1170px;\r\n\r\n    .new-arrival {\r\n      margin: rem(30px) rem(30px) 0;\r\n\r\n      @include mobile {\r\n        margin: 0;\r\n      }\r\n\r\n      &__list {\r\n        @include flexCenter;\r\n\r\n        @include mobile {\r\n          @include autoMargin;\r\n        }\r\n      }\r\n\r\n      &__item {\r\n        text-align: center;\r\n        margin-right: rem(20px);\r\n\r\n        @include mobile {\r\n          margin-right: rem(10px);\r\n        }\r\n\r\n        &:last-child {\r\n          margin-right: 0;\r\n        }\r\n      }\r\n\r\n      &__icon {\r\n        @include flexCenter;\r\n\r\n        background: $gray6;\r\n        border-radius: 50%;\r\n        width: 70px;\r\n        height: 70px;\r\n        margin-bottom: rem(8px);\r\n\r\n        @include mobile {\r\n          width: 56px;\r\n          height: 56px;\r\n        }\r\n\r\n        .bx {\r\n          font-size: rem(24px);\r\n\r\n          @include mobile {\r\n            font-size: rem(18px);\r\n          }\r\n        }\r\n      }\r\n\r\n      &__title {\r\n        font-size: rem(13px);\r\n\r\n        @include mobile {\r\n          font-size: rem(11px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .event {\r\n    margin: rem(40px) rem(30px) 0;\r\n\r\n    @include mobile {\r\n      margin: rem(40px) rem(18px) 0;\r\n    }\r\n\r\n    &__title {\r\n      font-weight: 700;\r\n      font-size: rem(24px);\r\n      margin-bottom: rem(30px);\r\n\r\n      @include mobile {\r\n        margin-bottom: rem(10px);\r\n      }\r\n    }\r\n\r\n    &__carousel {\r\n      position: relative;\r\n\r\n      &__list {\r\n        @include flexbox;\r\n        justify-content: space-between;\r\n      }\r\n\r\n      &__item {\r\n        border-radius: 5px;\r\n        width: calc(33.33% - 7px);\r\n        flex-shrink: 0;\r\n        margin: 0 3.5px;\r\n\r\n        @include tab {\r\n          width: calc(50% - 7px);\r\n        }\r\n\r\n        @include mobile {\r\n          width: calc(100% - 7px);\r\n        }\r\n\r\n        &.switch {\r\n          background: $event-switch;\r\n        }\r\n\r\n        &.up {\r\n          background: $event-up;\r\n        }\r\n\r\n        &.early {\r\n          background: $event-early;\r\n        }\r\n\r\n        &.cash {\r\n          background: $event-cash;\r\n        }\r\n      }\r\n\r\n      &__link {\r\n        @include flexbox($justify: flex-end, $items: center);\r\n\r\n        position: relative;\r\n      }\r\n\r\n      &__sub {\r\n        position: absolute;\r\n        left: 0;\r\n        margin-left: rem(24px);\r\n        font-size: rem(14px);\r\n        color: $white;\r\n      }\r\n\r\n      &__img {\r\n        width: 200px;\r\n        border-radius: 5px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .only-ridi {\r\n    margin: rem(40px) rem(30px) 0;\r\n\r\n    @include mobile {\r\n      margin: rem(40px) rem(18px) 0;\r\n    }\r\n\r\n    &__title {\r\n      font-weight: 700;\r\n      font-size: rem(24px);\r\n    }\r\n\r\n    &__carousel {\r\n      position: relative;\r\n\r\n      .carousel__button {\r\n        .prev {\r\n          top: 90px;\r\n        }\r\n\r\n        .next {\r\n          top: 90px;\r\n        }\r\n      }\r\n\r\n      &__list {\r\n        @include flexbox;\r\n        padding-top: rem(40px);\r\n      }\r\n\r\n      &__item {\r\n        margin: 0 3.5px;\r\n        width: calc(33.33% - 7px);\r\n        flex-shrink: 0;\r\n\r\n        @include tab {\r\n          width: calc(50% - 7px);\r\n        }\r\n\r\n        @include mobile {\r\n          width: calc(100% - 7px);\r\n        }\r\n      }\r\n\r\n      &__bg {\r\n        position: relative;\r\n        height: 100px;\r\n        border-radius: 5px;\r\n\r\n        &.bg-red {\r\n          background: $ridi-red;\r\n        }\r\n\r\n        &.bg-purple {\r\n          background: $ridi-purple;\r\n        }\r\n\r\n        &.bg-yellow {\r\n          background: $ridi-yellow;\r\n        }\r\n\r\n        &.bg-urquoise {\r\n          background: $ridi-turquoise;\r\n        }\r\n      }\r\n\r\n      &__img-bg {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n\r\n      &__img-main {\r\n        @include centerTranslateX;\r\n\r\n        position: absolute;\r\n        bottom: 0;\r\n        width: 250px;\r\n      }\r\n\r\n      &__info {\r\n        @include flexbox($direction: column, $items: center);\r\n\r\n        margin-top: rem(20px);\r\n      }\r\n\r\n      &__title {\r\n        font-weight: 600;\r\n        margin-bottom: rem(10px);\r\n        text-align: center;\r\n      }\r\n\r\n      &__sub {\r\n        color: $secondary-font;\r\n        font-size: rem(14px);\r\n      }\r\n    }\r\n  }\r\n\r\n  .carousel-wrap {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .carousel-list {\r\n    transition: transform 0.8s;\r\n  }\r\n\r\n  .mini-banner {\r\n    .carousel-list {\r\n      transition: transform 0.5s;\r\n    }\r\n    .carousel__button {\r\n      .prev {\r\n        left: -18px;\r\n      }\r\n      .next {\r\n        right: -18px;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".books {\r\n  @include autoMargin;\r\n\r\n  max-width: 1170px;\r\n  min-width: 793px;\r\n  padding-bottom: rem(100px);\r\n\r\n  &__info {\r\n    @include autoMargin;\r\n\r\n    max-width: 793px;\r\n    padding: rem(40px) rem(29px);\r\n\r\n    // body\r\n    &__body {\r\n      @include flexbox($justify: space-between);\r\n\r\n      &__thumbnail-wrap {\r\n        width: 200px;\r\n\r\n        &__image {\r\n          display: block;\r\n          width: 200px;\r\n        }\r\n\r\n        &__preference {\r\n          display: block;\r\n          width: 130px;\r\n          margin: rem(16px) auto 0;\r\n          padding: rem(8px) 0;\r\n          background-color: $white;\r\n          border-radius: 5px;\r\n          border: 1px solid $gray2;\r\n\r\n          &:hover {\r\n            background: $border-gray2;\r\n          }\r\n\r\n          .button_content {\r\n            color: $font-gray1;\r\n          }\r\n          .bx {\r\n            color: $red;\r\n            vertical-align: middle;\r\n            margin-right: rem(2px);\r\n          }\r\n        }\r\n\r\n        &__notification {\r\n          display: block;\r\n          min-width: 168px;\r\n          padding: rem(8px) rem(8px) rem(7px) rem(8px);\r\n          font-size: rem(12px);\r\n          letter-spacing: -0.3px;\r\n          border-radius: 4px;\r\n          font-weight: 700;\r\n          transition: background-color 0.2s, color 0.2s;\r\n          color: $blue;\r\n          background: $white;\r\n          border: 1px solid $blue;\r\n          margin: rem(16px) auto 0;\r\n\r\n          .bx {\r\n            font-weight: 700;\r\n          }\r\n\r\n          &:hover {\r\n            background: $bg-blue;\r\n            color: $blue;\r\n          }\r\n\r\n          &.active {\r\n            color: $font-gray1;\r\n            border: 1px solid $border-gray4;\r\n\r\n            &:hover {\r\n              background: none;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      &__details-wrap {\r\n        width: 500px;\r\n\r\n        &__title {\r\n          font-size: rem(30px);\r\n          color: $my-font-recent;\r\n          font-weight: 700;\r\n        }\r\n\r\n        &__star-rate-wrap {\r\n          @include flexbox($items: center);\r\n          @include marginY(20px);\r\n\r\n          & .star-bg {\r\n            margin-top: 0 !important;\r\n            margin-right: rem(3px);\r\n          }\r\n\r\n          &__score {\r\n            color: $accent-font;\r\n            font-size: rem(14px);\r\n            margin-right: rem(2px);\r\n            font-weight: 600;\r\n          }\r\n\r\n          &__people {\r\n            font-size: rem(12px);\r\n            font-weight: 100;\r\n          }\r\n        }\r\n\r\n        &__metadata-wrap {\r\n          margin: rem(20px) 0;\r\n          font-size: rem(13px);\r\n          color: $secondary-font;\r\n          line-height: 20px;\r\n\r\n          .font-bold {\r\n            font-weight: 700;\r\n          }\r\n\r\n          &__writer-info {\r\n            @include flexbox($items: center);\r\n\r\n            &__painter {\r\n              &::before {\r\n                @include marginX(6px);\r\n\r\n                content: '';\r\n                display: inline-block;\r\n                width: 1px;\r\n                height: 11px;\r\n                background-color: $gray2;\r\n              }\r\n\r\n              &::after {\r\n                @include marginX(6px);\r\n\r\n                content: '';\r\n                display: inline-block;\r\n                width: 1px;\r\n                height: 11px;\r\n                background-color: $gray2;\r\n              }\r\n            }\r\n          }\r\n\r\n          &__series-complete-wrap {\r\n            @include flexbox($items: center);\r\n\r\n            &__book-count {\r\n              letter-spacing: -0.3px;\r\n\r\n              &::after {\r\n                @include marginX(6px);\r\n\r\n                content: '';\r\n                display: inline-block;\r\n                width: 1px;\r\n                height: 11px;\r\n                background-color: $gray2;\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        &__book-detail-notice-wrap {\r\n          .notice-item {\r\n            @include paddingY(6px);\r\n            @include flexbox($items: center);\r\n\r\n            border-top: 1px solid $border-gray6;\r\n\r\n            &:last-child {\r\n              border-bottom: 1px solid $border-gray6;\r\n            }\r\n\r\n            .notice-title {\r\n              display: block;\r\n              width: 40px;\r\n              height: 18px;\r\n              border-radius: 2px;\r\n              font-size: rem(11px);\r\n              font-weight: 700;\r\n              line-height: 18px;\r\n              text-align: center;\r\n              margin-right: rem(16px);\r\n            }\r\n\r\n            .info-title {\r\n              @include fontSetup($weight: 700, $size: rem(14px), $height: 20px, $spacing: -0.7px);\r\n              @include paddingY(4px);\r\n\r\n              text-overflow: ellipsis;\r\n              white-space: nowrap;\r\n              color: $font-gray5;\r\n            }\r\n\r\n            .schedule-title {\r\n              background: $bg-skyblue;\r\n              color: $font-skyblue;\r\n            }\r\n\r\n            .benefits-title {\r\n              background: $bg-green;\r\n              color: $font-green;\r\n            }\r\n\r\n            .event-title {\r\n              background: $bg-purple;\r\n              color: $font-purple;\r\n            }\r\n\r\n            .Wait-free-title {\r\n              background: $bg-blue;\r\n              color: $blue;\r\n            }\r\n\r\n            .benefits-info a,\r\n            .event-info {\r\n              @include flexbox($direction: column);\r\n\r\n              .info-text,\r\n              .info-event-more {\r\n                color: $font-gray2;\r\n                margin-top: rem(8px);\r\n                font-size: rem(12px);\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        &__benefits-Period {\r\n          position: relative;\r\n          display: block;\r\n          margin-top: rem(20px);\r\n          text-align: right;\r\n          color: $font-gray2;\r\n          font-size: rem(12px);\r\n\r\n          &::before {\r\n            content: '';\r\n            display: inline-block;\r\n            position: relative;\r\n            width: 4px;\r\n            height: 4px;\r\n            background-color: $font-gray2;\r\n            top: -2px;\r\n            left: -1px;\r\n          }\r\n        }\r\n\r\n        .first-episode {\r\n          width: 180px;\r\n          font-size: rem(15px);\r\n          border: 0;\r\n          outline: 0;\r\n          text-decoration: none;\r\n          box-sizing: border-box;\r\n          border-radius: 4px;\r\n          font-weight: 700;\r\n          line-height: 1em;\r\n          transition: background 0.2s, color 0.2s;\r\n          color: $white;\r\n          background: $blue;\r\n          border: 1px solid $border-blue;\r\n          font-size: rem(16px);\r\n          padding: rem(16px) rem(34px);\r\n          margin-top: rem(20px);\r\n\r\n          &:hover {\r\n            background: $border-blue;\r\n          }\r\n        }\r\n      }\r\n      // details-wrap\r\n    }\r\n    // body\r\n\r\n    &__footer {\r\n      @include flexbox;\r\n\r\n      margin-top: rem(40px);\r\n      padding: rem(16px) rem(26px);\r\n      border: solid 4px $gray4;\r\n      font-size: rem(12px);\r\n      color: $secondary-font;\r\n      letter-spacing: 1px;\r\n\r\n      .info-title {\r\n        display: inline-block;\r\n        min-width: 70px;\r\n        max-width: 70px;\r\n        padding-right: rem(8px);\r\n        font-weight: 700;\r\n        color: #525a61;\r\n      }\r\n\r\n      &__support-info {\r\n        margin-left: rem(100px);\r\n      }\r\n\r\n      &__metadata-info div,\r\n      &__support-info div {\r\n        margin: rem(4px) 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  // books__series\r\n  &__series {\r\n    @include autoMargin;\r\n\r\n    max-width: 793px;\r\n    padding: 0 rem(29px);\r\n\r\n    &__buy-tab {\r\n      position: relative;\r\n      border-top: 2px solid $secondary-font;\r\n\r\n      // 대여하기 탭 & 리스트\r\n      &__rental {\r\n        &__title {\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          border-right: 1px solid $gray;\r\n        }\r\n      }\r\n\r\n      &__purchase {\r\n        &__title {\r\n          position: absolute;\r\n          top: 0;\r\n          right: 0;\r\n          border-left: 1px solid #ccc;\r\n        }\r\n      }\r\n\r\n      .tab-list {\r\n        // 시리즈 리스트 목록 전체 none\r\n        > * {\r\n          display: none;\r\n        }\r\n\r\n        //  시리즈 리스트 타이틀은 block\r\n        .tab-title {\r\n          display: block;\r\n          width: 50%;\r\n          height: 51px;\r\n          background: $gray5;\r\n          border-bottom: 1px solid $gray;\r\n          font-size: rem(15px);\r\n          font-weight: 700;\r\n          color: $my-font-recent;\r\n          text-align: center;\r\n          line-height: 51px;\r\n          cursor: pointer;\r\n\r\n          &:hover {\r\n            color: $blue;\r\n          }\r\n        }\r\n\r\n        // active 상태의 시리즈 리스트 block\r\n        &.active {\r\n          > * {\r\n            display: block;\r\n          }\r\n\r\n          // active 상태의 title 스타일\r\n          .tab-title {\r\n            background: $white;\r\n            border: none;\r\n          }\r\n\r\n          //  active 상태의 list-option block\r\n          .list-option {\r\n            display: flex;\r\n          }\r\n        }\r\n\r\n        // list-option\r\n        .list-option {\r\n          justify-content: space-between;\r\n          align-items: center;\r\n          margin-top: rem(51px);\r\n          padding: rem(10px) rem(20px) rem(10px) rem(10px);\r\n          border-bottom: 1px dotted #bbb;\r\n\r\n          // left\r\n          &__left {\r\n            @include flexbox($items: center);\r\n\r\n            .select-all {\r\n              @include flexbox($items: center);\r\n\r\n              cursor: pointer;\r\n              color: $border-gray7;\r\n              font-size: rem(14px);\r\n              font-weight: 700;\r\n              margin-right: rem(10px);\r\n              letter-spacing: -0.3px;\r\n            }\r\n\r\n            .alignment {\r\n              padding: rem(6px) rem(12px);\r\n              background: $white;\r\n              color: #63696e;\r\n              border: 1px solid $gray2;\r\n              box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);\r\n              font-size: rem(12px);\r\n              border-radius: 4px;\r\n              font-weight: 700;\r\n              transition: background-color 0.2s, color 0.2s;\r\n\r\n              &:hover {\r\n                background: $border-gray2;\r\n              }\r\n            }\r\n          }\r\n\r\n          // right\r\n\r\n          &__right {\r\n            font-size: rem(12px);\r\n            font-weight: 700;\r\n\r\n            .info_volume {\r\n              color: $secondary-font;\r\n            }\r\n            .info_price {\r\n              color: $blue;\r\n            }\r\n\r\n            .cart {\r\n              padding: rem(6px) rem(12px);\r\n              background: $white;\r\n              color: $font-gray2;\r\n              border: 1px solid $gray2;\r\n              box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);\r\n              border-radius: 4px;\r\n              transition: background-color 0.2s, color 0.2s;\r\n              font-weight: 700;\r\n              letter-spacing: -0.3px;\r\n\r\n              &:hover {\r\n                background: $border-gray2;\r\n              }\r\n            }\r\n\r\n            .rental {\r\n              padding: rem(6px) rem(12px);\r\n              color: $white;\r\n              background: $blue;\r\n              border: 1px solid $border-blue;\r\n              box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);\r\n              border-radius: 4px;\r\n              transition: background-color 0.2s, color 0.2s;\r\n              font-weight: 700;\r\n              letter-spacing: -0.3px;\r\n\r\n              &:hover {\r\n                background: $border-blue;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    &__item {\r\n      &__wrap {\r\n        @include flexbox($justify: space-between, $items: center);\r\n\r\n        padding: rem(10px) rem(20px) rem(10px) rem(10px);\r\n        transition: background-color 0.2s;\r\n        cursor: pointer;\r\n        border-bottom: 1px solid $border-gray2;\r\n\r\n        &:hover {\r\n          background: #eef1f1;\r\n        }\r\n\r\n        &__left-position {\r\n          @include flexbox($items: center);\r\n\r\n          &__image {\r\n            max-width: 40px;\r\n            border-radius: 5px;\r\n            overflow: hidden;\r\n            margin-right: rem(12px);\r\n          }\r\n\r\n          &__info-wrap {\r\n            &__title-wrap {\r\n              @include flexbox($items: center);\r\n\r\n              &__badge {\r\n                padding: rem(1px) rem(3px);\r\n                font-size: rem(9px);\r\n                font-weight: 600;\r\n                border-radius: 3px;\r\n                color: $white;\r\n                background-color: $blue;\r\n                margin-right: rem(5px);\r\n              }\r\n\r\n              &__title {\r\n                color: $black;\r\n                font-size: rem(13px);\r\n                font-weight: 700;\r\n                letter-spacing: -0.3px;\r\n              }\r\n            }\r\n\r\n            &__description-wrap {\r\n              @include flexbox($items: center);\r\n\r\n              color: $secondary-font;\r\n              font-size: rem(12px);\r\n              margin-top: rem(4px);\r\n              font-weight: 400;\r\n\r\n              &__date {\r\n                &::after {\r\n                  content: '';\r\n                  display: inline-block;\r\n                  width: 0.0625rem;\r\n                  height: 0.6875rem;\r\n                  background-color: $gray2;\r\n                  margin: 0 rem(6px);\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        &__view-button {\r\n          padding: rem(6px) rem(12px);\r\n          background: $white;\r\n          color: $font-gray2;\r\n          border: 1px solid $gray2;\r\n          box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);\r\n          border-radius: 4px;\r\n          transition: background-color 0.2s, color 0.2s;\r\n          font-weight: 700;\r\n          letter-spacing: -0.3px;\r\n\r\n          &:hover {\r\n            background: $border-gray2;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .view-all-button {\r\n      width: 100%;\r\n      margin-top: rem(10px);\r\n      font-size: rem(13px);\r\n      padding: rem(10px);\r\n      border-width: 2px;\r\n      background-color: $white;\r\n      transition: background-color 0.3s;\r\n      border: 2px solid $gray2;\r\n      border-radius: 4px;\r\n      font-weight: 700;\r\n      color: $font-gray2;\r\n\r\n      .bx {\r\n        font-size: rem(10px);\r\n        margin-left: rem(2px);\r\n      }\r\n\r\n      &:hover {\r\n        background-color: $border-gray2;\r\n      }\r\n    }\r\n  }\r\n\r\n  // books__keyword\r\n  &__keyword {\r\n    @include autoMargin;\r\n\r\n    max-width: 793px;\r\n    padding: rem(50px) rem(29px) 0;\r\n\r\n    &__list {\r\n      @include flexbox($wrap: wrap);\r\n\r\n      transition: background-color 0.2s;\r\n      margin-top: rem(15px);\r\n\r\n      &__item {\r\n        button {\r\n          @include paddingX(10px);\r\n\r\n          white-space: nowrap;\r\n          margin: 0 rem(10px) rem(15px) 0;\r\n          height: 30px;\r\n          border-radius: 3px;\r\n          background: $gray4;\r\n          border: 0;\r\n          font-weight: 700;\r\n          color: $secondary-font;\r\n\r\n          &:hover {\r\n            background: #c4e1f5;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  // books__introduce\r\n  &__introduce {\r\n    @include autoMargin;\r\n    max-width: 793px;\r\n    padding: rem(50px) rem(29px) 0;\r\n\r\n    &__description {\r\n      margin-top: rem(15px);\r\n      font-size: rem(13px);\r\n      color: $my-font-recent;\r\n    }\r\n  }\r\n\r\n  // books__introduce\r\n  &__author {\r\n    @include autoMargin;\r\n\r\n    max-width: 793px;\r\n    padding: rem(50px) rem(29px) 0;\r\n\r\n    &__description {\r\n      margin-top: rem(15px);\r\n      font-size: rem(13px);\r\n      color: $my-font-recent;\r\n      line-height: 1.8;\r\n    }\r\n\r\n    &__representative-book {\r\n      margin-top: rem(20px);\r\n      border-top: 1px solid rgb(209, 204, 204);\r\n\r\n      &__title {\r\n        margin-top: rem(20px);\r\n        padding-left: rem(16px);\r\n        vertical-align: top;\r\n        font-size: rem(16px);\r\n        font-weight: 700;\r\n        color: $my-font-recent;\r\n      }\r\n\r\n      &__list {\r\n        @include flexbox($items: center);\r\n\r\n        margin-top: rem(20px);\r\n\r\n        &__item {\r\n          display: block;\r\n          margin: rem(15px) rem(15px);\r\n\r\n          img {\r\n            width: 90px;\r\n            height: 130px;\r\n            border-radius: 3px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  // books__review\r\n  &__review {\r\n    @include autoMargin;\r\n\r\n    max-width: 793px;\r\n    padding: rem(50px) rem(29px) 0;\r\n\r\n    &__review-wrap {\r\n      // score-wrap\r\n      &__score-wrap {\r\n        display: flex;\r\n\r\n        &__left {\r\n          width: 120px;\r\n          padding: rem(44px) 0 rem(20px) 0;\r\n          text-align: center;\r\n          margin-right: rem(10px);\r\n          flex-shrink: 0;\r\n\r\n          &__score {\r\n            display: block;\r\n            margin-top: rem(10px);\r\n            font-size: rem(35px);\r\n            color: $my-title;\r\n            font-weight: 700;\r\n          }\r\n\r\n          // score_graph\r\n\r\n          &__score_graph {\r\n            padding: rem(6px) 0 rem(10px) 0;\r\n\r\n            &__item {\r\n              @include flexCenter;\r\n\r\n              margin-top: rem(6px);\r\n              color: $font-gray2;\r\n              font-size: rem(12px);\r\n              font-weight: 700;\r\n\r\n              .bx {\r\n                font-size: rem(11px);\r\n              }\r\n\r\n              .star-bar-wrap {\r\n                display: inline-block;\r\n                width: 72px;\r\n                height: 8px;\r\n                background-color: $bg-bar-gr0;\r\n                margin-left: rem(6px);\r\n                box-shadow: inset 0 1px 1px 0 rgb(0 0 0 / 10%);\r\n\r\n                &__bar {\r\n                  display: block;\r\n                  width: 0;\r\n                  height: 8px;\r\n                  background: $font-skyblue linear-gradient(to bottom, $bg-bar-gr1, $bg-bar-gr2);\r\n                }\r\n              }\r\n            }\r\n\r\n            &__item:nth-child(1) {\r\n              .star-bar-wrap__bar {\r\n                width: 84%;\r\n              }\r\n            }\r\n            &__item:nth-child(2) {\r\n              .star-bar-wrap__bar {\r\n                width: 71%;\r\n              }\r\n            }\r\n            &__item:nth-child(3) {\r\n              .star-bar-wrap__bar {\r\n                width: 39%;\r\n              }\r\n            }\r\n            &__item:nth-child(4) {\r\n              .star-bar-wrap__bar {\r\n                width: 18%;\r\n              }\r\n            }\r\n            &__item:nth-child(5) {\r\n              .star-bar-wrap__bar {\r\n                width: 8%;\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        &__right {\r\n          flex-grow: 1;\r\n          margin-top: rem(14px);\r\n\r\n          &__starrate {\r\n            position: relative;\r\n            padding-bottom: rem(18px);\r\n\r\n            &__title {\r\n              display: block;\r\n              height: 42px;\r\n              text-align: center;\r\n              font-size: rem(18px);\r\n              color: #999;\r\n              font-weight: 700;\r\n              padding-top: rem(10px);\r\n              letter-spacing: -0.03em;\r\n            }\r\n\r\n            &__stars {\r\n              @include flexCenter;\r\n\r\n              margin-top: rem(5px);\r\n\r\n              &__star {\r\n                display: inline-block;\r\n                width: 50px;\r\n                height: 48px;\r\n\r\n                background: url('/assets/books/star.png') no-repeat;\r\n                background-position: 50% 0%;\r\n                background-size: 45px 90px;\r\n                cursor: pointer;\r\n\r\n                &.hovered {\r\n                  background-position: 0% 110%;\r\n                }\r\n\r\n                &.selected {\r\n                  background-position: 0% 110%;\r\n                  animation-duration: 0.7s;\r\n                  animation-timing-function: ease;\r\n                }\r\n              }\r\n            }\r\n          }\r\n\r\n          &__form-wrap {\r\n            &__form {\r\n              .review-textarea {\r\n                max-width: 605px;\r\n                min-width: 605px;\r\n                border: 2px solid $gray2;\r\n                border-radius: 5px;\r\n                box-sizing: border-box;\r\n                width: 100%;\r\n                height: 112px;\r\n                font-weight: 700;\r\n                font-size: rem(13px);\r\n                padding: rem(12px) rem(15px);\r\n                color: $font-gray3;\r\n\r\n                &:focus {\r\n                  outline-color: $border-gray8;\r\n                }\r\n                &:focus::placeholder {\r\n                  color: $gray2;\r\n                }\r\n              }\r\n\r\n              &__btn-wrap {\r\n                @include flexbox($justify: space-between, $items: center);\r\n\r\n                margin-top: rem(10px);\r\n\r\n                .write-tip-button {\r\n                  letter-spacing: -0.6px;\r\n                  border-radius: 4px;\r\n                  font-weight: 700;\r\n                  transition: background-color 0.2s, color 0.2s;\r\n                  color: $font-gray2;\r\n                  background: $white;\r\n                  border: 1px solid $gray2;\r\n                  box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);\r\n                  font-size: rem(12px);\r\n                  padding: rem(8px) rem(18px);\r\n\r\n                  .bx {\r\n                    margin-right: rem(2px);\r\n                    font-size: rem(15px);\r\n                    transform: translate3d(0, 1.9px, 0);\r\n                  }\r\n\r\n                  &:hover {\r\n                    background: $border-gray2;\r\n                  }\r\n                }\r\n\r\n                .review-button {\r\n                  letter-spacing: -0.03em;\r\n                  border-radius: 4px;\r\n                  font-weight: 700;\r\n                  transition: background-color 0.2s, color 0.2s;\r\n                  color: $white;\r\n                  border: 1px solid $my-asset-arrow;\r\n                  box-shadow: 0 1px 1px 0 rgb(31 140 230 / 30%);\r\n                  font-size: rem(12px);\r\n                  padding: rem(8px) rem(18px);\r\n                  background: $blue;\r\n\r\n                  &.opacity {\r\n                    opacity: 0.5;\r\n                    cursor: default;\r\n                    pointer-events: none;\r\n\r\n                    &:hover {\r\n                      background: $blue;\r\n                    }\r\n                  }\r\n\r\n                  &:hover {\r\n                    background: $my-asset-arrow;\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      &__list-wrap {\r\n        margin-top: rem(40px);\r\n\r\n        &__title {\r\n          display: block;\r\n          border-bottom: 2px solid $gray2;\r\n          padding-bottom: rem(10px);\r\n          padding-left: rem(5px);\r\n          font-size: rem(15px);\r\n          font-weight: 700;\r\n          color: $border-gray7;\r\n        }\r\n\r\n        &__list {\r\n          &__item {\r\n            display: flex;\r\n            padding-top: rem(14px);\r\n            padding-bottom: rem(5px);\r\n            border-top: 1px solid $gray2;\r\n\r\n            &:first-child {\r\n              border-top: 0px;\r\n            }\r\n\r\n            &__review-info-wrap {\r\n              @include flexbox($direction: column);\r\n\r\n              flex-shrink: 0;\r\n              width: 115px;\r\n              padding-top: rem(3px);\r\n\r\n              &__star {\r\n                display: block;\r\n                margin-bottom: rem(10px);\r\n              }\r\n\r\n              &__reviewer {\r\n                font-size: rem(12px);\r\n                font-weight: 700;\r\n                color: $my-title;\r\n              }\r\n\r\n              &__date {\r\n                margin-top: rem(7px);\r\n                padding-bottom: rem(4px);\r\n                color: $font-gray2;\r\n                font-size: rem(12px);\r\n              }\r\n            }\r\n\r\n            &__content-wrap {\r\n              @include flexbox($direction: column, $justify: space-between);\r\n\r\n              flex-grow: 1;\r\n              padding-top: rem(6px);\r\n\r\n              &__content {\r\n                font-size: rem(13px);\r\n                color: $my-title;\r\n                width: 100%;\r\n                line-height: 1.5;\r\n                white-space: pre-wrap;\r\n                padding-bottom: rem(10px);\r\n              }\r\n\r\n              &__btn-wrap {\r\n                align-self: flex-end;\r\n                transition: background-color 0.2s, color 0.2s;\r\n                font-weight: 700;\r\n                font-size: rem(11px);\r\n\r\n                .bx {\r\n                  margin-right: rem(2px);\r\n                  font-size: rem(11px);\r\n                }\r\n\r\n                &__comment-btn {\r\n                  margin-right: rem(3px);\r\n                  padding: rem(6px) rem(14px);\r\n                  color: $font-gray2;\r\n                  background: $white;\r\n                  border: 1px solid $gray2;\r\n                  border-radius: 4px;\r\n\r\n                  &:hover {\r\n                    background: $border-gray2;\r\n                  }\r\n                }\r\n\r\n                &__like-btn {\r\n                  border-radius: 4px;\r\n                  color: $font-gray2;\r\n                  background: $white;\r\n                  border: 1px solid $gray2;\r\n                  padding: rem(6px) rem(14px);\r\n\r\n                  &:hover {\r\n                    background: $border-gray2;\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  // books__similar\r\n  &__similar {\r\n    @include autoMargin;\r\n\r\n    max-width: 793px;\r\n    padding: rem(50px) rem(29px) 0;\r\n\r\n    &__list {\r\n      @include flexbox($items: center, $wrap: wrap);\r\n\r\n      margin-top: rem(20px);\r\n\r\n      &__item {\r\n        display: block;\r\n        margin: rem(15px) rem(15px);\r\n\r\n        img {\r\n          width: 90px;\r\n          height: 130px;\r\n          border: 1px solid $gray2;\r\n          border-radius: 3px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  // star\r\n  .star-bg {\r\n    position: relative;\r\n    width: 75px;\r\n    height: 15px;\r\n    display: inline-block;\r\n    background: url('/assets/books/emptyStar.svg') center center no-repeat;\r\n    background-size: 100% 100%;\r\n    margin-top: rem(3px);\r\n\r\n    &__stars {\r\n      position: relative;\r\n      display: block;\r\n      overflow: hidden;\r\n      width: 0%;\r\n      height: 15px;\r\n\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        display: block;\r\n        background: url('/assets/books/stars.svg') center center no-repeat;\r\n        background-size: 100% 100%;\r\n        left: 0;\r\n        top: 0;\r\n        width: 75px;\r\n        height: 15px;\r\n      }\r\n    }\r\n  }\r\n\r\n  // middle-title (아티클 중간제목들 스타일)\r\n  .middle-title {\r\n    display: block;\r\n    font-size: rem(20px);\r\n    color: $font-gray6;\r\n    font-weight: 700;\r\n    letter-spacing: -0.6px;\r\n    padding-bottom: rem(10px);\r\n    border-bottom: 2px solid $border-gray8;\r\n  }\r\n\r\n  //  커스텀 체크박스\r\n  input[type='checkbox'] {\r\n    display: none;\r\n  }\r\n  .checkbox {\r\n    position: relative;\r\n    width: 18px;\r\n    height: 18px;\r\n    border: 1px solid $gray2;\r\n    border-radius: 2px;\r\n    transition: background-color 0.2s, border-color 0.2s;\r\n    margin-top: rem(2px);\r\n    margin-right: rem(8px);\r\n  }\r\n  input[type='checkbox']:checked + .checkbox {\r\n    border-color: $my-asset-arrow;\r\n    background: $blue;\r\n\r\n    &::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 8px;\r\n      left: 2px;\r\n      display: block;\r\n      width: 6px;\r\n      height: 2px;\r\n      background-color: $white;\r\n      transform: rotate(45deg);\r\n    }\r\n\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      top: 6px;\r\n      right: 0;\r\n      display: block;\r\n      width: 12px;\r\n      height: 2px;\r\n      background-color: $white;\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes scale {\r\n  0% {\r\n    transform: scale(100%);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(110%);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(100%);\r\n  }\r\n}\r\n",".my {\r\n  &__container {\r\n    @include fontSetup;\r\n\r\n    width: 100%;\r\n\r\n    .active {\r\n      color: $blue;\r\n    }\r\n\r\n    &__contents {\r\n      @include flexbox;\r\n      @include autoMargin;\r\n      @include paddingX(24px);\r\n\r\n      width: 1000px;\r\n      margin-top: rem(33px);\r\n    }\r\n  }\r\n\r\n  &__myridi {\r\n    &__modal {\r\n      display: none;\r\n      position: fixed;\r\n      z-index: 9999;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n  \r\n      &.active {\r\n        display: block;\r\n      }\r\n  \r\n      &__dimmed {\r\n        position: absolute;\r\n        width: 100vw;\r\n        height: 100vh;\r\n        background-color: $bg-modal;\r\n        opacity: 0.3;\r\n      }\r\n  \r\n      &__popup {\r\n        position: absolute;\r\n        left: 50%;\r\n        top: rem(130px);\r\n        transform: translate3d(-50%, 0, 0);\r\n        width: rem(340px);\r\n        border: rem(3px) solid $black;\r\n        animation: move 500ms ease forwards;\r\n        border-radius: 5px;\r\n  \r\n        @keyframes move {\r\n          from {\r\n            opacity: 0;\r\n            transform: translate3d(-50%, -15%, 0);\r\n          }\r\n  \r\n          to {\r\n            opacity: 1;\r\n            transform: translate3d(-50%, 0, 0);\r\n          }\r\n        }\r\n  \r\n        &__header {\r\n          background-color: $bg-modal2;\r\n          height: 34px;\r\n          @include flexbox(row, space-between);\r\n          padding: rem(9px) rem(10px) rem(10px);\r\n  \r\n          button {\r\n            border: none;\r\n            background-color: $bg-modal2;\r\n  \r\n            span {\r\n              font-size: rem(30px);\r\n  \r\n              i {\r\n                transform: translate3d(5px, -5px, 0);\r\n                color: $gray2;\r\n              }\r\n            }\r\n          }\r\n        }\r\n  \r\n        &__title {\r\n          color: $gray2;\r\n          @include fontSetup(700, rem(14px), $gray2, rem(14px), -0.03rem);\r\n        }\r\n  \r\n        &__content {\r\n          background-color: $white;\r\n  \r\n          p {\r\n            @include fontSetup(700, rem(18px), $my-secondary-title);\r\n            padding: rem(39px) 0 rem(19px) 0;\r\n            text-align: center;\r\n          }\r\n  \r\n          input {\r\n            margin: rem(16px) 0 rem(27px) rem(20px);\r\n            width: rem(234px);\r\n            height: rem(39px);\r\n            padding: rem(8px);\r\n          }\r\n  \r\n          button {\r\n            border: 0;\r\n            background-color: $blue;\r\n            width: rem(60px);\r\n            height: rem(39px);\r\n            border: 1px solid $my-asset-arrow;\r\n            border-radius: 3px;\r\n            color: $white;\r\n          }\r\n  \r\n          ul {\r\n            padding: 0 rem(20px) rem(48px);\r\n            list-style: disc;\r\n  \r\n            li {\r\n              margin-left: 15px;\r\n              padding-left: rem(6px);\r\n              margin-bottom: rem(3px);\r\n              @include fontSetup(400, rem(13px), $font-gray2, 1.4rem);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__thumbnail__btn {\r\n    @include pos;\r\n  \r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n  }\r\n}\r\n\r\n#my__hover {\r\n  &:hover {\r\n    color: $my-asset-arrow;\r\n  }\r\n}","// 리디캐시\r\n.my__ridicash {\r\n  &__section {\r\n    width: 720px;\r\n    padding: 0 0 rem(80px) 0;\r\n  }\r\n\r\n  &__title {\r\n    @include fontSetup(700, rem(21px), $my-font-recent, 1rem, -0.03rem);\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n\r\n  &__tab {\r\n    list-style: none;\r\n    border-bottom: rem(2px) solid $gray2;\r\n    margin-top: rem(20px);\r\n\r\n    &list {\r\n      display: inline-block;\r\n      margin-right: rem(13px);\r\n      color: $secondary-font;\r\n      font-size: rem(12px);\r\n\r\n      a {\r\n        @include fontSetup(700, rem(15px), $font-gray2, 1rem, -0.03rem);\r\n\r\n        display: block;\r\n        position: relative;\r\n        min-width: rem(25px);\r\n        padding: rem(10px) 0;\r\n        text-align: center;\r\n\r\n        &:hover {\r\n          color: $font-gray7;\r\n\r\n          &::after {\r\n            height: rem(3px);\r\n            background: $font-gray7;\r\n          }\r\n        }\r\n\r\n        &.active {\r\n          color: $my-secondary-title;\r\n\r\n          &::after {\r\n            height: rem(3px);\r\n            background: $blue;\r\n          }\r\n        }\r\n\r\n        &::after {\r\n          content: '';\r\n          position: absolute;\r\n          width: 100%;\r\n          height: 0;\r\n          background: $gray2;\r\n          left: 0;\r\n          bottom: rem(-2px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__form {\r\n    width: 640px;\r\n  }\r\n\r\n  &__caution__list {\r\n    position: relative;\r\n    padding: rem(3px) rem(8px);\r\n    color: $font-gray2;\r\n    font-weight: 400;\r\n    line-height: 1.1rem;\r\n\r\n    &::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 9px;\r\n      left: 0;\r\n      width: 4px;\r\n      height: 4px;\r\n      background: $font-gray2;\r\n      margin-right: rem(4px);\r\n    }\r\n  }\r\n\r\n  &__agreement {\r\n    @include autoMargin;\r\n    @include paddingY(20px);\r\n\r\n    position: relative;\r\n    width: 89%;\r\n    text-align: center;\r\n    font-size: rem(14px);\r\n    color: $my-secondary-title;\r\n\r\n    input {\r\n      appearance: none;\r\n      width: 0;\r\n      height: 0;\r\n\r\n      &:checked + label::before {\r\n        border-color: $border-blue;\r\n        background: $blue;\r\n      }\r\n    }\r\n\r\n    label {\r\n      width: 300px;\r\n\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        background: $white;\r\n        width: 18px;\r\n        height: 18px;\r\n        box-sizing: border-box;\r\n        left: 80px;\r\n        top: 50%;\r\n        margin-top: rem(-9px);\r\n        border-radius: 2px;\r\n        border: 1px solid $gray2;\r\n      }\r\n\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        display: inline-block;\r\n        text-indent: -444px;\r\n        font-size: 0;\r\n        overflow: hidden;\r\n        background: url('/assets/mypage/check.svg') center center no-repeat;\r\n        background-size: 100% 100%;\r\n        width: 10px;\r\n        height: 10px;\r\n        left: 84px;\r\n        top: 50%;\r\n        margin-top: rem(-5px);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__submit__btn__container {\r\n    text-align: center;\r\n    margin-bottom: rem(20px);\r\n\r\n    i {\r\n      margin-right: rem(5px);\r\n    }\r\n\r\n    button {\r\n      @include removeBtnStyle;\r\n\r\n      width: 240px;\r\n      padding: rem(14px) rem(34px);\r\n      background: $blue;\r\n      border: 1px solid $border-blue;\r\n      border-radius: 4px;\r\n      font-weight: 700;\r\n      color: #fff;\r\n      font-size: rem(16px);\r\n    }\r\n  }\r\n\r\n  &__empty {\r\n    padding: rem(160px);\r\n    text-align: center;\r\n    @include fontSetup(400, rem(13px), $font-gray7, 1.5rem);\r\n\r\n    span {\r\n      margin: 0 auto;\r\n\r\n      i {\r\n        font-size: 80px;\r\n        color: $bg-bar-gr1;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__bill {\r\n    &__empty {\r\n      @include paddingY(160px);\r\n      margin: 0 auto;\r\n\r\n      i {\r\n        @include autoMargin;\r\n        display: block;\r\n        font-size: rem(84px);\r\n        width: 84px;\r\n        margin-bottom: rem(15px);\r\n      }\r\n\r\n      &__desc {\r\n        display: block;\r\n        text-align: center;\r\n        @include fontSetup(400, rem(13px), $font-gray7);\r\n      }\r\n    }\r\n  }\r\n}\r\n",".viewer {\r\n  color: #999;\r\n\r\n  &__title {\r\n    .title {\r\n      margin-left: rem(5px);\r\n    }\r\n  }\r\n\r\n  &__header {\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    background: #262626;\r\n    border-bottom: 1px solid #4d4d4d;\r\n    transform: translate3d(0, 0, 0);\r\n    transition: transform 0.5s ease;\r\n\r\n    &__inner {\r\n      @include autoMargin;\r\n      @include flexbox($justify: space-between, $items: center);\r\n      max-width: 700px;\r\n      height: 50px;\r\n      @include paddingX($paddingX: 12px);\r\n\r\n      .link-back {\r\n        font-weight: 500;\r\n        line-height: 50px;\r\n      }\r\n\r\n      .bx-arrow-back {\r\n        font-size: 22px;\r\n        transform: translateY(4px);\r\n      }\r\n    }\r\n\r\n    &__right {\r\n      button {\r\n        @include removeBtnStyle;\r\n        width: 26px;\r\n        height: 26px;\r\n        font-size: 26px;\r\n        color: #999;\r\n        margin-left: 10px;\r\n\r\n        &.preference {\r\n          .active {\r\n            color: $red;\r\n          }\r\n        }\r\n\r\n        &.notification {\r\n          .active {\r\n            color: $ridi-yellow;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    &.hidden {\r\n      transform: translate3d(0, -100%, 0);\r\n      transition: transform 0.5s ease;\r\n    }\r\n  }\r\n\r\n  &__webtoon {\r\n    @include autoMargin;\r\n    padding-top: 55px;\r\n    background: $black;\r\n\r\n    img {\r\n      display: block;\r\n      width: 740px;\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n\r\n  &__footer {\r\n    width: 100%;\r\n    position: fixed;\r\n    bottom: 0;\r\n    background: #262626;\r\n    font-size: 13px;\r\n    transform: translate3d(0, 0, 0);\r\n    transition: transform 0.5s ease;\r\n\r\n    &__top{\r\n\r\n      &.hidden{\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    &__top__inner {\r\n      @include autoMargin;\r\n      @include flexbox($justify: space-between, $items: center);\r\n      max-width: 700px;\r\n      height: 37px;\r\n      @include paddingX($paddingX: 15px);\r\n    }\r\n\r\n    &__top__right {\r\n      @include flexbox;\r\n      gap: 18px;\r\n\r\n      &__link {\r\n        display: block;\r\n\r\n        button {\r\n          @include removeBtnStyle;\r\n          @include flexCenter;\r\n          font-size: 12px;\r\n          color: #999;\r\n\r\n          .arrow-left {\r\n            i {\r\n              font-size: 22px;\r\n              width: 18px;\r\n            }\r\n          }\r\n\r\n          .arrow-right {\r\n            transform: rotate(180deg);\r\n\r\n            i {\r\n              font-size: 22px;\r\n              width: 18px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    &__bottom {\r\n      width: 100%;\r\n      background: $black;\r\n      border-top: 1px solid #4d4d4d;\r\n      position: relative;\r\n\r\n      &__inner {\r\n        @include autoMargin;\r\n        max-width: 700px;\r\n\r\n        ul {\r\n          @include flexbox($justify: space-around, $items: center);\r\n          height: 50px;\r\n        }\r\n      }\r\n\r\n      &__button {\r\n        @include removeBtnStyle;\r\n        font-size: 24px;\r\n        color: #999;\r\n      }\r\n\r\n      &__link {\r\n        @include flexbox($direction: column);\r\n        position: relative;\r\n      }\r\n\r\n      &__title {\r\n        font-size: 11px;\r\n        margin-top: 3px;\r\n      }\r\n\r\n      &__comment {\r\n        @include pos;\r\n        top: -3px;\r\n        right: -20px;\r\n        background: $gray2;\r\n        border: 2px solid $black;\r\n        border-radius: 25px;\r\n        font-size: 9px;\r\n        color: $black;\r\n        font-weight: 300;\r\n        letter-spacing: -0.5px;\r\n        padding: 2px 4px;\r\n      }\r\n    }\r\n\r\n    &.hidden {\r\n      transform: translate3d(0, 100%, 0);\r\n      transition: transform 0.5s ease;\r\n    }\r\n\r\n    &__settings {\r\n      z-index: -1;\r\n      width: rem(640px);\r\n      position: absolute;\r\n      left: 50%;\r\n      transform: translate3d(-50%, 100%, 0);\r\n      box-shadow: 0 0 10px 0;\r\n      transition: transform 0.5s ease;\r\n  \r\n      &.visible {\r\n        transform: translate3d(-50%, calc(-100% + -51px), 0);\r\n        transition: transform 0.5s ease;\r\n      }\r\n\r\n      &__list {\r\n        @include flexbox(row);\r\n        background-color: $white;\r\n        height: rem(48px);\r\n        box-shadow: 1px 1px $bg-bar-gr1;\r\n        border-radius: 3px;\r\n\r\n        &:nth-of-type(1) {\r\n          margin-bottom: rem(8px);\r\n        }\r\n      }\r\n\r\n      &__item {\r\n\r\n        i {\r\n          font-size: rem(24px);\r\n        }\r\n\r\n        &:nth-child(1) {\r\n          padding: rem(8px) rem(12px) 0;\r\n          line-height: rem(48px);\r\n        }\r\n\r\n        &:nth-child(2) {\r\n          flex-grow: 1;\r\n\r\n          &.width__desc {\r\n            margin-left: rem(8px);\r\n            @include fontSetup(700, rem(15px), $black, rem(48px));\r\n\r\n            span {\r\n              @include fontSetup(400, rem(14px), $font-gray2);\r\n              padding-left: rem(3px);\r\n            }\r\n          }\r\n        }\r\n\r\n        &:nth-child(3) {\r\n          padding: rem(5px) rem(10px) 0 0;\r\n        }\r\n      }\r\n\r\n      &__color {\r\n\r\n        &__list {\r\n          @include flexbox;\r\n          margin-left: rem(8px);\r\n          padding: rem(8px) 0;\r\n        }\r\n\r\n        &__item {\r\n          margin-right: rem(8px);\r\n\r\n          button {\r\n            width: rem(32px);\r\n            height: rem(32px);\r\n            border-radius: rem(32px);\r\n            border: 0;\r\n\r\n            &.active {\r\n              border: 2px solid $border-btn-mode;\r\n            }\r\n\r\n            &:hover {\r\n              border: 1px solid $border-btn-mode;\r\n            }\r\n\r\n            &[data-mode=\"light\"] {\r\n              background-color: $white;\r\n            }\r\n\r\n            &[data-mode=\"sepia\"] {\r\n              background-color: $sepia;\r\n            }\r\n\r\n            &[data-mode=\"dark\"] {\r\n              background-color: $black;\r\n            }\r\n          }\r\n        }\r\n      }\r\n      &__width {\r\n        &__container {\r\n          @include flexbox;\r\n          padding-top: rem(5px);\r\n\r\n          div {\r\n            width: rem(48px);\r\n            height: rem(30px);\r\n            border: 1px solid $border-gray4;\r\n            padding-top: rem(2px);\r\n            text-align: center;\r\n            cursor: pointer;\r\n\r\n            &:nth-child(1) {\r\n              border-right: 0;\r\n            }\r\n\r\n            &.active {\r\n              border-color: $border-blue2;\r\n              color: $border-blue2;\r\n\r\n              &:hover {\r\n                background-color: $bg-nav-zoom;\r\n              }\r\n            }\r\n          }          \r\n        }\r\n\r\n        &__reduce {\r\n          border-radius: rem(30px) 0 0 rem(30px);\r\n        }\r\n\r\n        &__enlarge {\r\n          border-radius: 0 rem(30px) rem(30px) 0;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n[data-theme=\"light\"] {\r\n  background-color: $white;\r\n\r\n  &.viewer__footer__settings {\r\n    background-color: $border-gray2;\r\n  }\r\n\r\n  &.viewer__header,\r\n  &.viewer__footer__top {\r\n    background-color: $border-gray2;\r\n  }\r\n\r\n  .viewer__footer__bottom__comment {\r\n    border-color: $white;\r\n  }\r\n\r\n  &.viewer__footer__top,\r\n  &.viewer__footer__bottom {\r\n    border-top: 1px solid $border-nav-light;\r\n  }\r\n\r\n  &.viewer__header {\r\n    border-bottom: 1px solid $border-nav-light;\r\n  }\r\n\r\n  &.viewer__webtoon {\r\n    transition: all 0.8s ease;\r\n  }\r\n}\r\n\r\n[data-theme=\"sepia\"] {\r\n  background-color: $sepia;\r\n\r\n  &.viewer__footer__settings {\r\n    background-color: $bg-nav-sepia2;\r\n  }\r\n\r\n  &.viewer__header,\r\n  &.viewer__footer__top,\r\n  &.viewer__footer__settings__list {\r\n    background-color: $bg-nav-sepia;\r\n  }\r\n\r\n  .viewer__footer__bottom__comment {\r\n    border-color: $sepia;\r\n  }\r\n\r\n  &.viewer__footer__top,\r\n  &.viewer__footer__bottom {\r\n    border-top: 1px solid $border-nav-sepia;\r\n  }\r\n\r\n  &.viewer__header {\r\n    border-bottom: 1px solid $border-nav-sepia;\r\n  }\r\n\r\n  &.viewer__webtoon {\r\n    transition: all 0.8s ease;\r\n  }\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n  background-color: $black;\r\n  \r\n  &.viewer__header,\r\n  &.viewer__footer__top,\r\n  &.viewer__footer__settings__list {\r\n    background-color: $bg-nav-dark;\r\n  }\r\n\r\n  .viewer__footer__bottom__comment {\r\n    border-color: $black;\r\n  }\r\n\r\n  &.viewer__footer__top,\r\n  &.viewer__footer__bottom {\r\n    border-top: 1px solid $border-nav-dark;\r\n  }\r\n\r\n  &.viewer__header {\r\n    border-bottom: 1px solid $border-nav-dark;\r\n  }\r\n\r\n  .viewer__footer__settings__item:nth-child(2).width__desc {\r\n    color: $nav-dark-gray;\r\n  }\r\n\r\n  &.viewer__webtoon {\r\n    transition: all 0.8s ease;\r\n  }\r\n\r\n  &.viewer__footer__settings {\r\n    background-color: $my-font-recent;\r\n  }\r\n}",".header.main {\r\n  @include mobile {\r\n    background: $black;\r\n  }\r\n\r\n  .header-top {\r\n    @include mobile {\r\n      background: $black;\r\n      border-bottom: 0;\r\n    }\r\n\r\n    &__container {\r\n      @include mobile {\r\n        height: 39px;\r\n      }\r\n    }\r\n\r\n    &__category {\r\n      @include mobile {\r\n        width: 100%;\r\n        justify-content: space-around;\r\n        font-size: rem(13px);\r\n      }\r\n\r\n      &__item {\r\n        &.dot {\r\n          &::after {\r\n            @include mobile {\r\n              display: none;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      &__link {\r\n        &:hover {\r\n          @include mobile {\r\n            color: $secondary-font;\r\n          }\r\n        }\r\n\r\n        &.is-selected {\r\n          @include mobile {\r\n            color: $white;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    &__service {\r\n      @include mobile {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n\r\n  .header-down {\r\n    @include mobile {\r\n      border-radius: 16px 16px 0 0;\r\n      padding: rem(10px) 0;\r\n    }\r\n\r\n    &__nav {\r\n      @include mobile {\r\n        flex-direction: column;\r\n      }\r\n\r\n      &__title {\r\n        @include mobile {\r\n          width: 171px;\r\n        }\r\n      }\r\n\r\n      &__link {\r\n        display: flex;\r\n\r\n        @include mobile {\r\n          @include flexbox;\r\n        }\r\n      }\r\n\r\n      &__ridi {\r\n        height: 20px;\r\n\r\n        @include mobile {\r\n          height: 42px;\r\n          padding: rem(13px) rem(5px) rem(14px) rem(16px);\r\n        }\r\n      }\r\n\r\n      &__webtoon {\r\n        height: 20px;\r\n        margin-left: rem(5px);\r\n\r\n        @include mobile {\r\n          height: 42px;\r\n          padding: rem(13px) 0 rem(14px) 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    &__form {\r\n      &__search {\r\n        &__container {\r\n          &.is-focus {\r\n            @include mobile {\r\n              width: 95%;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      @include mobile {\r\n        padding: rem(9px) rem(16px) rem(5px);\r\n        width: 100%;\r\n      }\r\n\r\n      &__container {\r\n        @include mobile {\r\n          width: 100%;\r\n        }\r\n      }\r\n\r\n      &__icon {\r\n        @include mobile {\r\n          font-size: rem(20px);\r\n        }\r\n      }\r\n\r\n      // Input Focus Div\r\n    }\r\n\r\n    &__list {\r\n      @include mobile {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    &__login {\r\n      @include mobile {\r\n        display: block;\r\n        position: absolute;\r\n        font-size: rem(12px);\r\n        top: 16px;\r\n        right: 22px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__form {\r\n    &__search {\r\n      &__container {\r\n        &.is-focus {\r\n          @include mobile {\r\n            width: 95%;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    @include mobile {\r\n      padding: rem(9px) rem(16px) rem(5px);\r\n      width: 100%;\r\n    }\r\n\r\n    &__container {\r\n      @include mobile {\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    &__icon {\r\n      @include mobile {\r\n        font-size: rem(20px);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__login {\r\n    @include mobile {\r\n      display: block;\r\n      position: absolute;\r\n      font-size: rem(12px);\r\n      top: 16px;\r\n      right: 22px;\r\n    }\r\n  }\r\n}\r\n\r\n.header.sub {\r\n  .header-top {\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .header-down {\r\n    @include mobile {\r\n      padding: 9px 0 6px 0;\r\n    }\r\n\r\n    &__nav {\r\n      &__title {\r\n        margin-right: auto;\r\n\r\n        .header-down__nav__link {\r\n          .header-down__nav__ridi {\r\n            @include mobile {\r\n              width: auto;\r\n              height: 42px;\r\n              padding: rem(13px) rem(5px) rem(14px) rem(16px);\r\n            }\r\n          }\r\n          .header-down__nav__webtoon {\r\n            @include mobile {\r\n              display: none;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      &__ridi {\r\n        height: 20px;\r\n      }\r\n\r\n      &__webtoon {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    &__form {\r\n      display: none;\r\n    }\r\n\r\n    &__list {\r\n      @include mobile {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".login {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background: $bg-blue;\r\n  letter-spacing: -0.4px;\r\n\r\n  &__header {\r\n    height: 40px;\r\n    border-bottom: 1px solid $border-gray3;\r\n    text-align: center;\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    line-height: 38px;\r\n    color: $blue;\r\n  }\r\n\r\n  .link-mainpage {\r\n    @include paddingX(14px);\r\n  }\r\n\r\n  .login-form {\r\n    @include autoMargin;\r\n    margin-top: rem(80px);\r\n    @include paddingX(10px);\r\n    @include paddingY(10px);\r\n    width: 360px;\r\n\r\n    .user-id,\r\n    .user-pw {\r\n      @include paddingX(14px);\r\n      @include paddingY(18px);\r\n\r\n      width: 340px;\r\n      height: 48px;\r\n      border: 1px solid $border-gray3;\r\n      font-size: rem(14px);\r\n\r\n      &::placeholder {\r\n        color: $font-gray2;\r\n      }\r\n\r\n      &:hover {\r\n        box-shadow: inset 0 0 1px 0.5px $border-gray4;\r\n      }\r\n    }\r\n\r\n    .user-id {\r\n      border-radius: 4px 4px 0 0;\r\n    }\r\n\r\n    .user-pw {\r\n      border-top: 0;\r\n    }\r\n\r\n    button {\r\n      @include removeBtnStyle;\r\n      @include paddingY(16px);\r\n\r\n      width: 100%;\r\n      height: 50px;\r\n      border-radius: 4px;\r\n      background: $blue;\r\n      color: $white;\r\n      font-size: rem(15px);\r\n      font-weight: 600;\r\n      box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);\r\n      border: 1px solid $border-blue;\r\n    }\r\n\r\n    // .signin-btn {\r\n    //   color: $font-gray2;\r\n    //   background: $white;\r\n    //   box-shadow: 0 2px 4px 0 rgb(209 213 217 / 30%);\r\n    //   border: 1px solid $gray2;\r\n    // }\r\n  }\r\n\r\n  &__info {\r\n    @include flexbox($justify: space-between, $items: center);\r\n\r\n    height: 45px;\r\n    background: $bg-lightblue;\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid $border-gray3;\r\n    border-top: 0;\r\n    padding: rem(13px) rem(8px) rem(16px) rem(13px);\r\n    font-size: rem(12px);\r\n    color: $font-skyblue;\r\n\r\n    [type='checkbox'] {\r\n      display: none;\r\n\r\n      &:checked + label .save-box::before {\r\n        content: '';\r\n        position: absolute;\r\n        top: rem(3px);\r\n        right: rem(2px);\r\n        width: rem(10px);\r\n        height: rem(5px);\r\n        transform: rotate(-45deg);\r\n        border-style: solid;\r\n        border-color: $blue;\r\n        border-width: 0px 0px rem(2px) rem(2px);\r\n      }\r\n    }\r\n\r\n    label {\r\n      cursor: pointer;\r\n\r\n      &:hover {\r\n        color: $blue;\r\n      }\r\n\r\n      .save-box {\r\n        position: relative;\r\n        display: inline-block;\r\n        width: 16px;\r\n        height: 16px;\r\n        background: $white;\r\n        border: 1px solid $border-gray3;\r\n        border-radius: 2px;\r\n        box-shadow: inset 0 1px 2px 0 rgb(115 128 150 / 20%);\r\n        transform: translateY(3px);\r\n        margin-right: 3px;\r\n      }\r\n    }\r\n\r\n    &__right {\r\n      transform: translateY(2px);\r\n\r\n      span {\r\n        padding: 0 6px;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          color: $blue;\r\n        }\r\n      }\r\n    }\r\n\r\n    .search-id {\r\n      position: relative;\r\n      margin-right: -4px;\r\n\r\n      &::after {\r\n        @include pos;\r\n\r\n        content: '';\r\n        top: 0;\r\n        right: 0;\r\n        width: 1px;\r\n        height: 12px;\r\n        background-color: $border-gray3;\r\n        transform: translateY(1px);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__signup-link {\r\n    display: block;\r\n    @include autoMargin;\r\n    @include paddingX(10px);\r\n    width: 360px;\r\n\r\n    .signin-btn {\r\n      @include removeBtnStyle;\r\n      @include paddingY(16px);\r\n      color: $font-gray2;\r\n      background: $white;\r\n      box-shadow: 0 2px 4px 0 rgb(209 213 217 / 30%);\r\n      border: 1px solid $gray2;\r\n      width: 100%;\r\n      height: 50px;\r\n      border-radius: 4px;\r\n      font-size: rem(15px);\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  &__error-message {\r\n    margin: rem(4px) 0;\r\n    display: block;\r\n    padding-left: rem(4px);\r\n    width: 100%;\r\n    height: 20px;\r\n    color: #e64938;\r\n    font-size: rem(11px);\r\n    font-weight: 700;\r\n  }\r\n}\r\n","$signup-icon: (\r\n  check:\r\n    \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %2301d760;transform: ;msFilter:;'%3E%3Cpath d='m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z'%3E%3C/path%3E%3C/svg%3E\",\r\n  error:\r\n    \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %2301d760;transform: ;msFilter:;'%3E%3Cpath d='m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z'%3E%3C/path%3E%3C/svg%3E\",\r\n);\r\n\r\n.signup {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background: $bg-blue;\r\n  letter-spacing: -0.4px;\r\n\r\n  &__header {\r\n    height: 40px;\r\n    border-bottom: 1px solid $border-gray3;\r\n    text-align: center;\r\n    font-size: rem(19px);\r\n    font-weight: 700;\r\n    line-height: 38px;\r\n    color: $blue;\r\n  }\r\n\r\n  .link-mainpage {\r\n    @include paddingX(14px);\r\n  }\r\n\r\n  &__form {\r\n    @include autoMargin;\r\n    @include marginY(40px);\r\n    @include paddingX(10px);\r\n    @include paddingY(10px);\r\n\r\n    width: 360px;\r\n    font-size: rem(14px);\r\n  }\r\n\r\n  &__input {\r\n    &__area {\r\n      position: relative;\r\n      width: 340px;\r\n      height: 48px;\r\n      margin-top: rem(25px);\r\n\r\n      &:nth-child(4) {\r\n        margin-top: 0;\r\n      }\r\n\r\n      // &:focus-within .focus-text {\r\n      //   color: $blue;\r\n      //   font-size: rem(11px);\r\n      //   transform: translateY(-20px);\r\n      //   transition: all 0.2s ease;\r\n      // }\r\n    }\r\n\r\n    &__text {\r\n      @include centerTranslateY;\r\n\r\n      position: absolute;\r\n      left: 10px;\r\n      color: $font-gray2;\r\n\r\n      // &.hide {\r\n      //   display: none;\r\n      // }\r\n\r\n      &.focus-text {\r\n        color: $blue;\r\n        font-size: rem(11px);\r\n        transform: translateY(-20px);\r\n        transition: all 0.2s ease;\r\n      }\r\n    }\r\n\r\n    &__box {\r\n      width: 100%;\r\n      height: 100%;\r\n      border: 1px solid $gray2;\r\n      border-radius: 4px;\r\n      text-indent: 10px;\r\n\r\n      &:hover {\r\n        box-shadow: inset 0 0 1px 1px $font-skyblue;\r\n      }\r\n\r\n      &.is-correct {\r\n        background: 98% center / 6% url(map-get($signup-icon, check)) no-repeat, $white;\r\n      }\r\n\r\n      &[name='birth'] {\r\n        background-size: 12%;\r\n        background-position: 96% center;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__password div:nth-child(1) input {\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n\r\n  &__password div:nth-child(2) {\r\n    margin-top: 0;\r\n\r\n    input {\r\n      border-top: 0;\r\n      border-radius: 0 0 4px 4px;\r\n    }\r\n  }\r\n\r\n  &__option {\r\n    margin-top: rem(25px);\r\n\r\n    &__title {\r\n      font-size: rem(12px);\r\n      color: $font-gray2;\r\n    }\r\n\r\n    &__area {\r\n      @include flexbox($justify: space-between, $items: center);\r\n\r\n      position: relative;\r\n      margin-top: rem(8px);\r\n\r\n      &__birth {\r\n        width: 50%;\r\n        height: 48px;\r\n\r\n        &:focus-within .focus-text {\r\n          color: $blue;\r\n          font-size: rem(11px);\r\n          transform: translateY(-20px);\r\n          transition: all 0.2s ease;\r\n        }\r\n      }\r\n\r\n      .user-birth {\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n\r\n      &__gender {\r\n        width: 48%;\r\n        height: 48px;\r\n        border-radius: 4px;\r\n\r\n        button {\r\n          @include removeBtnStyle;\r\n\r\n          width: 50%;\r\n          height: 100%;\r\n          background: $white;\r\n          border-radius: 4px 0 0 4px;\r\n          color: $font-gray2;\r\n          font-size: rem(14px);\r\n          border: 1px solid $gray2;\r\n\r\n          &:nth-child(2) {\r\n            border-radius: 0 4px 4px 0;\r\n            border-left: 0;\r\n          }\r\n\r\n          &:hover {\r\n            box-shadow: inset 0 0 1px 0.5px $font-skyblue;\r\n          }\r\n\r\n          &.is-selected {\r\n            border: 1px solid $font-skyblue;\r\n            background: $bg-lightblue2;\r\n            pointer-events: none;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__tos {\r\n    // margin-top: rem(25px);\r\n    width: 340px;\r\n    background: $white;\r\n    border: 1px solid $gray2;\r\n    border-radius: 4px;\r\n    font-size: rem(14px);\r\n    color: $font-skyblue;\r\n\r\n    label {\r\n      @include flexbox($items: center);\r\n\r\n      cursor: pointer;\r\n\r\n      &:hover .agreement-text {\r\n        color: $primary-font;\r\n      }\r\n    }\r\n\r\n    .all-agree {\r\n      @include paddingX(13px);\r\n      @include paddingY(13px);\r\n\r\n      border-bottom: 1px solid $gray2;\r\n      font-weight: 600;\r\n    }\r\n\r\n    &__list {\r\n      @include paddingX(13px);\r\n    }\r\n\r\n    &__item {\r\n      @include marginY(15px);\r\n      @include flexbox($justify: space-between, $items: center);\r\n    }\r\n\r\n    .check-rounded {\r\n      display: inline-block;\r\n      width: 18px;\r\n      height: 18px;\r\n      border: 1px solid $gray2;\r\n      border-radius: 50%;\r\n      margin-right: rem(6px);\r\n      position: relative;\r\n\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        top: rem(5px);\r\n        right: rem(4px);\r\n        width: rem(8px);\r\n        height: rem(5px);\r\n        transform: rotate(-45deg);\r\n        border-style: solid;\r\n        border-color: $gray2;\r\n        border-width: 0px 0px rem(2px) rem(2px);\r\n      }\r\n    }\r\n\r\n    [type='checkbox'] {\r\n      display: none;\r\n\r\n      &:checked + label .check-rounded,\r\n      &:checked + label .check-rounded::before {\r\n        border-color: $blue;\r\n      }\r\n    }\r\n\r\n    .link-more {\r\n      position: relative;\r\n      font-size: rem(12px);\r\n      color: $border-gray4;\r\n      margin-right: 10px;\r\n\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        right: -8px;\r\n        top: 50%;\r\n        transform: translateY(-50%) rotate(45deg);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-style: solid;\r\n        border-width: rem(1px) rem(1px) 0 0;\r\n        border-color: $border-gray4;\r\n      }\r\n\r\n      &:hover {\r\n        color: $font-gray2;\r\n\r\n        &::after {\r\n          border-color: $font-gray2;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__error-message {\r\n    margin: rem(4px) 0;\r\n    display: block;\r\n    padding-left: rem(4px);\r\n    width: 100%;\r\n    height: 20px;\r\n    color: #e64938;\r\n    font-size: rem(11px);\r\n    font-weight: 700;\r\n  }\r\n\r\n  .btn-submit {\r\n    @include removeBtnStyle;\r\n\r\n    width: 100%;\r\n    height: 50px;\r\n    background: $blue;\r\n    font-size: rem(16px);\r\n    font-weight: 600;\r\n    color: $white;\r\n    border: 1px solid $border-blue;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);\r\n    margin-top: rem(15px);\r\n\r\n    &:disabled {\r\n      background: $gray;\r\n      color: $gray0;\r\n      border: 1px solid $gray2;\r\n    }\r\n  }\r\n}\r\n",".footer {\r\n  margin-top: rem(60px);\r\n  border-top: 1px solid $border-gray2;\r\n\r\n  &__container {\r\n    @include flexbox($justify: space-between, $wrap: wrap);\r\n    @include autoMargin;\r\n\r\n    max-width: 1170px;\r\n    padding: rem(41px) rem(26px) rem(20px);\r\n    min-width: 340px;\r\n\r\n    @include mobile {\r\n      padding: rem(30px) rem(12px) rem(50px);\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  &__wrap {\r\n    @include flexbox($direction: column);\r\n\r\n    padding: 0 rem(4px);\r\n    flex: 1;\r\n\r\n    &__customer-guide {\r\n      @include flexbox;\r\n\r\n      @include mobile {\r\n        flex-direction: column;\r\n      }\r\n\r\n      &__centerAndNotice {\r\n        @include flexbox($direction: column);\r\n\r\n        width: 185px;\r\n\r\n        @include mobile {\r\n          width: auto;\r\n          flex-direction: row;\r\n          margin-bottom: rem(30px);\r\n        }\r\n\r\n        li {\r\n          @include flexbox($items: center);\r\n\r\n          margin: rem(10px) 0;\r\n          font-weight: bold;\r\n          font-size: rem(13px);\r\n          line-height: 16px;\r\n          letter-spacing: -0.3px;\r\n          color: $font-gray1;\r\n\r\n          &:hover {\r\n            opacity: 0.6;\r\n          }\r\n\r\n          @include mobile {\r\n            flex: 1;\r\n            margin: 0;\r\n          }\r\n          a {\r\n            margin-left: rem(4px);\r\n          }\r\n        }\r\n      }\r\n\r\n      &__info {\r\n        @include flexbox;\r\n\r\n        flex: 1;\r\n        &__service {\r\n          @include flexbox($direction: column);\r\n\r\n          flex: 1;\r\n          max-width: 185px;\r\n\r\n          @include mobile {\r\n            max-width: inherit;\r\n          }\r\n\r\n          &__title {\r\n            color: $font-gray1;\r\n            font-size: rem(13px);\r\n            font-weight: 700;\r\n            line-height: 16px;\r\n            letter-spacing: -0.3px;\r\n            padding: rem(4px) 0;\r\n            margin-bottom: rem(12px);\r\n\r\n            @include mobile {\r\n              padding: 0;\r\n              margin-bottom: rem(16px);\r\n              font-size: rem(12px);\r\n              line-height: 14px;\r\n            }\r\n          }\r\n\r\n          &__list {\r\n            @include flexbox($direction: column);\r\n\r\n            &__item {\r\n              color: $font-gray1;\r\n              font-size: rem(13px);\r\n              line-height: 16px;\r\n              letter-spacing: -0.01em;\r\n              padding: rem(6px) 0;\r\n\r\n              &:first-child {\r\n                padding-top: 0;\r\n              }\r\n\r\n              @include mobile {\r\n                padding: rem(7px) 0;\r\n                font-size: rem(12px);\r\n                line-height: 14px;\r\n              }\r\n\r\n              &:hover {\r\n                opacity: 0.6;\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        &__etcAndIntroduce {\r\n          @include flexbox;\r\n\r\n          flex: 2;\r\n\r\n          @include mobile {\r\n            flex: 1;\r\n            flex-direction: column;\r\n          }\r\n\r\n          &__etc {\r\n            @include flexbox($direction: column);\r\n\r\n            flex: 1;\r\n            max-width: 185px;\r\n\r\n            @include mobile {\r\n              max-width: initial;\r\n            }\r\n\r\n            &__title {\r\n              @include paddingY(4px);\r\n\r\n              color: $font-gray1;\r\n              font-size: rem(13px);\r\n              font-weight: 700;\r\n              line-height: 16px;\r\n              letter-spacing: -0.01em;\r\n              margin-bottom: rem(12px);\r\n\r\n              @include mobile {\r\n                padding: 0;\r\n                margin-bottom: rem(16px);\r\n                font-size: rem(12px);\r\n                line-height: 14px;\r\n              }\r\n            }\r\n\r\n            &__list {\r\n              @include flexbox($direction: column);\r\n\r\n              &__item {\r\n                @include paddingY(6px);\r\n\r\n                color: $font-gray1;\r\n                font-size: rem(13px);\r\n                line-height: 16px;\r\n                letter-spacing: -0.01em;\r\n\r\n                &:first-child {\r\n                  padding-top: 0;\r\n                }\r\n\r\n                @include mobile {\r\n                  padding: rem(7px) 0;\r\n                  font-size: rem(12px);\r\n                  line-height: 14px;\r\n                }\r\n\r\n                &:hover {\r\n                  opacity: 0.6;\r\n                }\r\n              }\r\n            }\r\n          }\r\n\r\n          &__introduce {\r\n            @include flexbox($direction: column);\r\n\r\n            flex: 1;\r\n            max-width: 185px;\r\n\r\n            @include mobile {\r\n              max-width: initial;\r\n              margin-top: rem(30px);\r\n            }\r\n\r\n            &__title {\r\n              color: $font-gray1;\r\n              font-size: rem(13px);\r\n              font-weight: 700;\r\n              line-height: 16px;\r\n              letter-spacing: -0.3px;\r\n              padding: rem(4px) 0;\r\n              margin-bottom: rem(12px);\r\n\r\n              @include mobile {\r\n                padding: 0;\r\n                margin-bottom: rem(16px);\r\n                font-size: rem(12px);\r\n                line-height: 14px;\r\n              }\r\n            }\r\n\r\n            &__list {\r\n              &__item {\r\n                color: $font-gray1;\r\n                font-size: rem(13px);\r\n                line-height: 16px;\r\n                letter-spacing: -0.01em;\r\n                padding: rem(6px) 0;\r\n\r\n                &:first-child {\r\n                  padding-top: 0;\r\n                }\r\n\r\n                @include mobile {\r\n                  padding: rem(7px) 0;\r\n                  font-size: rem(12px);\r\n                  line-height: 14px;\r\n                }\r\n                svg {\r\n                  color: #1e9eff;\r\n                  margin-left: rem(4px);\r\n                  font-size: rem(14px);\r\n                  transform: translate3d(0, 2px, 0);\r\n                }\r\n\r\n                &:hover {\r\n                  opacity: 0.6;\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    &__business-info {\r\n      margin-top: rem(60px);\r\n      margin-bottom: rem(20px);\r\n\r\n      @include mobile {\r\n        margin-top: rem(55px);\r\n      }\r\n\r\n      &__more {\r\n        color: $font-gray1;\r\n        font-size: rem(12px);\r\n        font-weight: 700;\r\n        line-height: 14px;\r\n        letter-spacing: -0.03px;\r\n        margin-bottom: rem(12px);\r\n        cursor: pointer;\r\n\r\n        &[open] {\r\n          .business-info__title__icon {\r\n            transform: rotate(270deg);\r\n          }\r\n        }\r\n        .business-info__title {\r\n          &__icon {\r\n            font-size: rem(9px);\r\n            transform: rotate(90deg);\r\n          }\r\n\r\n          &::marker {\r\n            content: '';\r\n          }\r\n        }\r\n      }\r\n\r\n      &__content {\r\n        margin-bottom: rem(3px);\r\n\r\n        &__list {\r\n          margin: rem(10px) 0 rem(-3px) rem(-13px);\r\n\r\n          &__item {\r\n            display: inline-flex;\r\n            align-items: center;\r\n            font-size: rem(11px);\r\n            line-height: 22px;\r\n\r\n            @include mobile {\r\n              font-size: rem(10px);\r\n              line-height: 18px;\r\n            }\r\n\r\n            &::before {\r\n              content: '';\r\n              display: inline-block;\r\n              background: rgb(228, 222, 222);\r\n              width: 1px;\r\n              height: 9px;\r\n              margin: rem(2px) rem(6px);\r\n            }\r\n\r\n            &__title {\r\n              margin-right: rem(6px);\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      &__link-list {\r\n        @include flexbox($items: center, $wrap: wrap);\r\n\r\n        @include mobile {\r\n          margin-top: rem(10px);\r\n        }\r\n\r\n        &__item {\r\n          color: $font-gray1;\r\n          font-size: rem(11px);\r\n          line-height: 19px;\r\n          letter-spacing: -0.01em;\r\n          display: inline-flex;\r\n          height: 13px;\r\n          line-height: 13px;\r\n          letter-spacing: -0.03px;\r\n\r\n          &:first-child {\r\n            &::before {\r\n              content: '';\r\n              display: none;\r\n            }\r\n          }\r\n\r\n          &:nth-of-type(2) {\r\n            font-weight: 700;\r\n          }\r\n\r\n          &::before {\r\n            content: '';\r\n            display: inline-block;\r\n            background: $gray0;\r\n            width: 1px;\r\n            height: 9px;\r\n            margin: rem(2px) rem(6px);\r\n          }\r\n\r\n          &:hover {\r\n            opacity: 0.6;\r\n          }\r\n          @include mobile {\r\n            font-size: rem(10px);\r\n            line-height: 18px;\r\n          }\r\n        }\r\n      }\r\n      &__copyright {\r\n        @include flexbox;\r\n\r\n        color: $font-gray1;\r\n        font-size: rem(11px);\r\n        font-weight: 500;\r\n        letter-spacing: -0.03px;\r\n        margin-top: rem(16px);\r\n\r\n        @include mobile {\r\n          font-size: rem(10px);\r\n          font-weight: 400;\r\n          line-height: 12px;\r\n          margin-top: rem(12px);\r\n        }\r\n\r\n        span {\r\n          font-size: rem(11px);\r\n          margin-right: rem(4px);\r\n\r\n          @include mobile {\r\n            margin-right: rem(2px);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__icon-list {\r\n    @include flexbox;\r\n\r\n    padding-bottom: rem(30px);\r\n    @include paddingX(4px);\r\n\r\n    &__item {\r\n      color: $font-gray1;\r\n      margin-left: rem(10px);\r\n\r\n      &:first-child {\r\n        margin-left: 0;\r\n      }\r\n\r\n      a {\r\n        width: 44px;\r\n        height: 44px;\r\n        display: inline-flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border: 1px solid #e6e6e6;\r\n        border-radius: 22px;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".recent {\r\n  width: 100%;\r\n\r\n  &__title {\r\n    color: $primary-font;\r\n    font-size: rem(22px);\r\n    font-weight: 600;\r\n  }\r\n\r\n  &__empty {\r\n    @include paddingY(160px);\r\n\r\n    .bx-book-open {\r\n      @include autoMargin;\r\n      display: block;\r\n      font-size: rem(84px);\r\n      width: 84px;\r\n      margin-bottom: rem(15px);\r\n    }\r\n\r\n    &__title {\r\n      display: block;\r\n      text-align: center;\r\n      font-size: rem(13px);\r\n      color: $font-gray7;\r\n      font-weight: 400;\r\n    }\r\n  }\r\n\r\n  &__fill {\r\n    &__clear-btn {\r\n      text-align: end;\r\n      padding-right: rem(17px);\r\n    }\r\n\r\n    &__button {\r\n      @include removeBtnStyle;\r\n\r\n      border: 1px solid $gray2;\r\n      border-radius: 7px;\r\n      padding: rem(7px) rem(17px);\r\n      color: $font-gray2;\r\n    }\r\n\r\n    &__list {\r\n      @include flexbox($wrap: wrap);\r\n\r\n      margin-top: rem(30px);\r\n      gap: 50px;\r\n    }\r\n\r\n    &__item {\r\n      width: 110px;\r\n\r\n      p {\r\n        margin-top: rem(3px);\r\n\r\n        .carousel__star {\r\n          font-size: rem(12px);\r\n        }\r\n\r\n        .carousel__rate {\r\n          font-size: rem(12px);\r\n          color: $font-gray3;\r\n          font-weight: 400;\r\n          margin-left: rem(2px);\r\n        }\r\n      }\r\n    }\r\n\r\n    &__link {\r\n      display: block;\r\n      height: 160px;\r\n    }\r\n\r\n    &__thumbnail {\r\n      position: relative;\r\n      height: 100%;\r\n    }\r\n\r\n    &__img {\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n\r\n    &__wait-free {\r\n      @include flexCenter;\r\n\r\n      position: absolute;\r\n      width: 34px;\r\n      height: 34px;\r\n      top: -7px;\r\n      left: -7px;\r\n      font-size: rem(22px);\r\n      background: $blue;\r\n      border-radius: 50%;\r\n      border: 1px solid rgba(0, 0, 0, 0.15);\r\n      box-shadow: 0 2px 3px 0 rgb(0 0 0 / 30%);\r\n      color: $white;\r\n    }\r\n\r\n    &__free-count {\r\n      position: absolute;\r\n      bottom: 0;\r\n      right: 0;\r\n      border: 1px solid rgba(255, 255, 255, 0.4);\r\n      border-right: 0;\r\n      border-bottom: 0;\r\n      background: rgba(0, 0, 0, 0.7);\r\n      border-radius: 3px 0 0 0;\r\n      padding: rem(7px) rem(6px) rem(5px) rem(6px);\r\n      line-height: 12px;\r\n      opacity: 0.9;\r\n      color: $white;\r\n      font-weight: 700;\r\n      font-size: rem(12px);\r\n    }\r\n\r\n    &__title {\r\n      @include ellipsis;\r\n\r\n      display: block;\r\n      margin-top: rem(8px);\r\n      font-size: rem(13px);\r\n      font-weight: 700;\r\n      color: $my-font-recent;\r\n    }\r\n\r\n    &__sub {\r\n      @include ellipsis;\r\n\r\n      margin-top: rem(3px);\r\n      font-size: rem(12px);\r\n      color: $secondary-font;\r\n      line-height: 18px;\r\n    }\r\n  }\r\n}\r\n",".notFound-image {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  img {\r\n    max-width: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"shared": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkridi"] = self["webpackChunkridi"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/scss/style.scss");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/lodash/lodash.js");
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=shared.js.map