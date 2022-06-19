import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  toDoForm: FormGroup;
  id: number;

  constructor(private todoService: TodoService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit() {

  }

  updateCategory(id: number) {
    const category = this.toDoForm.value;
    this.todoService.updateTodo(id, category).subscribe(() => {
      this.route.navigate(['/list'])
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }


  getCategory(id: number) {
    return this.todoService.findById(id).subscribe(category => {
      this.toDoForm = new FormGroup({
        complete: new FormControl(category.complete),
        content: new FormControl(category.content),
      });
    });
  }
}
