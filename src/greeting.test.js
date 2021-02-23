const greet = require('./greeting');
test('method should greet with name',async ()=>{
    const check = await greet('Aman');
    const empty = await greet('');
    const caps = await greet('JERRY')
    const array = await greet(['Jack','Jill']);
    const arb =  await greet(['Amy','Brian','Cherry']);

//     //failing scenarios 
//     Requirement 6
// Allow mixing of normal and shouted names by separating the response into two greetings. For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"

// Requirement 7
// If any entries in name are a string containing a comma, split it as its own input. For example, when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".

// Requirement 8
// Allow the input to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. For example, when name is ["Bob", "\"Charlie, Dianne\""], then the method should return the string "Hello, Bob and Charlie, Dianne.".
    const req6 =  await greet(["Amy", "BRIAN", "Charlotte"]);
    const req7 = await greet(["Bob", "Charlie, Dianne"]);
    const req8 = await greet(["Bob", "\"Charlie, Dianne\""])

    expect(check).toEqual('Hello, Aman'); 
    expect(empty).toEqual('Hello, my friend.'); 
    expect(caps).toEqual('HELLO JERRY');
    expect(array).toEqual("Hello, Jack and Jill.");
    expect(arb).toEqual("Hello, Amy, Brian, and Cherry.")

    expect(req6).toEqual("Hello, Amy and Charlotte. AND HELLO BRIAN!")
    expect(req7).toEqual("Hello, Bob, Charlie, and Dianne.") //pasing the cases
    expect(req8).toEqual("Hello, Bob and Charlie, Dianne.")


})