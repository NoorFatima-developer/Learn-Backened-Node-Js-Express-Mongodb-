// iss file k andr mai routes banaogi in API..
// and apna sara main code iss file m rkhogi mai...get post wagaira
// and routers ko create krogi and export krogi...
// and models mai o user.js k andr jo schema or model hai osko b import krlogi..

// Why we use Routes?????????????????????????????

// Basically hum log routes sy prefix add krskty hain...

import express from 'express';
import { getAllUsers, param_id, query_id, register, userdelete, userupdate } from '../controllers/user.js';

// 01--create router:(ab app.get nd app.post ki jagah router.get nd router.post use krlo..)
const router = express.Router();

router.post('/new', register)

router.get('/all', getAllUsers);

router.get("/userid/:id", param_id );

router.get("/userid", query_id );

// aghr user ki id ko update krna hai tu i will do this:
router.put("/userid/:id", userupdate );

// aghr user ki id ko delete krna hai tu i will do this:
router.delete("/userid/:id", userdelete );


// 02--export router:
export default router;