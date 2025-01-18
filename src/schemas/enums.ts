import { z } from "zod";

const affiliationEnum = z.enum([
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

const raceEnum = z.enum([
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

export { affiliationEnum, raceEnum };
