"use strict";
exports.__esModule = true;
function calculateArea(shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
exports["default"] = {};
