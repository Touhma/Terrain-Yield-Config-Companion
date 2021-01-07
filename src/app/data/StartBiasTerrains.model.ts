export class StartBiasTerrains {
  CivilizationType: string;
  TerrainType: string;
  Tier: number;
}
import jsonFile from './StartBiasTerrains.json';
export const startBiasTerrains: StartBiasTerrains[] =  jsonFile as StartBiasTerrains[];
