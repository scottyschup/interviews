# Insert element in a sorted array
| | |
|-|-|
| **Difficulty** |Medium|
| **Completion Time** | ~5 minutes for a non binary search solution, and 5-15 minutes for discussing the optimization and performance. ~15minutes for binary search solution and ~5 minutes for discussing the performance and testing
| **Interview Slot** | Tech Screen, Javascript |

```
Write a function that takes a sorted array of numbers and a target. The function should return the index where this new number can be inserted. 

For example, given 

Array: [0, 2, 4, 6, 8]
Target: 3 
The function should return: 2 
Explanation: The number 3 can be inserted after number 2, which is at index position 1. Hence, the number 3 can inserted at index position 2.
```

:warning: Most candidates who haven't studied algorithms or someone who never had to think about these kinds of problems in their professional experience will not be able to come up with the optimized solution right away. So only use this exercise for candidates who are expected to tackle such problems.

## Interviewer Notes

If the candidate asks about edge cases such as what should we return if the target is smaller than or greater than all of the numbers in the input array, then bonus points for thinking through those edge cases before solving the problem. Tell them that if the target is smaller than all the numbers, then the output should be 0, and if it is greater than all the numbers, then the output should be the input array length.

## What We're Testing

* Basic problem solving skills.
* Basic Javascript skills, iterating through the arrays.
* Understanding the given problem in depth. In this problem, remembering that the input array is **sorted** is crucial as it helps in figuring out where the target can be placed.

## Solutions

### 1. Iterating from start to end

In this method, we can just iterate from start to end and check at every index if **input[i-1] <= target && target <= input[i]**

**Time complexity: O(n)**

Here's a sample solution

```javascript
function findInsertionIndex(input, target) {
  if (!input) {
    return null;
  }

  // Base cases
  if (input.length === 0 || input[0] >= target) {
    return 0;
  }

  if (input[input.length - 1] <= target) {
    return input.length;
  }

  for (let i = 1; i < input.length; i++) {
    if (input[i] >= target && input[i - 1] <= target) {
      return i;
    }
  }

  // Shouldn't come here but good to have an explicit return
  return null;
}
```

**Sample usage and return values:**
findInsertionIndex( [], 10 ) ---> 0
findInsertionIndex( [1, 2, 3], 4 ) ---> 3
findInsertionIndex( [1, 2, 3, 5], 4 ) ---> 3
findInsertionIndex( [1, 2, 3, 5], 6 ) ---> 4

The above solution is quite straight-forward, but not very performant, as we iterate through the entire array searching for the index. This could lead to really bad performance with larger data sets. So, discussing the performance details with the interviewee is a good bonus topic.


### 2. Using binary search

In this method we can take advantage of the sorted property of our input array and limit our search area. Instead of iterating through the entire input array we can find the closest element to our target in each iteration and move closer to our target index.

**Time complexity: O(logn)**

```javascript
  function findInsertionIndex(input, target) {
    if (input == null) {
      return null;
    }

    // Base cases
    if (input.length === 0 || input[0] >= target) {
      return 0;
    }

    if (input[input.length - 1] <= target) {
      return input.length;
    }

    let low = 0;
    let high = input.length - 1;

    while (low <= high) {
      const mid = low + Math.floor((high - low)/2) ;

      // If the mid is less than the target, then we should search for the target on the right side of the mid
      if (input[mid] < target) {
        // If the mid is the last index then the target should be the next index of the last index which is the input length
        if (mid === input.length - 1) {
          return a.length;
        }

        // restrict next search to right side of mid
        low = mid + 1;
      } else {
        // if the mid is 0 or if the mid - 1 is less than or equal to the target then the possible index is mid as you'd come into this loop only if mid >= target
        if (mid === 0 || input[mid - 1] <= target) {
          return mid;
        }

        // restrict next search to left side of mid
        high = mid - 1;
      }
    }
  
    // should not happen, but good to have an explicit return
    return null; 
  }
```

### Ask the candidate to write a few tests to cover all of the edge cases and do a walk-through of the code with their inputs to see if it returns the correct output.

## Evaluation Criteria

_Regular_
* Come up with the first solution with few or no hints, be able to discuss performance drawbacks of their solution, and provide suggestions on improving their solution.

_Senior+_
* Come up with the performant **O(logn)** solution with minimal hints and also discuss the performance advantages of solving the problem with the second solution. 
