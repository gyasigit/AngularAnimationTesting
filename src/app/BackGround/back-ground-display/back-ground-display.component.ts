import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import {openClose , daytoNite , moveSun , moveSun2, moveSquare , spinningLetter} from './animations'


@Component({
  selector: 'app-back-ground-display',
  templateUrl: './back-ground-display.component.html',
  styleUrls: ['../back-ground-display/back-ground-display.component.css'] ,
  animations : [
    daytoNite ,
    moveSun ,
    moveSun2 ,
    openClose ,
    moveSquare ,
    spinningLetter
  ]
})

export class BackGroundDisplayComponent implements OnInit {

  width = 25
  height = 25
  show = true
  canMoveSun = true
  Toggled = 'Day'

  changeMyself = true

  moveSun(){
    this.canMoveSun = !this.canMoveSun
    console.log(this.canMoveSun)
  }

  changeColor(){
    this.show = !this.show
    console.log(this.show)
    if(this.show){
      this.Toggled = 'Day'
    }
    else {
      this.Toggled = 'Night'
    }
  }

  changeMe(){
    console.log('Changed')
  }

  ngOnInit(): void {
  }

}







  // constructor(private renderer: Renderer2) {
  //   this.renderer.setStyle(document.body, 'background-color', 'yellow');
  // }

  /*

   trigger('changeColor' , [
      state('sunColor1' ,
        style({
          transform: 'translateX(180deg)' ,
          color : 'red'
      })
      ) ,
      state('sunColor2' ,
        style({
          color : 'yellow'
        })) ,
        transition('* => *', style({ transform: 'translateX(180deg)' }))
    ])
  */
