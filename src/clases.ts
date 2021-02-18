enum PhotoOrientation {
    Landscape,
    Portrait,
    Sqare,
    Panorama,
    Default
}

class Picture {
    //Properties
    #id: number;
    #title: string = 'Default';
    #orientation: PhotoOrientation = PhotoOrientation.Default;

    //Constructor
    constructor(id: number, title?: string, orientation?: PhotoOrientation) {

        this.#id = id;
        if (title) this.#title = title;
        if (orientation) this.#orientation = orientation;

    }
    //Getters
    get Id() { return this.#id };
    get Title() { return this.#title };
    get Orientation() { return this.#orientation }
    //Setters
    set Title(value: string) {
        this.#title = value
    }
    set Orientation(value: PhotoOrientation) {
        this.#orientation = value
    }

    //Methods
    toString() {
        return `Picture - Title:${this.#title} - Orientation:${this.#orientation} - id:${this.#id}`
    }

}

class Album {
    #id: number;
    #pictures: Picture[] = [];
    #title: string = 'Default';
    #description: string = 'Default';

    constructor(id: number, pictures: Picture[], title?: string, description?: string) {

        this.#id = id;
        this.#pictures = pictures;
        if (title) this.#title = title;
        if (description) this.#description = description;

    }
    //Getters
    get Id() { return this.#id; }
    get Title() { return this.#title }
    get Description() { return this.#description }
    get Pictures() { return this.#pictures }

    //Setters
    set Id(value: number) { this.#id = value }
    set Title(value: string) { this.#title = value }
    set Description(value: string) { this.#description = value }
    set Pictures(value: Picture[]) { this.#pictures = value }

    toString() {
        return `Album - Title:${this.#title} - Description:${this.#description} - id:${this.#id}`
    }
    showPictures() {
        this.#pictures.forEach(element => {
            console.log(element.toString());
            
        });
    }
    setDescription(newdescription: string) {
        this.#description = newdescription;
    }
    addPicture(newpic: Picture) {
        this.#pictures.push(newpic);
    }
}

// Accessing members

const myalbum = new Album(1, []);
const pic1 = new Picture(1);
const pic2 = new Picture(1, 'Picture number 2');
const pic3 = new Picture(1, undefined, PhotoOrientation.Panorama);
const pic4 = new Picture(1, 'Picture number 4', PhotoOrientation.Portrait);
myalbum.addPicture(pic1);
myalbum.addPicture(pic2);
myalbum.addPicture(pic3);
myalbum.addPicture(pic4);
myalbum.Description = 'Hey this is my album';
myalbum.Title = 'First almbum';
console.log(myalbum.toString());
myalbum.showPictures();