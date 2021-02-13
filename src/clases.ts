enum PhotoOrientation {
    Landscape,
    Portrait,
    Sqare,
    Panorama,
    Default
}

class Picture {
    //Properties
    id: number;
    title?: string = 'Default';
    orientation?: PhotoOrientation = PhotoOrientation.Default;

    //Constructor
    constructor(id: number, title: string, orientation: PhotoOrientation) {

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
    id: number;
    title?: string = 'Default';
    pictures: Picture[] = [];
    description?: string = 'Default';

    constructor(id: number, title: string, pictures: Picture[], description: string) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.pictures = pictures;

    }

    toString() {
        return `Album - Title:${this.title} - Description:${this.description} - id:${this.id}`
    }
    showPictures() {
        this.pictures.forEach(element => {
            console.log(element.toString);
        });
    }
}