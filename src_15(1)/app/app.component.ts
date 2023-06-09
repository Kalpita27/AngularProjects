import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestingX';
  CountCapital(str: string): number {
    const capitalLetters = str.match(/[A-Z]/g);
    return capitalLetters ? capitalLetters.length : 0;
  }

  checkPassword(password: string): boolean {
    const capitalLetters = password.match(/[A-Z]/g);
    const smallLetters = password.match(/[a-z]/g);
    const digits = password.match(/[0-9]/g);
    const specialSymbols = password.match(/[!@#$%^&*(),.?":{}|<>]/g);

    return Boolean (
      capitalLetters && capitalLetters.length >= 2 &&
      smallLetters && smallLetters.length >= 3 &&
      digits && digits.length >= 2 &&
      specialSymbols && specialSymbols.length >= 1
    );
  }

  addition(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}