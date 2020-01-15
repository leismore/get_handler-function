# get_handler-function

A general HTTP-GET request handler (echo) for Node.js & Express.js applications. It sends HTTP 204 (means *I am working*) for any HTTP-GET request.

## Donation

[![PayPal Donation](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SPPJPYRY4D6WC&item_name=Give+people+an+option+to+support+my+open+source+software.&currency_code=AUD&source=url)

## Motivation

Define a HTTP-GET handler to echo *I am working* message for testing purpose.

## Behavior

When an API received a HTTP-GET request without any extra data, it should answer with HTTP 204 (means *I am working*).

## Examples

```typescript
import * as express    from 'express';
import { get_handler } from '@leismore/get_handler';

let app  = express();
let port = 3000;

app.get('/', get_handler);

app.listen( port, () => console.log(`Example app listening on port ${port}!`) );
```

## License

MIT

## Authors

* [Kyle Chine](https://www.kylechine.name) (Init. Jan 15, 2020)
