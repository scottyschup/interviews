# Holy Grail Layout

|                     |                                                                         |
| ------------------- | ----------------------------------------------------------------------- |
| **Difficulty**      | Medium                                                                  |
| **Completion Time** | 20-30 minutes for the basic question, up to 10-20 minutes for followups |
| **Interview Slot**  | CSS and HTML                                                            |

> You will be given some HTML for a restaurant website. Your job is to improve the existing code to meet your best practices and style it to look like the "holy grail" of web design layouts: full width header and footer, with a 3 column layout for the main content. The two outer columns of the main content ('Daily Specials' and 'About' sections) should be a fixed width, with the main content filling in the rest of the space.
>
> After you've completed the layout, you will need to add styles to make it look like the provided [mock](https://imgur.com/a/fZvcWoh). You have complete liberty with the HTML markup, feel free to add and remove classes, change HTML tags, syntax, etc. The idea is to leave this code better than you found it, like a pull request review.
>
> The end result should look like this (https://imgur.com/a/z8Zt65B)

Provide the candidate with the following HTML and CSS:

```html
<div id="header">
  <h1>Welcome to Hipster Haven</h1>
</div>
<div class="grid">
  <div class="specials">
    <strong class="subheading"> Today's Specials </strong>
    <p>Gochujang Green Juice</p>
    <p>La Croix Tacos</p>
    <p>Banjo Brunch</p>
    <p>Ennui Affogato</p>
  </div>
  <div class="main">
    <h2>We were inspired by...</h2>
    <p>
      I'm baby fanny pack unicorn hammock chambray salvia venmo banjo listicle.
      IPhone stumptown keffiyeh marfa. Tofu bespoke paleo cardigan. Put a bird
      on it master cleanse post-ironic thundercats +1 air plant, jean shorts
      ennui truffaut biodiesel vegan tousled mlkshk distillery sartorial. Cloud
      bread bitters farm-to-table trust fund health goth, offal +1 succulents.
      Thundercats butcher slow-carb meditation.
    </p>
    <p>
      Jean shorts schlitz lomo affogato vice pitchfork. Wayfarers drinking
      vinegar meggings live-edge scenester gluten-free meh lumbersexual viral
      small batch forage. Vaporware typewriter ugh asymmetrical gastropub yr
      occupy. Gluten-free squid migas, snackwave master cleanse try-hard palo
      santo chillwave skateboard affogato plaid paleo fashion axe ugh. Direct
      trade blue bottle hoodie meditation pickled pok pok viral leggings
      post-ironic paleo sustainable squid fingerstache ramps.
    </p>
  </div>
  <div class="about">
    <b class="subheading"> About the Chef </b>
    <p>
      Skateboard aesthetic venmo polaroid mlkshk disrupt irony scenester vinyl
      keffiyeh four dollar toast chia. Letterpress ramps echo park raw denim
      sustainable. Blue bottle jean shorts pop-up viral coloring book trust fund
      vape activated charcoal pork belly craft beer direct trade. 8-bit wolf
      crucifix typewriter taiyaki.
    </p>
    <p class="text--faded">Pork Belly Vegan Fingerstache</p>
  </div>
</div>
<div id="footer">All Rights Reserved Hipster Haven 2020</div>
```

and CSS:

```css
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 50px 0;
}
```

The `50px 0` of padding is because JSFiddle will hide the footer if you don't add it.

## Interviewer Notes

- Use a collaborative tool like JSFiddle or Code Sandbox. Make sure you enable `Auto-run code` or you will have to click `run` every time a change is made.

- The candidate can use whatever CSS approach they want: Sass, stylus, vanilla CSS, etc.

- Try not to focus too much on colors, font weights, exact values for spacing, etc. Let the candidate use their best judgement and try their best to get their result to look like the mock. Ask questions about their decision to use a chosen units (eg: px, rem).

- If they get stuck on a section for longer than 5 minutes, as them to move onto the next problem/section. The idea is to hit as many different subjects as possible, rather than belabor a single one.

- Encourage use of the DOM inspector and looking up documentation, just make sure the candidate narrates their thought process as they do so. We should care more about how they work, rather than in depth technical knowledge of CSS properties.

## What We're Testing

Proficiency in:

- Semantic HTML and accessibility basics
- CSS layout
- Using mocks
- Improving existing code
- Ability to use the DOM inspector
- Responsive design

## Solutions

Ideally, the candidate should start by refactoring the HTML to make it more semantic, eg: swap out `.header` for its semantic counterpart `<header>` and be able to explain why semantic HTML is important. They should also remove inline styles and try to use as few classes and id's as possible in favor of pseudo selectors and declaring styles by tags.

```html
<header>
  <h1>Welcome to Hipster Haven</h1>
</header>
<div class="grid">
  <aside class="specials">
    <h3>Today's Specials</h3>
    <ul>
      <li>Gochujang Green Juice</li>
      <li>La Croix Tacos</li>
      <li>Banjo Brunch</li>
      <li>Ennui Affogato</li>
    </ul>
  </aside>
  <main>
    <h2>We were inspired by...</h2>
    <p>
      I'm baby fanny pack unicorn hammock chambray salvia venmo banjo listicle.
      IPhone stumptown keffiyeh marfa. Tofu bespoke paleo cardigan. Put a bird
      on it master cleanse post-ironic thundercats +1 air plant, jean shorts
      ennui truffaut biodiesel vegan tousled mlkshk distillery sartorial. Cloud
      bread bitters farm-to-table trust fund health goth, offal +1 succulents.
      Thundercats butcher slow-carb meditation.
    </p>
    <p class="text--faded">
      Jean shorts schlitz lomo affogato vice pitchfork. Wayfarers drinking
      vinegar meggings live-edge scenester gluten-free meh lumbersexual viral
      small batch forage. Vaporware typewriter ugh asymmetrical gastropub yr
      occupy. Gluten-free squid migas, snackwave master cleanse try-hard palo
      santo chillwave skateboard affogato plaid paleo fashion axe ugh. Direct
      trade blue bottle hoodie meditation pickled pok pok viral leggings
      post-ironic paleo sustainable squid fingerstache ramps.
    </p>
  </main>
  <aside class="about">
    <h3>About the Chef</h3>
    <div class="profile-pic"></div>
    <p>
      Skateboard aesthetic venmo polaroid mlkshk disrupt irony scenester vinyl
      keffiyeh four dollar toast chia. Letterpress ramps echo park raw denim
      sustainable. Blue bottle jean shorts pop-up viral coloring book trust fund
      vape activated charcoal pork belly craft beer direct trade. 8-bit wolf
      crucifix typewriter taiyaki.
    </p>
    <p class="text--faded">Pork Belly Vegan Fingerstache</p>
  </aside>
</div>
<footer>All Rights Reserved Hipster Haven 2020</footer>
```

For styling, there are a few solutions such as creating a layout with CSS Grid:

```css
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 50px 20px;
}

h1 {
  text-align: center;
  letter-spacing: 2px;
}

h1,
h3 {
  text-transform: uppercase;
}

h2 {
  font-weight: normal;
}

ul {
  list-style: none;
  padding-inline-start: 0px;
  line-height: 1.8em;
}

.grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-gap: 20px;
}

aside {
  font-size: 0.9em;
}

/* bonus points if they don't use classes for this */
aside p {
  color: #666;
}

header,
footer {
  text-align: center;
}

footer {
  font-size: 0.5em;
  text-transform: uppercase;
}

/* use classes */
/* .text--faded {
  color: grey;
} */

/* or bonus points for pseudo selectors */
p:last-of-type {
  color: grey;
}

.profile-pic {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background: grey;
  border: 5px solid #999;
  /* there are multiple ways to brush this cat, but this is the simplest */
  margin: auto;
}

/* or as a pseudo element on the about header (add a class) */
/* .about__header:after {
	content: '';
	display: block;
	height: 50px;
	width: 50px;
	border-radius: 50px;
	background: grey;
	border: 5px solid #333;
	margin: auto;
	margin-top: 1em;
} */

.about {
  text-align: center;
}

@media (max-width: 776px) {
  .grid {
    grid-template-columns: 100%;
  }

  aside {
    text-align: center;
  }
}
```

Or with flexbox:

```css
.grid {
  display: flex;
}

main {
  margin: 0 50px;
}

aside {
  min-width: 200px;
  flex-basis: 200px;
  font-size: 0.9em;
}

header,
footer {
  flex-grow: 1;
  text-align: center;
}

@media (max-width: 776px) {
  .grid {
    flex-wrap: wrap;
  }

  aside {
    flex-basis: 100%;
  }

  main {
    margin: 0;
  }
}
```

## Followup Questions

1. > How would you make the design responsive?

They should add a single media query and nest all mobile styles within that query. Use `flex-wrap` and change the `flex-basis` for flexbox, tweak the `grid-template-columns` for grid and adjust some margins.

2. > What if we received a feature request to swap the order of the Daily Specials and About sections?

If they used flexbox, they should use `flex-order`. If they used grid, then `order`.

## Evaluation Criteria

### Regular

- Replace as many `div`s as possible with semantic HTML tags. There should be no `id`s remaining, and very few `class`es.
- Swap out the Daily Specials items with an unordered list, remove the list style, and fix the padding
- Use semantic HTML tags for all headings
- Demonstrate knowledge of flexbox or CSS grid
- Should know how to create a CSS circle
- Make use of the DOM inspector

### Senior

This problem should be very familiar to Senior devs, they should breeze through most of this, but make sure to ask them questions about decisions they make as they go.

... everything an SE is expected to know, plus:

- Make use of pseudo selectors
- Be able to justify chosen units (px, rem, em)
- Correctly style all the headings (font sizes, letter spacing, font weights, colors)
- Easily create the layout using flexbox and/or CSS grid
- Should add responsive styles without being prompted

### Principal

... everything an SE and SSE is expected to know, plus:

- Should easily be able to create a CSS circle and align it with only 1 line of code
- Bonus points if they create a pseudo element for the circle (`.profile-pic`)
- Familiarity with `padding-inline-start` on a `ul` element
