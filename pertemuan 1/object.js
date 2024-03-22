// membuat object () & new Object()
const user = {
    name: "Ucup",
    age: 20,
    major: "Web Developer",
};

//mengakses nilai
console.log(user.name);// in PHP : user->nama 
console.log(user("age"));

//looping object menggunakan for in 
for(const key in user) console.log(user[key]);