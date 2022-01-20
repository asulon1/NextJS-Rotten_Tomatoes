## My Rotten Tomatoes

My Rotten Tomatoes is an EPITECH school project, the goal is to create a web app based on the The Movie DataBase API (TMDB).
The app is built with Nextjs and is written in JavaScript

## Requirements

Step 1 : Create a TMDB account (https://www.themoviedb.org/). Once done go to the SETTING page, then Click on "API" and create your project to generate your own API Key.

Step 2.1 : Create a firebase project (https://firebase.google.com/). Open the Setting of your project, get your SDK configuration and add it in firebase.js file.

Step 2.2 : In Authentifacation page, add Google in Login providers.

Step 2.3 : In https://console.cloud.google.com/apis/credentials/oauthclient/ Add "http://localhost:3000" & "http://localhost:3000/api/auth/callback/google" as below


![image](https://user-images.githubusercontent.com/91874974/150341079-c0ffbe57-27f0-4f91-895e-a6e842ef288a.png)

Finally Copy your Client ID / Secret client ID And your API KEY and paste it in .env.exemple, your may rename the file as ".env.local"

## Start the app

Install all packages :

```bash
npm install
# or
yarn
```

Run the app :

```bash
npm run dev
# or
yarn start
```
## Authors
- [GABILLOUX Jérôme](https://github.com/jgabilloux)
- [PEREIRA-VARELA Jessy](https://github.com/Jessy06)
- [SULON Adrien](https://github.com/asulon1)

