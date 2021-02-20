import { User } from "./User";
import { Album } from "./Album";
import { Picture } from "./Picture";

const user = new User(1, 'Derick', false);
const myalbum = new Album(1);
const mypic1 = new Picture(1, 'Firstpic');
const mypic2 = new Picture(2, undefined, Picture.Orientations.Portrait);
const mypic3 = new Picture(3, 'Thirdpic', Picture.Orientations.Landscape);

myalbum.addPicture(mypic1);
myalbum.addPicture(mypic2);
myalbum.addPicture(mypic3);

user.addAlbum(myalbum);
user.FirstName = 'John';
console.log(user);
// console.log(user.Albums[0]);
user.removeAlbum(myalbum);

console.log(user);
