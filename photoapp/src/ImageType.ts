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
