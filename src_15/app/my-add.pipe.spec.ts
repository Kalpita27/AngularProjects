import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  let pipe: MyAddPipe;

  beforeEach(() => {
    pipe = new MyAddPipe();
  });

  it('should add two numbers', () => {
    const result = pipe.transform(2, 3);
    expect(result).toEqual(5);
  });

  it('should add negative numbers', () => {
    const result = pipe.transform(-5, -7);
    expect(result).toEqual(-12);
  });
});
