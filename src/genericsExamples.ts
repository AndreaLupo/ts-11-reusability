const addOne = (a: number): number => {
  return a + 1;
}

// better, more reusable
const add = (a: number, b: number): number => {
  return a + b;
}

// GENERICS
class HoldNumber {
  data: number = 0;
}
class HoldString {
  data: string = '';
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'Hello';

// They're duplicated!!! Change only the type of data
class HoldAnything<TypeOfData> {
  data!: TypeOfData;

  add(a: TypeOfData): TypeOfData {
    return a;
  }
}

const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 32;

const holdString2 = new HoldAnything<string>();
holdString2.data = 'Hei';