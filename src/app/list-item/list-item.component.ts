import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from './list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input() data?: ListItem;

  // @Input() name: string = 'no name';
  // @Input() id: number = 0;
  // @Input() isActive: boolean = false;
  // @Input() dueDate: Date = new Date();

  @Output() delete = new EventEmitter<number>();

  changeActiveStatus() {
    this.data!.isActive = !this.data?.isActive;
  }

  deleteItem() {
    this.delete.emit(this.data?.id);
  }
}
