const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');

const DEV = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = require('next')({ dev: DEV })
const handler = app.getRequestHandler()

const keepPagesRouter = require('./routes/keepPages');

app.prepare()
  .then(() => {

    const server = express({
        strict: true
    });

    server.all(
        '*',
        cors({
            origin: "*"
        })
    );

    server.use(
        compression({
            level: 9,
            memLevel: 9
        })
    );

    server.use(morgan('DEV'));
    server.use(express.json({ limit: '5mb' }));
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());

    server.use(
      '/api/keep-pages',
      keepPagesRouter
    );

    server.get(
        '*',
        (req, res) => handler(
            req,
            res
        )
    );

    server.use(handler);

    server.listen(
        PORT,
        (errors) => {

            console.info('running on http://localhost:3000');

        }
    );
})
  .catch((applicationException) => {

      console.error(applicationException);
      process.exit(1);

});
