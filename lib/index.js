"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = exports.types = undefined;

var _createReducer = require("create-reducer");

var _ramda = require("ramda");

var types = exports.types = {
    Begin: "transient/Begin",
    End: "transient/End"
};

var actions = exports.actions = {
    begin: function begin() {
        return { type: types.Begin };
    },
    end: function end() {
        return { type: types.End };
    }
};

var active = (0, _ramda.set)((0, _ramda.lensProp)("active"));

exports.default = (0, _createReducer.createReducer)({ active: false }, [[types.Begin, function () {
    return active(true);
}], [types.End, function () {
    return active(false);
}]]);