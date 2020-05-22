"use strict";

exports.__esModule = true;

exports.default = function (value) {
  return value ? (value + "").replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : "";
};