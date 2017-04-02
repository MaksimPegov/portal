import {Pipe, PipeTransform} from '@angular/core';

export enum LoginProviders{
    facebook = 1,
    google = 2,
    twitter = 3,
    email = 4
    //vk = 5
}
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (var enumMember in value) {
      if (!isNaN(parseInt(enumMember, 10))) {
        keys.push({key: enumMember, value: value[enumMember]});
        // Uncomment if you want log
        console.log("enum member: ", value[enumMember]);
      } 
    }
    return keys;
  }
}