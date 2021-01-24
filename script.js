let newTaskInp = $(".new-task__txt");
const tasksList = $(".tasks-list");
let myHtml = "";
let i = 0;
newTaskInp.on("keypress", function (e) {
  if (e.which === 13) {
    i++;
    let addedTask =
      "<div class='tasks-list__i'><div class='round'> <input id='checkbox " +
      `${i}` +
      "' type='checkbox' /><label for='checkbox " +
      `${i}` +
      "'>" +
      " <div class='task-list__txt'>" +
      newTaskInp.val() +
      "</div>" +
      "</label></div>" +
      "</div>";
    myHtml += addedTask;
    tasksList.html(myHtml);
    newTaskInp.val("");
  }
});
