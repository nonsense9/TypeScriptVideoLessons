// function getter(data: any) {
//   return data;
// }

// console.log(getter('WFM').length);
// console.log(getter(100).length); <= this won't work!

function genericGetter<T>(data: T): T {
  return data;
}

console.log(genericGetter("WFM").length);
console.log(genericGetter(100));

let newGenericFunction: <T>(data: T) => T = genericGetter;

//  =================================================

class Multiply<T extends number | string> {
  constructor(private a: T, private b: T) {}

  public getResult(): number {
    return +this.a * +this.b;
  }
}

const mNum = new Multiply<number>(10, 5);
console.log('Number: ', mNum.getResult());

const mStr = new Multiply<string>('50', '60');
console.log('String: ', mStr.getResult());