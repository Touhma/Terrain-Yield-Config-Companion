export class FeatureAdjacentTerrains{
  FeatureType: string;
  TerrainType: string;
}

import jsonFile from './Feature_AdjacentTerrains.json';
export const featureAdjacentTerrains: FeatureAdjacentTerrains[] =  jsonFile as FeatureAdjacentTerrains[];
