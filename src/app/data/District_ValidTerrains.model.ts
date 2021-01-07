export class DistrictValidTerrains{
  DistrictType: string;
  TerrainType: string;
}

import jsonFile from './District_ValidTerrains.json';
export const districtValidTerrains: DistrictValidTerrains[] =  jsonFile as DistrictValidTerrains[];
