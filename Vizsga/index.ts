/*
Komplett Vizsgafeladat: Rendezvény (fesztivál) Kezelő Rendszer
Rendzevény: lehet bármi, szülinap, családi, fesztivál, koncert stb...

Cél: Egy OOP alapú rendezvény kezelő rendszer készítése TypeScriptben, amely lehetővé teszi rendezvények kezelését (létrehozás, szerkesztés, törlés),
résztvevők regisztrálását és nyilvántartását. A rendszer támogassa az rendezvények tematikus csoportosítását,
valamint nyújtson lehetőséget az rendezvények és résztvevők adatainak lekérdezésére.

.

Projekt Létrehozása:
npm használata: A projekt npm segítségével hozz létre, legyen benne package json és tsconfig
Verziókezelés: Git használatával commitold a kódot, és tárold GitHub-on.
Konfigurációs fájlok: Állítsd be a tsconfig.json és package.json fájlokat a projekt konfigurációjához.
Segítség az Rendezvénykezelő Rendszer Projekt Feladathoz:
A rendezvény entitás minimum elvárásai: Név, hely, idő, résztvevők listája, a rendezvény tematikája/típusa.

Rendezvény Kezelés: Implementálj osztályokat és interface-eket az rendezvények kezeléséhez, beleértve azok létrehozását, szerkesztését, és törlését.
Résztvevők Kezelése: Készíts rendszert a résztvevők felvételéhez és nyilvántartásához, beleértve az rendezvényekhezekhez való hozzáadásukat és eltávolításukat.
Tematikus Csoportosítás: Implementálj funkcionalitást az rendezvények tematikus csoportosítására, hogy a felhasználók könnyen megtalálhassák az őket érdeklő rendezvényeket.
Plusz feladat (nem kötelező! Csak akkor kezd el ha megvan az alap feladat!) :

Tesztelés: készíts jest keretrendszerrel unit teszteket, amnennyiben nem konfigurálod, nem gond, elég ha szükséges test file megvan, benne pár példa tesztel.
Decoratorok: Használj decoratorokat az osztályok és metódusok funkcionalitásának kiterjesztésére, például az rendezvények logolására (a kód elég, config/működés nem kell)
Aszinkronitás: Implementálj Promise-okat és/vagy async/await szintaxist az aszinkron műveletek kezelésére, például az objektumok létrehozására - csak hibakezelés végett alkalmazd
*/

import { Event } from "./models/event";
import { EventDB } from "./models/eventDB";
import { Participant } from "./services/participant";