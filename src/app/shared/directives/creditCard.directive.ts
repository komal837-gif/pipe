import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";





@Directive({
    selector:'[creditCard]'
})
export class CreditCard implements OnInit{
  
    constructor(
        private _eleRef:ElementRef,
        private rendrer:Renderer2
    ){}

    ngOnInit(): void {
        
    }

    @HostListener('keyup',['$event'])
    validateCreditCard(eve:Event){
        let inputControl = eve.target as HTMLInputElement;
        let val = inputControl.value.replace(/\s+/g, '')

        console.log(val);
        
        if(val.length > 16){
            val = val.substring(0,16);
        }

        let finalVal = this.formCreditCard(val)
        inputControl.value = finalVal
    }

    formCreditCard(str:string){
        let chunkedArr:string[] = []
        for(let i = 0; i < str.length; i = i + 4){
            chunkedArr.push(str.slice(i , i + 4))
        }

        return chunkedArr.join(" ")
    }
}