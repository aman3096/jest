async function add(num1){
    if(num1==""){
        return 0;
    }
    const params = num1.split(',')
    let sum =0;
    for(let i=0;i<params.length;i++){
        const final = params[i].split('\n')
        for(let i=0;i<final.length;i++)
            if(parseInt(final[i]>0))
                sum+=parseInt(final[i])
            else
                return "Negatives not allowed";
            }
    return sum;
}

module.exports= add;