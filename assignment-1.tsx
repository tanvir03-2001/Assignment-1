function formatString(input: string, toUpper: boolean = true): string {
  console.log(toUpper ? input.toUpperCase() : input.toLowerCase());
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((max, product) => {
    return product.price > max.price ? product : max;
  });
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not alloweed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
