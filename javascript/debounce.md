# Window Resize Debounce

| | |
|-|-|
| **Difficulty** | Hard |
| **Completion Time** | ~25 minutes |
| **Interview Slot** | JavaScript, Architecture(?) |

## Example prompt

> Let's say we need to perform an expensive operation every time the user _finishes_ resizing the window. Taking in to account the fact that the "resize" event can fire many times during such an action, how can we use what we know about the JavaScript language and basic Browser APIs to ensure that our code performs well?

## Interviewer notes

Let's assume using the passive `resize` event and the ResizeObserver API are not an option for us, but award some bonus points if the candidate mentions them. The candidate is __not__ allowed to use libraries like `underscore` or `lodash`.

## What we're testing

Understanding of Browser APIs, functional programming in JavaScript.

## Solutions

A minimal debounce solution:

```
window.addEventListener("resize", debounce(someOperation, 500));

function debounce(func, wait) {
	let timeout;
	return function(...args) {
		const timerExpired = (...args) => {
			func.apply(this, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(timerExpired, wait);
	};
};
```

There may be other correct solutions which the author is not aware of. These are also acceptable, possibly even more so than the above!

## Follow-up questions

Q. Ask candidate to extract their solution in to a reusable utility function, if they haven't already.

Q. If the candidate hasn't written any kind of tests, ask them to.

Here's some example test descriptions
```
1. It accepts a function and a number (`delay`) as arguments

2. It returns a function

3. Each call to the returned function results in a delayed call to the argued function.

4. Successive calls during a delay do not result in additional calls to the argued function.

5. The arguments of the most recent call, including `this`, are what determine the return value of the returned function.
```

Q. What are possible pitfalls to using a debounce function and how can we mitigate them?

Example response: Memory leaks due to timers not being cleared when initiating component is destroyed. Also, attempting to access an object that no longer exists. Both issues can be mitigated using `clearTimeout` when the parent component gets cleaned up.

## Evaluation Criteria

### Regular

Knows how to add event listeners. Their solution does not necessarily work but they at least demonstrate full understanding of the problem.

### Senior

Same as Regular plus arrived at a solution that at least satisfies test descriptions 1-3 above.

### Principal

Arrived at a solution that satisfies all of the above test descriptions. Suggests new tests.

