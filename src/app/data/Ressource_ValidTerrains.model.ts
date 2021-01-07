export class RessourceValidTerrains{
  ResourceType: string;
  TerrainType: string;
}

import jsonFile from './Resource_ValidTerrains.json';
export const ressourceValidTerrains: RessourceValidTerrains[] =  jsonFile as RessourceValidTerrains[];
