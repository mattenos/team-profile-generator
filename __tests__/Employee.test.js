const Employee = require('../lib/Employee');

test('We can initiate Employee instance', () => {
    const e = new Employee();
  expect(typeof(e)).toBe('object');
});

test('can set name via Constructor arguement', () => {
    const name = 'joe';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('can set id via Constructor arguement', () => {
    const testValue = 3;
    const e = new Employee('hotdog', testValue);
    expect(e.id).toBe(testValue);
});

test('can set email via Constructor arguement', () => {
    const testValue = 'name@email.com';
    const e = new Employee('hotdog', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('can get name via getName()', () => {
    const testValue = 'joe';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('can get employee ID via getId()', () => {
    const testValue = 3;
    const e = new Employee('hotdog', testValue);
    expect(e.getId()).toBe(testValue);
});

test('can get email via getEmail()', () => {
    const testValue = 'name@email.com';
    const e = new Employee('hotdog', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return \"Employee\"', () => {
    const testValue = 'Employee';
    const e = new Employee('joe', 1, 'name@email.com');
    expect(e.getName()).toBe(testValue);
});