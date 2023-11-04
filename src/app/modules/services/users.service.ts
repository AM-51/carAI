import { Injectable } from '@angular/core';
import { IUserData } from 'src/app/shared/models/IUserData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersData: Array<IUserData> = [];
  private usersSubject = new BehaviorSubject<Array<IUserData>>(this.usersData);

  constructor() {
    const storedData = localStorage.getItem('usersData');
    if (storedData) {
      this.usersData = JSON.parse(storedData);
      this.usersSubject.next(this.usersData);
    }
  }

  addUser(data: IUserData): void {
    const id: number = new Date().getTime();
    data.id = id;
    this.usersData.push(data);
    this.saveToLocalStorage();
    this.usersSubject.next(this.usersData);
  }

  getUsers() {
    return this.usersSubject.asObservable();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('usersData', JSON.stringify(this.usersData));
  }
}
