#! /usr/bin/env node
import inquirer from "inquirer";
/// roll number input
let Roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message: "Enter the first Roll Number"
});
/////console.log(Roll);
let Rollnum = Roll.num1;
console.log(Rollnum);
///checking rool number
if (Rollnum === 535352) {
    ////console.log("Welcome to the system");
    ///console.log("Name : zialo");
    /// console.log("Fathername : Tom Bottle ");
    ///marks extrection  
    let marks = await inquirer.prompt([
        {
            name: "English",
            type: "number",
            message: "Enter English Marks"
        }, {
            name: "Math",
            type: "number",
            message: "Enter Math Marks"
        }, {
            name: "Science",
            type: "number",
            message: "Enter Science Marks"
        }
    ]);
    ////console.log(marks)
    let Eng = marks.English;
    let Maths = marks.Math;
    let Sci = marks.Science;
    ///console.log(Eng);
    ///console.log(Maths);
    ///console.log(Sci);
    // percentage
    let totalmarks = 300;
    let totalobtained = Eng + Maths + Sci;
    let percentage = ((totalobtained / totalmarks) * 100);
    //answers
    console.log("Welcome to the system");
    console.log("Name : zialo");
    console.log("Fathername : Tom Bottle ");
    console.log("Total Marks : 300");
    console.log(`English Marks : ${Eng} out of 100`);
    console.log(`Math Marks : ${Maths} out of 100`);
    console.log(`Science Marks : ${Sci} out of 100`);
    console.log(`Obtain Marks = ${totalobtained}  Out Of Total Marks = ${totalmarks}`);
    console.log(`Percentage = ${percentage.toFixed(2)}%`);
}
else {
    console.log("Invalid Roll Number");
}
