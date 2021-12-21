import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'abw-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss'],
})
export class ExamplePageComponent {
  @HostBinding('class')
  class = 'content content-full-height';

  @Input()
  title!: string;

  @Input()
  sourceCodePath!: string;
}
