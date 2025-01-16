import { Event } from "../models/event";

export class Participant{
    readonly id: string;
    private _name: string;

    constructor(id: string, fullName: string){
        this.id = id;
        this._name = fullName;
    }

    signUp(event: Event){
        
    }
    
}