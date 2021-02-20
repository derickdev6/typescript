define(["require", "exports", "./ImageType", "./Enums"], function (require, exports, ImageType_1, Enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Picture = void 0;
    class Picture extends ImageType_1.ImageType {
        constructor(id, title, orientation) {
            super(id, title);
            this.orientation = Enums_1.PhotoOrientation.Default;
            if (orientation)
                this.orientation = orientation;
        }
        get Orientation() { return this.orientation; }
        set Orientation(value) { this.orientation = value; }
        toString() {
            return `Picture - Title:${this.title} - Orientation:${this.orientation} - id:${this.id}`;
        }
    }
    exports.Picture = Picture;
    Picture.Orientations = Enums_1.PhotoOrientation;
});
