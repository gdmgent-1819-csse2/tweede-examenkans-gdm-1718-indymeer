/** Parent class for testing matrices. */
export default class TestMatrix {
    /**
     * Assert that two matrices are identical.
     * @param {Array} actual - The actual result.
     * @param {Array} expected - The expected result.
     */
    assertIdentical(actual, expected) {
        for (let i = 0; i < expected.length; i++) {
            if (actual[i] === expected[i]) {
                console.log(i, 'PASS', `actual: ${actual[i]}`)
            } else {
                console.error(i, 'FAIL', `actual: ${actual[i]}, expected: ${expected[i]}`);
            }
        }
    }

    /**
     * Assert that two matrices are identical, after rounding the values.
     * @param {Array} actual - The actual result.
     * @param {Array} expected - The expected result.
     */
    assertIdenticalRounded(actual, expected) {
        for (let i = 0; i < expected.length; i++) {
            const actualRounded = Math.round(actual[i])
            if (actualRounded === expected[i]) {
                console.log(i, 'PASS', `actual: ${actualRounded}`)
            } else {
                console.error(i, 'FAIL', `actual: ${actualRounded}, expected: ${expected[i]}`);
            }
        }
    }
}