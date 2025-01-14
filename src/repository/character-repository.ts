import { Characters } from "@prisma/client";
import { db } from "../database/prisma";

const getAll = async () => {
  return db.characters.findMany({
    omit: {
      homePlanetId: true,
    },
    include: {
      homePlanet: {
        include: {
          starSystem: {
            omit: {
              id: true,
            },
          },
        },
        omit: {
          starSystemId: true,
          id: true,
        },
      },
    },
  });
};

const getById = async (id: string) => {
  return db.characters.findUnique({
    where: {
      id,
    },
    omit: {
      homePlanetId: true,
    },
    include: {
      homePlanet: {
        include: {
          starSystem: {
            omit: {
              id: true,
            },
          },
        },
        omit: {
          starSystemId: true,
          id: true,
        },
      },
    },
  });
};

const create = async (character: Characters) => {
  return db.characters.create({
    data: character,
    include: {
      homePlanet: {
        include: {
          starSystem: {
            omit: {
              id: true,
            },
          },
        },
        omit: {
          starSystemId: true,
          id: true,
        },
      },
    },
  });
};

const update = async (id: string, data: Characters) => {
  return db.characters.update({
    where: {
      id,
    },
    data,
    include: {
      homePlanet: {
        include: {
          starSystem: {
            omit: {
              id: true,
            },
          },
        },
        omit: {
          starSystemId: true,
          id: true,
        },
      },
    },
  });
};

const deleteCharacterById = async (id: string) => {
  return db.characters.delete({
    where: {
      id,
    },
  });
};

export { getAll, getById, create, update, deleteCharacterById };
