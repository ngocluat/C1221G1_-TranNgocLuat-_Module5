import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  toDoForm: FormGroup;
  id: number;

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }
  ngOnInit(): void {
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.router.navigate(['/list']);
    }, e => {
      console.log(e);
    });
  }

  getTodo(id: number) {
    return this.todoService.findById(id).subscribe(category => {
      this.toDoForm = new FormGroup({
        content: new FormControl(category.content),
        complete: new FormControl(category.complete),
      });
    });
  }

}
