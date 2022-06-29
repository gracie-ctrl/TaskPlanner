//Form Validation
let taskName1 = document.querySelector('#taskName');
let assigneeName1 = document.querySelector('#assigneeName');
let taskDescription1 = document.querySelector('#taskDescription');
let taskStatus1 = document.querySelector('#taskStatus');
let taskDueDate1 = document.querySelector('#taskDueDate');
let submit_taskForm1 = document.querySelector('#submit_taskForm');
//let taskModal1 = document.querySelector('#taskModal');
submit_taskForm1.addEventListener('click', validateInput);
//taskModal1.addEventListener('change', validateInput);
let errMsg1 = document.querySelector('#errMsgName');
errMsg1.style.color = "#FF0000";
let errMsg2 = document.querySelector('#errMsgDescription');
errMsg2.style.color = "#FF0000";
let errMsg3 = document.querySelector('#errMsgAssignee');
errMsg3.style.color = "#FF0000";
let errMsg4 = document.querySelector('#errMsgDueDate');
errMsg4.style.color = "#FF0000";
let errMsg5 = document.querySelector('#errMsgStatus');
errMsg5.style.color = "#FF0000";

function validateInput() {
    if (taskName1.value.length === 0) {
        errMsg1.innerHTML = " Enter the Task Name";
        taskName1.focus();
        console.log("line1")
        return false;

    }
    if (taskName1.value.length < 9) {
        errMsg1.innerHTML = "";
        errMsg1.innerHTML = "Name should not be less than 8 characters";
        taskName1.focus();
        console.log("line2")
        return false;
    }

     else {
        errMsg1.innerHTML = "";
        console.log("line3")
    }
    if (taskDescription1.value.length === 0) {
        //errMsg2.innerHTML ="";
        errMsg2.innerHTML = "Enter the Task Description";
        taskDescription1.focus();
        console.log("line4")
        return false;

    }
    if (taskDescription1.value.length < 16) {
        errMsg2.innerHTML = "";
        errMsg2.innerHTML = "Description should not be less than 15 characters";
        taskName1.focus();
        console.log("line5")
        return false;
    }
     else {
       errMsg2.innerHTML = "";

    }

    if (assigneeName1.value.length === 0) {
        // errMsg3.innerHTML ="";
        errMsg3.innerHTML = "Enter the Assignee Name";
        assigneeName1.focus();
        console.log("line6")
        return false;

    }
    if (assigneeName1.value.length < 16) {
        errMsg3.innerHTML = "";
        errMsg3.innerHTML = "Name should not be less than 15 characters";
        taskName1.focus();
        console.log("line7")
        return false;
    }
     else {
        errMsg3.innerHTML = "";

     }
    if (taskDueDate1.value.length === 0) {
        //errMsg4.innerHTML ="";
        errMsg4.innerHTML = "Select Due-Date";
        taskDueDate1.focus();
        console.log("line8")
        return false;
    }
     else {
       errMsg4.innerHTML = "";

    }
    /* let currDate = new Date();
     currDate= currDate.getTime();
     if (taskDueDate1.value < currDate)
         {
             alert(currDate.getTime());
             alert(taskDueDate1.value);
         errMsg1.innerHTML="Due date should be after the Current Date"
         taskDueDate1.focus();
         return false;
     }*/
    if (taskStatus1.value.length === 0) {
        //errMsg5.innerHTML ="";
        errMsg5.innerHTML = "Select Task Status";
        taskStatus1.focus();
        console.log("line9")
        return false;
    }
    else  {

       errMsg5.innerHTML = "";
        console.log("line10");
        return false;
     }


}

// display Current date
let currentDate = new Date();
let disDate = document.getElementById('currentDate');
//disDate.innerHTML = currentDate;
let day = currentDate.getDate();
//alert(day);
// To display st, nd, rd, th for the day
let rem = day % 10;
let hint = " ";
if (rem === 1) {
    hint = "st";
} else if (rem === 2) {
    hint = "nd";
} else if (rem === 3) {
    hint = "rd";
} else {
    hint = "th";
}
//let month = currentDate.getMonth() + 1;
let month = currentDate.toLocaleString('default', { month: 'long' });
//alert(month);
let year = currentDate.getFullYear();
//alert(year);
//alert("Today is "+day+" of the month "+ month+" of the Year "+year);
disDate.innerHTML = day + hint + ' ' + month + ' ' + year;
