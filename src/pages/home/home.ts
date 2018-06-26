import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // variable assign globally

  scoreA=0;
  scoreB=0;

  
  constructor(public navCtrl: NavController) {

  }

  
  onclickA(){
    this.scoreA +=3;
    console.log(this.scoreA);
  
  }
  onclickAA(){
    this.scoreB +=3;
    console.log(this.scoreB);
  
  }

  onclickB(){
      this.scoreA +=2;
      console.log(this.scoreA);
    
  }
  onclickBB(){
    this.scoreB +=2;
    console.log(this.scoreB);
  }

  onclickC(){
    this.scoreA +=1;
    console.log(this.scoreA);
    
    }
    onclickCC(){
      this.scoreB +=1;
      console.log(this.scoreB);
    }
      

    Reset(){
      this.scoreA=0;
      this.scoreB=0;

    }
      
}
