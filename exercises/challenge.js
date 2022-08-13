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

| Method            | Parameters | Return  | Notes                                           |
| ----------------- | ---------- | ------- | ---------------------------------------------   |
| `aircraftCount()` | None       | Integer | Count the number of aircraft's in the queue.    |
| `enqueue()`       | Aircraft   | None    | Add an aircraft to the queue.                   |
| `dequeue()`       | None       | Aircraft| Remove an aircraft from the queue and return it.|

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
    // add aircraft to the queue array
    this.aircraftQueue.push(aircraft)
}

ATCQueue.prototype.dequeue = function () {
    // variable for saving the index of plane
    let q = 0
    // variable to save a plane for comparison 
    let plane = this.aircraftQueue[q]
    //console.log('plane list before splice', this.aircraftQueue)
    // we want to iterate over the array, compare the current item to the previous and if it has higher priority, assign it to the variable
    this.aircraftQueue.forEach((item, i) => {
        //console.log(`Array item ${i} ===> ${item.type} ${item.size}  vs saved var ===> ${plane.type} ${plane.size} and saved q ====> ${q}`)
        // test the array item vs the already saved plane for type
        if (plane.type === 'passenger' && item.type === 'passenger') {
            // if they are both passenger planes, test for size
            if (plane.size === 'large' && item.type === 'large') {
            //if they are both large, do nothing, and the one saved already has priority
            // else, if the saved plane is large, it get's priority    
            } else if (plane.size === 'large') {   
            // else, if the array item is large, save the array item to the plane variable and it's index to the index var.
            } else if (item.size === 'large') {
                plane = item
                q = i
            }
        // if not both the saved plane and the array item are passengers, check the array item to see if it is passenger, if it is, save it to the plane variable and it's index to the index var.
        } else if ( item.type === 'passenger') {
                plane = item
                q = i
        // else, if both are cargo - 
        } else if (plane.type === 'cargo' && item.type === 'cargo') {
            // we check them both for size, if they are both large, the saved one remains
            if (plane.size === 'large' && item.size === 'large') {
            // otherwise, check the saved plane for size, if its large, it has priority
            } else if (plane.size === 'large') {    
            // otherwise, if the array item is large, save it to the variable and it's index to the index var.
            } else if (item.size === 'large') {
                plane = item
                q = i
            }
        }
    })
    //use the index variable to remove the selected plane from the queue array
    this.aircraftQueue.splice(q, 1)
    //console.log('plane list after splice', this.aircraftQueue)
    // return the info of the plane that was removed
    return plane   
}

// DO NOT MODIFY
module.exports = ATCQueue