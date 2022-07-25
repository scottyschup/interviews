# The Lonely Element

| | |
|-|-|
| **Difficulty** | Medium |
| **Completion Time** | ~5 minutes |
| **Interview Slot** | HTML |


> How would a modern browser parse the `<modal-dialog />` snippet in the index.html file below?


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <modal-dialog />
  </body>
</html>
```

:warning: _Most candidates who don't have a low-level understanding of the Custom Elements and HTML specifications will fail this 😔. So only use this exercise for candidates who will be building _low-level_ reusable shared components without a framework or candidates who have a history of doing so on their resume and you'd like to confirm._

## Interviewer Notes

Let the candidate give you their answer verbally. Then, send him/her the index.html snippet above and have them load it into Chrome or Firefox to verify their prediction.

The exercise is for _modern_ browsers, so no talk of Internet Explorer 🙂. If the candidate insists on knowing what we mean by a "modern browser", just say "latest Chrome or Firefox".

Candidate shouldn't focus on any HTML in the index.html file other than the `<modal-dialog />` and how the browser parses it. The goal is to get them to relay to you their understanding of how browser parsing works on Custom, Void, and Unknown elements.

"Custom Elements" and "Web Components" are frequently used interchangeably in the frontend development community. So if the candidate uses the term "Web Component" instead of "Custom Element", just go with it. While not as precise, it's still acceptable.

## What We're Testing

* Familiarity with [Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements) specification
* Knowledge of how the browser parses [unknown](https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement) and [void](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) HTML elements

## Solution

Nothing will show in the browser's viewport, but here's what you'll see in the DOM for the `<modal-dialog>` element:

```html
<modal-dialog></modal-dialog>
```


## Follow-up Questions


1. **Why didn't we see any console error for `<modal-dialog>`?**

    The browser interprets it as an [unknown element](https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement). The browser encountered the element that was not defined, but it is _not_ an error or invalid HTML, which is why it still renders in the DOM.

1. **How would we make `<modal-dialog>` a valid custom element?**

    Define it using `customElements.define()`.

1. **Why did the browser change the syntax to `<modal-dialog></modal-dialog>`?**

    Closing tags can only be omitted for [void elements](https://html.spec.whatwg.org/multipage/syntax.html#void-elements). Since this element is not a void element, a closing tag is required for it to be parsed.
