(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-homes-homes-module"],{

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/ionic-long-press/fesm5/ionic-long-press.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ionic-long-press/fesm5/ionic-long-press.js ***!
  \*****************************************************************/
/*! exports provided: LongPressDirective, LongPressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressModule", function() { return LongPressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





// const LONG_PRESS_DEFAULT_TIMEOUT = 500;
// const MIN_LONG_PRESS_TIMEOUT = 40;
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective(zone, el) {
        this.zone = zone;
        this.pressed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.longPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pressEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.el = el.nativeElement;
    }
    LongPressDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.interval)
            this.interval = 500;
        if (this.interval < 40) {
            throw new Error('A limit of 40ms is imposed so you don\'t destroy device performance. If you need less than a 40ms interval, please file an issue explaining your use case.');
        }
        this._hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Manager"](this.el, {
            recognizers: [
                [hammerjs__WEBPACK_IMPORTED_MODULE_2__["Pan"], { direction: hammerjs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_VERTICAL"] }],
                [hammerjs__WEBPACK_IMPORTED_MODULE_2__["Press"]],
                [hammerjs__WEBPACK_IMPORTED_MODULE_2__["Tap"]],
            ],
        });
        this._hammer.on('pan', function (e) {
            _this.onPressEnd();
        });
        this._hammer.on('press', function (e) {
            _this.pressed.emit(e);
            _this.clearInt();
            _this.int = setInterval(function () {
                _this.longPressed.emit();
            }, _this.interval);
        });
        this._hammer.on('pressup', function (e) {
            _this.onPressEnd();
        });
        this._hammer.on('release', function (e) {
            _this.onPressEnd();
        });
        this.el.addEventListener('mouseleave', function (e) {
            _this.onPressEnd();
        });
        this.el.addEventListener('mouseout', function (e) {
            _this.onPressEnd();
        });
    };
    LongPressDirective.prototype.clearInt = function () {
        if (this.int !== undefined) {
            clearInterval(this.int);
            this.int = undefined;
        }
    };
    LongPressDirective.prototype.onPressEnd = function () {
        this.clearInt();
        this.pressEnded.emit();
    };
    LongPressDirective.prototype.ngOnDestroy = function () {
        this.onPressEnd();
        if (this._hammer) {
            this._hammer.destroy();
            this._hammer = null;
        }
    };
    LongPressDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LongPressDirective.prototype, "interval", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LongPressDirective.prototype, "pressed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LongPressDirective.prototype, "longPressed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LongPressDirective.prototype, "pressEnded", void 0);
    LongPressDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ion-long-press]',
        })
    ], LongPressDirective);
    return LongPressDirective;
}());

var LongPressModule = /** @class */ (function () {
    function LongPressModule() {
    }
    LongPressModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [LongPressDirective],
            exports: [LongPressDirective]
        })
    ], LongPressModule);
    return LongPressModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ionic-long-press.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/client-hcontent/client-hcontent.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/client-hcontent/client-hcontent.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"title\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title class=\"title\">\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\" (ionPull)=\"ionPull($event)\"\n    (ionStart)=\"ionStart($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <div class=\"hello-card\">\n      <ion-list-header>Total expenses</ion-list-header>\n      <div>\n        <h3>{{spent}} DT</h3>\n      </div>\n    </div>\n\n    <ion-card class=\"welcome-card\">\n\n      <ion-card-content>\n        <canvas #dognutChart></canvas>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div>\n    <ion-list-header class=\"stats\">Finished projects</ion-list-header>\n    <ion-list *ngIf=\"this.finished.length>0\">\n\n      <div class=\"card\" *ngFor=\"let d of finished\" (click)=\"openProject(d['id'])\">\n        <div class=\"project-info\" [ngStyle]=\"{'background-color':color(d['type'])}\">\n          <ion-icon [name]=\"icon(d['type'])\" class=\"icon\"></ion-icon>\n        </div>\n        <div class=\"container\">\n          <h5><b>{{d['name']}}</b></h5>\n          <p>{{d['description']}}</p>\n\n        </div>\n\n      </div>\n    </ion-list>\n\n\n\n  </div>\n  <div class=\"no-project\" *ngIf=\"this.finished.length==0\">\n\n    <ion-label>No projects yet </ion-label>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/client-home-content/client-home-content.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/client-home-content/client-home-content.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"clientHome\">\n      <ion-icon name=\"home\" ></ion-icon>\n      <ion-label> Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"clientProjects\">\n          <ion-icon name=\"laptop\"></ion-icon>\n          <ion-label>Projects</ion-label>\n    </ion-tab-button>\n   \n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/client-projects/client-projects.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/client-projects/client-projects.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"title\"></ion-menu-button>\n      </ion-buttons>\n    <ion-title class=\"title\">\n      Projects\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-refresher slot=\"fixed\" \n(ionRefresh)=\"ionRefresh($event)\" \n(ionPull)=\"ionPull($event)\" \n(ionStart)=\"ionStart($event)\">\n  <ion-refresher-content\n    pullingIcon=\"arrow-dropdown\"\n    pullingText=\"Pull to refresh\"\n    refreshingSpinner=\"circles\"\n    refreshingText=\"Refreshing...\">\n  </ion-refresher-content>\n</ion-refresher>\n<ion-list-header class=\"list-header\">\n  Projects\n</ion-list-header>\n <ion-list *ngIf=\"this.projects.length>0\">\n\n      <div class=\"card\" *ngFor=\"let d of projects\" (click)=\"open(d['id'])\" >\n        <div class=\"project-info\">\n          <circle-progress\n              [percent]=\"d['progress']\"\n              [radius]=\"30\"\n              [outerStrokeWidth]=\"6\"\n              [innerStrokeWidth]=\"1\"\n              [showSubtitle]=\"false\"\n              [titleColor]=\"color(d['type'])\"\n              [unitsColor]=\"'#8e44ad'\"\n              [outerStrokeColor]=\"color(d['type'])\"\n              [innerStrokeColor]=\"color(d['type'])\"\n              [animation]=\"false\"\n              [animationDuration]=\"300\"></circle-progress>\n        </div>\n        <div class=\"container\">\n          <h5 ><b>{{d['name']}}</b></h5>\n           <p>{{d['description']}}</p>\n\n        </div>\n       \n        \n      </div>\n    </ion-list>\n    <ion-card *ngIf=\"this.projects.length==0\"  class=\"no-project\">\n      <ion-card-content>\n        No project Found\n      </ion-card-content>\n  </ion-card>\n    \n  \n  <ion-list-header class=\"list-header\">\n    Propositions\n  </ion-list-header>\n  <ion-card *ngIf=\"this.propositions.length==0\"  class=\"no-project\">\n    <ion-card-content>\n      No proposition Found\n    </ion-card-content>\n</ion-card>\n \n<ion-list *ngIf=\"this.propositions.length>0\">\n\n  <div  class=\"prop-card\" *ngFor=\"let d of propositions\"  >\n    <div class=\"project-info\" [ngStyle]=\"{'background-color':color(d['type'])}\">\n      <ion-icon [name]=\"icon(d['type'])\" class=\"icon\"></ion-icon>\n    </div>\n    <div class=\"container\" (click)=\"openProp(d['id'])\" >\n      <h5 ><b>{{d['name']}}</b></h5>\n      <p>{{d['description']}}</p>\n\n    </div>\n    <div class=\"delete\">\n      <ion-icon name=\"md-trash\" class=\"deleteIcon\" (click)=\"deleteAlert(d['id'])\"></ion-icon>\n\n    </div>\n    \n  </div>\n</ion-list>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n      <ion-fab-button  routerLink=\"/project-proposition\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    \n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/developer-hcontent/developer-hcontent.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/developer-hcontent/developer-hcontent.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"title\"></ion-menu-button>\n      </ion-buttons>\n      <ion-icon slot=\"end\" name=\"md-notifications\" (click)=\"openRejected()\" class=\"btn\"></ion-icon>\n\n    <ion-title class=\"title\">\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-refresher slot=\"fixed\" \n(ionRefresh)=\"ionRefresh($event)\" \n(ionPull)=\"ionPull($event)\" \n(ionStart)=\"ionStart($event)\">\n  <ion-refresher-content\n    pullingIcon=\"arrow-dropdown\"\n    pullingText=\"Pull to refresh\"\n    refreshingSpinner=\"circles\"\n    refreshingText=\"Refreshing...\">\n  </ion-refresher-content>\n</ion-refresher>\n \n  <!--\n     <div>\n     <div class=\"hello-card\">\n      <ion-list-header>Total expenses</ion-list-header>\n     <div >\n      <h3>{{spent}} DT</h3>\n     </div>\n    </div>\n  \n      <ion-card class=\"welcome-card\">\n       \n        <ion-card-content>\n          <canvas #dognutChart></canvas>\n        </ion-card-content>\n      </ion-card>\n  </div>\n  --> \n\n  <div>\n    <ion-list-header class=\"stats\">Finished projects</ion-list-header>\n    <ion-list *ngIf=\"this.finished.length>0\">\n\n      <div class=\"card\" *ngFor=\"let d of finished\" (click)=\"openProject(d['id'])\">\n        <div class=\"project-info\" [ngStyle]=\"{'background-color':color(d['type'])}\">\n          <ion-icon [name]=\"icon(d['type'])\" class=\"icon\"></ion-icon>\n        </div>\n        <div class=\"container\">\n          <h5 ><b>{{d['name']}}</b></h5>\n           <p>{{d['description']}}</p>\n\n        </div>\n        \n      </div>\n    </ion-list>\n  </div>\n  <div class=\"no-project\" *ngIf=\"this.finished.length==0\">\n  \n    <ion-label>No projects yet  </ion-label>\n  \n  </div > \n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/developer-home-content/developer-home-content.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/developer-home-content/developer-home-content.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"developerHome\">\n      <ion-icon name=\"home\" ></ion-icon>\n      <ion-label> Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"developerProjects\">\n          <ion-icon name=\"laptop\"></ion-icon>\n          <ion-label>Projects</ion-label>\n    </ion-tab-button>\n   \n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/h-content/h-content.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/h-content/h-content.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"title\"></ion-menu-button>\n        </ion-buttons>\n       \n            <ion-icon slot=\"end\" name=\"md-notifications\" (click)=\"openProp()\" class=\"btn\"></ion-icon>\n\n      <ion-title class=\"title\">\n        Home\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" \n  (ionRefresh)=\"ionRefresh($event)\" \n  (ionPull)=\"ionPull($event)\" \n  (ionStart)=\"ionStart($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n    <div>\n      <div class=\"income-card\">\n        <ion-list-header class=\"stats\">Total income</ion-list-header>\n       <div >\n        <h3>{{cost}} DT</h3>\n       </div>\n      </div>\n     \n        <ion-card class=\"welcome-card\">\n        \n          <ion-card-content>\n            <canvas #lineChart></canvas>\n          </ion-card-content>\n        </ion-card>\n       \n    </div>\n    <div>\n      <ion-list-header class=\"high-paid\">Most Costly projects</ion-list-header>\n      <ion-list *ngIf=\"this.highest_pro.length>0\">\n  \n        <div class=\"card\" *ngFor=\"let d of highest_pro\" (click)=\"openproject(d['id'])\">\n          <div class=\"project-info\" [ngStyle]=\"{'background-color':color(d['type'])}\">\n            <ion-icon [name]=\"icon(d['type'])\" class=\"icon\"></ion-icon>\n          </div>\n          <div class=\"container\">\n            <h5 ><b>{{d['name']}}</b></h5>\n             <p>{{d['description']}}</p>\n\n          </div>\n          <div class=\"solt-end\">\n            <ion-badge color=\"warning\" >{{d.cost}} DT</ion-badge>\n\n          </div>\n\n          \n        </div>\n      </ion-list>\n     \n     \n\n    </div>\n    <div class=\"no-project\" *ngIf=\"this.highest_pro.length==0\">\n      <ion-label  >No projects yet</ion-label>\n    </div > \n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/home-content/home-content.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/home-content/home-content.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"home\">\n            <ion-icon name=\"home\" ></ion-icon>\n            <ion-label> Home</ion-label>\n          </ion-tab-button>\n          <ion-tab-button tab=\"projects\">\n                <ion-icon name=\"laptop\"></ion-icon>\n                <ion-label>Projects</ion-label>\n          </ion-tab-button>\n          \n        </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/projects/projects.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/projects/projects.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"title\"></ion-menu-button>\n        </ion-buttons>\n      <ion-title class=\"title\">\n        Projects\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" \n  (ionRefresh)=\"ionRefresh($event)\" \n  (ionPull)=\"ionPull($event)\" \n  (ionStart)=\"ionStart($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n   <ion-list *ngIf=\"this.projects.length>0\">\n  \n       <div *ngFor=\"let d of projects\">\n        <div   class=\"card\"    >\n          <div class=\"project-info\">\n            <circle-progress\n                [percent]=\"d['progress']\"\n                [radius]=\"30\"\n                [outerStrokeWidth]=\"6\"\n                [innerStrokeWidth]=\"1\"\n                [showSubtitle]=\"false\"\n                [titleColor]=\"color(d['type'])\"\n                [unitsColor]=\"'#8e44ad'\"\n                [outerStrokeColor]=\"color(d['type'])\"\n                [innerStrokeColor]=\"color(d['type'])\"\n                [animation]=\"false\"\n                [animationDuration]=\"300\"></circle-progress>\n          </div>\n          <div class=\"container\"  (click)=\"openTask(d['id'])\"  >\n            <h5 ><b>{{d['name']}}</b></h5>\n             <p>{{d['description']}}</p>\n\n          </div>\n          <div  class=\"delete\" (click)=\"deleteAlert(d['id'])\">\n            <ion-icon name=\"md-trash\" class=\"deleteIcon\" ></ion-icon>\n          </div>\n        </div>\n       </div>\n      </ion-list>\n      <ion-card *ngIf=\"this.projects.length==0\"  class=\"no-project\">\n        <ion-card-content>\n          No project Found\n        </ion-card-content>\n    </ion-card>\n    \n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n        <ion-fab-button routerLink=\"/project\">\n          <ion-icon name=\"add\" ></ion-icon>\n        </ion-fab-button>\n      \n      </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/homes/homes.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/homes/homes.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-home-content *ngIf=\"data['role']=='manager'\"></app-home-content>\n<app-client-home-content *ngIf=\"data['role']=='client'\"></app-client-home-content>\n<app-developer-home-content *ngIf=\"data['role']=='developer'\"></app-developer-home-content>\n\n\n"

