import { Event, EventTypes } from "./event";

export class EventDB {
    private _allEvents: Event[] = [];

    get allEvents() {
        return this._allEvents;
    }

    addEvent(event: Event) {
        this._allEvents.push(event);
    }

    deleteEvent(eventId: string) {
        this._allEvents.splice(this._allEvents.findIndex(n => n.id === eventId), 1);
    }

    listAllType(type: EventTypes): Event[] | undefined{        
        return this._allEvents.filter(n => n.types?.find(n => n === type));
    }

}