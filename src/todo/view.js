var $ = require("jquery");

const ENTER_KEY_CODE = 13

var View = {

  initialize() {

    let $newTaskInput = $("#new-task")
    $newTaskInput.on("keyup",(e) => {
      if (e.keyCode === ENTER_KEY_CODE) {
        var newTaskName = $newTaskInput.val()
      }
    })

  }
  
}

export default View