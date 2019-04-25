import { Component, OnInit } from '@angular/core';
import { Resource } from '../shared/resource.model';
import { OrderService } from '../shared/order.service';
import { ResourceService } from '../shared/resource.service';
import { Order } from '../shared/order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor( public orderService:OrderService,
    public resourceService:ResourceService) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshResourceList();
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.resourceService.selectedResource = {
      _id: '',
      resource_id: null,
      resource_type: '',
      resource_name: '',
      resource_owner: '',
      resource_count: null,
      available: null,


      };
    }
  }
  refreshOrderList(){
    this.orderService.getOrderList().subscribe((res)=>{
      this.orderService.orders= res as Order[];
    });
  }

  refreshResourceList(){
    this.resourceService.getResourceList().subscribe((res)=>{
      this.resourceService.resource = res as Resource[];
    });
  }
  onEdit(reso:Resource){
    this.resourceService.selectedResource= reso;
  }

  onDelete(_id:string , form:NgForm ){
    if(confirm('Are you sure to delete this record?')==true){
      this.resourceService.deleteResource(_id).subscribe((res)=>{
        this.refreshResourceList();
        this.resetForm(form);
      },
      (e) => console.log(e.message));
    }
  }
}

