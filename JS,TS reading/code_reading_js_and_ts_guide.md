# Code smells interviewer guide—Javascript/TypeScript
## Scoring
### These are based on a general sense of what candidates of various levels tend to find or miss
* 1 = basic issues
* 2 = common intermediate issues
* 3 = less common intermediate issues
* 4 = advanced issues

### Points breakdown (JS only)
|    LVL    |   1   |   2   |   3   |   4   | Tot.Lvl. |
|-----------|-------|-------|-------|-------|----------|
| Top-level |   9   |  36   |  18   |  12   |          |
|    +1     | **3** | **4** | **3** | **0** |    19    |
|    +2     |   4   | **4** | **2** | **0** |    46    |
|    +3     |   6   |   6   | **3** | **0** |    33    |
|    +4     |   0   |   4   |   4   | **0** |    20    |
|  Col.Tot. |  22   |  54   |  30   |  12   |
|  Lvl.Tot. |  12   |  48   |  38   |  20   |
|  Cum.Tot. |  12   |  60   |  98   |  118  |

Note: **Total** includes all top-level points <= that level, plus all bonus points that are <= level and fall under top-level points that are <= level. 

E.g. "level 2" includes all level 1 & 2 points, plus all level 1 & 2 bonus points except those that fall under levels higher than 2, so no level 1 & 2 bonus points that fall under levels 3 & 4:  
`9 + 30 + 5 + 3 + 4 + 4 = 55`

### Additional TS points:
|    LVL    |   1   |   2   |   3   |   4   | Tot.Lvl. |
|-----------|-------|-------|-------|-------|----------|
| Top-level |   4   |  16   |  15   |   4   |          |
|    +1     | **0** | **1** | **1** | **0** |     6    |
|    +2     |   0   | **0** | **0** | **0** |    16    |
|    +3     |   0   |   3   | **0** | **0** |    18    |
|    +4     |   0   |   0   |   0   | **0** |     4    |
|  Col.Tot. |   4   |  20   |  16   |   4   |
|  Lvl.Tot. |   4   |  17   |  19   |   4   |
|  Cum.Tot. |   4   |  21   |  40   |  44   |

### Combined totals
|    LVL    |   1   |   2   |   3   |   4   | Tot.Lvl. |
|-----------|-------|-------|-------|-------|----------|
| Top-level |  13   |  52   |  33   |  16   |          |
|    +1     | **3** | **5** | **4** | **0** |    25    |
|    +2     |   4   | **4** | **2** | **0** |    62    |
|    +3     |   6   |   9   | **3** | **0** |    51    |
|    +4     |   0   |   4   |   4   | **0** |    24    |
|  Col.Tot. |  26   |  74   |  46   |  16   |
|  Lvl.Tot. |  16   |  65   |  57   |  24   |
|  Cum.Tot. |  16   |  81   |  138  |  162  |

### Successful candidate expectations
**Note**: these are general guidelines, not hard and fast rules. Some great code-writers are terrible code-readers, and vice versa.

* Junior candidates [SE I-II] (JS: 25-50; JS+TS: 30-75)
  * all or most of the issues marked (1) with no help (JS: ~10; JS+TS: ~14)
  * around half of the issues marked (2) with little to no help (JS: ~23; JS+TS: ~33)
  * some of the issues marked (3) or (4) with some guidance (JS: ~3; JS+TS: ~6)
* Intermediate candidates [SSE I-II] (JS: 50-80; JS+TS: 75-125)
  * nearly all the issues marked (1) and (2) with little to no help (JS: ~50; JS+TS: ~70)
  * more than half of the issues marked (3) with little to no help, more with some guidance (JS: ~20; JS+TS: ~30)
  * some of the issues marked (4) with some guidance (JS: ~7; JS+TS: ~10)
* Advanced candidates [PSE I-II?] (JS: 80+; JS+TS: 125+)
  * all (or nearlyt all) the issues marked (1) or (2) with no help (JS: ~55; JS+TS: ~77)
  * most of the issues marked (3) with little to no help (JS: ~33; JS+TS: ~55)
  * most of the issues marked (4) with some guidance (JS: ~16; JS+TS: ~20)

#### Time factors
This exercise is meant to take at least 30 minutes for plain Javascript, 45 for TypeScript. So if a candidate has more or less time to do the exercise, adjust the score expectations accordingly (e.g. if only had 30 minutes to do TS and got 50 points, adjusted score should be `50 / (30 / 45)`). It may be best to start with JS version, and then switch to TS version if time remains.

