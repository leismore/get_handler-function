/**
 * Get Handler - READY response.
 */

import express = require('express');
import { Response } from '@leismore/response';

function get_handler(_req:express.Request, res:express.Response):void
{
  const resp = new Response(res);
  resp.send({
    statusCode: '204'
  });
}

export { get_handler };
