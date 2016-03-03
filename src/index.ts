'use strict';

import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { router as foobar }  from './routes';

const app = express();

app.use(morgan('dev'));

app.use('/', bodyParser.json());

app.use('/', foobar);

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Inquire listening on ${app.get('host')}:${app.get('port')}`);
});
