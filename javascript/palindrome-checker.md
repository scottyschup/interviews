# Palindrome Checker
| | |
|-|-|
| **Difficulty** |Easy|
| **Completion Time** | ~5 minutes for the initial question, and 5-10 minutes for followups |
| **Interview Slot** | Tech Screen, Javascript |

```
A palindrome is a string that is the same forwards and backwards. For example, "racecar" is a palindrome.

Write a function that takes a string and returns a boolean indicating if the string is a palindrome.

The function should be case-insensitive, and ignore all non-alphanumeric characters and white space. 

For example, these should all return true: ['racecar', 'RaceCar', 'Race Car !', '1 race car1'],  
while these should all return false: ['1 race car', 'race1car'].
```

## Interviewer Notes

If the candidate knows about regular expressions but can't remember the exact syntax, it's okay to either let them search for the syntax they want (ask them what they are searching for). Or have them use you as the searcher and you give them the regex syntax they are looking for. In real life, devs almost always just google or copy/paste when they need regex syntax, so it's not expected the candidate has it memorized.

3rd party libraries are not allowed for this problem.

## What We're Testing

* Basic JavaScript skills

* An awareness of regular expressions

* Thorough test case coverage

## Expected Time To Complete

About 5 minutes for the initial exercise, and 5-10 minutes for followup questions. 

## Solutions

### 1. Compare Two Strings

Perhaps the most intuitive solution is to just check if the string equals the reverse of the string. But you must keep in mind the problem specs, so you need to "sanitize" the strings being compared to remove all non-alphanumeric characters and also make them case-insensitive.

Here's one such possible solution:
```
const findPalindrome = (input) => {
    const cleanedInput = input.replace(/\W/g, '').toLowerCase();
    const cleanedInputReversed = cleanedInput.split("").reverse().join("");
    return cleanedInputReversed === cleanedInput;
}
```

One of the keys to this approach is knowing that JavaScript does not have a `reverse` method you can call directly on strings. Instead you have to do the "make it an array and then reverse it and turn it back into a string" trick.

If the candidate does not know how to reverse a string, give them the hint that in JavaScript you can't do it directly, but there is a reverse method available on arrays. Hopefully that will be enough. If not, you may need to explicitly give them the code for reversing a string (that'd be a minor ding).

### 2. Compare In-Place

Rather than compare two distinct strings, you can simply sanitize the original string, and then compare the first and last characters, the second and second-to-last characters, etc. If any of those comparisons fail, you immediately know it's not a palindrome. This is a bit more space-performant than the above solution.

Here's one such possible solution:
```
const findPalindrome = (input) => {
    const cleanedInput = input.replace(/\W/g, '').toLowerCase();
    for (let i = 0; i < (cleanedInput.length/2); i++) {
        if(cleanedInput[i] !== cleanedInput[cleanedInput.length - i - 1]) {
            return false;
        }
    }
    return true;
}
```

## Follow-up Questions

### 1. Ask the candidate to write test cases.

Sample question: "Your code looks good. Can you please write some test cases for it now? You don't have to formally write up unit tests, I'm just looking for string inputs that you would feed into your function, along with the expected and actual results."

Make sure they cover all the specifications: case-insensitive, ignore all non-alphanumeric characters, and ignore white space.

For example, the simplest case would be making sure the function returns true for something like "eye". But the tests should also return true for cases like "Taco Cat" and "Go Hang a Salami! I'm a Lasagna Hog!'". 

And of course they should also include some false test cases. 

Bonus points if they consider the cases of null or non-string (e.g., typeof input !== 'string'). If it comes up, how they want to handle that (returning true or false), is up to them, but ask them for the reasoning behind their decision.

### 2. If the candidate did not give a solution that checks in-place (i.e., using only one string for the comparison), then ask if they can come up with such a solution.

Sample question: "Your code works and that's awesome. But suppose your manager comes to you and says 'Sorry, we are super limited on space, so can you please develop a solution that does not create any strings besides the original input fed to the function?' Can you think of a way to change your solution so that it meets that new space requirement?"

## Evaluation Criteria

This isn't a great question for trying to separate Senior from Principal, but it can help with Regular vs Senior+.

_Regular_
* Was able to develop a working solution without too many hints or too much explicit guidance, and when given hints/guidance was able to move forward relatively quickly.
* Might have needed some help with regex, but at least was familiar with using it.
* If they did not develop an in-place solution initially, was able to do so when asked during followup, again without too many hints or too much explicit guidance.
* Test cases covered most scenarios, with maybe some minor edge cases missing. 

_Senior+_
* Needed at most a few minor hints to develop working solutions, including an in-place one.
* Their solutions accounted for all the specifications (case insensitive, etc.).
* Knew to use regex (it's okay if they needed to look up exact syntax, but it should be just a quick check).
* Test cases were exhaustive. 
