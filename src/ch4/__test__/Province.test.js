import Province, { sampleProvinceData } from '../Province';

describe('province', () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  })
  it('shortfall ', () => {

    expect(asia.shortfall).toEqual(5);
  });
  it('profit', () => {
    
    expect(asia.profit).toEqual(230);
  })
  it('negative demand', ()=> {
    asia.demand = -1;
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profit).toEqual(-10);
  })
  it('fail test', ()=> {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20
    }
    const prov = new Province(data);
    expect(prov.shortfall).toEqual(0);
  })
});
