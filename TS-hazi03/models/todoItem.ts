export type contentTypes = string | tuple;
export type tuple = [Date, string] | [string, Date];

export class todoItem { //not sure how to use both T and contentTypes, <T extends contentTypes> exportáltban mindenhogy hibát ad
    public id: number;
    public content: contentTypes;

    constructor(id: number, content: contentTypes) {
        this.id = id;
        this.content = content;
    }
  }