import { Directive, ElementRef, Input, OnInit } from "@angular/core";




@Directive({
    selector:'[basicCss]'
})
export class cssHighlighterDirective implements OnInit{
    @Input() getClass:string = 'alert-info';

    constructor(
        private eleRef:ElementRef
     
     ){}

    ngOnInit(): void {

        // this.eleRef.nativeElement.style.backgroundColor = 'orange'
        // this.eleRef.nativeElement.style.color = '#fff'
        // this.eleRef.nativeElement.style.padding = '15px'

        this.eleRef.nativeElement.classList.add('alert')
        this.eleRef.nativeElement.classList.add(this.getClass)
        
    }

}