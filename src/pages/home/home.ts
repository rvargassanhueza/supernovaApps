import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
  

export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit(){

    const play = document.getElementById('play');
    const stop = document.getElementById('pause');
    const loader = document.getElementById('loader');
  
    const file = new Audio ('http://104.131.18.232/proxy/supernova?mp=/stream;');
  
    file.play();
      play.style.display ="none";
      loader.style.display ="block";
      stop.style.display= "none";
  
    file.addEventListener('playing',function(){
      loader.style.display ="none";
      play.style.display="none";
      stop.style.display="block";
      });
  
    file.addEventListener('waiting',function(){
      loader.style.display ="block";
      play.style.display="none";
      stop.style.display="none";
    });
  
    stop.addEventListener('click', function(){
      file.pause();
      play.style.display = "block";
      stop.style.display = "none";
      loader.style.display = "none";
    });
  
    play.addEventListener('click', function(){
      file.play();
      play.style.display = "none";
      stop.style.display = "block";
      loader.style.display = "none";
    });

  }
}


