export enum PhotoOrientation {
    Landscape,
    Portrait,
    Sqare,
    Panorama,
    Default
}

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

    set Ispro(value:boolean) { this.ispro = value}
    set FirstName(value:string) { this.firstName = value}
    set Username(value:string) { this.username = value}

    addAlbum(newalbum:Album) {
        this.albums.push(newalbum)
    }
}

export abstract class ImageType {
    readonly id: number = 0;
    protected title: string = 'Default';

    protected constructor(id: number, title?: string) {
        this.id = id;
        if (title) this.title = title;
    }

    get Id() { return this.id };
    get Title() { return this.title };
    set Title(value: string) { this.title = value }

}
export class Picture extends ImageType {
    static Orientations = PhotoOrientation;
    private orientation: PhotoOrientation = PhotoOrientation.Default;

    constructor(id: number, title?: string, orientation?: PhotoOrientation) {
        super(id, title);
        if (orientation) this.orientation = orientation;
    }

    get Orientation() { return this.orientation }

    set Orientation(value: PhotoOrientation) { this.orientation = value }

    toString() {
        return `Picture - Title:${this.title} - Orientation:${this.orientation} - id:${this.id}`
    }

}

export class Album extends ImageType {
    private description: string = 'Default';
    private pictures: Picture[] = [];

    constructor(id: number, pictures?: Picture[], title?: string, description?: string) {
        super(id, title)
        if (pictures) this.pictures = pictures;
        if (description) this.description = description;
    }

    get Description() { return this.description }
    get Pictures() { return this.pictures }

    set Description(value: string) { this.description = value }
    set Pictures(value: Picture[]) { this.pictures = value }

    toString() {
        return `Album - Title:${this.title} - Description:${this.description} - id:${this.id} \n\nThis are my pics:` + this.showPictures();
    }
    showPictures() {
        let list: string = '';
        this.pictures.forEach(element => {
            list += ('\n' + element.toString());
        });
        return list;
    }

    addPicture(newpic: Picture) {
        this.pictures.push(newpic);
    }
}
