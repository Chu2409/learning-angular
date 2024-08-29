import { Component, inject, OnInit } from '@angular/core';
import { FamiliarServiceService } from '../familiar-service.service';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css']
})
export class BrotherComponent implements OnInit{
  name?: string

  // constructor(private familiarService: FamiliarServiceService) { }

  private familiarService = inject(FamiliarServiceService)

  ngOnInit(): void {
    this.familiarService.setLittleBrother('James')
    this.name = this.familiarService.getLittleBrother()
  }

  greet() {
    this.familiarService.greet(this.familiarService.getBigBrother() || '')
  }

  askForSon() {
    console.log(this.familiarService.askSon());
  }
}
