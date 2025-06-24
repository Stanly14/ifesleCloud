import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('appHighlight') columnName!: string;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    if (this.columnName === 'name') {
      this.el.nativeElement.style.fontWeight = 'bold';
      this.el.nativeElement.style.color = 'purple';
    }

    if (this.columnName === 'department') {
      this.el.nativeElement.style.backgroundColor = '#f0f0f0';
    }
  }
}
