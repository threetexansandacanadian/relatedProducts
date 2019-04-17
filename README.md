# Related Product Carousel

This app mimics the functionality of Amazon's "Customer's who bought this also bought: " list

## Installation & Configuration
To install: 

``` npm install ```

Create a database using the `schema.sql` in database.

Connect to using `dotenv`. The dotenv package requires that you create a `.env` file in the root folder of this repo.

The only file that requires dotenv is `db-config.js`. There you can find the Key-Value pairs required to connect to your database locally or live. You may configure how these values are set by checking out `config` const in `db-config.js`. For further info checkout dotenv docs. https://github.com/motdotla/dotenv

## Serve
To serve up the app:

``` npm run SCV ```

The server will listen on `localhost:4444`

## Additional Tips

If you'd like to populate a database for this to run off of, check out my productEntryGenerotor!

https://github.com/ryanferrer/productEntryGenerator
