//https://codingdojo.org/kata/FizzBuzz/
/**
 * 
 * @param {number} i any number provides
 * @returns {boolean} checks if the number has 3
 */
function checkHas3(i){
    let u=i;
    while(u!=0){
        if(u%10==3){
            return true;
        }
        u=Math.floor(u/10);
    }
    return false;
}

/**
 * 
 * @param {number} i any number provides
 * @returns {boolean} checks if the number has 5
 */
function checkHas5(i){
    let u=i;
    while(u!=0){
        if(u%10==5){
            return true;
        }
        u=Math.floor(u/10);
    }
    return false;
}
/**
 * 
 * @param {number} num input any number
 * 
 *  
 */
export default async function prog(num){
    let asd=[] 
    for(let i=1;i<=num;i++){
        if(i%3==0|| checkHas3(i)){
            asd.push("Fizz");
        }else if(i%5==0|| checkHas5(i)){
            asd.push("Buzz");
        }else if(i%3==0 && i%5==0){
            asd.push("FizzBuzz")
        }else{
            asd.push(parseInt(i));
        }
    }
    return asd
}
