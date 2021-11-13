This is a React front end client that communicates with the Spotify API.

If you wish to run the code locally run the following.

```
On Terminal use this command:
npm install
cd src
npm start
visit http://localhost:3000
```
i've done to create a simple React app that utilizes spotify web api (https://developer.spotify.com/documentation/web-api/reference/#reference-index).
1. Create a login page that will auth a user.
2. Once logged in, create a simple user profile page to show Spotify user information.
3. On the same profile page, need to be able to list the user’s playlist. The list must consist of the playlist’s cover image and title.
4. When clicking the playlist, it should list all song items in that playlist.
5. Next to each song item, there should be a delete button.
6. When the delete button is clicked, we should show a confirmation modal asking the user whether he/she wants to process the delete. Clicking ‘No’ should close the modal. Clicking ‘Yes’ should proceed with the delete.
7. The project is done using TypeScript.



Please note that the Spotify API only provides 30 second audio snippets. It may be possible to get the full track by using the [Web Playback SDK](https://beta.developer.spotify.com/documentation/web-playback-sdk/).
