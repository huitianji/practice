/*! //jht-- */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"bundle","1":"bundle2"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body{\r\n    font-size: 18px;\r\n    background-color: #ccc;\r\n    background: url(" + __webpack_require__(4) + ") no-repeat left center;\r\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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QZsgvNLinPZH/J5WHcs3vJeRXvd9PpNp0p66si3nHPjo/p9p5v/sO32eTEr4sOxY7SbHVMpQ9zP9VN4jr/TfqB1n/67wSh8f1vlsDiAeZeT9J+89itb4P4XNmG/p5/lugO2xYfbr7Jv0vXw3GI0V+T6a/T/HkPRVliXLO6vvEo+irfyPL/Ft9rWeTn8v6ONJjrXZ92bzUdaD/Hp7yPE802TM6TbpZJlu+Tvor9rK/6WyUb4Dlm37e3v3Ne0k/cD7BGnRpnjmFP9nPMYk8iLNXr4lPer8r5RSSimlnlOX2ufNdO9lL/nWlOsgl7BhfRvNvmv699RftfZ5tT+sOdSayWzNeo3S/31tI7/zR9/8S2shrJv082soyznqR/zjMbu/lN7oepbXLK1RvybubM1pVua/iv2y3PsjX9Y88pz2wjO5zp5tJPdeOWcNl3s5JrB3sya82zrLmeuJdY/1Ztaa+rpShfc61r1MK21Xx/QZkFdeox6nxHol90mXve6lMp+j7pdsb6P+z1obtmY/vms09le83Mct6COs860JP1Yv7JdjXv+3IfchEHsZdcy1yrRVptnzGtm3/xNBnNH9kf9HZT5Hff4/xf8Zf/b+kHbinL0Zjvgz/8lYE35qvfqcl3sC+HpUp/RBt09ez/LKsNE+E/ezP3OdeY/KfK628H/fRymfUKY8LzHWMX4yltGe14afUi/CGDf4jwAb074Qc233fx9zco/ymP/5fyLzKPX73f+zMp+rY/7PuR079H6SdS318Sl9g7+Iyzy2Vfgxu2cYtuT9OudhxnDiYue0NXud+DP3KI+Vg39r8SFtJ23KntnI/6Myn/MuyH5b1il9R9/OumKP0VhF3Eyv59f92fvBmnDCluqVYdSDuaT7N+fy0TcYz/fnRnn1MNpA34tMGxM/856Vufe1S2hpvUA9vvS/UkoppZRSSimllFJKXU07EREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZE75B+Hl45q2TuOnAAAAVNta0JU+s7K/gB/pYUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHic7dbh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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(7);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function (global, factory) {

	    if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
	        // For CommonJS and CommonJS-like environments where a proper `window`
	        // is present, execute the factory and get jQuery.
	        // For environments that do not have a `window` with a `document`
	        // (such as Node.js), expose a factory as module.exports.
	        // This accentuates the need for the creation of a real `window`.
	        // e.g. var jQuery = require("jquery")(window);
	        // See ticket #14549 for more info.
	        module.exports = global.document ? factory(global, true) : function (w) {
	            if (!w.document) {
	                throw new Error("jQuery requires a window with a document");
	            }
	            return factory(w);
	        };
	    } else {
	        factory(global);
	    }

	    // Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

	    // Support: Firefox 18+
	    // Can't be in strict mode, several libs including ASP.NET trace
	    // the stack via arguments.caller.callee and Firefox dies if
	    // you try to trace through "use strict" call chains. (#13335)
	    //"use strict";
	    var arr = [];

	    var document = window.document;

	    var _slice = arr.slice;

	    var concat = arr.concat;

	    var push = arr.push;

	    var indexOf = arr.indexOf;

	    var class2type = {};

	    var toString = class2type.toString;

	    var hasOwn = class2type.hasOwnProperty;

	    var support = {};

	    var version = "2.2.4",


	    // Define a local copy of jQuery
	    jQuery = function jQuery(selector, context) {

	        // The jQuery object is actually just the init constructor 'enhanced'
	        // Need init if jQuery is called (just allow error to be thrown if not included)
	        return new jQuery.fn.init(selector, context);
	    },


	    // Support: Android<4.1
	    // Make sure we trim BOM and NBSP
	    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	    // Matches dashed string for camelizing
	    rmsPrefix = /^-ms-/,
	        rdashAlpha = /-([\da-z])/gi,


	    // Used by jQuery.camelCase as callback to replace()
	    fcamelCase = function fcamelCase(all, letter) {
	        return letter.toUpperCase();
	    };

	    jQuery.fn = jQuery.prototype = {

	        // The current version of jQuery being used
	        jquery: version,

	        constructor: jQuery,

	        // Start with an empty selector
	        selector: "",

	        // The default length of a jQuery object is 0
	        length: 0,

	        toArray: function toArray() {
	            return _slice.call(this);
	        },

	        // Get the Nth element in the matched element set OR
	        // Get the whole matched element set as a clean array
	        get: function get(num) {
	            return num != null ?

	            // Return just the one element from the set
	            num < 0 ? this[num + this.length] : this[num] :

	            // Return all the elements in a clean array
	            _slice.call(this);
	        },

	        // Take an array of elements and push it onto the stack
	        // (returning the new matched element set)
	        pushStack: function pushStack(elems) {

	            // Build a new jQuery matched element set
	            var ret = jQuery.merge(this.constructor(), elems);

	            // Add the old object onto the stack (as a reference)
	            ret.prevObject = this;
	            ret.context = this.context;

	            // Return the newly-formed element set
	            return ret;
	        },

	        // Execute a callback for every element in the matched set.
	        each: function each(callback) {
	            return jQuery.each(this, callback);
	        },

	        map: function map(callback) {
	            return this.pushStack(jQuery.map(this, function (elem, i) {
	                return callback.call(elem, i, elem);
	            }));
	        },

	        slice: function slice() {
	            return this.pushStack(_slice.apply(this, arguments));
	        },

	        first: function first() {
	            return this.eq(0);
	        },

	        last: function last() {
	            return this.eq(-1);
	        },

	        eq: function eq(i) {
	            var len = this.length,
	                j = +i + (i < 0 ? len : 0);
	            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
	        },

	        end: function end() {
	            return this.prevObject || this.constructor();
	        },

	        // For internal use only.
	        // Behaves like an Array's method, not like a jQuery method.
	        push: push,
	        sort: arr.sort,
	        splice: arr.splice
	    };

	    jQuery.extend = jQuery.fn.extend = function () {
	        var options,
	            name,
	            src,
	            copy,
	            copyIsArray,
	            clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false;

	        // Handle a deep copy situation
	        if (typeof target === "boolean") {
	            deep = target;

	            // Skip the boolean and the target
	            target = arguments[i] || {};
	            i++;
	        }

	        // Handle case when target is a string or something (possible in deep copy)
	        if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
	            target = {};
	        }

	        // Extend jQuery itself if only one argument is passed
	        if (i === length) {
	            target = this;
	            i--;
	        }

	        for (; i < length; i++) {

	            // Only deal with non-null/undefined values
	            if ((options = arguments[i]) != null) {

	                // Extend the base object
	                for (name in options) {
	                    src = target[name];
	                    copy = options[name];

	                    // Prevent never-ending loop
	                    if (target === copy) {
	                        continue;
	                    }

	                    // Recurse if we're merging plain objects or arrays
	                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

	                        if (copyIsArray) {
	                            copyIsArray = false;
	                            clone = src && jQuery.isArray(src) ? src : [];
	                        } else {
	                            clone = src && jQuery.isPlainObject(src) ? src : {};
	                        }

	                        // Never move original objects, clone them
	                        target[name] = jQuery.extend(deep, clone, copy);

	                        // Don't bring in undefined values
	                    } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	                }
	            }
	        }

	        // Return the modified object
	        return target;
	    };

	    jQuery.extend({

	        // Unique for each copy of jQuery on the page
	        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

	        // Assume jQuery is ready without the ready module
	        isReady: true,

	        error: function error(msg) {
	            throw new Error(msg);
	        },

	        noop: function noop() {},

	        isFunction: function isFunction(obj) {
	            return jQuery.type(obj) === "function";
	        },

	        isArray: Array.isArray,

	        isWindow: function isWindow(obj) {
	            return obj != null && obj === obj.window;
	        },

	        isNumeric: function isNumeric(obj) {

	            // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	            // subtraction forces infinities to NaN
	            // adding 1 corrects loss of precision from parseFloat (#15100)
	            var realStringObj = obj && obj.toString();
	            return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
	        },

	        isPlainObject: function isPlainObject(obj) {
	            var key;

	            // Not plain objects:
	            // - Any object or value whose internal [[Class]] property is not "[object Object]"
	            // - DOM nodes
	            // - window
	            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
	                return false;
	            }

	            // Not own constructor property must be Object
	            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
	                return false;
	            }

	            // Own properties are enumerated firstly, so to speed up,
	            // if last one is own, then all properties are own
	            for (key in obj) {}

	            return key === undefined || hasOwn.call(obj, key);
	        },

	        isEmptyObject: function isEmptyObject(obj) {
	            var name;
	            for (name in obj) {
	                return false;
	            }
	            return true;
	        },

	        type: function type(obj) {
	            if (obj == null) {
	                return obj + "";
	            }

	            // Support: Android<4.0, iOS<6 (functionish RegExp)
	            return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	        },

	        // Evaluates a script in a global context
	        globalEval: function globalEval(code) {
	            var script,
	                indirect = eval;

	            code = jQuery.trim(code);

	            if (code) {

	                // If the code includes a valid, prologue position
	                // strict mode pragma, execute code by injecting a
	                // script tag into the document.
	                if (code.indexOf("use strict") === 1) {
	                    script = document.createElement("script");
	                    script.text = code;
	                    document.head.appendChild(script).parentNode.removeChild(script);
	                } else {

	                    // Otherwise, avoid the DOM node creation, insertion
	                    // and removal by using an indirect global eval

	                    indirect(code);
	                }
	            }
	        },

	        // Convert dashed to camelCase; used by the css and data modules
	        // Support: IE9-11+
	        // Microsoft forgot to hump their vendor prefix (#9572)
	        camelCase: function camelCase(string) {
	            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
	        },

	        nodeName: function nodeName(elem, name) {
	            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	        },

	        each: function each(obj, callback) {
	            var length,
	                i = 0;

	            if (isArrayLike(obj)) {
	                length = obj.length;
	                for (; i < length; i++) {
	                    if (callback.call(obj[i], i, obj[i]) === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    if (callback.call(obj[i], i, obj[i]) === false) {
	                        break;
	                    }
	                }
	            }

	            return obj;
	        },

	        // Support: Android<4.1
	        trim: function trim(text) {
	            return text == null ? "" : (text + "").replace(rtrim, "");
	        },

	        // results is for internal usage only
	        makeArray: function makeArray(arr, results) {
	            var ret = results || [];

	            if (arr != null) {
	                if (isArrayLike(Object(arr))) {
	                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
	                } else {
	                    push.call(ret, arr);
	                }
	            }

	            return ret;
	        },

	        inArray: function inArray(elem, arr, i) {
	            return arr == null ? -1 : indexOf.call(arr, elem, i);
	        },

	        merge: function merge(first, second) {
	            var len = +second.length,
	                j = 0,
	                i = first.length;

	            for (; j < len; j++) {
	                first[i++] = second[j];
	            }

	            first.length = i;

	            return first;
	        },

	        grep: function grep(elems, callback, invert) {
	            var callbackInverse,
	                matches = [],
	                i = 0,
	                length = elems.length,
	                callbackExpect = !invert;

	            // Go through the array, only saving the items
	            // that pass the validator function
	            for (; i < length; i++) {
	                callbackInverse = !callback(elems[i], i);
	                if (callbackInverse !== callbackExpect) {
	                    matches.push(elems[i]);
	                }
	            }

	            return matches;
	        },

	        // arg is for internal usage only
	        map: function map(elems, callback, arg) {
	            var length,
	                value,
	                i = 0,
	                ret = [];

	            // Go through the array, translating each of the items to their new values
	            if (isArrayLike(elems)) {
	                length = elems.length;
	                for (; i < length; i++) {
	                    value = callback(elems[i], i, arg);

	                    if (value != null) {
	                        ret.push(value);
	                    }
	                }

	                // Go through every key on the object,
	            } else {
	                for (i in elems) {
	                    value = callback(elems[i], i, arg);

	                    if (value != null) {
	                        ret.push(value);
	                    }
	                }
	            }

	            // Flatten any nested arrays
	            return concat.apply([], ret);
	        },

	        // A global GUID counter for objects
	        guid: 1,

	        // Bind a function to a context, optionally partially applying any
	        // arguments.
	        proxy: function proxy(fn, context) {
	            var tmp, args, proxy;

	            if (typeof context === "string") {
	                tmp = fn[context];
	                context = fn;
	                fn = tmp;
	            }

	            // Quick check to determine if target is callable, in the spec
	            // this throws a TypeError, but we will just return undefined.
	            if (!jQuery.isFunction(fn)) {
	                return undefined;
	            }

	            // Simulated bind
	            args = _slice.call(arguments, 2);
	            proxy = function proxy() {
	                return fn.apply(context || this, args.concat(_slice.call(arguments)));
	            };

	            // Set the guid of unique handler to the same of original handler, so it can be removed
	            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	            return proxy;
	        },

	        now: Date.now,

	        // jQuery.support is not used in Core but other projects attach their
	        // properties to it so it needs to exist.
	        support: support
	    });

	    // JSHint would error on this code due to the Symbol not being defined in ES5.
	    // Defining this global in .jshintrc would create a danger of using the global
	    // unguarded in another place, it seems safer to just disable JSHint for these
	    // three lines.
	    /* jshint ignore: start */
	    if (typeof Symbol === "function") {
	        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	    }
	    /* jshint ignore: end */

	    // Populate the class2type map
	    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
	        class2type["[object " + name + "]"] = name.toLowerCase();
	    });

	    function isArrayLike(obj) {

	        // Support: iOS 8.2 (not reproducible in simulator)
	        // `in` check used to prevent JIT error (gh-2145)
	        // hasOwn isn't used here due to false negatives
	        // regarding Nodelist length in IE
	        var length = !!obj && "length" in obj && obj.length,
	            type = jQuery.type(obj);

	        if (type === "function" || jQuery.isWindow(obj)) {
	            return false;
	        }

	        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	    }
	    var Sizzle =
	    /*!
	     * Sizzle CSS Selector Engine v2.2.1
	     * http://sizzlejs.com/
	     *
	     * Copyright jQuery Foundation and other contributors
	     * Released under the MIT license
	     * http://jquery.org/license
	     *
	     * Date: 2015-10-17
	     */
	    function (window) {

	        var i,
	            support,
	            Expr,
	            getText,
	            isXML,
	            tokenize,
	            compile,
	            select,
	            outermostContext,
	            sortInput,
	            hasDuplicate,


	        // Local document vars
	        setDocument,
	            document,
	            docElem,
	            documentIsHTML,
	            rbuggyQSA,
	            rbuggyMatches,
	            matches,
	            contains,


	        // Instance-specific data
	        expando = "sizzle" + 1 * new Date(),
	            preferredDoc = window.document,
	            dirruns = 0,
	            done = 0,
	            classCache = createCache(),
	            tokenCache = createCache(),
	            compilerCache = createCache(),
	            sortOrder = function sortOrder(a, b) {
	            if (a === b) {
	                hasDuplicate = true;
	            }
	            return 0;
	        },


	        // General-purpose constants
	        MAX_NEGATIVE = 1 << 31,


	        // Instance methods
	        hasOwn = {}.hasOwnProperty,
	            arr = [],
	            pop = arr.pop,
	            push_native = arr.push,
	            push = arr.push,
	            slice = arr.slice,

	        // Use a stripped-down indexOf as it's faster than native
	        // http://jsperf.com/thor-indexof-vs-for/5
	        indexOf = function indexOf(list, elem) {
	            var i = 0,
	                len = list.length;
	            for (; i < len; i++) {
	                if (list[i] === elem) {
	                    return i;
	                }
	            }
	            return -1;
	        },
	            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


	        // Regular expressions

	        // http://www.w3.org/TR/css3-selectors/#whitespace
	        whitespace = "[\\x20\\t\\r\\n\\f]",


	        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	        identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


	        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
	        // Operator (capture 2)
	        "*([*^$|!~]?=)" + whitespace +
	        // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
	            pseudos = ":(" + identifier + ")(?:\\((" +
	        // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	        // 1. quoted (capture 3; capture 4 or capture 5)
	        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
	        // 2. simple (capture 6)
	        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
	        // 3. anything else (capture 2)
	        ".*" + ")\\)|)",


	        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	        rwhitespace = new RegExp(whitespace + "+", "g"),
	            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
	            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
	            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
	            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
	            rpseudo = new RegExp(pseudos),
	            ridentifier = new RegExp("^" + identifier + "$"),
	            matchExpr = {
	            "ID": new RegExp("^#(" + identifier + ")"),
	            "CLASS": new RegExp("^\\.(" + identifier + ")"),
	            "TAG": new RegExp("^(" + identifier + "|[*])"),
	            "ATTR": new RegExp("^" + attributes),
	            "PSEUDO": new RegExp("^" + pseudos),
	            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
	            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
	            // For use in libraries implementing .is()
	            // We use this for POS matching in `select`
	            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
	        },
	            rinputs = /^(?:input|select|textarea|button)$/i,
	            rheader = /^h\d$/i,
	            rnative = /^[^{]+\{\s*\[native \w/,


	        // Easily-parseable/retrievable ID or TAG or CLASS selectors
	        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	            rsibling = /[+~]/,
	            rescape = /'|\\/g,


	        // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
	            funescape = function funescape(_, escaped, escapedWhitespace) {
	            var high = "0x" + escaped - 0x10000;
	            // NaN means non-codepoint
	            // Support: Firefox<24
	            // Workaround erroneous numeric interpretation of +"0x"
	            return high !== high || escapedWhitespace ? escaped : high < 0 ?
	            // BMP codepoint
	            String.fromCharCode(high + 0x10000) :
	            // Supplemental Plane codepoint (surrogate pair)
	            String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
	        },


	        // Used for iframes
	        // See setDocument()
	        // Removing the function wrapper causes a "Permission Denied"
	        // error in IE
	        unloadHandler = function unloadHandler() {
	            setDocument();
	        };

	        // Optimize for push.apply( _, NodeList )
	        try {
	            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
	            // Support: Android<4.0
	            // Detect silently failing push.apply
	            arr[preferredDoc.childNodes.length].nodeType;
	        } catch (e) {
	            push = { apply: arr.length ?

	                // Leverage slice if possible
	                function (target, els) {
	                    push_native.apply(target, slice.call(els));
	                } :

	                // Support: IE<9
	                // Otherwise append directly
	                function (target, els) {
	                    var j = target.length,
	                        i = 0;
	                    // Can't trust NodeList.length
	                    while (target[j++] = els[i++]) {}
	                    target.length = j - 1;
	                }
	            };
	        }

	        function Sizzle(selector, context, results, seed) {
	            var m,
	                i,
	                elem,
	                nid,
	                nidselect,
	                match,
	                groups,
	                newSelector,
	                newContext = context && context.ownerDocument,


	            // nodeType defaults to 9, since context defaults to document
	            nodeType = context ? context.nodeType : 9;

	            results = results || [];

	            // Return early from calls with invalid selector or context
	            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

	                return results;
	            }

	            // Try to shortcut find operations (as opposed to filters) in HTML documents
	            if (!seed) {

	                if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
	                    setDocument(context);
	                }
	                context = context || document;

	                if (documentIsHTML) {

	                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
	                    // (excepting DocumentFragment context, where the methods don't exist)
	                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

	                        // ID selector
	                        if (m = match[1]) {

	                            // Document context
	                            if (nodeType === 9) {
	                                if (elem = context.getElementById(m)) {

	                                    // Support: IE, Opera, Webkit
	                                    // TODO: identify versions
	                                    // getElementById can match elements by name instead of ID
	                                    if (elem.id === m) {
	                                        results.push(elem);
	                                        return results;
	                                    }
	                                } else {
	                                    return results;
	                                }

	                                // Element context
	                            } else {

	                                // Support: IE, Opera, Webkit
	                                // TODO: identify versions
	                                // getElementById can match elements by name instead of ID
	                                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

	                                    results.push(elem);
	                                    return results;
	                                }
	                            }

	                            // Type selector
	                        } else if (match[2]) {
	                            push.apply(results, context.getElementsByTagName(selector));
	                            return results;

	                            // Class selector
	                        } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

	                            push.apply(results, context.getElementsByClassName(m));
	                            return results;
	                        }
	                    }

	                    // Take advantage of querySelectorAll
	                    if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

	                        if (nodeType !== 1) {
	                            newContext = context;
	                            newSelector = selector;

	                            // qSA looks outside Element context, which is not what we want
	                            // Thanks to Andrew Dupont for this workaround technique
	                            // Support: IE <=8
	                            // Exclude object elements
	                        } else if (context.nodeName.toLowerCase() !== "object") {

	                            // Capture the context ID, setting it first if necessary
	                            if (nid = context.getAttribute("id")) {
	                                nid = nid.replace(rescape, "\\$&");
	                            } else {
	                                context.setAttribute("id", nid = expando);
	                            }

	                            // Prefix every selector in the list
	                            groups = tokenize(selector);
	                            i = groups.length;
	                            nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
	                            while (i--) {
	                                groups[i] = nidselect + " " + toSelector(groups[i]);
	                            }
	                            newSelector = groups.join(",");

	                            // Expand context for sibling selectors
	                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
	                        }

	                        if (newSelector) {
	                            try {
	                                push.apply(results, newContext.querySelectorAll(newSelector));
	                                return results;
	                            } catch (qsaError) {} finally {
	                                if (nid === expando) {
	                                    context.removeAttribute("id");
	                                }
	                            }
	                        }
	                    }
	                }
	            }

	            // All others
	            return select(selector.replace(rtrim, "$1"), context, results, seed);
	        }

	        /**
	         * Create key-value caches of limited size
	         * @returns {function(string, object)} Returns the Object data after storing it on itself with
	         *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	         *	deleting the oldest entry
	         */
	        function createCache() {
	            var keys = [];

	            function cache(key, value) {
	                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	                if (keys.push(key + " ") > Expr.cacheLength) {
	                    // Only keep the most recent entries
	                    delete cache[keys.shift()];
	                }
	                return cache[key + " "] = value;
	            }
	            return cache;
	        }

	        /**
	         * Mark a function for special use by Sizzle
	         * @param {Function} fn The function to mark
	         */
	        function markFunction(fn) {
	            fn[expando] = true;
	            return fn;
	        }

	        /**
	         * Support testing using an element
	         * @param {Function} fn Passed the created div and expects a boolean result
	         */
	        function assert(fn) {
	            var div = document.createElement("div");

	            try {
	                return !!fn(div);
	            } catch (e) {
	                return false;
	            } finally {
	                // Remove from its parent by default
	                if (div.parentNode) {
	                    div.parentNode.removeChild(div);
	                }
	                // release memory in IE
	                div = null;
	            }
	        }

	        /**
	         * Adds the same handler for all of the specified attrs
	         * @param {String} attrs Pipe-separated list of attributes
	         * @param {Function} handler The method that will be applied
	         */
	        function addHandle(attrs, handler) {
	            var arr = attrs.split("|"),
	                i = arr.length;

	            while (i--) {
	                Expr.attrHandle[arr[i]] = handler;
	            }
	        }

	        /**
	         * Checks document order of two siblings
	         * @param {Element} a
	         * @param {Element} b
	         * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	         */
	        function siblingCheck(a, b) {
	            var cur = b && a,
	                diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

	            // Use IE sourceIndex if available on both nodes
	            if (diff) {
	                return diff;
	            }

	            // Check if b follows a
	            if (cur) {
	                while (cur = cur.nextSibling) {
	                    if (cur === b) {
	                        return -1;
	                    }
	                }
	            }

	            return a ? 1 : -1;
	        }

	        /**
	         * Returns a function to use in pseudos for input types
	         * @param {String} type
	         */
	        function createInputPseudo(type) {
	            return function (elem) {
	                var name = elem.nodeName.toLowerCase();
	                return name === "input" && elem.type === type;
	            };
	        }

	        /**
	         * Returns a function to use in pseudos for buttons
	         * @param {String} type
	         */
	        function createButtonPseudo(type) {
	            return function (elem) {
	                var name = elem.nodeName.toLowerCase();
	                return (name === "input" || name === "button") && elem.type === type;
	            };
	        }

	        /**
	         * Returns a function to use in pseudos for positionals
	         * @param {Function} fn
	         */
	        function createPositionalPseudo(fn) {
	            return markFunction(function (argument) {
	                argument = +argument;
	                return markFunction(function (seed, matches) {
	                    var j,
	                        matchIndexes = fn([], seed.length, argument),
	                        i = matchIndexes.length;

	                    // Match elements found at the specified indexes
	                    while (i--) {
	                        if (seed[j = matchIndexes[i]]) {
	                            seed[j] = !(matches[j] = seed[j]);
	                        }
	                    }
	                });
	            });
	        }

	        /**
	         * Checks a node for validity as a Sizzle context
	         * @param {Element|Object=} context
	         * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	         */
	        function testContext(context) {
	            return context && typeof context.getElementsByTagName !== "undefined" && context;
	        }

	        // Expose support vars for convenience
	        support = Sizzle.support = {};

	        /**
	         * Detects XML nodes
	         * @param {Element|Object} elem An element or a document
	         * @returns {Boolean} True iff elem is a non-HTML XML node
	         */
	        isXML = Sizzle.isXML = function (elem) {
	            // documentElement is verified for cases where it doesn't yet exist
	            // (such as loading iframes in IE - #4833)
	            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	            return documentElement ? documentElement.nodeName !== "HTML" : false;
	        };

	        /**
	         * Sets document-related variables once based on the current document
	         * @param {Element|Object} [doc] An element or document object to use to set the document
	         * @returns {Object} Returns the current document
	         */
	        setDocument = Sizzle.setDocument = function (node) {
	            var hasCompare,
	                parent,
	                doc = node ? node.ownerDocument || node : preferredDoc;

	            // Return early if doc is invalid or already selected
	            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
	                return document;
	            }

	            // Update global variables
	            document = doc;
	            docElem = document.documentElement;
	            documentIsHTML = !isXML(document);

	            // Support: IE 9-11, Edge
	            // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	            if ((parent = document.defaultView) && parent.top !== parent) {
	                // Support: IE 11
	                if (parent.addEventListener) {
	                    parent.addEventListener("unload", unloadHandler, false);

	                    // Support: IE 9 - 10 only
	                } else if (parent.attachEvent) {
	                    parent.attachEvent("onunload", unloadHandler);
	                }
	            }

	            /* Attributes
	             ---------------------------------------------------------------------- */

	            // Support: IE<8
	            // Verify that getAttribute really returns attributes and not properties
	            // (excepting IE8 booleans)
	            support.attributes = assert(function (div) {
	                div.className = "i";
	                return !div.getAttribute("className");
	            });

	            /* getElement(s)By*
	             ---------------------------------------------------------------------- */

	            // Check if getElementsByTagName("*") returns only elements
	            support.getElementsByTagName = assert(function (div) {
	                div.appendChild(document.createComment(""));
	                return !div.getElementsByTagName("*").length;
	            });

	            // Support: IE<9
	            support.getElementsByClassName = rnative.test(document.getElementsByClassName);

	            // Support: IE<10
	            // Check if getElementById returns elements by name
	            // The broken getElementById methods don't pick up programatically-set names,
	            // so use a roundabout getElementsByName test
	            support.getById = assert(function (div) {
	                docElem.appendChild(div).id = expando;
	                return !document.getElementsByName || !document.getElementsByName(expando).length;
	            });

	            // ID find and filter
	            if (support.getById) {
	                Expr.find["ID"] = function (id, context) {
	                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
	                        var m = context.getElementById(id);
	                        return m ? [m] : [];
	                    }
	                };
	                Expr.filter["ID"] = function (id) {
	                    var attrId = id.replace(runescape, funescape);
	                    return function (elem) {
	                        return elem.getAttribute("id") === attrId;
	                    };
	                };
	            } else {
	                // Support: IE6/7
	                // getElementById is not reliable as a find shortcut
	                delete Expr.find["ID"];

	                Expr.filter["ID"] = function (id) {
	                    var attrId = id.replace(runescape, funescape);
	                    return function (elem) {
	                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
	                        return node && node.value === attrId;
	                    };
	                };
	            }

	            // Tag
	            Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
	                if (typeof context.getElementsByTagName !== "undefined") {
	                    return context.getElementsByTagName(tag);

	                    // DocumentFragment nodes don't have gEBTN
	                } else if (support.qsa) {
	                    return context.querySelectorAll(tag);
	                }
	            } : function (tag, context) {
	                var elem,
	                    tmp = [],
	                    i = 0,

	                // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	                results = context.getElementsByTagName(tag);

	                // Filter out possible comments
	                if (tag === "*") {
	                    while (elem = results[i++]) {
	                        if (elem.nodeType === 1) {
	                            tmp.push(elem);
	                        }
	                    }

	                    return tmp;
	                }
	                return results;
	            };

	            // Class
	            Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
	                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
	                    return context.getElementsByClassName(className);
	                }
	            };

	            /* QSA/matchesSelector
	             ---------------------------------------------------------------------- */

	            // QSA and matchesSelector support

	            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	            rbuggyMatches = [];

	            // qSa(:focus) reports false when true (Chrome 21)
	            // We allow this because of a bug in IE8/9 that throws an error
	            // whenever `document.activeElement` is accessed on an iframe
	            // So, we allow :focus to pass through QSA all the time to avoid the IE error
	            // See http://bugs.jquery.com/ticket/13378
	            rbuggyQSA = [];

	            if (support.qsa = rnative.test(document.querySelectorAll)) {
	                // Build QSA regex
	                // Regex strategy adopted from Diego Perini
	                assert(function (div) {
	                    // Select is set to empty string on purpose
	                    // This is to test IE's treatment of not explicitly
	                    // setting a boolean content attribute,
	                    // since its presence should be enough
	                    // http://bugs.jquery.com/ticket/12359
	                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

	                    // Support: IE8, Opera 11-12.16
	                    // Nothing should be selected when empty strings follow ^= or $= or *=
	                    // The test attribute must be unknown in Opera but "safe" for WinRT
	                    // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	                    if (div.querySelectorAll("[msallowcapture^='']").length) {
	                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
	                    }

	                    // Support: IE8
	                    // Boolean attributes and "value" are not treated correctly
	                    if (!div.querySelectorAll("[selected]").length) {
	                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
	                    }

	                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	                    if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
	                        rbuggyQSA.push("~=");
	                    }

	                    // Webkit/Opera - :checked should return selected option elements
	                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	                    // IE8 throws error here and will not see later tests
	                    if (!div.querySelectorAll(":checked").length) {
	                        rbuggyQSA.push(":checked");
	                    }

	                    // Support: Safari 8+, iOS 8+
	                    // https://bugs.webkit.org/show_bug.cgi?id=136851
	                    // In-page `selector#id sibing-combinator selector` fails
	                    if (!div.querySelectorAll("a#" + expando + "+*").length) {
	                        rbuggyQSA.push(".#.+[+~]");
	                    }
	                });

	                assert(function (div) {
	                    // Support: Windows 8 Native Apps
	                    // The type and name attributes are restricted during .innerHTML assignment
	                    var input = document.createElement("input");
	                    input.setAttribute("type", "hidden");
	                    div.appendChild(input).setAttribute("name", "D");

	                    // Support: IE8
	                    // Enforce case-sensitivity of name attribute
	                    if (div.querySelectorAll("[name=d]").length) {
	                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
	                    }

	                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	                    // IE8 throws error here and will not see later tests
	                    if (!div.querySelectorAll(":enabled").length) {
	                        rbuggyQSA.push(":enabled", ":disabled");
	                    }

	                    // Opera 10-11 does not throw on post-comma invalid pseudos
	                    div.querySelectorAll("*,:x");
	                    rbuggyQSA.push(",.*:");
	                });
	            }

	            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

	                assert(function (div) {
	                    // Check to see if it's possible to do matchesSelector
	                    // on a disconnected node (IE 9)
	                    support.disconnectedMatch = matches.call(div, "div");

	                    // This should fail with an exception
	                    // Gecko does not error, returns false instead
	                    matches.call(div, "[s!='']:x");
	                    rbuggyMatches.push("!=", pseudos);
	                });
	            }

	            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
	            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

	            /* Contains
	             ---------------------------------------------------------------------- */
	            hasCompare = rnative.test(docElem.compareDocumentPosition);

	            // Element contains another
	            // Purposefully self-exclusive
	            // As in, an element does not contain itself
	            contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
	                var adown = a.nodeType === 9 ? a.documentElement : a,
	                    bup = b && b.parentNode;
	                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
	            } : function (a, b) {
	                if (b) {
	                    while (b = b.parentNode) {
	                        if (b === a) {
	                            return true;
	                        }
	                    }
	                }
	                return false;
	            };

	            /* Sorting
	             ---------------------------------------------------------------------- */

	            // Document order sorting
	            sortOrder = hasCompare ? function (a, b) {

	                // Flag for duplicate removal
	                if (a === b) {
	                    hasDuplicate = true;
	                    return 0;
	                }

	                // Sort on method existence if only one input has compareDocumentPosition
	                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
	                if (compare) {
	                    return compare;
	                }

	                // Calculate position if both inputs belong to the same document
	                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

	                // Otherwise we know they are disconnected
	                1;

	                // Disconnected nodes
	                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

	                    // Choose the first element that is related to our preferred document
	                    if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
	                        return -1;
	                    }
	                    if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
	                        return 1;
	                    }

	                    // Maintain original order
	                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
	                }

	                return compare & 4 ? -1 : 1;
	            } : function (a, b) {
	                // Exit early if the nodes are identical
	                if (a === b) {
	                    hasDuplicate = true;
	                    return 0;
	                }

	                var cur,
	                    i = 0,
	                    aup = a.parentNode,
	                    bup = b.parentNode,
	                    ap = [a],
	                    bp = [b];

	                // Parentless nodes are either documents or disconnected
	                if (!aup || !bup) {
	                    return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

	                    // If the nodes are siblings, we can do a quick check
	                } else if (aup === bup) {
	                    return siblingCheck(a, b);
	                }

	                // Otherwise we need full lists of their ancestors for comparison
	                cur = a;
	                while (cur = cur.parentNode) {
	                    ap.unshift(cur);
	                }
	                cur = b;
	                while (cur = cur.parentNode) {
	                    bp.unshift(cur);
	                }

	                // Walk down the tree looking for a discrepancy
	                while (ap[i] === bp[i]) {
	                    i++;
	                }

	                return i ?
	                // Do a sibling check if the nodes have a common ancestor
	                siblingCheck(ap[i], bp[i]) :

	                // Otherwise nodes in our document sort first
	                ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
	            };

	            return document;
	        };

	        Sizzle.matches = function (expr, elements) {
	            return Sizzle(expr, null, null, elements);
	        };

	        Sizzle.matchesSelector = function (elem, expr) {
	            // Set document vars if needed
	            if ((elem.ownerDocument || elem) !== document) {
	                setDocument(elem);
	            }

	            // Make sure that attribute selectors are quoted
	            expr = expr.replace(rattributeQuotes, "='$1']");

	            if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

	                try {
	                    var ret = matches.call(elem, expr);

	                    // IE 9's matchesSelector returns false on disconnected nodes
	                    if (ret || support.disconnectedMatch ||
	                    // As well, disconnected nodes are said to be in a document
	                    // fragment in IE 9
	                    elem.document && elem.document.nodeType !== 11) {
	                        return ret;
	                    }
	                } catch (e) {}
	            }

	            return Sizzle(expr, document, null, [elem]).length > 0;
	        };

	        Sizzle.contains = function (context, elem) {
	            // Set document vars if needed
	            if ((context.ownerDocument || context) !== document) {
	                setDocument(context);
	            }
	            return contains(context, elem);
	        };

	        Sizzle.attr = function (elem, name) {
	            // Set document vars if needed
	            if ((elem.ownerDocument || elem) !== document) {
	                setDocument(elem);
	            }

	            var fn = Expr.attrHandle[name.toLowerCase()],

	            // Don't get fooled by Object.prototype properties (jQuery #13807)
	            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

	            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
	        };

	        Sizzle.error = function (msg) {
	            throw new Error("Syntax error, unrecognized expression: " + msg);
	        };

	        /**
	         * Document sorting and removing duplicates
	         * @param {ArrayLike} results
	         */
	        Sizzle.uniqueSort = function (results) {
	            var elem,
	                duplicates = [],
	                j = 0,
	                i = 0;

	            // Unless we *know* we can detect duplicates, assume their presence
	            hasDuplicate = !support.detectDuplicates;
	            sortInput = !support.sortStable && results.slice(0);
	            results.sort(sortOrder);

	            if (hasDuplicate) {
	                while (elem = results[i++]) {
	                    if (elem === results[i]) {
	                        j = duplicates.push(i);
	                    }
	                }
	                while (j--) {
	                    results.splice(duplicates[j], 1);
	                }
	            }

	            // Clear input after sorting to release objects
	            // See https://github.com/jquery/sizzle/pull/225
	            sortInput = null;

	            return results;
	        };

	        /**
	         * Utility function for retrieving the text value of an array of DOM nodes
	         * @param {Array|Element} elem
	         */
	        getText = Sizzle.getText = function (elem) {
	            var node,
	                ret = "",
	                i = 0,
	                nodeType = elem.nodeType;

	            if (!nodeType) {
	                // If no nodeType, this is expected to be an array
	                while (node = elem[i++]) {
	                    // Do not traverse comment nodes
	                    ret += getText(node);
	                }
	            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
	                // Use textContent for elements
	                // innerText usage removed for consistency of new lines (jQuery #11153)
	                if (typeof elem.textContent === "string") {
	                    return elem.textContent;
	                } else {
	                    // Traverse its children
	                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
	                        ret += getText(elem);
	                    }
	                }
	            } else if (nodeType === 3 || nodeType === 4) {
	                return elem.nodeValue;
	            }
	            // Do not include comment or processing instruction nodes

	            return ret;
	        };

	        Expr = Sizzle.selectors = {

	            // Can be adjusted by the user
	            cacheLength: 50,

	            createPseudo: markFunction,

	            match: matchExpr,

	            attrHandle: {},

	            find: {},

	            relative: {
	                ">": { dir: "parentNode", first: true },
	                " ": { dir: "parentNode" },
	                "+": { dir: "previousSibling", first: true },
	                "~": { dir: "previousSibling" }
	            },

	            preFilter: {
	                "ATTR": function ATTR(match) {
	                    match[1] = match[1].replace(runescape, funescape);

	                    // Move the given value to match[3] whether quoted or unquoted
	                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

	                    if (match[2] === "~=") {
	                        match[3] = " " + match[3] + " ";
	                    }

	                    return match.slice(0, 4);
	                },

	                "CHILD": function CHILD(match) {
	                    /* matches from matchExpr["CHILD"]
	                     1 type (only|nth|...)
	                     2 what (child|of-type)
	                     3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	                     4 xn-component of xn+y argument ([+-]?\d*n|)
	                     5 sign of xn-component
	                     6 x of xn-component
	                     7 sign of y-component
	                     8 y of y-component
	                     */
	                    match[1] = match[1].toLowerCase();

	                    if (match[1].slice(0, 3) === "nth") {
	                        // nth-* requires argument
	                        if (!match[3]) {
	                            Sizzle.error(match[0]);
	                        }

	                        // numeric x and y parameters for Expr.filter.CHILD
	                        // remember that false/true cast respectively to 0/1
	                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
	                        match[5] = +(match[7] + match[8] || match[3] === "odd");

	                        // other types prohibit arguments
	                    } else if (match[3]) {
	                        Sizzle.error(match[0]);
	                    }

	                    return match;
	                },

	                "PSEUDO": function PSEUDO(match) {
	                    var excess,
	                        unquoted = !match[6] && match[2];

	                    if (matchExpr["CHILD"].test(match[0])) {
	                        return null;
	                    }

	                    // Accept quoted arguments as-is
	                    if (match[3]) {
	                        match[2] = match[4] || match[5] || "";

	                        // Strip excess characters from unquoted arguments
	                    } else if (unquoted && rpseudo.test(unquoted) && (
	                    // Get excess from tokenize (recursively)
	                    excess = tokenize(unquoted, true)) && (
	                    // advance to the next closing parenthesis
	                    excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

	                        // excess is a negative index
	                        match[0] = match[0].slice(0, excess);
	                        match[2] = unquoted.slice(0, excess);
	                    }

	                    // Return only captures needed by the pseudo filter method (type and argument)
	                    return match.slice(0, 3);
	                }
	            },

	            filter: {

	                "TAG": function TAG(nodeNameSelector) {
	                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
	                    return nodeNameSelector === "*" ? function () {
	                        return true;
	                    } : function (elem) {
	                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
	                    };
	                },

	                "CLASS": function CLASS(className) {
	                    var pattern = classCache[className + " "];

	                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
	                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
	                    });
	                },

	                "ATTR": function ATTR(name, operator, check) {
	                    return function (elem) {
	                        var result = Sizzle.attr(elem, name);

	                        if (result == null) {
	                            return operator === "!=";
	                        }
	                        if (!operator) {
	                            return true;
	                        }

	                        result += "";

	                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
	                    };
	                },

	                "CHILD": function CHILD(type, what, argument, first, last) {
	                    var simple = type.slice(0, 3) !== "nth",
	                        forward = type.slice(-4) !== "last",
	                        ofType = what === "of-type";

	                    return first === 1 && last === 0 ?

	                    // Shortcut for :nth-*(n)
	                    function (elem) {
	                        return !!elem.parentNode;
	                    } : function (elem, context, xml) {
	                        var cache,
	                            uniqueCache,
	                            outerCache,
	                            node,
	                            nodeIndex,
	                            start,
	                            dir = simple !== forward ? "nextSibling" : "previousSibling",
	                            parent = elem.parentNode,
	                            name = ofType && elem.nodeName.toLowerCase(),
	                            useCache = !xml && !ofType,
	                            diff = false;

	                        if (parent) {

	                            // :(first|last|only)-(child|of-type)
	                            if (simple) {
	                                while (dir) {
	                                    node = elem;
	                                    while (node = node[dir]) {
	                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

	                                            return false;
	                                        }
	                                    }
	                                    // Reverse direction for :only-* (if we haven't yet done so)
	                                    start = dir = type === "only" && !start && "nextSibling";
	                                }
	                                return true;
	                            }

	                            start = [forward ? parent.firstChild : parent.lastChild];

	                            // non-xml :nth-child(...) stores cache data on `parent`
	                            if (forward && useCache) {

	                                // Seek `elem` from a previously-cached index

	                                // ...in a gzip-friendly way
	                                node = parent;
	                                outerCache = node[expando] || (node[expando] = {});

	                                // Support: IE <9 only
	                                // Defend against cloned attroperties (jQuery gh-1709)
	                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

	                                cache = uniqueCache[type] || [];
	                                nodeIndex = cache[0] === dirruns && cache[1];
	                                diff = nodeIndex && cache[2];
	                                node = nodeIndex && parent.childNodes[nodeIndex];

	                                while (node = ++nodeIndex && node && node[dir] || (

	                                // Fallback to seeking `elem` from the start
	                                diff = nodeIndex = 0) || start.pop()) {

	                                    // When found, cache indexes on `parent` and break
	                                    if (node.nodeType === 1 && ++diff && node === elem) {
	                                        uniqueCache[type] = [dirruns, nodeIndex, diff];
	                                        break;
	                                    }
	                                }
	                            } else {
	                                // Use previously-cached element index if available
	                                if (useCache) {
	                                    // ...in a gzip-friendly way
	                                    node = elem;
	                                    outerCache = node[expando] || (node[expando] = {});

	                                    // Support: IE <9 only
	                                    // Defend against cloned attroperties (jQuery gh-1709)
	                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

	                                    cache = uniqueCache[type] || [];
	                                    nodeIndex = cache[0] === dirruns && cache[1];
	                                    diff = nodeIndex;
	                                }

	                                // xml :nth-child(...)
	                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
	                                if (diff === false) {
	                                    // Use the same loop as above to seek `elem` from the start
	                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

	                                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

	                                            // Cache the index of each encountered element
	                                            if (useCache) {
	                                                outerCache = node[expando] || (node[expando] = {});

	                                                // Support: IE <9 only
	                                                // Defend against cloned attroperties (jQuery gh-1709)
	                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

	                                                uniqueCache[type] = [dirruns, diff];
	                                            }

	                                            if (node === elem) {
	                                                break;
	                                            }
	                                        }
	                                    }
	                                }
	                            }

	                            // Incorporate the offset, then check against cycle size
	                            diff -= last;
	                            return diff === first || diff % first === 0 && diff / first >= 0;
	                        }
	                    };
	                },

	                "PSEUDO": function PSEUDO(pseudo, argument) {
	                    // pseudo-class names are case-insensitive
	                    // http://www.w3.org/TR/selectors/#pseudo-classes
	                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	                    // Remember that setFilters inherits from pseudos
	                    var args,
	                        fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

	                    // The user may use createPseudo to indicate that
	                    // arguments are needed to create the filter function
	                    // just as Sizzle does
	                    if (fn[expando]) {
	                        return fn(argument);
	                    }

	                    // But maintain support for old signatures
	                    if (fn.length > 1) {
	                        args = [pseudo, pseudo, "", argument];
	                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
	                            var idx,
	                                matched = fn(seed, argument),
	                                i = matched.length;
	                            while (i--) {
	                                idx = indexOf(seed, matched[i]);
	                                seed[idx] = !(matches[idx] = matched[i]);
	                            }
	                        }) : function (elem) {
	                            return fn(elem, 0, args);
	                        };
	                    }

	                    return fn;
	                }
	            },

	            pseudos: {
	                // Potentially complex pseudos
	                "not": markFunction(function (selector) {
	                    // Trim the selector passed to compile
	                    // to avoid treating leading and trailing
	                    // spaces as combinators
	                    var input = [],
	                        results = [],
	                        matcher = compile(selector.replace(rtrim, "$1"));

	                    return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
	                        var elem,
	                            unmatched = matcher(seed, null, xml, []),
	                            i = seed.length;

	                        // Match elements unmatched by `matcher`
	                        while (i--) {
	                            if (elem = unmatched[i]) {
	                                seed[i] = !(matches[i] = elem);
	                            }
	                        }
	                    }) : function (elem, context, xml) {
	                        input[0] = elem;
	                        matcher(input, null, xml, results);
	                        // Don't keep the element (issue #299)
	                        input[0] = null;
	                        return !results.pop();
	                    };
	                }),

	                "has": markFunction(function (selector) {
	                    return function (elem) {
	                        return Sizzle(selector, elem).length > 0;
	                    };
	                }),

	                "contains": markFunction(function (text) {
	                    text = text.replace(runescape, funescape);
	                    return function (elem) {
	                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
	                    };
	                }),

	                // "Whether an element is represented by a :lang() selector
	                // is based solely on the element's language value
	                // being equal to the identifier C,
	                // or beginning with the identifier C immediately followed by "-".
	                // The matching of C against the element's language value is performed case-insensitively.
	                // The identifier C does not have to be a valid language name."
	                // http://www.w3.org/TR/selectors/#lang-pseudo
	                "lang": markFunction(function (lang) {
	                    // lang value must be a valid identifier
	                    if (!ridentifier.test(lang || "")) {
	                        Sizzle.error("unsupported lang: " + lang);
	                    }
	                    lang = lang.replace(runescape, funescape).toLowerCase();
	                    return function (elem) {
	                        var elemLang;
	                        do {
	                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

	                                elemLang = elemLang.toLowerCase();
	                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
	                            }
	                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
	                        return false;
	                    };
	                }),

	                // Miscellaneous
	                "target": function target(elem) {
	                    var hash = window.location && window.location.hash;
	                    return hash && hash.slice(1) === elem.id;
	                },

	                "root": function root(elem) {
	                    return elem === docElem;
	                },

	                "focus": function focus(elem) {
	                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
	                },

	                // Boolean properties
	                "enabled": function enabled(elem) {
	                    return elem.disabled === false;
	                },

	                "disabled": function disabled(elem) {
	                    return elem.disabled === true;
	                },

	                "checked": function checked(elem) {
	                    // In CSS3, :checked should return both checked and selected elements
	                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	                    var nodeName = elem.nodeName.toLowerCase();
	                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
	                },

	                "selected": function selected(elem) {
	                    // Accessing this property makes selected-by-default
	                    // options in Safari work properly
	                    if (elem.parentNode) {
	                        elem.parentNode.selectedIndex;
	                    }

	                    return elem.selected === true;
	                },

	                // Contents
	                "empty": function empty(elem) {
	                    // http://www.w3.org/TR/selectors/#empty-pseudo
	                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	                    //   but not by others (comment: 8; processing instruction: 7; etc.)
	                    // nodeType < 6 works because attributes (2) do not appear as children
	                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
	                        if (elem.nodeType < 6) {
	                            return false;
	                        }
	                    }
	                    return true;
	                },

	                "parent": function parent(elem) {
	                    return !Expr.pseudos["empty"](elem);
	                },

	                // Element/input types
	                "header": function header(elem) {
	                    return rheader.test(elem.nodeName);
	                },

	                "input": function input(elem) {
	                    return rinputs.test(elem.nodeName);
	                },

	                "button": function button(elem) {
	                    var name = elem.nodeName.toLowerCase();
	                    return name === "input" && elem.type === "button" || name === "button";
	                },

	                "text": function text(elem) {
	                    var attr;
	                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

	                    // Support: IE<8
	                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	                    (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
	                },

	                // Position-in-collection
	                "first": createPositionalPseudo(function () {
	                    return [0];
	                }),

	                "last": createPositionalPseudo(function (matchIndexes, length) {
	                    return [length - 1];
	                }),

	                "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
	                    return [argument < 0 ? argument + length : argument];
	                }),

	                "even": createPositionalPseudo(function (matchIndexes, length) {
	                    var i = 0;
	                    for (; i < length; i += 2) {
	                        matchIndexes.push(i);
	                    }
	                    return matchIndexes;
	                }),

	                "odd": createPositionalPseudo(function (matchIndexes, length) {
	                    var i = 1;
	                    for (; i < length; i += 2) {
	                        matchIndexes.push(i);
	                    }
	                    return matchIndexes;
	                }),

	                "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
	                    var i = argument < 0 ? argument + length : argument;
	                    for (; --i >= 0;) {
	                        matchIndexes.push(i);
	                    }
	                    return matchIndexes;
	                }),

	                "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
	                    var i = argument < 0 ? argument + length : argument;
	                    for (; ++i < length;) {
	                        matchIndexes.push(i);
	                    }
	                    return matchIndexes;
	                })
	            }
	        };

	        Expr.pseudos["nth"] = Expr.pseudos["eq"];

	        // Add button/input type pseudos
	        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
	            Expr.pseudos[i] = createInputPseudo(i);
	        }
	        for (i in { submit: true, reset: true }) {
	            Expr.pseudos[i] = createButtonPseudo(i);
	        }

	        // Easy API for creating new setFilters
	        function setFilters() {}
	        setFilters.prototype = Expr.filters = Expr.pseudos;
	        Expr.setFilters = new setFilters();

	        tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	            var matched,
	                match,
	                tokens,
	                type,
	                soFar,
	                groups,
	                preFilters,
	                cached = tokenCache[selector + " "];

	            if (cached) {
	                return parseOnly ? 0 : cached.slice(0);
	            }

	            soFar = selector;
	            groups = [];
	            preFilters = Expr.preFilter;

	            while (soFar) {

	                // Comma and first run
	                if (!matched || (match = rcomma.exec(soFar))) {
	                    if (match) {
	                        // Don't consume trailing commas as valid
	                        soFar = soFar.slice(match[0].length) || soFar;
	                    }
	                    groups.push(tokens = []);
	                }

	                matched = false;

	                // Combinators
	                if (match = rcombinators.exec(soFar)) {
	                    matched = match.shift();
	                    tokens.push({
	                        value: matched,
	                        // Cast descendant combinators to space
	                        type: match[0].replace(rtrim, " ")
	                    });
	                    soFar = soFar.slice(matched.length);
	                }

	                // Filters
	                for (type in Expr.filter) {
	                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
	                        matched = match.shift();
	                        tokens.push({
	                            value: matched,
	                            type: type,
	                            matches: match
	                        });
	                        soFar = soFar.slice(matched.length);
	                    }
	                }

	                if (!matched) {
	                    break;
	                }
	            }

	            // Return the length of the invalid excess
	            // if we're just parsing
	            // Otherwise, throw an error or return tokens
	            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
	            // Cache the tokens
	            tokenCache(selector, groups).slice(0);
	        };

	        function toSelector(tokens) {
	            var i = 0,
	                len = tokens.length,
	                selector = "";
	            for (; i < len; i++) {
	                selector += tokens[i].value;
	            }
	            return selector;
	        }

	        function addCombinator(matcher, combinator, base) {
	            var dir = combinator.dir,
	                checkNonElements = base && dir === "parentNode",
	                doneName = done++;

	            return combinator.first ?
	            // Check against closest ancestor/preceding element
	            function (elem, context, xml) {
	                while (elem = elem[dir]) {
	                    if (elem.nodeType === 1 || checkNonElements) {
	                        return matcher(elem, context, xml);
	                    }
	                }
	            } :

	            // Check against all ancestor/preceding elements
	            function (elem, context, xml) {
	                var oldCache,
	                    uniqueCache,
	                    outerCache,
	                    newCache = [dirruns, doneName];

	                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	                if (xml) {
	                    while (elem = elem[dir]) {
	                        if (elem.nodeType === 1 || checkNonElements) {
	                            if (matcher(elem, context, xml)) {
	                                return true;
	                            }
	                        }
	                    }
	                } else {
	                    while (elem = elem[dir]) {
	                        if (elem.nodeType === 1 || checkNonElements) {
	                            outerCache = elem[expando] || (elem[expando] = {});

	                            // Support: IE <9 only
	                            // Defend against cloned attroperties (jQuery gh-1709)
	                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

	                            if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

	                                // Assign to newCache so results back-propagate to previous elements
	                                return newCache[2] = oldCache[2];
	                            } else {
	                                // Reuse newcache so results back-propagate to previous elements
	                                uniqueCache[dir] = newCache;

	                                // A match means we're done; a fail means we have to keep checking
	                                if (newCache[2] = matcher(elem, context, xml)) {
	                                    return true;
	                                }
	                            }
	                        }
	                    }
	                }
	            };
	        }

	        function elementMatcher(matchers) {
	            return matchers.length > 1 ? function (elem, context, xml) {
	                var i = matchers.length;
	                while (i--) {
	                    if (!matchers[i](elem, context, xml)) {
	                        return false;
	                    }
	                }
	                return true;
	            } : matchers[0];
	        }

	        function multipleContexts(selector, contexts, results) {
	            var i = 0,
	                len = contexts.length;
	            for (; i < len; i++) {
	                Sizzle(selector, contexts[i], results);
	            }
	            return results;
	        }

	        function condense(unmatched, map, filter, context, xml) {
	            var elem,
	                newUnmatched = [],
	                i = 0,
	                len = unmatched.length,
	                mapped = map != null;

	            for (; i < len; i++) {
	                if (elem = unmatched[i]) {
	                    if (!filter || filter(elem, context, xml)) {
	                        newUnmatched.push(elem);
	                        if (mapped) {
	                            map.push(i);
	                        }
	                    }
	                }
	            }

	            return newUnmatched;
	        }

	        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	            if (postFilter && !postFilter[expando]) {
	                postFilter = setMatcher(postFilter);
	            }
	            if (postFinder && !postFinder[expando]) {
	                postFinder = setMatcher(postFinder, postSelector);
	            }
	            return markFunction(function (seed, results, context, xml) {
	                var temp,
	                    i,
	                    elem,
	                    preMap = [],
	                    postMap = [],
	                    preexisting = results.length,


	                // Get initial elements from seed or context
	                elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


	                // Prefilter to get matcher input, preserving a map for seed-results synchronization
	                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
	                    matcherOut = matcher ?
	                // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	                postFinder || (seed ? preFilter : preexisting || postFilter) ?

	                // ...intermediate processing is necessary
	                [] :

	                // ...otherwise use results directly
	                results : matcherIn;

	                // Find primary matches
	                if (matcher) {
	                    matcher(matcherIn, matcherOut, context, xml);
	                }

	                // Apply postFilter
	                if (postFilter) {
	                    temp = condense(matcherOut, postMap);
	                    postFilter(temp, [], context, xml);

	                    // Un-match failing elements by moving them back to matcherIn
	                    i = temp.length;
	                    while (i--) {
	                        if (elem = temp[i]) {
	                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
	                        }
	                    }
	                }

	                if (seed) {
	                    if (postFinder || preFilter) {
	                        if (postFinder) {
	                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
	                            temp = [];
	                            i = matcherOut.length;
	                            while (i--) {
	                                if (elem = matcherOut[i]) {
	                                    // Restore matcherIn since elem is not yet a final match
	                                    temp.push(matcherIn[i] = elem);
	                                }
	                            }
	                            postFinder(null, matcherOut = [], temp, xml);
	                        }

	                        // Move matched elements from seed to results to keep them synchronized
	                        i = matcherOut.length;
	                        while (i--) {
	                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

	                                seed[temp] = !(results[temp] = elem);
	                            }
	                        }
	                    }

	                    // Add elements to results, through postFinder if defined
	                } else {
	                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
	                    if (postFinder) {
	                        postFinder(null, results, matcherOut, xml);
	                    } else {
	                        push.apply(results, matcherOut);
	                    }
	                }
	            });
	        }

	        function matcherFromTokens(tokens) {
	            var checkContext,
	                matcher,
	                j,
	                len = tokens.length,
	                leadingRelative = Expr.relative[tokens[0].type],
	                implicitRelative = leadingRelative || Expr.relative[" "],
	                i = leadingRelative ? 1 : 0,


	            // The foundational matcher ensures that elements are reachable from top-level context(s)
	            matchContext = addCombinator(function (elem) {
	                return elem === checkContext;
	            }, implicitRelative, true),
	                matchAnyContext = addCombinator(function (elem) {
	                return indexOf(checkContext, elem) > -1;
	            }, implicitRelative, true),
	                matchers = [function (elem, context, xml) {
	                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
	                // Avoid hanging onto element (issue #299)
	                checkContext = null;
	                return ret;
	            }];

	            for (; i < len; i++) {
	                if (matcher = Expr.relative[tokens[i].type]) {
	                    matchers = [addCombinator(elementMatcher(matchers), matcher)];
	                } else {
	                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

	                    // Return special upon seeing a positional matcher
	                    if (matcher[expando]) {
	                        // Find the next relative operator (if any) for proper handling
	                        j = ++i;
	                        for (; j < len; j++) {
	                            if (Expr.relative[tokens[j].type]) {
	                                break;
	                            }
	                        }
	                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
	                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	                        tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
	                    }
	                    matchers.push(matcher);
	                }
	            }

	            return elementMatcher(matchers);
	        }

	        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
	            var bySet = setMatchers.length > 0,
	                byElement = elementMatchers.length > 0,
	                superMatcher = function superMatcher(seed, context, xml, results, outermost) {
	                var elem,
	                    j,
	                    matcher,
	                    matchedCount = 0,
	                    i = "0",
	                    unmatched = seed && [],
	                    setMatched = [],
	                    contextBackup = outermostContext,

	                // We must always have either seed elements or outermost context
	                elems = seed || byElement && Expr.find["TAG"]("*", outermost),

	                // Use integer dirruns iff this is the outermost matcher
	                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
	                    len = elems.length;

	                if (outermost) {
	                    outermostContext = context === document || context || outermost;
	                }

	                // Add elements passing elementMatchers directly to results
	                // Support: IE<9, Safari
	                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	                for (; i !== len && (elem = elems[i]) != null; i++) {
	                    if (byElement && elem) {
	                        j = 0;
	                        if (!context && elem.ownerDocument !== document) {
	                            setDocument(elem);
	                            xml = !documentIsHTML;
	                        }
	                        while (matcher = elementMatchers[j++]) {
	                            if (matcher(elem, context || document, xml)) {
	                                results.push(elem);
	                                break;
	                            }
	                        }
	                        if (outermost) {
	                            dirruns = dirrunsUnique;
	                        }
	                    }

	                    // Track unmatched elements for set filters
	                    if (bySet) {
	                        // They will have gone through all possible matchers
	                        if (elem = !matcher && elem) {
	                            matchedCount--;
	                        }

	                        // Lengthen the array for every element, matched or not
	                        if (seed) {
	                            unmatched.push(elem);
	                        }
	                    }
	                }

	                // `i` is now the count of elements visited above, and adding it to `matchedCount`
	                // makes the latter nonnegative.
	                matchedCount += i;

	                // Apply set filters to unmatched elements
	                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	                // no element matchers and no seed.
	                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
	                // numerically zero.
	                if (bySet && i !== matchedCount) {
	                    j = 0;
	                    while (matcher = setMatchers[j++]) {
	                        matcher(unmatched, setMatched, context, xml);
	                    }

	                    if (seed) {
	                        // Reintegrate element matches to eliminate the need for sorting
	                        if (matchedCount > 0) {
	                            while (i--) {
	                                if (!(unmatched[i] || setMatched[i])) {
	                                    setMatched[i] = pop.call(results);
	                                }
	                            }
	                        }

	                        // Discard index placeholder values to get only actual matches
	                        setMatched = condense(setMatched);
	                    }

	                    // Add matches to results
	                    push.apply(results, setMatched);

	                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
	                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

	                        Sizzle.uniqueSort(results);
	                    }
	                }

	                // Override manipulation of globals by nested matchers
	                if (outermost) {
	                    dirruns = dirrunsUnique;
	                    outermostContext = contextBackup;
	                }

	                return unmatched;
	            };

	            return bySet ? markFunction(superMatcher) : superMatcher;
	        }

	        compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
	            var i,
	                setMatchers = [],
	                elementMatchers = [],
	                cached = compilerCache[selector + " "];

	            if (!cached) {
	                // Generate a function of recursive functions that can be used to check each element
	                if (!match) {
	                    match = tokenize(selector);
	                }
	                i = match.length;
	                while (i--) {
	                    cached = matcherFromTokens(match[i]);
	                    if (cached[expando]) {
	                        setMatchers.push(cached);
	                    } else {
	                        elementMatchers.push(cached);
	                    }
	                }

	                // Cache the compiled function
	                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

	                // Save selector and tokenization
	                cached.selector = selector;
	            }
	            return cached;
	        };

	        /**
	         * A low-level selection function that works with Sizzle's compiled
	         *  selector functions
	         * @param {String|Function} selector A selector or a pre-compiled
	         *  selector function built with Sizzle.compile
	         * @param {Element} context
	         * @param {Array} [results]
	         * @param {Array} [seed] A set of elements to match against
	         */
	        select = Sizzle.select = function (selector, context, results, seed) {
	            var i,
	                tokens,
	                token,
	                type,
	                find,
	                compiled = typeof selector === "function" && selector,
	                match = !seed && tokenize(selector = compiled.selector || selector);

	            results = results || [];

	            // Try to minimize operations if there is only one selector in the list and no seed
	            // (the latter of which guarantees us context)
	            if (match.length === 1) {

	                // Reduce context if the leading compound selector is an ID
	                tokens = match[0] = match[0].slice(0);
	                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

	                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
	                    if (!context) {
	                        return results;

	                        // Precompiled matchers will still verify ancestry, so step up a level
	                    } else if (compiled) {
	                        context = context.parentNode;
	                    }

	                    selector = selector.slice(tokens.shift().value.length);
	                }

	                // Fetch a seed set for right-to-left matching
	                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
	                while (i--) {
	                    token = tokens[i];

	                    // Abort if we hit a combinator
	                    if (Expr.relative[type = token.type]) {
	                        break;
	                    }
	                    if (find = Expr.find[type]) {
	                        // Search, expanding context for leading sibling combinators
	                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

	                            // If seed is empty or no tokens remain, we can return early
	                            tokens.splice(i, 1);
	                            selector = seed.length && toSelector(tokens);
	                            if (!selector) {
	                                push.apply(results, seed);
	                                return results;
	                            }

	                            break;
	                        }
	                    }
	                }
	            }

	            // Compile and execute a filtering function if one is not provided
	            // Provide `match` to avoid retokenization if we modified the selector above
	            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
	            return results;
	        };

	        // One-time assignments

	        // Sort stability
	        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

	        // Support: Chrome 14-35+
	        // Always assume duplicates if they aren't passed to the comparison function
	        support.detectDuplicates = !!hasDuplicate;

	        // Initialize against the default document
	        setDocument();

	        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	        // Detached nodes confoundingly follow *each other*
	        support.sortDetached = assert(function (div1) {
	            // Should return 1, but returns 4 (following)
	            return div1.compareDocumentPosition(document.createElement("div")) & 1;
	        });

	        // Support: IE<8
	        // Prevent attribute/property "interpolation"
	        // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	        if (!assert(function (div) {
	            div.innerHTML = "<a href='#'></a>";
	            return div.firstChild.getAttribute("href") === "#";
	        })) {
	            addHandle("type|href|height|width", function (elem, name, isXML) {
	                if (!isXML) {
	                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
	                }
	            });
	        }

	        // Support: IE<9
	        // Use defaultValue in place of getAttribute("value")
	        if (!support.attributes || !assert(function (div) {
	            div.innerHTML = "<input/>";
	            div.firstChild.setAttribute("value", "");
	            return div.firstChild.getAttribute("value") === "";
	        })) {
	            addHandle("value", function (elem, name, isXML) {
	                if (!isXML && elem.nodeName.toLowerCase() === "input") {
	                    return elem.defaultValue;
	                }
	            });
	        }

	        // Support: IE<9
	        // Use getAttributeNode to fetch booleans when getAttribute lies
	        if (!assert(function (div) {
	            return div.getAttribute("disabled") == null;
	        })) {
	            addHandle(booleans, function (elem, name, isXML) {
	                var val;
	                if (!isXML) {
	                    return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
	                }
	            });
	        }

	        return Sizzle;
	    }(window);

	    jQuery.find = Sizzle;
	    jQuery.expr = Sizzle.selectors;
	    jQuery.expr[":"] = jQuery.expr.pseudos;
	    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	    jQuery.text = Sizzle.getText;
	    jQuery.isXMLDoc = Sizzle.isXML;
	    jQuery.contains = Sizzle.contains;

	    var dir = function dir(elem, _dir, until) {
	        var matched = [],
	            truncate = until !== undefined;

	        while ((elem = elem[_dir]) && elem.nodeType !== 9) {
	            if (elem.nodeType === 1) {
	                if (truncate && jQuery(elem).is(until)) {
	                    break;
	                }
	                matched.push(elem);
	            }
	        }
	        return matched;
	    };

	    var _siblings = function _siblings(n, elem) {
	        var matched = [];

	        for (; n; n = n.nextSibling) {
	            if (n.nodeType === 1 && n !== elem) {
	                matched.push(n);
	            }
	        }

	        return matched;
	    };

	    var rneedsContext = jQuery.expr.match.needsContext;

	    var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;

	    var risSimple = /^.[^:#\[\.,]*$/;

	    // Implement the identical functionality for filter and not
	    function winnow(elements, qualifier, not) {
	        if (jQuery.isFunction(qualifier)) {
	            return jQuery.grep(elements, function (elem, i) {
	                /* jshint -W018 */
	                return !!qualifier.call(elem, i, elem) !== not;
	            });
	        }

	        if (qualifier.nodeType) {
	            return jQuery.grep(elements, function (elem) {
	                return elem === qualifier !== not;
	            });
	        }

	        if (typeof qualifier === "string") {
	            if (risSimple.test(qualifier)) {
	                return jQuery.filter(qualifier, elements, not);
	            }

	            qualifier = jQuery.filter(qualifier, elements);
	        }

	        return jQuery.grep(elements, function (elem) {
	            return indexOf.call(qualifier, elem) > -1 !== not;
	        });
	    }

	    jQuery.filter = function (expr, elems, not) {
	        var elem = elems[0];

	        if (not) {
	            expr = ":not(" + expr + ")";
	        }

	        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
	            return elem.nodeType === 1;
	        }));
	    };

	    jQuery.fn.extend({
	        find: function find(selector) {
	            var i,
	                len = this.length,
	                ret = [],
	                self = this;

	            if (typeof selector !== "string") {
	                return this.pushStack(jQuery(selector).filter(function () {
	                    for (i = 0; i < len; i++) {
	                        if (jQuery.contains(self[i], this)) {
	                            return true;
	                        }
	                    }
	                }));
	            }

	            for (i = 0; i < len; i++) {
	                jQuery.find(selector, self[i], ret);
	            }

	            // Needed because $( selector, context ) becomes $( context ).find( selector )
	            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
	            ret.selector = this.selector ? this.selector + " " + selector : selector;
	            return ret;
	        },
	        filter: function filter(selector) {
	            return this.pushStack(winnow(this, selector || [], false));
	        },
	        not: function not(selector) {
	            return this.pushStack(winnow(this, selector || [], true));
	        },
	        is: function is(selector) {
	            return !!winnow(this,

	            // If this is a positional/relative selector, check membership in the returned set
	            // so $("p:first").is("p:last") won't return true for a doc with two "p".
	            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
	        }
	    });

	    // Initialize a jQuery object


	    // A central reference to the root jQuery(document)
	    var rootjQuery,


	    // A simple way to check for HTML strings
	    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	    // Strict HTML recognition (#11290: must start with <)
	    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	        init = jQuery.fn.init = function (selector, context, root) {
	        var match, elem;

	        // HANDLE: $(""), $(null), $(undefined), $(false)
	        if (!selector) {
	            return this;
	        }

	        // Method init() accepts an alternate rootjQuery
	        // so migrate can support jQuery.sub (gh-2101)
	        root = root || rootjQuery;

	        // Handle HTML strings
	        if (typeof selector === "string") {
	            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

	                // Assume that strings that start and end with <> are HTML and skip the regex check
	                match = [null, selector, null];
	            } else {
	                match = rquickExpr.exec(selector);
	            }

	            // Match html or make sure no context is specified for #id
	            if (match && (match[1] || !context)) {

	                // HANDLE: $(html) -> $(array)
	                if (match[1]) {
	                    context = context instanceof jQuery ? context[0] : context;

	                    // Option to run scripts is true for back-compat
	                    // Intentionally let the error be thrown if parseHTML is not present
	                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

	                    // HANDLE: $(html, props)
	                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
	                        for (match in context) {

	                            // Properties of context are called as methods if possible
	                            if (jQuery.isFunction(this[match])) {
	                                this[match](context[match]);

	                                // ...and otherwise set as attributes
	                            } else {
	                                this.attr(match, context[match]);
	                            }
	                        }
	                    }

	                    return this;

	                    // HANDLE: $(#id)
	                } else {
	                    elem = document.getElementById(match[2]);

	                    // Support: Blackberry 4.6
	                    // gEBID returns nodes no longer in the document (#6963)
	                    if (elem && elem.parentNode) {

	                        // Inject the element directly into the jQuery object
	                        this.length = 1;
	                        this[0] = elem;
	                    }

	                    this.context = document;
	                    this.selector = selector;
	                    return this;
	                }

	                // HANDLE: $(expr, $(...))
	            } else if (!context || context.jquery) {
	                return (context || root).find(selector);

	                // HANDLE: $(expr, context)
	                // (which is just equivalent to: $(context).find(expr)
	            } else {
	                return this.constructor(context).find(selector);
	            }

	            // HANDLE: $(DOMElement)
	        } else if (selector.nodeType) {
	            this.context = this[0] = selector;
	            this.length = 1;
	            return this;

	            // HANDLE: $(function)
	            // Shortcut for document ready
	        } else if (jQuery.isFunction(selector)) {
	            return root.ready !== undefined ? root.ready(selector) :

	            // Execute immediately if ready is not present
	            selector(jQuery);
	        }

	        if (selector.selector !== undefined) {
	            this.selector = selector.selector;
	            this.context = selector.context;
	        }

	        return jQuery.makeArray(selector, this);
	    };

	    // Give the init function the jQuery prototype for later instantiation
	    init.prototype = jQuery.fn;

	    // Initialize central reference
	    rootjQuery = jQuery(document);

	    var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	    // Methods guaranteed to produce a unique set when starting from a unique set
	    guaranteedUnique = {
	        children: true,
	        contents: true,
	        next: true,
	        prev: true
	    };

	    jQuery.fn.extend({
	        has: function has(target) {
	            var targets = jQuery(target, this),
	                l = targets.length;

	            return this.filter(function () {
	                var i = 0;
	                for (; i < l; i++) {
	                    if (jQuery.contains(this, targets[i])) {
	                        return true;
	                    }
	                }
	            });
	        },

	        closest: function closest(selectors, context) {
	            var cur,
	                i = 0,
	                l = this.length,
	                matched = [],
	                pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

	            for (; i < l; i++) {
	                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

	                    // Always skip document fragments
	                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

	                    // Don't pass non-elements to Sizzle
	                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

	                        matched.push(cur);
	                        break;
	                    }
	                }
	            }

	            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
	        },

	        // Determine the position of an element within the set
	        index: function index(elem) {

	            // No argument, return index in parent
	            if (!elem) {
	                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	            }

	            // Index in selector
	            if (typeof elem === "string") {
	                return indexOf.call(jQuery(elem), this[0]);
	            }

	            // Locate the position of the desired element
	            return indexOf.call(this,

	            // If it receives a jQuery object, the first element is used
	            elem.jquery ? elem[0] : elem);
	        },

	        add: function add(selector, context) {
	            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
	        },

	        addBack: function addBack(selector) {
	            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
	        }
	    });

	    function sibling(cur, dir) {
	        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
	        return cur;
	    }

	    jQuery.each({
	        parent: function parent(elem) {
	            var parent = elem.parentNode;
	            return parent && parent.nodeType !== 11 ? parent : null;
	        },
	        parents: function parents(elem) {
	            return dir(elem, "parentNode");
	        },
	        parentsUntil: function parentsUntil(elem, i, until) {
	            return dir(elem, "parentNode", until);
	        },
	        next: function next(elem) {
	            return sibling(elem, "nextSibling");
	        },
	        prev: function prev(elem) {
	            return sibling(elem, "previousSibling");
	        },
	        nextAll: function nextAll(elem) {
	            return dir(elem, "nextSibling");
	        },
	        prevAll: function prevAll(elem) {
	            return dir(elem, "previousSibling");
	        },
	        nextUntil: function nextUntil(elem, i, until) {
	            return dir(elem, "nextSibling", until);
	        },
	        prevUntil: function prevUntil(elem, i, until) {
	            return dir(elem, "previousSibling", until);
	        },
	        siblings: function siblings(elem) {
	            return _siblings((elem.parentNode || {}).firstChild, elem);
	        },
	        children: function children(elem) {
	            return _siblings(elem.firstChild);
	        },
	        contents: function contents(elem) {
	            return elem.contentDocument || jQuery.merge([], elem.childNodes);
	        }
	    }, function (name, fn) {
	        jQuery.fn[name] = function (until, selector) {
	            var matched = jQuery.map(this, fn, until);

	            if (name.slice(-5) !== "Until") {
	                selector = until;
	            }

	            if (selector && typeof selector === "string") {
	                matched = jQuery.filter(selector, matched);
	            }

	            if (this.length > 1) {

	                // Remove duplicates
	                if (!guaranteedUnique[name]) {
	                    jQuery.uniqueSort(matched);
	                }

	                // Reverse order for parents* and prev-derivatives
	                if (rparentsprev.test(name)) {
	                    matched.reverse();
	                }
	            }

	            return this.pushStack(matched);
	        };
	    });
	    var rnotwhite = /\S+/g;

	    // Convert String-formatted options into Object-formatted ones
	    function createOptions(options) {
	        var object = {};
	        jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
	            object[flag] = true;
	        });
	        return object;
	    }

	    /*
	     * Create a callback list using the following parameters:
	     *
	     *	options: an optional list of space-separated options that will change how
	     *			the callback list behaves or a more traditional option object
	     *
	     * By default a callback list will act like an event callback list and can be
	     * "fired" multiple times.
	     *
	     * Possible options:
	     *
	     *	once:			will ensure the callback list can only be fired once (like a Deferred)
	     *
	     *	memory:			will keep track of previous values and will call any callback added
	     *					after the list has been fired right away with the latest "memorized"
	     *					values (like a Deferred)
	     *
	     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	     *
	     *	stopOnFalse:	interrupt callings when a callback returns false
	     *
	     */
	    jQuery.Callbacks = function (options) {

	        // Convert options from String-formatted to Object-formatted if needed
	        // (we check in cache first)
	        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

	        var // Flag to know if list is currently firing
	        firing,


	        // Last fire value for non-forgettable lists
	        memory,


	        // Flag to know if list was already fired
	        _fired,


	        // Flag to prevent firing
	        _locked,


	        // Actual callback list
	        list = [],


	        // Queue of execution data for repeatable lists
	        queue = [],


	        // Index of currently firing callback (modified by add/remove as needed)
	        firingIndex = -1,


	        // Fire callbacks
	        fire = function fire() {

	            // Enforce single-firing
	            _locked = options.once;

	            // Execute callbacks for all pending executions,
	            // respecting firingIndex overrides and runtime changes
	            _fired = firing = true;
	            for (; queue.length; firingIndex = -1) {
	                memory = queue.shift();
	                while (++firingIndex < list.length) {

	                    // Run callback and check for early termination
	                    if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

	                        // Jump to end and forget the data so .add doesn't re-fire
	                        firingIndex = list.length;
	                        memory = false;
	                    }
	                }
	            }

	            // Forget the data if we're done with it
	            if (!options.memory) {
	                memory = false;
	            }

	            firing = false;

	            // Clean up if we're done firing for good
	            if (_locked) {

	                // Keep an empty list if we have data for future add calls
	                if (memory) {
	                    list = [];

	                    // Otherwise, this object is spent
	                } else {
	                    list = "";
	                }
	            }
	        },


	        // Actual Callbacks object
	        self = {

	            // Add a callback or a collection of callbacks to the list
	            add: function add() {
	                if (list) {

	                    // If we have memory from a past run, we should fire after adding
	                    if (memory && !firing) {
	                        firingIndex = list.length - 1;
	                        queue.push(memory);
	                    }

	                    (function add(args) {
	                        jQuery.each(args, function (_, arg) {
	                            if (jQuery.isFunction(arg)) {
	                                if (!options.unique || !self.has(arg)) {
	                                    list.push(arg);
	                                }
	                            } else if (arg && arg.length && jQuery.type(arg) !== "string") {

	                                // Inspect recursively
	                                add(arg);
	                            }
	                        });
	                    })(arguments);

	                    if (memory && !firing) {
	                        fire();
	                    }
	                }
	                return this;
	            },

	            // Remove a callback from the list
	            remove: function remove() {
	                jQuery.each(arguments, function (_, arg) {
	                    var index;
	                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
	                        list.splice(index, 1);

	                        // Handle firing indexes
	                        if (index <= firingIndex) {
	                            firingIndex--;
	                        }
	                    }
	                });
	                return this;
	            },

	            // Check if a given callback is in the list.
	            // If no argument is given, return whether or not list has callbacks attached.
	            has: function has(fn) {
	                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
	            },

	            // Remove all callbacks from the list
	            empty: function empty() {
	                if (list) {
	                    list = [];
	                }
	                return this;
	            },

	            // Disable .fire and .add
	            // Abort any current/pending executions
	            // Clear all callbacks and values
	            disable: function disable() {
	                _locked = queue = [];
	                list = memory = "";
	                return this;
	            },
	            disabled: function disabled() {
	                return !list;
	            },

	            // Disable .fire
	            // Also disable .add unless we have memory (since it would have no effect)
	            // Abort any pending executions
	            lock: function lock() {
	                _locked = queue = [];
	                if (!memory) {
	                    list = memory = "";
	                }
	                return this;
	            },
	            locked: function locked() {
	                return !!_locked;
	            },

	            // Call all callbacks with the given context and arguments
	            fireWith: function fireWith(context, args) {
	                if (!_locked) {
	                    args = args || [];
	                    args = [context, args.slice ? args.slice() : args];
	                    queue.push(args);
	                    if (!firing) {
	                        fire();
	                    }
	                }
	                return this;
	            },

	            // Call all the callbacks with the given arguments
	            fire: function fire() {
	                self.fireWith(this, arguments);
	                return this;
	            },

	            // To know if the callbacks have already been called at least once
	            fired: function fired() {
	                return !!_fired;
	            }
	        };

	        return self;
	    };

	    jQuery.extend({

	        Deferred: function Deferred(func) {
	            var tuples = [

	            // action, add listener, listener list, final state
	            ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
	                _state = "pending",
	                _promise = {
	                state: function state() {
	                    return _state;
	                },
	                always: function always() {
	                    deferred.done(arguments).fail(arguments);
	                    return this;
	                },
	                then: function then() /* fnDone, fnFail, fnProgress */{
	                    var fns = arguments;
	                    return jQuery.Deferred(function (newDefer) {
	                        jQuery.each(tuples, function (i, tuple) {
	                            var fn = jQuery.isFunction(fns[i]) && fns[i];

	                            // deferred[ done | fail | progress ] for forwarding actions to newDefer
	                            deferred[tuple[1]](function () {
	                                var returned = fn && fn.apply(this, arguments);
	                                if (returned && jQuery.isFunction(returned.promise)) {
	                                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
	                                } else {
	                                    newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
	                                }
	                            });
	                        });
	                        fns = null;
	                    }).promise();
	                },

	                // Get a promise for this deferred
	                // If obj is provided, the promise aspect is added to the object
	                promise: function promise(obj) {
	                    return obj != null ? jQuery.extend(obj, _promise) : _promise;
	                }
	            },
	                deferred = {};

	            // Keep pipe for back-compat
	            _promise.pipe = _promise.then;

	            // Add list-specific methods
	            jQuery.each(tuples, function (i, tuple) {
	                var list = tuple[2],
	                    stateString = tuple[3];

	                // promise[ done | fail | progress ] = list.add
	                _promise[tuple[1]] = list.add;

	                // Handle state
	                if (stateString) {
	                    list.add(function () {

	                        // state = [ resolved | rejected ]
	                        _state = stateString;

	                        // [ reject_list | resolve_list ].disable; progress_list.lock
	                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
	                }

	                // deferred[ resolve | reject | notify ]
	                deferred[tuple[0]] = function () {
	                    deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
	                    return this;
	                };
	                deferred[tuple[0] + "With"] = list.fireWith;
	            });

	            // Make the deferred a promise
	            _promise.promise(deferred);

	            // Call given func if any
	            if (func) {
	                func.call(deferred, deferred);
	            }

	            // All done!
	            return deferred;
	        },

	        // Deferred helper
	        when: function when(subordinate /* , ..., subordinateN */) {
	            var i = 0,
	                resolveValues = _slice.call(arguments),
	                length = resolveValues.length,


	            // the count of uncompleted subordinates
	            remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


	            // the master Deferred.
	            // If resolveValues consist of only a single Deferred, just use that.
	            deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


	            // Update function for both resolve and progress values
	            updateFunc = function updateFunc(i, contexts, values) {
	                return function (value) {
	                    contexts[i] = this;
	                    values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
	                    if (values === progressValues) {
	                        deferred.notifyWith(contexts, values);
	                    } else if (! --remaining) {
	                        deferred.resolveWith(contexts, values);
	                    }
	                };
	            },
	                progressValues,
	                progressContexts,
	                resolveContexts;

	            // Add listeners to Deferred subordinates; treat others as resolved
	            if (length > 1) {
	                progressValues = new Array(length);
	                progressContexts = new Array(length);
	                resolveContexts = new Array(length);
	                for (; i < length; i++) {
	                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
	                        resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
	                    } else {
	                        --remaining;
	                    }
	                }
	            }

	            // If we're not waiting on anything, resolve the master
	            if (!remaining) {
	                deferred.resolveWith(resolveContexts, resolveValues);
	            }

	            return deferred.promise();
	        }
	    });

	    // The deferred used on DOM ready
	    var readyList;

	    jQuery.fn.ready = function (fn) {

	        // Add the callback
	        jQuery.ready.promise().done(fn);

	        return this;
	    };

	    jQuery.extend({

	        // Is the DOM ready to be used? Set to true once it occurs.
	        isReady: false,

	        // A counter to track how many items to wait for before
	        // the ready event fires. See #6781
	        readyWait: 1,

	        // Hold (or release) the ready event
	        holdReady: function holdReady(hold) {
	            if (hold) {
	                jQuery.readyWait++;
	            } else {
	                jQuery.ready(true);
	            }
	        },

	        // Handle when the DOM is ready
	        ready: function ready(wait) {

	            // Abort if there are pending holds or we're already ready
	            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
	                return;
	            }

	            // Remember that the DOM is ready
	            jQuery.isReady = true;

	            // If a normal DOM Ready event fired, decrement, and wait if need be
	            if (wait !== true && --jQuery.readyWait > 0) {
	                return;
	            }

	            // If there are functions bound, to execute
	            readyList.resolveWith(document, [jQuery]);

	            // Trigger any bound ready events
	            if (jQuery.fn.triggerHandler) {
	                jQuery(document).triggerHandler("ready");
	                jQuery(document).off("ready");
	            }
	        }
	    });

	    /**
	     * The ready event handler and self cleanup method
	     */
	    function completed() {
	        document.removeEventListener("DOMContentLoaded", completed);
	        window.removeEventListener("load", completed);
	        jQuery.ready();
	    }

	    jQuery.ready.promise = function (obj) {
	        if (!readyList) {

	            readyList = jQuery.Deferred();

	            // Catch cases where $(document).ready() is called
	            // after the browser event has already occurred.
	            // Support: IE9-10 only
	            // Older IE sometimes signals "interactive" too soon
	            if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

	                // Handle it asynchronously to allow scripts the opportunity to delay ready
	                window.setTimeout(jQuery.ready);
	            } else {

	                // Use the handy event callback
	                document.addEventListener("DOMContentLoaded", completed);

	                // A fallback to window.onload, that will always work
	                window.addEventListener("load", completed);
	            }
	        }
	        return readyList.promise(obj);
	    };

	    // Kick off the DOM ready check even if the user does not
	    jQuery.ready.promise();

	    // Multifunctional method to get and set values of a collection
	    // The value/s can optionally be executed if it's a function
	    var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
	        var i = 0,
	            len = elems.length,
	            bulk = key == null;

	        // Sets many values
	        if (jQuery.type(key) === "object") {
	            chainable = true;
	            for (i in key) {
	                access(elems, fn, i, key[i], true, emptyGet, raw);
	            }

	            // Sets one value
	        } else if (value !== undefined) {
	            chainable = true;

	            if (!jQuery.isFunction(value)) {
	                raw = true;
	            }

	            if (bulk) {

	                // Bulk operations run against the entire set
	                if (raw) {
	                    fn.call(elems, value);
	                    fn = null;

	                    // ...except when executing function values
	                } else {
	                    bulk = fn;
	                    fn = function fn(elem, key, value) {
	                        return bulk.call(jQuery(elem), value);
	                    };
	                }
	            }

	            if (fn) {
	                for (; i < len; i++) {
	                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
	                }
	            }
	        }

	        return chainable ? elems :

	        // Gets
	        bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
	    };
	    var acceptData = function acceptData(owner) {

	        // Accepts only:
	        //  - Node
	        //    - Node.ELEMENT_NODE
	        //    - Node.DOCUMENT_NODE
	        //  - Object
	        //    - Any
	        /* jshint -W018 */
	        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	    };

	    function Data() {
	        this.expando = jQuery.expando + Data.uid++;
	    }

	    Data.uid = 1;

	    Data.prototype = {

	        register: function register(owner, initial) {
	            var value = initial || {};

	            // If it is a node unlikely to be stringify-ed or looped over
	            // use plain assignment
	            if (owner.nodeType) {
	                owner[this.expando] = value;

	                // Otherwise secure it in a non-enumerable, non-writable property
	                // configurability must be true to allow the property to be
	                // deleted with the delete operator
	            } else {
	                Object.defineProperty(owner, this.expando, {
	                    value: value,
	                    writable: true,
	                    configurable: true
	                });
	            }
	            return owner[this.expando];
	        },
	        cache: function cache(owner) {

	            // We can accept data for non-element nodes in modern browsers,
	            // but we should not, see #8335.
	            // Always return an empty object.
	            if (!acceptData(owner)) {
	                return {};
	            }

	            // Check if the owner object already has a cache
	            var value = owner[this.expando];

	            // If not, create one
	            if (!value) {
	                value = {};

	                // We can accept data for non-element nodes in modern browsers,
	                // but we should not, see #8335.
	                // Always return an empty object.
	                if (acceptData(owner)) {

	                    // If it is a node unlikely to be stringify-ed or looped over
	                    // use plain assignment
	                    if (owner.nodeType) {
	                        owner[this.expando] = value;

	                        // Otherwise secure it in a non-enumerable property
	                        // configurable must be true to allow the property to be
	                        // deleted when data is removed
	                    } else {
	                        Object.defineProperty(owner, this.expando, {
	                            value: value,
	                            configurable: true
	                        });
	                    }
	                }
	            }

	            return value;
	        },
	        set: function set(owner, data, value) {
	            var prop,
	                cache = this.cache(owner);

	            // Handle: [ owner, key, value ] args
	            if (typeof data === "string") {
	                cache[data] = value;

	                // Handle: [ owner, { properties } ] args
	            } else {

	                // Copy the properties one-by-one to the cache object
	                for (prop in data) {
	                    cache[prop] = data[prop];
	                }
	            }
	            return cache;
	        },
	        get: function get(owner, key) {
	            return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
	        },
	        access: function access(owner, key, value) {
	            var stored;

	            // In cases where either:
	            //
	            //   1. No key was specified
	            //   2. A string key was specified, but no value provided
	            //
	            // Take the "read" path and allow the get method to determine
	            // which value to return, respectively either:
	            //
	            //   1. The entire cache object
	            //   2. The data stored at the key
	            //
	            if (key === undefined || key && typeof key === "string" && value === undefined) {

	                stored = this.get(owner, key);

	                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
	            }

	            // When the key is not a string, or both a key and value
	            // are specified, set or extend (existing objects) with either:
	            //
	            //   1. An object of properties
	            //   2. A key and value
	            //
	            this.set(owner, key, value);

	            // Since the "set" path can have two possible entry points
	            // return the expected data based on which path was taken[*]
	            return value !== undefined ? value : key;
	        },
	        remove: function remove(owner, key) {
	            var i,
	                name,
	                camel,
	                cache = owner[this.expando];

	            if (cache === undefined) {
	                return;
	            }

	            if (key === undefined) {
	                this.register(owner);
	            } else {

	                // Support array or space separated string of keys
	                if (jQuery.isArray(key)) {

	                    // If "name" is an array of keys...
	                    // When data is initially created, via ("key", "val") signature,
	                    // keys will be converted to camelCase.
	                    // Since there is no way to tell _how_ a key was added, remove
	                    // both plain key and camelCase key. #12786
	                    // This will only penalize the array argument path.
	                    name = key.concat(key.map(jQuery.camelCase));
	                } else {
	                    camel = jQuery.camelCase(key);

	                    // Try the string as a key before any manipulation
	                    if (key in cache) {
	                        name = [key, camel];
	                    } else {

	                        // If a key with the spaces exists, use it.
	                        // Otherwise, create an array by matching non-whitespace
	                        name = camel;
	                        name = name in cache ? [name] : name.match(rnotwhite) || [];
	                    }
	                }

	                i = name.length;

	                while (i--) {
	                    delete cache[name[i]];
	                }
	            }

	            // Remove the expando if there's no more data
	            if (key === undefined || jQuery.isEmptyObject(cache)) {

	                // Support: Chrome <= 35-45+
	                // Webkit & Blink performance suffers when deleting properties
	                // from DOM nodes, so set to undefined instead
	                // https://code.google.com/p/chromium/issues/detail?id=378607
	                if (owner.nodeType) {
	                    owner[this.expando] = undefined;
	                } else {
	                    delete owner[this.expando];
	                }
	            }
	        },
	        hasData: function hasData(owner) {
	            var cache = owner[this.expando];
	            return cache !== undefined && !jQuery.isEmptyObject(cache);
	        }
	    };
	    var dataPriv = new Data();

	    var dataUser = new Data();

	    //	Implementation Summary
	    //
	    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
	    //	2. Improve the module's maintainability by reducing the storage
	    //		paths to a single mechanism.
	    //	3. Use the same single mechanism to support "private" and "user" data.
	    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
	    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	        rmultiDash = /[A-Z]/g;

	    function dataAttr(elem, key, data) {
	        var name;

	        // If nothing was found internally, try to fetch any
	        // data from the HTML5 data-* attribute
	        if (data === undefined && elem.nodeType === 1) {
	            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
	            data = elem.getAttribute(name);

	            if (typeof data === "string") {
	                try {
	                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null :

	                    // Only convert to a number if it doesn't change the string
	                    +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
	                } catch (e) {}

	                // Make sure we set the data so it isn't changed later
	                dataUser.set(elem, key, data);
	            } else {
	                data = undefined;
	            }
	        }
	        return data;
	    }

	    jQuery.extend({
	        hasData: function hasData(elem) {
	            return dataUser.hasData(elem) || dataPriv.hasData(elem);
	        },

	        data: function data(elem, name, _data) {
	            return dataUser.access(elem, name, _data);
	        },

	        removeData: function removeData(elem, name) {
	            dataUser.remove(elem, name);
	        },

	        // TODO: Now that all calls to _data and _removeData have been replaced
	        // with direct calls to dataPriv methods, these can be deprecated.
	        _data: function _data(elem, name, data) {
	            return dataPriv.access(elem, name, data);
	        },

	        _removeData: function _removeData(elem, name) {
	            dataPriv.remove(elem, name);
	        }
	    });

	    jQuery.fn.extend({
	        data: function data(key, value) {
	            var i,
	                name,
	                data,
	                elem = this[0],
	                attrs = elem && elem.attributes;

	            // Gets all values
	            if (key === undefined) {
	                if (this.length) {
	                    data = dataUser.get(elem);

	                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
	                        i = attrs.length;
	                        while (i--) {

	                            // Support: IE11+
	                            // The attrs elements can be null (#14894)
	                            if (attrs[i]) {
	                                name = attrs[i].name;
	                                if (name.indexOf("data-") === 0) {
	                                    name = jQuery.camelCase(name.slice(5));
	                                    dataAttr(elem, name, data[name]);
	                                }
	                            }
	                        }
	                        dataPriv.set(elem, "hasDataAttrs", true);
	                    }
	                }

	                return data;
	            }

	            // Sets multiple values
	            if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
	                return this.each(function () {
	                    dataUser.set(this, key);
	                });
	            }

	            return access(this, function (value) {
	                var data, camelKey;

	                // The calling jQuery object (element matches) is not empty
	                // (and therefore has an element appears at this[ 0 ]) and the
	                // `value` parameter was not undefined. An empty jQuery object
	                // will result in `undefined` for elem = this[ 0 ] which will
	                // throw an exception if an attempt to read a data cache is made.
	                if (elem && value === undefined) {

	                    // Attempt to get data from the cache
	                    // with the key as-is
	                    data = dataUser.get(elem, key) ||

	                    // Try to find dashed key if it exists (gh-2779)
	                    // This is for 2.2.x only
	                    dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());

	                    if (data !== undefined) {
	                        return data;
	                    }

	                    camelKey = jQuery.camelCase(key);

	                    // Attempt to get data from the cache
	                    // with the key camelized
	                    data = dataUser.get(elem, camelKey);
	                    if (data !== undefined) {
	                        return data;
	                    }

	                    // Attempt to "discover" the data in
	                    // HTML5 custom data-* attrs
	                    data = dataAttr(elem, camelKey, undefined);
	                    if (data !== undefined) {
	                        return data;
	                    }

	                    // We tried really hard, but the data doesn't exist.
	                    return;
	                }

	                // Set the data...
	                camelKey = jQuery.camelCase(key);
	                this.each(function () {

	                    // First, attempt to store a copy or reference of any
	                    // data that might've been store with a camelCased key.
	                    var data = dataUser.get(this, camelKey);

	                    // For HTML5 data-* attribute interop, we have to
	                    // store property names with dashes in a camelCase form.
	                    // This might not apply to all properties...*
	                    dataUser.set(this, camelKey, value);

	                    // *... In the case of properties that might _actually_
	                    // have dashes, we need to also store a copy of that
	                    // unchanged property.
	                    if (key.indexOf("-") > -1 && data !== undefined) {
	                        dataUser.set(this, key, value);
	                    }
	                });
	            }, null, value, arguments.length > 1, null, true);
	        },

	        removeData: function removeData(key) {
	            return this.each(function () {
	                dataUser.remove(this, key);
	            });
	        }
	    });

	    jQuery.extend({
	        queue: function queue(elem, type, data) {
	            var queue;

	            if (elem) {
	                type = (type || "fx") + "queue";
	                queue = dataPriv.get(elem, type);

	                // Speed up dequeue by getting out quickly if this is just a lookup
	                if (data) {
	                    if (!queue || jQuery.isArray(data)) {
	                        queue = dataPriv.access(elem, type, jQuery.makeArray(data));
	                    } else {
	                        queue.push(data);
	                    }
	                }
	                return queue || [];
	            }
	        },

	        dequeue: function dequeue(elem, type) {
	            type = type || "fx";

	            var queue = jQuery.queue(elem, type),
	                startLength = queue.length,
	                fn = queue.shift(),
	                hooks = jQuery._queueHooks(elem, type),
	                next = function next() {
	                jQuery.dequeue(elem, type);
	            };

	            // If the fx queue is dequeued, always remove the progress sentinel
	            if (fn === "inprogress") {
	                fn = queue.shift();
	                startLength--;
	            }

	            if (fn) {

	                // Add a progress sentinel to prevent the fx queue from being
	                // automatically dequeued
	                if (type === "fx") {
	                    queue.unshift("inprogress");
	                }

	                // Clear up the last queue stop function
	                delete hooks.stop;
	                fn.call(elem, next, hooks);
	            }

	            if (!startLength && hooks) {
	                hooks.empty.fire();
	            }
	        },

	        // Not public - generate a queueHooks object, or return the current one
	        _queueHooks: function _queueHooks(elem, type) {
	            var key = type + "queueHooks";
	            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
	                empty: jQuery.Callbacks("once memory").add(function () {
	                    dataPriv.remove(elem, [type + "queue", key]);
	                })
	            });
	        }
	    });

	    jQuery.fn.extend({
	        queue: function queue(type, data) {
	            var setter = 2;

	            if (typeof type !== "string") {
	                data = type;
	                type = "fx";
	                setter--;
	            }

	            if (arguments.length < setter) {
	                return jQuery.queue(this[0], type);
	            }

	            return data === undefined ? this : this.each(function () {
	                var queue = jQuery.queue(this, type, data);

	                // Ensure a hooks for this queue
	                jQuery._queueHooks(this, type);

	                if (type === "fx" && queue[0] !== "inprogress") {
	                    jQuery.dequeue(this, type);
	                }
	            });
	        },
	        dequeue: function dequeue(type) {
	            return this.each(function () {
	                jQuery.dequeue(this, type);
	            });
	        },
	        clearQueue: function clearQueue(type) {
	            return this.queue(type || "fx", []);
	        },

	        // Get a promise resolved when queues of a certain type
	        // are emptied (fx is the type by default)
	        promise: function promise(type, obj) {
	            var tmp,
	                count = 1,
	                defer = jQuery.Deferred(),
	                elements = this,
	                i = this.length,
	                resolve = function resolve() {
	                if (! --count) {
	                    defer.resolveWith(elements, [elements]);
	                }
	            };

	            if (typeof type !== "string") {
	                obj = type;
	                type = undefined;
	            }
	            type = type || "fx";

	            while (i--) {
	                tmp = dataPriv.get(elements[i], type + "queueHooks");
	                if (tmp && tmp.empty) {
	                    count++;
	                    tmp.empty.add(resolve);
	                }
	            }
	            resolve();
	            return defer.promise(obj);
	        }
	    });
	    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	    var cssExpand = ["Top", "Right", "Bottom", "Left"];

	    var isHidden = function isHidden(elem, el) {

	        // isHidden might be called from jQuery#filter function;
	        // in that case, element will be second argument
	        elem = el || elem;
	        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	    };

	    function adjustCSS(elem, prop, valueParts, tween) {
	        var adjusted,
	            scale = 1,
	            maxIterations = 20,
	            currentValue = tween ? function () {
	            return tween.cur();
	        } : function () {
	            return jQuery.css(elem, prop, "");
	        },
	            initial = currentValue(),
	            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


	        // Starting value computation is required for potential unit mismatches
	        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

	        if (initialInUnit && initialInUnit[3] !== unit) {

	            // Trust units reported by jQuery.css
	            unit = unit || initialInUnit[3];

	            // Make sure we update the tween properties later on
	            valueParts = valueParts || [];

	            // Iteratively approximate from a nonzero starting point
	            initialInUnit = +initial || 1;

	            do {

	                // If previous iteration zeroed out, double until we get *something*.
	                // Use string for doubling so we don't accidentally see scale as unchanged below
	                scale = scale || ".5";

	                // Adjust and apply
	                initialInUnit = initialInUnit / scale;
	                jQuery.style(elem, prop, initialInUnit + unit);

	                // Update scale, tolerating zero or NaN from tween.cur()
	                // Break the loop if scale is unchanged or perfect, or if we've just had enough.
	            } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
	        }

	        if (valueParts) {
	            initialInUnit = +initialInUnit || +initial || 0;

	            // Apply relative offset (+=/-=) if specified
	            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
	            if (tween) {
	                tween.unit = unit;
	                tween.start = initialInUnit;
	                tween.end = adjusted;
	            }
	        }
	        return adjusted;
	    }
	    var rcheckableType = /^(?:checkbox|radio)$/i;

	    var rtagName = /<([\w:-]+)/;

	    var rscriptType = /^$|\/(?:java|ecma)script/i;

	    // We have to close these tags to support XHTML (#13200)
	    var wrapMap = {

	        // Support: IE9
	        option: [1, "<select multiple='multiple'>", "</select>"],

	        // XHTML parsers do not magically insert elements in the
	        // same way that tag soup parsers do. So we cannot shorten
	        // this by omitting <tbody> or other required elements.
	        thead: [1, "<table>", "</table>"],
	        col: [2, "<table><colgroup>", "</colgroup></table>"],
	        tr: [2, "<table><tbody>", "</tbody></table>"],
	        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

	        _default: [0, "", ""]
	    };

	    // Support: IE9
	    wrapMap.optgroup = wrapMap.option;

	    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	    wrapMap.th = wrapMap.td;

	    function getAll(context, tag) {

	        // Support: IE9-11+
	        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
	        var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];

	        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
	    }

	    // Mark scripts as having already been evaluated
	    function setGlobalEval(elems, refElements) {
	        var i = 0,
	            l = elems.length;

	        for (; i < l; i++) {
	            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
	        }
	    }

	    var rhtml = /<|&#?\w+;/;

	    function buildFragment(elems, context, scripts, selection, ignored) {
	        var elem,
	            tmp,
	            tag,
	            wrap,
	            contains,
	            j,
	            fragment = context.createDocumentFragment(),
	            nodes = [],
	            i = 0,
	            l = elems.length;

	        for (; i < l; i++) {
	            elem = elems[i];

	            if (elem || elem === 0) {

	                // Add nodes directly
	                if (jQuery.type(elem) === "object") {

	                    // Support: Android<4.1, PhantomJS<2
	                    // push.apply(_, arraylike) throws on ancient WebKit
	                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

	                    // Convert non-html into a text node
	                } else if (!rhtml.test(elem)) {
	                    nodes.push(context.createTextNode(elem));

	                    // Convert html into DOM nodes
	                } else {
	                    tmp = tmp || fragment.appendChild(context.createElement("div"));

	                    // Deserialize a standard representation
	                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
	                    wrap = wrapMap[tag] || wrapMap._default;
	                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

	                    // Descend through wrappers to the right content
	                    j = wrap[0];
	                    while (j--) {
	                        tmp = tmp.lastChild;
	                    }

	                    // Support: Android<4.1, PhantomJS<2
	                    // push.apply(_, arraylike) throws on ancient WebKit
	                    jQuery.merge(nodes, tmp.childNodes);

	                    // Remember the top-level container
	                    tmp = fragment.firstChild;

	                    // Ensure the created nodes are orphaned (#12392)
	                    tmp.textContent = "";
	                }
	            }
	        }

	        // Remove wrapper from fragment
	        fragment.textContent = "";

	        i = 0;
	        while (elem = nodes[i++]) {

	            // Skip elements already in the context collection (trac-4087)
	            if (selection && jQuery.inArray(elem, selection) > -1) {
	                if (ignored) {
	                    ignored.push(elem);
	                }
	                continue;
	            }

	            contains = jQuery.contains(elem.ownerDocument, elem);

	            // Append to fragment
	            tmp = getAll(fragment.appendChild(elem), "script");

	            // Preserve script evaluation history
	            if (contains) {
	                setGlobalEval(tmp);
	            }

	            // Capture executables
	            if (scripts) {
	                j = 0;
	                while (elem = tmp[j++]) {
	                    if (rscriptType.test(elem.type || "")) {
	                        scripts.push(elem);
	                    }
	                }
	            }
	        }

	        return fragment;
	    }

	    (function () {
	        var fragment = document.createDocumentFragment(),
	            div = fragment.appendChild(document.createElement("div")),
	            input = document.createElement("input");

	        // Support: Android 4.0-4.3, Safari<=5.1
	        // Check state lost if the name is set (#11217)
	        // Support: Windows Web Apps (WWA)
	        // `name` and `type` must use .setAttribute for WWA (#14901)
	        input.setAttribute("type", "radio");
	        input.setAttribute("checked", "checked");
	        input.setAttribute("name", "t");

	        div.appendChild(input);

	        // Support: Safari<=5.1, Android<4.2
	        // Older WebKit doesn't clone checked state correctly in fragments
	        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

	        // Support: IE<=11+
	        // Make sure textarea (and checkbox) defaultValue is properly cloned
	        div.innerHTML = "<textarea>x</textarea>";
	        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	    })();

	    var rkeyEvent = /^key/,
	        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	    function returnTrue() {
	        return true;
	    }

	    function returnFalse() {
	        return false;
	    }

	    // Support: IE9
	    // See #13393 for more info
	    function safeActiveElement() {
	        try {
	            return document.activeElement;
	        } catch (err) {}
	    }

	    function _on(elem, types, selector, data, fn, one) {
	        var origFn, type;

	        // Types can be a map of types/handlers
	        if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

	            // ( types-Object, selector, data )
	            if (typeof selector !== "string") {

	                // ( types-Object, data )
	                data = data || selector;
	                selector = undefined;
	            }
	            for (type in types) {
	                _on(elem, type, selector, data, types[type], one);
	            }
	            return elem;
	        }

	        if (data == null && fn == null) {

	            // ( types, fn )
	            fn = selector;
	            data = selector = undefined;
	        } else if (fn == null) {
	            if (typeof selector === "string") {

	                // ( types, selector, fn )
	                fn = data;
	                data = undefined;
	            } else {

	                // ( types, data, fn )
	                fn = data;
	                data = selector;
	                selector = undefined;
	            }
	        }
	        if (fn === false) {
	            fn = returnFalse;
	        } else if (!fn) {
	            return elem;
	        }

	        if (one === 1) {
	            origFn = fn;
	            fn = function fn(event) {

	                // Can use an empty set, since event contains the info
	                jQuery().off(event);
	                return origFn.apply(this, arguments);
	            };

	            // Use same guid so caller can remove using origFn
	            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
	        }
	        return elem.each(function () {
	            jQuery.event.add(this, types, fn, data, selector);
	        });
	    }

	    /*
	     * Helper functions for managing events -- not part of the public interface.
	     * Props to Dean Edwards' addEvent library for many of the ideas.
	     */
	    jQuery.event = {

	        global: {},

	        add: function add(elem, types, handler, data, selector) {

	            var handleObjIn,
	                eventHandle,
	                tmp,
	                events,
	                t,
	                handleObj,
	                special,
	                handlers,
	                type,
	                namespaces,
	                origType,
	                elemData = dataPriv.get(elem);

	            // Don't attach events to noData or text/comment nodes (but allow plain objects)
	            if (!elemData) {
	                return;
	            }

	            // Caller can pass in an object of custom data in lieu of the handler
	            if (handler.handler) {
	                handleObjIn = handler;
	                handler = handleObjIn.handler;
	                selector = handleObjIn.selector;
	            }

	            // Make sure that the handler has a unique ID, used to find/remove it later
	            if (!handler.guid) {
	                handler.guid = jQuery.guid++;
	            }

	            // Init the element's event structure and main handler, if this is the first
	            if (!(events = elemData.events)) {
	                events = elemData.events = {};
	            }
	            if (!(eventHandle = elemData.handle)) {
	                eventHandle = elemData.handle = function (e) {

	                    // Discard the second event of a jQuery.event.trigger() and
	                    // when an event is called after a page has unloaded
	                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
	                };
	            }

	            // Handle multiple events separated by a space
	            types = (types || "").match(rnotwhite) || [""];
	            t = types.length;
	            while (t--) {
	                tmp = rtypenamespace.exec(types[t]) || [];
	                type = origType = tmp[1];
	                namespaces = (tmp[2] || "").split(".").sort();

	                // There *must* be a type, no attaching namespace-only handlers
	                if (!type) {
	                    continue;
	                }

	                // If event changes its type, use the special event handlers for the changed type
	                special = jQuery.event.special[type] || {};

	                // If selector defined, determine special event api type, otherwise given type
	                type = (selector ? special.delegateType : special.bindType) || type;

	                // Update special based on newly reset type
	                special = jQuery.event.special[type] || {};

	                // handleObj is passed to all event handlers
	                handleObj = jQuery.extend({
	                    type: type,
	                    origType: origType,
	                    data: data,
	                    handler: handler,
	                    guid: handler.guid,
	                    selector: selector,
	                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
	                    namespace: namespaces.join(".")
	                }, handleObjIn);

	                // Init the event handler queue if we're the first
	                if (!(handlers = events[type])) {
	                    handlers = events[type] = [];
	                    handlers.delegateCount = 0;

	                    // Only use addEventListener if the special events handler returns false
	                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

	                        if (elem.addEventListener) {
	                            elem.addEventListener(type, eventHandle);
	                        }
	                    }
	                }

	                if (special.add) {
	                    special.add.call(elem, handleObj);

	                    if (!handleObj.handler.guid) {
	                        handleObj.handler.guid = handler.guid;
	                    }
	                }

	                // Add to the element's handler list, delegates in front
	                if (selector) {
	                    handlers.splice(handlers.delegateCount++, 0, handleObj);
	                } else {
	                    handlers.push(handleObj);
	                }

	                // Keep track of which events have ever been used, for event optimization
	                jQuery.event.global[type] = true;
	            }
	        },

	        // Detach an event or set of events from an element
	        remove: function remove(elem, types, handler, selector, mappedTypes) {

	            var j,
	                origCount,
	                tmp,
	                events,
	                t,
	                handleObj,
	                special,
	                handlers,
	                type,
	                namespaces,
	                origType,
	                elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

	            if (!elemData || !(events = elemData.events)) {
	                return;
	            }

	            // Once for each type.namespace in types; type may be omitted
	            types = (types || "").match(rnotwhite) || [""];
	            t = types.length;
	            while (t--) {
	                tmp = rtypenamespace.exec(types[t]) || [];
	                type = origType = tmp[1];
	                namespaces = (tmp[2] || "").split(".").sort();

	                // Unbind all events (on this namespace, if provided) for the element
	                if (!type) {
	                    for (type in events) {
	                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
	                    }
	                    continue;
	                }

	                special = jQuery.event.special[type] || {};
	                type = (selector ? special.delegateType : special.bindType) || type;
	                handlers = events[type] || [];
	                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

	                // Remove matching events
	                origCount = j = handlers.length;
	                while (j--) {
	                    handleObj = handlers[j];

	                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
	                        handlers.splice(j, 1);

	                        if (handleObj.selector) {
	                            handlers.delegateCount--;
	                        }
	                        if (special.remove) {
	                            special.remove.call(elem, handleObj);
	                        }
	                    }
	                }

	                // Remove generic event handler if we removed something and no more handlers exist
	                // (avoids potential for endless recursion during removal of special event handlers)
	                if (origCount && !handlers.length) {
	                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

	                        jQuery.removeEvent(elem, type, elemData.handle);
	                    }

	                    delete events[type];
	                }
	            }

	            // Remove data and the expando if it's no longer used
	            if (jQuery.isEmptyObject(events)) {
	                dataPriv.remove(elem, "handle events");
	            }
	        },

	        dispatch: function dispatch(event) {

	            // Make a writable jQuery.Event from the native event object
	            event = jQuery.event.fix(event);

	            var i,
	                j,
	                ret,
	                matched,
	                handleObj,
	                handlerQueue = [],
	                args = _slice.call(arguments),
	                handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
	                special = jQuery.event.special[event.type] || {};

	            // Use the fix-ed jQuery.Event rather than the (read-only) native event
	            args[0] = event;
	            event.delegateTarget = this;

	            // Call the preDispatch hook for the mapped type, and let it bail if desired
	            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
	                return;
	            }

	            // Determine handlers
	            handlerQueue = jQuery.event.handlers.call(this, event, handlers);

	            // Run delegates first; they may want to stop propagation beneath us
	            i = 0;
	            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
	                event.currentTarget = matched.elem;

	                j = 0;
	                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

	                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
	                    // a subset or equal to those in the bound event (both can have no namespace).
	                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

	                        event.handleObj = handleObj;
	                        event.data = handleObj.data;

	                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

	                        if (ret !== undefined) {
	                            if ((event.result = ret) === false) {
	                                event.preventDefault();
	                                event.stopPropagation();
	                            }
	                        }
	                    }
	                }
	            }

	            // Call the postDispatch hook for the mapped type
	            if (special.postDispatch) {
	                special.postDispatch.call(this, event);
	            }

	            return event.result;
	        },

	        handlers: function handlers(event, _handlers) {
	            var i,
	                matches,
	                sel,
	                handleObj,
	                handlerQueue = [],
	                delegateCount = _handlers.delegateCount,
	                cur = event.target;

	            // Support (at least): Chrome, IE9
	            // Find delegate handlers
	            // Black-hole SVG <use> instance trees (#13180)
	            //
	            // Support: Firefox<=42+
	            // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	            if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {

	                for (; cur !== this; cur = cur.parentNode || this) {

	                    // Don't check non-elements (#13208)
	                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
	                        matches = [];
	                        for (i = 0; i < delegateCount; i++) {
	                            handleObj = _handlers[i];

	                            // Don't conflict with Object.prototype properties (#13203)
	                            sel = handleObj.selector + " ";

	                            if (matches[sel] === undefined) {
	                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
	                            }
	                            if (matches[sel]) {
	                                matches.push(handleObj);
	                            }
	                        }
	                        if (matches.length) {
	                            handlerQueue.push({ elem: cur, handlers: matches });
	                        }
	                    }
	                }
	            }

	            // Add the remaining (directly-bound) handlers
	            if (delegateCount < _handlers.length) {
	                handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
	            }

	            return handlerQueue;
	        },

	        // Includes some event props shared by KeyEvent and MouseEvent
	        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),

	        fixHooks: {},

	        keyHooks: {
	            props: "char charCode key keyCode".split(" "),
	            filter: function filter(event, original) {

	                // Add which for key events
	                if (event.which == null) {
	                    event.which = original.charCode != null ? original.charCode : original.keyCode;
	                }

	                return event;
	            }
	        },

	        mouseHooks: {
	            props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
	            filter: function filter(event, original) {
	                var eventDoc,
	                    doc,
	                    body,
	                    button = original.button;

	                // Calculate pageX/Y if missing and clientX/Y available
	                if (event.pageX == null && original.clientX != null) {
	                    eventDoc = event.target.ownerDocument || document;
	                    doc = eventDoc.documentElement;
	                    body = eventDoc.body;

	                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	                }

	                // Add which for click: 1 === left; 2 === middle; 3 === right
	                // Note: button is not normalized, so don't use it
	                if (!event.which && button !== undefined) {
	                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
	                }

	                return event;
	            }
	        },

	        fix: function fix(event) {
	            if (event[jQuery.expando]) {
	                return event;
	            }

	            // Create a writable copy of the event object and normalize some properties
	            var i,
	                prop,
	                copy,
	                type = event.type,
	                originalEvent = event,
	                fixHook = this.fixHooks[type];

	            if (!fixHook) {
	                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
	            }
	            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

	            event = new jQuery.Event(originalEvent);

	            i = copy.length;
	            while (i--) {
	                prop = copy[i];
	                event[prop] = originalEvent[prop];
	            }

	            // Support: Cordova 2.5 (WebKit) (#13255)
	            // All events should have a target; Cordova deviceready doesn't
	            if (!event.target) {
	                event.target = document;
	            }

	            // Support: Safari 6.0+, Chrome<28
	            // Target should not be a text node (#504, #13143)
	            if (event.target.nodeType === 3) {
	                event.target = event.target.parentNode;
	            }

	            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
	        },

	        special: {
	            load: {

	                // Prevent triggered image.load events from bubbling to window.load
	                noBubble: true
	            },
	            focus: {

	                // Fire native event if possible so blur/focus sequence is correct
	                trigger: function trigger() {
	                    if (this !== safeActiveElement() && this.focus) {
	                        this.focus();
	                        return false;
	                    }
	                },
	                delegateType: "focusin"
	            },
	            blur: {
	                trigger: function trigger() {
	                    if (this === safeActiveElement() && this.blur) {
	                        this.blur();
	                        return false;
	                    }
	                },
	                delegateType: "focusout"
	            },
	            click: {

	                // For checkbox, fire native event so checked state will be right
	                trigger: function trigger() {
	                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
	                        this.click();
	                        return false;
	                    }
	                },

	                // For cross-browser consistency, don't fire native .click() on links
	                _default: function _default(event) {
	                    return jQuery.nodeName(event.target, "a");
	                }
	            },

	            beforeunload: {
	                postDispatch: function postDispatch(event) {

	                    // Support: Firefox 20+
	                    // Firefox doesn't alert if the returnValue field is not set.
	                    if (event.result !== undefined && event.originalEvent) {
	                        event.originalEvent.returnValue = event.result;
	                    }
	                }
	            }
	        }
	    };

	    jQuery.removeEvent = function (elem, type, handle) {

	        // This "if" is needed for plain objects
	        if (elem.removeEventListener) {
	            elem.removeEventListener(type, handle);
	        }
	    };

	    jQuery.Event = function (src, props) {

	        // Allow instantiation without the 'new' keyword
	        if (!(this instanceof jQuery.Event)) {
	            return new jQuery.Event(src, props);
	        }

	        // Event object
	        if (src && src.type) {
	            this.originalEvent = src;
	            this.type = src.type;

	            // Events bubbling up the document may have been marked as prevented
	            // by a handler lower down the tree; reflect the correct value.
	            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

	            // Support: Android<4.0
	            src.returnValue === false ? returnTrue : returnFalse;

	            // Event type
	        } else {
	            this.type = src;
	        }

	        // Put explicitly provided properties onto the event object
	        if (props) {
	            jQuery.extend(this, props);
	        }

	        // Create a timestamp if incoming event doesn't have one
	        this.timeStamp = src && src.timeStamp || jQuery.now();

	        // Mark it as fixed
	        this[jQuery.expando] = true;
	    };

	    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	    jQuery.Event.prototype = {
	        constructor: jQuery.Event,
	        isDefaultPrevented: returnFalse,
	        isPropagationStopped: returnFalse,
	        isImmediatePropagationStopped: returnFalse,
	        isSimulated: false,

	        preventDefault: function preventDefault() {
	            var e = this.originalEvent;

	            this.isDefaultPrevented = returnTrue;

	            if (e && !this.isSimulated) {
	                e.preventDefault();
	            }
	        },
	        stopPropagation: function stopPropagation() {
	            var e = this.originalEvent;

	            this.isPropagationStopped = returnTrue;

	            if (e && !this.isSimulated) {
	                e.stopPropagation();
	            }
	        },
	        stopImmediatePropagation: function stopImmediatePropagation() {
	            var e = this.originalEvent;

	            this.isImmediatePropagationStopped = returnTrue;

	            if (e && !this.isSimulated) {
	                e.stopImmediatePropagation();
	            }

	            this.stopPropagation();
	        }
	    };

	    // Create mouseenter/leave events using mouseover/out and event-time checks
	    // so that event delegation works in jQuery.
	    // Do the same for pointerenter/pointerleave and pointerover/pointerout
	    //
	    // Support: Safari 7 only
	    // Safari sends mouseenter too often; see:
	    // https://code.google.com/p/chromium/issues/detail?id=470258
	    // for the description of the bug (it existed in older Chrome versions as well).
	    jQuery.each({
	        mouseenter: "mouseover",
	        mouseleave: "mouseout",
	        pointerenter: "pointerover",
	        pointerleave: "pointerout"
	    }, function (orig, fix) {
	        jQuery.event.special[orig] = {
	            delegateType: fix,
	            bindType: fix,

	            handle: function handle(event) {
	                var ret,
	                    target = this,
	                    related = event.relatedTarget,
	                    handleObj = event.handleObj;

	                // For mouseenter/leave call the handler if related is outside the target.
	                // NB: No relatedTarget if the mouse left/entered the browser window
	                if (!related || related !== target && !jQuery.contains(target, related)) {
	                    event.type = handleObj.origType;
	                    ret = handleObj.handler.apply(this, arguments);
	                    event.type = fix;
	                }
	                return ret;
	            }
	        };
	    });

	    jQuery.fn.extend({
	        on: function on(types, selector, data, fn) {
	            return _on(this, types, selector, data, fn);
	        },
	        one: function one(types, selector, data, fn) {
	            return _on(this, types, selector, data, fn, 1);
	        },
	        off: function off(types, selector, fn) {
	            var handleObj, type;
	            if (types && types.preventDefault && types.handleObj) {

	                // ( event )  dispatched jQuery.Event
	                handleObj = types.handleObj;
	                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
	                return this;
	            }
	            if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

	                // ( types-object [, selector] )
	                for (type in types) {
	                    this.off(type, selector, types[type]);
	                }
	                return this;
	            }
	            if (selector === false || typeof selector === "function") {

	                // ( types [, fn] )
	                fn = selector;
	                selector = undefined;
	            }
	            if (fn === false) {
	                fn = returnFalse;
	            }
	            return this.each(function () {
	                jQuery.event.remove(this, types, fn, selector);
	            });
	        }
	    });

	    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,


	    // Support: IE 10-11, Edge 10240+
	    // In IE/Edge using regex groups here causes severe slowdowns.
	    // See https://connect.microsoft.com/IE/feedback/details/1736512/
	    rnoInnerhtml = /<script|<style|<link/i,


	    // checked="checked" or checked
	    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	        rscriptTypeMasked = /^true\/(.*)/,
	        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	    // Manipulating tables requires a tbody
	    function manipulationTarget(elem, content) {
	        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
	    }

	    // Replace/restore the type attribute of script elements for safe DOM manipulation
	    function disableScript(elem) {
	        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	        return elem;
	    }
	    function restoreScript(elem) {
	        var match = rscriptTypeMasked.exec(elem.type);

	        if (match) {
	            elem.type = match[1];
	        } else {
	            elem.removeAttribute("type");
	        }

	        return elem;
	    }

	    function cloneCopyEvent(src, dest) {
	        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	        if (dest.nodeType !== 1) {
	            return;
	        }

	        // 1. Copy private data: events, handlers, etc.
	        if (dataPriv.hasData(src)) {
	            pdataOld = dataPriv.access(src);
	            pdataCur = dataPriv.set(dest, pdataOld);
	            events = pdataOld.events;

	            if (events) {
	                delete pdataCur.handle;
	                pdataCur.events = {};

	                for (type in events) {
	                    for (i = 0, l = events[type].length; i < l; i++) {
	                        jQuery.event.add(dest, type, events[type][i]);
	                    }
	                }
	            }
	        }

	        // 2. Copy user data
	        if (dataUser.hasData(src)) {
	            udataOld = dataUser.access(src);
	            udataCur = jQuery.extend({}, udataOld);

	            dataUser.set(dest, udataCur);
	        }
	    }

	    // Fix IE bugs, see support tests
	    function fixInput(src, dest) {
	        var nodeName = dest.nodeName.toLowerCase();

	        // Fails to persist the checked state of a cloned checkbox or radio button.
	        if (nodeName === "input" && rcheckableType.test(src.type)) {
	            dest.checked = src.checked;

	            // Fails to return the selected option to the default selected state when cloning options
	        } else if (nodeName === "input" || nodeName === "textarea") {
	            dest.defaultValue = src.defaultValue;
	        }
	    }

	    function domManip(collection, args, callback, ignored) {

	        // Flatten any nested arrays
	        args = concat.apply([], args);

	        var fragment,
	            first,
	            scripts,
	            hasScripts,
	            node,
	            doc,
	            i = 0,
	            l = collection.length,
	            iNoClone = l - 1,
	            value = args[0],
	            isFunction = jQuery.isFunction(value);

	        // We can't cloneNode fragments that contain checked, in WebKit
	        if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
	            return collection.each(function (index) {
	                var self = collection.eq(index);
	                if (isFunction) {
	                    args[0] = value.call(this, index, self.html());
	                }
	                domManip(self, args, callback, ignored);
	            });
	        }

	        if (l) {
	            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
	            first = fragment.firstChild;

	            if (fragment.childNodes.length === 1) {
	                fragment = first;
	            }

	            // Require either new content or an interest in ignored elements to invoke the callback
	            if (first || ignored) {
	                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
	                hasScripts = scripts.length;

	                // Use the original fragment for the last item
	                // instead of the first because it can end up
	                // being emptied incorrectly in certain situations (#8070).
	                for (; i < l; i++) {
	                    node = fragment;

	                    if (i !== iNoClone) {
	                        node = jQuery.clone(node, true, true);

	                        // Keep references to cloned scripts for later restoration
	                        if (hasScripts) {

	                            // Support: Android<4.1, PhantomJS<2
	                            // push.apply(_, arraylike) throws on ancient WebKit
	                            jQuery.merge(scripts, getAll(node, "script"));
	                        }
	                    }

	                    callback.call(collection[i], node, i);
	                }

	                if (hasScripts) {
	                    doc = scripts[scripts.length - 1].ownerDocument;

	                    // Reenable scripts
	                    jQuery.map(scripts, restoreScript);

	                    // Evaluate executable scripts on first document insertion
	                    for (i = 0; i < hasScripts; i++) {
	                        node = scripts[i];
	                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

	                            if (node.src) {

	                                // Optional AJAX dependency, but won't run scripts if not present
	                                if (jQuery._evalUrl) {
	                                    jQuery._evalUrl(node.src);
	                                }
	                            } else {
	                                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
	                            }
	                        }
	                    }
	                }
	            }
	        }

	        return collection;
	    }

	    function _remove(elem, selector, keepData) {
	        var node,
	            nodes = selector ? jQuery.filter(selector, elem) : elem,
	            i = 0;

	        for (; (node = nodes[i]) != null; i++) {
	            if (!keepData && node.nodeType === 1) {
	                jQuery.cleanData(getAll(node));
	            }

	            if (node.parentNode) {
	                if (keepData && jQuery.contains(node.ownerDocument, node)) {
	                    setGlobalEval(getAll(node, "script"));
	                }
	                node.parentNode.removeChild(node);
	            }
	        }

	        return elem;
	    }

	    jQuery.extend({
	        htmlPrefilter: function htmlPrefilter(html) {
	            return html.replace(rxhtmlTag, "<$1></$2>");
	        },

	        clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
	            var i,
	                l,
	                srcElements,
	                destElements,
	                clone = elem.cloneNode(true),
	                inPage = jQuery.contains(elem.ownerDocument, elem);

	            // Fix IE cloning issues
	            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

	                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	                destElements = getAll(clone);
	                srcElements = getAll(elem);

	                for (i = 0, l = srcElements.length; i < l; i++) {
	                    fixInput(srcElements[i], destElements[i]);
	                }
	            }

	            // Copy the events from the original to the clone
	            if (dataAndEvents) {
	                if (deepDataAndEvents) {
	                    srcElements = srcElements || getAll(elem);
	                    destElements = destElements || getAll(clone);

	                    for (i = 0, l = srcElements.length; i < l; i++) {
	                        cloneCopyEvent(srcElements[i], destElements[i]);
	                    }
	                } else {
	                    cloneCopyEvent(elem, clone);
	                }
	            }

	            // Preserve script evaluation history
	            destElements = getAll(clone, "script");
	            if (destElements.length > 0) {
	                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
	            }

	            // Return the cloned set
	            return clone;
	        },

	        cleanData: function cleanData(elems) {
	            var data,
	                elem,
	                type,
	                special = jQuery.event.special,
	                i = 0;

	            for (; (elem = elems[i]) !== undefined; i++) {
	                if (acceptData(elem)) {
	                    if (data = elem[dataPriv.expando]) {
	                        if (data.events) {
	                            for (type in data.events) {
	                                if (special[type]) {
	                                    jQuery.event.remove(elem, type);

	                                    // This is a shortcut to avoid jQuery.event.remove's overhead
	                                } else {
	                                    jQuery.removeEvent(elem, type, data.handle);
	                                }
	                            }
	                        }

	                        // Support: Chrome <= 35-45+
	                        // Assign undefined instead of using delete, see Data#remove
	                        elem[dataPriv.expando] = undefined;
	                    }
	                    if (elem[dataUser.expando]) {

	                        // Support: Chrome <= 35-45+
	                        // Assign undefined instead of using delete, see Data#remove
	                        elem[dataUser.expando] = undefined;
	                    }
	                }
	            }
	        }
	    });

	    jQuery.fn.extend({

	        // Keep domManip exposed until 3.0 (gh-2225)
	        domManip: domManip,

	        detach: function detach(selector) {
	            return _remove(this, selector, true);
	        },

	        remove: function remove(selector) {
	            return _remove(this, selector);
	        },

	        text: function text(value) {
	            return access(this, function (value) {
	                return value === undefined ? jQuery.text(this) : this.empty().each(function () {
	                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
	                        this.textContent = value;
	                    }
	                });
	            }, null, value, arguments.length);
	        },

	        append: function append() {
	            return domManip(this, arguments, function (elem) {
	                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
	                    var target = manipulationTarget(this, elem);
	                    target.appendChild(elem);
	                }
	            });
	        },

	        prepend: function prepend() {
	            return domManip(this, arguments, function (elem) {
	                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
	                    var target = manipulationTarget(this, elem);
	                    target.insertBefore(elem, target.firstChild);
	                }
	            });
	        },

	        before: function before() {
	            return domManip(this, arguments, function (elem) {
	                if (this.parentNode) {
	                    this.parentNode.insertBefore(elem, this);
	                }
	            });
	        },

	        after: function after() {
	            return domManip(this, arguments, function (elem) {
	                if (this.parentNode) {
	                    this.parentNode.insertBefore(elem, this.nextSibling);
	                }
	            });
	        },

	        empty: function empty() {
	            var elem,
	                i = 0;

	            for (; (elem = this[i]) != null; i++) {
	                if (elem.nodeType === 1) {

	                    // Prevent memory leaks
	                    jQuery.cleanData(getAll(elem, false));

	                    // Remove any remaining nodes
	                    elem.textContent = "";
	                }
	            }

	            return this;
	        },

	        clone: function clone(dataAndEvents, deepDataAndEvents) {
	            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
	            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

	            return this.map(function () {
	                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
	            });
	        },

	        html: function html(value) {
	            return access(this, function (value) {
	                var elem = this[0] || {},
	                    i = 0,
	                    l = this.length;

	                if (value === undefined && elem.nodeType === 1) {
	                    return elem.innerHTML;
	                }

	                // See if we can take a shortcut and just use innerHTML
	                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

	                    value = jQuery.htmlPrefilter(value);

	                    try {
	                        for (; i < l; i++) {
	                            elem = this[i] || {};

	                            // Remove element nodes and prevent memory leaks
	                            if (elem.nodeType === 1) {
	                                jQuery.cleanData(getAll(elem, false));
	                                elem.innerHTML = value;
	                            }
	                        }

	                        elem = 0;

	                        // If using innerHTML throws an exception, use the fallback method
	                    } catch (e) {}
	                }

	                if (elem) {
	                    this.empty().append(value);
	                }
	            }, null, value, arguments.length);
	        },

	        replaceWith: function replaceWith() {
	            var ignored = [];

	            // Make the changes, replacing each non-ignored context element with the new content
	            return domManip(this, arguments, function (elem) {
	                var parent = this.parentNode;

	                if (jQuery.inArray(this, ignored) < 0) {
	                    jQuery.cleanData(getAll(this));
	                    if (parent) {
	                        parent.replaceChild(elem, this);
	                    }
	                }

	                // Force callback invocation
	            }, ignored);
	        }
	    });

	    jQuery.each({
	        appendTo: "append",
	        prependTo: "prepend",
	        insertBefore: "before",
	        insertAfter: "after",
	        replaceAll: "replaceWith"
	    }, function (name, original) {
	        jQuery.fn[name] = function (selector) {
	            var elems,
	                ret = [],
	                insert = jQuery(selector),
	                last = insert.length - 1,
	                i = 0;

	            for (; i <= last; i++) {
	                elems = i === last ? this : this.clone(true);
	                jQuery(insert[i])[original](elems);

	                // Support: QtWebKit
	                // .get() because push.apply(_, arraylike) throws
	                push.apply(ret, elems.get());
	            }

	            return this.pushStack(ret);
	        };
	    });

	    var iframe,
	        elemdisplay = {

	        // Support: Firefox
	        // We have to pre-define these values for FF (#10227)
	        HTML: "block",
	        BODY: "block"
	    };

	    /**
	     * Retrieve the actual display of a element
	     * @param {String} name nodeName of the element
	     * @param {Object} doc Document object
	     */

	    // Called only from within defaultDisplay
	    function actualDisplay(name, doc) {
	        var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
	            display = jQuery.css(elem[0], "display");

	        // We don't have any data stored on the element,
	        // so use "detach" method as fast way to get rid of the element
	        elem.detach();

	        return display;
	    }

	    /**
	     * Try to determine the default display value of an element
	     * @param {String} nodeName
	     */
	    function defaultDisplay(nodeName) {
	        var doc = document,
	            display = elemdisplay[nodeName];

	        if (!display) {
	            display = actualDisplay(nodeName, doc);

	            // If the simple way fails, read from inside an iframe
	            if (display === "none" || !display) {

	                // Use the already-created iframe if possible
	                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

	                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	                doc = iframe[0].contentDocument;

	                // Support: IE
	                doc.write();
	                doc.close();

	                display = actualDisplay(nodeName, doc);
	                iframe.detach();
	            }

	            // Store the correct default display
	            elemdisplay[nodeName] = display;
	        }

	        return display;
	    }
	    var rmargin = /^margin/;

	    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	    var getStyles = function getStyles(elem) {

	        // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	        // IE throws on elements created in popups
	        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	        var view = elem.ownerDocument.defaultView;

	        if (!view || !view.opener) {
	            view = window;
	        }

	        return view.getComputedStyle(elem);
	    };

	    var swap = function swap(elem, options, callback, args) {
	        var ret,
	            name,
	            old = {};

	        // Remember the old values, and insert the new ones
	        for (name in options) {
	            old[name] = elem.style[name];
	            elem.style[name] = options[name];
	        }

	        ret = callback.apply(elem, args || []);

	        // Revert the old values
	        for (name in options) {
	            elem.style[name] = old[name];
	        }

	        return ret;
	    };

	    var documentElement = document.documentElement;

	    (function () {
	        var pixelPositionVal,
	            boxSizingReliableVal,
	            pixelMarginRightVal,
	            reliableMarginLeftVal,
	            container = document.createElement("div"),
	            div = document.createElement("div");

	        // Finish early in limited (non-browser) environments
	        if (!div.style) {
	            return;
	        }

	        // Support: IE9-11+
	        // Style of cloned element affects source element cloned (#8908)
	        div.style.backgroundClip = "content-box";
	        div.cloneNode(true).style.backgroundClip = "";
	        support.clearCloneStyle = div.style.backgroundClip === "content-box";

	        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
	        container.appendChild(div);

	        // Executing both pixelPosition & boxSizingReliable tests require only one layout
	        // so they're executed at the same time to save the second computation.
	        function computeStyleTests() {
	            div.style.cssText =

	            // Support: Firefox<29, Android 2.3
	            // Vendor-prefix box-sizing
	            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
	            div.innerHTML = "";
	            documentElement.appendChild(container);

	            var divStyle = window.getComputedStyle(div);
	            pixelPositionVal = divStyle.top !== "1%";
	            reliableMarginLeftVal = divStyle.marginLeft === "2px";
	            boxSizingReliableVal = divStyle.width === "4px";

	            // Support: Android 4.0 - 4.3 only
	            // Some styles come back with percentage values, even though they shouldn't
	            div.style.marginRight = "50%";
	            pixelMarginRightVal = divStyle.marginRight === "4px";

	            documentElement.removeChild(container);
	        }

	        jQuery.extend(support, {
	            pixelPosition: function pixelPosition() {

	                // This test is executed only once but we still do memoizing
	                // since we can use the boxSizingReliable pre-computing.
	                // No need to check if the test was already performed, though.
	                computeStyleTests();
	                return pixelPositionVal;
	            },
	            boxSizingReliable: function boxSizingReliable() {
	                if (boxSizingReliableVal == null) {
	                    computeStyleTests();
	                }
	                return boxSizingReliableVal;
	            },
	            pixelMarginRight: function pixelMarginRight() {

	                // Support: Android 4.0-4.3
	                // We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	                // since that compresses better and they're computed together anyway.
	                if (boxSizingReliableVal == null) {
	                    computeStyleTests();
	                }
	                return pixelMarginRightVal;
	            },
	            reliableMarginLeft: function reliableMarginLeft() {

	                // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	                if (boxSizingReliableVal == null) {
	                    computeStyleTests();
	                }
	                return reliableMarginLeftVal;
	            },
	            reliableMarginRight: function reliableMarginRight() {

	                // Support: Android 2.3
	                // Check if div with explicit width and no margin-right incorrectly
	                // gets computed margin-right based on width of container. (#3333)
	                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	                // This support function is only executed once so no memoizing is needed.
	                var ret,
	                    marginDiv = div.appendChild(document.createElement("div"));

	                // Reset CSS: box-sizing; display; margin; border; padding
	                marginDiv.style.cssText = div.style.cssText =

	                // Support: Android 2.3
	                // Vendor-prefix box-sizing
	                "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
	                marginDiv.style.marginRight = marginDiv.style.width = "0";
	                div.style.width = "1px";
	                documentElement.appendChild(container);

	                ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);

	                documentElement.removeChild(container);
	                div.removeChild(marginDiv);

	                return ret;
	            }
	        });
	    })();

	    function curCSS(elem, name, computed) {
	        var width,
	            minWidth,
	            maxWidth,
	            ret,
	            style = elem.style;

	        computed = computed || getStyles(elem);
	        ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

	        // Support: Opera 12.1x only
	        // Fall back to style even without computed
	        // computed is undefined for elems on document fragments
	        if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
	            ret = jQuery.style(elem, name);
	        }

	        // Support: IE9
	        // getPropertyValue is only needed for .css('filter') (#12537)
	        if (computed) {

	            // A tribute to the "awesome hack by Dean Edwards"
	            // Android Browser returns percentage for some values,
	            // but width seems to be reliably pixels.
	            // This is against the CSSOM draft spec:
	            // http://dev.w3.org/csswg/cssom/#resolved-values
	            if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

	                // Remember the original values
	                width = style.width;
	                minWidth = style.minWidth;
	                maxWidth = style.maxWidth;

	                // Put in the new values to get a computed value out
	                style.minWidth = style.maxWidth = style.width = ret;
	                ret = computed.width;

	                // Revert the changed values
	                style.width = width;
	                style.minWidth = minWidth;
	                style.maxWidth = maxWidth;
	            }
	        }

	        return ret !== undefined ?

	        // Support: IE9-11+
	        // IE returns zIndex value as an integer.
	        ret + "" : ret;
	    }

	    function addGetHookIf(conditionFn, hookFn) {

	        // Define the hook, we'll check on the first run if it's really needed.
	        return {
	            get: function get() {
	                if (conditionFn()) {

	                    // Hook not needed (or it's not possible to use it due
	                    // to missing dependency), remove it.
	                    delete this.get;
	                    return;
	                }

	                // Hook needed; redefine it so that the support test is not executed again.
	                return (this.get = hookFn).apply(this, arguments);
	            }
	        };
	    }

	    var

	    // Swappable if display is none or starts with table
	    // except "table", "table-cell", or "table-caption"
	    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	        cssNormalTransform = {
	        letterSpacing: "0",
	        fontWeight: "400"
	    },
	        cssPrefixes = ["Webkit", "O", "Moz", "ms"],
	        emptyStyle = document.createElement("div").style;

	    // Return a css property mapped to a potentially vendor prefixed property
	    function vendorPropName(name) {

	        // Shortcut for names that are not vendor prefixed
	        if (name in emptyStyle) {
	            return name;
	        }

	        // Check for vendor prefixed names
	        var capName = name[0].toUpperCase() + name.slice(1),
	            i = cssPrefixes.length;

	        while (i--) {
	            name = cssPrefixes[i] + capName;
	            if (name in emptyStyle) {
	                return name;
	            }
	        }
	    }

	    function setPositiveNumber(elem, value, subtract) {

	        // Any relative (+/-) values have already been
	        // normalized at this point
	        var matches = rcssNum.exec(value);
	        return matches ?

	        // Guard against undefined "subtract", e.g., when used as in cssHooks
	        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	    }

	    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
	        var i = extra === (isBorderBox ? "border" : "content") ?

	        // If we already have the right measurement, avoid augmentation
	        4 :

	        // Otherwise initialize for horizontal or vertical properties
	        name === "width" ? 1 : 0,
	            val = 0;

	        for (; i < 4; i += 2) {

	            // Both box models exclude margin, so add it if we want it
	            if (extra === "margin") {
	                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
	            }

	            if (isBorderBox) {

	                // border-box includes padding, so remove it if we want content
	                if (extra === "content") {
	                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
	                }

	                // At this point, extra isn't border nor margin, so remove border
	                if (extra !== "margin") {
	                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
	                }
	            } else {

	                // At this point, extra isn't content, so add padding
	                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

	                // At this point, extra isn't content nor padding, so add border
	                if (extra !== "padding") {
	                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
	                }
	            }
	        }

	        return val;
	    }

	    function getWidthOrHeight(elem, name, extra) {

	        // Start with offset property, which is equivalent to the border-box value
	        var valueIsBorderBox = true,
	            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
	            styles = getStyles(elem),
	            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

	        // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	        if (val <= 0 || val == null) {

	            // Fall back to computed then uncomputed css if necessary
	            val = curCSS(elem, name, styles);
	            if (val < 0 || val == null) {
	                val = elem.style[name];
	            }

	            // Computed unit is not pixels. Stop here and return.
	            if (rnumnonpx.test(val)) {
	                return val;
	            }

	            // Check for style in case a browser which returns unreliable values
	            // for getComputedStyle silently falls back to the reliable elem.style
	            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

	            // Normalize "", auto, and prepare for extra
	            val = parseFloat(val) || 0;
	        }

	        // Use the active box-sizing model to add/subtract irrelevant styles
	        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	    }

	    function showHide(elements, show) {
	        var display,
	            elem,
	            hidden,
	            values = [],
	            index = 0,
	            length = elements.length;

	        for (; index < length; index++) {
	            elem = elements[index];
	            if (!elem.style) {
	                continue;
	            }

	            values[index] = dataPriv.get(elem, "olddisplay");
	            display = elem.style.display;
	            if (show) {

	                // Reset the inline display of this element to learn if it is
	                // being hidden by cascaded rules or not
	                if (!values[index] && display === "none") {
	                    elem.style.display = "";
	                }

	                // Set elements which have been overridden with display: none
	                // in a stylesheet to whatever the default browser style is
	                // for such an element
	                if (elem.style.display === "" && isHidden(elem)) {
	                    values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
	                }
	            } else {
	                hidden = isHidden(elem);

	                if (display !== "none" || !hidden) {
	                    dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
	                }
	            }
	        }

	        // Set the display of most of the elements in a second loop
	        // to avoid the constant reflow
	        for (index = 0; index < length; index++) {
	            elem = elements[index];
	            if (!elem.style) {
	                continue;
	            }
	            if (!show || elem.style.display === "none" || elem.style.display === "") {
	                elem.style.display = show ? values[index] || "" : "none";
	            }
	        }

	        return elements;
	    }

	    jQuery.extend({

	        // Add in style property hooks for overriding the default
	        // behavior of getting and setting a style property
	        cssHooks: {
	            opacity: {
	                get: function get(elem, computed) {
	                    if (computed) {

	                        // We should always get a number back from opacity
	                        var ret = curCSS(elem, "opacity");
	                        return ret === "" ? "1" : ret;
	                    }
	                }
	            }
	        },

	        // Don't automatically add "px" to these possibly-unitless properties
	        cssNumber: {
	            "animationIterationCount": true,
	            "columnCount": true,
	            "fillOpacity": true,
	            "flexGrow": true,
	            "flexShrink": true,
	            "fontWeight": true,
	            "lineHeight": true,
	            "opacity": true,
	            "order": true,
	            "orphans": true,
	            "widows": true,
	            "zIndex": true,
	            "zoom": true
	        },

	        // Add in properties whose names you wish to fix before
	        // setting or getting the value
	        cssProps: {
	            "float": "cssFloat"
	        },

	        // Get and set the style property on a DOM Node
	        style: function style(elem, name, value, extra) {

	            // Don't set styles on text and comment nodes
	            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
	                return;
	            }

	            // Make sure that we're working with the right name
	            var ret,
	                type,
	                hooks,
	                origName = jQuery.camelCase(name),
	                style = elem.style;

	            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

	            // Gets hook for the prefixed version, then unprefixed version
	            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

	            // Check if we're setting a value
	            if (value !== undefined) {
	                type = typeof value === "undefined" ? "undefined" : _typeof(value);

	                // Convert "+=" or "-=" to relative numbers (#7345)
	                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
	                    value = adjustCSS(elem, name, ret);

	                    // Fixes bug #9237
	                    type = "number";
	                }

	                // Make sure that null and NaN values aren't set (#7116)
	                if (value == null || value !== value) {
	                    return;
	                }

	                // If a number was passed in, add the unit (except for certain CSS properties)
	                if (type === "number") {
	                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
	                }

	                // Support: IE9-11+
	                // background-* props affect original clone's values
	                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
	                    style[name] = "inherit";
	                }

	                // If a hook was provided, use that value, otherwise just set the specified value
	                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

	                    style[name] = value;
	                }
	            } else {

	                // If a hook was provided get the non-computed value from there
	                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

	                    return ret;
	                }

	                // Otherwise just get the value from the style object
	                return style[name];
	            }
	        },

	        css: function css(elem, name, extra, styles) {
	            var val,
	                num,
	                hooks,
	                origName = jQuery.camelCase(name);

	            // Make sure that we're working with the right name
	            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

	            // Try prefixed name followed by the unprefixed name
	            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

	            // If a hook was provided get the computed value from there
	            if (hooks && "get" in hooks) {
	                val = hooks.get(elem, true, extra);
	            }

	            // Otherwise, if a way to get the computed value exists, use that
	            if (val === undefined) {
	                val = curCSS(elem, name, styles);
	            }

	            // Convert "normal" to computed value
	            if (val === "normal" && name in cssNormalTransform) {
	                val = cssNormalTransform[name];
	            }

	            // Make numeric if forced or a qualifier was provided and val looks numeric
	            if (extra === "" || extra) {
	                num = parseFloat(val);
	                return extra === true || isFinite(num) ? num || 0 : val;
	            }
	            return val;
	        }
	    });

	    jQuery.each(["height", "width"], function (i, name) {
	        jQuery.cssHooks[name] = {
	            get: function get(elem, computed, extra) {
	                if (computed) {

	                    // Certain elements can have dimension info if we invisibly show them
	                    // but it must have a current display style that would benefit
	                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function () {
	                        return getWidthOrHeight(elem, name, extra);
	                    }) : getWidthOrHeight(elem, name, extra);
	                }
	            },

	            set: function set(elem, value, extra) {
	                var matches,
	                    styles = extra && getStyles(elem),
	                    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

	                // Convert to pixels if value adjustment is needed
	                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

	                    elem.style[name] = value;
	                    value = jQuery.css(elem, name);
	                }

	                return setPositiveNumber(elem, value, subtract);
	            }
	        };
	    });

	    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
	        if (computed) {
	            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
	                return elem.getBoundingClientRect().left;
	            })) + "px";
	        }
	    });

	    // Support: Android 2.3
	    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
	        if (computed) {
	            return swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
	        }
	    });

	    // These hooks are used by animate to expand properties
	    jQuery.each({
	        margin: "",
	        padding: "",
	        border: "Width"
	    }, function (prefix, suffix) {
	        jQuery.cssHooks[prefix + suffix] = {
	            expand: function expand(value) {
	                var i = 0,
	                    expanded = {},


	                // Assumes a single number if not a string
	                parts = typeof value === "string" ? value.split(" ") : [value];

	                for (; i < 4; i++) {
	                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
	                }

	                return expanded;
	            }
	        };

	        if (!rmargin.test(prefix)) {
	            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
	        }
	    });

	    jQuery.fn.extend({
	        css: function css(name, value) {
	            return access(this, function (elem, name, value) {
	                var styles,
	                    len,
	                    map = {},
	                    i = 0;

	                if (jQuery.isArray(name)) {
	                    styles = getStyles(elem);
	                    len = name.length;

	                    for (; i < len; i++) {
	                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
	                    }

	                    return map;
	                }

	                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
	            }, name, value, arguments.length > 1);
	        },
	        show: function show() {
	            return showHide(this, true);
	        },
	        hide: function hide() {
	            return showHide(this);
	        },
	        toggle: function toggle(state) {
	            if (typeof state === "boolean") {
	                return state ? this.show() : this.hide();
	            }

	            return this.each(function () {
	                if (isHidden(this)) {
	                    jQuery(this).show();
	                } else {
	                    jQuery(this).hide();
	                }
	            });
	        }
	    });

	    function Tween(elem, options, prop, end, easing) {
	        return new Tween.prototype.init(elem, options, prop, end, easing);
	    }
	    jQuery.Tween = Tween;

	    Tween.prototype = {
	        constructor: Tween,
	        init: function init(elem, options, prop, end, easing, unit) {
	            this.elem = elem;
	            this.prop = prop;
	            this.easing = easing || jQuery.easing._default;
	            this.options = options;
	            this.start = this.now = this.cur();
	            this.end = end;
	            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
	        },
	        cur: function cur() {
	            var hooks = Tween.propHooks[this.prop];

	            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
	        },
	        run: function run(percent) {
	            var eased,
	                hooks = Tween.propHooks[this.prop];

	            if (this.options.duration) {
	                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
	            } else {
	                this.pos = eased = percent;
	            }
	            this.now = (this.end - this.start) * eased + this.start;

	            if (this.options.step) {
	                this.options.step.call(this.elem, this.now, this);
	            }

	            if (hooks && hooks.set) {
	                hooks.set(this);
	            } else {
	                Tween.propHooks._default.set(this);
	            }
	            return this;
	        }
	    };

	    Tween.prototype.init.prototype = Tween.prototype;

	    Tween.propHooks = {
	        _default: {
	            get: function get(tween) {
	                var result;

	                // Use a property on the element directly when it is not a DOM element,
	                // or when there is no matching style property that exists.
	                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
	                    return tween.elem[tween.prop];
	                }

	                // Passing an empty string as a 3rd parameter to .css will automatically
	                // attempt a parseFloat and fallback to a string if the parse fails.
	                // Simple values such as "10px" are parsed to Float;
	                // complex values such as "rotate(1rad)" are returned as-is.
	                result = jQuery.css(tween.elem, tween.prop, "");

	                // Empty strings, null, undefined and "auto" are converted to 0.
	                return !result || result === "auto" ? 0 : result;
	            },
	            set: function set(tween) {

	                // Use step hook for back compat.
	                // Use cssHook if its there.
	                // Use .style if available and use plain properties where available.
	                if (jQuery.fx.step[tween.prop]) {
	                    jQuery.fx.step[tween.prop](tween);
	                } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
	                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
	                } else {
	                    tween.elem[tween.prop] = tween.now;
	                }
	            }
	        }
	    };

	    // Support: IE9
	    // Panic based approach to setting things on disconnected nodes
	    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	        set: function set(tween) {
	            if (tween.elem.nodeType && tween.elem.parentNode) {
	                tween.elem[tween.prop] = tween.now;
	            }
	        }
	    };

	    jQuery.easing = {
	        linear: function linear(p) {
	            return p;
	        },
	        swing: function swing(p) {
	            return 0.5 - Math.cos(p * Math.PI) / 2;
	        },
	        _default: "swing"
	    };

	    jQuery.fx = Tween.prototype.init;

	    // Back Compat <1.8 extension point
	    jQuery.fx.step = {};

	    var fxNow,
	        timerId,
	        rfxtypes = /^(?:toggle|show|hide)$/,
	        rrun = /queueHooks$/;

	    // Animations created synchronously will run synchronously
	    function createFxNow() {
	        window.setTimeout(function () {
	            fxNow = undefined;
	        });
	        return fxNow = jQuery.now();
	    }

	    // Generate parameters to create a standard animation
	    function genFx(type, includeWidth) {
	        var which,
	            i = 0,
	            attrs = { height: type };

	        // If we include width, step value is 1 to do all cssExpand values,
	        // otherwise step value is 2 to skip over Left and Right
	        includeWidth = includeWidth ? 1 : 0;
	        for (; i < 4; i += 2 - includeWidth) {
	            which = cssExpand[i];
	            attrs["margin" + which] = attrs["padding" + which] = type;
	        }

	        if (includeWidth) {
	            attrs.opacity = attrs.width = type;
	        }

	        return attrs;
	    }

	    function createTween(value, prop, animation) {
	        var tween,
	            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
	            index = 0,
	            length = collection.length;
	        for (; index < length; index++) {
	            if (tween = collection[index].call(animation, prop, value)) {

	                // We're done with this property
	                return tween;
	            }
	        }
	    }

	    function defaultPrefilter(elem, props, opts) {
	        /* jshint validthis: true */
	        var prop,
	            value,
	            toggle,
	            tween,
	            hooks,
	            oldfire,
	            display,
	            checkDisplay,
	            anim = this,
	            orig = {},
	            style = elem.style,
	            hidden = elem.nodeType && isHidden(elem),
	            dataShow = dataPriv.get(elem, "fxshow");

	        // Handle queue: false promises
	        if (!opts.queue) {
	            hooks = jQuery._queueHooks(elem, "fx");
	            if (hooks.unqueued == null) {
	                hooks.unqueued = 0;
	                oldfire = hooks.empty.fire;
	                hooks.empty.fire = function () {
	                    if (!hooks.unqueued) {
	                        oldfire();
	                    }
	                };
	            }
	            hooks.unqueued++;

	            anim.always(function () {

	                // Ensure the complete handler is called before this completes
	                anim.always(function () {
	                    hooks.unqueued--;
	                    if (!jQuery.queue(elem, "fx").length) {
	                        hooks.empty.fire();
	                    }
	                });
	            });
	        }

	        // Height/width overflow pass
	        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {

	            // Make sure that nothing sneaks out
	            // Record all 3 overflow attributes because IE9-10 do not
	            // change the overflow attribute when overflowX and
	            // overflowY are set to the same value
	            opts.overflow = [style.overflow, style.overflowX, style.overflowY];

	            // Set display property to inline-block for height/width
	            // animations on inline elements that are having width/height animated
	            display = jQuery.css(elem, "display");

	            // Test default display if display is currently "none"
	            checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

	            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
	                style.display = "inline-block";
	            }
	        }

	        if (opts.overflow) {
	            style.overflow = "hidden";
	            anim.always(function () {
	                style.overflow = opts.overflow[0];
	                style.overflowX = opts.overflow[1];
	                style.overflowY = opts.overflow[2];
	            });
	        }

	        // show/hide pass
	        for (prop in props) {
	            value = props[prop];
	            if (rfxtypes.exec(value)) {
	                delete props[prop];
	                toggle = toggle || value === "toggle";
	                if (value === (hidden ? "hide" : "show")) {

	                    // If there is dataShow left over from a stopped hide or show
	                    // and we are going to proceed with show, we should pretend to be hidden
	                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
	                        hidden = true;
	                    } else {
	                        continue;
	                    }
	                }
	                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

	                // Any non-fx value stops us from restoring the original display value
	            } else {
	                display = undefined;
	            }
	        }

	        if (!jQuery.isEmptyObject(orig)) {
	            if (dataShow) {
	                if ("hidden" in dataShow) {
	                    hidden = dataShow.hidden;
	                }
	            } else {
	                dataShow = dataPriv.access(elem, "fxshow", {});
	            }

	            // Store state if its toggle - enables .stop().toggle() to "reverse"
	            if (toggle) {
	                dataShow.hidden = !hidden;
	            }
	            if (hidden) {
	                jQuery(elem).show();
	            } else {
	                anim.done(function () {
	                    jQuery(elem).hide();
	                });
	            }
	            anim.done(function () {
	                var prop;

	                dataPriv.remove(elem, "fxshow");
	                for (prop in orig) {
	                    jQuery.style(elem, prop, orig[prop]);
	                }
	            });
	            for (prop in orig) {
	                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

	                if (!(prop in dataShow)) {
	                    dataShow[prop] = tween.start;
	                    if (hidden) {
	                        tween.end = tween.start;
	                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
	                    }
	                }
	            }

	            // If this is a noop like .hide().hide(), restore an overwritten display value
	        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
	            style.display = display;
	        }
	    }

	    function propFilter(props, specialEasing) {
	        var index, name, easing, value, hooks;

	        // camelCase, specialEasing and expand cssHook pass
	        for (index in props) {
	            name = jQuery.camelCase(index);
	            easing = specialEasing[name];
	            value = props[index];
	            if (jQuery.isArray(value)) {
	                easing = value[1];
	                value = props[index] = value[0];
	            }

	            if (index !== name) {
	                props[name] = value;
	                delete props[index];
	            }

	            hooks = jQuery.cssHooks[name];
	            if (hooks && "expand" in hooks) {
	                value = hooks.expand(value);
	                delete props[name];

	                // Not quite $.extend, this won't overwrite existing keys.
	                // Reusing 'index' because we have the correct "name"
	                for (index in value) {
	                    if (!(index in props)) {
	                        props[index] = value[index];
	                        specialEasing[index] = easing;
	                    }
	                }
	            } else {
	                specialEasing[name] = easing;
	            }
	        }
	    }

	    function Animation(elem, properties, options) {
	        var result,
	            stopped,
	            index = 0,
	            length = Animation.prefilters.length,
	            deferred = jQuery.Deferred().always(function () {

	            // Don't match elem in the :animated selector
	            delete tick.elem;
	        }),
	            tick = function tick() {
	            if (stopped) {
	                return false;
	            }
	            var currentTime = fxNow || createFxNow(),
	                remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


	            // Support: Android 2.3
	            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	            temp = remaining / animation.duration || 0,
	                percent = 1 - temp,
	                index = 0,
	                length = animation.tweens.length;

	            for (; index < length; index++) {
	                animation.tweens[index].run(percent);
	            }

	            deferred.notifyWith(elem, [animation, percent, remaining]);

	            if (percent < 1 && length) {
	                return remaining;
	            } else {
	                deferred.resolveWith(elem, [animation]);
	                return false;
	            }
	        },
	            animation = deferred.promise({
	            elem: elem,
	            props: jQuery.extend({}, properties),
	            opts: jQuery.extend(true, {
	                specialEasing: {},
	                easing: jQuery.easing._default
	            }, options),
	            originalProperties: properties,
	            originalOptions: options,
	            startTime: fxNow || createFxNow(),
	            duration: options.duration,
	            tweens: [],
	            createTween: function createTween(prop, end) {
	                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
	                animation.tweens.push(tween);
	                return tween;
	            },
	            stop: function stop(gotoEnd) {
	                var index = 0,


	                // If we are going to the end, we want to run all the tweens
	                // otherwise we skip this part
	                length = gotoEnd ? animation.tweens.length : 0;
	                if (stopped) {
	                    return this;
	                }
	                stopped = true;
	                for (; index < length; index++) {
	                    animation.tweens[index].run(1);
	                }

	                // Resolve when we played the last frame; otherwise, reject
	                if (gotoEnd) {
	                    deferred.notifyWith(elem, [animation, 1, 0]);
	                    deferred.resolveWith(elem, [animation, gotoEnd]);
	                } else {
	                    deferred.rejectWith(elem, [animation, gotoEnd]);
	                }
	                return this;
	            }
	        }),
	            props = animation.props;

	        propFilter(props, animation.opts.specialEasing);

	        for (; index < length; index++) {
	            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
	            if (result) {
	                if (jQuery.isFunction(result.stop)) {
	                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
	                }
	                return result;
	            }
	        }

	        jQuery.map(props, createTween, animation);

	        if (jQuery.isFunction(animation.opts.start)) {
	            animation.opts.start.call(elem, animation);
	        }

	        jQuery.fx.timer(jQuery.extend(tick, {
	            elem: elem,
	            anim: animation,
	            queue: animation.opts.queue
	        }));

	        // attach callbacks from options
	        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	    }

	    jQuery.Animation = jQuery.extend(Animation, {
	        tweeners: {
	            "*": [function (prop, value) {
	                var tween = this.createTween(prop, value);
	                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
	                return tween;
	            }]
	        },

	        tweener: function tweener(props, callback) {
	            if (jQuery.isFunction(props)) {
	                callback = props;
	                props = ["*"];
	            } else {
	                props = props.match(rnotwhite);
	            }

	            var prop,
	                index = 0,
	                length = props.length;

	            for (; index < length; index++) {
	                prop = props[index];
	                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
	                Animation.tweeners[prop].unshift(callback);
	            }
	        },

	        prefilters: [defaultPrefilter],

	        prefilter: function prefilter(callback, prepend) {
	            if (prepend) {
	                Animation.prefilters.unshift(callback);
	            } else {
	                Animation.prefilters.push(callback);
	            }
	        }
	    });

	    jQuery.speed = function (speed, easing, fn) {
	        var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
	            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
	            duration: speed,
	            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
	        };

	        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

	        // Normalize opt.queue - true/undefined/null -> "fx"
	        if (opt.queue == null || opt.queue === true) {
	            opt.queue = "fx";
	        }

	        // Queueing
	        opt.old = opt.complete;

	        opt.complete = function () {
	            if (jQuery.isFunction(opt.old)) {
	                opt.old.call(this);
	            }

	            if (opt.queue) {
	                jQuery.dequeue(this, opt.queue);
	            }
	        };

	        return opt;
	    };

	    jQuery.fn.extend({
	        fadeTo: function fadeTo(speed, to, easing, callback) {

	            // Show any hidden elements after setting opacity to 0
	            return this.filter(isHidden).css("opacity", 0).show()

	            // Animate to the value specified
	            .end().animate({ opacity: to }, speed, easing, callback);
	        },
	        animate: function animate(prop, speed, easing, callback) {
	            var empty = jQuery.isEmptyObject(prop),
	                optall = jQuery.speed(speed, easing, callback),
	                doAnimation = function doAnimation() {

	                // Operate on a copy of prop so per-property easing won't be lost
	                var anim = Animation(this, jQuery.extend({}, prop), optall);

	                // Empty animations, or finishing resolves immediately
	                if (empty || dataPriv.get(this, "finish")) {
	                    anim.stop(true);
	                }
	            };
	            doAnimation.finish = doAnimation;

	            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
	        },
	        stop: function stop(type, clearQueue, gotoEnd) {
	            var stopQueue = function stopQueue(hooks) {
	                var stop = hooks.stop;
	                delete hooks.stop;
	                stop(gotoEnd);
	            };

	            if (typeof type !== "string") {
	                gotoEnd = clearQueue;
	                clearQueue = type;
	                type = undefined;
	            }
	            if (clearQueue && type !== false) {
	                this.queue(type || "fx", []);
	            }

	            return this.each(function () {
	                var dequeue = true,
	                    index = type != null && type + "queueHooks",
	                    timers = jQuery.timers,
	                    data = dataPriv.get(this);

	                if (index) {
	                    if (data[index] && data[index].stop) {
	                        stopQueue(data[index]);
	                    }
	                } else {
	                    for (index in data) {
	                        if (data[index] && data[index].stop && rrun.test(index)) {
	                            stopQueue(data[index]);
	                        }
	                    }
	                }

	                for (index = timers.length; index--;) {
	                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

	                        timers[index].anim.stop(gotoEnd);
	                        dequeue = false;
	                        timers.splice(index, 1);
	                    }
	                }

	                // Start the next in the queue if the last step wasn't forced.
	                // Timers currently will call their complete callbacks, which
	                // will dequeue but only if they were gotoEnd.
	                if (dequeue || !gotoEnd) {
	                    jQuery.dequeue(this, type);
	                }
	            });
	        },
	        finish: function finish(type) {
	            if (type !== false) {
	                type = type || "fx";
	            }
	            return this.each(function () {
	                var index,
	                    data = dataPriv.get(this),
	                    queue = data[type + "queue"],
	                    hooks = data[type + "queueHooks"],
	                    timers = jQuery.timers,
	                    length = queue ? queue.length : 0;

	                // Enable finishing flag on private data
	                data.finish = true;

	                // Empty the queue first
	                jQuery.queue(this, type, []);

	                if (hooks && hooks.stop) {
	                    hooks.stop.call(this, true);
	                }

	                // Look for any active animations, and finish them
	                for (index = timers.length; index--;) {
	                    if (timers[index].elem === this && timers[index].queue === type) {
	                        timers[index].anim.stop(true);
	                        timers.splice(index, 1);
	                    }
	                }

	                // Look for any animations in the old queue and finish them
	                for (index = 0; index < length; index++) {
	                    if (queue[index] && queue[index].finish) {
	                        queue[index].finish.call(this);
	                    }
	                }

	                // Turn off finishing flag
	                delete data.finish;
	            });
	        }
	    });

	    jQuery.each(["toggle", "show", "hide"], function (i, name) {
	        var cssFn = jQuery.fn[name];
	        jQuery.fn[name] = function (speed, easing, callback) {
	            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
	        };
	    });

	    // Generate shortcuts for custom animations
	    jQuery.each({
	        slideDown: genFx("show"),
	        slideUp: genFx("hide"),
	        slideToggle: genFx("toggle"),
	        fadeIn: { opacity: "show" },
	        fadeOut: { opacity: "hide" },
	        fadeToggle: { opacity: "toggle" }
	    }, function (name, props) {
	        jQuery.fn[name] = function (speed, easing, callback) {
	            return this.animate(props, speed, easing, callback);
	        };
	    });

	    jQuery.timers = [];
	    jQuery.fx.tick = function () {
	        var timer,
	            i = 0,
	            timers = jQuery.timers;

	        fxNow = jQuery.now();

	        for (; i < timers.length; i++) {
	            timer = timers[i];

	            // Checks the timer has not already been removed
	            if (!timer() && timers[i] === timer) {
	                timers.splice(i--, 1);
	            }
	        }

	        if (!timers.length) {
	            jQuery.fx.stop();
	        }
	        fxNow = undefined;
	    };

	    jQuery.fx.timer = function (timer) {
	        jQuery.timers.push(timer);
	        if (timer()) {
	            jQuery.fx.start();
	        } else {
	            jQuery.timers.pop();
	        }
	    };

	    jQuery.fx.interval = 13;
	    jQuery.fx.start = function () {
	        if (!timerId) {
	            timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
	        }
	    };

	    jQuery.fx.stop = function () {
	        window.clearInterval(timerId);

	        timerId = null;
	    };

	    jQuery.fx.speeds = {
	        slow: 600,
	        fast: 200,

	        // Default speed
	        _default: 400
	    };

	    // Based off of the plugin by Clint Helfers, with permission.
	    // http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	    jQuery.fn.delay = function (time, type) {
	        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
	        type = type || "fx";

	        return this.queue(type, function (next, hooks) {
	            var timeout = window.setTimeout(next, time);
	            hooks.stop = function () {
	                window.clearTimeout(timeout);
	            };
	        });
	    };

	    (function () {
	        var input = document.createElement("input"),
	            select = document.createElement("select"),
	            opt = select.appendChild(document.createElement("option"));

	        input.type = "checkbox";

	        // Support: iOS<=5.1, Android<=4.2+
	        // Default value for a checkbox should be "on"
	        support.checkOn = input.value !== "";

	        // Support: IE<=11+
	        // Must access selectedIndex to make default options select
	        support.optSelected = opt.selected;

	        // Support: Android<=2.3
	        // Options inside disabled selects are incorrectly marked as disabled
	        select.disabled = true;
	        support.optDisabled = !opt.disabled;

	        // Support: IE<=11+
	        // An input loses its value after becoming a radio
	        input = document.createElement("input");
	        input.value = "t";
	        input.type = "radio";
	        support.radioValue = input.value === "t";
	    })();

	    var boolHook,
	        attrHandle = jQuery.expr.attrHandle;

	    jQuery.fn.extend({
	        attr: function attr(name, value) {
	            return access(this, jQuery.attr, name, value, arguments.length > 1);
	        },

	        removeAttr: function removeAttr(name) {
	            return this.each(function () {
	                jQuery.removeAttr(this, name);
	            });
	        }
	    });

	    jQuery.extend({
	        attr: function attr(elem, name, value) {
	            var ret,
	                hooks,
	                nType = elem.nodeType;

	            // Don't get/set attributes on text, comment and attribute nodes
	            if (nType === 3 || nType === 8 || nType === 2) {
	                return;
	            }

	            // Fallback to prop when attributes are not supported
	            if (typeof elem.getAttribute === "undefined") {
	                return jQuery.prop(elem, name, value);
	            }

	            // All attributes are lowercase
	            // Grab necessary hook if one is defined
	            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
	                name = name.toLowerCase();
	                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
	            }

	            if (value !== undefined) {
	                if (value === null) {
	                    jQuery.removeAttr(elem, name);
	                    return;
	                }

	                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
	                    return ret;
	                }

	                elem.setAttribute(name, value + "");
	                return value;
	            }

	            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
	                return ret;
	            }

	            ret = jQuery.find.attr(elem, name);

	            // Non-existent attributes return null, we normalize to undefined
	            return ret == null ? undefined : ret;
	        },

	        attrHooks: {
	            type: {
	                set: function set(elem, value) {
	                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
	                        var val = elem.value;
	                        elem.setAttribute("type", value);
	                        if (val) {
	                            elem.value = val;
	                        }
	                        return value;
	                    }
	                }
	            }
	        },

	        removeAttr: function removeAttr(elem, value) {
	            var name,
	                propName,
	                i = 0,
	                attrNames = value && value.match(rnotwhite);

	            if (attrNames && elem.nodeType === 1) {
	                while (name = attrNames[i++]) {
	                    propName = jQuery.propFix[name] || name;

	                    // Boolean attributes get special treatment (#10870)
	                    if (jQuery.expr.match.bool.test(name)) {

	                        // Set corresponding property to false
	                        elem[propName] = false;
	                    }

	                    elem.removeAttribute(name);
	                }
	            }
	        }
	    });

	    // Hooks for boolean attributes
	    boolHook = {
	        set: function set(elem, value, name) {
	            if (value === false) {

	                // Remove boolean attributes when set to false
	                jQuery.removeAttr(elem, name);
	            } else {
	                elem.setAttribute(name, name);
	            }
	            return name;
	        }
	    };
	    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
	        var getter = attrHandle[name] || jQuery.find.attr;

	        attrHandle[name] = function (elem, name, isXML) {
	            var ret, handle;
	            if (!isXML) {

	                // Avoid an infinite loop by temporarily removing this function from the getter
	                handle = attrHandle[name];
	                attrHandle[name] = ret;
	                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
	                attrHandle[name] = handle;
	            }
	            return ret;
	        };
	    });

	    var rfocusable = /^(?:input|select|textarea|button)$/i,
	        rclickable = /^(?:a|area)$/i;

	    jQuery.fn.extend({
	        prop: function prop(name, value) {
	            return access(this, jQuery.prop, name, value, arguments.length > 1);
	        },

	        removeProp: function removeProp(name) {
	            return this.each(function () {
	                delete this[jQuery.propFix[name] || name];
	            });
	        }
	    });

	    jQuery.extend({
	        prop: function prop(elem, name, value) {
	            var ret,
	                hooks,
	                nType = elem.nodeType;

	            // Don't get/set properties on text, comment and attribute nodes
	            if (nType === 3 || nType === 8 || nType === 2) {
	                return;
	            }

	            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

	                // Fix name and attach hooks
	                name = jQuery.propFix[name] || name;
	                hooks = jQuery.propHooks[name];
	            }

	            if (value !== undefined) {
	                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
	                    return ret;
	                }

	                return elem[name] = value;
	            }

	            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
	                return ret;
	            }

	            return elem[name];
	        },

	        propHooks: {
	            tabIndex: {
	                get: function get(elem) {

	                    // elem.tabIndex doesn't always return the
	                    // correct value when it hasn't been explicitly set
	                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	                    // Use proper attribute retrieval(#12072)
	                    var tabindex = jQuery.find.attr(elem, "tabindex");

	                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
	                }
	            }
	        },

	        propFix: {
	            "for": "htmlFor",
	            "class": "className"
	        }
	    });

	    // Support: IE <=11 only
	    // Accessing the selectedIndex property
	    // forces the browser to respect setting selected
	    // on the option
	    // The getter ensures a default option is selected
	    // when in an optgroup
	    if (!support.optSelected) {
	        jQuery.propHooks.selected = {
	            get: function get(elem) {
	                var parent = elem.parentNode;
	                if (parent && parent.parentNode) {
	                    parent.parentNode.selectedIndex;
	                }
	                return null;
	            },
	            set: function set(elem) {
	                var parent = elem.parentNode;
	                if (parent) {
	                    parent.selectedIndex;

	                    if (parent.parentNode) {
	                        parent.parentNode.selectedIndex;
	                    }
	                }
	            }
	        };
	    }

	    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	        jQuery.propFix[this.toLowerCase()] = this;
	    });

	    var rclass = /[\t\r\n\f]/g;

	    function getClass(elem) {
	        return elem.getAttribute && elem.getAttribute("class") || "";
	    }

	    jQuery.fn.extend({
	        addClass: function addClass(value) {
	            var classes,
	                elem,
	                cur,
	                curValue,
	                clazz,
	                j,
	                finalValue,
	                i = 0;

	            if (jQuery.isFunction(value)) {
	                return this.each(function (j) {
	                    jQuery(this).addClass(value.call(this, j, getClass(this)));
	                });
	            }

	            if (typeof value === "string" && value) {
	                classes = value.match(rnotwhite) || [];

	                while (elem = this[i++]) {
	                    curValue = getClass(elem);
	                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

	                    if (cur) {
	                        j = 0;
	                        while (clazz = classes[j++]) {
	                            if (cur.indexOf(" " + clazz + " ") < 0) {
	                                cur += clazz + " ";
	                            }
	                        }

	                        // Only assign if different to avoid unneeded rendering.
	                        finalValue = jQuery.trim(cur);
	                        if (curValue !== finalValue) {
	                            elem.setAttribute("class", finalValue);
	                        }
	                    }
	                }
	            }

	            return this;
	        },

	        removeClass: function removeClass(value) {
	            var classes,
	                elem,
	                cur,
	                curValue,
	                clazz,
	                j,
	                finalValue,
	                i = 0;

	            if (jQuery.isFunction(value)) {
	                return this.each(function (j) {
	                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
	                });
	            }

	            if (!arguments.length) {
	                return this.attr("class", "");
	            }

	            if (typeof value === "string" && value) {
	                classes = value.match(rnotwhite) || [];

	                while (elem = this[i++]) {
	                    curValue = getClass(elem);

	                    // This expression is here for better compressibility (see addClass)
	                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

	                    if (cur) {
	                        j = 0;
	                        while (clazz = classes[j++]) {

	                            // Remove *all* instances
	                            while (cur.indexOf(" " + clazz + " ") > -1) {
	                                cur = cur.replace(" " + clazz + " ", " ");
	                            }
	                        }

	                        // Only assign if different to avoid unneeded rendering.
	                        finalValue = jQuery.trim(cur);
	                        if (curValue !== finalValue) {
	                            elem.setAttribute("class", finalValue);
	                        }
	                    }
	                }
	            }

	            return this;
	        },

	        toggleClass: function toggleClass(value, stateVal) {
	            var type = typeof value === "undefined" ? "undefined" : _typeof(value);

	            if (typeof stateVal === "boolean" && type === "string") {
	                return stateVal ? this.addClass(value) : this.removeClass(value);
	            }

	            if (jQuery.isFunction(value)) {
	                return this.each(function (i) {
	                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
	                });
	            }

	            return this.each(function () {
	                var className, i, self, classNames;

	                if (type === "string") {

	                    // Toggle individual class names
	                    i = 0;
	                    self = jQuery(this);
	                    classNames = value.match(rnotwhite) || [];

	                    while (className = classNames[i++]) {

	                        // Check each className given, space separated list
	                        if (self.hasClass(className)) {
	                            self.removeClass(className);
	                        } else {
	                            self.addClass(className);
	                        }
	                    }

	                    // Toggle whole class name
	                } else if (value === undefined || type === "boolean") {
	                    className = getClass(this);
	                    if (className) {

	                        // Store className if set
	                        dataPriv.set(this, "__className__", className);
	                    }

	                    // If the element has a class name or if we're passed `false`,
	                    // then remove the whole classname (if there was one, the above saved it).
	                    // Otherwise bring back whatever was previously saved (if anything),
	                    // falling back to the empty string if nothing was stored.
	                    if (this.setAttribute) {
	                        this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
	                    }
	                }
	            });
	        },

	        hasClass: function hasClass(selector) {
	            var className,
	                elem,
	                i = 0;

	            className = " " + selector + " ";
	            while (elem = this[i++]) {
	                if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
	                    return true;
	                }
	            }

	            return false;
	        }
	    });

	    var rreturn = /\r/g,
	        rspaces = /[\x20\t\r\n\f]+/g;

	    jQuery.fn.extend({
	        val: function val(value) {
	            var hooks,
	                ret,
	                isFunction,
	                elem = this[0];

	            if (!arguments.length) {
	                if (elem) {
	                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

	                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
	                        return ret;
	                    }

	                    ret = elem.value;

	                    return typeof ret === "string" ?

	                    // Handle most common string cases
	                    ret.replace(rreturn, "") :

	                    // Handle cases where value is null/undef or number
	                    ret == null ? "" : ret;
	                }

	                return;
	            }

	            isFunction = jQuery.isFunction(value);

	            return this.each(function (i) {
	                var val;

	                if (this.nodeType !== 1) {
	                    return;
	                }

	                if (isFunction) {
	                    val = value.call(this, i, jQuery(this).val());
	                } else {
	                    val = value;
	                }

	                // Treat null/undefined as ""; convert numbers to string
	                if (val == null) {
	                    val = "";
	                } else if (typeof val === "number") {
	                    val += "";
	                } else if (jQuery.isArray(val)) {
	                    val = jQuery.map(val, function (value) {
	                        return value == null ? "" : value + "";
	                    });
	                }

	                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

	                // If set returns undefined, fall back to normal setting
	                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
	                    this.value = val;
	                }
	            });
	        }
	    });

	    jQuery.extend({
	        valHooks: {
	            option: {
	                get: function get(elem) {

	                    var val = jQuery.find.attr(elem, "value");
	                    return val != null ? val :

	                    // Support: IE10-11+
	                    // option.text throws exceptions (#14686, #14858)
	                    // Strip and collapse whitespace
	                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	                    jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
	                }
	            },
	            select: {
	                get: function get(elem) {
	                    var value,
	                        option,
	                        options = elem.options,
	                        index = elem.selectedIndex,
	                        one = elem.type === "select-one" || index < 0,
	                        values = one ? null : [],
	                        max = one ? index + 1 : options.length,
	                        i = index < 0 ? max : one ? index : 0;

	                    // Loop through all the selected options
	                    for (; i < max; i++) {
	                        option = options[i];

	                        // IE8-9 doesn't update selected after form reset (#2551)
	                        if ((option.selected || i === index) && (

	                        // Don't return options that are disabled or in a disabled optgroup
	                        support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

	                            // Get the specific value for the option
	                            value = jQuery(option).val();

	                            // We don't need an array for one selects
	                            if (one) {
	                                return value;
	                            }

	                            // Multi-Selects return an array
	                            values.push(value);
	                        }
	                    }

	                    return values;
	                },

	                set: function set(elem, value) {
	                    var optionSet,
	                        option,
	                        options = elem.options,
	                        values = jQuery.makeArray(value),
	                        i = options.length;

	                    while (i--) {
	                        option = options[i];
	                        if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
	                            optionSet = true;
	                        }
	                    }

	                    // Force browsers to behave consistently when non-matching value is set
	                    if (!optionSet) {
	                        elem.selectedIndex = -1;
	                    }
	                    return values;
	                }
	            }
	        }
	    });

	    // Radios and checkboxes getter/setter
	    jQuery.each(["radio", "checkbox"], function () {
	        jQuery.valHooks[this] = {
	            set: function set(elem, value) {
	                if (jQuery.isArray(value)) {
	                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
	                }
	            }
	        };
	        if (!support.checkOn) {
	            jQuery.valHooks[this].get = function (elem) {
	                return elem.getAttribute("value") === null ? "on" : elem.value;
	            };
	        }
	    });

	    // Return jQuery for attributes-only inclusion


	    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	    jQuery.extend(jQuery.event, {

	        trigger: function trigger(event, data, elem, onlyHandlers) {

	            var i,
	                cur,
	                tmp,
	                bubbleType,
	                ontype,
	                handle,
	                special,
	                eventPath = [elem || document],
	                type = hasOwn.call(event, "type") ? event.type : event,
	                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

	            cur = tmp = elem = elem || document;

	            // Don't do events on text and comment nodes
	            if (elem.nodeType === 3 || elem.nodeType === 8) {
	                return;
	            }

	            // focus/blur morphs to focusin/out; ensure we're not firing them right now
	            if (rfocusMorph.test(type + jQuery.event.triggered)) {
	                return;
	            }

	            if (type.indexOf(".") > -1) {

	                // Namespaced trigger; create a regexp to match event type in handle()
	                namespaces = type.split(".");
	                type = namespaces.shift();
	                namespaces.sort();
	            }
	            ontype = type.indexOf(":") < 0 && "on" + type;

	            // Caller can pass in a jQuery.Event object, Object, or just an event type string
	            event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

	            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	            event.isTrigger = onlyHandlers ? 2 : 3;
	            event.namespace = namespaces.join(".");
	            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

	            // Clean up the event in case it is being reused
	            event.result = undefined;
	            if (!event.target) {
	                event.target = elem;
	            }

	            // Clone any incoming data and prepend the event, creating the handler arg list
	            data = data == null ? [event] : jQuery.makeArray(data, [event]);

	            // Allow special events to draw outside the lines
	            special = jQuery.event.special[type] || {};
	            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
	                return;
	            }

	            // Determine event propagation path in advance, per W3C events spec (#9951)
	            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

	                bubbleType = special.delegateType || type;
	                if (!rfocusMorph.test(bubbleType + type)) {
	                    cur = cur.parentNode;
	                }
	                for (; cur; cur = cur.parentNode) {
	                    eventPath.push(cur);
	                    tmp = cur;
	                }

	                // Only add window if we got to document (e.g., not plain obj or detached DOM)
	                if (tmp === (elem.ownerDocument || document)) {
	                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
	                }
	            }

	            // Fire handlers on the event path
	            i = 0;
	            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

	                event.type = i > 1 ? bubbleType : special.bindType || type;

	                // jQuery handler
	                handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
	                if (handle) {
	                    handle.apply(cur, data);
	                }

	                // Native handler
	                handle = ontype && cur[ontype];
	                if (handle && handle.apply && acceptData(cur)) {
	                    event.result = handle.apply(cur, data);
	                    if (event.result === false) {
	                        event.preventDefault();
	                    }
	                }
	            }
	            event.type = type;

	            // If nobody prevented the default action, do it now
	            if (!onlyHandlers && !event.isDefaultPrevented()) {

	                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

	                    // Call a native DOM method on the target with the same name name as the event.
	                    // Don't do default actions on window, that's where global variables be (#6170)
	                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

	                        // Don't re-trigger an onFOO event when we call its FOO() method
	                        tmp = elem[ontype];

	                        if (tmp) {
	                            elem[ontype] = null;
	                        }

	                        // Prevent re-triggering of the same event, since we already bubbled it above
	                        jQuery.event.triggered = type;
	                        elem[type]();
	                        jQuery.event.triggered = undefined;

	                        if (tmp) {
	                            elem[ontype] = tmp;
	                        }
	                    }
	                }
	            }

	            return event.result;
	        },

	        // Piggyback on a donor event to simulate a different one
	        // Used only for `focus(in | out)` events
	        simulate: function simulate(type, elem, event) {
	            var e = jQuery.extend(new jQuery.Event(), event, {
	                type: type,
	                isSimulated: true
	            });

	            jQuery.event.trigger(e, null, elem);
	        }

	    });

	    jQuery.fn.extend({

	        trigger: function trigger(type, data) {
	            return this.each(function () {
	                jQuery.event.trigger(type, data, this);
	            });
	        },
	        triggerHandler: function triggerHandler(type, data) {
	            var elem = this[0];
	            if (elem) {
	                return jQuery.event.trigger(type, data, elem, true);
	            }
	        }
	    });

	    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

	        // Handle event binding
	        jQuery.fn[name] = function (data, fn) {
	            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
	        };
	    });

	    jQuery.fn.extend({
	        hover: function hover(fnOver, fnOut) {
	            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
	        }
	    });

	    support.focusin = "onfocusin" in window;

	    // Support: Firefox
	    // Firefox doesn't have focus(in | out) events
	    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	    //
	    // Support: Chrome, Safari
	    // focus(in | out) events fire after focus & blur events,
	    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	    // Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	    if (!support.focusin) {
	        jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

	            // Attach a single capturing handler on the document while someone wants focusin/focusout
	            var handler = function handler(event) {
	                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
	            };

	            jQuery.event.special[fix] = {
	                setup: function setup() {
	                    var doc = this.ownerDocument || this,
	                        attaches = dataPriv.access(doc, fix);

	                    if (!attaches) {
	                        doc.addEventListener(orig, handler, true);
	                    }
	                    dataPriv.access(doc, fix, (attaches || 0) + 1);
	                },
	                teardown: function teardown() {
	                    var doc = this.ownerDocument || this,
	                        attaches = dataPriv.access(doc, fix) - 1;

	                    if (!attaches) {
	                        doc.removeEventListener(orig, handler, true);
	                        dataPriv.remove(doc, fix);
	                    } else {
	                        dataPriv.access(doc, fix, attaches);
	                    }
	                }
	            };
	        });
	    }
	    var location = window.location;

	    var nonce = jQuery.now();

	    var rquery = /\?/;

	    // Support: Android 2.3
	    // Workaround failure to string-cast null input
	    jQuery.parseJSON = function (data) {
	        return JSON.parse(data + "");
	    };

	    // Cross-browser xml parsing
	    jQuery.parseXML = function (data) {
	        var xml;
	        if (!data || typeof data !== "string") {
	            return null;
	        }

	        // Support: IE9
	        try {
	            xml = new window.DOMParser().parseFromString(data, "text/xml");
	        } catch (e) {
	            xml = undefined;
	        }

	        if (!xml || xml.getElementsByTagName("parsererror").length) {
	            jQuery.error("Invalid XML: " + data);
	        }
	        return xml;
	    };

	    var rhash = /#.*$/,
	        rts = /([?&])_=[^&]*/,
	        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	    // #7653, #8125, #8152: local protocol detection
	    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	        rnoContent = /^(?:GET|HEAD)$/,
	        rprotocol = /^\/\//,


	    /* Prefilters
	     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	     * 2) These are called:
	     *    - BEFORE asking for a transport
	     *    - AFTER param serialization (s.data is a string if s.processData is true)
	     * 3) key is the dataType
	     * 4) the catchall symbol "*" can be used
	     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	     */
	    prefilters = {},


	    /* Transports bindings
	     * 1) key is the dataType
	     * 2) the catchall symbol "*" can be used
	     * 3) selection will start with transport dataType and THEN go to "*" if needed
	     */
	    transports = {},


	    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	    allTypes = "*/".concat("*"),


	    // Anchor tag for parsing the document origin
	    originAnchor = document.createElement("a");
	    originAnchor.href = location.href;

	    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	    function addToPrefiltersOrTransports(structure) {

	        // dataTypeExpression is optional and defaults to "*"
	        return function (dataTypeExpression, func) {

	            if (typeof dataTypeExpression !== "string") {
	                func = dataTypeExpression;
	                dataTypeExpression = "*";
	            }

	            var dataType,
	                i = 0,
	                dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

	            if (jQuery.isFunction(func)) {

	                // For each dataType in the dataTypeExpression
	                while (dataType = dataTypes[i++]) {

	                    // Prepend if requested
	                    if (dataType[0] === "+") {
	                        dataType = dataType.slice(1) || "*";
	                        (structure[dataType] = structure[dataType] || []).unshift(func);

	                        // Otherwise append
	                    } else {
	                        (structure[dataType] = structure[dataType] || []).push(func);
	                    }
	                }
	            }
	        };
	    }

	    // Base inspection function for prefilters and transports
	    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

	        var inspected = {},
	            seekingTransport = structure === transports;

	        function inspect(dataType) {
	            var selected;
	            inspected[dataType] = true;
	            jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
	                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
	                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

	                    options.dataTypes.unshift(dataTypeOrTransport);
	                    inspect(dataTypeOrTransport);
	                    return false;
	                } else if (seekingTransport) {
	                    return !(selected = dataTypeOrTransport);
	                }
	            });
	            return selected;
	        }

	        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	    }

	    // A special extend for ajax options
	    // that takes "flat" options (not to be deep extended)
	    // Fixes #9887
	    function ajaxExtend(target, src) {
	        var key,
	            deep,
	            flatOptions = jQuery.ajaxSettings.flatOptions || {};

	        for (key in src) {
	            if (src[key] !== undefined) {
	                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
	            }
	        }
	        if (deep) {
	            jQuery.extend(true, target, deep);
	        }

	        return target;
	    }

	    /* Handles responses to an ajax request:
	     * - finds the right dataType (mediates between content-type and expected dataType)
	     * - returns the corresponding response
	     */
	    function ajaxHandleResponses(s, jqXHR, responses) {

	        var ct,
	            type,
	            finalDataType,
	            firstDataType,
	            contents = s.contents,
	            dataTypes = s.dataTypes;

	        // Remove auto dataType and get content-type in the process
	        while (dataTypes[0] === "*") {
	            dataTypes.shift();
	            if (ct === undefined) {
	                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
	            }
	        }

	        // Check if we're dealing with a known content-type
	        if (ct) {
	            for (type in contents) {
	                if (contents[type] && contents[type].test(ct)) {
	                    dataTypes.unshift(type);
	                    break;
	                }
	            }
	        }

	        // Check to see if we have a response for the expected dataType
	        if (dataTypes[0] in responses) {
	            finalDataType = dataTypes[0];
	        } else {

	            // Try convertible dataTypes
	            for (type in responses) {
	                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
	                    finalDataType = type;
	                    break;
	                }
	                if (!firstDataType) {
	                    firstDataType = type;
	                }
	            }

	            // Or just use first one
	            finalDataType = finalDataType || firstDataType;
	        }

	        // If we found a dataType
	        // We add the dataType to the list if needed
	        // and return the corresponding response
	        if (finalDataType) {
	            if (finalDataType !== dataTypes[0]) {
	                dataTypes.unshift(finalDataType);
	            }
	            return responses[finalDataType];
	        }
	    }

	    /* Chain conversions given the request and the original response
	     * Also sets the responseXXX fields on the jqXHR instance
	     */
	    function ajaxConvert(s, response, jqXHR, isSuccess) {
	        var conv2,
	            current,
	            conv,
	            tmp,
	            prev,
	            converters = {},


	        // Work with a copy of dataTypes in case we need to modify it for conversion
	        dataTypes = s.dataTypes.slice();

	        // Create converters map with lowercased keys
	        if (dataTypes[1]) {
	            for (conv in s.converters) {
	                converters[conv.toLowerCase()] = s.converters[conv];
	            }
	        }

	        current = dataTypes.shift();

	        // Convert to each sequential dataType
	        while (current) {

	            if (s.responseFields[current]) {
	                jqXHR[s.responseFields[current]] = response;
	            }

	            // Apply the dataFilter if provided
	            if (!prev && isSuccess && s.dataFilter) {
	                response = s.dataFilter(response, s.dataType);
	            }

	            prev = current;
	            current = dataTypes.shift();

	            if (current) {

	                // There's only work to do if current dataType is non-auto
	                if (current === "*") {

	                    current = prev;

	                    // Convert response if prev dataType is non-auto and differs from current
	                } else if (prev !== "*" && prev !== current) {

	                    // Seek a direct converter
	                    conv = converters[prev + " " + current] || converters["* " + current];

	                    // If none found, seek a pair
	                    if (!conv) {
	                        for (conv2 in converters) {

	                            // If conv2 outputs current
	                            tmp = conv2.split(" ");
	                            if (tmp[1] === current) {

	                                // If prev can be converted to accepted input
	                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
	                                if (conv) {

	                                    // Condense equivalence converters
	                                    if (conv === true) {
	                                        conv = converters[conv2];

	                                        // Otherwise, insert the intermediate dataType
	                                    } else if (converters[conv2] !== true) {
	                                        current = tmp[0];
	                                        dataTypes.unshift(tmp[1]);
	                                    }
	                                    break;
	                                }
	                            }
	                        }
	                    }

	                    // Apply converter (if not an equivalence)
	                    if (conv !== true) {

	                        // Unless errors are allowed to bubble, catch and return them
	                        if (conv && s.throws) {
	                            response = conv(response);
	                        } else {
	                            try {
	                                response = conv(response);
	                            } catch (e) {
	                                return {
	                                    state: "parsererror",
	                                    error: conv ? e : "No conversion from " + prev + " to " + current
	                                };
	                            }
	                        }
	                    }
	                }
	            }
	        }

	        return { state: "success", data: response };
	    }

	    jQuery.extend({

	        // Counter for holding the number of active queries
	        active: 0,

	        // Last-Modified header cache for next request
	        lastModified: {},
	        etag: {},

	        ajaxSettings: {
	            url: location.href,
	            type: "GET",
	            isLocal: rlocalProtocol.test(location.protocol),
	            global: true,
	            processData: true,
	            async: true,
	            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	            /*
	             timeout: 0,
	             data: null,
	             dataType: null,
	             username: null,
	             password: null,
	             cache: null,
	             throws: false,
	             traditional: false,
	             headers: {},
	             */

	            accepts: {
	                "*": allTypes,
	                text: "text/plain",
	                html: "text/html",
	                xml: "application/xml, text/xml",
	                json: "application/json, text/javascript"
	            },

	            contents: {
	                xml: /\bxml\b/,
	                html: /\bhtml/,
	                json: /\bjson\b/
	            },

	            responseFields: {
	                xml: "responseXML",
	                text: "responseText",
	                json: "responseJSON"
	            },

	            // Data converters
	            // Keys separate source (or catchall "*") and destination types with a single space
	            converters: {

	                // Convert anything to text
	                "* text": String,

	                // Text to html (true = no transformation)
	                "text html": true,

	                // Evaluate text as a json expression
	                "text json": jQuery.parseJSON,

	                // Parse text as xml
	                "text xml": jQuery.parseXML
	            },

	            // For options that shouldn't be deep extended:
	            // you can add your own custom options here if
	            // and when you create one that shouldn't be
	            // deep extended (see ajaxExtend)
	            flatOptions: {
	                url: true,
	                context: true
	            }
	        },

	        // Creates a full fledged settings object into target
	        // with both ajaxSettings and settings fields.
	        // If target is omitted, writes into ajaxSettings.
	        ajaxSetup: function ajaxSetup(target, settings) {
	            return settings ?

	            // Building a settings object
	            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

	            // Extending ajaxSettings
	            ajaxExtend(jQuery.ajaxSettings, target);
	        },

	        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
	        ajaxTransport: addToPrefiltersOrTransports(transports),

	        // Main method
	        ajax: function ajax(url, options) {

	            // If url is an object, simulate pre-1.5 signature
	            if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
	                options = url;
	                url = undefined;
	            }

	            // Force options to be an object
	            options = options || {};

	            var transport,


	            // URL without anti-cache param
	            cacheURL,


	            // Response headers
	            responseHeadersString,
	                responseHeaders,


	            // timeout handle
	            timeoutTimer,


	            // Url cleanup var
	            urlAnchor,


	            // To know if global events are to be dispatched
	            fireGlobals,


	            // Loop variable
	            i,


	            // Create the final options object
	            s = jQuery.ajaxSetup({}, options),


	            // Callbacks context
	            callbackContext = s.context || s,


	            // Context for global events is callbackContext if it is a DOM node or jQuery collection
	            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


	            // Deferreds
	            deferred = jQuery.Deferred(),
	                completeDeferred = jQuery.Callbacks("once memory"),


	            // Status-dependent callbacks
	            _statusCode = s.statusCode || {},


	            // Headers (they are sent all at once)
	            requestHeaders = {},
	                requestHeadersNames = {},


	            // The jqXHR state
	            state = 0,


	            // Default abort message
	            strAbort = "canceled",


	            // Fake xhr
	            jqXHR = {
	                readyState: 0,

	                // Builds headers hashtable if needed
	                getResponseHeader: function getResponseHeader(key) {
	                    var match;
	                    if (state === 2) {
	                        if (!responseHeaders) {
	                            responseHeaders = {};
	                            while (match = rheaders.exec(responseHeadersString)) {
	                                responseHeaders[match[1].toLowerCase()] = match[2];
	                            }
	                        }
	                        match = responseHeaders[key.toLowerCase()];
	                    }
	                    return match == null ? null : match;
	                },

	                // Raw string
	                getAllResponseHeaders: function getAllResponseHeaders() {
	                    return state === 2 ? responseHeadersString : null;
	                },

	                // Caches the header
	                setRequestHeader: function setRequestHeader(name, value) {
	                    var lname = name.toLowerCase();
	                    if (!state) {
	                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
	                        requestHeaders[name] = value;
	                    }
	                    return this;
	                },

	                // Overrides response content-type header
	                overrideMimeType: function overrideMimeType(type) {
	                    if (!state) {
	                        s.mimeType = type;
	                    }
	                    return this;
	                },

	                // Status-dependent callbacks
	                statusCode: function statusCode(map) {
	                    var code;
	                    if (map) {
	                        if (state < 2) {
	                            for (code in map) {

	                                // Lazy-add the new callback in a way that preserves old ones
	                                _statusCode[code] = [_statusCode[code], map[code]];
	                            }
	                        } else {

	                            // Execute the appropriate callbacks
	                            jqXHR.always(map[jqXHR.status]);
	                        }
	                    }
	                    return this;
	                },

	                // Cancel the request
	                abort: function abort(statusText) {
	                    var finalText = statusText || strAbort;
	                    if (transport) {
	                        transport.abort(finalText);
	                    }
	                    done(0, finalText);
	                    return this;
	                }
	            };

	            // Attach deferreds
	            deferred.promise(jqXHR).complete = completeDeferred.add;
	            jqXHR.success = jqXHR.done;
	            jqXHR.error = jqXHR.fail;

	            // Remove hash character (#7531: and string promotion)
	            // Add protocol if not provided (prefilters might expect it)
	            // Handle falsy url in the settings object (#10093: consistency with old signature)
	            // We also use the url parameter if available
	            s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");

	            // Alias method option to type as per ticket #12004
	            s.type = options.method || options.type || s.method || s.type;

	            // Extract dataTypes list
	            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

	            // A cross-domain request is in order when the origin doesn't match the current origin.
	            if (s.crossDomain == null) {
	                urlAnchor = document.createElement("a");

	                // Support: IE8-11+
	                // IE throws exception if url is malformed, e.g. http://example.com:80x/
	                try {
	                    urlAnchor.href = s.url;

	                    // Support: IE8-11+
	                    // Anchor's host property isn't correctly set when s.url is relative
	                    urlAnchor.href = urlAnchor.href;
	                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
	                } catch (e) {

	                    // If there is an error parsing the URL, assume it is crossDomain,
	                    // it can be rejected by the transport if it is invalid
	                    s.crossDomain = true;
	                }
	            }

	            // Convert data if not already a string
	            if (s.data && s.processData && typeof s.data !== "string") {
	                s.data = jQuery.param(s.data, s.traditional);
	            }

	            // Apply prefilters
	            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

	            // If request was aborted inside a prefilter, stop there
	            if (state === 2) {
	                return jqXHR;
	            }

	            // We can fire global events as of now if asked to
	            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	            fireGlobals = jQuery.event && s.global;

	            // Watch for a new set of requests
	            if (fireGlobals && jQuery.active++ === 0) {
	                jQuery.event.trigger("ajaxStart");
	            }

	            // Uppercase the type
	            s.type = s.type.toUpperCase();

	            // Determine if request has content
	            s.hasContent = !rnoContent.test(s.type);

	            // Save the URL in case we're toying with the If-Modified-Since
	            // and/or If-None-Match header later on
	            cacheURL = s.url;

	            // More options handling for requests with no content
	            if (!s.hasContent) {

	                // If data is available, append data to url
	                if (s.data) {
	                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;

	                    // #9682: remove data so that it's not used in an eventual retry
	                    delete s.data;
	                }

	                // Add anti-cache in url if needed
	                if (s.cache === false) {
	                    s.url = rts.test(cacheURL) ?

	                    // If there is already a '_' parameter, set its value
	                    cacheURL.replace(rts, "$1_=" + nonce++) :

	                    // Otherwise add one to the end
	                    cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
	                }
	            }

	            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	            if (s.ifModified) {
	                if (jQuery.lastModified[cacheURL]) {
	                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
	                }
	                if (jQuery.etag[cacheURL]) {
	                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
	                }
	            }

	            // Set the correct header, if data is being sent
	            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
	                jqXHR.setRequestHeader("Content-Type", s.contentType);
	            }

	            // Set the Accepts header for the server, depending on the dataType
	            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

	            // Check for headers option
	            for (i in s.headers) {
	                jqXHR.setRequestHeader(i, s.headers[i]);
	            }

	            // Allow custom headers/mimetypes and early abort
	            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {

	                // Abort if not done already and return
	                return jqXHR.abort();
	            }

	            // Aborting is no longer a cancellation
	            strAbort = "abort";

	            // Install callbacks on deferreds
	            for (i in { success: 1, error: 1, complete: 1 }) {
	                jqXHR[i](s[i]);
	            }

	            // Get transport
	            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

	            // If no transport, we auto-abort
	            if (!transport) {
	                done(-1, "No Transport");
	            } else {
	                jqXHR.readyState = 1;

	                // Send global event
	                if (fireGlobals) {
	                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
	                }

	                // If request was aborted inside ajaxSend, stop there
	                if (state === 2) {
	                    return jqXHR;
	                }

	                // Timeout
	                if (s.async && s.timeout > 0) {
	                    timeoutTimer = window.setTimeout(function () {
	                        jqXHR.abort("timeout");
	                    }, s.timeout);
	                }

	                try {
	                    state = 1;
	                    transport.send(requestHeaders, done);
	                } catch (e) {

	                    // Propagate exception as error if not done
	                    if (state < 2) {
	                        done(-1, e);

	                        // Simply rethrow otherwise
	                    } else {
	                        throw e;
	                    }
	                }
	            }

	            // Callback for when everything is done
	            function done(status, nativeStatusText, responses, headers) {
	                var isSuccess,
	                    success,
	                    error,
	                    response,
	                    modified,
	                    statusText = nativeStatusText;

	                // Called once
	                if (state === 2) {
	                    return;
	                }

	                // State is "done" now
	                state = 2;

	                // Clear timeout if it exists
	                if (timeoutTimer) {
	                    window.clearTimeout(timeoutTimer);
	                }

	                // Dereference transport for early garbage collection
	                // (no matter how long the jqXHR object will be used)
	                transport = undefined;

	                // Cache response headers
	                responseHeadersString = headers || "";

	                // Set readyState
	                jqXHR.readyState = status > 0 ? 4 : 0;

	                // Determine if successful
	                isSuccess = status >= 200 && status < 300 || status === 304;

	                // Get response data
	                if (responses) {
	                    response = ajaxHandleResponses(s, jqXHR, responses);
	                }

	                // Convert no matter what (that way responseXXX fields are always set)
	                response = ajaxConvert(s, response, jqXHR, isSuccess);

	                // If successful, handle type chaining
	                if (isSuccess) {

	                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	                    if (s.ifModified) {
	                        modified = jqXHR.getResponseHeader("Last-Modified");
	                        if (modified) {
	                            jQuery.lastModified[cacheURL] = modified;
	                        }
	                        modified = jqXHR.getResponseHeader("etag");
	                        if (modified) {
	                            jQuery.etag[cacheURL] = modified;
	                        }
	                    }

	                    // if no content
	                    if (status === 204 || s.type === "HEAD") {
	                        statusText = "nocontent";

	                        // if not modified
	                    } else if (status === 304) {
	                        statusText = "notmodified";

	                        // If we have data, let's convert it
	                    } else {
	                        statusText = response.state;
	                        success = response.data;
	                        error = response.error;
	                        isSuccess = !error;
	                    }
	                } else {

	                    // Extract error from statusText and normalize for non-aborts
	                    error = statusText;
	                    if (status || !statusText) {
	                        statusText = "error";
	                        if (status < 0) {
	                            status = 0;
	                        }
	                    }
	                }

	                // Set data for the fake xhr object
	                jqXHR.status = status;
	                jqXHR.statusText = (nativeStatusText || statusText) + "";

	                // Success/Error
	                if (isSuccess) {
	                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
	                } else {
	                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
	                }

	                // Status-dependent callbacks
	                jqXHR.statusCode(_statusCode);
	                _statusCode = undefined;

	                if (fireGlobals) {
	                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
	                }

	                // Complete
	                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

	                if (fireGlobals) {
	                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

	                    // Handle the global AJAX counter
	                    if (! --jQuery.active) {
	                        jQuery.event.trigger("ajaxStop");
	                    }
	                }
	            }

	            return jqXHR;
	        },

	        getJSON: function getJSON(url, data, callback) {
	            return jQuery.get(url, data, callback, "json");
	        },

	        getScript: function getScript(url, callback) {
	            return jQuery.get(url, undefined, callback, "script");
	        }
	    });

	    jQuery.each(["get", "post"], function (i, method) {
	        jQuery[method] = function (url, data, callback, type) {

	            // Shift arguments if data argument was omitted
	            if (jQuery.isFunction(data)) {
	                type = type || callback;
	                callback = data;
	                data = undefined;
	            }

	            // The url can be an options object (which then must have .url)
	            return jQuery.ajax(jQuery.extend({
	                url: url,
	                type: method,
	                dataType: type,
	                data: data,
	                success: callback
	            }, jQuery.isPlainObject(url) && url));
	        };
	    });

	    jQuery._evalUrl = function (url) {
	        return jQuery.ajax({
	            url: url,

	            // Make this explicit, since user can override this through ajaxSetup (#11264)
	            type: "GET",
	            dataType: "script",
	            async: false,
	            global: false,
	            "throws": true
	        });
	    };

	    jQuery.fn.extend({
	        wrapAll: function wrapAll(html) {
	            var wrap;

	            if (jQuery.isFunction(html)) {
	                return this.each(function (i) {
	                    jQuery(this).wrapAll(html.call(this, i));
	                });
	            }

	            if (this[0]) {

	                // The elements to wrap the target around
	                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

	                if (this[0].parentNode) {
	                    wrap.insertBefore(this[0]);
	                }

	                wrap.map(function () {
	                    var elem = this;

	                    while (elem.firstElementChild) {
	                        elem = elem.firstElementChild;
	                    }

	                    return elem;
	                }).append(this);
	            }

	            return this;
	        },

	        wrapInner: function wrapInner(html) {
	            if (jQuery.isFunction(html)) {
	                return this.each(function (i) {
	                    jQuery(this).wrapInner(html.call(this, i));
	                });
	            }

	            return this.each(function () {
	                var self = jQuery(this),
	                    contents = self.contents();

	                if (contents.length) {
	                    contents.wrapAll(html);
	                } else {
	                    self.append(html);
	                }
	            });
	        },

	        wrap: function wrap(html) {
	            var isFunction = jQuery.isFunction(html);

	            return this.each(function (i) {
	                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
	            });
	        },

	        unwrap: function unwrap() {
	            return this.parent().each(function () {
	                if (!jQuery.nodeName(this, "body")) {
	                    jQuery(this).replaceWith(this.childNodes);
	                }
	            }).end();
	        }
	    });

	    jQuery.expr.filters.hidden = function (elem) {
	        return !jQuery.expr.filters.visible(elem);
	    };
	    jQuery.expr.filters.visible = function (elem) {

	        // Support: Opera <= 12.12
	        // Opera reports offsetWidths and offsetHeights less than zero on some elements
	        // Use OR instead of AND as the element is not visible if either is true
	        // See tickets #10406 and #13132
	        return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	    };

	    var r20 = /%20/g,
	        rbracket = /\[\]$/,
	        rCRLF = /\r?\n/g,
	        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	        rsubmittable = /^(?:input|select|textarea|keygen)/i;

	    function buildParams(prefix, obj, traditional, add) {
	        var name;

	        if (jQuery.isArray(obj)) {

	            // Serialize array item.
	            jQuery.each(obj, function (i, v) {
	                if (traditional || rbracket.test(prefix)) {

	                    // Treat each array item as a scalar.
	                    add(prefix, v);
	                } else {

	                    // Item is non-scalar (array or object), encode its numeric index.
	                    buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
	                }
	            });
	        } else if (!traditional && jQuery.type(obj) === "object") {

	            // Serialize object item.
	            for (name in obj) {
	                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
	            }
	        } else {

	            // Serialize scalar item.
	            add(prefix, obj);
	        }
	    }

	    // Serialize an array of form elements or a set of
	    // key/values into a query string
	    jQuery.param = function (a, traditional) {
	        var prefix,
	            s = [],
	            add = function add(key, value) {

	            // If value is a function, invoke it and return its value
	            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
	            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
	        };

	        // Set traditional to true for jQuery <= 1.3.2 behavior.
	        if (traditional === undefined) {
	            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	        }

	        // If an array was passed in, assume that it is an array of form elements.
	        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

	            // Serialize the form elements
	            jQuery.each(a, function () {
	                add(this.name, this.value);
	            });
	        } else {

	            // If traditional, encode the "old" way (the way 1.3.2 or older
	            // did it), otherwise encode params recursively.
	            for (prefix in a) {
	                buildParams(prefix, a[prefix], traditional, add);
	            }
	        }

	        // Return the resulting serialization
	        return s.join("&").replace(r20, "+");
	    };

	    jQuery.fn.extend({
	        serialize: function serialize() {
	            return jQuery.param(this.serializeArray());
	        },
	        serializeArray: function serializeArray() {
	            return this.map(function () {

	                // Can add propHook for "elements" to filter or add form elements
	                var elements = jQuery.prop(this, "elements");
	                return elements ? jQuery.makeArray(elements) : this;
	            }).filter(function () {
	                var type = this.type;

	                // Use .is( ":disabled" ) so that fieldset[disabled] works
	                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
	            }).map(function (i, elem) {
	                var val = jQuery(this).val();

	                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
	                    return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
	                }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
	            }).get();
	        }
	    });

	    jQuery.ajaxSettings.xhr = function () {
	        try {
	            return new window.XMLHttpRequest();
	        } catch (e) {}
	    };

	    var xhrSuccessStatus = {

	        // File protocol always yields status code 0, assume 200
	        0: 200,

	        // Support: IE9
	        // #1450: sometimes IE returns 1223 when it should be 204
	        1223: 204
	    },
	        xhrSupported = jQuery.ajaxSettings.xhr();

	    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	    support.ajax = xhrSupported = !!xhrSupported;

	    jQuery.ajaxTransport(function (options) {
	        var _callback, errorCallback;

	        // Cross domain only allowed if supported through XMLHttpRequest
	        if (support.cors || xhrSupported && !options.crossDomain) {
	            return {
	                send: function send(headers, complete) {
	                    var i,
	                        xhr = options.xhr();

	                    xhr.open(options.type, options.url, options.async, options.username, options.password);

	                    // Apply custom fields if provided
	                    if (options.xhrFields) {
	                        for (i in options.xhrFields) {
	                            xhr[i] = options.xhrFields[i];
	                        }
	                    }

	                    // Override mime type if needed
	                    if (options.mimeType && xhr.overrideMimeType) {
	                        xhr.overrideMimeType(options.mimeType);
	                    }

	                    // X-Requested-With header
	                    // For cross-domain requests, seeing as conditions for a preflight are
	                    // akin to a jigsaw puzzle, we simply never set it to be sure.
	                    // (it can always be set on a per-request basis or even using ajaxSetup)
	                    // For same-domain requests, won't change header if already provided.
	                    if (!options.crossDomain && !headers["X-Requested-With"]) {
	                        headers["X-Requested-With"] = "XMLHttpRequest";
	                    }

	                    // Set headers
	                    for (i in headers) {
	                        xhr.setRequestHeader(i, headers[i]);
	                    }

	                    // Callback
	                    _callback = function callback(type) {
	                        return function () {
	                            if (_callback) {
	                                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

	                                if (type === "abort") {
	                                    xhr.abort();
	                                } else if (type === "error") {

	                                    // Support: IE9
	                                    // On a manual native abort, IE9 throws
	                                    // errors on any property access that is not readyState
	                                    if (typeof xhr.status !== "number") {
	                                        complete(0, "error");
	                                    } else {
	                                        complete(

	                                        // File: protocol always yields status 0; see #8605, #14207
	                                        xhr.status, xhr.statusText);
	                                    }
	                                } else {
	                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

	                                    // Support: IE9 only
	                                    // IE9 has no XHR2 but throws on binary (trac-11426)
	                                    // For XHR2 non-text, let the caller handle it (gh-2498)
	                                    (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
	                                }
	                            }
	                        };
	                    };

	                    // Listen to events
	                    xhr.onload = _callback();
	                    errorCallback = xhr.onerror = _callback("error");

	                    // Support: IE9
	                    // Use onreadystatechange to replace onabort
	                    // to handle uncaught aborts
	                    if (xhr.onabort !== undefined) {
	                        xhr.onabort = errorCallback;
	                    } else {
	                        xhr.onreadystatechange = function () {

	                            // Check readyState before timeout as it changes
	                            if (xhr.readyState === 4) {

	                                // Allow onerror to be called first,
	                                // but that will not handle a native abort
	                                // Also, save errorCallback to a variable
	                                // as xhr.onerror cannot be accessed
	                                window.setTimeout(function () {
	                                    if (_callback) {
	                                        errorCallback();
	                                    }
	                                });
	                            }
	                        };
	                    }

	                    // Create the abort callback
	                    _callback = _callback("abort");

	                    try {

	                        // Do send the request (this may raise an exception)
	                        xhr.send(options.hasContent && options.data || null);
	                    } catch (e) {

	                        // #14683: Only rethrow if this hasn't been notified as an error yet
	                        if (_callback) {
	                            throw e;
	                        }
	                    }
	                },

	                abort: function abort() {
	                    if (_callback) {
	                        _callback();
	                    }
	                }
	            };
	        }
	    });

	    // Install script dataType
	    jQuery.ajaxSetup({
	        accepts: {
	            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
	        },
	        contents: {
	            script: /\b(?:java|ecma)script\b/
	        },
	        converters: {
	            "text script": function textScript(text) {
	                jQuery.globalEval(text);
	                return text;
	            }
	        }
	    });

	    // Handle cache's special case and crossDomain
	    jQuery.ajaxPrefilter("script", function (s) {
	        if (s.cache === undefined) {
	            s.cache = false;
	        }
	        if (s.crossDomain) {
	            s.type = "GET";
	        }
	    });

	    // Bind script tag hack transport
	    jQuery.ajaxTransport("script", function (s) {

	        // This transport only deals with cross domain requests
	        if (s.crossDomain) {
	            var script, _callback2;
	            return {
	                send: function send(_, complete) {
	                    script = jQuery("<script>").prop({
	                        charset: s.scriptCharset,
	                        src: s.url
	                    }).on("load error", _callback2 = function callback(evt) {
	                        script.remove();
	                        _callback2 = null;
	                        if (evt) {
	                            complete(evt.type === "error" ? 404 : 200, evt.type);
	                        }
	                    });

	                    // Use native DOM manipulation to avoid our domManip AJAX trickery
	                    document.head.appendChild(script[0]);
	                },
	                abort: function abort() {
	                    if (_callback2) {
	                        _callback2();
	                    }
	                }
	            };
	        }
	    });

	    var oldCallbacks = [],
	        rjsonp = /(=)\?(?=&|$)|\?\?/;

	    // Default jsonp settings
	    jQuery.ajaxSetup({
	        jsonp: "callback",
	        jsonpCallback: function jsonpCallback() {
	            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
	            this[callback] = true;
	            return callback;
	        }
	    });

	    // Detect, normalize options and install callbacks for jsonp requests
	    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

	        var callbackName,
	            overwritten,
	            responseContainer,
	            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

	        // Handle iff the expected data type is "jsonp" or we have a parameter to set
	        if (jsonProp || s.dataTypes[0] === "jsonp") {

	            // Get callback name, remembering preexisting value associated with it
	            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

	            // Insert callback into url or form data
	            if (jsonProp) {
	                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
	            } else if (s.jsonp !== false) {
	                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
	            }

	            // Use data converter to retrieve json after script execution
	            s.converters["script json"] = function () {
	                if (!responseContainer) {
	                    jQuery.error(callbackName + " was not called");
	                }
	                return responseContainer[0];
	            };

	            // Force json dataType
	            s.dataTypes[0] = "json";

	            // Install callback
	            overwritten = window[callbackName];
	            window[callbackName] = function () {
	                responseContainer = arguments;
	            };

	            // Clean-up function (fires after converters)
	            jqXHR.always(function () {

	                // If previous value didn't exist - remove it
	                if (overwritten === undefined) {
	                    jQuery(window).removeProp(callbackName);

	                    // Otherwise restore preexisting value
	                } else {
	                    window[callbackName] = overwritten;
	                }

	                // Save back as free
	                if (s[callbackName]) {

	                    // Make sure that re-using the options doesn't screw things around
	                    s.jsonpCallback = originalSettings.jsonpCallback;

	                    // Save the callback name for future use
	                    oldCallbacks.push(callbackName);
	                }

	                // Call if it was a function and we have a response
	                if (responseContainer && jQuery.isFunction(overwritten)) {
	                    overwritten(responseContainer[0]);
	                }

	                responseContainer = overwritten = undefined;
	            });

	            // Delegate to script
	            return "script";
	        }
	    });

	    // Argument "data" should be string of html
	    // context (optional): If specified, the fragment will be created in this context,
	    // defaults to document
	    // keepScripts (optional): If true, will include scripts passed in the html string
	    jQuery.parseHTML = function (data, context, keepScripts) {
	        if (!data || typeof data !== "string") {
	            return null;
	        }
	        if (typeof context === "boolean") {
	            keepScripts = context;
	            context = false;
	        }
	        context = context || document;

	        var parsed = rsingleTag.exec(data),
	            scripts = !keepScripts && [];

	        // Single tag
	        if (parsed) {
	            return [context.createElement(parsed[1])];
	        }

	        parsed = buildFragment([data], context, scripts);

	        if (scripts && scripts.length) {
	            jQuery(scripts).remove();
	        }

	        return jQuery.merge([], parsed.childNodes);
	    };

	    // Keep a copy of the old load method
	    var _load = jQuery.fn.load;

	    /**
	     * Load a url into a page
	     */
	    jQuery.fn.load = function (url, params, callback) {
	        if (typeof url !== "string" && _load) {
	            return _load.apply(this, arguments);
	        }

	        var selector,
	            type,
	            response,
	            self = this,
	            off = url.indexOf(" ");

	        if (off > -1) {
	            selector = jQuery.trim(url.slice(off));
	            url = url.slice(0, off);
	        }

	        // If it's a function
	        if (jQuery.isFunction(params)) {

	            // We assume that it's the callback
	            callback = params;
	            params = undefined;

	            // Otherwise, build a param string
	        } else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
	            type = "POST";
	        }

	        // If we have elements to modify, make the request
	        if (self.length > 0) {
	            jQuery.ajax({
	                url: url,

	                // If "type" variable is undefined, then "GET" method will be used.
	                // Make value of this field explicit since
	                // user can override it through ajaxSetup method
	                type: type || "GET",
	                dataType: "html",
	                data: params
	            }).done(function (responseText) {

	                // Save response for use in complete callback
	                response = arguments;

	                self.html(selector ?

	                // If a selector was specified, locate the right elements in a dummy div
	                // Exclude scripts to avoid IE 'Permission Denied' errors
	                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

	                // Otherwise use the full result
	                responseText);

	                // If the request succeeds, this function gets "data", "status", "jqXHR"
	                // but they are ignored because response was set above.
	                // If it fails, this function gets "jqXHR", "status", "error"
	            }).always(callback && function (jqXHR, status) {
	                self.each(function () {
	                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
	                });
	            });
	        }

	        return this;
	    };

	    // Attach a bunch of functions for handling common AJAX events
	    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
	        jQuery.fn[type] = function (fn) {
	            return this.on(type, fn);
	        };
	    });

	    jQuery.expr.filters.animated = function (elem) {
	        return jQuery.grep(jQuery.timers, function (fn) {
	            return elem === fn.elem;
	        }).length;
	    };

	    /**
	     * Gets a window from an element
	     */
	    function getWindow(elem) {
	        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	    }

	    jQuery.offset = {
	        setOffset: function setOffset(elem, options, i) {
	            var curPosition,
	                curLeft,
	                curCSSTop,
	                curTop,
	                curOffset,
	                curCSSLeft,
	                calculatePosition,
	                position = jQuery.css(elem, "position"),
	                curElem = jQuery(elem),
	                props = {};

	            // Set position first, in-case top/left are set even on static elem
	            if (position === "static") {
	                elem.style.position = "relative";
	            }

	            curOffset = curElem.offset();
	            curCSSTop = jQuery.css(elem, "top");
	            curCSSLeft = jQuery.css(elem, "left");
	            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

	            // Need to be able to calculate position if either
	            // top or left is auto and position is either absolute or fixed
	            if (calculatePosition) {
	                curPosition = curElem.position();
	                curTop = curPosition.top;
	                curLeft = curPosition.left;
	            } else {
	                curTop = parseFloat(curCSSTop) || 0;
	                curLeft = parseFloat(curCSSLeft) || 0;
	            }

	            if (jQuery.isFunction(options)) {

	                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	                options = options.call(elem, i, jQuery.extend({}, curOffset));
	            }

	            if (options.top != null) {
	                props.top = options.top - curOffset.top + curTop;
	            }
	            if (options.left != null) {
	                props.left = options.left - curOffset.left + curLeft;
	            }

	            if ("using" in options) {
	                options.using.call(elem, props);
	            } else {
	                curElem.css(props);
	            }
	        }
	    };

	    jQuery.fn.extend({
	        offset: function offset(options) {
	            if (arguments.length) {
	                return options === undefined ? this : this.each(function (i) {
	                    jQuery.offset.setOffset(this, options, i);
	                });
	            }

	            var docElem,
	                win,
	                elem = this[0],
	                box = { top: 0, left: 0 },
	                doc = elem && elem.ownerDocument;

	            if (!doc) {
	                return;
	            }

	            docElem = doc.documentElement;

	            // Make sure it's not a disconnected DOM node
	            if (!jQuery.contains(docElem, elem)) {
	                return box;
	            }

	            box = elem.getBoundingClientRect();
	            win = getWindow(doc);
	            return {
	                top: box.top + win.pageYOffset - docElem.clientTop,
	                left: box.left + win.pageXOffset - docElem.clientLeft
	            };
	        },

	        position: function position() {
	            if (!this[0]) {
	                return;
	            }

	            var offsetParent,
	                offset,
	                elem = this[0],
	                parentOffset = { top: 0, left: 0 };

	            // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	            // because it is its only offset parent
	            if (jQuery.css(elem, "position") === "fixed") {

	                // Assume getBoundingClientRect is there when computed position is fixed
	                offset = elem.getBoundingClientRect();
	            } else {

	                // Get *real* offsetParent
	                offsetParent = this.offsetParent();

	                // Get correct offsets
	                offset = this.offset();
	                if (!jQuery.nodeName(offsetParent[0], "html")) {
	                    parentOffset = offsetParent.offset();
	                }

	                // Add offsetParent borders
	                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
	                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
	            }

	            // Subtract parent offsets and element margins
	            return {
	                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
	                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
	            };
	        },

	        // This method will return documentElement in the following cases:
	        // 1) For the element inside the iframe without offsetParent, this method will return
	        //    documentElement of the parent window
	        // 2) For the hidden or detached element
	        // 3) For body or html element, i.e. in case of the html node - it will return itself
	        //
	        // but those exceptions were never presented as a real life use-cases
	        // and might be considered as more preferable results.
	        //
	        // This logic, however, is not guaranteed and can change at any point in the future
	        offsetParent: function offsetParent() {
	            return this.map(function () {
	                var offsetParent = this.offsetParent;

	                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
	                    offsetParent = offsetParent.offsetParent;
	                }

	                return offsetParent || documentElement;
	            });
	        }
	    });

	    // Create scrollLeft and scrollTop methods
	    jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
	        var top = "pageYOffset" === prop;

	        jQuery.fn[method] = function (val) {
	            return access(this, function (elem, method, val) {
	                var win = getWindow(elem);

	                if (val === undefined) {
	                    return win ? win[prop] : elem[method];
	                }

	                if (win) {
	                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
	                } else {
	                    elem[method] = val;
	                }
	            }, method, val, arguments.length);
	        };
	    });

	    // Support: Safari<7-8+, Chrome<37-44+
	    // Add the top/left cssHooks using jQuery.fn.position
	    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	    // Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	    // getComputedStyle returns percent when specified for top/left/bottom/right;
	    // rather than make the css module depend on the offset module, just check for it here
	    jQuery.each(["top", "left"], function (i, prop) {
	        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
	            if (computed) {
	                computed = curCSS(elem, prop);

	                // If curCSS returns percentage, fallback to offset
	                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
	            }
	        });
	    });

	    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	    jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
	        jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

	            // Margin is only for outerHeight, outerWidth
	            jQuery.fn[funcName] = function (margin, value) {
	                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
	                    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

	                return access(this, function (elem, type, value) {
	                    var doc;

	                    if (jQuery.isWindow(elem)) {

	                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	                        // isn't a whole lot we can do. See pull request at this URL for discussion:
	                        // https://github.com/jquery/jquery/pull/764
	                        return elem.document.documentElement["client" + name];
	                    }

	                    // Get document width or height
	                    if (elem.nodeType === 9) {
	                        doc = elem.documentElement;

	                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	                        // whichever is greatest
	                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
	                    }

	                    return value === undefined ?

	                    // Get width or height on the element, requesting but not forcing parseFloat
	                    jQuery.css(elem, type, extra) :

	                    // Set width or height on the element
	                    jQuery.style(elem, type, value, extra);
	                }, type, chainable ? margin : undefined, chainable, null);
	            };
	        });
	    });

	    jQuery.fn.extend({

	        bind: function bind(types, data, fn) {
	            return this.on(types, null, data, fn);
	        },
	        unbind: function unbind(types, fn) {
	            return this.off(types, null, fn);
	        },

	        delegate: function delegate(selector, types, data, fn) {
	            return this.on(types, selector, data, fn);
	        },
	        undelegate: function undelegate(selector, types, fn) {

	            // ( namespace ) or ( selector, types [, fn] )
	            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
	        },
	        size: function size() {
	            return this.length;
	        }
	    });

	    jQuery.fn.andSelf = jQuery.fn.addBack;

	    // Register as a named AMD module, since jQuery can be concatenated with other
	    // files that may use define, but not via a proper concatenation script that
	    // understands anonymous AMD modules. A named AMD is safest and most robust
	    // way to register. Lowercase jquery is used because AMD module names are
	    // derived from file names, and jQuery is normally delivered in a lowercase
	    // file name. Do this after creating the global so that if an AMD module wants
	    // to call noConflict to hide this version of jQuery, it will work.

	    // Note that for maximum portability, libraries that are not jQuery should
	    // declare themselves as anonymous modules, and avoid setting a global if an
	    // AMD loader is present. jQuery is a special case. For more information, see
	    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return jQuery;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	    var

	    // Map over jQuery in case of overwrite
	    _jQuery = window.jQuery,


	    // Map over the $ in case of overwrite
	    _$ = window.$;

	    jQuery.noConflict = function (deep) {
	        if (window.$ === jQuery) {
	            window.$ = _$;
	        }

	        if (deep && window.jQuery === jQuery) {
	            window.jQuery = _jQuery;
	        }

	        return jQuery;
	    };

	    // Expose jQuery and $ identifiers, even in AMD
	    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	    // and CommonJS for browser emulators (#13566)
	    if (!noGlobal) {
	        window.jQuery = window.$ = jQuery;
	    }

	    return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var print = function print(name) {
	  return name;
	};
	document.write(print('---es6---'));

/***/ }
/******/ ]);