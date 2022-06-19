import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GiaoDich} from "../../model/GiaoDich";
import {GiaoDichService} from "../../service/giao-dich.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-home-transaction',
  templateUrl: './home-transaction.component.html',
  styleUrls: ['./home-transaction.component.css']
})
export class HomeTransactionComponent implements OnInit {

  p: string | number = 1;
  id: number;

  constructor(private transactionService: GiaoDichService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private customerService: CustomerService) {
  }

  public customers1: GiaoDich[] = [];
  customerDelete: GiaoDich = new GiaoDich();
  transaction: GiaoDich[] = []
  customer: Customer[] = []

  ngOnInit(): void {
    this.transactionService.search('', '')
      .subscribe(item => {
          this.p = 1;
          this.transaction = item;
          console.log(item)
        },
        () => {
        },
        () => {

        }
      )

  }


// lấy giá trị hiển thị khi xóa
  getGiaoDich(item: GiaoDich) {
    this.customerDelete = item
  }

// hỏi trước khi xóa
  confirmDelete() {
    this.transactionService.deleteGiaoDich(this.customerDelete.id).subscribe(() => {
      this.ngOnInit()
    }, e => {
      console.log(e)
    })
  }

// lấy giá trị từ input
  @ViewChild('maGiaoDich') maGiaoDich: ElementRef;
  @ViewChild('donGia') donGia: ElementRef;

  searching() {
    this.transactionService.search(this.maGiaoDich.nativeElement.value,
      this.donGia.nativeElement.value)
  }


  //  edit


}
