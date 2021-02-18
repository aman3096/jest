const doLogin = require('./login');
const mockApi ='https://us-central1-rak-slack-poc.cloudfunctions.net/webApi/api/v1/mock-accounts';
const fetch = require("node-fetch");



test('user should not be able to login successfully',async()=>{
    const value =await doLogin('tom','jerry');
    expect(value).not.toEqual(true);

})
test('incorrect login',async()=>{
    const value = await doLogin('JoeBiden','jerry');
    expect(value).toEqual(true);

})
test('correct login',async ()=>{
    const value = await doLogin('JoeBiden','PresUSA');
    expect(value).toEqual(true);

})