enum PhotoOrientation {
    Landscape,
    Portait
}

interface PhotoEntity {
    id: number;
    title: string;
}

interface Album extends PhotoEntity {
    description: string;
    pictures: Picture[];
}
interface Picture extends PhotoEntity {
    orientation: PhotoOrientation;
}

const album: Album = { id: 1, title: 'MyFirstAlbum', description: 'CompilationAlbum', pictures: [] };
let mypic1: Picture = { id: 100, title: 'JustMe', orientation: PhotoOrientation.Portait };
let mypic2: Picture = { id: 101, title: 'JustMi', orientation: PhotoOrientation.Landscape };
let mypic3: Picture = { id: 102, title: 'JustMo', orientation: PhotoOrientation.Portait };

album.pictures.push(mypic1);
album.pictures.push(mypic2);
album.pictures.push(mypic3);

console.log(album.pictures[1].id);