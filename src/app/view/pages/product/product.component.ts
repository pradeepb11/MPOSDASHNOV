import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
declare let $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) {
  
   }

  ngOnInit(): void {

    this.getAllProductsList();

    $(function () {
      $("#example1").DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "buttons": ["csv", "excel","print",]
      }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
      // $('#example2').DataTable({
      //   "paging": true,
      //   "lengthChange": false,
      //   "searching": false,
      //   "ordering": true,
      //   "info": true,
      //   "autoWidth": false,
      //   "responsive": true,
      // });
    });

  }


  /*********
   * GetAll Products List
   */
  getAllProductsList(){
    this.productService.getAllProductList()
    .subscribe(
      (res) => {
        console.log(res);
      }
    )
  }


}
