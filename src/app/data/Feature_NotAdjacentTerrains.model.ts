export class FeatureNotAdjacentTerrains{
  FeatureType: string;
  TerrainType: string;
}

import jsonFile from './Feature_NotAdjacentTerrains.json';
export const featureNotAdjacentTerrains: FeatureNotAdjacentTerrains[] =  jsonFile as FeatureNotAdjacentTerrains[];
