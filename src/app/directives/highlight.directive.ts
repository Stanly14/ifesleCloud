import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('appHighlight') rowData!: any;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    if (this.rowData?.text_color && this.rowData.background_color) {
      this.el.nativeElement.style.color = this.rowData.text_color;
      this.el.nativeElement.style.backgroundColor = this.rowData.background_color;
    }
    else {
      if (this.rowData == 'Customer') {
        this.el.nativeElement.style.color = '#2C76DB';
        this.el.nativeElement.style.backgroundColor = '#F1F8FE';
      }
      else if (this.rowData == 'Churned') {
        this.el.nativeElement.style.color = '#494DCB';
        this.el.nativeElement.style.backgroundColor = '#EFF4FE';
      }
    }
  }
}
