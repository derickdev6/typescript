enum PhotoOrientation {
    Landscape,
    Portrait,
    Sqare,
    Panorama,
    Default
}

//Superclass
abstract class ImageType {
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

class Picture extends ImageType {
    static Orientations = PhotoOrientation;
    //Properties
    private orientation: PhotoOrientation = PhotoOrientation.Default;

    //Constructor
    constructor(id: number, title?: string, orientation?: PhotoOrientation) {
        //Using superclass constructor
        super(id, title);
        if (orientation) this.orientation = orientation;
    }
    //Getters
    get Orientation() { return this.orientation }
    //Setters
    set Orientation(value: PhotoOrientation) { this.orientation = value }

    //Methods
    toString() {
        return `Picture - Title:${this.title} - Orientation:${this.orientation} - id:${this.id}`
    }

}

class Album extends ImageType {
    private description: string = 'Default';
    private pictures: Picture[] = [];

    constructor(id: number, pictures?: Picture[], title?: string, description?: string) {
        super(id, title)
        if (pictures) this.pictures = pictures;
        if (description) this.description = description;
    }

    //Getters
    get Description() { return this.description }
    get Pictures() { return this.pictures }

    //Setters
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

// Accessing members

const myalbum = new Album(1);
const pic1 = new Picture(1, 'Firstpic');
const pic2 = new Picture(2, undefined, PhotoOrientation.Landscape);
const pic3 = new Picture(3, 'HEYYY', Picture.Orientations.Panorama);
const pic4 = new Picture(4, 'LOLOLOL', Picture.Orientations.Portrait);
pic3.Title = 'HELLOOOOO';
myalbum.addPicture(pic1);
myalbum.addPicture(pic2);
myalbum.addPicture(pic3);
myalbum.addPicture(pic4);

myalbum.Title = 'FIRST album ever';
myalbum.Description = 'this is a description'
console.log(myalbum.toString());
console.log(myalbum);
