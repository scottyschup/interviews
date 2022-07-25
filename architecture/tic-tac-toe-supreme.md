# Tic-Tac-Toe Supreme

| | |
|-|-|
| **Difficulty** |Medium|
| **Completion Time** |45+ minutes|
| **Interview Slot** |Architecture|

## Instructions for the Interviewer

This question is meant to last an entire Architecture interview slot. It assumes knowledge of Tic-Tac-Toe, so make sure the candidate knows how the game works (the game is sometimes called Xs and Os, or Noughts and Crosses, in case that helps). Most people know the game, but if not, it's simple enough that a few quick demo rounds should suffice.

Start the interview by asking the Part 1: Initial Tic-Tac-Toe Game question, below. Once you are satisfied with that phase, move onto the Part 2: Play Against The Computer question. These two parts cover a decent base of component architecting and async calls.

As remaining time allows, pick one of the bonus features below and ask that. If they finish that bonus feature, pick another one, and so on. Most candidates probably won't get to more than one bonus feature, and some might not even get that far depending how Parts 1 and 2 play out.

The choice of bonus features to ask about is up to the interviewer, based on hiring needs, candidate experience, the course of the inteview, and interviewer preference. They are not listed below in any particular order. If you're feeling generous, you can even let the candidate choose from a list.

When in doubt about any feature requirements, encourage the candidate to make whatever reasonable assumptions they want, as long as they are clear about what they are assuming.

Given that this is a pretty open-ended design question, features don't have solutions as such. Instead, for each feature, there are notes about the sorts of things to look for and ask about.

## What We're Testing

* Higher-level design using multiple components to pass and share state
* Asynchronous requests
* Managing session data
* Handling open-ended feature requests
* Ability to explain and defend design decisions

## Part 1: Initial Tic-Tac-Toe Game

>We are going to design a web application for playing Tic-Tac-Toe. We will add functionality as we go and as time allows. To start, let's focus on a basic Tic-Tac-Toe game that alternates between two players sitting at the same computing device. 

>What would your high-level code design for this be? You don't need to write any actual lines of code. Instead, we want to know what sorts of objects, components, or the like, you would propose; and what they would do, how they would interact, etc.

