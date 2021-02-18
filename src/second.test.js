//unit testing using async await
fetchData = ()=>'apple cider vinegar';

test('the data in this is apple cider vinegar', async () => {
    const data = await fetchData();
    expect(data).toBe('apple cider vinegar');
  });


  //create a random number ==


  test('returns a random number', () => {
    function getNewId() {
        return Math.random()
     }
    const mockMath = Object.create(global.Math);
    mockMath.random = jest.fn(() => 0.75);
    global.Math = mockMath;
    const id = getNewId();
    expect(id).toBe(0.75);
 });
 
 function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
 test('returns a random number', () => {
    jest.spyOn(Math, 'floor');
    const mockMath = Object.create(global.Math);
    const originalMath = Object.create(global.Math);
    mockMath.random = () => 0.75;
    global.Math = mockMath;
    const id = getRandomId(10, 100);
    expect(id).toBe(78);
    global.Math = originalMath;
 });
 