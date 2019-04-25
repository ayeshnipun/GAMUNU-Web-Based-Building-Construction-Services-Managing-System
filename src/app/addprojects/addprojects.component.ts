import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { NgForm } from '@angular/forms';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectsComponent implements OnInit {

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.projectService.selectedProject = {
      _id: '',
      project_id: null,
      order_id: null,
      project_name: '',
      start_date: '',
      end_date: '',
      project_loc:'',
      cus_name:'',
      project_status:'',
      project_cost:null,
      worker_count: null,


      };
    }
  }
  refreshProjectList(){
    this.projectService.getProjectList().subscribe((res)=>{
      this.projectService.projects = res as Project[];
    });
  }
  onSubmit(form : NgForm){
    if(form.value._id==''){
    this.projectService.postProject(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshProjectList();
     // M.toast({html: 'Saved Successfully', classes: 'rounded'});
    });
  } else{
  // tslint:disable-next-line: deprecation
    this.projectService.putProject(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshProjectList();
    });
  }
}
onEdit(pro:Project){
  this.projectService.selectedProject = pro;
}
}
