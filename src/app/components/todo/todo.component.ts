import {Component, OnInit} from "@angular/core";

@Component({
  selector: "todo-component",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit{
  public tasks: Array<{ text: string, done: boolean }>;

  constructor() {
    this.tasks = [];
  }

  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  addTask(task: string) {
    if (task === "" || task.trim() === "") return;
    this.tasks.push({ text: task, done: false});
  }

  removeTask(task:any) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  toggle(task:any) {
    task.done = !task.done;
  }
}
