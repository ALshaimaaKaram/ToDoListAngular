import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itask } from '../Models/itask';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpService: HttpClient) { }


getAllTasks(): Observable<Itask[]> {
  const httpOption = {
    headers: new HttpHeaders({
      'content-type': 'Application/JSON'
    })
  }

  return this.httpService.get<Itask[]>("../../assets/Tasks_Data.json", httpOption);
}
}