/***/ }),

/***/ "./src/app/Components/client-hcontent/client-hcontent.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Components/client-hcontent/client-hcontent.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  color: #462373; }\n\n.stats {\n  color: #462373;\n  font-size: 18px; }\n\n.projects {\n  color: #462373;\n  font-size: 15px; }\n\nion-card, .card-ios, .card-md {\n  border: 0 !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n  position: relative; }\n\n.welcome-card {\n  margin: 0 auto; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 75px;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.card .container {\n    width: 75%;\n    padding-left: 5px; }\n\n.card .container h5 {\n      color: #462373; }\n\n.card .container p {\n      color: #8395a7; }\n\n.card .project-info {\n    width: 25%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: white; }\n\n.no-project {\n  padding-left: 5%;\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  height: 7%;\n  width: 90%; }\n\n.no-project ion-label {\n    color: #462373;\n    font-size: 15px;\n    text-align: center; }\n\n.btn {\n  color: #462373;\n  font-size: 30px;\n  padding-right: 10px; }\n\n.hello-card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  height: 13%;\n  width: 90%;\n  background-color: #462373; }\n\n.hello-card h3 {\n    font-weight: bold;\n    margin: 0 auto;\n    margin-left: 18px;\n    font-size: 35px;\n    color: white; }\n\n.hello-card ion-list-header {\n    color: white;\n    font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2NsaWVudC1oY29udGVudC9jbGllbnQtaGNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUluQjtFQUNPLGNBQWE7RUFFaEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0UsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBUGY7SUFTTSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7O0FBVnZCO01BWVUsY0FBYSxFQUFBOztBQVp2QjtNQWVVLGNBQWMsRUFBQTs7QUFmeEI7SUE0QlEsVUFBUztJQUNULGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsOEJBQThCLEVBQUE7O0FBL0J0QztNQXVCWSxlQUFlO01BQ2YsZUFBZTtNQUNmLFlBQVksRUFBQTs7QUFXeEI7RUFDSSxnQkFBZTtFQUNkLDZDQUE2QztFQUM1QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBUztFQUNULFVBQVUsRUFBQTs7QUFSaEI7SUFVTSxjQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQixFQUFBOztBQUd4QjtFQUVFLGNBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3RCO0VBQ0csNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQVI1QjtJQVdPLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBZm5CO0lBa0JPLFlBQVc7SUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NsaWVudC1oY29udGVudC9jbGllbnQtaGNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cblxuLnRpdGxle1xuICAgIGNvbG9yOiM0NjIzNzM7XG59XG4uc3RhdHN7XG4gICAgY29sb3I6IzQ2MjM3MztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICBcblxufVxuLnByb2plY3Rze1xuICAgICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgXG4gICAgZm9udC1zaXplOiAxNXB4Oztcbn1cbmlvbi1jYXJkLCAuY2FyZC1pb3MsIC5jYXJkLW1kIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC53ZWxjb21lLWNhcmR7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDo3NXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIGg1e1xuICAgICAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6ICM4Mzk1YTc7XG4gICAgICAgIH1cbiAgICAgICAgICAgICBcbiBcblxuICAgICAgfVxuICAgICAgLnByb2plY3QtaW5mb3tcbiAgICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpZHRoOjI1JTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcblxuXG4gICAgICB9XG4gIH1cbiAgLm5vLXByb2plY3R7XG4gICAgICBwYWRkaW5nLWxlZnQ6NSU7XG4gICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6NyU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgIGlvbi1sYWJlbHtcbiAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIH1cbiAgfVxuICAuYnRue1xuICAgXG4gICAgY29sb3I6IzQ2MjM3MztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgXG4gfVxuIC5oZWxsby1jYXJke1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDoxMyU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDYyMzczO1xuXG4gICAgaDN7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/client-hcontent/client-hcontent.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/client-hcontent/client-hcontent.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientHContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHContentComponent", function() { return ClientHContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Models_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/Project */ "./src/app/Models/Project.ts");







