import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appProgressBar]',
  standalone: true
})
export class ProgressBarDirective {
  @Input('appProgressBar') percentage!:any
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.width = this.percentage+'%'
  }
}
