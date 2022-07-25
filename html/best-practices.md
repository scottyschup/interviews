# HTML and CSS Best Practices

|                     |               |
| ------------------- | ------------- |
| **Difficulty**      | Easy          |
| **Completion Time** | 10-15 minutes |
| **Interview Slot**  | HTML and CSS  |

> What would you change about the following HTML and CSS and why?

```html
//HTML file
<html>
  <div>
    <h2>Welcome Back</h2>
    <div>
      <h3><a href="https://www.chicagotribune.com/news/">Chicago</a></h3>
      <img src="chicago.jpg" />
      <ul>
        <li>234 square miles</li>
        <li>2.715 million residents</li>
      </ul>
    </div>
  </div>

  <div class="main">
    <div class="headline-article">
      <div>
        <h1 id="interactive-header">Dog-lovers say 'Dogs are the best!'</h1>
        <img src="pet-popularity-graph.jpg" />
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim at velit in facilisis. Aliquam a velit nunc. Mauris eu tellus nec felis elementum sagittis vitae in mi. Fusce lacinia, nunc fermentum eleifend auctor, elit lacus egestas neque, auctor elementum tellus quam a massa. Cras dictum non lacus ut dignissim. Nunc viverra consectetur magna ac rhoncus. Fusce elementum, augue at aliquam eleifend, purus nisi elementum justo, eget varius est magna eu lacus. Duis vel risus laoreet, rhoncus augue eu, lobortis purus. Vivamus suscipit convallis erat eget luctus. Proin enim felis, vestibulum sit amet feugiat a, ornare sit amet mauris.
          </li>
          <li>
            In feugiat quam imperdiet eros cursus, id aliquet nibh scelerisque. Proin maximus, orci vitae placerat suscipit, augue mi elementum lacus, et ornare mauris dolor id nunc. Maecenas vestibulum suscipit ligula, at cursus purus. Nam fermentum pharetra eleifend. Aenean vestibulum tortor nulla, at pulvinar est viverra in. Ut maximus sed mauris vel viverra. Proin volutpat urna ut elementum suscipit.
          </li>
        </ul>
      </div>

    <div class="Secondary_Article">
      <div>
        <h1 id="interactive-header">Cat-lovers say 'Cats are the best'!</h1>
        <img src="projection-chart.jpg" />
        <ul>
          <li class="red-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim at velit in facilisis. Aliquam a velit nunc. Mauris eu tellus nec felis elementum sagittis vitae in mi. Fusce lacinia, nunc fermentum eleifend auctor, elit lacus egestas neque, auctor elementum tellus quam a massa. Cras dictum non lacus ut dignissim. Nunc viverra consectetur magna ac rhoncus. Fusce elementum, augue at aliquam eleifend, purus nisi elementum justo, eget varius est magna eu lacus. Duis vel risus laoreet, rhoncus augue eu, lobortis purus. Vivamus suscipit convallis erat eget luctus. Proin enim felis, vestibulum sit amet feugiat a, ornare sit amet mauris.
          </li>
          <li>
            In feugiat quam imperdiet eros cursus, id aliquet nibh scelerisque. Proin maximus, orci vitae placerat suscipit, augue mi elementum lacus, et ornare mauris dolor id nunc. Maecenas vestibulum suscipit ligula, at cursus purus. Nam fermentum pharetra eleifend. Aenean vestibulum tortor nulla, at pulvinar est viverra in. Ut maximus sed mauris vel viverra. Proin volutpat urna ut elementum suscipit.
          </li>
        </ul>
      </div>
    </div>

    <div class="Tertiary_article">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit..... Nam sagittis neque ante, eu aliquam felis porttitor vestibulum. Aenean aliquet ipsum vel metus malesuada, <font color="red" face="Verdana, Geneva, sans-serif" size="+1">sit amet tincidunt justo rhoncus.</font>
      <br > <br>
      <br>
      <div class="title" style="font-weight: bold">Consectetur adipiscing elit</div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit..... Nam sagittis neque ante, eu aliquam felis porttitor vestibulum. Aenean aliquet ipsum vel metus malesuada, sit amet tincidunt justo rhoncus.
      </p>
    </div>
    </div>
  </div>
  <div class="modal">
    <h5 class="red-text">Alert!</h5>
    <p> You need to login!</p>
    <a href="/login.html" class="button">
      <div>Login</login>
    </a>
  </div>
</html>
```

```css
//CSS
.headline-article {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.Secondary_Article {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.Tertiary_article {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.main div > div > h1 {
  color: #a9a9a9;
}

.Secondary_Article > div > ul > li {
  color: red;
}

.red-text {
  color: red !important;
}
```

## Interviewer Notes

This question is meant to:

- test a candidate's knowledge of, experience with, and opinions on semantic HTML and HTML/CSS organization + patterns.
- help distinguish the candidate's experience level between regular and senior level.

