# [**lafy**](https://www.npmjs.com/package/lafy)

[![GitHub license](https://img.shields.io/github/license/edgarogh/lafy.svg)](https://github.com/edgarogh/lafy/blob/master/LICENSE)
[![David](https://img.shields.io/david/edgarogh/lafy.svg)](https://www.npmjs.com/package/lafy)

> `lafy` is a ridiculously small module that adds a simpler way to promisify instance methods. It can obviously be used on normal promisifiable methods:
> ```javascript
> const fs = require('fs');
> const lafy = require('lafy');
> 
> // Don't want to bother promisifying a function ?
> let contents = await lafy(cb => fs.readFile("/etc/passwd", cb));
>
> // Oh no, this class' methods use callbacks ;(
> // The only way to promisify methods would be to bind them to an instance
> const userManager = new UserManager(/* ... */);
> let users = await lafy(cb => userManager.getUsers(cb));
> // Much simpler if you only need to do this once or twice !
> ```

## Download
`npm install lafy`

## Bugs & Suggestions
If you notice any bug or have a suggestion, please tell me about it in the issues, it will help everyone!

## Tests

Tests are created with [mocha](https://github.com/mochajs/mocha) and asserted with [chai.expect](https://github.com/chaijs/chai) and [chai-as-promised](https://github.com/domenic/chai-as-promised).

You can run the suite using
```bash
npm test
```

## License

**lafy** is licensed under the very permissive [MIT License](https://tldrlegal.com/license/mit-license). You may use it for commercial projects if you comply to the license.
