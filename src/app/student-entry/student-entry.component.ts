import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  roll=""
  adno=""
  phone=""
  clgname=""
  pname=""
  pmobile=""
  username=""
  password=""
  readValues=()=>
  {let data:any={"name":this.name,"roll":this.roll,"adno":this.adno,"phone":this.phone,"clgname":this.clgname,"pname":this.pname,"pmobile":this.pmobile,"username":this.username,"password":this.password}

  console.log(data)
}
}
