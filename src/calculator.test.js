const add= require('./calculator');

test('add method present', async ()=>{
    const ans = await add("1,2");
    const empty = await add("");
    const manyParams = await add("1,2,3,4,5")
    const newLine = await add("1\n2,3")
    expect(ans).toEqual(3);
    expect(empty).toEqual(0);
    expect(manyParams).toEqual(15);
    expect(newLine).toEqual(6);

})