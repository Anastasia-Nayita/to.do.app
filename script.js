let newTaskInp = $(".new-task__txt");
const tasksList = $(".tasks-list");
const iLeft = $(".i-left");
const themeIcon = $("#theme-icon");
const body = $("body");
const bg = $(".bg");
let myHtml = "";
let i = 0;

$(window).on("load", function () {
  for (j = 0; j > 0; j++) {
    j++;
    //console.log(j);
    tasksList.html(localStorage.getItem("myHtmlStored" + `${j}`));
  }
});

newTaskInp.on("keypress", function (e) {
  if (e.which === 13 && newTaskInp.val() !== "") {
    i++;
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
      // console.log(
      //   "local storage: ",
      //   localStorage.getItem("myHtmlStored" + `${i}`)
      // );
    } catch (e) {
      console.log("What a nuisance");
    }
    newTaskInp.val("");
    iLeft.html(i + " items left");
  }
  $("input").on("click", function (e) {
    if ($(this).is(":checked") && i !== 0) {
      i--;
      iLeft.html(i + " items left");
    } else {
      i++;
      iLeft.html(i + " items left");
    }
  });
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
