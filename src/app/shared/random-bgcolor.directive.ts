import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBGColor]'
})
export class RandomBGColorDirective implements OnInit {

  constructor(public elementRef: ElementRef) { }
  ngOnInit(): void {

    let randColor = () => {
      return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    this.elementRef.nativeElement.style.backgroundColor= randColor();

  }

}
