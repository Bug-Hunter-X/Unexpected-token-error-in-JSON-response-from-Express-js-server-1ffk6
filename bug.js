const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Unexpected token error in JSON response
//The error occurs when sending a non-JSON response to a client that is expecting a JSON response.
//This can occur if the server is sending a plain text response or a response with a different content type.
//The following code snippet shows how this might happen:

app.get('/data', (req, res) => {
  const data = {
    message: 'This is some data',
    //Missing comma here
    value: 10
  };
  res.json(data);
});