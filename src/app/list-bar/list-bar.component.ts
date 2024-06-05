import { Component } from '@angular/core';
import { ListItem } from '../list-item/list-item.model';

@Component({
  selector: 'app-list-bar',
  templateUrl: './list-bar.component.html',
  styleUrl: './list-bar.component.css',
})
export class ListBarComponent {
  listBarText: string = '';
  list: ListItem[] = [];

  createListItem() {
    const newItem: ListItem = {
      name: this.listBarText,
      id: this.list.length + 1,
      isActive: false,
      dueDate: new Date(),
    };
    this.list.push(newItem);
    this.listBarText = ''; // Clear the input field after adding the item
  }

  deleteListItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
