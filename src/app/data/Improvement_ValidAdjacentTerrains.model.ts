export class ImprovementValidAjdacentTerrains{
  ImprovementType: string;
  TerrainType: string;
}

import jsonFile from './Improvement_ValidAdjacentTerrains.json';
export const improvementValidAdjacentTerrains: ImprovementValidAjdacentTerrains[] =  jsonFile as ImprovementValidAjdacentTerrains[];
