# Spotify Playlist Creator

A web app to create and share Spotify playlists, even with friends who don't have Spotify accounts.

## Features
- **Login with Spotify**: Secure authentication using OAuth2 PKCE flow.
- **View Your Playlists**: See your Spotify playlists after logging in.
- **Edit Playlist Names**: Rename your playlists directly from the app.
- **Add/Remove Tracks**: Search for songs and add or remove them from your playlists.
- **Share Playlists Easily**: Use the Share button to copy a message like:
  
  ```
  {user} wants to share a playlist with you!
  {link with access token}
  use this code for the playlist: {playlist ID}
  ```
  The message includes your name (if set), a link with your access token, and the playlist ID for easy sharing.
- **Load Playlists by ID**: Enter a playlist ID to load and view any playlist (if you have access).

## How to Use
1. **Clone or download this repo.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the backend server:**
   ```bash
   node server.js
   ```
4. **Open `index.html` in your browser.**
5. **Login with Spotify and start creating or sharing playlists!**

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express

## Notes
- The backend is only used to securely exchange the Spotify authorization code for an access token.
- Your access token is stored in your browser's localStorage for API calls.
- To set your display name for sharing, set `spotify_user_name` in localStorage.

---

Enjoy making playlists with your friends!
