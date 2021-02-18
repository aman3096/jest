const prog = require('./fizzbuzz');
test('it should print the required number',async ()=>{
    const ans = await prog(15);
    expect(ans).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz",7, 8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"])
})