import { Participant } from "../services/participant";

export enum EventTypes{
    Festival = "Festival",
    Concert = "Concert",
    Private = "Private"
}

export class Event{
    readonly id: string;
    private _name: string;
    private _place: string;
    private _time: Date | string;
    private _types?: EventTypes[] = [];
    private _allParticipants: Participant[] = [];

    constructor(id: string, name: string, place: string, time: Date | string, types?: EventTypes[]){
        this.id = id;
        this._name = name;
        this._place = place;
        this._time = time;
    }

    set name(name: string){
        this._name = name;
    }

    get name(): string{
        return this._name;
    }

    set place(place: string){
        this._place = place;
        //send notification to participants
    }

    get place(): string{
        return this._place;
    }

    set time(time: Date | string){
        this._time = time;
        //send notification to participants
    }

    get time(): Date | string{
        return this._time;
    }

    addType(type: EventTypes) {
        this._types?.push(type);
    }

    removeType(type: EventTypes) {
        this._types?.splice(this._types.findIndex(n => n === type), 1);
    }

    addParticipant(participant: Participant){

    }

    removeParticipant(participant: Participant){

    }
}