/*
=============== JS Aircraft Queue Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(js-aircraft-queue-challenge)
      Don't worry about capitalization.
*/

/*
Question 1

We have been contracted to write a software subsystem for an air traffic control
system. This software manages a queue of aircraft's and prioritizes the orders of
take offs and landings based on the aircraft's type and size. Write a
constructor function, `ATCQueue`, that creates and manages the aircraft queue.

Aircraft's are represented by objects that have at least, but are not limited to,
the following properties.

| Property | Value |
| - | - |
| `type` | `passenger` or `cargo` |
| `size` | `small` or `large` |

The aircraft queue should implement the following interface.

| Method | Parameters | Return | Notes |
| - | - | - | - |
| `aircraftCount()` | None | Integer | Count the number of aircraft's in the queue. |
| `enqueue()` | Aircraft | None | Add an aircraft to the queue. |
| `dequeue()` | None | Aircraft | Remove an aircraft from the queue and return it. |

The process that manages the aircraft queue satisfies the following conditions.
-   There is no limit on the size of the aircraft queue.
-   Aircraft's are dequeued according to their priority.
    -   Passenger aircraft's have higher priority than cargo aircraft's.
    -   If two aircraft's have the same type but different sizes, then the large
        aircraft has a higher priority.
    -   If there is more than one aircraft with the same type and size, then the
        aircraft that was enqueued earlier has higher priority.
*/
const _ = require('lodash')

const ATCQueue = function () {
	this.aircraftQueue = []
}

ATCQueue.prototype.aircraftCount = function () {
    // console.log(this.aircraftQueue)
    return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
    let simObj = this.aircraftQueue.filter(ell => _.isEqual(aircraft, ell))
    //console.log("SIMOBJ:", simObj)
    //console.log(simObj.constructor === Array)
    if(simObj.length < 1){
        aircraft.order = 1
        this.aircraftQueue.push(aircraft)
    }
    else{
        let max = 1
        simObj.forEach(ell => {
            if(ell.order > max){
                max = ell.order
            }
        })
        aircraft.order = max + 1
        this.aircraftQueue.push(aircraft)
    }
    // console.log(this.aircraftQueue)
    
}

// let tester = [
//     { type: 'cargo', size: 'small', order: 1 },
//     { type: 'passenger', size: 'small', order: 1 },
//     { type: 'passenger', size: 'large', order: 1 },
//     { type: 'passenger', size: 'large', order: 2 },
//     { type: 'cargo', size: 'large', order: 1 }
//   ]

// function compare(ell1, ell2){
//     final = true
//     for (const [key, value] of Object.entries(ell1)) {
//         if(ell2[key] != value){
//             final = false
//         }
//     }
//     return final
//     }

// const order = [
//     {type: 'passenger', size: 'large'},
//     {type: 'passenger', size: 'small'},
//     {type: 'cargo', size: 'large' },
//     {type: 'cargo', size: 'small' }]

// order.every(ord => {
//     let matching = tester.filter(ell => compare(ord, ell))
//     console.log(matching)
//     let final
//     if(matching.length > 0){
//         let max = 1
//         matching.forEach(ell => {
//             if(ell.order > max){
//                 max = ell.order
//             }
//         })
//         let mySearch = {...ord, order: max}
//         console.log("mysearch: ", mySearch)
//         let idx = tester.findIndex(x => _.isEqual(mySearch, x))
//         tester.splice(idx, 1)
//         console.log("tester: ",tester)
//         final = false
//     }
//     else{
//         final = true
//     }
   
//     return final

// })

ATCQueue.prototype.dequeue = function () {
   //hard coding it
//    console.log("//////////////////")
//    console.log(this.aircraftQueue)
//    console.log("//////////////////")

    function compare(ell1, ell2){
    final = true
    for (const [key, value] of Object.entries(ell1)) {
        if(ell2[key] != value){
            final = false
        }
    }
    return final
    }

   const order = [
    {type: 'passenger', size: 'large'},
    {type: 'passenger', size: 'small'},
    {type: 'cargo', size: 'large' },
    {type: 'cargo', size: 'small' }]
    let taken 
    order.every(ord => {
        let matching = this.aircraftQueue.filter(ell => compare(ord, ell))
        // console.log(matching)
        let final
        if(matching.length > 0){
            let max = []
            matching.forEach(ell => {
                max.push(ell.order)
            })
            // console.log("max: ", max)
            let lookingidx = Math.min(...max)
            // console.log("lookingidx: ",lookingidx)
            let mySearch = {...ord, order: lookingidx}
            taken = mySearch
            // console.log("mysearch: ", mySearch)
            let idx = this.aircraftQueue.findIndex(x => _.isEqual(mySearch, x))
            this.aircraftQueue.splice(idx, 1)
            // console.log("que: ",this.aircraftQueue)
            final = false
        }
        else{
            final = true
        }
       
        return final
    
    })
    // console.log("taken: \n", taken)
    return taken
   
}

// DO NOT MODIFY
module.exports = ATCQueue