import { Component, inject, signal } from '@angular/core';
import { HttpService } from '../../services/http';
import { DisplayUserType } from '../../types/display-user';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {
  svc = inject(HttpService);
  users = signal<DisplayUserType[]>([]);
  isBusy = false;
  hasFetched = false;

  loadUsers() {
    this.isBusy = true;
    this.svc.fetchAllUsers().subscribe({
      next: (res) => {
        this.users.set(res);
        this.isBusy = false;
        this.hasFetched = true;
      },
      error: (e) => {
        console.log(e);
        this.isBusy = false;
      },
      complete: () => console.log('done'),
    });
  }
}
