import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public taskForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTasks();

    this.taskForm = this.formBuilder.group({
      title: '',
      content: ''
    });

    // Set validators for fields
    this.taskForm.controls.title.setValidators([Validators.required]);
    this.taskForm.controls.content.setValidators([Validators.required]);
  }

  /**
   * getTasks - Returns all tasks
   */
  public getTasks() {
    this.tasks = this.apiService.getTasks();
  }

  /**
   * onSubmit - Submits the reactive form and creates a new task.
   */
  public createTask() {
    this.apiService.createTask(this.taskForm.value).subscribe((response: HttpResponse<Task>) => {
      console.log(response);
      this.getTasks();
    });
  }

  /**
   * deleteTask - Delete a task based on the ID.
   */
  public updateTask(task: Task) {
    this.apiService.updateTask(task).subscribe((response: HttpResponse<Task>) => {
      console.log(response);
      this.getTasks();
    });
  }

  /**
   * deleteTask - Delete a task based on the ID.
   */
  public deleteTask(taskId: number) {
    this.apiService.deleteTask(taskId).subscribe((response: HttpResponse<Task>) => {
      console.log(response);
      this.getTasks();
    });
  }

}
