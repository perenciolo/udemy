export class Attributes<T> {
  constructor(private data: T) {}

  public get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  public getAll(): T {
    return this.data;
  }

  public set(update: T): void {
    (<any>Object).assign(this.data, update);
  }
}
