enum PhotoOrientation {
    Landscape,
    Portrait,
    Sqare,
    Panorama,
    Default
}

class Picture {
    //Properties
    private id: number;
    private title?: string = 'Default';
    private orientation?: PhotoOrientation = PhotoOrientation.Default;

    //Constructor
    constructor(id: number, title?: string, orientation?: PhotoOrientation) {

        this.id = id;
        this.title = title;
        this.orientation = orientation;

    }

    //Methods
    toString() {
        return `Picture - Title:${this.title} - Orientation:${this.orientation} - id:${this.id}`
    }
}

class Album {
    #id: number;
    #title?: string = 'Default';
    #pictures: Picture[] = [];
    #description?: string = 'Default';

    constructor(id: number, title: string, pictures: Picture[], description?: string) {

        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#pictures = pictures;

    }

    toString() {
        return `Album - Title:${this.#title} - Description:${this.#description} - id:${this.#id}`
    }
    showPictures() {
        this.#pictures.forEach(element => {
            console.log(element.toString);
        });
    }
    setDescription(newdescription:string){
        this.#description = newdescription;
    }
    addPicture(newpic:Picture){
        this.#pictures.push(newpic);
    }
}

// Accessing public members

const myalbum = new Album(1, 'Personal Album', []);
myalbum.setDescription('Hey this is my new album');

const mypic1 = new Picture(1);
const mypic2 = new Picture(2, 'Pic2');
const mypic3 = new Picture(3, undefined, PhotoOrientation.Panorama);
const mypic4 = new Picture(4, 'Pic4', PhotoOrientation.Landscape);
myalbum.addPicture(mypic1);
myalbum.addPicture(mypic2);
myalbum.addPicture(mypic3);
myalbum.addPicture(mypic4);

console.log(myalbum);
