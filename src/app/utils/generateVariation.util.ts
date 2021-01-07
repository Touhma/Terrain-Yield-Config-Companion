import { terrainTypeConf, terrainTypeGame, terrainTypeSeparatorConf, terrainTypeYieldConf } from '../config/terrainTypes.config';
import { terrainYieldChanges, TerrainYieldChanges } from '../data/Terrain_YieldChanges.model';
import { terrainYieldChangesCustom } from '../data/Terrain_YieldChanges_Custom.model';

export const generateVariations = (terrainType: string) => {
  const terrainGenerated = new Array<string>();

  terrainTypeConf.forEach(
    (terrainTypeC) => {
      terrainGenerated.push(terrainType + terrainTypeSeparatorConf + terrainTypeC);
    }
  );

  return terrainGenerated;
};

interface Dictionary<T> {
  [Key: string]: T;
}

export const generateVariationsYields = () => {
  const terrainTypeYieldConfGenerated: TerrainYieldChanges [] = [];
  // for each terrain type
  terrainTypeGame.forEach((terrainType) => {
    // generate the variation tree
    generateVariations(terrainType).forEach((combinaison) => {
        const terrainTypeYields: Dictionary<number> = {};
        console.log('New combinaison : ', combinaison);
        // for each combinaison check the yields for each bit of variation possible
        // take base yield variation
        terrainYieldChangesCustom.forEach((terrainYieldChange) => {
          console.log('Check : ', terrainYieldChange.TerrainType, 'with : ', terrainType);
          if (terrainYieldChange.TerrainType === terrainType) {
            if (terrainTypeYields[terrainYieldChange.YieldType] != null) {
              // console.log('Adding to type : ', yieldChange.YieldType, yieldChange.YieldChange);
              terrainTypeYields[terrainYieldChange.YieldType] += terrainYieldChange.YieldChange;
              // console.log('New value type : ', terrainTypeYields[yieldChange.YieldType]);
            } else {
              // console.log('New type : ', yieldChange.YieldType, yieldChange.YieldChange);
              terrainTypeYields[terrainYieldChange.YieldType] = terrainYieldChange.YieldChange;
            }
          }
        });


        terrainTypeYieldConf.forEach(yieldChange => {
          // console.log('yieldChange : ', yieldChange);
          if (combinaison.includes(yieldChange.TerrainType)) {
            if (terrainTypeYields[yieldChange.YieldType] != null) {
              // console.log('Adding to type : ', yieldChange.YieldType, yieldChange.YieldChange);
              terrainTypeYields[yieldChange.YieldType] += yieldChange.YieldChange;
              // console.log('New value type : ', terrainTypeYields[yieldChange.YieldType]);
            } else {
              // console.log('New type : ', yieldChange.YieldType, yieldChange.YieldChange);
              terrainTypeYields[yieldChange.YieldType] = yieldChange.YieldChange;
            }
          }
        });

        // console.log(Object.keys(terrainTypeYields));
        // creation of the config
        Object.keys(terrainTypeYields).forEach(yieldType => {
          terrainTypeYieldConfGenerated.push({
            TerrainType: combinaison,
            YieldChange: terrainTypeYields[yieldType],
            YieldType: yieldType
          });
        });


        // console.log('Dict', terrainTypeYields);
      }
    );
  });
  // console.log('config finale : ', terrainTypeYieldConfGenerated);
  return terrainTypeYieldConfGenerated;
};
