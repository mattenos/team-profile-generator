const Manager = require('../lib/Manager');

test('We can initiate Manager instance', () => {
    const e = new Manager();
  expect(typeof(e)).toBe('object');
});

test('can set name via Constructor arguement', () => {
    const name = 'joe';
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test('can set id via Constructor arguement', () => {
    const testValue = 3;
    const e = new Manager('hotdog', testValue);
    expect(e.id).toBe(testValue);
});

test('can set email via Constructor arguement', () => {
    const testValue = 'name@email.com';
    const e = new Manager('hotdog', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('can get manager office number via getOfficeNumber()', () => {
    const testValue = 3;
    const e = new Manager('hotdog', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});