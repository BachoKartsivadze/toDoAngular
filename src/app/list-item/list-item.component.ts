import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input() name: string = 'no name';
  @Input() id: number = 0;
  @Input() isActive: boolean = false;
}
