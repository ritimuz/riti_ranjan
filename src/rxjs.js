import Rx from 'rxjs/Rx'
const btn = document.getElementById('btn')



const btnStream$ = Rx.Observable.fromEvent(btn, 'click')
btnStream$.subscribe(
  e => {
    console.log(e)
  },
  err => {
    console.log(err)
  },
  () => {
    console.log('completed')
  }
)

const input = document.querySelector('input')
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup')

inputStream$.subscribe(
  e => {
    console.log(e.target.value)
  },
  err => {
    console.log(err)
  },
  () => {
    console.log('completed keyup')
  }
)

var myMap = new Map()
var keyString = "a string",
    keyObj = {},
    keyFunc = () => {}

myMap.set(keyString, "value associated with a string")
myMap.set(keyObj, "value associated with a object")
myMap.set(keyFunc, "value associated with a function")

myMap.size

console.log(myMap.get(keyString))
myMap.get(keyObj)
myMap.get(keyFunc)

myMap.get("a string")
myMap.get({})
myMap.get(() => {})