var ClientHContentComponent = /** @class */ (function () {
    function ClientHContentComponent(route, service) {
        this.route = route;
        this.service = service;
        this.projects = [];
        this.finished = [];
        this.doing = [];
        this.spent = 0;
    }
    ClientHContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var p = new _Models_Project__WEBPACK_IMPORTED_MODULE_6__["Project"]();
        this.service.AsyncProjects().subscribe(function (data) {
            _this.projects = [];
            data.forEach(function (d) {
                var value = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['client'] == value.uid) {
                    p = obj;
                    p.id = d.payload.doc.id;
                    _this.spent = _this.spent + p.cost;
                    console.log(_this.spent);
                    _this.projects.push(p);
                    if (p.progress == 100) {
                        _this.finished.push(p);
                    }
                    else {
                        _this.doing.push(p);
                    }
                }
            });
            _this.createDonutsChart();
        });
    };
    ClientHContentComponent.prototype.getProjects = function () {
        var _this = this;
        this.projects = [];
        this.service.getClientProjects().then(function (res) {
            res.forEach(function (element) {
                _this.projects.push(element);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ClientHContentComponent.prototype.createDonutsChart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dognut = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.dognutChart.nativeElement, {
                    type: 'doughnut',
                    data: {
                        labels: ['finished projects', 'upgoing projects'],
                        datasets: [{
                                label: 'Projects',
                                data: [this.finished.length, this.doing.length],
                                backgroundColor: ['#a55eea', '#8e44ad'],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ClientHContentComponent.prototype.color = function (type) {
        if (type == "web") {
            return "#462373";
        }
        if (type == "mobile") {
            return "#a55eea";
        }
        if (type == "data") {
            return "#8e44ad";
        }
    };
    ClientHContentComponent.prototype.icon = function (type) {
        if (type == "web") {
            return "md-desktop";
        }
        if (type == "mobile") {
            return "md-phone-portrait";
        }
        if (type == "data") {
            return "md-analytics";
        }
    };
    ClientHContentComponent.prototype.openproject = function (id) {
        this.route.navigate(["/project-details"]);
    };
    ClientHContentComponent.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getProjects();
            event.target.complete();
        }, 2000);
    };
    ClientHContentComponent.prototype.ionPull = function (event) {
        console.log('ionPull Event Triggered!');
    };
    ClientHContentComponent.prototype.ionStart = function (event) {
        console.log('ionStart Event Triggered!');
    };
    ClientHContentComponent.prototype.openRejected = function () {
        this.route.navigate(["/rejected-propositions"]);
    };
    ClientHContentComponent.prototype.openProject = function (value) {
        var url = '/project-details/' + value;
        this.route.navigate([url]);
    };
    ClientHContentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dognutChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClientHContentComponent.prototype, "dognutChart", void 0);
    ClientHContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-hcontent',
            template: __webpack_require__(/*! raw-loader!./client-hcontent.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/client-hcontent/client-hcontent.component.html"),
            styles: [__webpack_require__(/*! ./client-hcontent.component.scss */ "./src/app/Components/client-hcontent/client-hcontent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
    ], ClientHContentComponent);
    return ClientHContentComponent;
}());



/***/ }),

/***/ "./src/app/Components/client-home-content/client-home-content.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/client-home-content/client-home-content.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon, ion-label {\n  color: #462373; }\n\nion-tab-bar {\n  --color-selected:#ff6b6b !important; }\n\nion-title {\n  color: #462373; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2NsaWVudC1ob21lLWNvbnRlbnQvY2xpZW50LWhvbWUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxtQ0FBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NsaWVudC1ob21lLWNvbnRlbnQvY2xpZW50LWhvbWUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWljb24saW9uLWxhYmVse1xuICAgIGNvbG9yOiAjNDYyMzczO1xufVxuaW9uLXRhYi1iYXJ7XG4gICAgLS1jb2xvci1zZWxlY3RlZDojZmY2YjZiICFpbXBvcnRhbnQ7XG59XG5pb24tdGl0bGV7XG4gICAgY29sb3I6IzQ2MjM3Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/client-home-content/client-home-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/client-home-content/client-home-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClientHomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHomeContentComponent", function() { return ClientHomeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientHomeContentComponent = /** @class */ (function () {
    function ClientHomeContentComponent() {
    }
    ClientHomeContentComponent.prototype.ngOnInit = function () { };
    ClientHomeContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-home-content',
            template: __webpack_require__(/*! raw-loader!./client-home-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/client-home-content/client-home-content.component.html"),
            styles: [__webpack_require__(/*! ./client-home-content.component.scss */ "./src/app/Components/client-home-content/client-home-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientHomeContentComponent);
    return ClientHomeContentComponent;
}());



/***/ }),

