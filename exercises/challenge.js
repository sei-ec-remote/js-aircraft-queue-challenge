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
// Count the number of aircraft's in the queue. |
ATCQueue.prototype.aircraftCount = function () {
    return this.aircraftQueue.length
}
// Add an aircraft to the queue. 
// ex. type: 'passenger', size: 'large' 
// type: `passenger` or `cargo` size: `small` or `large`
ATCQueue.prototype.enqueue = function (aircraft) {
    let index = null

    // if C && S
    if (aircraft.type === `cargo` && 
    aircraft.size === `small`) {
        // There no lower priority so goes at start of the array.
        this.aircraftQueue.unshift(aircraft)
    }

    // if CL
    if (aircraft.type === `cargo` && 
        aircraft.size === `large`) {
            // Grab index of first CL
            index = this.aircraftQueue.findIndex(ac => (ac.type === `cargo` && ac.size === `large`))
            
            // if no we dont have it. 
            if (index === -1) {
                // index P (if PL or PS is not matter.)
                index = this.aircraftQueue.findIndex(ac => ac.type === `passenger`)
                    //if no - push
                    if (index === -1) {
                        this.aircraftQueue.push(aircraft)
                    }
                    // if yes - splice
                    else {
                        this.aircraftQueue.splice(index, 0, aircraft)
                    }
            }
            // if yes - splice(ac, CL)
            else {
                this.aircraftQueue.splice(index, 0, aircraft)
            }
        }
    // // if P && S
    if (aircraft.type === `passenger` && 
        aircraft.size === `small`) {
            index = this.aircraftQueue.findIndex(ac => {
                if (ac.type === `passenger`) {
                    if (ac.size === `small`) {
                        return true}
                }
            }) 

            // if no - getIndex (PL)
            if (index === -1) {
                index = this.aircraftQueue.findIndex(
                    (ac) => ac.type === `passenger` && ac.size === `large`) 

                if (index === -1) {
                    this.aircraftQueue.push(aircraft)
                }
                else {
                    this.aircraftQueue.splice(index, 0, aircraft)
                }
            }
            // if yes - getIndex(PL)
            else {this.aircraftQueue.splice(index, 0, aircraft)}
        }
   
    // // if P && L
    if (aircraft.type === `passenger` && 
        aircraft.size === `large`){
        // check (PL).
        index = this.aircraftQueue.findIndex(ac => (ac.type === `passenger` && ac.size === `large`))
        
        // if no - findIndex(len)
        if (index === -1) {
            this.aircraftQueue.push(aircraft)
        }
        else {this.aircraftQueue.splice(index, 0, aircraft)
        }
    }
        
        // 
}

// Remove an aircraft from the queue and return it. |
ATCQueue.prototype.dequeue = function () {
    return this.aircraftQueue.pop()
}

// DO NOT MODIFY
module.exports = ATCQueue