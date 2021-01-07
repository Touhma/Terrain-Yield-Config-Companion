import { Component, OnInit } from '@angular/core';
import { generateVariations, generateVariationsYields } from './utils/generateVariation.util';
import { ConfigFiles, terrainTypeGame } from './config/terrainTypes.config';

import { startBiasTerrains } from './data/StartBiasTerrains.model';
import { adjacencyYieldChanges } from './data/Adjacency_YieldChanges.model';
import { featureAdjacentTerrains } from './data/Feature_AdjacentTerrains.model';
import { modifierArguments } from './data/ModifierArguments.model';
import { terrains } from './data/Terrains.model';
import { buildingValidTerrains } from './data/Building_ValidTerrains.model';
import { featureNotAdjacentTerrains } from './data/Feature_NotAdjacentTerrains.model';
import { ressourceValidTerrains } from './data/Ressource_ValidTerrains.model';
import { improvementValidTerrains } from './data/Improvement_ValidTerrains.model';
import { terrainClassTerrains } from './data/TerrainClass_Terrains.model';
import { featureValidTerrains } from './data/Feature_ValidTerrains.model';
import { randomEventTerrains } from './data/RandomEvent_Terrains.model';
import { requirementArguments } from './data/RequirementArguments.model';
import { districtValidTerrains } from './data/District_ValidTerrains.model';
import { types } from './data/Types.model';
import { improvementValidAdjacentTerrains } from './data/Improvement_ValidAdjacentTerrains.model';
import { terrainYieldChangesCustom } from './data/Terrain_YieldChanges_Custom.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ModConfig';

  configsGenerated: string[] = [];
  configsFiles: ConfigFiles[] = [
    {
      key: 'Terrains',
      keyTerrain: 'TerrainType',
      file: terrains
    },
    {
      key: 'Adjacency_YieldChanges',
      keyTerrain: 'AdjacentTerrain',
      file: adjacencyYieldChanges
    }, {
      key: 'Building_ValidTerrains',
      keyTerrain: 'TerrainType',
      file: buildingValidTerrains
    }, {
      key: 'District_ValidTerrains',
      keyTerrain: 'TerrainType',
      file: districtValidTerrains
    }, {
      key: 'Feature_AdjacentTerrains',
      keyTerrain: 'TerrainType',
      file: featureAdjacentTerrains
    }, {
      key: 'Feature_NotAdjacentTerrains',
      keyTerrain: 'TerrainType',
      file: featureNotAdjacentTerrains
    }, {
      key: 'Feature_ValidTerrains',
      keyTerrain: 'TerrainType',
      file: featureValidTerrains
    }, {
      key: 'Improvement_ValidAdjacentTerrains',
      keyTerrain: 'TerrainType',
      file: improvementValidAdjacentTerrains
    }, {
      key: 'Improvement_ValidTerrains',
      keyTerrain: 'TerrainType',
      file: improvementValidTerrains
    }, {
      key: 'ModifierArguments',
      keyTerrain: 'Value',
      file: modifierArguments
    }, {
      key: 'RandomEvent_Terrains',
      keyTerrain: 'TerrainType',
      file: randomEventTerrains
    }, {
      key: 'RequirementArguments',
      keyTerrain: 'Value',
      file: requirementArguments
    }, {
      key: 'Resource_ValidTerrains',
      keyTerrain: 'TerrainType',
      file: ressourceValidTerrains
    }, {
      key: 'StartBiasTerrains',
      keyTerrain: 'TerrainType',
      file: startBiasTerrains
    },
    /*
    {
      key: 'Terrain_YieldChanges',
      keyTerrain: 'TerrainType',
      file: terrainYieldChanges
    },
    //*/
    {
      key: 'TerrainClass_Terrains',
      keyTerrain: 'TerrainType',
      file: terrainClassTerrains
    }, {
      key: 'Types',
      keyTerrain: 'Type',
      file: types
    },
  ];

  ngOnInit(): void {
/*
    this.configsFiles.forEach(configFile => {
      this.configsGenerated.push(this.generateConfig(configFile, true));
    });
//*/
  //*//
    const yieldsObjectBase = new ConfigFiles();

    yieldsObjectBase.key = 'Terrain_YieldChanges';
    yieldsObjectBase.keyTerrain = 'TerrainType';
    yieldsObjectBase.file = terrainYieldChangesCustom;
    this.configsGenerated.push(this.generateConfig(
      yieldsObjectBase, false
    ));
//*/
    // yields
    //*
    console.log(generateVariationsYields());
    const yieldsConf = generateVariationsYields();

    const yieldsObject = new ConfigFiles();

    yieldsObject.key = 'Terrain_YieldChanges';
    yieldsObject.keyTerrain = 'TerrainType';
    yieldsObject.file = yieldsConf;

    // console.log('yieldsObject', yieldsObject);

    this.configsGenerated.push(this.generateConfig(
      yieldsObject, false
    ));
//*/
  }


  generateConfig(config: ConfigFiles, needVariation: boolean): string {
    let configVariation = [];
    if (!needVariation) {
      configVariation = config.file;
    }
    let configGenerated: string;
    console.log('Generating config for :' + config.key);
    if (needVariation) {
      config.file.forEach(element => {
        if (terrainTypeGame.includes(element[config.keyTerrain])) {
          console.log('generateVariations for :' + element[config.keyTerrain]);
          generateVariations(element[config.keyTerrain]).forEach(variation => {
            const variation2 = {...element};
            variation2[config.keyTerrain] = variation;
            configVariation.push(variation2);
          });
          console.log('configVariation :', configVariation);
        }
      });
    }


    configGenerated = `INSERT OR IGNORE INTO ${config.key} \n`;
    configGenerated += `( `;

    console.log('configVariation', configVariation);
    Object.keys(configVariation[0]).forEach((keys, keysindex, keysarray) => {
      if (keys !== 'Hash') {
        configGenerated += `${keys}`;
        if (keysindex !== (keysarray.length - 1)) {
          configGenerated += ` , `;
        }
      }


    });
    configGenerated += ` )\n`;
    configGenerated += 'VALUES \n';
    configVariation.forEach((element, index, array) => {
      configGenerated += `( `;
      Object.keys(element).forEach((keys, keysindex, keysarray) => {
        if (keys !== 'Hash') {
          if (element[keys] != null) {
            configGenerated += `'${element[keys]}'`;
          } else {
            configGenerated += `NULL`;
          }
          if (keysindex !== (keysarray.length - 1)) {
            configGenerated += ` , `;
          }
        }


      });
      configGenerated += ` )`;
      if (index === (array.length - 1)) {
        // This is the last one.
        configGenerated += `;\n`;
      } else {
        configGenerated += `,\n`;
      }
    });
    console.log('Generating config for :' + config.key + ' --- done');
    return configGenerated;
  }
}
