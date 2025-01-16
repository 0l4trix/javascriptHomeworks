/*

Rendezvény Kezelés: Implementálj osztályokat és interface-eket az rendezvények kezeléséhez, beleértve azok létrehozását, szerkesztését, és törlését.
Résztvevők Kezelése: Készíts rendszert a résztvevők felvételéhez és nyilvántartásához, beleértve az rendezvényekhezekhez való hozzáadásukat és eltávolításukat.
Tematikus Csoportosítás: Implementálj funkcionalitást az rendezvények tematikus csoportosítására, hogy a felhasználók könnyen megtalálhassák az őket érdeklő rendezvényeket.
Plusz feladat (nem kötelező! Csak akkor kezd el ha megvan az alap feladat!) :

Tesztelés: készíts jest keretrendszerrel unit teszteket, amnennyiben nem konfigurálod, nem gond, elég ha szükséges test file megvan, benne pár példa tesztel.
Decoratorok: Használj decoratorokat az osztályok és metódusok funkcionalitásának kiterjesztésére, például az rendezvények logolására (a kód elég, config/működés nem kell)
Aszinkronitás: Implementálj Promise-okat és/vagy async/await szintaxist az aszinkron műveletek kezelésére, például az objektumok létrehozására - csak hibakezelés végett alkalmazd
*/

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

participant2.cancelParticipation(concert);
console.log(concert.allParticipants);