# Balanced Brackets
| | |
|-|-|
| **Difficulty** |Easy|
| **Completion Time** | 10-20 minutes for Part 1, 5-20 minutes for Part 2, 5-10 minutes for followups |
| **Interview Slot** | Tech Screen, Javascript |

## What We're Testing

* Basic JavaScript knowledge.

* Basic problem solving skills.

## Part 1
```
You are given an input string consisting only of square bracket characters: '[' and ']'.

Write a function that returns true if the brackets in the input string are balanced, and returns false if they are not.

Balanced means that an opening bracket must appear before its respective closing bracket, and any opening bracket must also have a closing bracket.

For example, inputs of '[]' and '[[]]' should return true, while inputs of '[' and '[[]' should return false.
```

## Part 1 Interviewer Notes

* The candidate can assume that the input will always be a string, and will always contain one or more of the two possible bracket characters. They don't need to worry about validating the input, or checking for other characters.

* If you ask this question for the JavaScript portion of a tech screen, you might want to focus just on Part 1 with one or two followups as time allows. To get through both Parts plus all the followups probably requires a full coding slot.

## Part 1 Solutions

### 1. Use an array like a stack

JavaScript doesn't have a built-in stack data structure, but you can use an array to get stack-like behavior that lets you solve this problem. 

The idea is that when you come across an opening square bracket -- [ -- you push it onto the array/stack. And when you come across a closing square bracket -- ] -- you pop from the array/stack, and make sure you got back a opening [ character to go with your closing ] character.

The final wrinkle is to make sure your array/stack is empty when you're done, to avoid a scenario where you have an opening bracket without a closing one.

Here's a sample solution using this approach:

```javascript
function isBalanced(input) {
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        const c = input.charAt(i);
        if (c === '[') {
            stack.push(c);
        } else if (c === ']') {
            const stackChar = stack.pop();
            if (stackChar !== '[') {
                return false;
            }
        }
    }
    return stack.length === 0;
}
```

### 2. Keep removing bracket pairs

The idea with this approach is that in a balanced string, if you were to keep sweeping through the entire string, then on each sweep you would find at least one occurence of `[]`, which you can remove. You keep going through the string, removing the occurences of bracket pairs that you find, until eventually the string is empty.

If it's an unbalanced string, then eventually you will have a sweep through the string where you don't find at least one occurence of `[]`, but the string is not yet empty.

Here's a sample solution using this approach:
```javascript
function isBalanced(input) {
    let lengthBeforeReplace;
	while (input.length !== lengthBeforeReplace) {
        lengthBeforeReplace = input.length;
        input = input.replace('[]', '');
	}
    return input.length === 0;
}
```

The downside of this approach compared to the first one is that you're most likely doing more sweeps through the input. The first sort of solution iterates just once through the string, while the second may have to iterate multiple times depending on the string contents. In practice this won't matter unless you're dealing with massive strings, but it's still good to be aware of. For example, you can see a measurable difference in execution time with a string like this one:

```javascript
let longBalancedString = '';
for (let i = 10000000; i > 0; i--) {
	longBalancedString += '[[[[[[]]]]]]';
}
```

See the Part 2 second Follow-up Question for more on the performance discussion.

### 3. Recursive

You can take an approach similar to the previous one, but do it recursively. For example:
```javascript
 function isBalanced(input) {
    const originalLength = input.length;
    input = input.replace('[]', '');
    // If you get the length down to 0, then you had only matching bracket pairs, so you know it's balanced.
    if (input.length === 0) {
        return true;
    // If there was no change in length, then no matching bracket pairs were found, so you know it's unbalanced (since you already made a 0 length check, above).
    } else if (input.length === originalLength) {
        return false;
    // Otherwise, recurse.
    } else {
        return isBalanced(input);
    }
}
```

The downside of this approach is the same as the previous one: for very large strings, this will perform measurably worse than the first sort of solution.

### 4. Keep count

Instead of using an array/stack to keep track of bracket characters, you can keep a numeric count. If you increment for `[`s and decrement for `]`s, and check for the right edge conditions, then you know you are balanced if the count ends at 0. For example:

