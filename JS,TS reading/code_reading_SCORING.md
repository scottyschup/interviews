<style>
  pre {
    border: 1px solid black;
    padding: .25rem !important;
  }

  ul {
    list-style: none;
    padding-left: .25rem !important;
  }

  li > ul {
    padding-left: 2rem !important;
  }

  input {
    outline: 1px solid black;
  }

  input[type="checkbox"] {
    height: 25px;
    vertical-align: middle;
    width: 25px;
  }

  #_html {
    border: none;
    font-size: 15px;
    margin: 0;
    max-width: 75vw; /* This is roughly the width when printed, which corresponds to ~100 chars */
    padding: 1rem;
  }

  div,
  pre,
  input {
    line-height: 1.5;
    margin: 2px !important;
    margin-bottom: 0.33rem !important;
  }

  @media print {
    div,
    pre,
    input,
    li {
      break-inside: avoid;
    }
  }
</style>

<label>
  Candidate name:
  <input style="width: 300px" />
</label>
<label>
  Datetime:
  <input style="width: 150px" />
</label>
<label>
  Score:
  <input style="width: 75px" />
</label>

### Code Smells Scavenger Hunt<br /><small>Score card</small>

```ts
001   import { DbUuid, MyMongoLikeDb } from 'myMongoLikeDb';
002
003   // Types
004   // Database records
005   type Author = {
006     _id: DbUuid;
007     _created_at: Date;
008     _updated_at: Date;
009     firstName: string;
010     lastName: string;
011    blogs(): Blog[],
012    posts(): BlogPost[];
013  }
014  type Blog = {
015    _id: DbUuid;
016    _created_at: Date;
017    _updated_at: Date;
018    name: string;
019    authorId: number;
020    author(): Author,
021    posts(): BlogPost[];
022    followers(): IUser[];
023  };
024
025  type BlogPost = {
026    _id: DbUuid;
027    _created_at: Date;
028    _updated_at: Date;
029    name: string;
030    likes: number;
031    authorId: Author['_id'];
032    blog: Blog;
033    title: string;
034    body?: string;
```
* [ ] (3) a comment/post body that's optional doesn't make sense
  * [ ] (1) use `''` for falsey value instead if necessary

```ts
035    comments(): PostComment;
036    author(): Author,
037  }
038  type PostComment = {
039    _id: DbUuid;
040    _created_at: Date;
041    _updated_at: Date;
042    title?: string | undefined;
```
* [ ] (2) unnecessary use of `?` and `| undefined`

```ts
043    body?: string;
044    blogId: number;
045    blog(): Blog;
046  }
047  interface IUser {
048    _id: DbUuid;
049    _created_at: Date;
050    _updated_at: Date;
051    firstName: string;
052    lastName: string;
053  }
054  // Non-database types
055  type TBlogFinderOpts = {
056    sortParam: string;
057    statusFilter: string;
058    cacheEnabled?: boolean;
059  }
```
* [ ] (2) inconsistent use of `I-` or `T-` prefixes for types/interfaces
* [ ] (2) unnecessary mixing of types and interfaces

```ts
// Line broken up so it's visible when printing.
060  type CurrentBlogFunction = (author: Author, db: MyMongoLikeDb, callback?: (blog: Blog) => any) 
                                                                                            => Blog;
061  type ComWithinDaysFn = (author: Author, days: any) => boolean;
```
* [ ] (1) `isLastComment...` input variable `days` is typed as `any` but clearly expects a number

#### GENERAL TYPESCRIPT ISSUES
* [ ] (1) `_id`, `createdAt`, and `updatedAt` should be refactored into a `DbRecordBase` type to reduce repetition.
* [ ] (2) `Author` type should be a union of `User` type and additional properties.
* [ ] (2) types not ordered alphabetically or in any sort of logical way
* [ ] (2) inconsistent use of newline spacing between type definitions. Sometimes none, sometimes one, sometimes multiple.
* [ ] (2) inconsistent use of `,` and `;` in type definition properties.
  * [ ] (1) bonus point for suggesting always using `;`
* [ ] (3) types not consistently named to reflect usage or a standard naming scheme (e.g. should be `IsCommentWithinDaysFn` instead of `ComWithinDaysFn` to reflect what function it is defining; and should be `CurrentBlogFn` instead of `CurrentBlogFunction` to be consistent with `IsCommentWithinDaysFn`)
* [ ] (3) Types with `likes` and `author` could be refactored into `Likeable` and `Authorable` types tobe used in unions to reduce repetition.
* [ ] (4) Database types (and others that are likely to be reused) should be imported from a separate `models` (or similar) file.

