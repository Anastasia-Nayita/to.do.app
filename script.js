let newTaskInp = $(".new-task__txt");
const tasksList = $(".tasks-list");
const iLeft = $(".i-left");
const themeIcon = $("#theme-icon");
const body = $("body");
const bg = $(".bg");
let myHtml = "";
let oldTasks = "";
let i = localStorage.length;

setDarkTheme = () => {
  themeIcon.attr("src", "./images/icon-sun.svg");
  //bg.attr("src", "./images/bg-desktop-dark.jpg");
};

setLightTheme = () => {
  themeIcon.attr("src", "./images/icon-moon.svg");
 // bg.attr("src", "./images/bg-desktop-light.jpg");
};

$(window).on("load", function () {
  let theme = localStorage.getItem("theme");
  if (theme) {
    if (theme === "dark") {
      body.addClass("dark-theme");
      setDarkTheme();
    }
    if (theme === "light") {
      body.remove("dark-theme");
      setLightTheme();
    }
  }
  let lastIndex = localStorage.getItem("lastIndex");
  if (lastIndex) {
    myHtml += localStorage.getItem(`myHtmlStored${lastIndex}`); // noticed I used lastIndex
    tasksList.html(myHtml);
    i = Number(lastIndex) + 1;
    iLeft.html(i + " items left");
  }
});

newTaskInp.on("keypress", function (e) {
  if (e.which === 13 && newTaskInp.val() !== "") {
    console.log("i = ", i);
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
      localStorage.setItem("lastIndex", i);
      i++;
    } catch (err) {
      console.log(err);
    }
    newTaskInp.val("");
    iLeft.html(i + " items left");
  }
});

/////// working on i count
// let k=1;

// $("#checkbox "+`${k}`).on("click", function (e) {
//   if ($(this).is(":checked")) {
//     console.log('checked')
//    // i--;
//    // iLeft.html(i + " items left");
//   } else {
//     console.log('unchecked')

//    // i++;
//     //iLeft.html(i + " items left");
//   }
// });

// $(".task-list__txt").on("click", function (e) {
//   console.log("you clicked");
// });

// $("#checkbox "+`${k}`).click(function () {
//   console.log("checked no.1");
// });

//console.log($("#checkbox 1").prop('checked'));

//$("input").checked(console.log("checked"));

// if ($("#label").prop('checked')) {
//   console.log("input is checked");
// }

// var labelID;
// $("label").click(function () {
//   console.log("firing");
//   labelID = $(this).attr("for");
//   $("#" + labelID).trigger("click");
//   console.log("label clicked");
// });

themeIcon.on("click", function () {
  body.toggleClass("dark-theme");
  if (body.hasClass("dark-theme")) {
    setDarkTheme();
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
