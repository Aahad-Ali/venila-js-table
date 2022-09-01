// var simpleObject = {
//     fName: "Aahad ",
//     lName: "Ali ",
//     age: 18,
//     fatherName: "Tahir Saleem",
//     cnic: 4230124567511,
//     educatin: "FSC",

//     ary: ["Karachi", "Islamabad", "KPK", "Balochistan", 1, 2, 3, 4],

//     // fun: function () {
//     //     var capital = simpleObject.ary;


//     //     for (var i = 0; i < simpleObject.ary.length; i++) {

//     //         if (simpleObject.ary[i] === "Islamabad") {
//     //             alert("Right");

//     //         }

//     //     }
//     // }
// }

// for (var display in simpleObject) {

//     document.write(display + " : " + simpleObject[display] + "<br>")
// }

// console.log(simpleObject);


// =============================================================================================================================================================

// function Plan(iD, eName, fName, email, address, designation, experience, salary) {

//     this.iD              = 786;
//     this.fName              = "Aahad Ali";
//     this.fatherName               = "Tahir Saleem";
//     this.email                  = "XYZ@gmail.com";
//     this.address                   = "abc road karachi";
//     this.designation              = "Manager";
//     this.experience                = "3 Years experience";
//     this.salary                 = 25000;

// }

// var table = document.createElement('table');



// // table.appendChild(tHeading1);


// var tHeading1 = document.createElement('th');
// var tHeading2 = document.createElement('th');
// var tHeading3 = document.createElement('th');
// var tHeading4 = document.createElement('th');
// var tHeading5 = document.createElement('th');
// var tHeading6 = document.createElement('th');
// var tHeading7 = document.createElement('th');
// var tHeading8 = document.createElement('th');


// table.appendChild(tHeading1);
// table.appendChild(tHeading2);
// table.appendChild(tHeading3);
// table.appendChild(tHeading4);
// table.appendChild(tHeading5);
// table.appendChild(tHeading6);
// table.appendChild(tHeading7);
// table.appendChild(tHeading8);


// var tText1 = document.createTextNode('ID');
// var tText2 = document.createTextNode('NAME');
// var tText3 = document.createTextNode('F-NAME');
// var tText4 = document.createTextNode('EMAIL');
// var tText5 = document.createTextNode('ADDRESS');
// var tText6 = document.createTextNode('DESIGNATION');
// var tText7 = document.createTextNode('EXPERIENCE');
// var tText8 = document.createTextNode('SALARY');

// tHeading1.appendChild(tText1);
// tHeading2.appendChild(tText2);
// tHeading3.appendChild(tText3);
// tHeading4.appendChild(tText4);
// tHeading5.appendChild(tText5);
// tHeading6.appendChild(tText6);
// tHeading7.appendChild(tText7);
// tHeading8.appendChild(tText8);


// var tRow1 = document.createElement('tr')
// var tRow2 = document.createElement('tr')
// var tRow3 = document.createElement('tr')
// var tRow4 = document.createElement('tr')
// var tRow5 = document.createElement('tr')
// var tRow6 = document.createElement('tr')
// var tRow7 = document.createElement('tr')
// var tRow8 = document.createElement('tr')



// var tData11 = document.createElement('td');
// var tData22 = document.createElement('td');
// var tData33 = document.createElement('td');
// var tData44 = document.createElement('td');
// var tData55 = document.createElement('td');
// var tData66 = document.createElement('td');
// var tData77 = document.createElement('td');
// var tData88 = document.createElement('td');



// var tData1 = document.createTextNode('786');
// var tData2 = document.createTextNode('NAME');
// var tData3 = document.createTextNode('F-NAME');
// var tData4 = document.createTextNode('EMAIL');
// var tData5 = document.createTextNode('ADDRESS');
// var tData6 = document.createTextNode('DESIGNATION');
// var tData7 = document.createTextNode('EXPERIENCE');
// var tData8 = document.createTextNode('SALARY');


// tData11.appendChild(tData1);




// tHeading1.appendChild(tData11);
// tData11.appendChild(tData1);




// console.log(table);

// document.getElementById("main").appendChild(table);



let div = document.querySelector('body');

var userData = [
    { iD: 786, fName: "Aahad Ali", fatherName: "Tahir Saleem", email: "XYZ@gmail.com", address: "abc road karachi", designation: "Manager", experience: "3 Years experience", salary: 25000, },
    { iD: 786, fName: "Aahad Ali", fatherName: "Tahir Saleem", email: "XYZ@gmail.com", address: "abc road karachi", designation: "Manager", experience: "3 Years experience", salary: 25000, },
    { iD: 786, fName: "Aahad Ali", fatherName: "Tahir Saleem", email: "XYZ@gmail.com", address: "abc road karachi", designation: "Manager", experience: "3 Years experience", salary: 25000, },
    { iD: 786, fName: "Aahad Ali", fatherName: "Tahir Saleem", email: "XYZ@gmail.com", address: "abc road karachi", designation: "Manager", experience: "3 Years experience", salary: 25000, },
    { iD: 786, fName: "Aahad Ali", fatherName: "Tahir Saleem", email: "XYZ@gmail.com", address: "abc road karachi", designation: "Manager", experience: "3 Years experience", salary: 25000, },
]

let tableHeader = ['ID', 'Name', 'F-Name', 'Email', 'Address', 'Designation', 'Experience', 'Salary'];

let table = document.createElement('table');
let tHead = document.createElement('tr');

tableHeader.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    tHead.appendChild(header);
});

table.appendChild(tHead);

userData.forEach(uData => {
    let tRow = document.createElement('tr');

    Object.values(uData).forEach(text => {

        let tData = document.createElement('td');
        let textNode = document.createTextNode(text);
        tData.appendChild(textNode);
        tRow.appendChild(tData);


    });
    table.appendChild(tRow);

});




div.appendChild(table);















