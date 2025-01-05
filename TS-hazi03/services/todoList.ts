import { todoItem, contentTypes } from "../models/todoItem";
import { log } from "../models/decorators";

export enum listOptions {
  Date,
  Alphabetical
}

export class todoList {
  private _items: Map<number, contentTypes> = new Map();

  //@log //descriptor missing???? also isn't something wrong with when it gets invited?
  addItem(item: todoItem) {
    this.items = item;
  }

  set items(item: todoItem) {
    if (!this._items.has(item.id))
      this._items.set(item.id, item.content);
  }

  get items(): Map<number, contentTypes> {
    return this._items;
  }

  deleteItem(item: todoItem): boolean {
    return this._items.delete(item.id);
  }

  filterItems(filterBy: listOptions) {
    let allItems = [];
    for (const value of this._items.values()) {
      switch (filterBy) {
        case listOptions.Alphabetical:
          if (typeof value === "string")
            allItems.push(value)
          break;
        case listOptions.Date:
          if (typeof value !== "string")
            allItems.push(value)
      }
    }
    return allItems;
  }

  listItems(listBy: listOptions) {
    let allItems = [];

    switch (listBy) {
      case listOptions.Alphabetical:
        for (const value of this._items.values()) {
          if (typeof value === "string")
            allItems.push(value);
          else if (typeof value[0] === "string") {
            allItems.push(value[0]);
          }
          else if (typeof value[1] === "string") {
            allItems.push(value[1]);
          }
        }
        allItems.sort((a, b) => a.localeCompare(b));
        break;

      case listOptions.Date:
        for (const value of this._items.values()) {
          if (typeof value !== "string") {
            if (typeof value[0] !== "string") {
              allItems.push(value[0]);
            }
            else if (typeof value[1] !== "string") {
              allItems.push(value[1]);
            }
          }
        }
        allItems.sort((a, b) => a.getTime() - b.getTime());
    }
    return allItems;
  }
}