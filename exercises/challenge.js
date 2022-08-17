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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ATCQueue = function () {
	this.aircraftQueue = []
    // shouldn't have to do anything here I think.
    // this.aircraftQueue = []
}

ATCQueue.prototype.aircraftCount = function () {
    // needs to return the length in aircraftCount
    // how many are in queue
    return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
    // push aircraft(s) into the queue(enqueue)
    // push method
    this.aircraftQueue.push(aircraft)
}

ATCQueue.prototype.dequeue = function () {
    // need to reassign variable here
    // in the queue
    // pop the aircraft
    const aircraftQueue = this.aircraftQueue
    // this is where the main logic will take place
    // since this is where all the aircrafts are released
    // create logic according to the conditions above

    // type - passenger or cargo
    // size - small or large
    // passenger over cargo
    // same type buy different size, larger has higher priority
    // if both type and size are the same, aircraft that was enqueue earlier has higher priority
    const largePassenger = aircraftQueue.find((aircraft) => {
        // return the size and type for "passenger"
        return aircraft.type === "passenger" && aircraft.size === "large"
    })
    const smallPassenger = aircraftQueue.find((aircraft) => {
        return aircraft.type === "passenger" && aircraft.size === "small"
    })
    const largeCargo = aircraftQueue.find((aircraft) => {
        return aircraft.type === "cargo" && aircraft.size === "large"
    })
    const smallCargo = aircraftQueue.find((aircraft) => {
        return aircraft.type === "cargo" && aircraft.size === "small"
    })

    const highPriority = largePassenger || smallPassenger || largeCargo || smallCargo

    // splice to remove an aircraft at index of ...
    aircraftQueue.splice(index, 1)
    return aircraft
}



// DO NOT MODIFY
module.exports = ATCQueue