import { Component,OnInit,Input } from '@angular/core';
import { wishlistitems } from '../../shared/models/wishlistitems';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes :wishlistitems[]=[];

  toggleItem(item: wishlistitems)
  {
    item.isComplete= !item.isComplete;
    console.log(item);
  }
}