/***/ "./src/app/Components/client-projects/client-projects.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Components/client-projects/client-projects.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  color: #462373; }\n\n.no-project {\n  font-size: medium;\n  color: #462373; }\n\nion-fab-button {\n  --background: #462373; }\n\n.list-header {\n  color: #462373;\n  font-size: medium; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 13%;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.card .container {\n    width: 75%;\n    padding-left: 5px; }\n\n.card .container h5 {\n      color: #462373; }\n\n.card .container p {\n      color: #8395a7; }\n\n.card .project-info {\n    width: 25%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: white; }\n\n.card .delete {\n    width: 30%;\n    display: -webkit-box;\n    display: flex; }\n\n.card .delete .deleteIcon {\n      font-size: 30px;\n      margin: 0 auto;\n      margin-top: 50%;\n      color: #eb4d4b; }\n\n.prop-card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 13%;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.prop-card .container {\n    width: 75%;\n    padding-left: 5px; }\n\n.prop-card .container h5 {\n      color: #462373; }\n\n.prop-card .container p {\n      color: #8395a7; }\n\n.prop-card .project-info {\n    width: 35%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.prop-card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: white; }\n\n.prop-card .delete {\n    width: 30%;\n    display: -webkit-box;\n    display: flex; }\n\n.prop-card .delete .deleteIcon {\n      font-size: 30px;\n      margin: 0 auto;\n      margin-top: 50%;\n      color: #eb4d4b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2NsaWVudC1wcm9qZWN0cy9jbGllbnQtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQVBqQjtJQVNRLFVBQVU7SUFDVixpQkFBaUIsRUFBQTs7QUFWekI7TUFZWSxjQUFhLEVBQUE7O0FBWnpCO01BZVksY0FBYyxFQUFBOztBQWYxQjtJQTRCVSxVQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw4QkFBOEIsRUFBQTs7QUEvQnhDO01BdUJjLGVBQWU7TUFDZixlQUFlO01BQ2YsWUFBWSxFQUFBOztBQXpCMUI7SUFvQ1EsVUFBVTtJQUNWLG9CQUFhO0lBQWIsYUFBYSxFQUFBOztBQXJDckI7TUF1Q1ksZUFBZTtNQUNmLGNBQWM7TUFDZCxlQUFlO01BRWYsY0FBYSxFQUFBOztBQU12QjtFQUNFLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQVBmO0lBU00sVUFBVTtJQUNWLGlCQUFpQixFQUFBOztBQVZ2QjtNQVlVLGNBQWEsRUFBQTs7QUFadkI7TUFlVSxjQUFjLEVBQUE7O0FBZnhCO0lBNEJRLFVBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QixFQUFBOztBQS9CdEM7TUF1QlksZUFBZTtNQUNmLGVBQWU7TUFDZixZQUFZLEVBQUE7O0FBekJ4QjtJQW9DTSxVQUFVO0lBQ1Ysb0JBQWE7SUFBYixhQUFhLEVBQUE7O0FBckNuQjtNQXVDVSxlQUFlO01BQ2YsY0FBYztNQUNkLGVBQWU7TUFFZixjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NsaWVudC1wcm9qZWN0cy9jbGllbnQtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cblxuLnRpdGxle1xuICAgIGNvbG9yOiM0NjIzNzM7XG59XG4ubm8tcHJvamVjdHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogIzQ2MjM3Mztcbn1cblxuaW9uLWZhYi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDYyMzczO1xuXG59XG4ubGlzdC1oZWFkZXJ7XG4gICAgY29sb3I6ICM0NjIzNzM7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG4uY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDoxMyU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBjb2xvcjojNDYyMzczO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjogIzgzOTVhNztcbiAgICAgICAgfVxuICAgICAgICAgICAgIFxuIFxuXG4gICAgICB9XG4gICAgICAucHJvamVjdC1pbmZve1xuICAgICAgICAgICAgLmljb257XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2lkdGg6MjUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuXG5cbiAgICAgIH1cbiAgICAgIC5kZWxldGV7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5kZWxldGVJY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yOiNlYjRkNGI7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgXG4gIH1cbiAgLnByb3AtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDoxMyU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBjb2xvcjojNDYyMzczO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjogIzgzOTVhNztcbiAgICAgICAgfVxuICAgICAgICAgICAgIFxuIFxuXG4gICAgICB9XG4gICAgICAucHJvamVjdC1pbmZve1xuICAgICAgICAgICAgLmljb257XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2lkdGg6MzUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuXG5cbiAgICAgIH1cbiAgICAgIC5kZWxldGV7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5kZWxldGVJY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yOiNlYjRkNGI7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgXG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/client-projects/client-projects.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/client-projects/client-projects.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProjectsComponent", function() { return ClientProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Models_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/Project */ "./src/app/Models/Project.ts");








var ClientProjectsComponent = /** @class */ (function () {
    function ClientProjectsComponent(route, service, alertConroller, toast) {
        this.route = route;
        this.service = service;
        this.alertConroller = alertConroller;
        this.toast = toast;
        this.projects = [];
        this.isShow = true;
    }
    ClientProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = [];
        this.propositions = [];
        this.isShow = true;
        var value = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
        var p = new _Models_Project__WEBPACK_IMPORTED_MODULE_6__["Project"]();
        this.service.AsyncPropositions().subscribe(function (data) {
            _this.propositions = [];
            data.map(function (d) {
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['client'] == value.uid) {
                    p = obj;
                    p.id = d.payload.doc.id;
                    _this.propositions.push(p);
                }
            });
        });
        this.service.AsyncProjects().subscribe(function (data) {
            data.forEach(function (d) {
                var value = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['client'] == value.uid) {
                    var p = {
                        "name": obj.name,
                        "description": obj.description,
                        "manager": obj.manager,
                        "client": obj.client,
                        "progress": obj.progress,
                        "type": obj.type,
                        "id": d.payload.doc.id
                    };
                    _this.projects.push(p);
                }
            });
        });
    };
    ClientProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projects = [];
        this.service.getClientProjects().then(function (res) {
            res.forEach(function (element) {
                _this.projects.push(element);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ClientProjectsComponent.prototype.color = function (type) {
        if (type == "web") {
            return "#462373";
        }
        if (type == "mobile") {
            return "#a55eea";
        }
        if (type == "data") {
            return "#8e44ad";
        }
    };
    ClientProjectsComponent.prototype.deleteAlert = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertConroller.create({
                            header: 'Confirm',
                            message: "Are you sure you want to delete this project?",
                            buttons: [
                                { text: 'Cancel' },
                                { text: 'Delete',
                                    handler: function () {
                                        _this.delete(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientProjectsComponent.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getProjects();
            event.target.complete();
        }, 2000);
    };
    ClientProjectsComponent.prototype.ionPull = function (event) {
        //Emitted while the user is pulling down the content and exposing the refresher.
        console.log('ionPull Event Triggered!');
    };
    ClientProjectsComponent.prototype.ionStart = function (event) {
        //Emitted when the user begins to start pulling down.
        console.log('ionStart Event Triggered!');
    };
    ClientProjectsComponent.prototype.open = function (value) {
        var url = '/project-details/' + value;
        this.route.navigate([url]);
    };
    ClientProjectsComponent.prototype.active = function () {
        console.log("ok");
        this.isShow = false;
    };
    ClientProjectsComponent.prototype.released = function () {
        this.isShow = true;
    };
    ClientProjectsComponent.prototype.delete = function (id) {
        var toast;
        this.presentToast("deleted successuly").then(function (res) {
            toast = res;
        });
        this.service.deletePropostion(id).then(function (res) {
            console.log(res);
            toast.present();
        });
    };
    ClientProjectsComponent.prototype.icon = function (type) {
        if (type == "web") {
            return "md-desktop";
        }
        if (type == "mobile") {
            return "md-phone-portrait";
        }
        if (type == "data") {
            return "md-analytics";
        }
    };
    ClientProjectsComponent.prototype.openProp = function (id) {
        var url = "/proposition-details/" + id;
        this.route.navigate([url]);
    };
    ClientProjectsComponent.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/, toast];
                }
            });
        });
    };
    ClientProjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    ClientProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-projects',
            template: __webpack_require__(/*! raw-loader!./client-projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/client-projects/client-projects.component.html"),
            styles: [__webpack_require__(/*! ./client-projects.component.scss */ "./src/app/Components/client-projects/client-projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ClientProjectsComponent);
    return ClientProjectsComponent;
}());



