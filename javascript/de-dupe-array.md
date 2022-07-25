# De-dupe an Array
| | |
|-|-|
| **Difficulty** |Easy|
| **Completion Time** | ~5 minutes for the initial question, and 5-15 minutes for followups |
| **Interview Slot** | Tech Screen, Javascript |

```
Write a function that takes an array of items and returns an array without any duplicate items in it.
 
For example, an input of  

['Apples','Oranges', 'Oranges', 'Apples', 'Pears', 'Apples', 'Pears']

should return  

['Apples', 'Oranges', 'Pears']
```

## Interviewer Notes

Libraries like Lodash or Underscore (which have built-in unique-type calls on arrays) are not allowed for this problem.

If the candidate asks about case sensitivity, then bonus points for asking, and tell them that items should be treated as case sensitive. E.g., 'Apples' and 'apples' count as distinct entries.

If the candidate asks about the types of possible inputs, then bonus points for asking, and tell them they can assume the array will contain only primitive types (asking about handling objects makes for a good follow-up question; more on that below).

## What We're Testing

* Knowledge of ES6, both general use and in particular the Set and Map data structures. 

* If the candidate does not know the particular ES6 features that would help with this problem, then we are checking for a decent working knowledge of JavaScript Objects.

## Solutions (for Primitive Types)

### 1. Set

Sets were added in ES6, and can be used in a few different ways to make a very concise and performant de-dupe function. 

If given an input named `items`, then the solution can be a one-liner like:
```
return [...new Set(items)];

or

return Array.from(new Set(items));
```

The spread syntax used in the first option, as well as the Array.from() call in the second option, were also added in ES6.

### 2. Map

Maps were added in ES6, and can be used to solve the problem in a performant way, though less concise than just using a Set. 

If given an input named `items`, then a solution using a Map might look something like;
```
let uniqueItems = new Map();
items.forEach(item => {
    if (!uniqueItems.get(item)) {
        uniqueItems.set(item, 1);
    }
});
return Array.from(uniqueItems.keys()); 
```

If the candidate uses a Map, then it can be interesting to ask them why they chose that particular data structure. In particular, you can prompt them by asking if the solution uses any of the Map values, and if does not, might there be a better choice for data structure? Basically if they know about Map, they might know about Set, so some leading questions might get them there.

### 3. Object

You might see this from candidates who aren't familiar with Maps or Sets, or who have the idea of a Map and think Maps and Objects can be used interchangeably (fyi they cannot in a lot of situations, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

An initial solution using an Object might look something like this (assuming the input is named `items`):
```
let uniqueItems = {};
items.forEach(item => {
    uniqueItems[item] = item;
});

return Object.keys(uniqueItems);
```
The problem with the above solution is that the keys of an Object must be Strings or Symbols. So if you pass the above function an array input of `['1', 1]`, it will return `['1']` as the result (the code converts the number 1 into a string '1' when adding to the `uniqueItems` object, so the code mistakenly treats 1 as a duplicate of '1').

If you get an answer like the above, ask the candidate to consider some test cases. If needed, prompt with a question like "what about an array that has both strings and numbers in it?". If it comes to it, outright give them a breaking example to consider, like "What if you have an input of ['1', 1]"?.

A more complete, and pretty performant, solution using an Object would account for the type of each value added to the Object. Something like this would work (there are other possible approaches, of course):
```
let uniqueItems = {};
items.forEach(item => {
    uniqueItems[item + '-' + typeof item] = item;
});

return Object.keys(uniqueItems).map(item => uniqueItems[item]);
```

### 4. Helper Array

Something like this, assuming an input named `items` (note that there are a lot of permutations on this basic approach, especially with regard to syntax):

```
let uniqueItems = [];
for (let item of items) {
    if (uniqueItems.indexOf(item) < 0) {
        uniqueItems.push(item);
    }
}
return uniqueItems;
```

This approach works, but takes quadratic time (for every member of `items`, you are looping through `uniqueItems`). So it's not a great solution if you have a really big array. 

### 5. Filter

Assuming an array input named `items`, you can use filter like so:

```
return items.filter((item, index) => items.indexOf(item) === index);
```
The idea is that for every item, you compare where that item first appeared in the array to its current index. If they are different, then you know you have a repeater.

This approach also works, but it too takes quadratic time.

## Follow-up Questions

### 1. If the candidate came up with a quadratic solution, ask them to discuss its performance, and whether they can improve on it.