This question was motivated from reading this [article](https://learn.shayhowe.com/html-css/writing-your-best-code/)

## What We're Testing

- Some familiarity and awareness with compliant HTML.

1. Avoiding divitis. Do they use semantic HTML?
2. Recognizing reusability of CSS.
3. Being able to separate content from style.
4. The HTML markup above was incorrect. Did they recognize this? Ie missing certain meta tags etc.

## Solutions

Here is a possible solution

```html
//HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <h2>Welcome Back</h2>
      <div>
        <h3><a href="https://www.chicagotribune.com/news/">Chicago</a></h3>
        <img src="chicago.jpg" alt="Picture of Chicago" />
        <ul>
          <li>234 square miles</li>
          <li>2.715 million residents</li>
        </ul>
      </div>
    </header>

    <!--
      Looking to see if the interviewee is aware of semantic html tags
      like `main` or `article` ie moving away from div-soup.
    -->
    <main>
      <article>
        <h1 id="interactive-header">Dog-lovers say 'Dogs are the best!'</h1>
        <img
          src="pet-popularity-graph.jpg"
          alt="A graph showing lowering life expectancy in US"
        />
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            dignissim at velit in facilisis. Aliquam a velit nunc. Mauris eu
            tellus nec felis elementum sagittis vitae in mi. Fusce lacinia, nunc
            fermentum eleifend auctor, elit lacus egestas neque, auctor
            elementum tellus quam a massa. Cras dictum non lacus ut dignissim.
            Nunc viverra consectetur magna ac rhoncus. Fusce elementum, augue at
            aliquam eleifend, purus nisi elementum justo, eget varius est magna
            eu lacus. Duis vel risus laoreet, rhoncus augue eu, lobortis purus.
            Vivamus suscipit convallis erat eget luctus. Proin enim felis,
            vestibulum sit amet feugiat a, ornare sit amet mauris.
          </li>
          <li>
            In feugiat quam imperdiet eros cursus, id aliquet nibh scelerisque.
            Proin maximus, orci vitae placerat suscipit, augue mi elementum
            lacus, et ornare mauris dolor id nunc. Maecenas vestibulum suscipit
            ligula, at cursus purus. Nam fermentum pharetra eleifend. Aenean
            vestibulum tortor nulla, at pulvinar est viverra in. Ut maximus sed
            mauris vel viverra. Proin volutpat urna ut elementum suscipit.
          </li>
        </ul>
      </article>

      <!--
        Checking to see if the interviewee notices
        the first article and the second articles' stylings are the same.
      -->
      <article class="article">
        <h1 id="interactive-header">
          Cat-lovers say 'Cats are the best'!
        </h1>

        <!--
          Images should always include the `alt` attribute, which should be descriptive of what the image
          contains. This is important since screen readers and accessibility devices rely on this attribute.
        -->
        <img
          src="projection-chart.jpg"
          alt="A graph showing projected impact of new legislative policy"
        />
        <ul>
          <li class="special-news-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            dignissim at velit in facilisis. Aliquam a velit nunc. Mauris eu
            tellus nec felis elementum sagittis vitae in mi. Fusce lacinia, nunc
            fermentum eleifend auctor, elit lacus egestas neque, auctor
            elementum tellus quam a massa. Cras dictum non lacus ut dignissim.
            Nunc viverra consectetur magna ac rhoncus. Fusce elementum, augue at
            aliquam eleifend, purus nisi elementum justo, eget varius est magna
            eu lacus. Duis vel risus laoreet, rhoncus augue eu, lobortis purus.
            Vivamus suscipit convallis erat eget luctus. Proin enim felis,
            vestibulum sit amet feugiat a, ornare sit amet mauris.
          </li>
          <li>
            In feugiat quam imperdiet eros cursus, id aliquet nibh scelerisque.
            Proin maximus, orci vitae placerat suscipit, augue mi elementum
            lacus, et ornare mauris dolor id nunc. Maecenas vestibulum suscipit
            ligula, at cursus purus. Nam fermentum pharetra eleifend. Aenean
            vestibulum tortor nulla, at pulvinar est viverra in. Ut maximus sed
            mauris vel viverra. Proin volutpat urna ut elementum suscipit.
          </li>
        </ul>
      </article>

      <!--
        1. Recognizing they can delete the empty p tag and just add margin-bottom.
        2. Recognizing the `div.title` should be an h*tag
        3. No inline-style
        4. Remove the deprecated font-tag
      -->
      <article>
        <p class="u-mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit..... Nam
          sagittis neque ante, eu aliquam felis porttitor vestibulum. Aenean
          aliquet ipsum vel metus malesuada,
          <em>sit amet tincidunt justo rhoncus.</em>
        </p>
        <h4>
          Consectetur adipiscing elit
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit..... Nam
          sagittis neque ante, eu aliquam felis porttitor vestibulum. Aenean
          aliquet ipsum vel metus malesuada, sit amet tincidunt justo rhoncus.
        </p>
      </article>
    </main>
    <div class="modal">
      <h5 class="warning-text">Alert!</h5>
      <p>You need to login!</p>
      <button>
        Login
      </button>
    </div>
  </body>
</html>
```

```css
/* CSS */
article {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
}

h1,
h2,
h3 {
  color: #a9a9a9;
}

h4 {
  font-weight: bold;
}

/*
  Looking to see if candidates prefer
   - class names that pertain to content and not appearance. Ie not 'red-text'
   - Also looking to see if the interviewee tries to avoid overly complicated selectors, which are brittle.
*/

.special-news-item {
  color: red;
}

.warning-text {
  color: red;
}

.em {
  font-family: Verdana, Geneva, sans-serif;
  color: red;
}

.u-mb-10 {
  margin-bottom: 10px;
}
```

## Follow-up Questions

### 1. What tools exist to automatically check for some of the issues you see in this HTML/CSS?

We just want to see if they have any awareness of automated tools that can test for this.
Also bonus points if they are aware of things like Axe (automated accessibility testing tool), Google Lighthouse, etc.

### 2. Why do we care about semantic HTML?

It indicates the meaning of the web-page and more importantly gives context to screen-readers (e.g. button).

## Evaluation Criteria

_Regular_

1. Pointing out the inconsistency of the CSS class naming convention

_Senior_

1. Pointing out the inconsistency of the CSS class naming convention
2. Noticing possible brittleness in the complicated selectors
3. Suggesting alt-text for the images and showing awareness of accessibility
4. Shows awareness of separating style from content. E.g. renaming class `red-text` to something
   semantically more meaningful.
5. Decorate markup with semantic classes or attributes that help with e2e testing
