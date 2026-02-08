import { Pipe, PipeTransform } from "@angular/core";
import { Iplayer } from "../models/players";




@Pipe({
    name:'filter'
})
export class filterpipe implements PipeTransform{

    transform(value: Iplayer[],searchval:string):Iplayer[]{
        console.log(value);
        
        return value.filter(p=>{
            return p.team.toLowerCase().includes(searchval)
        })
    }
}