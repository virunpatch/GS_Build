import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  ListNews: any = [
    {
      name: "Genshin Impact EP - Where All Ships Dock",
      img: "https://uploadstatic-sea.mihoyo.com/contentweb/20210217/2021021711552547227.png",
      cap:"A golden vision for the future must reach far beyond the horizon, for an ocean of wealth is formed from many tiny streams. While the rest in the city relax and enjoy the peace and prosperity, one tireless innovator ponders a question: When these shores finally recede into the murky depths of history... How will the bygone currents of yesterday drive the burgeoning waves of tomorrow?",
      pop:" Date Posted Feb 17, 2021 " ,
      re:" info ",
      //news:"https://genshin.mihoyo.com/en/news/detail/8683"

    },
    {
      name: "Light five kinds of Xiao Lanterns to share in the Grand Primogem Prize! The 'Wish Upon a Lantern' web event has officially begun!",
      img: "https://uploadstatic-sea.mihoyo.com/contentweb/20210219/2021021910272292349.png",
      cap:"Event Description This event features five types of Xiao Lanterns. During the event,Travelers can release lanterns on this page. This will light up one of the Xiao Lanterns, and once five different Xiao Lanterns have been lit, you will be able to share in the Grand Primogem Prize*Releasing a lantern will award you one Xiao Lantern. The Xiao Lantern types can repeat themselves.",
      pop:" Date Posted Feb 19, 2021 " ,
      re:" Events ",


    },
    {
      name: " Event Wish 'Epitome Invocation' - Boosted Drop Rate for Staff of Homa (Polearm) and Wolf's Gravestone (Claymore)! ",
      img: "https://uploadstatic-sea.mihoyo.com/contentweb/20210220/2021022012292085888.jpg",
      cap:"〓Event Wish Details〓 ● During the event, the event-exclusive 5-star weapon Staff of Homa (Polearm) and the 5-star weapon Wolf's Gravestone (Claymore) will get a huge drop-rate boost!● During the event, the event-exclusive 4-star weapons Lithic Blade (Claymore) and Lithic Spear (Polearm), and the 4-star weapons Lion's Roar (Sword), Sacrificial Bow (Bow), and The Widsith (Catalyst) will get a huge drop-rate boost!※ Of the above weapons, the event-exclusive weapons will not be available in the standard wish 'Wanderlust Invocation.' (Above times are all displayed according to your server time.)",
      pop:" Date Posted Feb 21, 2021 " ,
      re:" info ",


    },
    {
      name: " Character Teaser - 'Hu Tao: Scared Yet?' ",
      img: "https://uploadstatic-sea.mihoyo.com/contentweb/20210226/2021022618042519329.jpg",
      cap:"Hee-hee, did I scare you? Eh? My appearance is less of a shock, and more of a pleasant surprise? Mm... Then, should I call this a farcical failure — or a splendid success?.",
      pop:" Date Posted Feb 27, 2021 " ,
      re:" info ",


    },
    {
      name: " 'Vishaps and Where to Find Them' Gameplay Details ",
      img: "https://uploadstatic-sea.mihoyo.com/contentweb/20210303/2021030315500239587.png",
      cap:"The Adventurers' Guild has collected much information on the dangerous Geovishaps in recent days. Katheryne of Liyue Harbor is currently commissioning adventurers to investigate further.",
      pop:" Date Posted Mar 4, 2021 " ,
      re:" info ",


    },
    {
      name: "Version 1.4 'Invitation of Windblume' Trailer | Genshin Impact",
      img: "https://uploadstatic-sea.mihoyo.com/contentweb/20210305/2021030523221981157.png",
      cap:"Songs of joy in the winds are streaming, Beneath the flowers old hymns abide; Though you should seek the festivity's meaning, Forget not that which your hearts do hide.",
      pop:" Date Posted Mar 6, 2021 " ,
      re:"info",


    },
    {
      name: "Character Teaser - 'Venti: The Four Winds'",
      img: "https://uploadstatic-sea.mihoyo.com/contentweb/20210310/2021031010314550488.png",
      cap:"This tale began a thousand years ago, when Mondstadt's rulers fell from grace. The southern lion their crowns to the earth did throw, and the west wind arose and took their place.",
      pop:" Date Posted Mar 10, 2021 " ,
      re:"info",


    },
    {
      name:" Comming Soon Events ",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
