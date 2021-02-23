
const {doLogin, getApi} =require("./login");
function hasUpperCase(str) {
    let flag= false;
    for(let x=0;x<str.length;x++)
        if(str[x] >= 'A' && str[x] <= 'Z')
            flag = true;
        else
            flag = false;
    return flag;
}

/**
 * 
 * @param {String} name 
 */
async function greet(name){
    const mockApi ='https://us-central1-rak-slack-poc.cloudfunctions.net/webApi/api/v1/mock-accounts';
    /**
     * 
     */
    const login = await doLogin("JoeBiden","PresUSA",mockApi);
    console.log('fellows '+ login);
    const g = await getApi("1234456");
    if(name.length==0){
        return "Hello, my friend."
    }
    const len = name.length
    const regex = new RegExp('!/[a-z]/i')
    if(Array.isArray(name) && name.length==2){
        let ans = "Hello, "
        ans+=name[0];
        ans+=" and ";
        ans+=name[1];
        ans+='.'
        return ans;
    }
    if(Array.isArray(name) && name.length>2){
        let ans = "Hello, "
        for(let i=0;i<name.length-1;i++){
            ans+=name[i];
            ans+=", "
        }
        ans+= "and "
        ans+=name[name.length-1];
        ans+='.';
        return ans;
    }
    if(hasUpperCase(name)){
        return `HELLO ${name}`
    }
    return `Hello, ${name}`;
}

module.exports = greet;