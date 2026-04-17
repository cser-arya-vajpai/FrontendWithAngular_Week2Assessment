import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DisplayUserType } from '../types/display-user';
import { UserType } from '../types/user-type';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private api = inject(HttpClient);
  private endpoint = 'https://api.escuelajs.co/api/v1';

  fetchAllUsers() {
    return this.api.get<DisplayUserType[]>(`${this.endpoint}/users`);
  }

  createUser(payload: UserType) {
    return this.api.post<DisplayUserType>(`${this.endpoint}/users/`, payload);
  }
}
