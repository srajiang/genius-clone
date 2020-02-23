# Snillingur "Nordic Genius"

## [Try out Nordic Genius!](https://snillingur.herokuapp.com/#/)

Snillingur "Nordic Genius" is a pixel-perfect tribute to a personal favorite site of mine, Genius.com featuring exclusively Nordic artists.

<img width="1117" alt="Screen Shot 2020-02-05 at 8 35 18 PM" src="https://user-images.githubusercontent.com/55667998/73906239-13d06300-4857-11ea-9948-7a4e2084ea12.png">

I created this app using: 

* Ruby on Rails for backend routes and REST-ful API endpoints
* PostgreSQL database, ActiveRecord and Active Storage / AWS S3 cloud storage for media and asset hosting
* JBuilder formatting framework AJAX calls
* React.js frontend components with full Redux cycles
* SCSS / Sass for styling
* A Full user authentication flow for users via BCrypt Hashing and salting and protected routes

Specifications:
* Ruby version
  * 2.5.1
* System dependencies
  * Please see package.json and Gemfile for dependencies

## Features and Implementation

### Full User Authentication flow
Users of the site can sign up for accounts and log into existing accounts via an authentication system encrypted with the BCrypt hashing and salting. Users who have not signed in with an account are prompted to sign in or login before they can contribute to annotations. 

### Search by Song Title and by Lyric
Users can search the app by song title (e.g. Dancing on My Own) or by lyric (e.g. "I'm giving it my own..). This is accomplished by having a stateful React component whose onChange event handler sends out a request to the API backend of the application with the users' input. In order to improve app efficiency and reduce thrash, I debounced the requests, so that the Axios request only sends out after the user has paused typing for a specific set of time. The Rails controllers and JBuilder receive and formulate the response to client, which is rendered on the 

### Top Song Chart View with Filtering Based on Song Genre + # of Songs to Display
Users can view a listing of songs with artist information and album images. The chart view also features a filtering menu drop down which fetches results from the Rails backend routes based on the selected song genre and filters results by amount. 

### View Song Page Lyrics and View Related Annotations
Users can view the lyrics of a song on the song's dedicated song page. On page load, any pre-existing annotations that other users or the currently logged in user have added will be interactable. The user can click to open the annotation.  

### Annotating A Song, a simplified flow 
Users can also submit an annotation for a song, update any existing annotations and delete an annotation. I redesigned this portion of the app's UI/UX to feature a more simplified and less costly flow: 

## Simplifications to UI / UX

### Redesign of annotation look / feel

* The lyric to which the annotation refers is on the card itself, creating greater relationship between the line and the interpretation. 
* I Redesigned the look of the annotation to have a "weightier feel" with drop shadow. This increased the distinction visually between a lyric and it's associated annotation and aids the user's eye in getting to relevant information. 
* I lightened some of the heavier elements on the annotation to better direct visual attention to the annotation itself. 
* Actions are present, but less visually clunky.
* Color is used to highlight possible actions the user can take, as well as contributers to the annotation.

<p>
<img width="250" alt="Screen Shot 2020-02-21 at 10 22 52 AM" src="https://user-images.githubusercontent.com/55667998/75061030-bd893400-5494-11ea-8fe0-274a4b96a828.png">
<img width="450" alt="Screen Shot 2020-02-21 at 10 25 45 AM" src="https://user-images.githubusercontent.com/55667998/75061014-b6fabc80-5494-11ea-8b54-59ebcee4787d.png">
</p>


### Reducing steps to complete action => fewer clicks, less requests to the backend
* The original Genius.com app featured a 4 step process to creating an annotation:

  1. select a section of song lyric to highlight
  2. Click button confirming that they wish "Start the Genius Annotation"
  3. Compose the annotation / interpretation of the lyric
  3. Hit confirm 
  
* If the user didn't do steps 3 (compose) and 4 (confirm), the annotation highlight persists, indicating that step 2 initiates a backend request. On page refresh, you can see the highlighted section with no annotation. This can easily lead to clutter on an already fairly cliuttered ui.

