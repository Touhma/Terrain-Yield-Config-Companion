export class AdjacencyYieldChange{
  AdjacentDistrict: string;
  AdjacentFeature: string;
  AdjacentImprovement: string;
  AdjacentNaturalWonder: number;
  AdjacentResource: number;
  AdjacentResourceClass: string;
  AdjacentRiver: number;
  AdjacentSeaResource: number;
  AdjacentTerrain: string;
  AdjacentWonder: number;
  Description: string;
  ID: string;
  ObsoleteCivic: string;
  ObsoleteTech: string;
  OtherDistrictAdjacent: number;
  PrereqCivic: string;
  PrereqTech: string;
  Self: number;
  TilesRequired: number;
  YieldChange: number;
  YieldType: string;
}

import adjacencyYieldChangesJson from './Adjacency_YieldChanges.json';
export const adjacencyYieldChanges: AdjacencyYieldChange[] =  adjacencyYieldChangesJson as AdjacencyYieldChange[];

