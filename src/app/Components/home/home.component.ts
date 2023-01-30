import { Component } from '@angular/core';
import { Itask } from 'src/app/Models/itask';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks:Itask[] = [];

  constructor(private taskService:TaskService){
    this.getAllTasks();
  }

  getAllTasks()
  {
    this.taskService.getAllTasks().subscribe({
      next:(tasks) => {
        this.tasks = tasks;
      }
    })
  }
}
