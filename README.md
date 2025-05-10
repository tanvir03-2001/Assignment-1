## Interface and type – what is the difference between these two?

In TypeScript, we use interfaces or types to describe the structure of an object (i.e., what properties it will have, what their names and types will be). In many ways, they work the same, but there are some minor differences.

### Interface

We generally create the structure of an object with an interface. Suppose we want to store information about a person

```
interface Person {
 name: string;
 age: number;
}

const user: Person = {
 name: "Rahim",
 age: 28,
};
```

### Type

With type, we can create types for not only objects, but also for many other things—such as combining two or three types together or types where a value can have multiple types.

```
type Person = {
  name: string;
  age: number;
};

type ID = string | number;

const myId: ID = 1234; // ঠিক আছে

```

### মূল পার্থক্য

Interface is mostly used when creating objects.

type is more commonly used when dealing with more complex types (e.g., mixing multiple types).
Declaring an interface multiple times can be used together, but type cannot.

## What is the keyof keyword?

What does keyof mean? What are the names of the properties of an object?

Suppose there is a type like the following

```
type Person = {
  name: string;
  age: number;
  email: string;
};
```

Now keyof Person will mean "name" | "age" | "email"

That is, it will be any one of these three names.

### উদাহরণ

```
function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}
```

Here, by using keyof Person, we are ensuring that only one of "name", "age" or "email" can be given as a key.

```
const person = {
  name: "Sumi",
  age: 26,
  email: "sumi@example.com"
};

getValue(person, "name"); // ঠিক আছে
getValue(person, "address"); // ভুল
```
