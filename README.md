# Better Youtube Playlist

A better version of the Youtube Playlist system, using the [Youtube V3 API](https://developers.google.com/youtube/v3/).

_NOTE: This is intended to be a proof of concept and demo rather than a fully fleshed out web-app. Because of the strange limitations of the API, only a maximum of 50 songs reliably can be pulled from a given Youtube playlist._

## Features

- Seemless shuffling system
- Video looping
- Reversing playlist order
- Toggle for dark / light mode

## Technologies & Packages

- Built using [React](https://reactjs.org/)
- Components from [Chakra UI](https://chakra-ui.com/)
- Animations from [Framer Motion](https://www.framer.com/motion/)
- [React Query](https://react-query.tanstack.com/) for API handling
- [React Hook Form](https://react-hook-form.com/) for building form logic
- [React-Youtube package](https://www.npmjs.com/package/react-youtube) for a simple React component version of the Youtube iFrame

## Running the app:

To run the app, use the following commands on the command line terminal

```sh
cd client
npm install
npm start
```

Then, add your own Youtube API key in a .env file directly under the client directory, labeled "REACT_APP_API_KEY"
