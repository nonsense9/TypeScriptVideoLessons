class User {
  // private isTeacher: boolean;
  protected age: number = 30;

  constructor(public name: string, public job: string) {
  }

  public getAge(): string {
    return this.age + '';
  }
}

class WFM extends User {
  constructor(job: string) {
    super('WFM', job);
    this.age = 100;
  }

  getAge(): string {
    return 'Hello' + this.age;
  }
}

const user = new User('WFM', 'Frontend');
const wfm = new WFM('Frontend');
console.log(wfm.getAge());

abstract class Car {
  model: string = "suzki";
  year: number = 2010;

  abstract logInfo(info: string): void;

  getCarYear(): number {
    return this.year;
  }

  getCarModel(): string {
    return this.model;
  }
}

  
class Mercedes extends Car {
  logInfo(info: string): void {
    console.log(info);
  }
}

const car = new Mercedes();
console.log(car);
car.logInfo('Info');
console.log(car.getCarYear());
console.log(car.getCarModel());