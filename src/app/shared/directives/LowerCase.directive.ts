
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";




@Directive({
    selector:'[LowerCase]'
})
export class LowerCase implements OnInit{
    
    constructor(
        private eleRef:ElementRef,
        private rendrer:Renderer2
    ){}

    ngOnInit(): void {
        
    }

    // @HostListener('keyup')
    // Onsearch(){
    //     let val:string = (this.rendrer.selectRootElement(this.eleRef.nativeElement).value as string).toLowerCase()
    //     this.rendrer.selectRootElement(this.eleRef.nativeElement).value = val
    //     console.log(val)
    // }

    @HostListener('keyup',['$event'])
    Onsearch(eve:Event){
        let val:string = (eve.target as HTMLInputElement).value.toLowerCase();
        console.log(val);

        (eve.target as HTMLInputElement).value = val
    }
}