```javascript
function isBalanced(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
      // If count is negative and you come across an opening [, then you know it's unbalanced.
      if (count < 0 && input.charAt(i) === "[") {
          return false;
      // If count isn't positive and you come across a closing ], then you know it's unbalanced.
      } else if(count <= 0 && input.charAt(i) === "]") {
          return false;
      // Otherwise increment the count for [ and decrement for ]
      } else if (input.charAt(i) === '[') {
          count++;
      } else if(input.charAt(i) === ']') {
          count --;
      }
  }
  return count === 0;
}
```
This is a pretty performant solution if you're dealing with only one type of bracket, though it doesn't scale to multiple types (this gets tackled in Part 2).

## Part 1 Follow-up Questions

### 1. Ask the candidate to write test cases.

Sample question:

>Can you please write some test cases that you would use to check your solution? And then run them to see your results.

A good set of tests will cover several different flavors of unbalanced and balanced. For example:

```javascript
'[' // unbalanced
']' // unbalanced
'][' // unbalanced
'[[]' // unbalanced
'[]]' // unbalanced
'][][' // unbalanced
'[]' // balanced
'[][][]' // balanced
'[[[]]]' // balanced
```

Having the candidate run the tests and output the results also lets you see a little more of their JavaScript skills. They don't have to do anything too fancy. E.g., for the above test cases you could do something like:

```javascript
const testCases = [
    ['[', false],
    [']', false],
    ['[[]', false],
    ['[]]', false],
    ['][][', false],
    ['[]', true],
    ['[][][]', true],
    ['[[[]]]', true],
];

testCases.forEach(entry => {
    console.log('expected result = %s, actual result is %s', entry[1], isBalanced(entry[0]));
});
```

If the candidate seems to be struggling with test cases, you can get them started with something like: 

>Here are a few test cases to run against your code.

```javascript
const testCases = [
    ['[', false],
    ['[[]', false],
    ['[]', true],
    ['[[]]', true],
];

testCases.forEach(entry => {
    console.log('expected result = %s, actual result is %s', entry[1], isBalanced(entry[0]));
});
```

>Would you want to add any other test cases to the array? If so, which ones?

### 2. If you don't have time for Part 2 but need another follow-up question for Part 1, you can repurpose the second follow-up question from Part 2 (the one about performance). 

## Part 2 Question

```
We want to expand our solution to allow for six bracket characters instead of just two: { } ( ) [ ]

For example, an input of '[{()}]' should return true, while an input of '[{}' should return false.

How would you alter your original solution to account for the new requirements?
```

## Part 2 Interviewer Notes

* As before, the candidate can assume that the input will always be a string, and will always contain one or more of the relevant characters. They don't need to worry about validating the input, or checking for non-specified characters.

## Part 2 Solutions

### 1. Use an array like a stack

If you used a stack-type solution for Part 1, it's not that hard to expand it to handle Part 2. You just need to make sure to add a check for the correct closing character.

Here's a sample solution:

```javascript
function isBalanced(input) {
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        const c = input.charAt(i);
        switch (c) {
            case '[':
            case '(':
            case '{': 
                stack.push(c);
                break;
            default: 
                const expectedStackCharacter = mapRightBracketToLeft[c];
                const actualStackCharacter = stack.pop();
                if (expectedStackCharacter !== actualStackCharacter) {
                    return false;
                }
                break;
        }
    }
    return stack.length === 0;
}

const mapRightBracketToLeft = {
    ']': '[',
    '}': '{',
    ')': '('
};
```

### 2. Keep removing bracket pairs

If you used this sort of solution for part 2, then all you need to do is expand the pairs of brackets being replaced. For example:

```javascript
function isBalanced(input) {
    let lengthBeforeReplace;
	while (input.length !== lengthBeforeReplace) {
        lengthBeforeReplace = input.length;
        input = input.replace(/\[\]|\{\}|\(\)/g, '');
	}
    return input.length === 0;
}
```

Note that doing the single global regex statement is a significant performance gain over a line-by-line approach like this:
```javascript
input = input.replace('()', '');
input = input.replace('[]', '');
input = input.replace('{}', '');
```
Getting into performance details can make for a good follow-up question (see below).

### 3. Recursive

A recursive approach is easy to adapt to handle more types of brackets; you just need to expand your replace logic a bit. For example: 

```javascript
 function isBalanced(input) {
    const originalLength = input.length;
    input = input.replace(/\[\]|\{\}|\(\)/g, '');
    if (input.length === 0) {
        return true;
    } else if (input.length === originalLength) {
        return false;
    } else {
        return isBalanced(input);
    }
}
```

The same performance caveat applies to the global regex here as in the above solution.

### 4. Keep count

