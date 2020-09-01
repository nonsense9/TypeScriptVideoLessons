const myName:string = "WFM";
const myAge:number = 50;

function getMyName(): string {
  return myName;
}

function getMyAge(age: number, prefix: string): string {
  return prefix + age;
}

function consoleLog(str: string): void {
  console.log(str);
}

const testFunc = () => 1 + 1;
const testFunc2 = function () {
  return 1 + 1;
}

let mySum: (a: number, b: number) => number;

function sum(num1: number, num2: number): number {
  return num1 + num2;
}
mySum = sum;

console.log(mySum(100500, 1));