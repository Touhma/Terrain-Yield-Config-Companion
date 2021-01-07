export class RequirementArguments{
  Extra: string | number;
  RequirementId: string;
  Name: string;
  SecondExtra: string | number;
  Type: string;
  Value: string | number;
}

import jsonFile from './RequirementArguments.json';
export const requirementArguments: RequirementArguments[] =  jsonFile as RequirementArguments[];
