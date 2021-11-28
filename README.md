This is a React front end client that communicates with the Spotify API.

If you wish to run the code locally run the following.

```
On Terminal use this command (inside the SpotifyWebAPI-main folder):
~npm install 
~cd src
~npm start
visit http://localhost:3000
```
i've done to modified a simple React app that utilizes spotify web api (https://developer.spotify.com/documentation/web-api/reference/#reference-index).
1. First, the login page that will auth a user will appear.
2. Once logged in, a simple user profile page will show Spotify user information.
3. On the same profile page, there are shown the user’s playlist. The list of the playlist’s is gathered with cover image and title.
4. When clicking the playlist, it should list all song items in that playlist.
5. Next to each song item, there should be a delete button.
6. When the delete button is clicked, we should show a confirmation modal asking the user whether he/she wants to process the delete. Clicking ‘No’ should close the modal. Clicking ‘Yes’ should proceed with the delete.



Please note that the Spotify API only provides 30 second audio snippets. It may be possible to get the full track by using the [Web Playback SDK](https://beta.developer.spotify.com/documentation/web-playback-sdk/).