```ts
062
063
064
065  // BlogFinder
066  class BlogFinder {
```
* [ ] (2) `BlogFinder` is not a good name for this class

```ts
067    CACHE: {};
```
* [ ] (2) `CACHE` in all caps implies that the cache is a constant
* [ ] (1) `{}` should never be used as a type

```ts
068    sortParam: string;
069    statusFilter: string;
070    cacheEnabled: boolean;
```
* [ ] (3) `cacheEnabled` types don't match between what the class is epxecting and what the `opts` hash accepts.

```ts
071
072    constructor(opts: TBlogFinderOpts) {
```
* [ ] (2) hashes called `opts` not the best way to pass around info
  * [ ] (1) bonus points for suggesting splitting into individual args
  * [ ] (2) bonus points for suggesting destructuring

```ts
073      // Initialize cache
074      this.CACHE = {};
```
* [ ] (2) cache should not be initialized in `#constructor` (or live in the `BlogFinder` service at all, really)

```ts
075      // Set up defaults
076      this.sortParam = opts.sortParam || 'created_at';
077      this.statusFilter = opts.statusFilter || 'active';
```
* [ ] (2) `statusFilter` never used anywhere
  * [ ] (2) if asked, candidate should suggest adding it into the `#find` portion of the db query: `.find({ 'author_id': author._id, 'status': this.statusFilter })`)

```ts
078      this.cacheEnabled = opts.cacheEnabled || true;
```
* [ ] (3) `opts.cacheEnabled || true` will always be `true`, even if `false` is passed in
* [ ] (3) shouldn't use magic strings in the default values in `#constructor`

```ts
079    }
080
081    currentBlog: CurrentBlogFunction = (author, db, callback) => {
```
* [ ] (1) `currentBlog` is not a good name; it's not clear what "current" means
  * [ ] (3) sort and filter params can be used to get non-"current" blogs

* [ ] (2) passing around a db object--WTAF?!

* [ ] (2) `callback` is never called in `#currentBlog`
  * [ ] (1) if asked, it should be called with the result of the db query as an arg: `callback(this.currentBlog)`
  * [ ] (4) bonus points if they point out that `callback` is optional and suggest `callback?.(this.currentBlog)`

