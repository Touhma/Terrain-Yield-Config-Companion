export class Types{
  Kind: string;
  Type: string;
}

import jsonFile from './Types.json';
export const types: Types[] =  jsonFile as Types[];
