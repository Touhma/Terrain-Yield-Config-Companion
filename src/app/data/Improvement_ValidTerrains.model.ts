export class ImprovementValidTerrains {
  ImprovementType: string;
  TerrainType: string;
  PrereqCivic: string;
  PrereqTech: string;

}

import jsonFile from './Improvement_ValidTerrains.json';

export const improvementValidTerrains: ImprovementValidTerrains[] = jsonFile as ImprovementValidTerrains[];