Sample question: "Can you please discuss the performance of your solution? If you know Big-O notation, then that is great and I'm curious about time complexity in particular. But if you don't know Big-O notation, that is fine. Just imagine your manager comes to you and asks if your solution is fast, what would you say?"

Note: If the candidate does not know about Sets and Maps, they can still use an Object approach to improve performance. If nothing else, they can hopefully speak to their solution's general performance, even if they don't know how to make it better.

### 2. Ask the candidate to write test cases. 

Sample question: "Can you please write some test cases that you would use to check your solution? You don't have to write up a formal testing framework test, just something like inputs and expected outputs."

A good set of tests should cover more than just strings. E.g., a test input of `[1, true, false, 1, true, false, null, null, undefined, 'apple', 'undefined']` would cover a lot more cases than just using the given example input of `['Apples','Oranges', 'Oranges', 'Apples', 'Pears', 'Apples', 'Pears']` and calling it a day.

### 3. If the candidate did not use any ES6 in their code, ask them about their familiarity with it, and whether they can re-write things in a more modern style.

Sample question: "I noticed your code does not use more modern ES6 features. Are you familiar enough with ES6 that you could try re-writing your solution in a more modern style?"

This isn't necessarily meant to check if they know about particular ES6 data structures like `Set` and `Map`, so much as if they were using only `var`s, avoiding fat-arrow functions, etc.

### 4. Ask the candidate how their solution would handle an array of objects. In particular, all of the above solutions work only for primitive types (strings, numbers, etc.). They won't work for objects.

Sample question: "How would your solution handle an array of objects instead of an array of primitives?"

For example (don't tell the candidates these examples unless it gets to the point of them needing explicit cases), an input of

`[{a:1}, {a:1}]`

would return 

`[{a:1}, {a:1}]` 

for the above solutions, instead of the desired 

`[{a:1}]`.

Similarly,
```
const dateString = 'October 10, 2010 10:00:00';  

const values = [new Date(dateString), new Date(dateString)];
```
would return 

`[ 2010-10-10T15:00:00.000Z, 2010-10-10T15:00:00.000Z ]`

### 5. Ask the candidate to develop a solution for object inputs.

If you ask this as a follow-up, then provide the specific types of objects the candidate needs to code for. Realistic solutions will do things like map on specific fields in the object. Asking for a completely generic de-dupe that can handle all potential objects is well beyond the scope of this question (and may not even be possible).

Sample question: "Your solution works great for primitive inputs like strings and numbers. But can you think of how you might change your solution if you knew that the input was going to be an array of objects? You can assume the objects are of the form {firstName: someString, lastName: someOtherString}, and we want to remove duplicate full names."

For example, suppose the de-dupe function is going to be given an array of name objects that are all of the form:

`{firstName: 'Ada', lastName: 'Lovelace'}`

And you want the function to remove any objects that have the same firstName + lastName (if the candidate asks about case sensitivity, then bonus points for asking, and tell them whatever your preference would be). 

One possible (case-sensitive, white-space-ignoring) solution could be something like:
```
(items) => {
    let names = new Set();
    let uniqueItems = [];
    items.forEach(item => {
        const name = item.firstName.trim() + item.lastName.trim();
        if (!names.has(name)) {
            names.add(name);
            uniqueItems.push(item);
        }
    });
    return uniqueItems;
}
```

A more concise solution could use JSON.stringify to do the object comparisons, and then parse the strings to turn them back into objects. Something like:
```
(items) => [...new Set(items.map(JSON.stringify))].map(JSON.parse)
```

## Evaluation Criteria

This isn't a great question for trying to separate Senior from Principal, but it can help with Regular vs Senior+.

_Regular_
* Was able to develop one of the lesser performing initial solutions on their own (Helper Array or Filter). Or got to a more performant solution, but needed a decent number of explicit hints or direct guidance to get there.
* Test cases covered most scenarios, with maybe some minor edge cases missing. 
* In the followup, if they could not develop a solution for object inputs, they at least could understand the central part of the problem and proposed some approaches.

_Senior+_
* Showed good familarity with ES6 syntax and features. It's fine if they didn't have exact syntax like Set formation memorized, but a Sr+ candidate should be comfortable with things like spread syntax and fat arrow functions, and ideally have some basic knowledge of ES6 data structures too.
* Was able to develop a working, performant solution with minimal hints or guidance (questions about exact syntax details are okay).
* Wrote thorough test cases.
* In the followup, was able to develop a solution for object inputs with minimal hints or guidance (clarifying questions about the problem are of course okay). 
