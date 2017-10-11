import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  serverElements = [{type: 'server', name: 'TestServer', content:'Just a test'}];;
//
constructor(){

}
emitterReceiver(event){
  console.log(event)
}
ngOnInit(){

}
}
