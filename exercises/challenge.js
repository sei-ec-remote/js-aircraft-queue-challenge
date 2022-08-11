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
| `aircraftCount()` | None | Integer | Count the number of aircraft in the queue. |
| `enqueue()` | Aircraft | None | Add an aircraft to the queue. |
| `dequeue()` | None | Aircraft | Remove an aircraft from the queue and return it. |

The process that manages the aircraft queue satisfies the following conditions.
-   There is no limit on the size of the aircraft queue.
-   Aircraft are dequeued according to their priority.
    -   Passenger aircraft have higher priority than cargo aircraft.
    -   If two aircraft have the same type but different sizes, then the large
        aircraft has a higher priority.
    -   If there is more than one aircraft with the same type and size, then the
        aircraft that was enqueued earlier has higher priority.
*/
const ATCQueue = function () {
	this.aircraftQueue = []
    // an array of objects in the following format at minimum
    // {type: (passenger or cargo), size: (small or large)}
}

ATCQueue.prototype.aircraftCount = function () {
// counts the number of aircraft in the queue
// there is no limit to the size of the queue
    return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
// pushes the aircraft to the aircraftQueue array
    this.aircraftQueue.push(aircraft)
}

ATCQueue.prototype.dequeue = function () {
    // this sorts the queue(removes from queue) based on the following conditions:

    ////////
    // if (aircraft.type === cargo), it is lower priority
    // we want to REMOVE FROM ARRAY (splice)
    // so, let's find out 
    while (this.aircraftQueue.length > 0) {
        let filteredPassenger = this.aircraftQueue.find(aircraft => aircraft.type === "passenger")
        if (filteredPassenger) {
            const passengerIdx = this.aircraftQueue.findIndex((aircraft) => aircraft === filteredPassenger)
            const removedValue =  this.aircraftQueue.splice(passengerIdx, 1)
            return removedValue[0]
            // return(filteredPassenger);
        } else {
            const removedValue = this.aircraftQueue.splice(-1,1)
            return removedValue[0]
        }
    }
    
    // it (aircraft1.type === aircraft2.type && aircraft1.size === small), it has lower priority
        // else if (aircraft2.size === small), it has lower priority
    // if (aircraft1.type === aircraft2.type && aircraft1.size === aircraft2.size), aircraft2 has lower priority
    ////////
    // this returns an aircraft name

    // general remove from queue function
    // this general one should go last in order iirc
    return this.aircraftQueue.splice(-1,1)
}

// DO NOT MODIFY
module.exports = ATCQueue