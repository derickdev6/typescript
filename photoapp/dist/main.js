define(["require", "exports", "./User", "./Album", "./Picture"], function (require, exports, User_1, Album_1, Picture_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const user = new User_1.User(1, 'Derick', false);
    const myalbum = new Album_1.Album(1);
    const mypic1 = new Picture_1.Picture(1, 'Firstpic');
    const mypic2 = new Picture_1.Picture(2, undefined, Picture_1.Picture.Orientations.Portrait);
    const mypic3 = new Picture_1.Picture(3, 'Thirdpic', Picture_1.Picture.Orientations.Landscape);
    myalbum.addPicture(mypic1);
    myalbum.addPicture(mypic2);
    myalbum.addPicture(mypic3);
    user.addAlbum(myalbum);
    user.FirstName = 'John';
    console.log(user);
    // console.log(user.Albums[0]);
    user.removeAlbum(myalbum);
    console.log(user);
});
