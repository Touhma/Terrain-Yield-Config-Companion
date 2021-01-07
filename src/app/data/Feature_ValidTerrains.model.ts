export class FeatureValidTerrains{
  FeatureType: string;
  TerrainType: string;
}

import jsonFile from './Feature_ValidTerrains.json';
export const featureValidTerrains: FeatureValidTerrains[] =  jsonFile as FeatureValidTerrains[];
