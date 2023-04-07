/* let and const

48:00
reference(arry,object)
primitive type: string,number
*/

let person = {
    name: "Harsh"
}

let person2 = person;  //both person2 and person is reference of name. so in reference type agar koi v variable change karega name ko to change dono m point ho jayega. spread operator karke new copy bana sakte hain

person2.name = "Nitesh";
console.log(person); //{name: 'Nitesh'}
console.log(person2);//{name: 'Nitesh'}