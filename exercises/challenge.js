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
-   Aircraft are dequeued according to their priority.
    -   Passenger aircraft have higher priority than cargo aircraft.
    -   If two aircraft have the same type but different sizes, then the large
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
    return 'aircraft added'
}

ATCQueue.prototype.dequeue = function () {
    let removedAircraft
    if (this.aircraftQueue.find(aircraft => aircraft.type === 'passenger' && aircraft.size === 'large')) {
        // console.log('we found a large passenger plane')
        const index = this.aircraftQueue.findIndex(aircraft => aircraft.type === 'passenger' && aircraft.size === 'large')
        removedAircraft = this.aircraftQueue.splice(index, 1)
    } else if (this.aircraftQueue.find(aircraft => aircraft.type === 'passenger' && aircraft.size === 'small')) {
        // console.log('we found a small passenger plane')
        const index = this.aircraftQueue.findIndex(aircraft => aircraft.type === 'passenger' && aircraft.size === 'small')
        removedAircraft = this.aircraftQueue.splice(index, 1)
    } else if (this.aircraftQueue.find(aircraft => aircraft.type === 'cargo' && aircraft.size === 'large')) {
        // console.log('we found a large cargo plane')
        const index = this.aircraftQueue.findIndex(aircraft => aircraft.type === 'cargo' && aircraft.size === 'large')
        removedAircraft = this.aircraftQueue.splice(index, 1)
    } else if (this.aircraftQueue.find(aircraft => aircraft.type === 'cargo' && aircraft.size === 'small')) {
        // console.log('we found a small cargo plane')
        const index = this.aircraftQueue.findIndex(aircraft => aircraft.type === 'cargo' && aircraft.size === 'small')
        removedAircraft = this.aircraftQueue.splice(index, 1)
    } else {
        return 'No aircraft remain in the queue'
    }
    // console.log('this aircraft was removed: ', removedAircraft.pop())
    return removedAircraft.pop()
}

// const newQueue = new ATCQueue

// console.log('this is the newQueue', newQueue)
// console.log('this is the enqueue function, it should add an aircraft:', newQueue.enqueue({type: 'passenger', size: 'large'}))
// console.log('this is the enqueue function, it should add an aircraft:', newQueue.enqueue({type: 'passenger', size: 'small'}))
// console.log('this is the enqueue function, it should add an aircraft:', newQueue.enqueue({type: 'cargo', size: 'large'}))
// console.log('this is the enqueue function, it should add an aircraft:', newQueue.enqueue({type: 'cargo', size: 'small'}))
// console.log('this is the aircraft count, it should return an integer', newQueue.aircraftCount())
// console.log('this is the queue in newQueue', newQueue.aircraftQueue)
// console.log(newQueue.aircraftQueue.indexOf({type: 'passenger', size: 'large'}))
// newQueue.dequeue()
// console.log('this is the updated queue in newQueue', newQueue.aircraftQueue)
// console.log('this is the aircraft count, it should return an integer', newQueue.aircraftCount())
// newQueue.dequeue()
// console.log('this is the updated queue in newQueue', newQueue.aircraftQueue)
// newQueue.dequeue()
// console.log('this is the updated queue in newQueue', newQueue.aircraftQueue)
// newQueue.dequeue()
// console.log('this is the updated queue in newQueue', newQueue.aircraftQueue)

// DO NOT MODIFY
module.exports = ATCQueue