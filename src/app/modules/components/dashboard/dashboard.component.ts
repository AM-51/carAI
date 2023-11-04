import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUserData } from 'src/app/shared/models/IUserData';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import { ApexTitleSubtitle } from 'ng-apexcharts';
import { IGroupObject } from 'src/app/shared/models/IGroupObject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: Array<IUserData> = [];
  visited: string = '0';
  completed: string = '0';
  private usersSubscription: Subscription = new Subscription();

  seatsSeries: Array<number> = [];
  seatsChartLabels: Array<string> = [
    '2 Seats',
    '3 Seats',
    '4 Seats',
    '5 Seats',
    '6 Seats',
    '7 Seats',
  ];

  motorSeries: Array<number> = [];
  motorChartLabels: Array<string> = ['Electric', 'Fuel'];

  completedSeries: Array<number> = [];
  completedChartLabels: Array<string> = ['Completed'];

  hobbiesSeries: Array<any> = [];

  displayedColumns: Array<string> = ['gender', 'electric', 'fuel'];
  dataSource: Array<any> = [];

  constructor(private _users: UsersService) {}

  ngOnInit(): void {
    this.usersSubscription = this._users
      .getUsers()
      .subscribe((users: Array<IUserData>) => {
        this.users = users;
      });
    this.visited = localStorage.getItem('visitors') || '0';
    this.completed = localStorage.getItem('completedForms') || '0';
    this.groupEngineTypesByGender();
    this.motorSeries = this.groupMotorTypes();
    this.completedSeries = this.calcPercentages();
    if (this.users.length === 0) return;
    this.seatsSeries = this.groupAmountOfSeats();
    this.hobbiesSeries = this.groupHobbies();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  calcPercentages(): Array<number> {
    const visited: number = +this.visited;
    const completed: number = +this.completed;
    const completedPercentage: number = Math.round((completed / visited) * 100);
    if (isNaN(completedPercentage)) return [0];
    return [completedPercentage];
  }

  groupAmountOfSeats(): Array<number> {
    const amountOfSeats: Array<number> = [];
    const seats: IGroupObject = {
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    };
    this.users.forEach((user: IUserData) => {
      amountOfSeats.push(user.amountOfSeats);
    });
    amountOfSeats.forEach((amount: number) => {
      seats[amount] += 1;
    });
    return Object.values(seats);
  }

  groupMotorTypes(): Array<number> {
    const motorTypes: Array<string> = [];
    const motor: IGroupObject = {
      Electric: 0,
      Fuel: 0,
    };
    this.users.forEach((user: IUserData) => {
      motorTypes.push(user.motorType);
    });
    motorTypes.forEach((type: string) => {
      motor[type] += 1;
    });
    return Object.values(motor);
  }

  groupHobbies(): Array<{}> {
    const hobbies: Array<string> = [];
    const hobby: IGroupObject = {
      Basketball: 0,
      Gaming: 0,
      Chess: 0,
      Football: 0,
    };
    this.users.forEach((user: IUserData) => {
      user.listOfHobbies.forEach((hobby: string) => {
        hobbies.push(hobby);
      });
    });
    hobbies.forEach((hobbyName: string) => {
      hobby[hobbyName] += 1;
    });
    const seriesObject: any = {
      name: 'Number of users',
      data: Object.values(hobby),
    };
    return [seriesObject];
  }

  groupEngineTypesByGender(): void {
    const maleArray: Array<string> = [];
    const femaleArray: Array<string> = [];
    const maleObject: any = {
      gender: 'Male',
      Electric: 0,
      Fuel: 0,
    };
    const femaleObject: any = {
      gender: 'Female',
      Electric: 0,
      Fuel: 0,
    };
    this.users.forEach((user: IUserData) => {
      if (user.gender === 'Male') maleArray.push(user.motorType);
      else femaleArray.push(user.motorType);
    });
    maleArray.forEach((type: string) => {
      maleObject[type] += 1;
    });
    this.dataSource.push(maleObject);
    femaleArray.forEach((type: string) => {
      femaleObject[type] += 1;
    });
    this.dataSource.push(femaleObject);
  }
}
