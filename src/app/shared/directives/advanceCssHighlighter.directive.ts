import { ImplicitReceiver } from "@angular/compiler";
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";





@Directive({
    selector:'[advanceCss]'
})
export class advanceCssHighlighter implements OnInit{

    @Input() DefaultColor:string = 'orange'
    @Input() HoverColor!:string;

    constructor(
        private _eleRef:ElementRef,
        private rendrer:Renderer2
    ){}

    ngOnInit(): void {
        // this.rendrer.setStyle(this._eleRef.nativeElement,'backgroundColor','hotpink')
        // this.rendrer.setStyle(this._eleRef.nativeElement,'color','#fff')
        // this.rendrer.setStyle(this._eleRef.nativeElement,'padding','15px')

        this.rendrer.addClass(this._eleRef.nativeElement,'alert')
        this.rendrer.addClass(this._eleRef.nativeElement,'alert-info')
        
        this.bgColor = this.DefaultColor
    }

    // @HostListener('mouseover')
    // onMouseOver(){
    //     this.rendrer.setStyle(this._eleRef.nativeElement,'backgroundColor',this.DefaultColor)
    // }

    // @HostListener('mouseout')
    // onMouseOut(){
    //       this.rendrer.setStyle(this._eleRef.nativeElement,'backgroundColor',this.HoverColor)
    // }


    @HostBinding('style.backgroundColor')
    bgColor:string = this.DefaultColor;

    @HostListener('mouseover')
    onMOuseOver(){
        this.bgColor = this.HoverColor
    }

    @HostListener('mouseout')
    onMOuseOut(){
        this.bgColor = this.DefaultColor
    }

}