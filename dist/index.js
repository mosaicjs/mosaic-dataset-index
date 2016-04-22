(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mosaic-dataset"), require("mosaic-adapters"));
	else if(typeof define === 'function' && define.amd)
		define(["mosaic-dataset", "mosaic-adapters"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mosaic-dataset"), require("mosaic-adapters")) : factory(root["mosaic-dataset"], root["mosaic-adapters"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

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


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _lib = __webpack_require__(1);

	_defaults(exports, _interopExportWildcard(_lib, _defaults));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _DataSetIndex = __webpack_require__(2);

	exports.DataSetIndex = _interopRequire(_DataSetIndex);

	var _SearchableDataSet = __webpack_require__(15);

	exports.SearchableDataSet = _interopRequire(_SearchableDataSet);

	var _SearchCriteria = __webpack_require__(16);

	exports.SearchCriteria = _interopRequire(_SearchCriteria);

	var _SearchCriteriaDataSet = __webpack_require__(18);

	exports.SearchCriteriaDataSet = _interopRequire(_SearchCriteriaDataSet);

	var _query = __webpack_require__(19);

	_defaults(exports, _interopExportWildcard(_query, _defaults));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(3);

	var _lunr = __webpack_require__(4);

	var _lunr2 = _interopRequireDefault(_lunr);

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	_lunr2['default'].utils.warn = function (msg) {
	    // Silently ignore messages
	};
	// Change the default tokenizer
	_lunr2['default'].tokenizer = function (obj) {
	    var result = [];
	    if (!arguments.length || obj == null || obj == undefined) return result;
	    if (Array.isArray(obj)) return result = obj.map(function (t) {
	        return t.toLowerCase();
	    });
	    result = obj.toString().trim().toLowerCase().split(/[\(\)\s\-\.\/\/\'\’\"]+/);
	    return result;
	};

	/**
	 * This adapters automatically re-indexes all data object in a specified data
	 * set.
	 */

	var DataSetIndex = (function (_DerivativeDataSet) {
	    _inherits(DataSetIndex, _DerivativeDataSet);

	    function DataSetIndex(options) {
	        var _get2;

	        _classCallCheck(this, DataSetIndex);

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(DataSetIndex.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        this.indexFields = this.options.fields;
	    }

	    // ----------------------------------------------------------------------

	    _createClass(DataSetIndex, [{
	        key: 'initSearch',
	        value: function initSearch(query, dataSet) {
	            if (dataSet === undefined) {
	                dataSet = query;
	                query = dataSet.query;
	            }
	            var that = this;
	            if (!dataSet._indexUpdateListener) {
	                dataSet._indexUpdateListener = function (intent) {
	                    intent.then(function () {
	                        return that.search(query, dataSet);
	                    });
	                };
	            }
	            this.addListener('indexing', dataSet._indexUpdateListener);
	        }
	    }, {
	        key: 'doneSearch',
	        value: function doneSearch(dataSet) {
	            if (dataSet._indexUpdateListener) {
	                this.removeListener('indexing', dataSet._indexUpdateListener);
	                delete dataSet._indexUpdateListener;
	            }
	        }

	        // ----------------------------------------------------------------------

	    }, {
	        key: 'setDataFilter',
	        value: function setDataFilter(filter) {
	            var that = this;
	            return this.action('update', { index: that }, function (intent) {
	                var updated = filter !== that._filter;
	                that._filter = filter;
	                return updated;
	            });
	        }

	        // ----------------------------------------------------------------------

	        /**
	         * Returns all fields to index with their respective type and boost factors.
	         */
	    }, {
	        key: 'setIndexFields',
	        value: function setIndexFields(fields) {
	            var that = this;
	            return that.action('update', { index: that }, function (intent) {
	                var updated = fields !== that._fields;
	                that._fields = fields;
	                if (updated) {
	                    delete that._indexPromise;
	                }
	                return updated;
	            });
	        }

	        // ----------------------------------------------------------------------

	    }, {
	        key: 'search',
	        value: function search(query, resultSet) {
	            var that = this;
	            if (!resultSet) {
	                resultSet = new _mosaicDataset.DataSet({ adapters: this.adapters });
	            }
	            return that._getLunrIndex().then(function (index) {
	                var list = [];
	                var dataSet = that.dataSet;
	                if (!query) {
	                    list = list.concat(dataSet.items);
	                } else {
	                    var entries = index.lunr.search(query);
	                    entries.forEach(function (entry) {
	                        var r = dataSet.byId(entry.ref);
	                        if (!r) return;
	                        list.push(r);
	                    });
	                }
	                list = that._filterSearchResult(list);
	                resultSet.query = query;
	                return resultSet.setItems(list).then(function () {
	                    return resultSet;
	                });
	            });
	        }

	        // ----------------------------------------------------------------------

	        /** Updates the list */
	    }, {
	        key: '_onMainDataSetUpdate',
	        value: function _onMainDataSetUpdate(intent) {
	            var that = this;
	            return intent.after(function () {
	                delete that._indexPromise;
	                return that._getLunrIndex();
	            });
	        }

	        /** Builds and returns a full-text search index. */
	    }, {
	        key: '_getLunrIndex',
	        value: function _getLunrIndex() {
	            var _this = this;

	            if (this.parentVersion !== this.dataSet.version && this._reindexed) {
	                delete this._indexPromise;
	            }
	            if (!this._indexPromise) {
	                (function () {
	                    _this._reindexed = false;
	                    _this.parentVersion = _this.dataSet.version;
	                    var that = _this;
	                    that._indexPromise = new _promise2['default'](function (resolve, reject) {
	                        try {
	                            var index = {
	                                refs: {},
	                                lunr: new _lunr2['default'].Index()
	                            };
	                            var lunr = index.lunr;
	                            lunr.ref('_id', {
	                                boost: 1
	                            });
	                            var fields = that.indexFields;
	                            for (var field in fields) {
	                                var info = fields[field];
	                                info = info || {};
	                                info.boost = info.boost || 1;
	                                var type = info.type || 'field';
	                                lunr[type](field, info);
	                            }
	                            resolve(index);
	                        } catch (err) {
	                            delete that._indexPromise;
	                            reject(err);
	                        }
	                    }).then(function (index) {
	                        var items = that.dataSet.items;
	                        return that._reindexItems(index, items).then(function () {
	                            that._reindexed = true;
	                            return index;
	                        });
	                    });
	                })();
	            }
	            return this._indexPromise;
	        }
	    }, {
	        key: '_setIndexingPipeline',
	        value: function _setIndexingPipeline(index) {
	            index.lunr.pipeline.reset();
	            index.lunr.pipeline.add(this._filterToken.bind(this, [//
	            // DataSetIndex.numberFilters, //
	            DataSetIndex.normalizeText, //
	            // Lunr.stemmer, //
	            // Lunr.trimmer, //
	            // Lunr.stopWordFilter, //
	            DataSetIndex.emptyStopWordFilter //
	            ]));
	        }
	    }, {
	        key: '_setSearchPipeline',
	        value: function _setSearchPipeline(index) {
	            index.lunr.pipeline.reset();
	            index.lunr.pipeline.add(this._filterToken.bind(this, [//
	            DataSetIndex.normalizeText, //
	            // Lunr.stemmer, //
	            DataSetIndex.emptyStopWordFilter //
	            ]));
	        }
	    }, {
	        key: '_filterToken',
	        value: function _filterToken(filters, token) {
	            var before = token;
	            for (var i = 0; i < filters.length; i++) {
	                token = filters[i](token);
	                if (!token) return;
	            }
	            return token;
	        }
	    }, {
	        key: '_reindexItems',
	        value: function _reindexItems(index, items) {
	            var that = this;
	            return that.action('indexing', { index: this }, function (intent) {
	                that._setIndexingPipeline(index);
	                var accessors = {};
	                var fieldKeys = Object.keys(that.indexFields);
	                fieldKeys.forEach(function (field) {
	                    var fieldInfo = that.indexFields[field];
	                    var accessor = undefined;
	                    if (typeof fieldInfo.get === 'function') {
	                        accessor = function (item) {
	                            return fieldInfo.get(item);
	                        };
	                    } else {
	                        accessor = function (item) {
	                            return item.get(field);
	                        };
	                    }
	                    accessors[field] = accessor;
	                });
	                var event = {
	                    index: that,
	                    items: items,
	                    len: items.length,
	                    pos: 0
	                };
	                function indexChunk(chunk, timeout) {
	                    return new _promise2['default'](function (resolve, reject) {
	                        setTimeout(function () {
	                            try {
	                                chunk.forEach(function (item, key) {
	                                    var indexEntry = {
	                                        _id: item.id
	                                    };
	                                    fieldKeys.forEach(function (field) {
	                                        var accessor = accessors[field];
	                                        var value = accessor(item);
	                                        indexEntry[field] = that._mergeValues(value, ' ');
	                                    });
	                                    index.lunr.add(indexEntry);
	                                    event.item = item;
	                                    event.pos++;
	                                    intent.emit('progress', event);
	                                });
	                                resolve();
	                            } catch (err) {
	                                reject(err);
	                            }
	                        }, 10);
	                    });
	                }
	                var chunk = [];
	                var blockSize = 100;
	                var promises = [];
	                for (var i = 0, len = items.length; i < len; i++) {
	                    chunk.push(items[i]);
	                    if (chunk.length % blockSize === 0) {
	                        promises.push(indexChunk(chunk, 10));
	                        chunk = [];
	                    }
	                }
	                if (chunk.length) {
	                    promises.push(indexChunk(chunk, 10));
	                }
	                return _promise2['default'].all(promises).then(function () {
	                    that._setSearchPipeline(index);
	                    return true;
	                });
	            });
	        }
	    }, {
	        key: '_filterSearchResult',
	        value: function _filterSearchResult(items) {
	            var filter = this.dataFilter;
	            if (filter) {
	                items = filter.call(this, items);
	            }
	            return items;
	        }
	    }, {
	        key: '_mergeValues',
	        value: function _mergeValues(val, separator) {
	            var s = undefined;
	            if (Array.isArray(val)) {
	                s = val.map(this._filterText, this).join(separator);
	            } else {
	                s = this._filterText(val);
	            }
	            return s;
	        }
	    }, {
	        key: '_filterText',
	        value: function _filterText(val) {
	            return val ? '' + val : '';
	        }

	        // ---------------------------------------------------------------------
	        // Token filters

	        /** Filtering of empty words */
	    }, {
	        key: 'dataFilter',
	        get: function get() {
	            return this._dataFilter;
	        },
	        set: function set(filter) {
	            return this.setDataFilter(filter);
	        }
	    }, {
	        key: 'indexFields',
	        get: function get() {
	            this._fields = this._fields || this.options.fields;
	            if (!this._fields) {
	                this._fields = {
	                    "properties.name": {
	                        "boost": 10
	                    },
	                    "properties.description": {
	                        "boost": 5
	                    },
	                    "properties.tags": {
	                        "boost": 15,
	                        "filter": true
	                    },
	                    "properties.address": {
	                        "boost": 1
	                    },
	                    "properties.postcode": {
	                        "boost": 1,
	                        "filter": "prefix"
	                    },
	                    "properties.city": {
	                        "boost": 2
	                    },
	                    "properties.url": {
	                        "boost": 0.5
	                    }
	                };
	            }
	            return this._fields;
	        },
	        set: function set(fields) {
	            return this.setIndexFields(fields);
	        }
	    }], [{
	        key: 'emptyStopWordFilter',
	        value: function emptyStopWordFilter(token) {
	            var filter = DataSetIndex.emptyStopWordFilter;
	            if (!filter.stopWords) {
	                filter.stopWords = new _lunr2['default'].SortedSet();
	                filter.stopWords.length = 1;
	                filter.stopWords.elements = [];
	            }
	            if (filter.stopWords.indexOf(token) === -1) return token;
	            return token;
	        }

	        // Filter numbers
	    }, {
	        key: 'numberFilters',
	        value: function numberFilters(token) {
	            if (!token.match(/^\d+$/gim)) return token;
	        }
	    }, {
	        key: 'normalizeText',
	        value: function normalizeText(token) {
	            var filter = DataSetIndex.normalizeText;
	            if (!filter.normalizer) {
	                /** Normalizes texts - remove all accented characters */
	                filter.normalizer = DataSetIndex.getNormalizationFunction({
	                    '[ùûü]': 'u',
	                    '[ÿ]': 'y',
	                    '[àâ]': 'a',
	                    '[æ]': 'ae',
	                    '[ç]': 'c',
	                    '[éèêë]': 'e',
	                    '[ïî]': 'i',
	                    '[ô]': 'o',
	                    '[œ]': 'oe'
	                });
	            }
	            return filter.normalizer(token);
	        }

	        // ---------------------------------------------------------------------

	        /** Returns a function normalizing strings */
	    }, {
	        key: 'getNormalizationFunction',
	        value: function getNormalizationFunction() {
	            var repl = [];
	            for (var i = 0; i < arguments.length; i++) {
	                var mapping = arguments[i];
	                for (var key in mapping) {
	                    repl.push({
	                        regexp: new RegExp(key, 'gim'),
	                        value: mapping[key]
	                    });
	                }
	            }
	            return function (str) {
	                if (!str || str == '') return '';
	                var before = str;
	                str = str + '';
	                for (var i = 0; i < repl.length; i++) {
	                    var slot = repl[i];
	                    str = str.replace(slot.regexp, slot.value);
	                }
	                return str;
	            };
	        }
	    }]);

	    return DataSetIndex;
	})(_mosaicDataset.DerivativeDataSet);

	exports['default'] = DataSetIndex;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.12
	 * Copyright (C) 2015 Oliver Nightingale
	 * MIT Licensed
	 * @license
	 */

	"use strict";

	;(function () {

	  /**
	   * Convenience function for instantiating a new lunr index and configuring it
	   * with the default pipeline functions and the passed config function.
	   *
	   * When using this convenience function a new index will be created with the
	   * following functions already in the pipeline:
	   *
	   * lunr.StopWordFilter - filters out any stop words before they enter the
	   * index
	   *
	   * lunr.stemmer - stems the tokens before entering the index.
	   *
	   * Example:
	   *
	   *     var idx = lunr(function () {
	   *       this.field('title', 10)
	   *       this.field('tags', 100)
	   *       this.field('body')
	   *       
	   *       this.ref('cid')
	   *       
	   *       this.pipeline.add(function () {
	   *         // some custom pipeline function
	   *       })
	   *       
	   *     })
	   *
	   * @param {Function} config A function that will be called with the new instance
	   * of the lunr.Index as both its context and first parameter. It can be used to
	   * customize the instance of new lunr.Index.
	   * @namespace
	   * @module
	   * @returns {lunr.Index}
	   *
	   */
	  var lunr = function lunr(config) {
	    var idx = new lunr.Index();

	    idx.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer);

	    if (config) config.call(idx, idx);

	    return idx;
	  };

	  lunr.version = "0.5.12";
	  /*!
	   * lunr.utils
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * A namespace containing utils for the rest of the lunr library
	   */
	  lunr.utils = {};

	  /**
	   * Print a warning message to the console.
	   *
	   * @param {String} message The message to be printed.
	   * @memberOf Utils
	   */
	  lunr.utils.warn = (function (global) {
	    return function (message) {
	      if (global.console && console.warn) {
	        console.warn(message);
	      }
	    };
	  })(this);

	  /*!
	   * lunr.EventEmitter
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.EventEmitter is an event emitter for lunr. It manages adding and removing event handlers and triggering events and their handlers.
	   *
	   * @constructor
	   */
	  lunr.EventEmitter = function () {
	    this.events = {};
	  };

	  /**
	   * Binds a handler function to a specific event(s).
	   *
	   * Can bind a single function to many different events in one call.
	   *
	   * @param {String} [eventName] The name(s) of events to bind this function to.
	   * @param {Function} fn The function to call when an event is fired.
	   * @memberOf EventEmitter
	   */
	  lunr.EventEmitter.prototype.addListener = function () {
	    var args = Array.prototype.slice.call(arguments),
	        fn = args.pop(),
	        names = args;

	    if (typeof fn !== "function") throw new TypeError("last argument must be a function");

	    names.forEach(function (name) {
	      if (!this.hasHandler(name)) this.events[name] = [];
	      this.events[name].push(fn);
	    }, this);
	  };

	  /**
	   * Removes a handler function from a specific event.
	   *
	   * @param {String} eventName The name of the event to remove this function from.
	   * @param {Function} fn The function to remove from an event.
	   * @memberOf EventEmitter
	   */
	  lunr.EventEmitter.prototype.removeListener = function (name, fn) {
	    if (!this.hasHandler(name)) return;

	    var fnIndex = this.events[name].indexOf(fn);
	    this.events[name].splice(fnIndex, 1);

	    if (!this.events[name].length) delete this.events[name];
	  };

	  /**
	   * Calls all functions bound to the given event.
	   *
	   * Additional data can be passed to the event handler as arguments to `emit`
	   * after the event name.
	   *
	   * @param {String} eventName The name of the event to emit.
	   * @memberOf EventEmitter
	   */
	  lunr.EventEmitter.prototype.emit = function (name) {
	    if (!this.hasHandler(name)) return;

	    var args = Array.prototype.slice.call(arguments, 1);

	    this.events[name].forEach(function (fn) {
	      fn.apply(undefined, args);
	    });
	  };

	  /**
	   * Checks whether a handler has ever been stored against an event.
	   *
	   * @param {String} eventName The name of the event to check.
	   * @private
	   * @memberOf EventEmitter
	   */
	  lunr.EventEmitter.prototype.hasHandler = function (name) {
	    return name in this.events;
	  };

	  /*!
	   * lunr.tokenizer
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * A function for splitting a string into tokens ready to be inserted into
	   * the search index.
	   *
	   * @module
	   * @param {String} obj The string to convert into tokens
	   * @returns {Array}
	   */
	  lunr.tokenizer = function (obj) {
	    if (!arguments.length || obj == null || obj == undefined) return [];
	    if (Array.isArray(obj)) return obj.map(function (t) {
	      return t.toLowerCase();
	    });

	    return obj.toString().trim().toLowerCase().split(/[\s\-]+/);
	  };

	  /*!
	   * lunr.Pipeline
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.Pipelines maintain an ordered list of functions to be applied to all
	   * tokens in documents entering the search index and queries being ran against
	   * the index.
	   *
	   * An instance of lunr.Index created with the lunr shortcut will contain a
	   * pipeline with a stop word filter and an English language stemmer. Extra
	   * functions can be added before or after either of these functions or these
	   * default functions can be removed.
	   *
	   * When run the pipeline will call each function in turn, passing a token, the
	   * index of that token in the original list of all tokens and finally a list of
	   * all the original tokens.
	   *
	   * The output of functions in the pipeline will be passed to the next function
	   * in the pipeline. To exclude a token from entering the index the function
	   * should return undefined, the rest of the pipeline will not be called with
	   * this token.
	   *
	   * For serialisation of pipelines to work, all functions used in an instance of
	   * a pipeline should be registered with lunr.Pipeline. Registered functions can
	   * then be loaded. If trying to load a serialised pipeline that uses functions
	   * that are not registered an error will be thrown.
	   *
	   * If not planning on serialising the pipeline then registering pipeline functions
	   * is not necessary.
	   *
	   * @constructor
	   */
	  lunr.Pipeline = function () {
	    this._stack = [];
	  };

	  lunr.Pipeline.registeredFunctions = {};

	  /**
	   * Register a function with the pipeline.
	   *
	   * Functions that are used in the pipeline should be registered if the pipeline
	   * needs to be serialised, or a serialised pipeline needs to be loaded.
	   *
	   * Registering a function does not add it to a pipeline, functions must still be
	   * added to instances of the pipeline for them to be used when running a pipeline.
	   *
	   * @param {Function} fn The function to check for.
	   * @param {String} label The label to register this function with
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.registerFunction = function (fn, label) {
	    if (label in this.registeredFunctions) {
	      lunr.utils.warn('Overwriting existing registered function: ' + label);
	    }

	    fn.label = label;
	    lunr.Pipeline.registeredFunctions[fn.label] = fn;
	  };

	  /**
	   * Warns if the function is not registered as a Pipeline function.
	   *
	   * @param {Function} fn The function to check for.
	   * @private
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
	    var isRegistered = fn.label && fn.label in this.registeredFunctions;

	    if (!isRegistered) {
	      lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn);
	    }
	  };

	  /**
	   * Loads a previously serialised pipeline.
	   *
	   * All functions to be loaded must already be registered with lunr.Pipeline.
	   * If any function from the serialised data has not been registered then an
	   * error will be thrown.
	   *
	   * @param {Object} serialised The serialised pipeline to load.
	   * @returns {lunr.Pipeline}
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.load = function (serialised) {
	    var pipeline = new lunr.Pipeline();

	    serialised.forEach(function (fnName) {
	      var fn = lunr.Pipeline.registeredFunctions[fnName];

	      if (fn) {
	        pipeline.add(fn);
	      } else {
	        throw new Error('Cannot load un-registered function: ' + fnName);
	      }
	    });

	    return pipeline;
	  };

	  /**
	   * Adds new functions to the end of the pipeline.
	   *
	   * Logs a warning if the function has not been registered.
	   *
	   * @param {Function} functions Any number of functions to add to the pipeline.
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.prototype.add = function () {
	    var fns = Array.prototype.slice.call(arguments);

	    fns.forEach(function (fn) {
	      lunr.Pipeline.warnIfFunctionNotRegistered(fn);
	      this._stack.push(fn);
	    }, this);
	  };

	  /**
	   * Adds a single function after a function that already exists in the
	   * pipeline.
	   *
	   * Logs a warning if the function has not been registered.
	   *
	   * @param {Function} existingFn A function that already exists in the pipeline.
	   * @param {Function} newFn The new function to add to the pipeline.
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.prototype.after = function (existingFn, newFn) {
	    lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

	    var pos = this._stack.indexOf(existingFn);
	    if (pos == -1) {
	      throw new Error('Cannot find existingFn');
	    }

	    pos = pos + 1;
	    this._stack.splice(pos, 0, newFn);
	  };

	  /**
	   * Adds a single function before a function that already exists in the
	   * pipeline.
	   *
	   * Logs a warning if the function has not been registered.
	   *
	   * @param {Function} existingFn A function that already exists in the pipeline.
	   * @param {Function} newFn The new function to add to the pipeline.
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.prototype.before = function (existingFn, newFn) {
	    lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

	    var pos = this._stack.indexOf(existingFn);
	    if (pos == -1) {
	      throw new Error('Cannot find existingFn');
	    }

	    this._stack.splice(pos, 0, newFn);
	  };

	  /**
	   * Removes a function from the pipeline.
	   *
	   * @param {Function} fn The function to remove from the pipeline.
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.prototype.remove = function (fn) {
	    var pos = this._stack.indexOf(fn);
	    if (pos == -1) {
	      return;
	    }

	    this._stack.splice(pos, 1);
	  };

	  /**
	   * Runs the current list of functions that make up the pipeline against the
	   * passed tokens.
	   *
	   * @param {Array} tokens The tokens to run through the pipeline.
	   * @returns {Array}
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.prototype.run = function (tokens) {
	    var out = [],
	        tokenLength = tokens.length,
	        stackLength = this._stack.length;

	    for (var i = 0; i < tokenLength; i++) {
	      var token = tokens[i];

	      for (var j = 0; j < stackLength; j++) {
	        token = this._stack[j](token, i, tokens);
	        if (token === void 0) break;
	      };

	      if (token !== void 0) out.push(token);
	    };

	    return out;
	  };

	  /**
	   * Resets the pipeline by removing any existing processors.
	   *
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.prototype.reset = function () {
	    this._stack = [];
	  };

	  /**
	   * Returns a representation of the pipeline ready for serialisation.
	   *
	   * Logs a warning if the function has not been registered.
	   *
	   * @returns {Array}
	   * @memberOf Pipeline
	   */
	  lunr.Pipeline.prototype.toJSON = function () {
	    return this._stack.map(function (fn) {
	      lunr.Pipeline.warnIfFunctionNotRegistered(fn);

	      return fn.label;
	    });
	  };
	  /*!
	   * lunr.Vector
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.Vectors implement vector related operations for
	   * a series of elements.
	   *
	   * @constructor
	   */
	  lunr.Vector = function () {
	    this._magnitude = null;
	    this.list = undefined;
	    this.length = 0;
	  };

	  /**
	   * lunr.Vector.Node is a simple struct for each node
	   * in a lunr.Vector.
	   *
	   * @private
	   * @param {Number} The index of the node in the vector.
	   * @param {Object} The data at this node in the vector.
	   * @param {lunr.Vector.Node} The node directly after this node in the vector.
	   * @constructor
	   * @memberOf Vector
	   */
	  lunr.Vector.Node = function (idx, val, next) {
	    this.idx = idx;
	    this.val = val;
	    this.next = next;
	  };

	  /**
	   * Inserts a new value at a position in a vector.
	   *
	   * @param {Number} The index at which to insert a value.
	   * @param {Object} The object to insert in the vector.
	   * @memberOf Vector.
	   */
	  lunr.Vector.prototype.insert = function (idx, val) {
	    this._magnitude = undefined;
	    var list = this.list;

	    if (!list) {
	      this.list = new lunr.Vector.Node(idx, val, list);
	      return this.length++;
	    }

	    if (idx < list.idx) {
	      this.list = new lunr.Vector.Node(idx, val, list);
	      return this.length++;
	    }

	    var prev = list,
	        next = list.next;

	    while (next != undefined) {
	      if (idx < next.idx) {
	        prev.next = new lunr.Vector.Node(idx, val, next);
	        return this.length++;
	      }

	      prev = next, next = next.next;
	    }

	    prev.next = new lunr.Vector.Node(idx, val, next);
	    return this.length++;
	  };

	  /**
	   * Calculates the magnitude of this vector.
	   *
	   * @returns {Number}
	   * @memberOf Vector
	   */
	  lunr.Vector.prototype.magnitude = function () {
	    if (this._magnitude) return this._magnitude;
	    var node = this.list,
	        sumOfSquares = 0,
	        val;

	    while (node) {
	      val = node.val;
	      sumOfSquares += val * val;
	      node = node.next;
	    }

	    return this._magnitude = Math.sqrt(sumOfSquares);
	  };

	  /**
	   * Calculates the dot product of this vector and another vector.
	   *
	   * @param {lunr.Vector} otherVector The vector to compute the dot product with.
	   * @returns {Number}
	   * @memberOf Vector
	   */
	  lunr.Vector.prototype.dot = function (otherVector) {
	    var node = this.list,
	        otherNode = otherVector.list,
	        dotProduct = 0;

	    while (node && otherNode) {
	      if (node.idx < otherNode.idx) {
	        node = node.next;
	      } else if (node.idx > otherNode.idx) {
	        otherNode = otherNode.next;
	      } else {
	        dotProduct += node.val * otherNode.val;
	        node = node.next;
	        otherNode = otherNode.next;
	      }
	    }

	    return dotProduct;
	  };

	  /**
	   * Calculates the cosine similarity between this vector and another
	   * vector.
	   *
	   * @param {lunr.Vector} otherVector The other vector to calculate the
	   * similarity with.
	   * @returns {Number}
	   * @memberOf Vector
	   */
	  lunr.Vector.prototype.similarity = function (otherVector) {
	    return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude());
	  };
	  /*!
	   * lunr.SortedSet
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.SortedSets are used to maintain an array of uniq values in a sorted
	   * order.
	   *
	   * @constructor
	   */
	  lunr.SortedSet = function () {
	    this.length = 0;
	    this.elements = [];
	  };

	  /**
	   * Loads a previously serialised sorted set.
	   *
	   * @param {Array} serialisedData The serialised set to load.
	   * @returns {lunr.SortedSet}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.load = function (serialisedData) {
	    var set = new this();

	    set.elements = serialisedData;
	    set.length = serialisedData.length;

	    return set;
	  };

	  /**
	   * Inserts new items into the set in the correct position to maintain the
	   * order.
	   *
	   * @param {Object} The objects to add to this set.
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.add = function () {
	    var i, element;

	    for (i = 0; i < arguments.length; i++) {
	      element = arguments[i];
	      if (~this.indexOf(element)) continue;
	      this.elements.splice(this.locationFor(element), 0, element);
	    }

	    this.length = this.elements.length;
	  };

	  /**
	   * Converts this sorted set into an array.
	   *
	   * @returns {Array}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.toArray = function () {
	    return this.elements.slice();
	  };

	  /**
	   * Creates a new array with the results of calling a provided function on every
	   * element in this sorted set.
	   *
	   * Delegates to Array.prototype.map and has the same signature.
	   *
	   * @param {Function} fn The function that is called on each element of the
	   * set.
	   * @param {Object} ctx An optional object that can be used as the context
	   * for the function fn.
	   * @returns {Array}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.map = function (fn, ctx) {
	    return this.elements.map(fn, ctx);
	  };

	  /**
	   * Executes a provided function once per sorted set element.
	   *
	   * Delegates to Array.prototype.forEach and has the same signature.
	   *
	   * @param {Function} fn The function that is called on each element of the
	   * set.
	   * @param {Object} ctx An optional object that can be used as the context
	   * @memberOf SortedSet
	   * for the function fn.
	   */
	  lunr.SortedSet.prototype.forEach = function (fn, ctx) {
	    return this.elements.forEach(fn, ctx);
	  };

	  /**
	   * Returns the index at which a given element can be found in the
	   * sorted set, or -1 if it is not present.
	   *
	   * @param {Object} elem The object to locate in the sorted set.
	   * @returns {Number}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.indexOf = function (elem) {
	    var start = 0,
	        end = this.elements.length,
	        sectionLength = end - start,
	        pivot = start + Math.floor(sectionLength / 2),
	        pivotElem = this.elements[pivot];

	    while (sectionLength > 1) {
	      if (pivotElem === elem) return pivot;

	      if (pivotElem < elem) start = pivot;
	      if (pivotElem > elem) end = pivot;

	      sectionLength = end - start;
	      pivot = start + Math.floor(sectionLength / 2);
	      pivotElem = this.elements[pivot];
	    }

	    if (pivotElem === elem) return pivot;

	    return -1;
	  };

	  /**
	   * Returns the position within the sorted set that an element should be
	   * inserted at to maintain the current order of the set.
	   *
	   * This function assumes that the element to search for does not already exist
	   * in the sorted set.
	   *
	   * @param {Object} elem The elem to find the position for in the set
	   * @returns {Number}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.locationFor = function (elem) {
	    var start = 0,
	        end = this.elements.length,
	        sectionLength = end - start,
	        pivot = start + Math.floor(sectionLength / 2),
	        pivotElem = this.elements[pivot];

	    while (sectionLength > 1) {
	      if (pivotElem < elem) start = pivot;
	      if (pivotElem > elem) end = pivot;

	      sectionLength = end - start;
	      pivot = start + Math.floor(sectionLength / 2);
	      pivotElem = this.elements[pivot];
	    }

	    if (pivotElem > elem) return pivot;
	    if (pivotElem < elem) return pivot + 1;
	  };

	  /**
	   * Creates a new lunr.SortedSet that contains the elements in the intersection
	   * of this set and the passed set.
	   *
	   * @param {lunr.SortedSet} otherSet The set to intersect with this set.
	   * @returns {lunr.SortedSet}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.intersect = function (otherSet) {
	    var intersectSet = new lunr.SortedSet(),
	        i = 0,
	        j = 0,
	        a_len = this.length,
	        b_len = otherSet.length,
	        a = this.elements,
	        b = otherSet.elements;

	    while (true) {
	      if (i > a_len - 1 || j > b_len - 1) break;

	      if (a[i] === b[j]) {
	        intersectSet.add(a[i]);
	        i++, j++;
	        continue;
	      }

	      if (a[i] < b[j]) {
	        i++;
	        continue;
	      }

	      if (a[i] > b[j]) {
	        j++;
	        continue;
	      }
	    };

	    return intersectSet;
	  };

	  /**
	   * Makes a copy of this set
	   *
	   * @returns {lunr.SortedSet}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.clone = function () {
	    var clone = new lunr.SortedSet();

	    clone.elements = this.toArray();
	    clone.length = clone.elements.length;

	    return clone;
	  };

	  /**
	   * Creates a new lunr.SortedSet that contains the elements in the union
	   * of this set and the passed set.
	   *
	   * @param {lunr.SortedSet} otherSet The set to union with this set.
	   * @returns {lunr.SortedSet}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.union = function (otherSet) {
	    var longSet, shortSet, unionSet;

	    if (this.length >= otherSet.length) {
	      longSet = this, shortSet = otherSet;
	    } else {
	      longSet = otherSet, shortSet = this;
	    }

	    unionSet = longSet.clone();

	    unionSet.add.apply(unionSet, shortSet.toArray());

	    return unionSet;
	  };

	  /**
	   * Returns a representation of the sorted set ready for serialisation.
	   *
	   * @returns {Array}
	   * @memberOf SortedSet
	   */
	  lunr.SortedSet.prototype.toJSON = function () {
	    return this.toArray();
	  };
	  /*!
	   * lunr.Index
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.Index is object that manages a search index.  It contains the indexes
	   * and stores all the tokens and document lookups.  It also provides the main
	   * user facing API for the library.
	   *
	   * @constructor
	   */
	  lunr.Index = function () {
	    this._fields = [];
	    this._ref = 'id';
	    this.pipeline = new lunr.Pipeline();
	    this.documentStore = new lunr.Store();
	    this.tokenStore = new lunr.TokenStore();
	    this.corpusTokens = new lunr.SortedSet();
	    this.eventEmitter = new lunr.EventEmitter();

	    this._idfCache = {};

	    this.on('add', 'remove', 'update', (function () {
	      this._idfCache = {};
	    }).bind(this));
	  };

	  /**
	   * Bind a handler to events being emitted by the index.
	   *
	   * The handler can be bound to many events at the same time.
	   *
	   * @param {String} [eventName] The name(s) of events to bind the function to.
	   * @param {Function} fn The serialised set to load.
	   * @memberOf Index
	   */
	  lunr.Index.prototype.on = function () {
	    var args = Array.prototype.slice.call(arguments);
	    return this.eventEmitter.addListener.apply(this.eventEmitter, args);
	  };

	  /**
	   * Removes a handler from an event being emitted by the index.
	   *
	   * @param {String} eventName The name of events to remove the function from.
	   * @param {Function} fn The serialised set to load.
	   * @memberOf Index
	   */
	  lunr.Index.prototype.off = function (name, fn) {
	    return this.eventEmitter.removeListener(name, fn);
	  };

	  /**
	   * Loads a previously serialised index.
	   *
	   * Issues a warning if the index being imported was serialised
	   * by a different version of lunr.
	   *
	   * @param {Object} serialisedData The serialised set to load.
	   * @returns {lunr.Index}
	   * @memberOf Index
	   */
	  lunr.Index.load = function (serialisedData) {
	    if (serialisedData.version !== lunr.version) {
	      lunr.utils.warn('version mismatch: current ' + lunr.version + ' importing ' + serialisedData.version);
	    }

	    var idx = new this();

	    idx._fields = serialisedData.fields;
	    idx._ref = serialisedData.ref;

	    idx.documentStore = lunr.Store.load(serialisedData.documentStore);
	    idx.tokenStore = lunr.TokenStore.load(serialisedData.tokenStore);
	    idx.corpusTokens = lunr.SortedSet.load(serialisedData.corpusTokens);
	    idx.pipeline = lunr.Pipeline.load(serialisedData.pipeline);

	    return idx;
	  };

	  /**
	   * Adds a field to the list of fields that will be searchable within documents
	   * in the index.
	   *
	   * An optional boost param can be passed to affect how much tokens in this field
	   * rank in search results, by default the boost value is 1.
	   *
	   * Fields should be added before any documents are added to the index, fields
	   * that are added after documents are added to the index will only apply to new
	   * documents added to the index.
	   *
	   * @param {String} fieldName The name of the field within the document that
	   * should be indexed
	   * @param {Number} boost An optional boost that can be applied to terms in this
	   * field.
	   * @returns {lunr.Index}
	   * @memberOf Index
	   */
	  lunr.Index.prototype.field = function (fieldName, opts) {
	    var opts = opts || {},
	        field = { name: fieldName, boost: opts.boost || 1 };

	    this._fields.push(field);
	    return this;
	  };

	  /**
	   * Sets the property used to uniquely identify documents added to the index,
	   * by default this property is 'id'.
	   *
	   * This should only be changed before adding documents to the index, changing
	   * the ref property without resetting the index can lead to unexpected results.
	   *
	   * @param {String} refName The property to use to uniquely identify the
	   * documents in the index.
	   * @param {Boolean} emitEvent Whether to emit add events, defaults to true
	   * @returns {lunr.Index}
	   * @memberOf Index
	   */
	  lunr.Index.prototype.ref = function (refName) {
	    this._ref = refName;
	    return this;
	  };

	  /**
	   * Add a document to the index.
	   *
	   * This is the way new documents enter the index, this function will run the
	   * fields from the document through the index's pipeline and then add it to
	   * the index, it will then show up in search results.
	   *
	   * An 'add' event is emitted with the document that has been added and the index
	   * the document has been added to. This event can be silenced by passing false
	   * as the second argument to add.
	   *
	   * @param {Object} doc The document to add to the index.
	   * @param {Boolean} emitEvent Whether or not to emit events, default true.
	   * @memberOf Index
	   */
	  lunr.Index.prototype.add = function (doc, emitEvent) {
	    var docTokens = {},
	        allDocumentTokens = new lunr.SortedSet(),
	        docRef = doc[this._ref],
	        emitEvent = emitEvent === undefined ? true : emitEvent;

	    this._fields.forEach(function (field) {
	      var fieldTokens = this.pipeline.run(lunr.tokenizer(doc[field.name]));

	      docTokens[field.name] = fieldTokens;
	      lunr.SortedSet.prototype.add.apply(allDocumentTokens, fieldTokens);
	    }, this);

	    this.documentStore.set(docRef, allDocumentTokens);
	    lunr.SortedSet.prototype.add.apply(this.corpusTokens, allDocumentTokens.toArray());

	    for (var i = 0; i < allDocumentTokens.length; i++) {
	      var token = allDocumentTokens.elements[i];
	      var tf = this._fields.reduce(function (memo, field) {
	        var fieldLength = docTokens[field.name].length;

	        if (!fieldLength) return memo;

	        var tokenCount = docTokens[field.name].filter(function (t) {
	          return t === token;
	        }).length;

	        return memo + tokenCount / fieldLength * field.boost;
	      }, 0);

	      this.tokenStore.add(token, { ref: docRef, tf: tf });
	    };

	    if (emitEvent) this.eventEmitter.emit('add', doc, this);
	  };

	  /**
	   * Removes a document from the index.
	   *
	   * To make sure documents no longer show up in search results they can be
	   * removed from the index using this method.
	   *
	   * The document passed only needs to have the same ref property value as the
	   * document that was added to the index, they could be completely different
	   * objects.
	   *
	   * A 'remove' event is emitted with the document that has been removed and the index
	   * the document has been removed from. This event can be silenced by passing false
	   * as the second argument to remove.
	   *
	   * @param {Object} doc The document to remove from the index.
	   * @param {Boolean} emitEvent Whether to emit remove events, defaults to true
	   * @memberOf Index
	   */
	  lunr.Index.prototype.remove = function (doc, emitEvent) {
	    var docRef = doc[this._ref],
	        emitEvent = emitEvent === undefined ? true : emitEvent;

	    if (!this.documentStore.has(docRef)) return;

	    var docTokens = this.documentStore.get(docRef);

	    this.documentStore.remove(docRef);

	    docTokens.forEach(function (token) {
	      this.tokenStore.remove(token, docRef);
	    }, this);

	    if (emitEvent) this.eventEmitter.emit('remove', doc, this);
	  };

	  /**
	   * Updates a document in the index.
	   *
	   * When a document contained within the index gets updated, fields changed,
	   * added or removed, to make sure it correctly matched against search queries,
	   * it should be updated in the index.
	   *
	   * This method is just a wrapper around `remove` and `add`
	   *
	   * An 'update' event is emitted with the document that has been updated and the index.
	   * This event can be silenced by passing false as the second argument to update. Only
	   * an update event will be fired, the 'add' and 'remove' events of the underlying calls
	   * are silenced.
	   *
	   * @param {Object} doc The document to update in the index.
	   * @param {Boolean} emitEvent Whether to emit update events, defaults to true
	   * @see Index.prototype.remove
	   * @see Index.prototype.add
	   * @memberOf Index
	   */
	  lunr.Index.prototype.update = function (doc, emitEvent) {
	    var emitEvent = emitEvent === undefined ? true : emitEvent;

	    this.remove(doc, false);
	    this.add(doc, false);

	    if (emitEvent) this.eventEmitter.emit('update', doc, this);
	  };

	  /**
	   * Calculates the inverse document frequency for a token within the index.
	   *
	   * @param {String} token The token to calculate the idf of.
	   * @see Index.prototype.idf
	   * @private
	   * @memberOf Index
	   */
	  lunr.Index.prototype.idf = function (term) {
	    var cacheKey = "@" + term;
	    if (Object.prototype.hasOwnProperty.call(this._idfCache, cacheKey)) return this._idfCache[cacheKey];

	    var documentFrequency = this.tokenStore.count(term),
	        idf = 1;

	    if (documentFrequency > 0) {
	      idf = 1 + Math.log(this.documentStore.length / documentFrequency);
	    }

	    return this._idfCache[cacheKey] = idf;
	  };

	  /**
	   * Searches the index using the passed query.
	   *
	   * Queries should be a string, multiple words are allowed and will lead to an
	   * AND based query, e.g. `idx.search('foo bar')` will run a search for
	   * documents containing both 'foo' and 'bar'.
	   *
	   * All query tokens are passed through the same pipeline that document tokens
	   * are passed through, so any language processing involved will be run on every
	   * query term.
	   *
	   * Each query term is expanded, so that the term 'he' might be expanded to
	   * 'hello' and 'help' if those terms were already included in the index.
	   *
	   * Matching documents are returned as an array of objects, each object contains
	   * the matching document ref, as set for this index, and the similarity score
	   * for this document against the query.
	   *
	   * @param {String} query The query to search the index with.
	   * @returns {Object}
	   * @see Index.prototype.idf
	   * @see Index.prototype.documentVector
	   * @memberOf Index
	   */
	  lunr.Index.prototype.search = function (query) {
	    var queryTokens = this.pipeline.run(lunr.tokenizer(query)),
	        queryVector = new lunr.Vector(),
	        documentSets = [],
	        fieldBoosts = this._fields.reduce(function (memo, f) {
	      return memo + f.boost;
	    }, 0);

	    var hasSomeToken = queryTokens.some(function (token) {
	      return this.tokenStore.has(token);
	    }, this);

	    if (!hasSomeToken) return [];

	    queryTokens.forEach(function (token, i, tokens) {
	      var tf = 1 / tokens.length * this._fields.length * fieldBoosts,
	          self = this;

	      var set = this.tokenStore.expand(token).reduce(function (memo, key) {
	        var pos = self.corpusTokens.indexOf(key),
	            idf = self.idf(key),
	            similarityBoost = 1,
	            set = new lunr.SortedSet();

	        // if the expanded key is not an exact match to the token then
	        // penalise the score for this key by how different the key is
	        // to the token.
	        if (key !== token) {
	          var diff = Math.max(3, key.length - token.length);
	          similarityBoost = 1 / Math.log(diff);
	        }

	        // calculate the query tf-idf score for this token
	        // applying an similarityBoost to ensure exact matches
	        // these rank higher than expanded terms
	        if (pos > -1) queryVector.insert(pos, tf * idf * similarityBoost);

	        // add all the documents that have this key into a set
	        Object.keys(self.tokenStore.get(key)).forEach(function (ref) {
	          set.add(ref);
	        });

	        return memo.union(set);
	      }, new lunr.SortedSet());

	      documentSets.push(set);
	    }, this);

	    var documentSet = documentSets.reduce(function (memo, set) {
	      return memo.intersect(set);
	    });

	    return documentSet.map(function (ref) {
	      return { ref: ref, score: queryVector.similarity(this.documentVector(ref)) };
	    }, this).sort(function (a, b) {
	      return b.score - a.score;
	    });
	  };

	  /**
	   * Generates a vector containing all the tokens in the document matching the
	   * passed documentRef.
	   *
	   * The vector contains the tf-idf score for each token contained in the
	   * document with the passed documentRef.  The vector will contain an element
	   * for every token in the indexes corpus, if the document does not contain that
	   * token the element will be 0.
	   *
	   * @param {Object} documentRef The ref to find the document with.
	   * @returns {lunr.Vector}
	   * @private
	   * @memberOf Index
	   */
	  lunr.Index.prototype.documentVector = function (documentRef) {
	    var documentTokens = this.documentStore.get(documentRef),
	        documentTokensLength = documentTokens.length,
	        documentVector = new lunr.Vector();

	    for (var i = 0; i < documentTokensLength; i++) {
	      var token = documentTokens.elements[i],
	          tf = this.tokenStore.get(token)[documentRef].tf,
	          idf = this.idf(token);

	      documentVector.insert(this.corpusTokens.indexOf(token), tf * idf);
	    };

	    return documentVector;
	  };

	  /**
	   * Returns a representation of the index ready for serialisation.
	   *
	   * @returns {Object}
	   * @memberOf Index
	   */
	  lunr.Index.prototype.toJSON = function () {
	    return {
	      version: lunr.version,
	      fields: this._fields,
	      ref: this._ref,
	      documentStore: this.documentStore.toJSON(),
	      tokenStore: this.tokenStore.toJSON(),
	      corpusTokens: this.corpusTokens.toJSON(),
	      pipeline: this.pipeline.toJSON()
	    };
	  };

	  /**
	   * Applies a plugin to the current index.
	   *
	   * A plugin is a function that is called with the index as its context.
	   * Plugins can be used to customise or extend the behaviour the index
	   * in some way. A plugin is just a function, that encapsulated the custom
	   * behaviour that should be applied to the index.
	   *
	   * The plugin function will be called with the index as its argument, additional
	   * arguments can also be passed when calling use. The function will be called
	   * with the index as its context.
	   *
	   * Example:
	   *
	   *     var myPlugin = function (idx, arg1, arg2) {
	   *       // `this` is the index to be extended
	   *       // apply any extensions etc here.
	   *     }
	   *
	   *     var idx = lunr(function () {
	   *       this.use(myPlugin, 'arg1', 'arg2')
	   *     })
	   *
	   * @param {Function} plugin The plugin to apply.
	   * @memberOf Index
	   */
	  lunr.Index.prototype.use = function (plugin) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    args.unshift(this);
	    plugin.apply(this, args);
	  };
	  /*!
	   * lunr.Store
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.Store is a simple key-value store used for storing sets of tokens for
	   * documents stored in index.
	   *
	   * @constructor
	   * @module
	   */
	  lunr.Store = function () {
	    this.store = {};
	    this.length = 0;
	  };

	  /**
	   * Loads a previously serialised store
	   *
	   * @param {Object} serialisedData The serialised store to load.
	   * @returns {lunr.Store}
	   * @memberOf Store
	   */
	  lunr.Store.load = function (serialisedData) {
	    var store = new this();

	    store.length = serialisedData.length;
	    store.store = Object.keys(serialisedData.store).reduce(function (memo, key) {
	      memo[key] = lunr.SortedSet.load(serialisedData.store[key]);
	      return memo;
	    }, {});

	    return store;
	  };

	  /**
	   * Stores the given tokens in the store against the given id.
	   *
	   * @param {Object} id The key used to store the tokens against.
	   * @param {Object} tokens The tokens to store against the key.
	   * @memberOf Store
	   */
	  lunr.Store.prototype.set = function (id, tokens) {
	    if (!this.has(id)) this.length++;
	    this.store[id] = tokens;
	  };

	  /**
	   * Retrieves the tokens from the store for a given key.
	   *
	   * @param {Object} id The key to lookup and retrieve from the store.
	   * @returns {Object}
	   * @memberOf Store
	   */
	  lunr.Store.prototype.get = function (id) {
	    return this.store[id];
	  };

	  /**
	   * Checks whether the store contains a key.
	   *
	   * @param {Object} id The id to look up in the store.
	   * @returns {Boolean}
	   * @memberOf Store
	   */
	  lunr.Store.prototype.has = function (id) {
	    return id in this.store;
	  };

	  /**
	   * Removes the value for a key in the store.
	   *
	   * @param {Object} id The id to remove from the store.
	   * @memberOf Store
	   */
	  lunr.Store.prototype.remove = function (id) {
	    if (!this.has(id)) return;

	    delete this.store[id];
	    this.length--;
	  };

	  /**
	   * Returns a representation of the store ready for serialisation.
	   *
	   * @returns {Object}
	   * @memberOf Store
	   */
	  lunr.Store.prototype.toJSON = function () {
	    return {
	      store: this.store,
	      length: this.length
	    };
	  };

	  /*!
	   * lunr.stemmer
	   * Copyright (C) 2015 Oliver Nightingale
	   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
	   */

	  /**
	   * lunr.stemmer is an english language stemmer, this is a JavaScript
	   * implementation of the PorterStemmer taken from http://tartarus.org/~martin
	   *
	   * @module
	   * @param {String} str The string to stem
	   * @returns {String}
	   * @see lunr.Pipeline
	   */
	  lunr.stemmer = (function () {
	    var step2list = {
	      "ational": "ate",
	      "tional": "tion",
	      "enci": "ence",
	      "anci": "ance",
	      "izer": "ize",
	      "bli": "ble",
	      "alli": "al",
	      "entli": "ent",
	      "eli": "e",
	      "ousli": "ous",
	      "ization": "ize",
	      "ation": "ate",
	      "ator": "ate",
	      "alism": "al",
	      "iveness": "ive",
	      "fulness": "ful",
	      "ousness": "ous",
	      "aliti": "al",
	      "iviti": "ive",
	      "biliti": "ble",
	      "logi": "log"
	    },
	        step3list = {
	      "icate": "ic",
	      "ative": "",
	      "alize": "al",
	      "iciti": "ic",
	      "ical": "ic",
	      "ful": "",
	      "ness": ""
	    },
	        c = "[^aeiou]",
	        // consonant
	    v = "[aeiouy]",
	        // vowel
	    C = c + "[^aeiouy]*",
	        // consonant sequence
	    V = v + "[aeiou]*",
	        // vowel sequence

	    mgr0 = "^(" + C + ")?" + V + C,
	        // [C]VC... is m>0
	    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",
	        // [C]VC[V] is m=1
	    mgr1 = "^(" + C + ")?" + V + C + V + C,
	        // [C]VCVC... is m>1
	    s_v = "^(" + C + ")?" + v; // vowel in stem

	    var re_mgr0 = new RegExp(mgr0);
	    var re_mgr1 = new RegExp(mgr1);
	    var re_meq1 = new RegExp(meq1);
	    var re_s_v = new RegExp(s_v);

	    var re_1a = /^(.+?)(ss|i)es$/;
	    var re2_1a = /^(.+?)([^s])s$/;
	    var re_1b = /^(.+?)eed$/;
	    var re2_1b = /^(.+?)(ed|ing)$/;
	    var re_1b_2 = /.$/;
	    var re2_1b_2 = /(at|bl|iz)$/;
	    var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
	    var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

	    var re_1c = /^(.+?[^aeiou])y$/;
	    var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

	    var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

	    var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
	    var re2_4 = /^(.+?)(s|t)(ion)$/;

	    var re_5 = /^(.+?)e$/;
	    var re_5_1 = /ll$/;
	    var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

	    var porterStemmer = function porterStemmer(w) {
	      var stem, suffix, firstch, re, re2, re3, re4;

	      if (w.length < 3) {
	        return w;
	      }

	      firstch = w.substr(0, 1);
	      if (firstch == "y") {
	        w = firstch.toUpperCase() + w.substr(1);
	      }

	      // Step 1a
	      re = re_1a;
	      re2 = re2_1a;

	      if (re.test(w)) {
	        w = w.replace(re, "$1$2");
	      } else if (re2.test(w)) {
	        w = w.replace(re2, "$1$2");
	      }

	      // Step 1b
	      re = re_1b;
	      re2 = re2_1b;
	      if (re.test(w)) {
	        var fp = re.exec(w);
	        re = re_mgr0;
	        if (re.test(fp[1])) {
	          re = re_1b_2;
	          w = w.replace(re, "");
	        }
	      } else if (re2.test(w)) {
	        var fp = re2.exec(w);
	        stem = fp[1];
	        re2 = re_s_v;
	        if (re2.test(stem)) {
	          w = stem;
	          re2 = re2_1b_2;
	          re3 = re3_1b_2;
	          re4 = re4_1b_2;
	          if (re2.test(w)) {
	            w = w + "e";
	          } else if (re3.test(w)) {
	            re = re_1b_2;w = w.replace(re, "");
	          } else if (re4.test(w)) {
	            w = w + "e";
	          }
	        }
	      }

	      // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
	      re = re_1c;
	      if (re.test(w)) {
	        var fp = re.exec(w);
	        stem = fp[1];
	        w = stem + "i";
	      }

	      // Step 2
	      re = re_2;
	      if (re.test(w)) {
	        var fp = re.exec(w);
	        stem = fp[1];
	        suffix = fp[2];
	        re = re_mgr0;
	        if (re.test(stem)) {
	          w = stem + step2list[suffix];
	        }
	      }

	      // Step 3
	      re = re_3;
	      if (re.test(w)) {
	        var fp = re.exec(w);
	        stem = fp[1];
	        suffix = fp[2];
	        re = re_mgr0;
	        if (re.test(stem)) {
	          w = stem + step3list[suffix];
	        }
	      }

	      // Step 4
	      re = re_4;
	      re2 = re2_4;
	      if (re.test(w)) {
	        var fp = re.exec(w);
	        stem = fp[1];
	        re = re_mgr1;
	        if (re.test(stem)) {
	          w = stem;
	        }
	      } else if (re2.test(w)) {
	        var fp = re2.exec(w);
	        stem = fp[1] + fp[2];
	        re2 = re_mgr1;
	        if (re2.test(stem)) {
	          w = stem;
	        }
	      }

	      // Step 5
	      re = re_5;
	      if (re.test(w)) {
	        var fp = re.exec(w);
	        stem = fp[1];
	        re = re_mgr1;
	        re2 = re_meq1;
	        re3 = re3_5;
	        if (re.test(stem) || re2.test(stem) && !re3.test(stem)) {
	          w = stem;
	        }
	      }

	      re = re_5_1;
	      re2 = re_mgr1;
	      if (re.test(w) && re2.test(w)) {
	        re = re_1b_2;
	        w = w.replace(re, "");
	      }

	      // and turn initial Y back to y

	      if (firstch == "y") {
	        w = firstch.toLowerCase() + w.substr(1);
	      }

	      return w;
	    };

	    return porterStemmer;
	  })();

	  lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer');
	  /*!
	   * lunr.stopWordFilter
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.stopWordFilter is an English language stop word list filter, any words
	   * contained in the list will not be passed through the filter.
	   *
	   * This is intended to be used in the Pipeline. If the token does not pass the
	   * filter then undefined will be returned.
	   *
	   * @module
	   * @param {String} token The token to pass through the filter
	   * @returns {String}
	   * @see lunr.Pipeline
	   */
	  lunr.stopWordFilter = function (token) {
	    if (token && lunr.stopWordFilter.stopWords[token] !== token) return token;
	  };

	  lunr.stopWordFilter.stopWords = {
	    'a': 'a',
	    'able': 'able',
	    'about': 'about',
	    'across': 'across',
	    'after': 'after',
	    'all': 'all',
	    'almost': 'almost',
	    'also': 'also',
	    'am': 'am',
	    'among': 'among',
	    'an': 'an',
	    'and': 'and',
	    'any': 'any',
	    'are': 'are',
	    'as': 'as',
	    'at': 'at',
	    'be': 'be',
	    'because': 'because',
	    'been': 'been',
	    'but': 'but',
	    'by': 'by',
	    'can': 'can',
	    'cannot': 'cannot',
	    'could': 'could',
	    'dear': 'dear',
	    'did': 'did',
	    'do': 'do',
	    'does': 'does',
	    'either': 'either',
	    'else': 'else',
	    'ever': 'ever',
	    'every': 'every',
	    'for': 'for',
	    'from': 'from',
	    'get': 'get',
	    'got': 'got',
	    'had': 'had',
	    'has': 'has',
	    'have': 'have',
	    'he': 'he',
	    'her': 'her',
	    'hers': 'hers',
	    'him': 'him',
	    'his': 'his',
	    'how': 'how',
	    'however': 'however',
	    'i': 'i',
	    'if': 'if',
	    'in': 'in',
	    'into': 'into',
	    'is': 'is',
	    'it': 'it',
	    'its': 'its',
	    'just': 'just',
	    'least': 'least',
	    'let': 'let',
	    'like': 'like',
	    'likely': 'likely',
	    'may': 'may',
	    'me': 'me',
	    'might': 'might',
	    'most': 'most',
	    'must': 'must',
	    'my': 'my',
	    'neither': 'neither',
	    'no': 'no',
	    'nor': 'nor',
	    'not': 'not',
	    'of': 'of',
	    'off': 'off',
	    'often': 'often',
	    'on': 'on',
	    'only': 'only',
	    'or': 'or',
	    'other': 'other',
	    'our': 'our',
	    'own': 'own',
	    'rather': 'rather',
	    'said': 'said',
	    'say': 'say',
	    'says': 'says',
	    'she': 'she',
	    'should': 'should',
	    'since': 'since',
	    'so': 'so',
	    'some': 'some',
	    'than': 'than',
	    'that': 'that',
	    'the': 'the',
	    'their': 'their',
	    'them': 'them',
	    'then': 'then',
	    'there': 'there',
	    'these': 'these',
	    'they': 'they',
	    'this': 'this',
	    'tis': 'tis',
	    'to': 'to',
	    'too': 'too',
	    'twas': 'twas',
	    'us': 'us',
	    'wants': 'wants',
	    'was': 'was',
	    'we': 'we',
	    'were': 'were',
	    'what': 'what',
	    'when': 'when',
	    'where': 'where',
	    'which': 'which',
	    'while': 'while',
	    'who': 'who',
	    'whom': 'whom',
	    'why': 'why',
	    'will': 'will',
	    'with': 'with',
	    'would': 'would',
	    'yet': 'yet',
	    'you': 'you',
	    'your': 'your'
	  };

	  lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter');
	  /*!
	   * lunr.trimmer
	   * Copyright (C) 2015 Oliver Nightingale
	   */

	  /**
	   * lunr.trimmer is a pipeline function for trimming non word
	   * characters from the begining and end of tokens before they
	   * enter the index.
	   *
	   * This implementation may not work correctly for non latin
	   * characters and should either be removed or adapted for use
	   * with languages with non-latin characters.
	   *
	   * @module
	   * @param {String} token The token to pass through the filter
	   * @returns {String}
	   * @see lunr.Pipeline
	   */
	  lunr.trimmer = function (token) {
	    var result = token.replace(/^\W+/, '').replace(/\W+$/, '');
	    return result === '' ? undefined : result;
	  };

	  lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer');
	  /*!
	   * lunr.stemmer
	   * Copyright (C) 2015 Oliver Nightingale
	   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
	   */

	  /**
	   * lunr.TokenStore is used for efficient storing and lookup of the reverse
	   * index of token to document ref.
	   *
	   * @constructor
	   */
	  lunr.TokenStore = function () {
	    this.root = { docs: {} };
	    this.length = 0;
	  };

	  /**
	   * Loads a previously serialised token store
	   *
	   * @param {Object} serialisedData The serialised token store to load.
	   * @returns {lunr.TokenStore}
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.load = function (serialisedData) {
	    var store = new this();

	    store.root = serialisedData.root;
	    store.length = serialisedData.length;

	    return store;
	  };

	  /**
	   * Adds a new token doc pair to the store.
	   *
	   * By default this function starts at the root of the current store, however
	   * it can start at any node of any token store if required.
	   *
	   * @param {String} token The token to store the doc under
	   * @param {Object} doc The doc to store against the token
	   * @param {Object} root An optional node at which to start looking for the
	   * correct place to enter the doc, by default the root of this lunr.TokenStore
	   * is used.
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.prototype.add = function (token, doc, root) {
	    var root = root || this.root,
	        key = token[0],
	        rest = token.slice(1);

	    if (!(key in root)) root[key] = { docs: {} };

	    if (rest.length === 0) {
	      root[key].docs[doc.ref] = doc;
	      this.length += 1;
	      return;
	    } else {
	      return this.add(rest, doc, root[key]);
	    }
	  };

	  /**
	   * Checks whether this key is contained within this lunr.TokenStore.
	   *
	   * By default this function starts at the root of the current store, however
	   * it can start at any node of any token store if required.
	   *
	   * @param {String} token The token to check for
	   * @param {Object} root An optional node at which to start
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.prototype.has = function (token) {
	    if (!token) return false;

	    var node = this.root;

	    for (var i = 0; i < token.length; i++) {
	      if (!node[token[i]]) return false;

	      node = node[token[i]];
	    }

	    return true;
	  };

	  /**
	   * Retrieve a node from the token store for a given token.
	   *
	   * By default this function starts at the root of the current store, however
	   * it can start at any node of any token store if required.
	   *
	   * @param {String} token The token to get the node for.
	   * @param {Object} root An optional node at which to start.
	   * @returns {Object}
	   * @see TokenStore.prototype.get
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.prototype.getNode = function (token) {
	    if (!token) return {};

	    var node = this.root;

	    for (var i = 0; i < token.length; i++) {
	      if (!node[token[i]]) return {};

	      node = node[token[i]];
	    }

	    return node;
	  };

	  /**
	   * Retrieve the documents for a node for the given token.
	   *
	   * By default this function starts at the root of the current store, however
	   * it can start at any node of any token store if required.
	   *
	   * @param {String} token The token to get the documents for.
	   * @param {Object} root An optional node at which to start.
	   * @returns {Object}
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.prototype.get = function (token, root) {
	    return this.getNode(token, root).docs || {};
	  };

	  lunr.TokenStore.prototype.count = function (token, root) {
	    return Object.keys(this.get(token, root)).length;
	  };

	  /**
	   * Remove the document identified by ref from the token in the store.
	   *
	   * By default this function starts at the root of the current store, however
	   * it can start at any node of any token store if required.
	   *
	   * @param {String} token The token to get the documents for.
	   * @param {String} ref The ref of the document to remove from this token.
	   * @param {Object} root An optional node at which to start.
	   * @returns {Object}
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.prototype.remove = function (token, ref) {
	    if (!token) return;
	    var node = this.root;

	    for (var i = 0; i < token.length; i++) {
	      if (!(token[i] in node)) return;
	      node = node[token[i]];
	    }

	    delete node.docs[ref];
	  };

	  /**
	   * Find all the possible suffixes of the passed token using tokens
	   * currently in the store.
	   *
	   * @param {String} token The token to expand.
	   * @returns {Array}
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.prototype.expand = function (token, memo) {
	    var root = this.getNode(token),
	        docs = root.docs || {},
	        memo = memo || [];

	    if (Object.keys(docs).length) memo.push(token);

	    Object.keys(root).forEach(function (key) {
	      if (key === 'docs') return;

	      memo.concat(this.expand(token + key, memo));
	    }, this);

	    return memo;
	  };

	  /**
	   * Returns a representation of the token store ready for serialisation.
	   *
	   * @returns {Object}
	   * @memberOf TokenStore
	   */
	  lunr.TokenStore.prototype.toJSON = function () {
	    return {
	      root: this.root,
	      length: this.length
	    };
	  };

	  /**
	   * export the module via AMD, CommonJS or as a browser global
	   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
	   */
	  (function (root, factory) {
	    if (true) {
	      // AMD. Register as an anonymous module.
	      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	      /**
	       * Node. Does not work with strict CommonJS, but
	       * only CommonJS-like enviroments that support module.exports,
	       * like Node.
	       */
	      module.exports = factory();
	    } else {
	      // Browser globals (root is window)
	      root.lunr = factory();
	    }
	  })(this, function () {
	    /**
	     * Just return a value to define the module export.
	     * This example returns an object, but the module
	     * can return a function as the exported value.
	     */
	    return lunr;
	  });
	})();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(14);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var asap = __webpack_require__(8);

	function noop() {}

	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable

	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.

	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	module.exports = Promise;

	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;

	Promise.prototype.then = function (onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};

	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}

	function handleResolved(self, deferred) {
	  asap(function () {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(self, new TypeError('A promise cannot be resolved with itself.'));
	  }
	  if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (then === self.then && newValue instanceof Promise) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}

	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}

	function Handler(onFulfilled, onRejected, promise) {
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  });
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	    // MessageChannels are desirable because they give direct access to the HTML
	    // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	    // 11-12, and in web workers in many engines.
	    // Although message channels yield to any queued rendering and IO tasks, they
	    // would be better than imposing the 4ms delay of timers.
	    // However, they do not work reliably in Internet Explorer or Safari.

	    // Internet Explorer 10 is the only browser that has setImmediate but does
	    // not have MutationObservers.
	    // Although setImmediate yields to the browser's renderer, it would be
	    // preferrable to falling back to setTimeout since it does not have
	    // the minimum 4ms penalty.
	    // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	    // Desktop to a lesser extent) that renders both setImmediate and
	    // MessageChannel useless for the purposes of ASAP.
	    // https://github.com/kriskowal/q/issues/396

	    // Timers are implemented universally.
	    // We fall back to timers in workers in most engines, and in foreground
	    // contexts in the following browsers.
	    // However, note that even this simple case requires nuances to operate in a
	    // broad spectrum of browsers.
	    //
	    // - Firefox 3-13
	    // - Internet Explorer 6-9
	    // - iPad Safari 4.3
	    // - Lynx 2.8.7
	} else {
	        requestFlush = makeRequestCallFromTimer(flush);
	    }

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, { characterData: true });
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(7);

	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(7);

	module.exports = Promise;
	Promise.prototype['finally'] = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//This file contains the ES6 extensions to the core Promises/A+ API

	var Promise = __webpack_require__(7);

	module.exports = Promise;

	/* Static Functions */

	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');

	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;

	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;

	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};

	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);

	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(_x, _x2) {
	      var _again = true;

	      _function: while (_again) {
	        var i = _x,
	            val = _x2;
	        _again = false;

	        if (val && (typeof val === 'object' || typeof val === 'function')) {
	          if (val instanceof Promise && val.then === Promise.prototype.then) {
	            while (val._81 === 3) {
	              val = val._65;
	            }
	            if (val._81 === 1) {
	              _x = i;
	              _x2 = val._65;
	              _again = true;
	              continue _function;
	            }
	            if (val._81 === 2) reject(val._65);
	            val.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          } else {
	            var then = val.then;
	            if (typeof then === 'function') {
	              var p = new Promise(then.bind(val));
	              p.then(function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	        }
	        args[i] = val;
	        if (--remaining === 0) {
	          resolve(args);
	        }
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function (value) {
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};

	/* Prototype Methods */

	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This file contains then/promise specific extensions that are only useful
	// for node.js interop

	var Promise = __webpack_require__(7);
	var asap = __webpack_require__(13);

	module.exports = Promise;

	/* Static Functions */

	Promise.denodeify = function (fn, argumentCount) {
	  if (typeof argumentCount === 'number' && argumentCount !== Infinity) {
	    return denodeifyWithCount(fn, argumentCount);
	  } else {
	    return denodeifyWithoutCount(fn);
	  }
	};

	var callbackFn = 'function (err, res) {' + 'if (err) { rj(err); } else { rs(res); }' + '}';
	function denodeifyWithCount(fn, argumentCount) {
	  var args = [];
	  for (var i = 0; i < argumentCount; i++) {
	    args.push('a' + i);
	  }
	  var body = ['return function (' + args.join(',') + ') {', 'var self = this;', 'return new Promise(function (rs, rj) {', 'var res = fn.call(', ['self'].concat(args).concat([callbackFn]).join(','), ');', 'if (res &&', '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ') {rs(res);}', '});', '};'].join('');
	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}
	function denodeifyWithoutCount(fn) {
	  var fnLength = Math.max(fn.length - 1, 3);
	  var args = [];
	  for (var i = 0; i < fnLength; i++) {
	    args.push('a' + i);
	  }
	  var body = ['return function (' + args.join(',') + ') {', 'var self = this;', 'var args;', 'var argLength = arguments.length;', 'if (arguments.length > ' + fnLength + ') {', 'args = new Array(arguments.length + 1);', 'for (var i = 0; i < arguments.length; i++) {', 'args[i] = arguments[i];', '}', '}', 'return new Promise(function (rs, rj) {', 'var cb = ' + callbackFn + ';', 'var res;', 'switch (argLength) {', args.concat(['extra']).map(function (_, index) {
	    return 'case ' + index + ':' + 'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' + 'break;';
	  }).join(''), 'default:', 'args[argLength] = cb;', 'res = fn.apply(self, args);', '}', 'if (res &&', '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ') {rs(res);}', '});', '};'].join('');

	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}

	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback = typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        });
	      }
	    }
	  };
	};

	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;

	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(8);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(7);

	module.exports = Promise;
	Promise.enableSynchronous = function () {
	  Promise.prototype.isPending = function () {
	    return this.getState() == 0;
	  };

	  Promise.prototype.isFulfilled = function () {
	    return this.getState() == 1;
	  };

	  Promise.prototype.isRejected = function () {
	    return this.getState() == 2;
	  };

	  Promise.prototype.getValue = function () {
	    if (this._81 === 3) {
	      return this._65.getValue();
	    }

	    if (!this.isFulfilled()) {
	      throw new Error('Cannot get a value of an unfulfilled promise.');
	    }

	    return this._65;
	  };

	  Promise.prototype.getReason = function () {
	    if (this._81 === 3) {
	      return this._65.getReason();
	    }

	    if (!this.isRejected()) {
	      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
	    }

	    return this._65;
	  };

	  Promise.prototype.getState = function () {
	    if (this._81 === 3) {
	      return this._65.getState();
	    }
	    if (this._81 === -1 || this._81 === -2) {
	      return 0;
	    }

	    return this._81;
	  };
	};

	Promise.disableSynchronous = function () {
	  Promise.prototype.isPending = undefined;
	  Promise.prototype.isFulfilled = undefined;
	  Promise.prototype.isRejected = undefined;
	  Promise.prototype.getValue = undefined;
	  Promise.prototype.getReason = undefined;
	  Promise.prototype.getState = undefined;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	var _mosaicDataset = __webpack_require__(3);

	var _DataSetIndex = __webpack_require__(2);

	var _DataSetIndex2 = _interopRequireDefault(_DataSetIndex);

	var _SearchCriteria = __webpack_require__(16);

	var _SearchCriteria2 = _interopRequireDefault(_SearchCriteria);

	var _SearchCriteriaDataSet = __webpack_require__(18);

	var _SearchCriteriaDataSet2 = _interopRequireDefault(_SearchCriteriaDataSet);

	var SearchableDataSet = (function (_DataSet) {
	    _inherits(SearchableDataSet, _DataSet);

	    function SearchableDataSet() {
	        _classCallCheck(this, SearchableDataSet);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(SearchableDataSet.prototype), 'constructor', this).apply(this, params);
	        this._onIndexing = this._onIndexing.bind(this);
	        this.indexFields = this.options.indexFields;
	    }

	    _createClass(SearchableDataSet, [{
	        key: 'close',
	        value: function close() {
	            this.indexFields = {};
	            return _get(Object.getPrototypeOf(SearchableDataSet.prototype), 'close', this).call(this);
	        }
	    }, {
	        key: 'search',
	        value: function search(queries) {
	            var that = this;
	            return this.action('search', function (intent) {
	                return that._getSearchCriteria(queries).then(function (criteria) {
	                    return criteria.runQuery(that._indexes, that);
	                });
	            });
	        }
	    }, {
	        key: 'setIndexFields',
	        value: function setIndexFields(indexFields) {
	            if (this._indexes) {
	                for (var key in this._indexes) {
	                    var index = this._indexes[key];
	                    index.removeListener('indexing', this._onIndexing);
	                }
	            }
	            this._indexes = {};
	            if (indexFields) {
	                var dataSet = this.dataSet;
	                for (var key in indexFields) {
	                    var fields = indexFields[key];
	                    var index = new _DataSetIndex2['default']({ dataSet: dataSet, fields: fields });
	                    index.addListener('indexing', this._onIndexing);
	                    index.indexKey = key;
	                    this._indexes[key] = index;
	                }
	            }
	        }
	    }, {
	        key: '_getSearchCriteria',
	        value: function _getSearchCriteria(queries) {
	            var that = this;
	            return _promise2['default'].resolve().then(function () {
	                if (typeof queries.runQuery === 'function') return queries;
	                var adapters = that.adapters;
	                var criteria = new _SearchCriteriaDataSet2['default']({ adapters: adapters });
	                queries = queries || {};
	                var items = [];
	                for (var key in queries) {
	                    var values = queries[key];
	                    if (values && !Array.isArray(values)) {
	                        values = [values];
	                    }
	                    items.push({ key: key, values: values });
	                }
	                return criteria.setItems(items).then(function () {
	                    return criteria;
	                });
	            });
	        }
	    }, {
	        key: '_createSingletonIntent',
	        value: function _createSingletonIntent(key, params, method) {
	            var that = this;
	            var internalIntent = that.intent(key, params);
	            var counter = 0;
	            internalIntent.handle = function (intent) {
	                counter++;
	                intent.finalize(function () {
	                    counter--;
	                    if (counter == 0) {
	                        internalIntent.resolve();
	                    }
	                });
	                return method(intent);
	            };
	            return internalIntent;
	        }
	    }, {
	        key: '_onIndexing',
	        value: function _onIndexing(intent) {
	            var that = this;
	            if (!that._indexingIntent) {
	                that._indexingIntent = that._createSingletonIntent('indexing', {}, function (intent) {
	                    function listener(event) {
	                        event.indexKey = event.index.indexKey;
	                        if (that._indexingIntent) {
	                            that._indexingIntent.emit('progress', event);
	                        }
	                    }
	                    intent.addListener('progress', listener);
	                    intent.finalize(function () {
	                        intent.removeListener('progress', listener);
	                    });
	                });
	                that._indexingIntent.finalize(function () {
	                    delete that._indexingIntent;
	                });
	            }
	            that._indexingIntent.handle(intent);
	        }
	    }, {
	        key: 'indexFields',
	        get: function get() {
	            var result = {};
	            for (var key in this._indexes) {
	                var index = this._indexes[key];
	                result[key] = index.indexFields;
	            }
	            return result;
	        },
	        set: function set(fields) {
	            this.setIndexFields(fields);
	        }
	    }]);

	    return SearchableDataSet;
	})(_mosaicDataset.DataSet);

	exports['default'] = SearchableDataSet;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	var _mosaicDataset = __webpack_require__(3);

	var _mosaicAdapters = __webpack_require__(17);

	/**
	 * Instances of this type are used as containers for search criteria.
	 */

	var SearchCriteria = (function (_Data) {
	    _inherits(SearchCriteria, _Data);

	    function SearchCriteria(options) {
	        var _get2;

	        _classCallCheck(this, SearchCriteria);

	        for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            params[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(SearchCriteria.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(params));
	    }

	    /**
	     * Returns values of search criteria.
	     */

	    _createClass(SearchCriteria, [{
	        key: 'addValues',

	        /**
	         * Adds the specified search values.
	         */
	        value: function addValues(values) {
	            var index = {};
	            this.values.forEach(function (val) {
	                index[val] = true;
	            });
	            if (values) {
	                values.forEach(function (val) {
	                    index[val] = true;
	                });
	            }
	            values = Object.keys(index);
	            this.values = values;
	            return values;
	        }

	        /**
	         * Toggles the specified search values (adds values if they does not exist
	         * and removes them if they already exist).
	         */
	    }, {
	        key: 'toggleValues',
	        value: function toggleValues(values) {
	            var index = {};
	            this.values.forEach(function (val) {
	                index[val] = true;
	            });
	            if (values) {
	                values.forEach(function (val) {
	                    if (index[val]) {
	                        delete index[val];
	                    } else {
	                        index[val] = true;
	                    }
	                });
	            } else {
	                index = {};
	            }
	            values = Object.keys(index);
	            this.values = values;
	            return values;
	        }

	        /**
	         * Runs this query against an index from the given object corresponding to
	         * the key of this query
	         */
	    }, {
	        key: 'runQuery',
	        value: function runQuery(indexes, resultSet) {
	            var that = this;
	            return _promise2['default'].resolve().then(function () {
	                var index = indexes[that.indexKey];
	                if (index) {
	                    var query = that.values.join(' ');
	                    return index.search(query, resultSet);
	                }
	            });
	        }
	    }, {
	        key: 'values',
	        get: function get() {
	            var values = this.get('values') || [];
	            if (values && !Array.isArray(values)) {
	                values = [values];
	            }
	            return values;
	        },

	        /**
	         * Sets a new value set for search criteria.
	         */
	        set: function set(values) {
	            if (values && !Array.isArray(values)) {
	                values = [values];
	            }
	            this.set('values', values);
	        }

	        /**
	         * Returns the key of this search criteria. This key is used to select the
	         * index where this search criteria should be applied. (see the
	         * SearchableDataSet class)
	         */
	    }, {
	        key: 'indexKey',
	        get: function get() {
	            return this.get('key') || 'full';
	        }

	        /**
	         * Returns a human-readable label for this search criteria.
	         */
	    }, {
	        key: 'label',
	        get: function get() {
	            return this.get('label') || this.values.join('; ');
	        }
	    }]);

	    return SearchCriteria;
	})(_mosaicDataset.Data);

	exports['default'] = SearchCriteria;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	var _mosaicDataset = __webpack_require__(3);

	var _SearchCriteria = __webpack_require__(16);

	var _SearchCriteria2 = _interopRequireDefault(_SearchCriteria);

	/**
	 * Container for search criteria.
	 */

	var SearchCriteriaDataSet = (function (_DataSet) {
	    _inherits(SearchCriteriaDataSet, _DataSet);

	    function SearchCriteriaDataSet(options) {
	        var _get2;

	        _classCallCheck(this, SearchCriteriaDataSet);

	        options = options || {};
	        if (!options.DataType) {
	            options.DataType = _SearchCriteria2['default'];
	        }

	        for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            params[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(SearchCriteriaDataSet.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(params));
	    }

	    /**
	     * Returns a search criteria to apply to the SearchableDataSet index set.
	     */

	    _createClass(SearchCriteriaDataSet, [{
	        key: 'getQuery',
	        value: function getQuery() {
	            return SearchCriteriaDataSet.getQuery(this);
	        }
	    }, {
	        key: 'runQuery',

	        /**
	         * Runs this query against an index from the given object corresponding to
	         * the key of this query
	         */
	        value: function runQuery(indexes, results) {
	            var that = this;
	            results = results || new _mosaicDataset.DataSet(this.options);
	            return _promise2['default'].resolve().then(function () {
	                if (!that.length) {
	                    var defaultIndexKey = that.defaultIndexKey;
	                    var index = indexes[defaultIndexKey];
	                    return index ? index.search(null, results) : undefined;
	                }
	                return that._runQueries(indexes, results).then(function (resultSets) {
	                    return that._combineSearchResults(resultSets, indexes);
	                }).then(function (items) {
	                    return results.setItems(items);
	                });
	            }).then(function () {
	                return results;
	            });
	        }
	    }, {
	        key: '_runQueries',
	        value: function _runQueries(indexes, results) {
	            return _promise2['default'].all(this.map(function (item) {
	                var resultSet = new _mosaicDataset.DataSet(results);
	                return item.runQuery(indexes, resultSet);
	            }));
	        }
	    }, {
	        key: '_combineSearchResults',
	        value: function _combineSearchResults(resultSets, indexes) {
	            resultSets = resultSets.filter(function (set) {
	                return !!set;
	            });
	            return _mosaicDataset.DataSet.intersection.apply(_mosaicDataset.DataSet, _toConsumableArray(resultSets));
	        }
	    }, {
	        key: 'query',
	        get: function get() {
	            return this.getQuery();
	        }
	    }, {
	        key: 'defaultIndexKey',

	        /**
	         * Returns the name of the default index.
	         */
	        get: function get() {
	            return this.options.defaultIndexKey || 'full';
	        }
	    }], [{
	        key: 'getQuery',
	        value: function getQuery(set) {
	            var result = {};
	            var defaultIndexKey = this.defaultIndexKey;
	            set.forEach(function (item) {
	                var key = item.indexKey || defaultIndexKey;
	                var values = item.values;
	                if (!key || !values) return;
	                var array = result[key] = result[key] || [];
	                values.forEach(function (val) {
	                    array.push(val);
	                });
	            });
	            return result;
	        }
	    }]);

	    return SearchCriteriaDataSet;
	})(_mosaicDataset.DataSet);

	exports['default'] = SearchCriteriaDataSet;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _PrintQueryListener = __webpack_require__(20);

	exports.PrintQueryListener = _interopRequire(_PrintQueryListener);

	var _QueryListener = __webpack_require__(21);

	exports.QueryListener = _interopRequire(_QueryListener);

	var _QueryVisitor = __webpack_require__(22);

	exports.QueryVisitor = _interopRequire(_QueryVisitor);

	var _SearchFunctionBuilder = __webpack_require__(23);

	exports.SearchFunctionBuilder = _interopRequire(_SearchFunctionBuilder);

	var _SerializeQueryListener = __webpack_require__(24);

	exports.SerializeQueryListener = _interopRequire(_SerializeQueryListener);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _QueryListener2 = __webpack_require__(21);

	var _QueryListener3 = _interopRequireDefault(_QueryListener2);

	var PrintQueryListener = (function (_QueryListener) {
	    _inherits(PrintQueryListener, _QueryListener);

	    function PrintQueryListener(options) {
	        _classCallCheck(this, PrintQueryListener);

	        _get(Object.getPrototypeOf(PrintQueryListener.prototype), 'constructor', this).call(this, options);
	        this.depth = 0;
	    }

	    _createClass(PrintQueryListener, [{
	        key: 'onValue',
	        value: function onValue(field, values) {
	            this._print('<' + field + '>' + values.join(', ') + '</' + field + '>');
	        }
	    }, {
	        key: 'beginOperation',
	        value: function beginOperation(op) {
	            this._print('<' + op + '>');
	            this.depth++;
	        }
	    }, {
	        key: 'endOperation',
	        value: function endOperation(op) {
	            this.depth--;
	            this._print('</' + op + '>');
	        }
	    }, {
	        key: '_print',
	        value: function _print(msg) {
	            var shift = '';
	            for (var i = 0; i < this.depth; i++) {
	                shift += '  ';
	            }
	            console.log(shift + msg);
	        }
	    }]);

	    return PrintQueryListener;
	})(_QueryListener3['default']);

	exports['default'] = PrintQueryListener;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var QueryListener = (function () {
	    function QueryListener(options) {
	        _classCallCheck(this, QueryListener);

	        this.options = options || {};
	    }

	    _createClass(QueryListener, [{
	        key: "onValue",
	        value: function onValue(field, values) {}
	    }, {
	        key: "beginOperation",
	        value: function beginOperation(op) {}
	    }, {
	        key: "endOperation",
	        value: function endOperation(op) {}
	    }]);

	    return QueryListener;
	})();

	exports["default"] = QueryListener;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var QueryVisitor = (function () {
	    function QueryVisitor(options) {
	        _classCallCheck(this, QueryVisitor);

	        this.options = options || {};
	        this.options.operation = this.options.operation || '$and';
	    }

	    _createClass(QueryVisitor, [{
	        key: 'visit',
	        value: function visit(query, listener) {
	            return visit(this.options.operation, query, listener);

	            function visit(op, query, listener) {
	                listener.beginOperation(op);
	                for (var key in query) {
	                    var value = query[key];
	                    if (key[0] === '$') {
	                        visit(key, value, listener);
	                    } else {
	                        var values = [];
	                        if (!!value) {
	                            if (!Array.isArray(value)) {
	                                value = [value];
	                            }
	                            value.forEach(function (val) {
	                                if (typeof val === 'object') {
	                                    throw new Error('Field criteria ' + 'can not be objects.');
	                                }
	                                values.push(val);
	                            });
	                        }
	                        listener.onValue(key, values);
	                    }
	                }
	                listener.endOperation(op);
	            }
	        }
	    }]);

	    return QueryVisitor;
	})();

	exports['default'] = QueryVisitor;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(3);

	var _QueryListener2 = __webpack_require__(21);

	var _QueryListener3 = _interopRequireDefault(_QueryListener2);

	var SearchFunctionBuilder = (function (_QueryListener) {
	    _inherits(SearchFunctionBuilder, _QueryListener);

	    function SearchFunctionBuilder(options) {
	        _classCallCheck(this, SearchFunctionBuilder);

	        _get(Object.getPrototypeOf(SearchFunctionBuilder.prototype), 'constructor', this).call(this, options);
	        this.stack = [[]];
	    }

	    _createClass(SearchFunctionBuilder, [{
	        key: 'onValue',
	        value: function onValue(field, values) {
	            var that = this;
	            var list = that.stack[that.stack.length - 1];
	            list.push({
	                runQuery: function runQuery(indexes, indexSet) {
	                    return Promise.resolve().then(function () {
	                        var q = values.join(' ');
	                        var index = indexes[field];
	                        var r = that._newDataSet();
	                        return index ? index.search(q, r) : undefined;
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'beginOperation',
	        value: function beginOperation(op) {
	            this.stack.push([]);
	        }
	    }, {
	        key: 'endOperation',
	        value: function endOperation(op) {
	            var list = this.stack.pop();
	            var top = this.stack[this.stack.length - 1];
	            var q = this._getQuery(op, list);
	            if (q) {
	                top.push(q);
	            }
	        }
	    }, {
	        key: '_getQuery',
	        value: function _getQuery(op, list) {
	            if (list.length) {
	                if (op === '$and') {
	                    return this._getAndQuery(list);
	                } else if (op === '$or') {
	                    return this._getOrQuery(list);
	                } else if (op === '$not') {
	                    return this._getNotQuery(list);
	                }
	            } else {
	                return this._emptyQuery();
	            }
	        }
	    }, {
	        key: '_emptyQuery',
	        value: function _emptyQuery() {
	            var that = this;
	            return {
	                runQuery: function runQuery(indexes, indexSet) {
	                    return that._newDataSet();
	                }
	            };
	        }
	    }, {
	        key: '_getAndQuery',
	        value: function _getAndQuery(list) {
	            var that = this;
	            return {
	                runQuery: function runQuery(indexes, indexSet) {
	                    return Promise.resolve().then(function () {
	                        return that._runSubqueries(list, indexes, indexSet).then(function (resultSets) {
	                            resultSets = resultSets.sort(function (a, b) {
	                                return a.length > b.length ? 1 : -1;
	                            });
	                            var items = [];
	                            var first = resultSets.shift();
	                            first.forEach(function (item) {
	                                var contained = true;
	                                for (var i = 0; contained && i < resultSets.length; i++) {
	                                    var set = resultSets[i];
	                                    contained = set.has(item);
	                                }
	                                if (contained) {
	                                    items.push(item);
	                                }
	                            });
	                            return that._newDataSet(items);
	                        });
	                    });
	                }
	            };
	        }
	    }, {
	        key: '_getOrQuery',
	        value: function _getOrQuery(list) {
	            var that = this;
	            return {
	                runQuery: function runQuery(indexes, indexSet) {
	                    return Promise.resolve().then(function () {
	                        return that._runSubqueries(list, indexes, indexSet).then(function (resultSets) {
	                            var items = [];
	                            var index = {};
	                            for (var i = 0; i < resultSets.length; i++) {
	                                resultSets[i].forEach(function (item) {
	                                    var id = item.id;
	                                    if (!(id in index)) {
	                                        index[id] = item;
	                                        items.push(item);
	                                    }
	                                });
	                            }
	                            return that._newDataSet(items);
	                        });
	                    });
	                }
	            };
	        }
	    }, {
	        key: '_getNotQuery',
	        value: function _getNotQuery(list) {
	            var that = this;
	            return {
	                runQuery: function runQuery(indexes, indexSet) {
	                    return Promise.resolve().then(function () {
	                        return that._runSubqueries(list, indexes, indexSet).then(function (resultSets) {
	                            var items = [];
	                            var parentSet = indexSet ? indexSet.dataSet : null;
	                            if (parentSet) {
	                                parentSet.forEach(function (item) {
	                                    var contained = false;
	                                    for (var i = 0; !contained && i < resultSets.length; i++) {
	                                        contained = resultSets[i].has(item);
	                                    }
	                                    if (!contained) {
	                                        items.push(item);
	                                    }
	                                });
	                            }
	                            return that._newDataSet(items);
	                        });
	                    });
	                }
	            };
	        }
	    }, {
	        key: '_runSubqueries',
	        value: function _runSubqueries(list, indexes, indexSet) {
	            var that = this;
	            return Promise.all(list.map(function (q) {
	                return q.runQuery(indexes, indexSet);
	            })).then(function (dataSets) {
	                var result = [];
	                dataSets.forEach(function (set) {
	                    if (!set) {
	                        set = that._newDataSet();
	                    }
	                    result.push(set);
	                });
	                return result;
	            });
	        }
	    }, {
	        key: '_newDataSet',
	        value: function _newDataSet(items) {
	            items = items || [];
	            var set = new _mosaicDataset.DataSet(_extends({}, this.options, { items: items }));
	            return set;
	        }
	    }, {
	        key: 'query',
	        get: function get() {
	            var op = this.options.operation || '$and';
	            var list = this.stack[this.stack.length - 1];
	            return this._getQuery(op, list);
	        }
	    }]);

	    return SearchFunctionBuilder;
	})(_QueryListener3['default']);

	exports['default'] = SearchFunctionBuilder;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _QueryListener2 = __webpack_require__(21);

	var _QueryListener3 = _interopRequireDefault(_QueryListener2);

	var SerializeListener = (function (_QueryListener) {
	    _inherits(SerializeListener, _QueryListener);

	    function SerializeListener(options) {
	        _classCallCheck(this, SerializeListener);

	        _get(Object.getPrototypeOf(SerializeListener.prototype), 'constructor', this).call(this, options);
	        this.query = {};
	        this.stack = [{}];
	    }

	    _createClass(SerializeListener, [{
	        key: 'onValue',
	        value: function onValue(field, values) {
	            var top = this.stack[this.stack.length - 1];
	            top[field] = values;
	        }
	    }, {
	        key: 'beginOperation',
	        value: function beginOperation(op) {
	            this.stack.push({});
	        }
	    }, {
	        key: 'endOperation',
	        value: function endOperation(op) {
	            var obj = this.stack.pop();
	            if (Object.keys(obj).length) {
	                this.query = obj;
	                if (this.stack.length) {
	                    var peek = this.stack[this.stack.length - 1];
	                    peek[op] = obj;
	                }
	            }
	        }
	    }]);

	    return SerializeListener;
	})(_QueryListener3['default']);

	exports['default'] = SerializeListener;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;