import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { DeviceDetectorService } from "ngx-device-detector";
import { AES } from "crypto-js";
import { enc } from "crypto-js";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sidrateams';
  useragentAPI:any = "https://api.apicagent.com/?ua="

  apiUrl:any = 'https://example.com/device-detection-api';

  constructor(private http: HttpClient,private deviceinfo:DeviceDetectorService){
      
    console.log(deviceinfo.getDeviceInfo()) 

    
  
  }

  ngOnInit(): void {
    const userAgent =window.navigator.userAgent

      this.http.get(this.useragentAPI + userAgent).subscribe((d:any)=>{
          console.log(d)

      
      
      
      })
     

      // encryptdata
      let data = 'fasalgafoork@gmail.com'
      console.log(data)
      const encrypteddata =AES.encrypt(JSON.stringify(data), 'data_key').toString();
      console.log(encrypteddata)

      // decryptdata
      const decrypteddata = AES.decrypt(encrypteddata, 'data_key')
      console.log(decrypteddata.toString(enc.Utf8))


      

     

      
  }
}
