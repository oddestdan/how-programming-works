/* 1. Объявите переменную и запишите в нее свое имя как литерал строки.
2. Объявите константу и запишите в нее год своего рождения как литерал числа.
3. Создайте функцию, которая печатает приветствие и имеет один аргумент: `name`.
4. Вызовите эту функцию и передайте в нее имя как литерал строки.
5. Теперь вызовите функцию, передавая в нее переменную.
6. Вызовите функцию с константой в качестве аргумента. */

'use strict';

// eslint-disable-next-line prefer-const
let myName = 'Dan';
const BIRTH_YEAR = 1998;

const greeting = name => {
  console.log(`Hello, ${name}`);
};

greeting('Josh'); // Hello, Josh
greeting(myName); // Hello, Dan
greeting(BIRTH_YEAR); // Hello, 1998