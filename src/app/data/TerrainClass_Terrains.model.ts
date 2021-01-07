export class TerrainClassTerrains{
  TerrainClassType: string;
  TerrainType: string;
}

import jsonFile from './TerrainClass_Terrains.json';
export const terrainClassTerrains: TerrainClassTerrains[] =  jsonFile as TerrainClassTerrains[];
