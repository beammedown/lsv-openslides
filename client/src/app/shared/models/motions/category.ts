import { BaseModel } from '../base/base-model';

/**
 * Representation of a motion category. Has the nested property "File"
 * @ignore
 */
export class Category extends BaseModel {
    public id: number;
    public name: string;
    public prefix: string;

    public constructor(input?: any) {
        super('motions/category', input);
    }

    public getTitle(): string {
        return this.prefix + ' - ' + this.name;
    }

    /**
     * update the values of the motion with new values
     */
    public patchValues(update: object): void {
        Object.assign(this, update);
    }
}

BaseModel.registerCollectionElement('motions/category', Category);
