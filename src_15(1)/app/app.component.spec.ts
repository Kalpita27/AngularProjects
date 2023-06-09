import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should count capital letters in a string', () => {
    const app = new AppComponent();
    expect(app.CountCapital('Marvellous Infosystems')).toBe(2);
    expect(app.CountCapital('LB')).toBe(2);
    expect(app.CountCapital('Angular')).toBe(1);
  });

  it('should check password strength', () => {
    const app = new AppComponent();
    expect(app.checkPassword('KKalp@')).toBe(true);
    expect(app.checkPassword('P@ssword1')).toBe(false);
  });

  it('should perform addition of array elements', () => {
    const app = new AppComponent();
    expect(app.addition([1, 2, 3, 4])).toBe(10);
    expect(app.addition([5, 10, 15])).toBe(30);
    expect(app.addition([-1, 0, 1])).toBe(0);
  });
});
