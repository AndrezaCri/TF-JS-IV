// Interfaces para funções
function addToCart(item: {id: number, title: string, variantId: number}) {
  console.log(`Adding "${item.title}" to cart.`);
}

addToCart({id: 1, title: 'shoes'});


// Interfaces para classes: implements
class Person {
  constructor(name: string, age: number) {}
}

const jane = new Person('Jane', 31);

console.log(`${jane.name} is ${jane.age} years old.`);

