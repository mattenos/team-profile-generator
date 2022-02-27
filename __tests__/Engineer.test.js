const Engineer = require('../lib/Engineer');

test('We can initiate Engineer instance', () => {
    const e = new Engineer();
    expect(typeof (e)).toBe('object');
});

test('can set name via Constructor arguement', () => {
    const name = 'joe';
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

test('can set id via Constructor arguement', () => {
    const testValue = 3;
    const e = new Engineer('hotdog', testValue);
    expect(e.id).toBe(testValue);
});

test('can set email via Constructor arguement', () => {
    const testValue = 'name@email.com';
    const e = new Engineer('hotdog', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('can get gitHub via getGithub()', () => {
    const testValue = 'https://github.com/name';
    const e = new Engineer('hotdog', 1, testValue);
    expect(e.getGithub()).toBe(testValue);
});