/***/ }),

/***/ "./src/app/Components/developer-hcontent/developer-hcontent.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/developer-hcontent/developer-hcontent.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  color: #462373; }\n\n.stats {\n  color: #462373;\n  font-size: 18px; }\n\n.projects {\n  color: #462373;\n  font-size: 15px; }\n\nion-card, .card-ios, .card-md {\n  border: 0 !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n  position: relative; }\n\n.welcome-card {\n  margin: 0 auto; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 75px;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.card .container {\n    width: 75%;\n    padding-left: 5px; }\n\n.card .container h5 {\n      color: #462373; }\n\n.card .container p {\n      color: #8395a7; }\n\n.card .project-info {\n    width: 25%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: white; }\n\n.no-project {\n  padding-left: 5%;\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  height: 7%;\n  width: 90%; }\n\n.no-project ion-label {\n    color: #462373;\n    font-size: 15px;\n    text-align: center; }\n\n.btn {\n  color: #462373;\n  font-size: 30px;\n  padding-right: 10px; }\n\n.hello-card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  height: 13%;\n  width: 90%;\n  background-color: #462373; }\n\n.hello-card h3 {\n    font-weight: bold;\n    margin: 0 auto;\n    margin-left: 18px;\n    font-size: 35px;\n    color: white; }\n\n.hello-card ion-list-header {\n    color: white;\n    font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2RldmVsb3Blci1oY29udGVudC9kZXZlbG9wZXItaGNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUluQjtFQUNPLGNBQWE7RUFFaEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0UsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBUGY7SUFTTSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7O0FBVnZCO01BWVUsY0FBYSxFQUFBOztBQVp2QjtNQWVVLGNBQWMsRUFBQTs7QUFmeEI7SUE0QlEsVUFBUztJQUNULGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsOEJBQThCLEVBQUE7O0FBL0J0QztNQXVCWSxlQUFlO01BQ2YsZUFBZTtNQUNmLFlBQVksRUFBQTs7QUFXeEI7RUFDSSxnQkFBZTtFQUNkLDZDQUE2QztFQUM1QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBUztFQUNULFVBQVUsRUFBQTs7QUFSaEI7SUFVTSxjQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQixFQUFBOztBQUd4QjtFQUVFLGNBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3RCO0VBQ0csNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQVI1QjtJQVdPLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBZm5CO0lBa0JPLFlBQVc7SUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2RldmVsb3Blci1oY29udGVudC9kZXZlbG9wZXItaGNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cblxuLnRpdGxle1xuICAgIGNvbG9yOiM0NjIzNzM7XG59XG4uc3RhdHN7XG4gICAgY29sb3I6IzQ2MjM3MztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICBcblxufVxuLnByb2plY3Rze1xuICAgICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgXG4gICAgZm9udC1zaXplOiAxNXB4Oztcbn1cbmlvbi1jYXJkLCAuY2FyZC1pb3MsIC5jYXJkLW1kIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC53ZWxjb21lLWNhcmR7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDo3NXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIGg1e1xuICAgICAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6ICM4Mzk1YTc7XG4gICAgICAgIH1cbiAgICAgICAgICAgICBcbiBcblxuICAgICAgfVxuICAgICAgLnByb2plY3QtaW5mb3tcbiAgICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpZHRoOjI1JTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcblxuXG4gICAgICB9XG4gIH1cbiAgLm5vLXByb2plY3R7XG4gICAgICBwYWRkaW5nLWxlZnQ6NSU7XG4gICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6NyU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgIGlvbi1sYWJlbHtcbiAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIH1cbiAgfVxuICAuYnRue1xuICAgXG4gICAgY29sb3I6IzQ2MjM3MztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgXG4gfVxuIC5oZWxsby1jYXJke1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDoxMyU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDYyMzczO1xuXG4gICAgaDN7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/developer-hcontent/developer-hcontent.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/developer-hcontent/developer-hcontent.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeveloperHcontentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperHcontentComponent", function() { return DeveloperHcontentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_task_dev_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/task-dev.service */ "./src/app/Services/task-dev.service.ts");




var DeveloperHcontentComponent = /** @class */ (function () {
    function DeveloperHcontentComponent(route, service) {
        this.route = route;
        this.service = service;
        this.projects = [];
        this.finished = [];
        this.doing = [];
        this.spent = 0;
        this.projectIds = [];
    }
    DeveloperHcontentComponent.prototype.ngOnInit = function () {
        this.projects = this.service.getProjects();
        console.log(this.projects);
        /*this.service.AsyncProjects().subscribe(
          data => {
            this.projects=[];
            data.forEach(d=>{
              let value = firebase.auth().currentUser;
              var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
              if (obj['client'] == value.uid) {
                var p= {
                  "name": obj.name,
                  "description": obj.description,
                  "manager": obj.manager,
                  "client": obj.client,
                  "progress": obj.progress,
                  "type": obj.type,
                  "id": d.payload.doc.id,
                  "cost":obj.cost
                };
                this.spent=+p.cost;
                this.projects.push(p);
                if(p.progress==100){
                  this.finished.push(p)
                }
                else{
                  this.doing.push(p)
                }
    
              }
            });
            this.createDonutsChart();
    
    
          }
        );
      }
    
    
      getProjects() {
    
        this.projects = [];
        this.service.getClientProjects().then(res => {
    
          res.forEach(element => {
            this.projects.push(element);
    
    
          });
    
        },
          err => {
            console.log(err);
          }
        );
    
      }
      async createDonutsChart() {
       
        this.dognut = new Chart(this.dognutChart.nativeElement, {
          type: 'doughnut',
          data: {
            labels: ['finished projects', 'upgoing projects'],
            datasets: [{
              label: 'Projects',
              data: [this.finished.length,this.doing.length],
              backgroundColor: [ '#a55eea', '#8e44ad'], // array should have same number of elements as number of dataset
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
      color(type){
        if(type=="web"){
          return "#462373";
        }
        if(type=="mobile"){
          return "#a55eea";
        }
        if(type=="data"){
          return "#8e44ad";
        }
       }
      icon(type) {
        if (type == "web") {
          return "md-desktop";
        }
        if (type == "mobile") {
          return "md-phone-portrait";
        }
        if (type == "data") {
          return "md-analytics";
        }
      }
      openproject(id) {
        this.route.navigate(["/project-details"])
    
      }
      ionRefresh(event) {
        setTimeout(() => {
          this.getProjects();
          event.target.complete();
        }, 2000);
      }
      ionPull(event) {
        console.log('ionPull Event Triggered!');
      }
      ionStart(event) {
        console.log('ionStart Event Triggered!');
      }
      openRejected(){
        this.route.navigate(["/rejected-propositions"]);
      }
      openProject(value){
        let url='/project-details/'+value
        this.route.navigate([url])
      }*/
    };
    DeveloperHcontentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Services_task_dev_service__WEBPACK_IMPORTED_MODULE_3__["TaskDevService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dognutChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeveloperHcontentComponent.prototype, "dognutChart", void 0);
    DeveloperHcontentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-developer-hcontent',
            template: __webpack_require__(/*! raw-loader!./developer-hcontent.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/developer-hcontent/developer-hcontent.component.html"),
            styles: [__webpack_require__(/*! ./developer-hcontent.component.scss */ "./src/app/Components/developer-hcontent/developer-hcontent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_task_dev_service__WEBPACK_IMPORTED_MODULE_3__["TaskDevService"]])
    ], DeveloperHcontentComponent);
    return DeveloperHcontentComponent;
}());



