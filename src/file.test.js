const file = require('./file');

test('adds 5 + 7 to equal 12', () => {
  expect(file(5, 7)).toBe(12);
});


test('adds 6 + 7 to equal 13', () => {
    expect(file(6, 7)).toBe(13);
  });

  test('object assignment', () => {
    const data = {name: "Joe Biden"};
    data['job'] = 'President USA';
    expect(data).toEqual({name: 'Joe Biden', job: "President USA"});
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('value addition checks', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('for floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "lad" in ladder', () => {
    expect('ladder').toMatch(/lad/);
  });

  const travelList = [
    'New York',
    'Dubai',
    'Mumbai',
    'Agra',
    'San Fransisco',
  ];
  
  test('the travel list has Agra on it', () => {
    expect(travelList).toContain('Agra');
    expect(new Set(travelList)).toContain('Agra');
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
