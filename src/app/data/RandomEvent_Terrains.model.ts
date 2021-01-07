export class RandomEventTerrains{
  RandomEventType: string;
  TerrainType: string;
}

import jsonFile from './RandomEvent_Terrains.json';
export const randomEventTerrains: RandomEventTerrains[] =  jsonFile as RandomEventTerrains[];
