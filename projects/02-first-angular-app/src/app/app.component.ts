import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    HeaderComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'This load dynamically'
  // isActive = false
  // userName = 'John Doe'
  // onButtonClick = () => {
  //   console.log('Button clicked')
  // }
  // keyEnter = (event: KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     console.log('Enter key pressed')
  //   }
  // }
  // keyupFiltering = (user: HTMLInputElement) => {
  //   console.log(user.value)
  // }
  // updateUserName = (userName: HTMLInputElement) => {
  //   this.userName = userName.value
  //   console.log(this.userName)
  // }
  // isLoggedIn = true
  // userName = 'John Doe'
  // loginCount = 0
  // countLoginAttemps = () => {
  //   this.loginCount++
  //   console.log(this.loginCount)
  // }
  // users = [
  //   { name: 'John Doe', age: 30 },
  //   { name: 'Jane Doe', age: 25 },
  //   { name: 'Jim Doe', age: 20 },
  // ]
  // addNewUser = () => {
  //   const newUser = { name: 'New User', age: 0 }
  //   this.users.push(newUser)
  // }
  // onDelete = (index: number) => {
  //   this.users.splice(index, 1)
  // }
}
