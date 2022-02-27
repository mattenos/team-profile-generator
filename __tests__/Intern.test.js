const Intern = require('../lib/Intern');

test('We can initiate Intern instance', () => {
    const e = new Intern();
    expect(typeof (e)).toBe('object');
});

test('can set name via Constructor arguement', () => {
    const name = 'joe';
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test('can set id via Constructor arguement', () => {
    const testValue = 3;
    const e = new Intern('hotdog', testValue);
    expect(e.id).toBe(testValue);
});

test('can set email via Constructor arguement', () => {
    const testValue = 'name@email.com';
    const e = new Intern('hotdog', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('can get school via getSchool()', () => {
    const testValue = 'school';
    const e = new Intern(testValue);
    expect(e.getName()).toBe(testValue);
});