import { Component } from '@angular/core';
import { Iplayer } from './shared/models/players';
import { playersArr } from './shared/consts/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
 searchedPlayer:string = '';
  playersArr:Array<Iplayer> = playersArr
  title1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
  title = 'pipe'

  CourseDetails = {
    title:'Mean Stack',
    students: 12345678,
    rating: 4.5,
    price:199.0,
    releaseDate:new Date(2025,1,26),
    currency:199
  }


}