### Interviewer Notes for Initial Tic-Tac-Toe Game
* The idea with the initial question is to get the candidate to the stage of "I'd have a Board component, and a blah component. The Board component would be responsible for x, the blah component for y." We don't want code, but instead a white board-style sketch of how they would break the app up, what high-level functions would live where, etc.
* If they have questions about the mechanics of gameplay, any reasonable assumptions they want to make are fine, but encourage them to limit their focus to basic game play for the time being. Anything fancy, like the ability to undo a move, can be touched on later.
* Are they using components or just doing things in a monolith? If a monolith, ask them to consider how they might benefit from code reuse. E.g., "Is there anything in a Tic-Tac-Toe board that would benefit from being abstracted out because there are multiple instances of it?" A stronger solution will have at least two components: something like Square and something like Board (there are other possibilities, and more components might make sense for their specific design, but a single monolithic component probably isn't the way to go).
* Are they making each square responsible for maintaining its own state? Or are they using something like a Board component to keep track of which squares are filled in and with what? The latter approach is probably the better one, and easier to work with. If each square has to know its own state, figuring out things like game-ending-conditions can become difficult.
* When clicked, how does a square know what to display? More generally, how does communication between the board and each square work? How do they stay in sync?
* Do they have a way to determine a winner? How about a way to determine if the game ended in a tie? They shouldn't write the actual code, but they should be able to clearly explain how and where, in their setup, game-ending conditions can be determined. E.g., "I'm tracking all the squares in this component here, like this. Whenever a square is clicked, there's a function that checks for game-ending conditions. I define the game-ending conditions using a hard-coded array of possible board configurations, here."
* How do they show whose turn it is? How do they show when the game has ended?
* What sort of state do they need to keep track of and how are they doing so? Note that at this stage they probably shouldn't be thinking of a global store like redux. So if they want to go that route, it's worth asking them why they feel they need to do so for the problem requirements as given.

## Part 2: Play Against the Computer
>The Product department wants users to be able to play a 1-person game against a computer opponent, instead of always having to play against another human. You can assume that the backend team will build a REST API endpoint that you can call to get the computer's next move. 

>How would you expand your design to allow players to compete against the computer?

### Interviewer Notes for Play Against the Computer
* The candidate can make any reasonable assumptions they want about the backend API (imagine the backend team asks the front-end for design input). For example, it's fine to assume a simple REST API that requires POSTing board state in the form of an array where the 0th index represents the upper-left square of the board, the 1st index the upper-middle square, the 2nd the upper-right square, the 3rd the center-left square, and so on, with the 8th and final index representing the lower-right square. And maybe each index contains 0 if the square has been filled by the human player, 1 if the square has been filled by the computer player, or empty if the square is still available. Any reasonable set of conditions is fine, as long as the candidate is clear about them and designs accordingly.
*  Exactly how the candidate wants to process the API request and response is up to them, but the idea is to introduce an async call and all that entails (error handling, etc.).
* How are their async calls to the API going to be made? Fetch? Axios? Something else? There isn't a right or wrong answer, but it's good to determine why the candidate is making their choice, and what their experience level is ("I'd introduce axios because I've worked with it, find it easy, and it's IE compatible unlike fetch", or "I'd just use fetch and polyfill for IE as needed, because I don't like introducing 3rd party libraries unless absolutely necessary." That sort of thing.)
* Depending on how they are managing their application state, will their solution require any kind of middleware (e.g., thunks)? Or is their design simple enough to not need it?
* How will their app handle waiting for the API to respond? What if there's a 5 second delay? A 10 second one? What if the API is down completely?
* Will the app have a way of displaying any sort of error message? Does this introduce any new components or any new state management needs?

## Bonus Feature: Saving Incomplete Games
>The Product department wants users to be able to save games in progress and come back to them later to finish. Games should be picked up where they left off, with the squares as they were when the game was saved, and the appropriate player given their turn.

>How would you change your design to allow users to save games and finish them later?

### Interviewer Notes for Saving Incomplete Games
* If their design already has some kind of User Account feature as part of it, then tying the games to the account somewhere on the backend probably makes the most sense. If there hasn't been a User Accounts feature added yet as part of other work, the candidate should feel free to implement one as part of satisfying this feature. If they want to do so, that can be a good chance to ask about things like session IDs vs. tokens (imagine the backend team asked the frontend for preferences on managing session state).
Alternatively, this could be a chance for the candidate to talk about localStorage, or some other creative persistence option that doesn't require knowing a user's account info (e.g., save games to a DB and give the user a code to load the game).
* Exactly what info will they use to save and restore game state? 
* How and where in the app will they handle letting users load saved games?
* What happens if a game cannot be successfully saved or reloaded?
* Are they removing saved games when they are loaded and finished?
* Does their design require changing the app's broader routing system or way of managing state?

## Bonus Feature: Leaderboard
>The Product department wants to add a leaderboard feature. Users get a point for winning games, and lose a point for losing games. Users should be able to see their ranking, as well as have a scrollable list of all the rankings, with the top 20 initially showing.

> How would you implement this new functionality?

### Interviewer Notes for Leaderboard
* This is another feature that might make the candidate consider introducing User Accounts, but the choice is up to them (as elsewhere, it's a good opportunity to get them to talk about tradeoffs and pros v. cons).
* If they don't introduce User Accounts, ask them how they would identify users, how they would persist the leaderboard, and how to know about returning users.
* How do they handle updating the leaderboard? Do they have experience or preferences among polling vs. websockets vs. server-sent events?
* Does their solution require changing the app's broader routing system or way of managing state?

## Bonus Feature: Matching Human Players
>The Product department wants to add a matchmaking feature, where a player can find someone else to play against online, rather than requiring two players to be on the same device.

>How would you implement this new functionality?

### Interviewer Notes for Matching Human Players
* The candidate is free to assume whatever support they think they will need from the backend, as long as they are clear about what sorts of services, endpoints, etc. they are assuming will be available.
* They're going to need some way of asking a player to join a game. Is their design going to be opt-in, where you proactively have to click something that says "Ping me if someone wants to play", or will it just ping you if you're online and someone wants to play against another human?
* Is there a way to try to match with a specific user? This might be easier to do with a notion of User Accounts, but doesn't have to be done that way. E.g., maybe as long as two people are online at the same time and enter the same code, they can be matched.
* How will the details of the match-finding work? Will it look for players online not currently in the middle of a game? Will it care if the player is playing against the computer or another human?
* Does their solution require changing the app's broader routing system or way of managing state?

## Bonus Feature: Color and Shape Schemes

>The Product team wants users to be able to change the appearance of their games. They should have a choice of color schemes (dark mode, etc.), and also different shapes to use instead of just Xs and Os (Unicorns and Rainbows, Cats and Dogs, etc.).

How would you alter your design to accommodate this?

### Interviewer Notes for Color and Shape Schemes
* We don't want them to write actual css code, but rather explain how they would set up their design so that when the actual code was written, the feature would work.
* They have their choice of css tools to use, but hopefully they can speak to why they suggest what they do, and what advantages their choices have.
* How do they handle the images/icons needed for the different shapes?
* Has the candidate considered persisting the player's style setting? The different approaches will depend on what the candidate has already added to their design. E.g., if there are User Accounts as part of an earlier feature, then writing to a backend with a record tied to user login info probably makes the most sense. If there are no user accounts yet, then the candidate can introduce them, or localStorage could be used, or they could still write to a backend and use some sort of code for letting the user fetch their settings.

## Evaluation Criteria

- A good candidate (regardless of level), should clear the Part 1: Initial Tic-Tac-Toe Game question with a reasonable answer that convinces you they know the basics of component design and sharing state across components. Experienced devs should be able to come up with a solid answer to that part in 15 minutes or so. Less experienced devs might take longer and need more explicit hints or guidance, but they should still be able to come up with a pretty good answer.
- More experienced devs should have minimal amounts of "because this is the way I know" justifications. Less experienced devs legitimately might not have been exposed to much variety yet. But the more senior the candidate, the more their decisions should be based on experience and an understanding of pros and cons of various alternatives. 
- The more experienced the dev, the better their answers should be on any bonus features (though again, don't expect candidates to get through all, or even most of, the features).
- Did they isolate responsibilities well and introduce new components in a sensible way to handle new features? Did they avoid having "god components"?
- How scalable and flexible were their decisions? When you asked to add a feature, how much did they have to redesign their past work to accommodate? If they were constantly having to go back and rip things up, that's probably a bad sign. A stronger architecture would be built to be more extensible in the first place.
- Did they anticipate issues in advance or require regular prompts to make them think about things a good design should take into account? (e.g., for features where it's relevant, did they consider error handling or did you need to raise it?)
- How clear were their explanations? If they were making assumptions, were they clear about doing so?





