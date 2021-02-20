import { Album } from "./Album";

export class User {
    private id: number;
    private username: string;
    private ispro: boolean;
    private firstName: string = 'DefaultName';
    private albums: Album[] = [];

    constructor(id: number, username: string, ispro: boolean, firstName?: string) {
        this.id = id;
        this.username = username;
        this.ispro = ispro;
        if (firstName) this.firstName = firstName;
    }
    get Id() { return this.id }
    get Username() { return this.username }
    get Albums() { return this.albums }
    get Ispro() { return this.ispro }
    get FirstName() { return this.firstName }

    set Ispro(value: boolean) { this.ispro = value }
    set FirstName(value: string) { this.firstName = value }
    set Username(value: string) { this.username = value }

    addAlbum(newalbum: Album) {
        this.albums.push(newalbum)
    }
    removeAlbum(albumtoremove: Album): Album | undefined {
        const index = this.albums.findIndex(album => album.id === albumtoremove.id);

        let deletedalbum;

        if (index >= 0) {
            deletedalbum = this.albums[index];
            this.albums.splice(index, 1);
        }
        return deletedalbum;
    }
}