const students = [
    {
        id: 1,
        name: "Goodito Fujiko",
        age: 20
    },
    {
        id: 5,
        name: "Dimitri Petrenko",
        age: 22
    },
    {
        id: 10,
        name: "Rico Rodriguez",
        age: 21
    },
    {
        id: 3,
        name: "Lena Oxton",
        age: 28
    },
    {
        id: 2,
        name: "Mary Somers",
        age: 39
    }
]


 console.log(students[5]?.name)
//  การ Throw exception จะเกิดขึ้น
//  ถ้ามันพยายามเข้าถึง properties ของตัวที่เป็น undefined
//  Optional Chaining จะ return undefined แทนที่จะ throw exception


//  ให้แสดงชื่อของแต่ละ student มา 10 คน (ถึงแม้ว่าจะมีไม่ถึง 10 ก็ตาม)
for (let i = 0; i < 10; i++) {
    console.log(students[i]?.name);
}