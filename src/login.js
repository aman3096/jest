const fetch = require("node-fetch");

// Defining async function 


/**
 * 
 * @param {String} mockApi 
 */
async function getApi(mockApi) { 
    
    // Storing response 
    const response = await fetch(mockApi); 
    // Storing data in form of JSON 
    var data = await response.json(); 
    return data; 
} 
// Calling that async function
/**
 * 
 * @param {String} userName 
 * @param {String} pass 
 */
async function doLogin(userName,pass,mockApi){
    const backData = await getApi(mockApi);
    
    const result = backData.loginCred.filter(i=>i.userName===userName && i.password === pass);
    if (result.length===0) {
        return false;
    }
    else{
    return true;
    }
}

module.exports={getApi,doLogin}