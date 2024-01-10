import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ItemComponent]
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    {description: 'test1', done: true},
    {description: 'test2', done: true},
    {description: 'test3', done: false},
    {description: 'test4', done: false},
  ]

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  //@ts-ignore
  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }  

  get items() {
    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done)
  }
}