/***/ }),

/***/ "./src/app/Components/developer-home-content/developer-home-content.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/developer-home-content/developer-home-content.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon, ion-label {\n  color: #462373; }\n\nion-tab-bar {\n  --color-selected:#ff6b6b !important; }\n\nion-title {\n  color: #462373; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2RldmVsb3Blci1ob21lLWNvbnRlbnQvZGV2ZWxvcGVyLWhvbWUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxtQ0FBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2RldmVsb3Blci1ob21lLWNvbnRlbnQvZGV2ZWxvcGVyLWhvbWUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uLGlvbi1sYWJlbHtcbiAgICBjb2xvcjogIzQ2MjM3Mztcbn1cbmlvbi10YWItYmFye1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6I2ZmNmI2YiAhaW1wb3J0YW50O1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOiM0NjIzNzM7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/developer-home-content/developer-home-content.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/developer-home-content/developer-home-content.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DeveloperHomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperHomeContentComponent", function() { return DeveloperHomeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeveloperHomeContentComponent = /** @class */ (function () {
    function DeveloperHomeContentComponent() {
    }
    DeveloperHomeContentComponent.prototype.ngOnInit = function () { };
    DeveloperHomeContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-developer-home-content',
            template: __webpack_require__(/*! raw-loader!./developer-home-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/developer-home-content/developer-home-content.component.html"),
            styles: [__webpack_require__(/*! ./developer-home-content.component.scss */ "./src/app/Components/developer-home-content/developer-home-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeveloperHomeContentComponent);
    return DeveloperHomeContentComponent;
}());



/***/ }),

/***/ "./src/app/Components/h-content/h-content.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Components/h-content/h-content.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  color: #462373; }\n\n.stats {\n  color: white;\n  font-size: 18px; }\n\n.high-paid {\n  color: #462373;\n  font-size: 18px; }\n\n.income-card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  height: 13%;\n  width: 90%;\n  background-color: #462373; }\n\n.income-card h3 {\n    font-weight: bold;\n    margin: 0 auto;\n    margin-left: 18px;\n    font-size: 35px;\n    color: white; }\n\n.projects {\n  color: #462373;\n  font-size: 15px; }\n\nion-card, .card-ios, .card-md {\n  border: 0 !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n  position: relative; }\n\n.welcome-card {\n  margin: 0 auto; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 13%;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.card .container {\n    width: 50%;\n    padding-left: 5px; }\n\n.card .container h5 {\n      color: #462373; }\n\n.card .container p {\n      color: #8395a7; }\n\n.card .project-info {\n    width: 25%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: white; }\n\n.card .solt-end {\n    width: 25%;\n    text-align: center; }\n\n.card .solt-end ion-badge {\n      margin: 0 auto;\n      margin-top: 50%; }\n\n.no-project {\n  padding-left: 5%;\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  height: 7%;\n  width: 90%; }\n\n.no-project ion-label {\n    color: #462373;\n    font-size: 15px;\n    text-align: center; }\n\n.btn {\n  color: #462373;\n  font-size: 30px;\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2gtY29udGVudC9oLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGNBQWE7RUFDYixlQUFlLEVBQUE7O0FBRW5CO0VBRUksNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQVQ3QjtJQVlRLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYTtFQUNiLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNFLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQVBmO0lBU00sVUFBVTtJQUNWLGlCQUFpQixFQUFBOztBQVZ2QjtNQVlVLGNBQWEsRUFBQTs7QUFadkI7TUFlVSxjQUFjLEVBQUE7O0FBZnhCO0lBNEJRLFVBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QixFQUFBOztBQS9CdEM7TUF1QlksZUFBZTtNQUNmLGVBQWU7TUFDZixZQUFZLEVBQUE7O0FBekJ4QjtJQW9DTSxVQUFTO0lBQ1Qsa0JBQWtCLEVBQUE7O0FBckN4QjtNQXVDVSxjQUFhO01BQ2IsZUFBZSxFQUFBOztBQUl6QjtFQUNJLGdCQUFlO0VBQ2YsNkNBQTZDO0VBQzNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFTO0VBQ1QsVUFBVSxFQUFBOztBQVJoQjtJQVdNLGNBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBRzFCO0VBRUcsY0FBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaC1jb250ZW50L2gtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xufVxuXG4udGl0bGV7XG4gICAgY29sb3I6IzQ2MjM3Mztcbn1cbi5zdGF0c3tcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uaGlnaC1wYWlke1xuICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmluY29tZS1jYXJke1xuXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OjEzJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjIzNzM7XG5cbiAgICBoM3tcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLnByb2plY3Rze1xuICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgZm9udC1zaXplOiAxNXB4Oztcbn1cbmlvbi1jYXJkLCAuY2FyZC1pb3MsIC5jYXJkLW1kIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC53ZWxjb21lLWNhcmR7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDoxMyU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBjb2xvcjojNDYyMzczO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjogIzgzOTVhNztcbiAgICAgICAgfVxuICAgICAgICAgICAgIFxuIFxuXG4gICAgICB9XG4gICAgICAucHJvamVjdC1pbmZve1xuICAgICAgICAgICAgLmljb257XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2lkdGg6MjUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuXG5cbiAgICAgIH1cbiAgICAgIC5zb2x0LWVuZHtcbiAgICAgICAgd2lkdGg6MjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAubm8tcHJvamVjdHtcbiAgICAgIHBhZGRpbmctbGVmdDo1JTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgaGVpZ2h0OjclO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIFxuICAgICBpb24tbGFiZWx7XG4gICAgICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICB9XG4gIH1cbi5idG57XG4gICBcbiAgIGNvbG9yOiM0NjIzNzM7XG4gICBmb250LXNpemU6IDMwcHg7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/h-content/h-content.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/h-content/h-content.component.ts ***!
  \*************************************************************/
/*! exports provided: HContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HContentComponent", function() { return HContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Models_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/Project */ "./src/app/Models/Project.ts");







