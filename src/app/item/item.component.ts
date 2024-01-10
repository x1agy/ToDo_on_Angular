import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  editable = false;
  //@ts-ignore
  @Input() item: Item;
  //@ts-ignore
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();
  //@ts-ignore
  saveItem(description) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
