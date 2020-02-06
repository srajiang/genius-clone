# Snillingur "Nordic Genius"

Snillingur "Nordic Genius" is a single-page application clone of Genius.com featuring exclusively Scandinavian artists, created using: 

* Ruby on Rails for the backend
* PostgreSQL database
* JBuilder to create the API for AJAX calls
* React.js frontend components with full Redux cycle
* SCSS for styling
* Media hosted remotely via AWS S3 cloud storage.
* Full user authentication flow for users via BCrypt Hashing and salting

Specifications:
* Ruby version
  * 2.5.1
* System dependencies
  * Please see package.json and Gemfile for dependencies

## Features and Implementation

### User Authentication
Users of the site can sign up for accounts and log into existing accounts via an authentication system encrypted with the BCrypt gem.

### Charts Listing
Users can view a listing of songs with artist information and album images. The chart view also features a filtering menu drop down which fetches results from the Rails backgend based on song genre and filters results by amount. 

### Song Page View
Users can view the lyrics of a song on the song's dedicated song age

### Annotating A Song
A user can submit an annotation for a song, update an existing annotation and delete an annotation!
