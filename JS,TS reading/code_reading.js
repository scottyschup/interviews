/*
Code Smells Scavenger Hunt (~25 minutes)
--------------------------
This a hypothetical service being added to your codebase by a (very) junior developer,and you have been
tagged to review the PR.

What issues can you identify?
What kind of feedback would you give?

Focus on things like:
* bugs
* anti-patterns
* maintainability
* readability
* naming conventions
* code style

TL;DR: Try to identify as many problems as you can.
*/

// src/app/service/BlogFinder.ts
//------------------------------------------------------------------------------
01  class BlogFinder {
02    constructor(opts = {}) {
03      this.CACHE = {};
04      // Set up defaults
05      this.sortParam = opts.sortParam || 'created_at';
06      this.statusFilter = opts.statusFilter || 'active';
07      this.cacheEnabled = opts.cacheEnabled || true;
08    }
09
10    currentBlog(author, db, callback) {
11      try {
12        if (this.currentBlog) {
13          return this.currentBlog;
14        } else if (this.cacheEnabled) {
15          return this.currentBlog = this.CACHE[author];
16        } else {
17          return this.currentBlog = this.CACHE[author] = db.collection('blogs')
18            .find({ 'author_id': author._id })
19            .sort({ [this.sortParam]: 1 })
20            .toArray()
21            .slice(-1)[0]
22          ;
23        }
24      } catch (e) {
25        return null;
26      }
27    }
28    isLastCommentWithinDays(author, days) {
29      if (author.constructor.name === 'Author' && blog = this.currentBlog(author)) {
30        const isBefore = blog.posts.slice(-1)[0].comments.slice(-1)[0].created_at > +Date.now() - (days * 24 * 60 * 60 * 1000);
31
32        return isBefore ? true : false;
33      } else {
34        return false;
35      }
36    }
37  }
