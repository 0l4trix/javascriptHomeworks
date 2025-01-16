import { Event, EventTypes } from "./models/event";
import { EventDB } from "./models/eventDB";
import { Participant } from "./services/participant";

let festival = new Event('1', 'Rand', 'Rand utca 4.', 'Március 20.', [EventTypes.Festival, EventTypes.Family]);
let concert = new Event('2', 'Rand', 'Rand utca 5.', 'Április 21.', [EventTypes.Concert, EventTypes.Family]);
//console.log(festival.time);

let database = new EventDB;
database.addEvent(festival);
database.addEvent(concert);
//console.log(database.allEvents);
console.log(database.listAllType(EventTypes.Concert))

let participant1 = new Participant('123', 'Teszt Elek');
let participant2 = new Participant('124', 'Test Alec');
participant1.signUp(festival);
participant2.signUp(concert);

database.deleteEvent('1');
console.log(database.allEvents);

async function cancel(participant: Participant, event: Event) {
    try {
        participant.cancelParticipation(event)
        return event.allParticipants;
    }
     catch (error) {
        console.error("Hiba történt az adatok lekérésekor", error);
    }
}

/*cancel(participant2, concert)
.then(data => console.log(data))*/

//module.exports = cancel;