var HContentComponent = /** @class */ (function () {
    function HContentComponent(route, service) {
        this.route = route;
        this.service = service;
        this.projects = [];
        this.cost = 0;
        this.labels = [];
        this.costs = [];
        this.highest_pro = [];
    }
    HContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.AsyncProjects().subscribe(function (data) {
            _this.cost = 0;
            _this.projects = [];
            _this.highest_pro = [];
            _this.costs = [];
            _this.labels = [];
            var cache = new _Models_Project__WEBPACK_IMPORTED_MODULE_6__["Project"]();
            var p = new _Models_Project__WEBPACK_IMPORTED_MODULE_6__["Project"]();
            data.forEach(function (d) {
                var value = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['manager'] == value.uid) {
                    p = obj;
                    p.id = d.payload.doc.id;
                    if (cache) {
                        if (cache.cost < p.cost) {
                            _this.highest_pro.push(p);
                        }
                        if (cache.cost > p.cost) {
                            _this.highest_pro.push(cache);
                        }
                    }
                    _this.cost = _this.cost + p.cost;
                    _this.projects.push(p);
                    _this.labels.push(p.name);
                    _this.costs.push(p.cost);
                    _this.createLine();
                    cache = p;
                }
            });
        });
    };
    HContentComponent.prototype.getProjects = function () {
        var _this = this;
        this.projects = [];
        this.service.getProjects().then(function (res) {
            res.forEach(function (element) {
                _this.projects.push(element);
            });
        }, function (err) {
            console.log(err);
        });
    };
    HContentComponent.prototype.createLine = function () {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: [{
                        label: 'Projects with their costs',
                        data: this.costs,
                        borderColor: '#a55eea',
                        backgroundColor: '#d6b0ff',
                        borderWidth: 2
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    HContentComponent.prototype.color = function (type) {
        if (type == "web") {
            return "#462373";
        }
        if (type == "mobile") {
            return "#a55eea";
        }
        if (type == "data") {
            return "#8e44ad";
        }
    };
    HContentComponent.prototype.icon = function (type) {
        if (type == "web") {
            return "md-desktop";
        }
        if (type == "mobile") {
            return "md-phone-portrait";
        }
        if (type == "data") {
            return "md-analytics";
        }
    };
    HContentComponent.prototype.openproject = function (id) {
        var url = "/task/" + id;
        this.route.navigate([url]);
    };
    HContentComponent.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getProjects();
            event.target.complete();
        }, 2000);
    };
    HContentComponent.prototype.ionPull = function (event) {
        console.log('ionPull Event Triggered!');
    };
    HContentComponent.prototype.ionStart = function (event) {
        console.log('ionStart Event Triggered!');
    };
    HContentComponent.prototype.openProp = function () {
        this.route.navigate(["/client-propositions"]);
    };
    HContentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HContentComponent.prototype, "lineChart", void 0);
    HContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-h-content',
            template: __webpack_require__(/*! raw-loader!./h-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/h-content/h-content.component.html"),
            styles: [__webpack_require__(/*! ./h-content.component.scss */ "./src/app/Components/h-content/h-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
    ], HContentComponent);
    return HContentComponent;
}());



/***/ }),

/***/ "./src/app/Components/home-content/home-content.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Components/home-content/home-content.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon, ion-label {\n  color: #462373; }\n\nion-tab-bar {\n  --color-selected:#ff6b6b !important; }\n\nion-title {\n  color: #462373; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2hvbWUtY29udGVudC9ob21lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksbUNBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ob21lLWNvbnRlbnQvaG9tZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24saW9uLWxhYmVse1xuICAgIGNvbG9yOiAjNDYyMzczO1xufVxuaW9uLXRhYi1iYXJ7XG4gICAgLS1jb2xvci1zZWxlY3RlZDojZmY2YjZiICFpbXBvcnRhbnQ7XG59XG5pb24tdGl0bGV7XG4gICAgY29sb3I6IzQ2MjM3Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/home-content/home-content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/home-content/home-content.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent() {
    }
    HomeContentComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HomeContentComponent.prototype, "data", void 0);
    HomeContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-content',
            template: __webpack_require__(/*! raw-loader!./home-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/home-content/home-content.component.html"),
            styles: [__webpack_require__(/*! ./home-content.component.scss */ "./src/app/Components/home-content/home-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeContentComponent);
    return HomeContentComponent;
}());



/***/ }),

/***/ "./src/app/Components/projects/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/projects/projects.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  color: #462373; }\n\n.no-project {\n  font-size: medium;\n  color: #462373; }\n\nion-fab-button {\n  --background: #462373; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 13%;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.card .container {\n    width: 75%;\n    padding-left: 5px; }\n\n.card .container h5 {\n      color: #462373; }\n\n.card .container p {\n      color: #8395a7; }\n\n.card .project-info {\n    width: 25%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: white; }\n\n.card .delete {\n    width: 30%;\n    display: -webkit-box;\n    display: flex; }\n\n.card .delete .deleteIcon {\n      font-size: 30px;\n      margin: 0 auto;\n      margin-top: 50%;\n      color: #eb4d4b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWEsRUFBQTs7QUFHakI7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxxQkFBYSxFQUFBOztBQUdqQjtFQUNJLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQVBqQjtJQVNRLFVBQVU7SUFDVixpQkFBaUIsRUFBQTs7QUFWekI7TUFZWSxjQUFhLEVBQUE7O0FBWnpCO01BZVksY0FBYyxFQUFBOztBQWYxQjtJQTRCVSxVQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw4QkFBOEIsRUFBQTs7QUEvQnhDO01BdUJjLGVBQWU7TUFDZixlQUFlO01BQ2YsWUFBWSxFQUFBOztBQXpCMUI7SUFvQ1UsVUFBVTtJQUNWLG9CQUFhO0lBQWIsYUFBYSxFQUFBOztBQXJDdkI7TUF1Q2MsZUFBZTtNQUNmLGNBQWM7TUFDZCxlQUFlO01BRWYsY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xufVxuXG4udGl0bGV7XG4gICAgY29sb3I6IzQ2MjM3Mztcbn1cbi5uby1wcm9qZWN0e1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiAjNDYyMzczO1xufVxuXG5pb24tZmFiLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICM0NjIzNzM7XG5cbn1cbi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OjEzJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBoNXtcbiAgICAgICAgICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjODM5NWE3O1xuICAgICAgICB9XG4gICAgICAgICAgICAgXG4gXG5cbiAgICAgIH1cbiAgICAgIC5wcm9qZWN0LWluZm97XG4gICAgICAgICAgICAuaWNvbntcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG5cblxuICAgICAgfVxuICAgICAgLmRlbGV0ZXtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLmRlbGV0ZUljb257XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbG9yOiNlYjRkNGI7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Models_Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Models/Project */ "./src/app/Models/Project.ts");









var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(route, service, afs, toast, alertController) {
        this.route = route;
        this.service = service;
        this.afs = afs;
        this.toast = toast;
        this.alertController = alertController;
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isShow = true;
        var p = new _Models_Project__WEBPACK_IMPORTED_MODULE_7__["Project"]();
        this.service.AsyncProjects().subscribe(function (data) {
            _this.projects = [];
            data.forEach(function (d) {
                var value = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['manager'] == value.uid) {
                    p = obj;
                    p.id = d.payload.doc.id;
                    _this.projects.push(p);
                }
            });
        });
    };
    ProjectsComponent.prototype.getProjectsOnce = function () {
        var _this = this;
        this.projects = [];
        this.service.getProjects().then(function (res) {
            console.log(res);
            res.forEach(function (element) {
                _this.projects.push(element);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProjectsComponent.prototype.color = function (type) {
        if (type == "web") {
            return "#462373";
        }
        if (type == "mobile") {
            return "#a55eea";
        }
        if (type == "data") {
            return "#8e44ad";
        }
    };
    ProjectsComponent.prototype.active = function () {
        console.log("ok");
        this.isShow = false;
    };
    ProjectsComponent.prototype.released = function () {
        this.isShow = true;
    };
    ProjectsComponent.prototype.delete = function (id) {
        var toast;
        this.presentToast("deleted successfuly").then(function (res) {
            toast = res;
        });
        this.service.deleteProject(id).then(function (res) {
            console.log(res);
            toast.present();
        });
    };
    ProjectsComponent.prototype.deleteAlert = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm',
                            message: "Are you sure you want to delete this project?",
                            buttons: [
                                { text: 'Cancel' },
                                { text: 'Delete',
                                    handler: function () {
                                        _this.delete(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectsComponent.prototype.openTask = function (id) {
        var url = "/task/" + id;
        this.route.navigate([url]);
    };
    ProjectsComponent.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getProjectsOnce();
            event.target.complete();
        }, 2000);
    };
    ProjectsComponent.prototype.ionPull = function (event) {
    };
    ProjectsComponent.prototype.ionStart = function (event) {
    };
    ProjectsComponent.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/, toast];
                }
            });
        });
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/Components/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/Screens/homes/homes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Screens/homes/homes.module.ts ***!
  \***********************************************/
