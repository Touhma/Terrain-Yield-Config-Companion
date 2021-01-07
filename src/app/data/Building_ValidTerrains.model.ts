export class BuildingValidTerrains{
  BuildingType: string;
  TerrainType: string;
}

import jsonFile from './Building_ValidTerrains.json';
export const buildingValidTerrains: BuildingValidTerrains[] =  jsonFile as BuildingValidTerrains[];