## Problems
### Bugs
* **Javascript**
  * [ ] (1) `#currentBlog` never gets past first `if` statement; it just returns the function itself 
      *This one is more of a red flag if they don't catch it!*
  * [ ] (2) `statusFilter` never used anywhere
    * [ ] (2) if asked, candidate should suggest adding it into the `#find` portion of the db query: `.find({ 'author_id': author._id, 'status': this.statusFilter })`)
  * [ ] (2) `callback` is never called in `#currentBlog`
    * [ ] (1) if asked, it should be called with the result of the db query as an arg: `callback(this.currentBlog)`
    * [ ] (4) bonus points if they point out that `callback` is optional and suggest `callback?.(this.currentBlog)`
  * [ ] (2) `#currentBlog` overwrites itself with `return this.currentBlog = this.CACHE[author];`
    * [ ] (3) if the candidate guesses the authorial intent was to memoize and suggests an alternate name for the property that is not identical to the function it's in
  * [ ] (3) `opts.cacheEnabled || true` will always be `true`, even if `false` is passed in
  * [ ] (3) `author` object used as a key in a POJO
    * [ ] (1) if asked how to fix, junior candidates should suggest using an author id instead (or one of the following)
    * [ ] (2) intermediate candidates should suggest using `author._id`, recognizing that property is used elsewhere (or below)
    * [ ] (3) advanced candidates should suggest using a combination of `author._id` as well as the various variables passed in (unless they've already mentioned not using variables in cached queries)
    * [ ] (4) if asked what would happen if an `author` object were used as a key in a regular object, advanced candidates should know that the only key in the cache would be '[Object object]' and it would be overwriting itself each time

* **TypeScript**
  * [ ] (1) `CurrentBlogFunction` is typed to return a `Blog` object, but the `catch` block returns `null`
  * [ ] (2) coercing `this.currentBlog` to `Blog` (via `any`) "fixes" the type error, but obfuscates the bad code that caused the error
    * [ ] (3) bonus points for stating that `varX as TypeY` is almost always a bad idea because it defeats the primary purpose of TypeScript
  * [ ] (3) `cacheEnabled` types don't match between what the class is epxecting and what the `opts` hash accepts.


### Anti-patterns
A lot of these blur together categorically `¯\_(ツ)_/¯`

* **Bad practices**
  * **Javascript**
    * [ ] (1) `try...catch` in `#currentBlog` swallows all errors completely  
      *This one is also more of a red flag if they don't catch it!*
      * [ ] (1) bonus point if they suggest handling and/or logging the error somewhere without prompting from interviewer
    * [ ] (2) `CACHE` in all caps implies that the cache is a constant
    * [ ] (2) cache should not be initialized in `#constructor` (or live in the `BlogFinder` service at all, really)
    * [ ] (2) no sanity checks in timestamp comparison in `#isLastComment...`
      * [ ] (1) bonus point for suggesting optional chaining operator `?`
    * [ ] (2) passing around a db object--WTAF?!
    * [ ] (2) unnecessary ternary: `return isBefore ? true : false;` should just be `return isBefore;`
    * [ ] (4) `db` queries have variable parameters that are not used in the cache key for lookup

  * **TypeScript**
    * [ ] (1) `{}` should never be used as a type (as it is for `CACHE`)
    * [ ] (2) inconsistent use of `I-` or `T-` prefixes for types/interfaces
    * [ ] (2) unnecessary mixing of types and interfaces
    * [ ] (2) `days` typed as `any` in `#isLastComment...`
    * [ ] (3) unnecessary type-checking in `#isLastComment...` (i.e. `author.constructor.name === 'Author'`)
    * [ ] (3) a comment/post body that's optional doesn't make sense
      * [ ] (1) use '' for falsey value instead if necessary

* **Maintainability**
  * **Javascript**
    * [ ] (1) little documentation, and what's there is terrible
    * [ ] (2) no tests
    * [ ] (2) days --> milliseconds conversion in `#isLastComment...` should be done in a utility class or datetime library (i.e. `days * 24 * 60 * 60 * 1000`)
    * [ ] (3) `#currentBlog` attempts to memoize and cache
      * [ ] (1) bonus point if they note that the memoized value is always used even though it ignores the `author` passed in and the `cacheEnabled` params
    * [ ] (3) magic strings in the default values in `#constructor`
    * [ ] (3) `else` parts of the conditionals in both `#currentBlog` and `#isLastComment...` are unnecessary
      * [ ] (1) bonus point if they suggest using a guard clause instead
    * [ ] (4) Seems like the type of thing that will be used as a service, but is written as if used to generate instances

  * **TypeScript**
    * [ ] (1) `_id`, `createdAt`, and `updatedAt` should be refactored into a `DbRecordBase` type to reduce repetition.
    * [ ] (2) `Author` type should be a union of `User` type and additional properties.
    * [ ] (2) types not ordered alphabetically or in any sort of logical way
    * [ ] (3) Types with `likes` and `author` could be refactored into `Likeable` and `Authorable` types tobe used in unions to reduce repetition.
    * [ ] (4) Database types (and others that are likely to be reused) should be imported from a separate `models` (or similar) file.

* **Readability/naming**
  * **Javascript**
    * [ ] (1) `#slice(-1)[0]` used frequently, but not clear what its intent is. 
      * [ ] (1) bonus point if they suggest refactoring into its own function.
      * [ ] (3) most junior and many intermediate candidates assume this grabs the first element; bonus points if they know using a negative index with `Array#slice` returns an array of that number of elements starting from the end, which means this pattern is grabbing the last element of the array
    * [ ] (1) assignment in second half of conditional expression `this.blog = this.currentBlog(author)` in `#isLastComment...`
      * [ ] (1) bonus point if they recognize that while this is an anti-pattern, it does actually work
      * [ ] (2) this is almost always interpreted by candidates as being a typo in an equality comparison; bonus point if they realize it's an assignment based on the context without receiving any help/hints
    * [ ] (1) `currentBlog` is not a good name; it's not clear what "current" means
      * [ ] (3) sort and filter params can be used to get non-"current" blogs
    * [ ] (1) `isBefore` is not a good name
    * [ ] (1) Law of Demeter violation: date comparison in `#isLastComment...`
    * [ ] (2) Law of Demeter violation: db query in `#currentBlog` (the `toArray` and `slice` bits should go elsewhere)
      * [ ] (2) bonus points for calling either LoD violation a "Law of Demeter violation"
    * [ ] (2) double assignment in `else` clause (`this.currentBlog = this.CACHE[author] = db...`)
    * [ ] (2) hashes called `opts` not the best way to pass around info
      * [ ] (1) bonus points for suggesting splitting into individual args
      * [ ] (2) bonus points for suggesting destructuring
    * [ ] (2) `BlogFinder` is not a good name for this class
    * [ ] (2) `isLastComment...` input variable `days` is unclear whether its a number or array of Dates
    * [ ] (2) `isLastCommentWithinDays` could be better named (e.g. `blogHasUserCommentSince` which takes a time object rather than integer)

    * [ ] (4) `#isLastComment...` seems like it belongs somewhere else (like on a `blog` or `post` model)

  * **TypeScript**
    * [ ] (1) `isLastComment...` input variable `days` is typed as `any` but clearly expects a number
    * [ ] (3) types not consistently named to reflect usage or a standard naming scheme (e.g. should be `IsCommentWithinDaysFn` instead of `ComWithinDaysFn` to reflect what function it is defining; and should be `CurrentBlogFn` instead of `CurrentBlogFunction` to be consistent with `IsCommentWithinDaysFn`)

### Stylistic
* **Javascript**
  * [ ] (1) the long line in `#isLastComment...` is way too long. 
    * [ ] (1) bonus point for suggesting adding a `max-len` linter rule or specify a line length limit (like 80 or 100)
  * [ ] (2) multiple unnecessary returns in `#currentBlog` and `#isLastComment...`
  * [ ] (2) inconsistent use of newline spacing between assignments. Sometimes none, sometimes one, sometimes multiple.

* **TypeScript**
  * [ ] (2) inconsistent use of newline spacing between type definitions. Sometimes none, sometimes one, sometimes multiple.
  * [ ] (2) inconsistent use of `,` and `;` in type definition properties.
    * [ ] (1) bonus point for suggesting always using `;`
  * [ ] (2) unnecessary use of `?` and `| undefined` in `PostComment.title`


### Miscellany
#### Overall
* [ ] (2) if time remains, ask what `+Date.now()` is trying to achieve 
  * [ ] (3) bonus points for knowing that coersion of `Date.now()` to `number` is unnecessary because `Date.now()` already returns a `number`
* [ ] (3) points if candidate is not bogged down by types, but primarily looks at them for syntax errors/stylistic issues, and otherwise just references them when needed.

#### Can count multiple times
* [ ] (-2) for identifying acceptable code as problematic without being able to justify why.
