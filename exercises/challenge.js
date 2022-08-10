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

// as long as we can figure out a way to unambiguously assign aircraft one value
// for its priority, we can implement a priority queue. let's give it a shot!
const ATCQueue = function () {
	this.aircraftQueue = [];
    // a bit silly and gimmicky, maybe, but i don't hate this *too* much
    this.aircraftOrder = 1000000000;
}

ATCQueue.prototype.aircraftCount = function () {
    return this.aircraftQueue.length;
}

ATCQueue.prototype._assignPriority = function(aircraft) {
    // using some clever string and number manipulation, we can attempt to
    // assign each aircraft one unambiguous priority value, then just construct
    // a minheap from those values.

    const typePriority = (aircraft.type === "passenger" ? 0 : 1);
    const sizePriority = (aircraft.size === "large" ? 0 : 1);
    const timePriority = aircraft.timestamp;

    // in this way, passenger aircraft will always have a smaller priority value
    // than cargo aircraft, large aircraft will always have a smaller priority
    // value than small aircraft, and smaller times will inherently have smaller
    // priority values than larger (later) times. this is perfect for minheap!
    const overallPriority = Number(`${typePriority}${sizePriority}${timePriority}`);

    aircraft.priority = overallPriority;
}

ATCQueue.prototype.enqueue = function (aircraft) {
    // preprocessing
    aircraft.timestamp = this.aircraftOrder++;
    this._assignPriority(aircraft);

    // insert into minheap!
    // push -- O(1)
    this.aircraftQueue.push(aircraft);
    let currentIndex = this.aircraftQueue.length - 1;

    // check parent node and swap until minheap satisfied -- O(log n)
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    let parentAircraft = this.aircraftQueue[parentIndex];
    while (currentIndex > 0
        && aircraft.priority < parentAircraft.priority) {
        this.aircraftQueue[currentIndex] = parentAircraft;
        this.aircraftQueue[parentIndex] = aircraft;

        currentIndex = parentIndex;

        parentIndex = Math.floor((currentIndex - 1) / 2);
        parentAircraft = this.aircraftQueue[parentIndex];
    }
}

ATCQueue.prototype.dequeue = function () {
    // keep track of the root
    const toDequeue = this.aircraftQueue[0];

    // move end of heap to start -- O(1)
    const toHeapify = this.aircraftQueue[this.aircraftQueue.length - 1];
    this.aircraftQueue[0] = toHeapify;
    // pop the now redundant last element -- O(1)
    this.aircraftQueue.pop();

    // check children nodes and swap with the smaller child until minheap is
    // satisfied -- O(log n). minheap is always satisfied on a leaf, so we can
    // always end if we're at a leaf. any index over (max index - 1) / 2 will be
    // a leaf.
    let currentIndex = 0;
    while (currentIndex <= Math.floor((this.aircraftQueue.length - 2) / 2)) {
        // find the child with the smaller priority
        const childIndices = [2 * currentIndex + 1, 2 * currentIndex + 2];
        const children = childIndices.map(index => ({
            child: this.aircraftQueue[index],
            index: index
        }));
        let smallerChild;
        if (!children[1].child) { smallerChild = children[0]; }
        else if (children[0].child.priority < children[1].child.priority) {
            smallerChild = children[0];
        }
        else { smallerChild = children[1]; }

        // compare smaller child to parent and terminate if already minheapified
        if (toHeapify.priority <= smallerChild.child.priority) { break; }

        // otherwise, swap the parent and child and re-check minheap property
        this.aircraftQueue[currentIndex] = smallerChild.child;
        this.aircraftQueue[smallerChild.index] = toHeapify;
        currentIndex = smallerChild.index;
    }
    
    return toDequeue;
}

/*
ATCQueue.prototype.output = function() {
    console.log(this.aircraftQueue);
}

const testAircraft1 = {
    type: "cargo",
    size: "large"
}
const testAircraft2 = {
    type: "passenger",
    size: "small"
}
const testAircraft3 = {
    type: "cargo",
    size: "small"
}
const testAircraft4 = {
    type: "passenger",
    size: "large"
}

const testQueue = new ATCQueue();
testQueue.enqueue(testAircraft1);
testQueue.enqueue(testAircraft2);
testQueue.enqueue(testAircraft3);
testQueue.enqueue(testAircraft4);
testQueue.output();
console.log("==================================")
console.log("dequeuing:", testQueue.dequeue());
console.log("post-dequeue:")
testQueue.output();
console.log("==================================")
console.log("dequeuing:", testQueue.dequeue());
console.log("post-dequeue:")
testQueue.output();
*/


// DO NOT MODIFY
module.exports = ATCQueue