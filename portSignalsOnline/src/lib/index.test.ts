import {expect, test} from 'vitest';

test(`my very first test`, (assertion) => {
    const input = false;
    expect(input).toBeFalsy();
})