export class MyTask {
  arrTask = [];
  add = (newTask) => {
    this.arrTask.push({
      name: newTask.value,
      check: false,
    });
  };
  saveTask() {
    localStorage.setItem("arrTask", JSON.stringify(this.arrTask));
  }
  getTask() {
    if (localStorage.getItem("arrTask")) {
      this.arrTask = JSON.parse(localStorage.getItem("arrTask"));
    }
  }
  ascending() {
    this.arrTask = _.orderBy(this.arrTask, ["name"], ["esc"]);
  }
  descending() {
    this.arrTask = _.orderBy(this.arrTask, ["name"], ["desc"]);
  }
  deleteItem = (idClick) => {
    this.arrTask = this.arrTask.filter((job, index) => index != idClick);
  };
  // completeItem = (idClick) => {
  //   let checked = this.arrTask.map((job, index) => {
  //     if (index == idClick) {
  //       console.log(!job.check);
  //       // return !job.completed;
  //     } else {
  //       console.log(job.check);
  //       // return job.completed;
  //     }
  //   });
  //   return checked;
  // };
  //Render cho id="todo"
  render = () => {
    let htmlContent = this.arrTask.reduce((html, job, index) => {
      return (
        html +
        `
               <li>
               ${job.name}
               <div class="buttons">
                    <button class="remove" onclick="del('${index}')">
                            <i class="fa fa-trash"></i>
                    </button>
                    <button class="complete" onclick="check('${index}')">
                            <i class="fa fa-check-circle"></i>
                    </button>
               </div>
               </li>
          `
      );
    }, "");
    document.querySelector(".todo").innerHTML = htmlContent;
  };
  // renderComplete = () => {
  //   let htmlContent = this.arrTask.reduce((html, job) => {
  //     return (
  //       html +
  //       `
  //         <li>
  //         <span>${job.name}</span>
  //         <div class="buttons">
  //             <button class="remove">
  //                      <i class="fa fa-trash"></i>
  //            </button>
  //            <button class="complete">
  //                     <i class="fas fa-check-circle"></i>
  //            </button>
  //         </div>
  //         </li>
  //         `
  //     );
  //   }, "");
  //   document.querySelector("#completed").innerHTML = htmlContent;
  // };
}
