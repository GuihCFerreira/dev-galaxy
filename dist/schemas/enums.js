"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceEnum = exports.affiliationEnum = void 0;
const zod_1 = require("zod");
const affiliationEnum = zod_1.z.enum([
    "REBEL",
    "EMPIRE",
    "JEDI",
    "SITH",
    "BOUNTY_HUNTER",
    "SMUGGLER",
    "TRADE_FEDERATION",
    "GALACTIC_REPUBLIC",
    "SEPARATISTS",
    "FIRST_ORDER",
    "RESISTANCE",
]);
exports.affiliationEnum = affiliationEnum;
const raceEnum = zod_1.z.enum([
    "HUMAN",
    "TWILEK",
    "WOOKIEE",
    "RODIAN",
    "ZABRAK",
    "MON_CALAMARI",
    "EWOK",
    "TOGRUTA",
    "CHISS",
    "NAUTOLAN",
    "JAWA",
    "KEL_DOR",
    "TRANDOSHAN",
    "GAMORREAN",
    "DEVARONIAN",
    "FALLEN",
    "DATHOMIRIAN",
    "MIRIALAN",
    "PANTORAN",
    "QUARREN",
    "SULLUSTAN",
    "ITHORIAN",
    "GEONOSIAN",
    "KAMINOAN",
    "PAU_AN",
    "BESALISK",
    "UMBARAN",
    "NEIMOIDIAN",
    "CLAWDITE",
]);
exports.raceEnum = raceEnum;
