import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>()
  @Output() incrementFromChild = new EventEmitter<void>()
  @Output() decrementFromChild = new EventEmitter<void>()

  message = ''

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  increment() {
    this.incrementFromChild.emit()
  }

  decrement() {
    this.decrementFromChild.emit()
  }
}
