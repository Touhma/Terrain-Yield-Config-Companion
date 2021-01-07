import { TerrainYieldChanges } from '../data/Terrain_YieldChanges.model';

export const terrainTypeSeparatorConf = '_ADJACENT';

export class ConfigFiles{
  key: string;
  keyTerrain: string;
  file: any[];
}

export const terrainTypeGame: string [] = [
  'TERRAIN_GRASS',
  'TERRAIN_GRASS_HILLS',
  'TERRAIN_PLAINS',
  'TERRAIN_PLAINS_HILLS',
  'TERRAIN_DESERT',
  'TERRAIN_DESERT_HILLS',
  'TERRAIN_TUNDRA',
  'TERRAIN_TUNDRA_HILLS',
  'TERRAIN_SNOW',
  'TERRAIN_SNOW_HILLS',
];
// Terrain + Type --> River --> Lake  --> Coast --> Mountain
export const terrainTypeConf: string [] = [
  '_RIVER',
  '_LAKE',
  '_COAST',
  '_MOUNTAIN',
  '_RIVER_LAKE',
  '_RIVER_COAST',
  '_RIVER_MOUNTAIN',
  '_LAKE_COAST',
  '_LAKE_MOUNTAIN',
  '_COAST_MOUNTAIN',
  '_RIVER_LAKE_COAST',
  '_RIVER_LAKE_MOUNTAIN',
  '_LAKE_COAST_MOUNTAIN',
  '_RIVER_COAST_MOUNTAIN',
  '_RIVER_LAKE_COAST_MOUNTAIN',
];

// Terrain + Type --> River --> Lake  --> Coast --> Mountain
export const terrainTypeYieldConf: TerrainYieldChanges [] = [
  {
    TerrainType: '_RIVER',
    YieldChange: 1,
    YieldType: 'YIELD_FOOD'
  },
  {
    TerrainType: '_LAKE',
    YieldChange: 1,
    YieldType: 'YIELD_FOOD'
  },
  {
    TerrainType: '_COAST',
    YieldChange: 1,
    YieldType: 'YIELD_FOOD'
  },
  {
    TerrainType: '_MOUNTAIN',
    YieldChange: 1,
    YieldType: 'YIELD_PRODUCTION'
  }
];
