import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-craete',
  templateUrl: './craete.component.html',
  styleUrls: ['./craete.component.css']
})
export class CraeteComponent implements OnInit {
  toDoForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    content: new FormControl(''),
    complete: new FormControl('')
  });

  constructor( private  todoService: TodoService) {
  }

  ngOnInit() {
  }

  submit() {
    const category = this.toDoForm.value;
    this.todoService.saveTodo(category).subscribe(() => {
      this.toDoForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }
}
