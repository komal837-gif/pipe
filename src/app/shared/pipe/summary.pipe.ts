import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name: 'summary'
})
export class summaryPipe implements PipeTransform{

    transform(value: any,limit?:number) {
        if(value.length === 0){
            return ' '
        }

        if(!limit){
            limit=50
        }
        return value.substring(0,50) + '...'
    }   
}