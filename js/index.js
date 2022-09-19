import { MyTask } from "../models/MyTask.js";

let myJob = new MyTask();
//Thêm mới công việc
console.log(myJob);
document.querySelector("#addItem").onclick = () => {
  let job = document.querySelector("#newTask");
  if (!job.value) {
    alert("Xin vui lòng điền vào chỗ trống !!!");
    return false;
  }
  myJob.add(job);
  myJob.saveTask();
  myJob.render();
};
//Sắp xếp tăng dần A -> Z
document.querySelector("#two").onclick = () => {
  myJob.ascending();
  myJob.saveTask();
  myJob.render();
};
//Sắp xếp giảm dần Z -> A
document.querySelector("#three").onclick = () => {
  myJob.descending();
  myJob.saveTask();
  myJob.render();
};
//Xóa tất cả task
document.querySelector("#one").onclick = () => {
  myJob.arrTask.splice(0, myJob.arrTask.length);
  myJob.saveTask();
  myJob.render();
};
//Xóa công việc
window.del = (idClick) => {
  myJob.deleteItem(idClick);
  myJob.render();
  myJob.saveTask();
};
//Đánh dấu hoàn thành công việc
// window.check = (idClick) => {
//   myJob.completeItem(idClick);
//   myJob.renderComplete();
//   myJob.saveTask();
// };

//Loại lại sau khi chạy hết chương trình
window.onload = function () {
  myJob.getTask();
  myJob.render();
};
