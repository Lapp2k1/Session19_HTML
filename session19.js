// let company = [
//   { id: 1, name: "A", age: 22, salary: 1000 },
//   { id: 2, name: "B", age: 21, salary: 1500 },
// ];
// let userInput = prompt("C/R/U/D/E=?");
// if (userInput == "C") {
//   let name = prompt("Input staff name?");
//   let age = prompt("Input staff age?");
//   let salary = +prompt("Input staff salary?");
//   newstaff = { id: company[company.length - 1].id + 1, name, age, salary };
//   company.push(newstaff);
//   for (const key in company) {
//     console.log("--------");
//     console.log(company[key].id);
//   }
// }

let person = {
  id: 1,
  name: "A",
  age: 23,
  job: ["dev", "student"],
  address: {
    number: 18,
    city: "Hà Nội",
    dance: function () {
      console.log("Jpop");
      console.log(this);
    },
  },
  marriage: false,

  sayHello(name) {
    console.log("Hello", name);
    console.log(this);
  },
  introduce(weight, height) {
    console.log(`My name is ${this.name}. I'm ${weight} kg and ${height} cm`);
  },
};

let introduce = person.introduce;

// console.log(typeof this.age);

// introduce = introduce.bind(person);
 introduce.call(person, 70, 150)  ;
 introduce.apply(person, [50,200])  ;

