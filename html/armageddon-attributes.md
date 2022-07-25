# Armageddon Attributes

| | |
|-|-|
| **Difficulty** | Medium |
| **Completion Time** | ~15 minutes |
| **Interview Slot** | HTML, Technical Screen |


> If we pasted the following `<button>` element in an index.html page of a modern browser and inspected the element using the DOM inspector, what would we see? Going line-by-line, describe how the browser would parse each attribute and why?

```html
<button 
    oops 
    .data="abc" 
    num=5 
    on-mouseover="console.log('hovered')" 
    onclick="console.log('clicked')" 
    obj={} 
    #98=2 
    hmm=undefined
>
    My button
</button>
```

## Interviewer Notes

### Keep the discussion focused

The candidate may start critiquing something unrelated to the question (e.g. the names of the attributes, formatting, etc). If they do, let them know it's great that they're thinking about how to make the code better! But try to get them to focus only on explaining how the browser will parse the `<button>` element and its attributes.

### Stay true to the time

Most of the time for this exercise will be used by the candidate explaining how they think each attribute will be parsed. If they are spending too much time on one attribute (over a minute or two), politely redirect them to the next attribute. Spending more time on the `oops` and `onclick` attributes is expected since those are treated a little differently (see the [Solution](#solution)). And of course, feel free to disregard this and allow more time for explanation and discussion if you've got more time to fill 😉.

### Being totally correct is not as important

The goal is _not_ for the candidate's predictions to be correct about _each attribute_—in fact, they likely won't. Especially if the candidate has used only frameworks most of their career and doesn't deal with such low-level DOM nodes or haven't yet brushed up on the latest HTML specification.

Instead, their _thought process_ is most important. Try to gauge things mentioned in the [Evaluation Criteria](#evaluation-criteria) below.

## What We're Testing

We are testing the candidates knowledge on:

* How the browser parses HTML attributes
* [Boolean](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) vs non-boolean HTML attributes
* [Global event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers-on-elements,-document-objects,-and-window-objects), particularly `onclick`.
* [Event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and that their values can be set to a string containing JavaScript, which is then evaluated
* The [HTML attributes specification](https://html.spec.whatwg.org/multipage/syntax.html#attributes-2)


## Solution

Create a new index.html file with the following content and load it into the Chrome browser for the candidate.

<details>
<summary>index.html</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
    <meta charset="UTF-8" />
  </head>

  <body>
        <button 
            oops 
            .data="abc" 
            num=5 
            on-mouseover="console.log('hovered')" 
            onclick="console.log('clicked')" 
            obj={} 
            #98=2 
            hmm=undefined
        >
            My button
        </button>
  </body>
</html>
```

</details>

The answers are below. Feel free to say these things to the candidate verbatim (or modify to your liking). 

> Despite how weird the attributes look, every one of them will be rendered in the DOM without any errors!

> **`oops`** will be parsed as-is because it's a [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes), similar to the `disabled` attribute on a `<button>`, or `checked` on an `<input type="checkbox">`. It's pure existence in the DOM means that its `true`.

> **`onclick="console.log('clicked')"`** will be parsed as is and will print `clicked` in the console if the `<button>` is clicked. 

>  **`on-mouseover="console.log('hovered')"`** will be parsed as is but will _not_ work because `on-mouseover` is not a valid [event handler attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes). 

> All other attributes will be coerced to strings by the HTML parser.

## Follow-up Questions

1. Why do you think the code set in `onclick` works?

    > It's a valid [event handler attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers-on-elements,-document-objects,-and-window-objects) that is supported by all HTML elements. 

1. The code in the `on-mouseover` attribute doesn't work. But how could we make it work?

    > Remove the hyphen.


## Evaluation Criteria

1. Knew that if the value of an attribute is not a string primitive, the browser will coerce it to a string
1. Was confident and able to clearly describe how _most_ attributes would be parsed
1. Most predictions were correct
1. Incorrect predictions were still reasonable and logical
1. Knew that the `onclick` is a valid event handler attribute and its value would run when the `<button>` is clicked
1. Weren't ashamed or afraid to admit when he/she didn't know something
1. Found HTML attributes and the discussion around it interesting