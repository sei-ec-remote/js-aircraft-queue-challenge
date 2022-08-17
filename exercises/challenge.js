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
const ATCQueue = function () {
	this.aircraftQueue = []
    this.head = 0
    this.tail = 0
}

ATCQueue.prototype.aircraftCount = function () {
    return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
    this.aircraftQueue[this.tail] = aircraft
    this.tail++
}

ATCQueue.prototype.dequeue = function () {
    let toBeDequeued = []
    console.log('This is BEFORE dequeing:',this.aircraftQueue)
    // this.aircraftQueue
    //     .map((i, thisAircraft) => {
    //         // if(toBeDequeued.length === 0) {
    //         //     toBeDequeued.push(thisAircraft)
    //         //     return
    //         // }else 
    //         if(thisAircraft.type === 'passenger') {
    //             if(thisAircraft.size === 'large')
    //             this.aircraftQueue.splice(i, 1)
    //             this.aircraftQueue.unshift(thisAircraft)
    //             return
    //         } else if(thisAircraft.type === 'cargo') {
    //             this.this.aircraftQueue.splice(i, 1)
    //             this.aircraftQueue.push(thisAircraft)
    //             return thisAircraft
    //         } else {
    //             toBeDequeued.push(thisAircraft)
    //         }
    // })
    // async function toBeDequeued
    const largePassenger = this.aircraftQueue.filter((plane, i) => {
        if(plane.type === 'passenger' && plane.size === 'large') {
            // console.log(plane)
            // this.aircraftQueue.splice(i, 1)
            toBeDequeued.unshift(plane)
            return
        }
    })
    const smallPassenger = this.aircraftQueue.filter((plane, i) => {
        if(plane.type === 'passenger' && plane.size === 'small') {
            // console.log(plane)
            // toBeDequeued.unshift(plane)
            // this.aircraftQueue.splice(i, 1)
            toBeDequeued.unshift(plane)
            return
        }
    })
    const largePlanes = this.aircraftQueue.filter((plane, i) => {
        if(plane.size === 'large' && plane.type !== 'passenger') {
            // console.log(plane)
            // toBeDequeued.unshift(plane)
            // this.aircraftQueue.splice(i, 1)
            toBeDequeued.unshift(plane)
            return
        }
    })
    const smallPlanes = this.aircraftQueue.filter((plane, i) => {
        if(plane.size === 'small' && plane.type !== 'passenger') {
            // console.log(plane)
            // toBeDequeued.unshift(plane)
            // this.aircraftQueue.splice(i, 1)
            toBeDequeued.unshift(plane)
            return
        }
    })
    
    this.aircraftQueue = toBeDequeued
    console.log('This is after dequeuing:',this.aircraftQueue)
    // this.aircraftQueue.sort((a,b) => {
    //     if(a.type === 'cargo' && b.type === 'passenger') {
            
    //         return 1
    //     }
    //     else return 0
    // })
    // console.log(this.aircraftQueue)
    this.aircraftQueue.map(aircraft => this.aircraftQueue.pop())
    
    return 
}

// DO NOT MODIFY
module.exports = ATCQueue