#!/usr/bin/env node

const meow = require('meow');
const chunkifyArray = require('.');

const cli = meow(
    `
    Usage
      ❯ chunkify-array <string> <number> [Default: '' 1]

    Options
      --int, -i  Accept integers from comma separated input [Default: false]

    Examples
      ❯ chunkify-array 1,2,3,4,5 3
      [ [ '1', '2' ], [ '3', '4' ], [ '5' ] ]

      ❯ chunkify-array --int 1,2,3,4,5 3
      [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
    `,
    {
        flags: {
            int: {
                type: 'boolean',
                alias: 'i'
            }
        }
    }
);

const input = cli.input[0];
const chunks = parseInt(cli.input[1], 0) || 1;

let array = (input && input.split(',')) || [];

if (cli.flags.int) {
    array = array.filter(Boolean).map(Number);
}

console.log(chunkifyArray(array, chunks)); // eslint-disable-line no-console
