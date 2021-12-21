import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[abwColumnCell]',
})
export class AbwColumnCellDirective<T> {
  constructor(public readonly template: TemplateRef<T>) {}
}
