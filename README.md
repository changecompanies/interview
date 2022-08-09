# TCC Technical Take-Home Test

## Installing and Running

You will need Docker installed to run this application.

To get started:
```docker compose up```

If you have any issues, run ```docker compose down && docker compose up```

This will start the backend application.

To start the frontend client in development mode...
```cd client && npm install && npm run start```

## Running Tests
In the server... ```npm run test```
In the client.... ```npm run test```

## Completion

This application is meant to demonstrate baseline understanding of React and Node.js applications.
To complete the React portion, you must ensure that all the Jest tests in the React app resolve.
To complete the express portion, you must ensure that all the promises in the Node tests have a status of "fulfilled".
Do not change the tests.
