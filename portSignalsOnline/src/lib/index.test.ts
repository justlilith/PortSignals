import {test} from 'zora';

test(`my very first test`, (assertion) => {
    const input = false;
    assertion.ok(input, 'input should be truthy');
})