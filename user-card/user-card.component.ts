import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: any;
  @Output() userSelected = new EventEmitter<any>();

  toggleSelection(user: any) {
    this.userSelected.emit(user);
  }

}
