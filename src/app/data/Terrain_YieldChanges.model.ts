export class TerrainYieldChanges {
  TerrainType: string;
  YieldChange: number;
  YieldType: string;
}
import jsonFile from './Terrain_YieldChanges.json';
export const terrainYieldChanges: TerrainYieldChanges[] =  jsonFile as TerrainYieldChanges[];
