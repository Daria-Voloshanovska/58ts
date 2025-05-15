//! деструктуризация обьектов

// реализация задачи разделения объекта на переменные без деструктуризации

interface IPerson {
    name: string;
    age: number;
    hobby: string;
}
const peter:IPerson = { name: "Peter", age: 40, hobby: "coding" };

// const name = peter.name;
// const age = peter.age;
// const hobby = peter.hobby;

// * с деструктуризацией

// в одну строчку мы объявили переменные с таким же названием как и ключи объекта по которым мы хотим забрать значения

const {name, age, hobby} = peter

console.log(name);
console.log(age);
console.log(hobby)
