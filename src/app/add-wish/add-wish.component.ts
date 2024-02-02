import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { wishlistitems } from '../../shared/models/wishlistitems';

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.component.html',
  styleUrl: './add-wish.component.css'
})
export class AddWishComponent {
  newWish: any='';
  
 // @Input() wishItems:wishlistitems[]=[];
    @Output() addWish =new EventEmitter<wishlistitems>();

  addwish()
  {
   // this.wishItems.push(new wishlistitems(this.newWish));
   this.addWish.emit(new wishlistitems(this.newWish));
    this.newWish='';
    console.log(this.newWish);
  }
}
