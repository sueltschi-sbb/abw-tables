import { Component, Input } from '@angular/core';

@Component({
  selector: 'abw-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss'],
  host: { class: 'content content-full-height' },
})
export class ExamplePageComponent {
  @Input()
  title!: string;

  @Input()
  sourceCodePath!: string;
}
