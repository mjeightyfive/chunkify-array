# @mjeightyfive/chunkify-array [![Build Status](https://travis-ci.com/mjeightyfive/chunkify-array.svg?branch=master)](https://travis-ci.com/mjeightyfive/@mjeightyfive/chunkify-array)

## Install

```
$ npm i @mjeightyfive/chunkify-array
```


## Usage

```js
const chunkifyArray = require('@mjeightyfive/chunkify-array');

chunkifyArray([1, 2, 3, 4, 5], 3);
// => [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```


## API

### chunkifyArray(array, chunks)

#### array

Type: `array`

[1, 2, 3, 4, 5]

#### chunks

Type: `number`

3

## CLI

```
$ npm i -g @mjeightyfive/chunkify-array
```

```
❯ chunkify-array --help

  Usage
    ❯ chunkify-array <string> <number> [Default: '' 1]

  Options
    --int, -i  Accept integers from comma separated input [Default: false]

  Examples
    ❯ chunkify-array 1,2,3,4,5 3
    [ [ '1', '2' ], [ '3', '4' ], [ '5' ] ]

    ❯ chunkify-array --int 1,2,3,4,5 3
    [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

## License

MIT © [mjeightyfive](https://mje.fi)
