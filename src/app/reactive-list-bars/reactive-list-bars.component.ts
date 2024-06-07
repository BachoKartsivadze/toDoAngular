import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListItem } from '../list-item/list-item.model';

@Component({
  selector: 'app-reactive-list-bars',
  templateUrl: './reactive-list-bars.component.html',
  styleUrl: './reactive-list-bars.component.css',
})
export class ReactiveListBarComponent implements OnInit {
  listForm!: FormGroup;
  list: ListItem[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listForm = this.fb.group({
      listBarText: ['', Validators.required],
    });
  }

  createListItem() {
    if (this.listForm.valid) {
      const newItem: ListItem = {
        name: this.listForm.value.listBarText,
        id: this.list.length + 1,
        isActive: false,
        dueDate: new Date(),
      };
      this.list.push(newItem);
      this.listForm.reset();
    }
  }

  deleteListItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
