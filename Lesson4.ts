const arr: [number, string] = [1, '2'];

type User = {name: string, age: number, getJobs: () => void, jobs: string[], logName?: () => void}; 

let user: User = {
  name: 'WFM',
  age: 50,
  jobs: ['a', 'b'],
  getJobs(): string[] {
    return (this.jobs);
  },
  logName(): void {
    console.log(this.name);
  }
};


let user2: {name: string, age: number, logName: () => void, jobs: string[]} = {
  name: 'WFM',
  age: 50,
  jobs: ['a', 'b'],
  logName (): void {
    console.log(this.name)
  }
};