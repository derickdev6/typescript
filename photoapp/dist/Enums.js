define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PhotoOrientation = void 0;
    var PhotoOrientation;
    (function (PhotoOrientation) {
        PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
        PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
        PhotoOrientation[PhotoOrientation["Sqare"] = 2] = "Sqare";
        PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
        PhotoOrientation[PhotoOrientation["Default"] = 4] = "Default";
    })(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
});
