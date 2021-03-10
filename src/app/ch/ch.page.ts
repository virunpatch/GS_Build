import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-ch',
  templateUrl: './ch.page.html',
  styleUrls: ['./ch.page.scss'],
})
export class ChPage implements OnInit {
  ListMov: any = [
    {
      name: "Tartaglia [Childe]",
      img: "https://img.game8.co/3295009/47a42db3c2736ef309028ccbd3cfb5cf.png/show",
      cap:"No. 11 of The Harbingers, also known as ' Childe '. His name is highly feared on the battlefield.",
      pop:" Hydro - Bow " ,
      re:" Main DPS ",

    },
    {
      name: "Zhongli",
      img: "https://img.game8.co/3300497/33da5700d1749ceecbea9369809c706d.png/show",
      cap:"A mysterious guest invited by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
      pop:" GEO - Polearm " ,
      re:" Sub DPS ",


    },
    {
      name: " Bennett ",
      img: "https://img.game8.co/3294999/853d5357be63f501a600fc776eb27256.png/show",
      cap:"A righteous and good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
      pop:" Pyro - Sword " ,
      re:" Utillity ",


    },
    {
      name: "Venti",
      img: "https://img.game8.co/3294977/da7d112f0f9c44f8d123cc533a3317a8.png/show",
      cap:"One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
      pop:" Anemo - Bow " ,
      re:" Utillity ",


    },
    {
      name: "Xiao",
      img: "https://img.game8.co/3294989/397b1e9b2effcd2ec2dabbbc1ff6a068.png/show",
      cap:"A yaksha adeptus that defends Liyue. Also heralded as the 'Conqueror of Demons' or 'Vigilant Yaksha.'",
      pop:" Anemo - Polearm " ,
      re:" Main DPS ",


    },
    {
      name: "Xingqiu",
      img: "https://img.game8.co/3294994/78be634e3a6f78d37e12b16e572762ef.png/show",
      cap:"Comming Soon",
      //pop:" Animetion " ,
      //re:"Review: 7.5",


    },
    {
      name: "Hu Tao",
      img: "https://img.game8.co/3332448/6a22c735ab5ab9db5cd251ecbf4ab2a4.png/show",
      cap:"Comming Soon",
      //pop:" Animetion " ,
      //re:"Review: 7.8",


    },
  ]
  constructor(public activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
