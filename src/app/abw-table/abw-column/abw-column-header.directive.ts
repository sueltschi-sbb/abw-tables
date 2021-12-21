import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[abwColumnHeader]',
})
export class AbwColumnHeaderDirective {
  constructor(public readonly template: TemplateRef<unknown>) {}
}
