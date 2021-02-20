define(["require", "exports", "./ImageType"], function (require, exports, ImageType_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Album = void 0;
    class Album extends ImageType_1.ImageType {
        constructor(id, pictures, title, description) {
            super(id, title);
            this.description = 'Default';
            this.pictures = [];
            if (pictures)
                this.pictures = pictures;
            if (description)
                this.description = description;
        }
        get Description() { return this.description; }
        get Pictures() { return this.pictures; }
        set Description(value) { this.description = value; }
        set Pictures(value) { this.pictures = value; }
        toString() {
            return `Album - Title:${this.title} - Description:${this.description} - id:${this.id} \n\nThis are my pics:` + this.showPictures();
        }
        showPictures() {
            let list = '';
            this.pictures.forEach(element => {
                list += ('\n' + element.toString());
            });
            return list;
        }
        addPicture(newpic) {
            this.pictures.push(newpic);
        }
    }
    exports.Album = Album;
});
