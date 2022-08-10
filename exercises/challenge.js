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
    // an array of objects in the following format at minimum
    // {type: (passenger or cargo), size: (small or large)}
}

ATCQueue.prototype.aircraftCount = function () {
// counts the number of aircraft in the queue
// there is no limit to the size of the queue
}

ATCQueue.prototype.enqueue = function (aircraft) {
// pushes the aircraft to the aircraftQueue array
}

ATCQueue.prototype.dequeue = function () {
    // this sorts the queue based on the following conditions:
    ////////
    // if (aircraft.type === cargo), it is lower priority
    // it (aircraft1.type === aircraft2.type && aircraft1.size === small), it has lower priority
        // else if (aircraft2.size === small), it has lower priority
    // if (aircraft1.type === aircraft2.type && aircraft1.size === aircraft2.size), aircraft2 has lower priority
    ////////
    // this returns an aircraft name
}

// DO NOT MODIFY
module.exports = ATCQueue