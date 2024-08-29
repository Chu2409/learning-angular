import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  taskList: string[] = []
  newTask: string = ''

  private tasksService = inject(TasksService)

  ngOnInit(): void {
    this.taskList = this.tasksService.getTasks()
  }

  addTask() {
    this.tasksService.addTask(this.newTask)
    this.taskList = this.tasksService.getTasks()
    this.newTask = ''
  }

  removeTask(index: number) {
    this.tasksService.removeTask(index)
    this.taskList = this.tasksService.getTasks()
  }
}
