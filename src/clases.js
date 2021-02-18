var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _pictures, _description;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Sqare"] = 2] = "Sqare";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
    PhotoOrientation[PhotoOrientation["Default"] = 4] = "Default";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    //Constructor
    function Picture(id, title, orientation) {
        this.title = 'Default';
        this.orientation = PhotoOrientation.Default;
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Methods
    Picture.prototype.toString = function () {
        return "Picture - Title:" + this.title + " - Orientation:" + this.orientation + " - id:" + this.id;
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title, pictures, description) {
        _id.set(this, void 0);
        _title.set(this, 'Default');
        _pictures.set(this, []);
        _description.set(this, 'Default');
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _description, description);
        __classPrivateFieldSet(this, _pictures, pictures);
    }
    Album.prototype.toString = function () {
        return "Album - Title:" + __classPrivateFieldGet(this, _title) + " - Description:" + __classPrivateFieldGet(this, _description) + " - id:" + __classPrivateFieldGet(this, _id);
    };
    Album.prototype.showPictures = function () {
        __classPrivateFieldGet(this, _pictures).forEach(function (element) {
            console.log(element.toString);
        });
    };
    Album.prototype.setDescription = function (newdescription) {
        __classPrivateFieldSet(this, _description, newdescription);
    };
    Album.prototype.addPicture = function (newpic) {
        __classPrivateFieldGet(this, _pictures).push(newpic);
    };
    return Album;
}());
_id = new WeakMap(), _title = new WeakMap(), _pictures = new WeakMap(), _description = new WeakMap();
// Accessing public members
var myalbum = new Album(1, 'Personal Album', []);
myalbum.setDescription('Hey this is my new album');
var mypic1 = new Picture(1);
var mypic2 = new Picture(2, 'Pic2');
var mypic3 = new Picture(3, undefined, PhotoOrientation.Panorama);
var mypic4 = new Picture(4, 'Pic4', PhotoOrientation.Landscape);
myalbum.addPicture(mypic1);
myalbum.addPicture(mypic2);
myalbum.addPicture(mypic3);
myalbum.addPicture(mypic4);
console.log(myalbum);
