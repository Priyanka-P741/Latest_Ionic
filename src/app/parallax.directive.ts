import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  host:{
    '(ionScroll)':'onCntscroll($event)',
  }
})
export class ParallaxDirective {

  constructor(public el:ElementRef,public re:Renderer2) { }


  onCntscroll(ev){
    console.log(ev);
   }
}
