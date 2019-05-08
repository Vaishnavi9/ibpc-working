
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  flexBorderSize: number = 3
    flexImageSize: number = 7
    galleryName: string = ''
    showAllImg: any;
    eventsData:any;
    showEventOne:boolean;
    showEventTwo:boolean;
    showEventThree:boolean;
    showEventFour:boolean;
    showEventFive:boolean;
    showEventSix:boolean;
    showAll:boolean;
     showEventSeven:boolean;
        showEventEight:boolean;
        showEventNine:boolean;
        showEventTen:boolean;
        showEventEleven:boolean;
        showEventtwelve:boolean;
    constructor() {
      
    }

   
  galleryOptions: NgxGalleryOptions[];
  allevents:NgxGalleryImage[];
  event1: NgxGalleryImage[];
  event2: NgxGalleryImage[];
  event3: NgxGalleryImage[];
  event4: NgxGalleryImage[];
  event5: NgxGalleryImage[];
  event6: NgxGalleryImage[];
  event7: NgxGalleryImage[];
  event8: NgxGalleryImage[];
  event9: NgxGalleryImage[];
  event10: NgxGalleryImage[];
  event11: NgxGalleryImage[];
  event12: NgxGalleryImage[];

  // showAll(){
  //   console.log("show all");
  //   this.showAllImg=true;
  //   console.log(this.showAllImg);
  //   }
  //   showNews(){
  //     console.log("show news");
  //     this.showNews;
  //     this.showAllImg=false;
  //   }
  //   showgallery(){
  //     console.log("show Gallery");
  //     this.showgallery;
  //   }

    selectEvent(){
 console.log(this.eventsData);
      if(this.eventsData==0){
        this.showAll=true;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      
      else if(this.eventsData==1){
        this.showAll=false;
        this.showEventOne=true;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;

      }
      else if(this.eventsData==2){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=true;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      else if(this.eventsData==3){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=true;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      
      else if(this.eventsData==4){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=true;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      
      else if(this.eventsData==5){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=true;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      
      else if(this.eventsData==6){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=true;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }

      else if(this.eventsData==7){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSix=true;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;

      }
      else if(this.eventsData==8){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=true;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      else if(this.eventsData==9){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=true;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      
      else if(this.eventsData==10){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=true;
        this.showEventEleven=false;
        this.showEventtwelve=false;
      }
      
      else if(this.eventsData==11){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=true;
        this.showEventtwelve=false;
      }
      
      else if(this.eventsData==12){
        this.showAll=false;
        this.showEventOne=false;
        this.showEventTwo=false;
        this.showEventThree=false;
        this.showEventFour=false;
        this.showEventFive=false;
        this.showEventSix=false;
        this.showEventSeven=false;
        this.showEventEight=false;
        this.showEventNine=false;
        this.showEventTen=false;
        this.showEventEleven=false;
        this.showEventtwelve=true;
        console.log(this.showEventtwelve);
      }
      
      else{

      }


    }
    
  ngOnInit(): void {
   
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        image :false,
        thumbnailsMargin: 30,
        previewSwipe :true,
        thumbnailsColumns: 3,
        thumbnailsRows:2,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    
    this.event1 = [
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5912.JPG',
        medium: 'assets/img/gallery-page/IMG_5912.JPG',
        big: 'assets/img/gallery-page/IMG_5912.JPG'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      }
    ];

    this.allevents =[
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5912.JPG',
        medium: 'assets/img/gallery-page/IMG_5912.JPG',
        big: 'assets/img/gallery-page/IMG_5912.JPG'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/1.JPG',
        medium: 'assets/img/gallery-page/1.JPG',
        big: 'assets/img/gallery-page/IMG_5912.JPG'
      },
      {
        small: 'assets/img/gallery-page/4.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/5.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/6.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/7.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/a.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5912.JPG',
        medium: 'assets/img/gallery-page/IMG_5912.JPG',
        big: 'assets/img/gallery-page/IMG_5912.JPG'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      }
     
    ];

    this.event2 = [
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5912.JPG',
        medium: 'assets/img/gallery-page/IMG_5912.JPG',
        big: 'assets/img/gallery-page/IMG_5912.JPG'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      }
    ];


    this.event3 = [
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5912.JPG',
        medium: 'assets/img/gallery-page/IMG_5912.JPG',
        big: 'assets/img/gallery-page/IMG_5912.JPG'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      }
    ];

    
    this.event4 = [
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5912.jpg',
        medium: 'assets/img/gallery-page/IMG_5912.jpg',
        big: 'assets/img/gallery-page/IMG_5912.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      }
    ];


    this.event5 = [
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      }
    ];


    this.event6 = [
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg',
        description:''
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      },
      {
        small: 'assets/img/gallery-page/IMG_5911.jpg',
        medium: 'assets/img/gallery-page/IMG_5911.jpg',
        big: 'assets/img/gallery-page/IMG_5911.jpg'
      }
    ];

    this.event12 = [
      {
        small: 'assets/img/events/Kizad/2.JPG',
        medium: 'assets/img/events/Kizad/2.JPG',
        big: 'assets/img/events/Kizad/2.JPG'
      },
      {
        small: 'assets/img/events/Kizad/5.JPG',
        medium: 'assets/img/events/Kizad/5.JPG',
        big: 'assets/img/events/Kizad/5.JPG',
      },
      {
        small: 'assets/img/events/Kizad/6.JPG',
        medium: 'assets/img/events/Kizad/6.JPG',
        big: 'assets/img/events/Kizad/6.JPG',
      },
      {
        small: 'assets/img/events/Kizad/8.JPG',
        medium: 'assets/img/events/Kizad/8.JPG',
        big: 'assets/img/events/Kizad/8.JPG',
      },
      {
        small: 'assets/img/events/Kizad/9.JPG',
        medium: 'assets/img/events/Kizad/9.JPG',
        big: 'assets/img/events/Kizad/9.JPG',
      }
    ];
  }
}

