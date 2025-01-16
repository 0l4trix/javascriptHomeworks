import { Event } from "../models/event";

export class Participant{
    readonly id: string;
    private _name: string;

    constructor(id: string, fullName: string){
        this.id = id;
        this._name = fullName;
    }

    set name(name: string) {
        this._name = name;
        //notify event
    }

    get name(): string {
        return this._name;
    }

    signUp(event: Event){
        event.addParticipant(this.id, this._name);
    }

    cancelParticipation(event: Event){
        event.removeParticipant(this.id);
    }
    
}