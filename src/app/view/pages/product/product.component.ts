import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

declare let $: any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productsLists:any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: any = {};
  constructor(
    private productService: ProductService
  ) {
  
   }

  ngOnInit(): void {

    // $(function () {
    //   $("#example1").DataTable({
    //     "responsive": true, "lengthChange": false, "autoWidth": false,
    //     "buttons": ["csv", "excel","print",]
    //   }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    //   // $('#example2').DataTable({
    //   //   "paging": true,
    //   //   "lengthChange": false,
    //   //   "searching": false,
    //   //   "ordering": true,
    //   //   "info": true,
    //   //   "autoWidth": false,
    //   //   "responsive": true,
    //   // });
    // });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
       'copy',
        'print',
        'csv',
        'excel',
        'pdf'
      
      ]
   
    };
    this.getAllProductsList();
    

  }


  /*********
   * GetAll Products List
   */
  getAllProductsList(){
    this.productService.getAllProductList()
    .subscribe(
      (res) => {
        console.log(res);
        if(res.response.status === 'success'){
          this.productsLists = res.data;
          this.dtTrigger.next(res.data);
        }
      }
    )
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
