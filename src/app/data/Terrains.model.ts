export class Terrains{
  AntiquityPriority: number;
  Appeal: number;
  DefenseModifier: number;
  Hills: number;
  Impassable: number;
  InfluenceCost: number;
  Mountain: number;
  MovementCost: number;
  Name: string;
  ShallowWater: number;
  SightModifier: number;
  SightThroughModifier: number;
  TerrainType: string;
  Water: number;
}

import jsonFile from './Terrains.json';
export const terrains: Terrains[] =  jsonFile as Terrains[];
