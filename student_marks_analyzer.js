// // Mini Project Assignment – JS Arrays
// // Project Title: Student Marks Analyzer
// // ans:Self code
// // 1️⃣ Create Student Data

// let students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 58 },
//   { name: "Charlie", marks: 92 },
//   { name: "David", marks: 37 },
//   { name: "Eva", marks: 76 }
// ];

// // 2️⃣ Display All Students

// console.log("📝 All student marks:");

// students.forEach(function(student){
//     console.log(student.name + " - " + student.marks);
// })

// // 3️⃣ Calculate Total & Average Marks

// let totalMarks=students.reduce((acc,n)=>acc+n.marks,0)
// let averageMarks=totalMarks / students.length
// console.log(`\n`);
// console.log(`📊Total Student Marks : ${totalMarks}`)
// console.log(`📈Total Student Average Mark : ${averageMarks}`);

// // 4️⃣ Find Highest and Lowest Marks

// console.log(`\n`);
// console.log("Highest ⬆️ to Lowest ⬇️ Mark List :")
// let high=students.sort(function(a,b){
//     return b.marks-a.marks
// })
// high.forEach(function(highmark){
//     console.log(highmark.name+" - "+highmark.marks)
// })
// console.log(``);

// // 6️⃣ Sort Students by Marks

// let highest=high.reduce((a,b)=>(a.marks>b.marks)?a:b)
// let lowest=high.reduce((a,b)=>(a.marks<b.marks)?a:b)
// console.log(`⬆️Highest Mark : ${highest.name+" - "+highest.marks}`)
// console.log(`⬇️Lowest Mark : ${lowest.name+" - "+lowest.marks}`)

// // 5️⃣ Filter Passing Students

// console.log(`\n`);

// console.log(`✅ Passing Students list:`)
// let pass=students.filter(n=>n.marks>=40)
// pass.forEach(function(stn){
//   console.log(stn.name+" - "+stn.marks)
// })

// // 7️⃣ Display Top 3 Performers

// console.log(`\n`);
// console.log(`🥇Top 3 Performers:`)
// let top=pass.slice(0,3)
// top.forEach(function(rank,index){
//   console.log(index+1 +") "+rank.name+" - "+rank.marks)
// })

// console.log(`\n`);

// // Assign grades (A, B, C, Fail) based on marks.

// high.forEach(function(grade){
//     if (grade.marks>=90){
//       console.log(grade.name+" - Grade 🅰️")
//     }
//     else if (grade.marks>=75){
//       console.log(grade.name+" - Grade 🅱️")
//     }
//     else if (grade.marks>=50){
//       console.log(grade.name+" - Grade 🅲")
//     }
//     else if (grade.marks>=40){
//       console.log(grade.name+" - Grade 🅳")
//     }
//     else {
//       console.log(grade.name+" - Grade ❌ Fail 😞")
//     }

// })

// // ...END...