/*! exports provided: HomesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomesPageModule", function() { return HomesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homes.page */ "./src/app/Screens/homes/homes.page.ts");
/* harmony import */ var _Components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/home-content/home-content.component */ "./src/app/Components/home-content/home-content.component.ts");
/* harmony import */ var _Components_h_content_h_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/h-content/h-content.component */ "./src/app/Components/h-content/h-content.component.ts");
/* harmony import */ var _Components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/projects/projects.component */ "./src/app/Components/projects/projects.component.ts");
/* harmony import */ var _Components_client_hcontent_client_hcontent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Components/client-hcontent/client-hcontent.component */ "./src/app/Components/client-hcontent/client-hcontent.component.ts");
/* harmony import */ var _Components_client_projects_client_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/client-projects/client-projects.component */ "./src/app/Components/client-projects/client-projects.component.ts");
/* harmony import */ var _Components_client_home_content_client_home_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Components/client-home-content/client-home-content.component */ "./src/app/Components/client-home-content/client-home-content.component.ts");
/* harmony import */ var _Components_developer_hcontent_developer_hcontent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Components/developer-hcontent/developer-hcontent.component */ "./src/app/Components/developer-hcontent/developer-hcontent.component.ts");
/* harmony import */ var _Components_developer_home_content_developer_home_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Components/developer-home-content/developer-home-content.component */ "./src/app/Components/developer-home-content/developer-home-content.component.ts");
/* harmony import */ var ionic_long_press__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-long-press */ "./node_modules/ionic-long-press/fesm5/ionic-long-press.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");

















var routes = [
    {
        path: '',
        component: _homes_page__WEBPACK_IMPORTED_MODULE_6__["HomesPage"],
        children: [
            {
                path: 'home',
                component: _Components_h_content_h_content_component__WEBPACK_IMPORTED_MODULE_8__["HContentComponent"],
            },
            {
                path: 'projects',
                component: _Components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
            },
            /* {
               path: '',
               redirectTo: '/homes/home',
               pathMatch: 'full'
             },*/
            {
                path: 'clientProjects',
                component: _Components_client_projects_client_projects_component__WEBPACK_IMPORTED_MODULE_11__["ClientProjectsComponent"]
            },
            {
                path: 'clientHome',
                component: _Components_client_hcontent_client_hcontent_component__WEBPACK_IMPORTED_MODULE_10__["ClientHContentComponent"]
            },
            {
                path: 'developerHome',
                component: _Components_developer_hcontent_developer_hcontent_component__WEBPACK_IMPORTED_MODULE_13__["DeveloperHcontentComponent"]
            },
        ],
    },
];
var HomesPageModule = /** @class */ (function () {
    function HomesPageModule() {
    }
    HomesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic_long_press__WEBPACK_IMPORTED_MODULE_15__["LongPressModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 50,
                }),
            ],
            declarations: [_homes_page__WEBPACK_IMPORTED_MODULE_6__["HomesPage"],
                _Components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__["HomeContentComponent"],
                _Components_h_content_h_content_component__WEBPACK_IMPORTED_MODULE_8__["HContentComponent"],
                _Components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _Components_client_home_content_client_home_content_component__WEBPACK_IMPORTED_MODULE_12__["ClientHomeContentComponent"],
                _Components_client_hcontent_client_hcontent_component__WEBPACK_IMPORTED_MODULE_10__["ClientHContentComponent"],
                _Components_client_projects_client_projects_component__WEBPACK_IMPORTED_MODULE_11__["ClientProjectsComponent"],
                _Components_developer_hcontent_developer_hcontent_component__WEBPACK_IMPORTED_MODULE_13__["DeveloperHcontentComponent"],
                _Components_developer_home_content_developer_home_content_component__WEBPACK_IMPORTED_MODULE_14__["DeveloperHomeContentComponent"]
            ],
            entryComponents: []
        })
    ], HomesPageModule);
    return HomesPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/homes/homes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/Screens/homes/homes.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvaG9tZXMvaG9tZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Screens/homes/homes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/Screens/homes/homes.page.ts ***!
  \*********************************************/
/*! exports provided: HomesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomesPage", function() { return HomesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomesPage = /** @class */ (function () {
    function HomesPage(menu, loadingController, router) {
        this.menu = menu;
        this.loadingController = loadingController;
        this.router = router;
    }
    HomesPage.prototype.ngOnInit = function () {
        this.his = history.state['data'];
        this.data = this.his['re'];
        /* if(this.data['role']=='client'){
           this.router.navigate(["/homes/clientHome"])
         }
         if(this.data['role']=='manager'){
           this.router.navigate(["/homes/home"])
         }*/
        this.presentLoadingWithOptions(this.data['role']);
    };
    HomesPage.prototype.presentLoadingWithOptions = function (role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 3000,
                            message: 'Wait please...',
                            translucent: true,
                            showBackdrop: true,
                        }).then(function (res) {
                            res.present();
                            res.onDidDismiss().then(function (dis) {
                                if (role == 'client') {
                                    _this.router.navigate(["/homes/clientHome"]);
                                    res.dismiss();
                                }
                                if (role == 'manager') {
                                    _this.router.navigate(["/homes/home"]);
                                    res.dismiss();
                                }
                                if (role == 'developer') {
                                    _this.router.navigate(["/homes/developerHome"]);
                                    res.dismiss();
                                }
                            });
                        })];
                    case 1:
                        loading = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homes',
            template: __webpack_require__(/*! raw-loader!./homes.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/homes/homes.page.html"),
            styles: [__webpack_require__(/*! ./homes.page.scss */ "./src/app/Screens/homes/homes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomesPage);
    return HomesPage;
}());



/***/ }),

/***/ "./src/app/Services/task-dev.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/task-dev.service.ts ***!
  \**********************************************/
/*! exports provided: TaskDevService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDevService", function() { return TaskDevService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var TaskDevService = /** @class */ (function () {
    function TaskDevService(afs) {
        this.afs = afs;
        this.ids = [];
    }
    TaskDevService.prototype.getProjects = function () {
        var _this = this;
        var projects_id = [];
        var projects = [];
        var uid = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.afs.collection("projects").get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.afs.collection("projects").doc(doc.id).collection("tasks").get().forEach(function (res) {
                    res.docs.forEach(function (d) {
                        var obj = JSON.parse(JSON.stringify(d.data()));
                        if (obj['person'] == uid) {
                            projects_id.push(doc.id);
                            _this.afs.collection("projects").doc(doc.id).get().forEach(function (e) {
                                var obj = JSON.parse(JSON.stringify(e.data()));
                                projects.push(obj);
                            });
                        }
                    });
                });
            });
        });
        return projects;
    };
    TaskDevService.prototype.getTasks = function (id) {
        var projects = [];
        var uid = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.afs.collection("projects").doc(id).collection("tasks").get().forEach(function (res) {
            res.docs.forEach(function (d) {
                var obj = JSON.parse(JSON.stringify(d.data()));
                if (obj['person'] == uid) {
                    projects.push(obj);
                    console.log(obj);
                }
            });
        });
        return projects;
    };
    TaskDevService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    TaskDevService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], TaskDevService);
    return TaskDevService;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-homes-homes-module-es5.js.map