```ts
082      try {
083        if (this.currentBlog) {
```
* [ ] (1) `#currentBlog` never gets past first `if` statement; it just returns the function itself  (This one is more of a red flag if they don't catch it!)

```ts
084          return this.currentBlog;
085        } else if (this.cacheEnabled) {
086          return this.currentBlog = this.CACHE[author];
```
* [ ] (2) `#currentBlog` overwrites itself with `return this.currentBlog = this.CACHE[author];`
  * [ ] (3) if the candidate guesses the authorial intent was to memoize and suggests an alternate name for the property that is not identical to the function it's in

* [ ] (3) `author` object used as a key in a POJO
  * [ ] (1) if asked how to fix, junior candidates should suggest using an author id instead (or one of the following)
  * [ ] (2) intermediate candidates should suggest using `author._id`, recognizing that property is used elsewhere (or below)
  * [ ] (3) advanced candidates should suggest using a combination of `author._id` as well as the various variables passed in (unless they've already mentioned not using variables in cached queries)
  * [ ] (4) if asked what would happen if an `author` object were used as a key in a regular object, advanced candidates should know that the only key in the cache would be '[Object object]' and it would be overwriting itself each time

```ts
087        } else {
088          return this.currentBlog = this.CACHE[author] = db.collection('blogs')
```
* [ ] (2) double assignment in `else` clause (`this.currentBlog = this.CACHE[author] = db...`)

```ts
089            .find({ 'authorId': author._id })
090            .sort({ [this.sortParam]: 1 })
091            .toArray()
092            .slice(-1)[0]
093          ;
```
* [ ] (1) `#slice(-1)[0]` used frequently, but not clear what its intent is.
  * [ ] (1) bonus point if they suggest refactoring into its own function.
  * [ ] (3) bonus points if they know using a negative index with `Array#slice` returns an array of that number of elements starting from the end, which means this pattern is grabbing the last element of the array (most junior and many intermediate candidates assume this grabs the first element)
* [ ] (2) Law of Demeter violation: db query in `#currentBlog` (the `toArray` and `slice` bits should go elsewhere)
* [ ] (4) `db` queries have variable parameters that are not used in the cache key for lookup
* [ ] (3) `#currentBlog` attempts to memoize and cache
  * [ ] (1) bonus point if they note that the memoized value is always used first even though it ignores the `author` passed in and the `cacheEnabled` params

```ts
094        }
095      } catch (e) {
096        return null;
097      }
```
* [ ] (1) `CurrentBlogFunction` is typed to return a `Blog` object, but the `catch` block returns `null`
* [ ] (1) `try...catch` in `#currentBlog` swallows all errors completely (This one is also more of a red flag if they don't catch it!)
  * [ ] (1) bonus point if they suggest handling and/or logging the error somewhere without prompting from interviewer

```ts
098    }
099    isLastCommentWithinDays: ComWithinDaysFn = (author, days) => {
```
* [ ] (2) `isLastCommentWithinDays` could be better named (e.g. `blogHasUserCommentSince` which takes a time object rather than integer)
* [ ] (2) `isLastComment...` input variable `days` is unclear whether its a number or array of Dates (JS only; TS clarifies this above)
* [ ] (4) `#isLastComment...` seems like it belongs somewhere else (like on a `blog` or `post` model)

```ts
100      if (author.constructor.name === 'Author' && blog = this.currentBlog(author)) {
```
* [ ] (3) unnecessary type-checking in `#isLastComment...` (i.e. `author.constructor.name === 'Author'`)

* [ ] (1) assignment in second half of conditional expression `this.blog = this.currentBlog(author)` in `#isLastComment...`
  * [ ] (1) bonus point if they recognize that while this is an anti-pattern, it does actually work
  * [ ] (2) this is almost always interpreted by candidates as being a typo in an equality comparison; bonus point if they realize it's an assignment based on the context without receiving any help/hints

```ts
101        const isBefore = (blog as any as Blog).posts().slice(-1)[0].comments().slice(-1)[0]
                                        ._created_at > +Date.now() - (days * 24 * 60 * 60 * 1000);
```
* [ ] (1) this line is waaaaaaaaay too long.
  * [ ] (1) bonus point for suggesting adding a `max-len` linter rule or specifying a line length limit (like 80 or 100)
* [ ] (1) Law of Demeter violation: date comparison in `#isLastComment...`
* [ ] (2) days --> milliseconds conversion in `#isLastComment...` should be done in a utility class or datetime library (i.e. `days * 24 * 60 * 60 * 1000`)
* [ ] (2) no sanity checks in timestamp comparison in `#isLastComment...`
  * [ ] (1) bonus point for suggesting optional chaining operator `?`
* [ ] (2) if time remains, ask what `+Date.now()` is trying to achieve
  * [ ] (3) bonus points for knowing that coersion of `Date.now()` to `number` is unnecessary because `Date.now()` already returns a `number`
* [ ] (2) coercing `this.currentBlog` to `Blog` (via `any`) "fixes" the type error, but obfuscates the bad code that caused the error
  * [ ] (3) bonus points for stating that `varX as TypeY` is almost always a bad idea because it defeats the primary purpose of TypeScript

```ts
102
103        return isBefore ? true : false;
```
* [ ] (1) `isBefore` is not a good name

* [ ] (2) unnecessary ternary: `return isBefore ? true : false;` should just be `return isBefore;`

```ts
104      } else {
```
* [ ] (3) `else` parts of the conditionals in both `#currentBlog` and `#isLastComment...` are unnecessary
  * [ ] (1) bonus point if they suggest using a guard clause instead

```ts
105        return false;
106      }
107    }
108  }
109
```

#### GENERAL AND WIDESPREAD ISSUES
* [ ] (1) little documentation, and what's there is terrible
* [ ] (2) no tests
* [ ] (2) multiple unnecessary returns in `#currentBlog` and `#isLastComment...`
* [ ] (2) inconsistent use of newline spacing
* [ ] (2) bonus points for calling either LoD violation a "Law of Demeter violation" (or knowing what that is if asked)
* [ ] (3) points if candidate is not bogged down by types, but primarily looks at them for syntax errors/stylistic issues, and otherwise just references them when needed.
* [ ] (4) Seems like the type of thing that will be used as a service, but is written as if used to generate instances
* [ ] (-2) for identifying acceptable code as problematic without being able to justify why.

