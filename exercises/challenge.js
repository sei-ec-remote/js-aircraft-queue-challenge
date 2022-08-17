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
    this.priorityQueue = [null, null, null, null]
}
// Count the number of aircraft's in the queue. |
ATCQueue.prototype.aircraftCount = function () {
    return this.aircraftQueue.length
}

// Add an aircraft to the queue. 
// ex. type: 'passenger', size: 'large' 
// type: `passenger` or `cargo` size: `small` or `large`
ATCQueue.prototype.enqueue = function (aircraft) {
    let index = null
    let aircraftPriority = getAircraftPriority(aircraft)
    const queue = this.aircraftQueue

    // If the aircaft queue is empty we will just push the first craft on and set it's priority Queue to it's index 0
    if (this.aircraftQueue.length === 0){
        this.aircraftQueue.push(aircraft)
        this.priorityQueue[aircraftPriority] = 0
    }

    // If aircraftQ is not empty.
    else {
        // check if priory index been assinged. 
        // If it has then just splice it in it's place. (splice will handle the priority queue)
        if (this.priorityQueue[aircraftPriority] !== null) {
            splice(this.priorityQueue[aircraftPriority], aircraft, queue, this.priorityQueue)
        } 
        // If it has not been assinged yet. We need find out if there a higher priority one in.
        else {
            // need get the index for next higher priorty
            for (let indexPriority = aircraftPriority + 1; indexPriority <  this.priorityQueue.length; indexPriority++) {
                // if we find a higher priority aircraft assinged.
                if (this.priorityQueue[indexPriority] !== null) {
                    // Add one to the endex to everyting to the right of what as just inserted.
                    splice(this.priorityQueue[indexPriority], aircraft, queue, this.priorityQueue)
                    return
                }
            } 
            splice(queue.length, aircraft, queue, this.priorityQueue)
        }
    }
}

const splice = (index, aircraft, queue, priorityQueue) => {
    const aircraftPriority = getAircraftPriority(aircraft)
    
    queue.splice(index, 0, aircraft)
    
    // adjust the aircrasft priority array everyting to the right of what as just inserted.
    priorityQueue[aircraftPriority] = index
    for (let index = aircraftPriority + 1; index < priorityQueue.length; index++) {
        if (priorityQueue[index] !== null)
            priorityQueue[index]++
    }
}

const getAircraftPriority = aircraft => {
    if (aircraft.type === `cargo` && 
        aircraft.size === `small`) {
            return 0
    }
    // if CL
    if (aircraft.type === `cargo` && 
        aircraft.size === `large`) {
            return 1
    }
    // // if P && S
    if (aircraft.type === `passenger` && 
        aircraft.size === `small`) {
            return 2
    }
    // // if P && L
    if (aircraft.type === `passenger` && 
        aircraft.size === `large`){
            return 3
    }
}

// Remove an aircraft from the queue and return it. |
ATCQueue.prototype.dequeue = function () {
    for (let i = 0; i < this.priorityQueue.length; i++) {
        if (this.aircraftQueue.length === this.priorityQueue[i]) {
            this.priorityQueue[i] = null
            break
        }
    }
    return this.aircraftQueue.pop()
}

// DO NOT MODIFY
module.exports = ATCQueue