If they used a count approach for Part 1, there's no easy way to expand this to work for Part 2, and candidates are better off developing an alternative solution for the case of multiple bracket types. You might see candidates have the idea of creating three separate count variables, to track the three different types of brackets. For example:

```javascript
function isBalanced(input) {
    let curlyCount = 0;
    let parensCount = 0;
    let squareCount = 0;
    for (let i = 0; i< input.length; i++) {
        if(input.charAt(i) === "{" && curlyCount >= 0) {
            curlyCount ++;
        } else if(input.charAt(i) === '}' && curlyCount > 0) {
            curlyCount --;
        } else if(input.charAt(i) === "(" && parensCount >= 0) {
            parensCount ++;
        } else if(input.charAt(i) === ')' && parensCount > 0) {
            parensCount --;
        } else if(input.charAt(i) === "[" && squareCount >= 0) {
            squareCount ++;
        } else if(input.charAt(i) === ']' && squareCount > 0) {
            squareCount --;
        } else {
            return false;
        }
    }
    return curlyCount === 0 && parensCount === 0 && squareCount === 0;
}
```
Aside from getting pretty clunky, this approach fails for a case like `[(])`, which isn't balanced, but would pass the above code.

## Part 2 Follow-up Questions

### 1. Ask the candidate to expand their test cases.

Sample question: "Can you please write whatever additional test cases you think are needed to check your solution? And then run them to see your results."

Their initial set of test cases should still pass, of course, so new test cases should be considered additive. We're looking for covering the basic balanced and unbalanced scenarios for Part 2, so something like this:

```javascript
const additionalTestCases = [
    ['[(])', false],
    ['((}', false],
    ['}[]()', false],
    ['({(()))}}', false],
    ['({[]})', true],
    ['[()]{}{[()()]()}', true]
];

additionalTestCases.forEach(entry => {
    console.log('expected result = %s, actual result is %s', entry[1], isBalanced(entry[0]));
});
```

### 2. Ask the candidate about performance

What to ask depends on their solutions. But if they have a solution like the second or third option, which can be costly for very large strings, you can ask something like:

>Your manager wants to make sure your approach can handle really large strings, potentially ones millions of characters long. How would your code work for those cases?

Note that if their solution makes multiple replace calls, you might want to give them a hint of combining them into a single global regex instead. That will be a big performance gain in its own right, but still leaves the performance hit from large strings.

If needed, ask them to actually build such a large string and measure the performance time (you can use `performance.now()` before and after the function execution to get the elapsed time in milliseconds, if they don't know how to do that). You can follow that up by asking if they can think of any alternative approaches that might not be so costly for larger strings.

If the candidate went with a stack-style solution that doesn't suffer from the performance hit for very large strings, then you can ask something like this: "Suppose you submit your proposed code as a PR to the team, and someone responds to your PR by suggesting this alternative:

```javascript
function isBalanced(input) {
    let lengthBeforeReplace;
	while (input.length !== lengthBeforeReplace) {
        lengthBeforeReplace = input.length;
        input.replace(/\[\]|\{\}|\(\)/g, '');
	}
    return input.length === 0;
}
```

They argue that this code is more concise and easier to reason about. How would you respond?"

Aside from giving you a sense of how the candidate might handle PR discussions, this also lets you see if the candidate can identify potential problems with other solutions. Ideally the candidate will realize the proposed solution takes a performance hit with large strings, but you might need to give a hint or some leading questions to get them there.

## Evaluation Criteria

This isn't a great question for trying to separate Senior from Principal, but it can help with Regular vs Senior+.

_Regular_
* Needed a decent amount of hints or guidance, but was able to understand them and run with them. Basically they left you with the sense that if they had submitted an initial solution as a PR, given good PR feedback, they could go away and re-submit something solid, without needing excessive hand-holding.
* Test cases covered most scenarios, with maybe some minor scenarios missing. 

_Senior+_
* Was able to develop working, performant solutions with minimal hints or guidance (questions about exact syntax details are okay).
* Wrote thorough test cases.

Note: Candidates that use a "Keep count" approach for Part 1 might run out of time needing to develop a new solution for Part 2. But they should get credit if they realize their solution to Part 1 won't work for Part 2, and more credit for being able to sketch out an alternative approach, even if they don't have time to code it. Basically if they leave you with the sense that given another 15 or so minutes they could nail it, don't count it against them. After all, when presented with the parameters of Part 1, they didn't know Part 2 was coming.