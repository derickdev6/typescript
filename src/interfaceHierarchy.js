var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portait"] = 1] = "Portait";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = { id: 1, title: 'MyFirstAlbum', description: 'CompilationAlbum', pictures: [] };
var mypic1 = { id: 100, title: 'JustMe', orientation: PhotoOrientation.Portait };
var mypic2 = { id: 101, title: 'JustMi', orientation: PhotoOrientation.Landscape };
var mypic3 = { id: 102, title: 'JustMo', orientation: PhotoOrientation.Portait };
album.pictures.push(mypic1);
album.pictures.push(mypic2);
album.pictures.push(mypic3);
console.log(album.pictures[1].id);
