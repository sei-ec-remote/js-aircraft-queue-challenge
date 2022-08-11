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
| ------ | ---------- | ------ | ----- |
| `aircraftCount()` | None | Integer | Count the number of aircraft's in the queue. |
| `enqueue()` | Aircraft | None | Add an aircraft to the queue. |
| `dequeue()` | None | Aircraft | Remove an aircraft from the queue and return it. (the aircraft that was removed) |

The process that manages the aircraft queue satisfies the following conditions.
-   There is no limit on the size of the aircraft queue. (OK)

-   Aircraft's are dequeued according to their priority. (shift or slice?)

    -   Passenger aircraft's have higher priority than cargo aircraft's. 

    -   If two aircraft's have the same type but different sizes, then the large
        aircraft has a higher priority.

    -   If there is more than one aircraft with the same type and size, then the
        aircraft that was enqueued earlier has higher priority.
*/
const ATCQueue = function () {
	this.aircraftQueue = []
}

ATCQueue.prototype.aircraftCount = function () {
    return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
    this.aircraftQueue.push(aircraft)
}

ATCQueue.prototype.dequeue = function () {
    const aircraftQueue = this.aircraftQueue

    // find values in the aircraft queue to prioritize them
    // 'aircraft' is being pushed into the queue based on it's priority
    const bigPass = aircraftQueue.find((aircraft) => {
        // return the size and type for big passenger types have first priority
        return aircraft.size === 'large' && aircraft.type === 'passenger'
    })

    const smPass = aircraftQueue.find((aircraft) => {
        return aircraft.size === 'small' && aircraft.type === 'passenger'
    })

    const bigCargo = aircraftQueue.find((aircraft) => {
        return aircraft.size === 'big' && aircraft.type === 'cargo'
    })


    const smCargo = aircraftQueue.find((aircraft) => {
        return aircraft.size === 'small' && aircraft.type === 'cargo'
    })


    const priority = bigPass || smPass || bigCargo || smCargo 

    // dequeue using shift? NOPE
    // MDN docs: The shift() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with the first element removed, you can use arr.slice(1) instead.
    // Unless I want to change the original array

    // aircraftQueue.slice(aircraftQueue.indexOf(priority), 1)
    // does not pass? After returning, does not remove aircrafts so we do have to modify original array
    // try shift
    aircraftQueue.shift(aircraftQueue.indexOf(priority), 1)

    // forgot to return
    return priority
    


}

// DO NOT MODIFY
module.exports = ATCQueue