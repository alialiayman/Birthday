import { Component } from '@angular/core';
import { MockDirectiveResolver } from '@angular/compiler/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Birthday';

  modiDOB : Date = new Date(2003,10,24,0,0,0,0); //10 means november javascript month is off by one month - month is zero based
  minnaDOB : Date = new Date(2006,8,9,0,0,0,0); 
  nohaDOB : Date = new Date(2008,2,2,0,0,0,0); 
  berryDOB : Date = new Date(2017,1,17,0,0,0,0); 

  modiAge: string = ((Date.now() - +this.modiDOB)/ 31536000000).toFixed(2);
  minnaAge: string = ((Date.now() - +this.minnaDOB)/ 31536000000).toFixed(2);
  nohaAge: string = ((Date.now() - +this.nohaDOB)/ 31536000000).toFixed(2);
  berryAge: string = ((Date.now() - +this.berryDOB)/ 31536000000).toFixed(2);

  modi15thBirthday = new Date(this.modiDOB.getFullYear() + 15,this.modiDOB.getMonth(),this.modiDOB.getDate());
  minna15thBirthday = new Date(this.minnaDOB.getFullYear() + 15,this.minnaDOB.getMonth(),this.minnaDOB.getDate());
  noha15thBirthday = new Date(this.nohaDOB.getFullYear() + 15,this.nohaDOB.getMonth(),this.nohaDOB.getDate());
  berry15thBirthday = new Date(this.berryDOB.getFullYear() + 15,this.berryDOB.getMonth(),this.berryDOB.getDate());

  modiRemaining: string = ((+this.modi15thBirthday  - Date.now())/ 86400000).toFixed(2);
  minnaRemaining: string = ((+this.minna15thBirthday  - Date.now())/ 86400000).toFixed(2);
  nohaRemaining: string = ((+this.noha15thBirthday  - Date.now())/ 86400000).toFixed(2);
  berryRemaining: string = ((+this.berry15thBirthday  - Date.now())/ 86400000).toFixed(2);

}
