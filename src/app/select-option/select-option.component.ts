import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { wishlistitems } from '../../shared/models/wishlistitems';
const filters = [
  (item : wishlistitems)=> item,
  (item : wishlistitems)=> !item.isComplete,
  (item :wishlistitems)=>item.isComplete
];
@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrl: './select-option.component.css'
})
export class SelectOptionComponent implements OnInit {
  ngOnInit(): void {

    this.filter.emit(filters[0]);
    throw new Error('Method not implemented.');
  }
  SelectOption : any='0';
  @Output() filter=new EventEmitter<any>();


  changeFilter(value: any)
  {
    this.filter.emit(filters[value]);
  }
}
