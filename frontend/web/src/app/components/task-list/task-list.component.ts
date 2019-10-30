import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Observable<Task[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTasks();
  }

  /**
   * getTasks
   */
  public getTasks() {
    this.tasks = this.apiService.getTasks();
  }

}
