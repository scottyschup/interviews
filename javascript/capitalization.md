# Capitalization

|                     |                         |
| ------------------- | ----------------------- |
| **Difficulty**      | Easy-Medium             |
| **Completion Time** | ~5-15 minutes           |
| **Interview Slot**  | Tech Screen, JavaScript |

```
Write a function that accepts a string.  The function should capitalize only the first letter of each word, a word is delineated by a space. Finally the interviewer should return the string with the first letter of each word capitalized. The examples of input and output below will clarify the expectations.

This challenge can always be scaled up in the follow up portion when the initial challenge is solved. The CodePen below includes skipped test cases that can be included by changing the `xit => it` in the last two tests.

Examples:
- `capitalize('a short sentence') --> 'A Short Sentence'`
- `capitalize('a lazy fox') --> 'A Lazy Fox'`
- `capitalize('look, it is working!') --> 'Look, It Is Working!'`
```

[Capitalization in CodePen](https://codepen.io/brianmontanaweb/pen/YzzRQOd)

## Interviewer Notes

Interviewees are encouraged to look up the documentation while doing the coding challenge.

## What We're Testing

We're looking to verify fundamentals of JavaScript with the interviewer.

- Do the know how data types work in JavaScript?
- Are they able to communicate how they will solve the problem?
- Can they provide multiple solutions, and approaches?

## Solutions

This section is not meant to give an exhaustive list of all possible solutions. Rather, it's meant to capture solutions you're most likely to come across from candidates. Format and number your solutions like so:

### 1. Loop

The interviewee might try this approach by stepping through a loop after splitting the string to manipulate the elements in the array, and joining the array with spaces.

The interviewee will have to know how to perform operations on a string, often we might see them trying to manipulate the string without updating its value.

```javascript:
const capitalize = (str) => {
  let strArray = str.toLowerCase().split(/\s+/g);
  for(let i = 0; i < strArray.length; i++) {
    strArray[i] =
      strArray[i][0].toUpperCase() +
      strArray[i].slice(1);
  }
  return strArray.join(' ');
}
```

### 2. Functional

This will be another common solution, using built-in methods of the array to split the string at the spaces, and step through the array with a `map`, `reduce`, etc. Sometimes I've seen an interviewee trying to use `forEach` which returns undefined.

```javascript:
const capitalize = (str) => str.toLowerCase()
    .split(/\s+/g)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

```

## Follow-up Questions

### 1. New Business requirements

If the candidate is able to resolve the initial challenge quickly we can open up additional business requirements, and include additional tests to account for them.

New Requirements:

- We want to make sure the remaining letters are not capitalized `'hELLo' => 'Hello'`
  - `capitalize('what aRe yOu dOing!') --> 'What Are You Doing!'`
- We want to make sure only one space exists between the words `'hello over there!' => 'Hello Over There!'`
  - `capitalize('what are yOu doing!') --> 'What Are You Doing!'`

### 2. Optimizing, drawbacks, and other solutions

If the candidate hasn't come to a clean solution you can ask about optimizing their code, or improving readability.

Questions:

- Do they see any draw backs in their code?
- Is this something another engineer would be able to understand?

## Evaluation Criteria

### Regular

- Developed a working solution with a little guidance
- Shows their familiarity with manipulating strings, and arrays
- They should bring up assumptions about invalid type handling

### Senior+

- No hints required, they are able to solve multiple solutions
- Understands benefits of using for vs built-in array method
- Able to resolve the additional feature requests
