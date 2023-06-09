import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  let pipe: MyMultPipe;

  beforeEach(() => {
    pipe = new MyMultPipe();
  });

  it('should multiply two numbers', () => {
    const result = pipe.transform(2, 3);
    expect(result).toEqual(6);
  });

  it('should multiply negative numbers', () => {
    const result = pipe.transform(-5, -7);
    expect(result).toEqual(35);
  });
});








