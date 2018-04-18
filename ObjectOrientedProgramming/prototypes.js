
class Person {
  constructor(name) {
    this.name = name;
  }
}

const ashlyn = new Person('Ashlyn');
const gus = new Person('Gus');

console.log( ashlyn.__proto__ === Person.prototype );
console.log( gus.__proto__ === Person.prototype );

console.log( Person.prototype.constructor === Person );

Person.prototype.isIntsructor = true;

console.log(ashlyn.isIntsructor);
console.log(gus.isIntsructor);
