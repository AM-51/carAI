import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUserData } from 'src/app/shared/models/IUserData';
import { UsersService } from '../../services/users.service';
import { SnackService } from 'src/app/shared/services/snack.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({});
  public genders: Array<string> = ['Male', 'Female'];
  public amountOfSeats: Array<number> = [2, 3, 4, 5, 6, 7];
  public hobbies: Array<string> = ['Basketball', 'Gaming', 'Chess', 'Football'];
  public motorTypes: Array<string> = ['Electric', 'Fuel'];
  private maxDate: Date = new Date();
  private successMessage: string = 'Your request was sent successfully!';

  constructor(private _users: UsersService, private _snack: SnackService) {}

  ngOnInit(): void {
    this.saveVisitors();
    this.initForm();
  }

  ngOnDestroy(): void {
    this.userForm.reset();
    this._snack.closeSnackBar();
  }

  private initForm(): void {
    this.userForm = new FormGroup({
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      gender: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[^@]+@[^@]+.[a-zA-Z]{2,}$'),
      ]),
      birthDate: new FormControl(null, [Validators.required]),
      listOfHobbies: new FormControl(
        [],
        [Validators.required, Validators.minLength(1), Validators.maxLength(4)]
      ),
      favoriteColor: new FormControl(null, [Validators.required]),
      amountOfSeats: new FormControl(null, [
        Validators.required,
        Validators.min(2),
        Validators.max(7),
      ]),
      motorType: new FormControl(null, [Validators.required]),
      locationDetails: new FormGroup({
        country: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]),
        city: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]),
      }),
    });
  }

  public filterFutureDate = (d: Date | null): boolean => {
    const date: Date = d || new Date();
    return date <= this.maxDate;
  };

  public submitForm(): void {
    if (this.userForm.valid) {
      const userFormValues: IUserData = {
        fullName: this.userForm.value.fullName,
        gender: this.userForm.value.gender,
        email: this.userForm.value.email,
        birthDate: this.userForm.value.birthDate?.toDateString(),
        locationDetails: {
          country: this.userForm.value.locationDetails.country,
          city: this.userForm.value.locationDetails.city,
        },
        listOfHobbies: this.userForm.value.listOfHobbies,
        favoriteColor: this.userForm.value.favoriteColor?.hex,
        amountOfSeats: +this.userForm.value.amountOfSeats,
        motorType: this.userForm.value.motorType,
      };
      this._users.addUser(userFormValues);
      this.saveCompletedForm();
      this.userForm.reset();
      this._snack.openSnackBar(this.successMessage, 'Close');
    }
  }

  private saveVisitors(): void {
    const visitors: string = localStorage.getItem('visitors') || '0';
    localStorage.setItem('visitors', JSON.stringify(+visitors + 1));
  }

  private saveCompletedForm(): void {
    const completedForms: string =
      localStorage.getItem('completedForms') || '0';
    localStorage.setItem('completedForms', JSON.stringify(+completedForms + 1));
  }
}
