// Normal function

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

// Arror function

const sum2 = (num1: number, num2: number): number => num1 + num2;

// function in object

const details: {
  name: String;
  balance: number;
  newBalance(balance: number): void;
} = {
  name: "Arif",
  balance: 4,
  newBalance(balance: number) {
    console.log(`New Balance is ${this.balance + balance}`);
  },
};

// Array map function

const numbers: number[] = [20, 30, 40, 50];

const squareNumbets: number[] = numbers.map((num: number) => num * num);
