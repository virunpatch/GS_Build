/*import { crudapi } from './crudapi';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  tmpobj: any;

  constructor(private alertCtrl: AlertController ,
    private getcrud: crudapi,
    public activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.getcrud.readData().subscribe(data => {
    this.tmpobj = data.map(e => {
    return {
      id: e.payload.doc["id"],
      isEdit: false,
      name: e.payload.doc.data()['name'.toString()],
      img: e.payload.doc.data()['img'.toString()],
      Skills1: e.payload.doc.data()['Skills1'.toString()],
      Skills2: e.payload.doc.data()['Skills2'.toString()],
      Skills3: e.payload.doc.data()['Skills3'.toString()],
      Detail: e.payload.doc.data()['Detail'.toString()],
  };
 });
  console.log(this.tmpobj);

});

}

async presentConfirm(tmpitem: any) {
  let alert = this.alertCtrl.create({
    //title: 'Confirm purchase',
    message: 'Do you want to delete ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Deleted');
          
          //this.deleteCountryItem(tmpitem);
          this.getcrud.delData(tmpitem.id); //del rowfrom DB
        }
      }
    ]
  });
  (await alert).present();
}


deleteCountryItem(tmpitem: any){
    for (let i=0; i< this.countrylist.length; i++){
        if (this.countrylist[i] == tmpitem) //found
            this.countrylist.splice(i,1);
    }//for 
}//method

// === EDIT ==========================================

async presentPrompt(tmpitem: any) {
  let tmpcountry = {};

  let alert = this.alertCtrl.create({
    //title: 'Login',
    inputs: [
      {
        name: 'incountryname',
        placeholder: 'country name',
        value: tmpitem.mycountryname
      },
      {
        name: 'inflag',
        placeholder: 'flag',
        value: tmpitem.myflag
      },
      {
        name: 'incapital',
        placeholder: 'capital',
        value: tmpitem.mycapital
      },
      {
        name: 'inpop',
        placeholder: 'pop',
        value: tmpitem.mypop
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Update',
        handler: data => {
          if (data.incountryname == '' || data.inflag == ''|| 
              data.incapital == '' || data.inpop == '' )
               //show toast 
               return false;
          else { //update here
              tmpcountry['countryname'] = data.incountryname;
              tmpcountry['capital'] = data.incapital;
              tmpcountry['flag'] = data.inflag;
              tmpcountry['pop'] = data.inpop;
              this.getcrud.updateData(tmpitem.id, tmpcountry);

          }//else
        }//handler
      }//update
    ]
  });
  (await alert).present();
}

// === ADD ===========================================

async presentPromptADD() {
  let alert = this.alertCtrl.create({
    //title: 'Login',
    inputs: [
      {
        name: 'incountryname',
        placeholder: 'country name'
        
      },
      {
        name: 'inflag',
        placeholder: 'flag'
        
      },
      {
        name: 'incapital',
        placeholder: 'capital'
      },
      {
        name: 'inpop',
        placeholder: 'pop'
      }

    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'ADD',
        handler: data => {
          let tmpobj =  //db : inputform
            {countryname: data.incountryname, 
             capital: data.incapital, 
             flag: data.inflag, 
             pop: data.inpop
            };
            this.getcrud.createData(tmpobj);
        }//handler

      }//update
    ]
  });
  (await alert).present();
}

}// class*/


