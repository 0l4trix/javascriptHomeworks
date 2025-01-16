import { Participant } from "../services/participant";

export enum EventTypes {
    Festival = "Festival",
    Concert = "Concert",
    Private = "Private",
    Family = "Family friendly",
    Adult = "18+"
}

interface IEvent{
    addType(type: EventTypes): void ;
    removeType(type: EventTypes): void;
    addParticipant(id: string, name: string): boolean;
    removeParticipant(id: string): boolean;

}

export class Event implements IEvent {
    readonly id: string;
    private _name: string;
    private _place: string;
    private _time: Date | string;
    private _types?: EventTypes[] = [];
    private _allParticipants: Map<string, string> = new Map();

    constructor(id: string, name: string, place: string, time: Date | string, types?: EventTypes[]) {
        this.id = id;
        this._name = name;
        this._place = place;
        this._time = time;
        if (types) {
            this._types = types;
        }
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set place(place: string) {
        this._place = place;
        //send notification to participants
    }

    get place(): string {
        return this._place;
    }

    set time(time: Date | string) {
        this._time = time;
        //send notification to participants
    }

    get time(): Date | string {
        return this._time;
    }

    getMainData(): [string, string, (Date | string)]{
        return [this._name, this._place, this._time];
    }

    addType(type: EventTypes): void {
        this._types?.push(type);
    }

    removeType(type: EventTypes): void {
        this._types?.splice(this._types.findIndex(n => n === type), 1);
    }

    get types(){
        return this._types;
    }

    get allParticipants(){
        return this._allParticipants;
    }

    addParticipant(id: string, name: string): boolean {
        if (!this._allParticipants.has(id)){
            this._allParticipants.set(id, name);
            return true;
        }
        return false;
    }

    removeParticipant(id: string): boolean {
        if(this._allParticipants.has(id)){
            this._allParticipants.delete(id);
            return true;
        }
        return false;

    }

    getParticipant(id: string): string | undefined{
        return this._allParticipants.get(id);
    }
}