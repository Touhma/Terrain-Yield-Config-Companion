export class ModifierArguments{
  Extra: string | number;
  ModifierId: string;
  Name: string;
  SecondExtra: string | number;
  Type: string;
  Value: string | number;
}

import jsonFile from './ModifierArguments.json';
export const modifierArguments: ModifierArguments[] =  jsonFile as ModifierArguments[];
