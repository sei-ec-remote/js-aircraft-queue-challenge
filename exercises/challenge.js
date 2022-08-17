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

    -   If two aircraft's have the same type but different sizes, then the large aircraft has a higher priority.
    
    -   If there is more than one aircraft with the same type and size, then the
        aircraft that was enqueued earlier has higher priority.
*/
const largePassengerQueue = []
const smallPassengerQueue = []
const largeCargoQueue = []
const smallCargoQueue = [] 


const ATCQueue = function () {
    // create the aircraft queue array
	if (this.aircraftQueue.length === 0){
        return 0
    }
}

ATCQueue.prototype.aircraftCount = function () {
    // get the amount of aircraft in the array
    return this.aircraftQueue.length()

}

ATCQueue.prototype.enqueue = function (aircraft) {
    // add index order value as key value pair


    // SHIFT (takes off the first) AND PUSH ( adds to the end)

    if(aircraft.type === passenger && aircraft.size === large){
        largePassengerQueue.push() 
    } else if(aircraft.type === passenger && aircraft.size === small){
        smallPassengerQueue.push()
    } else if(aircraft.type === cargo && aircraft.size === large){
        largeCargoQueue.push()
    } else if(aircraft.type === cargo && aircraft.size === small){
        smallCargoQueue.push()
    }
    // sorts the list by priority

    this.largeCargoQueue.push(aircraft)

}

ATCQueue.prototype.dequeue = function () {
    // unload the aircraft based on the conditions
    if(largePassengerQueue !== []){
        return largePassengerQueue.shift()
    } else if(smallPassengerQueue !== []){
        return smallPassengerQueue.shift()
    } else if(largeCargoQueue !== []){
        return largeCargoQueue.shift()
    } else if(smallCargoQueue !== []){
        return smallCargoQueue.shift()
    } else { return }

}

// DO NOT MODIFY
module.exports = ATCQueue