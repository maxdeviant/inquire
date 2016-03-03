'use strict';

import * as express from 'express';

export const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        return res.status(200).json('OK');
    });
