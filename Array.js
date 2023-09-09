//  Single datatype Array
const fruit = ["Apple", "Papaya", "Banana", "Orange"]



//  Multiple datatype Array
const mixedData = [1, "Goodito Fujiko", { age: 45, sex: "male" }]

// Datatype of mixedData[0] = 
// Datatype of mixedData[1] = 
// Datatype of mixedData[2] = 



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



//  Array.filter()
const filterStudents = students.filter(
    (value, index) => {
        console.log("Filtering index : " + index);
        return value.age < 25
    }
)

console.log(filterStudents);

//  Array.sort()
const numbers = [1,4,5,2,3,0]
console.log(numbers);
numbers.sort(
    (a,b) => {
        return a - b
    }
)
console.log(numbers);





//  Array.splice
const food = ["Ramen", "Omlete", "Tom Yam Shrimp", "Kra Phow Crispy Pork"]

// Array.splice(<ตำแหน่ง index เริ่มต้น>,<จำนวน index ที่จะลบ>,<Element ที่จะใส่เข้าไป>)
//  ต้องการที่จะใส่ "Pad Tai" เข้าไปใน Array
// food.splice(3, 1, "Pad Tai");
// console.log(food);




//  ถ้าอยากลบ Ramen โดยใช้ indexOf ล่ะ?
let selectedIndex = food.indexOf("Ramen")
console.log(selectedIndex);
food.splice(selectedIndex, 1, "Pad Tai")
console.log(food);


//  กรอง students ที่มีอายุน้อยกว่า 25 ปี
const filterAgeBelow25 = students.filter(
    (value) => {
        return value.age < 25;
    }
)
console.log(filterAgeBelow25);




//  เรียงข้อมูลใน students ตาม id
const sortID = students.sort(
    (stdA, stdB) => {
        return stdA.id - stdB.id
    } 
)
console.log("Sorted ID");
console.log(sortID);

//  เรียงข้อมูลใน students ตาม age
const sortAge = students.sort(
    (stdA, stdB) => {
        return stdA.age - stdB.age
    } 
)
console.log("Sorted Age");
console.log(sortAge);