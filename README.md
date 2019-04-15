# Related Product Carousel

This app mimics the functionality of Amazon's "Customer's who bought this also bought: " list

## Installation & Configuration
To install: 

``` npm install ```

Create a database using the `schema.sql` in database.

Connect to using `dotenv`. The dotenv package requires that you create a `.env` file in the root folder of this repo.

You may configure how these values are set by checking out `config` const in `db-config.js`. For further info checkout dotenv docs. https://github.com/motdotla/dotenv


## Serve
To serve up the app:

``` npm run SCV ```

The server will listen on `localhost:4444`
