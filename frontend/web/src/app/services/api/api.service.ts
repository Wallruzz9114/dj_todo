import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { Constants } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL: string = Constants.BASE_API_URL;

  constructor(private http: HttpClient) { }

  /**
   * getTasks - Returns the list of all tasks
   */
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiURL}/task/`);
  }

  /**
   * createTask - Creates a new task
   */
  public createTask(newTask: Task) {
    return this.http.post(`${this.apiURL}/task/`, newTask);
  }

  /**
   * updateTask - Updates a task
   */
  public updateTask(task: Task) {
    return this.http.put(`${this.apiURL}/task/${task.id}/`, task);
  }

  /**
   * deleteTask - Delete a task
   */
  public deleteTask(taskId: number) {
    return this.http.delete(`${this.apiURL}/task/${taskId}/`);
  }

}
