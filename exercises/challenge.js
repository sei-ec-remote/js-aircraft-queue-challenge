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
}

ATCQueue.prototype.aircraftCount = function () {
	return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
	this.aircraftQueue.push(aircraft)
}

ATCQueue.prototype.dequeue = function () {
	const aircraftQueue = this.aircraftQueue

	// find the first plane in the queue for each combination of type and size
	const bigPassenger = aircraftQueue.find((aircraft) => {
		return aircraft.type === 'passenger' && aircraft.size === 'large'
	})
	const smallPassenger = aircraftQueue.find(
		(aircraft) => aircraft.type === 'passenger' && aircraft.size === 'small'
	)
	const bigCargo = aircraftQueue.find(
		(aircraft) => aircraft.type === 'cargo' && aircraft.size === 'large'
	)
	const smallCargo = aircraftQueue.find(
		(aircraft) => aircraft.type === 'cargo' && aircraft.size === 'small'
	)

	// skip any categories for which we didn't find a plane, save the first of
	// these options for which we did find a plane as `firstPriority`
	const firstPriority = bigPassenger || smallPassenger || bigCargo || smallCargo

	// remove the plane selected above from the queue
	aircraftQueue.splice(aircraftQueue.indexOf(firstPriority), 1)

	// return the plane with highest priority
	return firstPriority
}

// ALTERNATE SOLUTION

// ATCQueue.prototype.dequeue = function () {
//   let index = 0
//   let ac = this.aircraftQueue[index]
//
//   this.aircraftQueue.forEach((qAC, qIndex) => {
//     const diffSize = qAC.size === 'large' && ac.size !== 'large'
//     const diffType = qAC.type === 'passenger' && ac.type !== 'passenger'
//     const sameType = qAC.type === ac.type
//
//     if (diffType || (sameType && diffSize)) {
//       index = qIndex
//       ac = this.aircraftQueue[index]
//     }
//   })
//
//   this.aircraftQueue.splice(index, 1)
//
//   return ac
// }

// DO NOT MODIFY
module.exports = ATCQueue