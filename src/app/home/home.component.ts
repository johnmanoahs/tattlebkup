import { Component, OnInit } from '@angular/core';
import { TripService } from './../trip.service';
import { UserService } from './../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	trips$;
	user$;
  constructor(private tripService: TripService, private  userService: UserService) { 

  }

 searchTrips(query){
 	console.log(query);
 	this.trips$ = this.tripService.searchTrips(query);
 }

 getUser(uid){
 	return this.userService.get(uid);
 }

}
