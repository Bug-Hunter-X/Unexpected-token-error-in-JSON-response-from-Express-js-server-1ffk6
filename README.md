# Unexpected token error in JSON response from Express.js server

This repository contains a simple Express.js server that demonstrates an uncommon error: an unexpected token error in a JSON response. The error occurs when the server sends a JSON response with a syntax error, such as a missing comma between key-value pairs in the JSON object. 

## Bug
The `bug.js` file contains the erroneous code. The server's `/data` route returns a JSON object that lacks a comma between two properties causing a syntax error in the JSON response.

## Solution
The `bugSolution.js` file provides a corrected version of the code.  The missing comma has been added, fixing the syntax error and ensuring a correctly formatted JSON response.