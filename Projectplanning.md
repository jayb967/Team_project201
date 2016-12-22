<h1>Team Name: Zero Heroes</h1>

<p>Team Members: Yana Rodenska, Shiv Unadkat, Jay Balderas,  Rose Anne Gallus
GitHub Master: Yana

Project: Memory Card Game that provides the User with an exciting gaming experience testing their memory by turning over one card and then another in an attempt to match the second cards picture to the first cards picture.

OVERVIEW
There will be three pages within our projects domain model.  A brief explanation of each follows:

Main page -
The user will be asked to enter his name and if they want to play a game.
For a yes answer:
instructions for playing the game will be displayed
A button “Start Game” will be displayed
A digital timer set to zero will be displayed
Four rows of four cards placed facing down are displayed
Once the “Start Game” is clicked the timer will begin and the user will have the ability to click on only two cards at a time.
If a match occurs the cards will remain facing up
If a match doesn’t occur the cards will automatically be turned face down.
The user may “Register Your Score” or they may “Play Again”.  
If they choose to “Register Your Score”, they will be transported to the Top Scores Page.
If they choose to “Play Again” the cards will be turned over, the timer reset and the user can begin clicking on cards.
		    ii.	For a no answer, the Joke page will be displayed
	Iii.  Do you want to see the high scores button.  If clicked they be directed to the Top Scores Page


2. Top Scores page -
If the user is in the 10 ten scores, they will be asked if they want to include their name in the Register.
i..  If they answer yes, the user will enter their name, click on the “Add to Register” button.  The table along with the time lapsed of their play will be displayed
Ii.  If they answer no, the top scores will be displayed.
Iii. The user can click on the “Play Again’ button which will return them to the main page with the four rows of four cards facing down displayed.



	3. Joke page -
A page with a button “Click here to see Jokes” will be displayed.  If the button is clicked an initial list of jokes will be displayed.  A “Ready to Play Now?” button is displayed

If they click on the “Click here to see Jokes” button a second time, a refreshed list  of jokes will be displayed.  How many times can they click?

If they click on the “Ready to Play Now” button the page of four rows of four cards placed facing down are displayed


Variables, Functions, Handler, Listener etc.
Main page Variables-
User Name
Card Array
Card Clicks
Card Location


    2.  Main page Constructor: (to make picture objects)
Card clicks
Card location
Push

    3.  Main Page Possible Functions:
	a. Display Jokes Page
	B. Display Game Instructions
	C. Initial Card Display
	D. Display Timer set to zero
	E. Every 2nd Click

     4.  Main Event Handler
User Enters Name / Display want to play question
Want to Play Game / Y-N selection
Y - Display Instructions
N - Display Jokes Page
     C.  Start Game - begin timer
     D.   Play Again
      E.  Register your score
5. Main Event Listener -
	User Name
	Want to Play Game?
	Start Game
	Register your score
	Card Selection
	Play Again


Register page Variables-
a.Register User Name



    2. Register Page Possible Functions:
	a. Registered User Name
	B. Local Storage for User Game Results
	C. Refresh Game
	D. Render stats Table


     3.  Register Event Handler
Register User Name / Store locally & render stats table
Play Again
Yes, Use Name entered on Main page


4. Register Event Listener -
	Registered User Name
	Play Again - refreshes game
	Add to Register - yes, use name entered on Main page


Joke page Variables-
joke array (2 dimension) Q/A



    2. Joke Page Possible Functions:
	a. Initial display jokes
	B. Refresh Jokes
	C. Render Table



     3.  Joke Event Handler
Click to see initial jokes
Click to see refreshed list of jokes
Render Table



4. Joke Event Listener -
	Click to see jokes
Click ready to play now


CSS Stuff

Sans Serif font
Font color #525564
Background color #96C0CE
Back of Cards #FEF6EB


Stand-Up Agenda
10 min
State name of branch we are currently working on
Status of current work items
Issues
Concerns</p>
