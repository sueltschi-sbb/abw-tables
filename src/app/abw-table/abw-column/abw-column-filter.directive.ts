import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[abwColumnFilter]',
})
export class AbwColumnFilterDirective {
  constructor(public readonly template: TemplateRef<unknown>) {}
}
