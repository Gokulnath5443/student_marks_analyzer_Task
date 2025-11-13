// 🧩 Task 1: Sum of Array Elements
// ans:

// let num=[5, 10, 15, 20]
// let total=num.reduce((a,b)=>a+b,0)
// console.log("Ans :",total)

// 🧩 Task 2: Find Maximum and Minimum
// ans:

// let num=[12, 7, 45, 22, 9]
// let max=num.reduce((a,b)=>(a>b)?a:b)
// let min=num.reduce((a,b)=>(a<b)?a:b)
// console.log(`Ans: ${max} is max number`)
// console.log(`Ans: ${min} is min number`)


// 🧩 Task 3: Reverse an Array (without using reverse())
// ans:

// let num=[1,2,3,4,5]

// function fn(num){
//     let reverse=[]
//     for(i=num.length-1;i>=0;i--){
//         reverse.push(num[i])
//     }
//     return reverse
// }
// console.log("Ans :",fn(num))

// 🧩 Task 4: Remove Duplicates from Array
// ans:

// let num = [1, 2, 2, 3, 4, 4, 5];

// function fn(num){
//     let dup=[]
//     for(let i=0;i<num.length;i++){
//        if(!dup.includes(num[i])){
//         dup.push(num[i])
//        }
//     }
//     return dup
// }
// console.log("Ans :",fn(num))

// 🧩 Task 5: Count Occurrences of Each Element
// ans:

//  let num = ["apple", "banana", "apple", "cherry", "banana", "apple"];

//     let dup=[]
//     for(let i=0;i<num.length;i++){
//        if(!dup.includes(num[i])){
//         dup.push(num[i])
//        }
//     }

// for (let i=0;i<dup.length;i++){
//     let count=0
//     for(let j=0;j<num.length;j++){
//        if (dup[i]==num[j]){
//         count+=1
//        }
//     }
// console.log(`${dup[i]} : ${count}`)
// }


// 🧩 Task 6: Filter Even Numbers
// ans:

// let arr = [10, 15, 20, 25, 30];
// let even=arr.filter(i=>i%2==0)
// console.log("Ans :even=",even)

// 🧩 Task 7: Merge Two Arrays Without Duplicates
// ans:

// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let c=[...new Set([...a,...b])]
// console.log("Ans :",c)

// 🧩 Task 8: Sort Numbers Ascending & Descending
// ans:

// let num = [42, 7, 19, 3, 25];
// let Ascending=num.sort((a,b)=>a-b)
// console.log("Ans : Asc=",Ascending)
// let Descending=num.sort((a,b)=>b -a)
// console.log("Ans : Des=",Descending)


// 🧩 Task 9: Find Second Largest Number
// ans:

// let arr = [10, 25, 5, 30, 20];
// let num=arr.sort((a,b)=>a-b);
// console.log("Ans :",num[num.length-2],"is second largest number");

// 🧩 Task 10: Flatten a Nested Array
// ans:discuss by bala batch member

// let arr = [1, [2, [3, 4]], 5];
// console.log("Ans :",arr.flat(Infinity))


// 🧩 Task 11: Square Each Number (Using map())
// ans:

// let nums = [2, 4, 6, 8];
// let square=nums.map(n=>n*n)
// console.log("Ans :",square)

// 🧩 Task 12: Filter Words by Length (Using filter())
// ans:

// let words = ["sun", "planet", "moon", "star", "galaxy"];
// let len=words.filter(word=>word.length>4 )
// console.log("Ans :",len)

// 🧩 Task 13: Sum of Numbers (Using reduce())
// ans:

// let numbers = [5, 10, 15, 20];
// let total=numbers.reduce((a,b)=>a+b,0)
// console.log("Ans :",total);


// 🧩 Task 14: Find First Negative Number (Using find())
// ans:

// let arr = [4, 8, -3, 9, -6];
// let Negative=arr.find(n=>n<0)
// console.log("Ans :",Negative);

// 🧩 Task 15: Sort Objects by Age
// ans:

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 30 }
// ];

// let newUser=users.sort((a,b)=>a.age-b.age,0)
// console.log("Ans :",newUser);


// 🧩 Task 16: Count Even and Odd Numbers (Using reduce())
// ans:

// let nums = [1,2,3,4,5,6];
// let sum=nums.reduce((a,n)=>{

//     if (n%2==0){
//         a.even++
//     }
//     else{
//         a.odd++
//     }
//     return a
// } ,{even:0,odd:0})
// console.log("Ans :",sum)

// 🧩 Task 17: Remove Falsy Values (Using filter())
// ans:

// let arr = [0, "hello", false, 42, "", null, "JS", undefined];
// let sum=arr.filter(n=>(n!==null && n!==undefined && n!==Boolean &&n!="" &&n!==" "))
// console.log("Ans :",sum);

// 🧩 Task 18: Capitalize Each Word (Using map())
// ans:

// let words = ["apple", "banana", "cherry"];
// let sum=words.map(n=>n[0].toUpperCase()+n.slice(1))
// console.log("Ans :",sum);

// 🧩 Task 19: Group Numbers by Even/Odd
// ans:

// let numbers = [10, 15, 20, 25, 30];

// let even=numbers.filter(n=>n%2==0);
// let odd=numbers.filter(n=>n%2==1);
// console.log("Even :",even);
// console.log("Odd :",odd);


// 🧩 Task 20: Find Average Marks (Using reduce())
// ans:

// let marks = [75, 80, 90, 85];
// let sum=marks.reduce((a,b)=>a+b/marks.length,0)
// console.log(`Average : ${sum}`)