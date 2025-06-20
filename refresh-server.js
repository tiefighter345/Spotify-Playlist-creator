// refresh-server.js
// Simple Express backend to refresh Spotify access tokens for your website account

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Set these in a .env file or directly here
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '62fe71b84f0442dbbe8f79a7c8a7150f';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '0c16277bff6f433fb6ed80004932cfeb';
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || "AQDUSZzTOkiVVKzPUe1s4PqZUWzADf6R5xGVCrI5J4p39EDBQiUgN9ypSzuKsdWhpGz8bdRvSmkcrHIvi8qzkSOZzBY6m-9XS6PpPb3jct2QWqK25QBVzATG1ou-4mj0pyk";

app.use(cors());

app.get('/get_access_token', async (req, res) => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', REFRESH_TOKEN);

    const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    const response = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Authorization': `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.json({ access_token: response.data.access_token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to refresh token', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Spotify refresh server running on port ${PORT}`);
});
