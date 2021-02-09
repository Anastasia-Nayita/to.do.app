let newTaskInp = $(".new-task__txt");
const tasksList = $(".tasks-list");
const iLeft = $(".i-left");
const themeIcon = $("#theme-icon");
const body = $("body");
const bg = $(".bg");
let myHtml = "";
let i = 0;

$(window).on("load", function () {
    // please, don't read this first, come back to it!!

    // get your last index
    let lastIndex = localStorage.getItem("lastIndex");

    // check if it exists
    if (lastIndex) {
        // load it if it does exist
        console.log("yes");
        myHtml += localStorage.getItem(`myHtmlStored${lastIndex}`); // noticed I used lastIndex
        tasksList.html(myHtml);
        i = Number(lastIndex) + 1; // you need to update i so as to update your item left. You need to add 1, remember your index starts from 0. NOTE: you might need to change this when you update your click event to calculate items left
        iLeft.html(i + " items left"); 
    }
});

newTaskInp.on("keypress", function (e) {
    if (e.which === 13 && newTaskInp.val() !== "") {
        // console.log(`first i = ${i}`); // i is currently 0
        // i++; // increasing this makes (i) one. this causes unexpected result in the local storage becuase your index will start at one instead of zero
        // You can do this at a later time, maybe when you successfully add the todo list to other lists
        // console.log(`second i = ${i}`);
        let addedTask =
            "<div class='tasks-list__i'><div class='round'> <input id='checkbox " +
            `${i}` +
            "' type='checkbox' name='checkbox' /><label id='label' for='checkbox " +
            `${i}` +
            "'><div class='task-list__txt'>" +
            newTaskInp.val() +
            "</div></label></div></div>";
        myHtml += addedTask;
        tasksList.html(myHtml);
        try {
            localStorage.setItem("myHtmlStored" + `${i}`, myHtml);
            localStorage.setItem("lastIndex", i); // I use this so that we can keep track of our last todo list index
            // console.log(
            //   "local storage: ",
            //   localStorage.getItem("myHtmlStored" + `${i}`)
            // );
            i++; // it is okay to increase our i here, our last index still remain intact
            // console.log(`fixed new i = ${i}`);
        } catch (e) {
            console.log("What a nuisance");
        }
        newTaskInp.val("");
        console.log(`first items left ${i}`);
        iLeft.html(i + " items left");
    }
    // console.log(myHtml);

    // $("input").on("click", function (e) { // you need to fix this, I realised this is working on the input text area, and not on the radio buttons
    //   if ($(this).is(":checked") && i !== 0) {
    //     i--;
    //     iLeft.html(i + " items left");
    //   } else {
    //     i++;
    //     iLeft.html(i + " items left");
    //   }
    // });
});

themeIcon.on("click", function () {
    body.toggleClass("dark-theme");
    if (body.hasClass("dark-theme")) {
        themeIcon.attr("src", "./images/icon-sun.svg");
        bg.attr("src", "./images/bg-desktop-dark.jpg");
    } else {
        themeIcon.attr("src", "./images/icon-moon.svg");
        bg.attr("src", "./images/bg-desktop-light.jpg");
    }
});
