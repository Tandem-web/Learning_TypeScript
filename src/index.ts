export {};
/* -------------------------------------------------------------------------- */
/*                               Примитивы в TS                               */
/* -------------------------------------------------------------------------- */

let primitivesBool: boolean = true,
    primitivesString: string = 'Hello world',
    primitivesNumber: number = 42,
    primitivesNull: null = null,
    primitivesUndefined: undefined = undefined;


/* -------------------------------------------------------------------------- */
/*                                   Массивы                                  */
/* -------------------------------------------------------------------------- */

let myArrayOfString: string[] = ['Hello', 'World'];
let myArrayOfNumber: number[] = [1, 2, 3, 4];
//  and e.t.c


let myMultipleTypesMassive: (string | number)[] = ['Age', 21];

console.log(myMultipleTypesMassive)

/* -------------------------------------------------------------------------- */
/*                                   Функции                                  */
/* -------------------------------------------------------------------------- */

// В качестве аргумента
function greet(name: string): void{
    console.log(`Hello, ${name}!`);
}
let username: string = 'Nikita';

greet(username)

// В качестве результата

function square(num: number): number{
    return num * num;
}

console.log(square(5))

// С учётом наличия промиса

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

console.log(getFavoriteNumber());

// Анониманые функции

let arrNames: string[] = ['Alice', 'Bob', 'Nikita'];

arrNames.forEach((name) => {
    console.log(name.toUpperCase());
})


function sumAB(a: number = 0, b: number = 5): number{
    return a + b;
}
console.log(sumAB())

/* -------------------------------------------------------------------------- */
/*                               Объектные типы                               */
/* -------------------------------------------------------------------------- */

type Coords = {
    x: number;
    y: number;
}

function printCoord(pt: Coords) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

let myCoords: Coords = {
    x: 1,
    y: 2
}

printCoord(myCoords);

// ====================================================

type FullName = {
    firstName: string;
    lastName?: string;
}

function showFullName(info: FullName): void{
    console.log(info.firstName.toUpperCase(), info.lastName?.toLowerCase());
}

showFullName({firstName: 'Nikita', lastName: 'Lebedev'});

showFullName({firstName: 'Nikita'});


/* -------------------------------------------------------------------------- */
/*                                   typeof                                   */
/* -------------------------------------------------------------------------- */

let testPrimitive: boolean = false;

if(typeof testPrimitive === 'boolean'){
    console.log('testPrimitive is boolean')
}else{
    console.log('testPrimitive is not boolean')
}

// !!! Проверяет только примитивы

/* -------------------------------------------------------------------------- */
/*                                 instanceof                                 */
/* -------------------------------------------------------------------------- */

class Human {
    name: string;
    constructor(data: string){
        this.name = data;
    }
}

let myHuman = new Human('Nikita');

if(myHuman instanceof Human){
    console.log('Человек унаследован от человека');
}else{
    console.log('Человек не унаследован от человека');
}


/* -------------------------------------------------------------------------- */
/*                               Тип Assertions                               */
/* -------------------------------------------------------------------------- */

let text: any = 'Бла-бла';

let strLenght = (<string>text).length;

console.log(strLenght)



/* -------------------------------------------------------------------------- */
/*                              Кортежи | Tuples                              */
/* -------------------------------------------------------------------------- */

let myTuple: [string, number] = ['This is Tuple', 42];
console.log(myTuple);


/* -------------------------------------------------------------------------- */
/*                                    ENUM                                    */
/* -------------------------------------------------------------------------- */

enum GameState{
    Playing = 1,
    Stopped = -1,
    Finished = 0,
}

console.log(GameState.Playing);
console.log(GameState)


/* -------------------------------------------------------------------------- */
/*                                  ReadOnly                                  */
/* -------------------------------------------------------------------------- */

interface myUser{
    readonly name: string;
    age: number;
    sex?: string;
}

let userNikita: myUser = {
    name: 'Nikita',
    age: 21,
}

console.log(userNikita)
userNikita.sex = 'male';

console.log(userNikita)


/* -------------------------------------------------------------------------- */
/*                                   Generic                                  */
/* -------------------------------------------------------------------------- */

function myGeneric<T>(arg: T): T{
    return arg;
}

console.log(myGeneric(123))