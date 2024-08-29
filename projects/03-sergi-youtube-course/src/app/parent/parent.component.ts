import { Component, OnInit } from '@angular/core';
import { FamiliarServiceService } from '../familiar-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name?: string
  date = new Date()

  constructor(private familiarService: FamiliarServiceService) { }

  ngOnInit(): void {
    this.familiarService.setBigBrother('John')
    this.name = this.familiarService.getBigBrother()
  }

  counter = 0

  message = ''

  receiveMessage($event: string) {
    this.message = $event
  }

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

  greet() {
    this.familiarService.greet(this.familiarService.getLittleBrother() || '')
  }

  askForSon() {
    console.log(this.familiarService.askSon());
  }
}
