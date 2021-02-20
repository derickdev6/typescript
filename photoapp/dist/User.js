define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.User = void 0;
    class User {
        constructor(id, username, ispro, firstName) {
            this.firstName = 'DefaultName';
            this.albums = [];
            this.id = id;
            this.username = username;
            this.ispro = ispro;
            if (firstName)
                this.firstName = firstName;
        }
        get Id() { return this.id; }
        get Username() { return this.username; }
        get Albums() { return this.albums; }
        get Ispro() { return this.ispro; }
        get FirstName() { return this.firstName; }
        set Ispro(value) { this.ispro = value; }
        set FirstName(value) { this.firstName = value; }
        set Username(value) { this.username = value; }
        addAlbum(newalbum) {
            this.albums.push(newalbum);
        }
        removeAlbum(albumtoremove) {
            const index = this.albums.findIndex(album => album.id === albumtoremove.id);
            let deletedalbum;
            if (index >= 0) {
                deletedalbum = this.albums[index];
                this.albums.splice(index, 1);
            }
            return deletedalbum;
        }
    }
    exports.User = User;
});
