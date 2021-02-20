import { ImageType } from "./ImageType";
import { Picture } from "./Picture";

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
