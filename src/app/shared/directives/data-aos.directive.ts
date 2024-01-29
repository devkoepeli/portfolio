import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDataAos]',
  standalone: true
})
export class DataAosDirective implements OnChanges {
  @Input() index!: number;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['index']) {
      this.updateAosAttribute();
    }
  }

  updateAosAttribute() {
    const aosValue = this.index % 2 === 0 ? 'fade-right' : 'fade-left';
    this.el.nativeElement.setAttribute('data-aos', aosValue);
  }
}
