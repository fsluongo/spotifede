# SpotiFede

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

First run `npm install` and then `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Spotify API authentication

Postman is used to generate the authentication Token, Spotify Dev credentials are needed to use the post method to `https://accounts.spotify.com/api/token`.
Once the token has been obtained it must be replaced in the file `spotify.service` that is located in `src\app\services\`. 
The token must be renewed every hour.

