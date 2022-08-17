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
   
class aircraft {
    constructor(type, size) {
        this.type = type;
        this.size = size;
    }
}

const flight1111 = new aircraft('passanger', 'large')
const flight2222 = new aircraft('passanger', 'large')

console.log('flight1111', flight1111)
console.log('flight2222', flight2222)

const ATCQueue = function () {
	this.aircraftQueue = []
    // console.log(this.aircraftQueue)
}


// ATCQueue.aircraft.push('flight1111')
// console.log('array', ATCQueue.aircraftQueue)

// const aircraftQueue = ATCQueue.aircraftQueue;
// aircraftQueue()



// Count the number of aircraft's in the queue.
ATCQueue.prototype.aircraftCount = function () {
    // find length of aircraftQueue 
    return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue= function (aircraft) {
    this.aircraftQueue.push(aircraft)
    // console.log(this)
    // console.log(this._items)
    // return this
}
console.log('test', ATCQueue.enqueue('flight'))

// |// `enqueue()` | Aircraft | None | Add an aircraft to the queue. |
// ATCQueue.prototype.enqueue = function (aircraft) {
//     this.aircraftQueue.push(aircraft)
// }

// ATCQueue.prototype.dequeue = function () {

//     //// find by poriety
const firstPriorety =  aircraft.type === 'passenger' && aircraft.size === 'large'
const secondPriorety =  aircraft.type === 'passenger' && aircraft.size === 'small'
const thirdPriorety =  aircraft.type === 'cargo' && aircraft.size === 'large'
const fourthPriorety =  aircraft.type === 'cargo' && aircraft.size === 'small'
//     // Passenger aircraft's have higher priority than cargo aircraft's.

//     //  If two aircraft's have the same type but different sizes, then the large
//     //  aircraft has a higher priority.

//     // If size is aircraft.size == large && aircraft.type
//     //  If there is more than one aircraft with the same type and size, then the
//     //   aircraft that was enqueued earlier has higher priority.
// }

// | Property | Value |
// | - | - |
// | `type` | `passenger` or `cargo` |
// | `size` | `small` or `large` |

// DO NOT MODIFY
module.exports = ATCQueue