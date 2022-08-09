"use strict";
exports.__esModule = true;
exports.typeCheck = void 0;
function typeCheck(val) {
    return (Object.prototype.toString.call(val).replace(/[\[\]]/gi, '').split(' ')[1]);
}
exports.typeCheck = typeCheck;
