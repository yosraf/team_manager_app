import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  data:any=[];
  discussions:any[];
  queryText = '';
  constructor() { }
  loadData() {
    this.discussions=[
      {"img":"./../../assets/icon/user.png",
       "name":"yosra",
       "chat":"hello world"
      },
      {"img":"./../../assets/icon/user.png",
       "name":"nasus",
       "chat":"hello world"
      }]

  }
  ngOnInit() {
    this.data=[
     {"img":"./../../assets/icon/user.png",
      "name":"yosra"
     },
     {"img":"./../../assets/icon/user.png",
      "name":"yosra"
     },{"img":"./../../assets/icon/user.png",
     "name":"yosra"
    },{"img":"./../../assets/icon/user.png",
    "name":"yosra"
   },{"img":"./../../assets/icon/user.png",
   "name":"yosra"
   },
    ];
    this.loadData();
    
    
  }
  search(){
    var d=[]
    if(this.queryText.length!=0){
    
      this.discussions.forEach(el => {
        if(el["name"].includes(this.queryText)){
          d.push(el);
        }
        
      });
      this.discussions=d;
    }
    else{
      
      this.loadData();

    }
   
    
  }


}
