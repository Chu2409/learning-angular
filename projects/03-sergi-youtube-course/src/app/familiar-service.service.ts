import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamiliarServiceService {
  bigBrother?: string
  littleBrother?: string

  getBigBrother() {
    return this.bigBrother || ''
  }

  setBigBrother(name: string) {
    this.bigBrother = name
  }

  getLittleBrother() {
    return this.littleBrother || ''
  }

  setLittleBrother(name: string) {
    this.littleBrother = name
  }

  greet(brother: string) {
    console.log(`Hello, ${brother}!`);
  }
  
  askSon() {
    return 'How are you?'
  }

  constructor() { }
}
