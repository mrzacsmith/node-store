# node-store

## Issues and Resolution

- `blocked:csp` error corrected using [helmet](https://helmetjs.github.io/). Review log f67b8191ff16de54008377bc58e643c0f2e09556 for the code required for resolution.
- [Error 'blocked:scp' using NodeJS, ExpressJS, and EJS](https://mrzacsmith.medium.com/error-blocked-csp-using-nodejs-expressjs-and-ejs-8760e945f3d3)

```js
server.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      // 'img-src': ['*'], // allows any image url, below restricts to cloudinary only
      'img-src': ["'self'", '*.cloudinary.com'],
    },
  })
)
```
