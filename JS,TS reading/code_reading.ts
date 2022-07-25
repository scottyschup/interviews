/*
Code Smells Scavenger Hunt (~40 minutes)
--------------------------
This a hypothetical service being added to your codebase by a (very) junior developer and you have been
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
035    comments(): PostComment;
036    author(): Author,
037  }
038  type PostComment = {
039    _id: DbUuid;
040    _created_at: Date;
041    _updated_at: Date;
042    title?: string | undefined;
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
060  type CurrentBlogFunction = (author: Author, db: MyMongoLikeDb, callback?: (blog: Blog) => any) => Blog;
061  type ComWithinDaysFn = (author: Author, days: any) => boolean;
062
063
064
065  // BlogFinder
066  class BlogFinder {
067    CACHE: {};
068    sortParam: string;
069    statusFilter: string;
070    cacheEnabled: boolean;
071
072    constructor(opts: TBlogFinderOpts) {
073      // Initialize cache
074      this.CACHE = {};
075      // Set up defaults
076      this.sortParam = opts.sortParam || 'created_at';
077      this.statusFilter = opts.statusFilter || 'active';
078      this.cacheEnabled = opts.cacheEnabled || true;
079    }
080
081    currentBlog: CurrentBlogFunction = (author, db, callback) => {
082      try {
083        if (this.currentBlog) {
084          return this.currentBlog;
085        } else if (this.cacheEnabled) {
086          return this.currentBlog = this.CACHE[author];
087        } else {
088          return this.currentBlog = this.CACHE[author] = db.collection('blogs')
089            .find({ 'authorId': author._id })
090            .sort({ [this.sortParam]: 1 })
091            .toArray()
092            .slice(-1)[0]
093          ;
094        }
095      } catch (e) {
096        return null;
097      }
098    }
099    isLastCommentWithinDays: ComWithinDaysFn = (author, days) => {
100      if (author.constructor.name === 'Author' && blog = this.currentBlog(author)) {
101        const isBefore = (blog as any as Blog).posts().slice(-1)[0].comments().slice(-1)[0]._created_at > +Date.now() - (days * 24 * 60 * 60 * 1000);
102
103        return isBefore ? true : false;
104      } else {
105        return false;
106      }
107    }
108  }
109
