import { ImageType } from "./ImageType";
import { PhotoOrientation } from "./Enums"

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
