import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { NgForm } from '@angular/forms';
import { Project } from '../shared/project.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectsComponent implements OnInit {
  @ViewChild('projectForm') project_form;

  projects=['Completed','Not Compeleted','Ongoing','Finished','Canceled'];
  constructor(public projectService: ProjectService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm(this.project_form);
    this.refreshProjectList();
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
      this.toastr.success('Submiited Successfully', 'Project Data');
    });
  } else{
  // tslint:disable-next-line: deprecation
    this.projectService.putProject(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshProjectList();
      this.toastr.info('Updated Successfully', 'Project Data');
    });
  }
}
onEdit(pro:Project){
  this.projectService.selectedProject = pro;
}

onChange(newValue) {
  // console.log(newValue);
  this.projectService.selectedProject.project_status = newValue;
}
}
