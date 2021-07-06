import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

// let moveSqure = trigger('moveSquare' , [
//   state('left' ,style({
//     opacity : 0 ,
//     backgroundColor : 'red',
//     transform : 'translateX(100%)'
//   })),
//   state('right' , style({
//     opacity : 1 ,
//     backgroundColor : 'black'
//   })) ,
//   transition(':enter' , [
//     style({
//       right: '-200%',
//     }),
//     animate('.5s ease-in-out', style({
//       right: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.8)'
//   }))
//   ]),
//   transition('left => right' , [
//     animate(100, style({ transform: 'translateX(100%)' }))


//   ]

//   )
// ])

let spinningLetter = trigger('spinningLetter' , [

  transition(':enter' , [
    style({
      opacity : .1
    }) ,
    animate(1000 , style({transform : 'translateX(100vw) rotate(180deg)'}))
  ])
])

let moveSquare = trigger('moveSquare' , [

  transition(':enter' , [
    style({
      opacity : .5 ,
    }) ,
    animate(1000, style({ transform: 'translateX(100vw) rotate(180deg)'}))
  ]),
  transition('void => startUp' , [
    animate(1000 , style({ transform :  'translateX(100vw) rotate(180deg)' }))
  ]),
])






let daytoNite = trigger('daytoNight' , [
  state('backGround1' , style({
    backgroundColor : 'skyblue'
  })
  ) ,
  state('backGround2' , style({
     backgroundColor : 'darkblue'
  }))
  ])

let moveSunRight = trigger('moveSunR' , [
  state('leftSide' , style({
    color : 'red' ,
    opacity : 100
  })) ,
  state('endSlide' , style({
    color : 'white'
  })),
  transition('leftSide => endSlide' , [
    animate('2s')
  ])
])

let openClose =  trigger('openClose', [
  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    opacity: 0.8,
    backgroundColor: '#c6ecff'
  })),
  transition('* => closed', [
    animate('100ms')
  ]),
  transition('* => open', [
    animate('0.5s')
  ]),
])

let moveSun = trigger('moveSun' , [
  state('sunStart' , style({
    transition : 'translate(-100%)'
  })),
  state('sunEnd' ,
  style({
    transform : 'rotate(0deg)'
  })),
  transition('sunStart => *', [
    animate('1s')
  ])
])

let moveSun2 = trigger('moveSun' , [
  transition(':enter', [
    animate(100, style({ transform: 'translateX(100%)' }))
  ]),
])


export {openClose , daytoNite , moveSun , moveSun2 , moveSquare , spinningLetter}
