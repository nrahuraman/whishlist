import { Component } from '@angular/core';
import { wishlistitems } from '../shared/models/wishlistitems';

const filters = [
  (item : wishlistitems)=> item,
  (item : wishlistitems)=> !item.isComplete,
  (item :wishlistitems)=>item.isComplete
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'whishlist';
  newWish ='';
  SelectOption : any='0';
  items : wishlistitems[]=[
    new wishlistitems('Learn Angular'),
    new wishlistitems('Get Coffe',true),
    new wishlistitems('Find grass that cuts itself')
       ];
  
  //visibleItems : wishlistitems[] =this.items;

  get visibleItems()  : wishlistitems[]
  {
    return this.items.filter(filters[this.SelectOption]);
  //  let  no=this.SelectOption;
  //  console.log(no);
  //  if(no == 0)
  //  {
  //   return this.items;
  //   console.log("HI "+this.items,this.visibleItems);
  //  }
  //  else if(no == 1)
  //  {
  //   return this.items.filter(item=>!item.isComplete);
  //   console.log("this is 1");
  //  }
  //  else
  //  {
  //   return this.items.filter(item=>item.isComplete);
  //   console.log("this is 2");
  //  }
  }

  addwish()
  {
    this.items.push(new wishlistitems(this.newWish));
    this.newWish='';
    console.log(this.newWish);
  }
  // selected(no : any)
  // {
  //   console.log(no);
  //   if(no == 0)
  //   {
  //    this.visibleItems=this.items;
  //    console.log("HI "+this.items,this.visibleItems);
  //   }
  //   else if(no == 1)
  //   {
  //    this.visibleItems=this.items.filter(item=>!item.isComplete);
  //    console.log("this is 1");
  //   }
  //   else
  //   {
  //    this.visibleItems=this.items.filter(item=>item.isComplete);
  //    console.log("this is 2");
  //   }
  // }
  toggleItem(item: wishlistitems)
  {
    item.isComplete= !item.isComplete;
    console.log(item);
  }
}
