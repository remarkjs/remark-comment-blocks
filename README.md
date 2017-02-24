# [remark]-comment-blocks [![Build Status](https://travis-ci.org/ben-eb/remark-comment-blocks.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/remark-comment-blocks.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/remark-comment-blocks.svg)][deps]

> Wrap Markdown with a comment block.


## Install

With [npm](https://npmjs.org/package/remark-comment-blocks) do:

```
npm install remark-comment-blocks
```


## Example

```js
var remark = require('remark');
var comments = require('remark-comment-blocks');

var markdown = 'Hello, world!';
var result = remark.use(comments).processSync(markdown);
console.log(result);
```

Output:

```js
/**
 * Hello, world!
 */
```


## API

### remark.use(comments, [options])

#### options

##### start

Type: `string`
Default: `/**\n`

This string is used to begin the comment block.

##### middle

Type: `string`
Default: ` * `

This string is prepended to each line, other than the `start` and `end` lines.

##### end

Type: `string`
Default: `\n */\n`

This string is used to end the comment block. Note that this **must** include a
trailing newline.


## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.


## License

MIT © [Ben Briggs](http://beneb.info)


[ci]:      https://travis-ci.org/ben-eb/remark-comment-blocks
[deps]:    https://gemnasium.com/ben-eb/remark-comment-blocks
[npm]:     http://badge.fury.io/js/remark-comment-blocks
[remark]:  https://github.com/wooorm/remark
