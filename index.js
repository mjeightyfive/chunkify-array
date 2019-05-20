const chunkify = (array, chunks) => {
    const result = [];

    const averagePerChunk = array.length / chunks;
    const itemsPerChunk = -Math.round(-averagePerChunk); // round half down

    const tempArray = [...array];

    let count = chunks > array.length ? array.length : chunks;

    while (count) {
        let chunk = [];

        if (count === 1) {
            chunk = tempArray.splice(0, tempArray.length);
        } else {
            chunk = tempArray.splice(0, itemsPerChunk);
        }

        result.push(chunk);

        count -= 1;
    }

    return result;
};

module.exports = (input = [], arraySize = 1) => {
    if (typeof arraySize !== 'number' || arraySize < 1) {
        throw new TypeError('Array size must be a positive number');
    }

    return chunkify(input, arraySize);
};
