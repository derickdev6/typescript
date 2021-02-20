define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageType = void 0;
    class ImageType {
        constructor(id, title) {
            this.id = 0;
            this.title = 'Default';
            this.id = id;
            if (title)
                this.title = title;
        }
        get Id() { return this.id; }
        ;
        get Title() { return this.title; }
        ;
        set Title(value) { this.title = value; }
    }
    exports.ImageType = ImageType;
});
