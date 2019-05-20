const chunkifyArray = require('.');

test('does not crash without params', () => {
    expect(chunkifyArray()).toEqual([]);
});

test('creates correct number of chunks', () => {
    const input = [1, 2, 3, 4, 5];
    const chunks = 3;
    const result = chunkifyArray(input, chunks);
    expect(result.length).toBe(3);
});

test('does not create empty chunks', () => {
    const input = [1, 2, 3, 4, 5];
    const chunks = 6;
    const result = chunkifyArray(input, chunks);
    expect(result.length).toBe(5);
});

test('number of chunks must be a positive number', () => {
    const input = [1, 2, 3, 4, 5];
    const chunks = -2;
    expect(() => {
        chunkifyArray(input, chunks);
    }).toThrow();
});

test('output is as expected', () => {
    const input = [1, 2, 3, true, false, null, 'bob'];
    const chunks = 3;
    const expected = [[1, 2], [3, true], [false, null, 'bob']];
    const result = chunkifyArray(input, chunks);
    expect(result).toEqual(expected);
});

test('input array is not mutated', () => {
    const input = [1, 2, 3, true, false, null, 'bob'];
    const inputCopy = [...input];
    chunkifyArray(input, 1);
    expect(input).toEqual(inputCopy);
});

describe('with 4 values', () => {
    const v = [1, 2, 3, 4];

    test('with 1', () => {
        expect(chunkifyArray(v, 1)).toEqual([[1, 2, 3, 4]]);
    });

    test('with 2', () => {
        expect(chunkifyArray(v, 2)).toEqual([[1, 2], [3, 4]]);
    });

    test('with 3', () => {
        expect(chunkifyArray(v, 3)).toEqual([[1], [2], [3, 4]]);
    });

    test('with 4', () => {
        expect(chunkifyArray(v, 4)).toEqual([[1], [2], [3], [4]]);
    });

    test('with 5', () => {
        expect(chunkifyArray(v, 4)).toEqual([[1], [2], [3], [4]]);
    });
});

// 5/1 --> [[1, 2, 3, 4, 5]]
// 5/2 --> [[1, 2], [3, 4, 5]]
// 5/3 --> [[1, 2], [3, 4], [5]]
// 5/4 --> [1], [2], [3], [4, 5]
// 5/5 --> [[1], [2], [3], [4], [5]]
// 5/6 --> [[1], [2], [3], [4], [5]]

describe('with 5 values', () => {
    const v = [1, 2, 3, 4, 5];

    test('with 1', () => {
        expect(chunkifyArray(v, 1)).toEqual([[1, 2, 3, 4, 5]]);
    });

    test('with 2', () => {
        expect(chunkifyArray(v, 2)).toEqual([[1, 2], [3, 4, 5]]);
    });

    test('with 3', () => {
        expect(chunkifyArray(v, 3)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('with 4', () => {
        expect(chunkifyArray(v, 4)).toEqual([[1], [2], [3], [4, 5]]);
    });

    test('with 5', () => {
        expect(chunkifyArray(v, 5)).toEqual([[1], [2], [3], [4], [5]]);
    });

    test('with 6', () => {
        expect(chunkifyArray(v, 6)).toEqual([[1], [2], [3], [4], [5]]);
    });
});

// 7/1 --> [[1, 2, 3, 4, 5, 6, 7]]
// 7/2 --> [[1, 2, 3], [4, 5, 6, 7]]
// 7/3 --> [[1, 2], [3, 4], [5, 6, 7]]
// 7/4 --> [[1, 2], [3, 4], [5, 6], [7]]
// 7/5 --> [[1], [2], [3], [4], [5, 6, 7]]
// 7/6 --> [[1], [2], [3], [4], [5], [6, 7]]
// 7/7 --> [[1], [2], [3], [4], [5], [6], [7]]
// 7/8 --> [[1], [2], [3], [4], [5], [6], [7]]

describe('with 7 values', () => {
    const v = [1, 2, 3, 4, 5, 6, 7];

    test('with 1', () => {
        expect(chunkifyArray(v, 1)).toEqual(
            [[1, 2, 3, 4, 5, 6, 7]]
        );
    });

    test('with 2', () => {
        expect(chunkifyArray(v, 2)).toEqual(
            [[1, 2, 3], [4, 5, 6, 7]]
        );
    });

    test('with 3', () => {
        expect(chunkifyArray(v, 3)).toEqual(
            [[1, 2], [3, 4], [5, 6, 7]]
        );
    });

    test('with 4', () => {
        expect(chunkifyArray(v, 4)).toEqual(
            [[1, 2], [3, 4], [5, 6], [7]]
        );
    });

    test('with 5', () => {
        expect(chunkifyArray(v, 5)).toEqual(
            [[1], [2], [3], [4], [5, 6, 7]]
        );
    });

    test('with 6', () => {
        expect(chunkifyArray(v, 6)).toEqual(
            [[1], [2], [3], [4], [5], [6, 7]]
        );
    });

    test('with 7', () => {
        expect(chunkifyArray(v, 7)).toEqual(
            [[1], [2], [3], [4], [5], [6], [7]]
        );
    });

    test('with 8', () => {
        expect(chunkifyArray(v, 8)).toEqual(
            [[1], [2], [3], [4], [5], [6], [7]]
        );
    });
});
