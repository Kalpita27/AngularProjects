import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
  public Data = "..."
  
  public Fun()
    {
      this.Data = "Educating For Better Tomorrow!!!";
    }

    public FunNew(value : any)
    {
        console.log(value)
    }

    public Detail = "..."
  
  public Upper()
    {
      this.Detail = "MARVELLOUS INFOSYSTEMS";
    }
    public UpNew(value : any)
    {
        console.log(value)
    }

    public Detail1 = "..."
  
  public Lower()
    {
      this.Detail1 = "marvellous infosystems";
    }
    public LowNew(value : any)
    {
        console.log(value)
    }
}
