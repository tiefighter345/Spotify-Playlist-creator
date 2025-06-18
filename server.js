const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/exchange_token', async (req, res) => {
  const { code, code_verifier, redirect_uri, client_id } = req.body;
  const params = new URLSearchParams({
    client_id,
    grant_type: 'authorization_code',
    code,
    redirect_uri,
    code_verifier
  });
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
