export interface IUserData {
  id?: number;
  fullName: string;
  gender: string;
  email: string;
  birthDate: string;
  locationDetails: ILocationDetails;
  listOfHobbies: Array<string>;
  favoriteColor: string;
  amountOfSeats: number;
  motorType: string;
}

export interface ILocationDetails {
  country: string;
  city: string;
}
