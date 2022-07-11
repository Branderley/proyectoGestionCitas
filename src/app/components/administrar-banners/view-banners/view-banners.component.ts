import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-banners',
  templateUrl: './view-banners.component.html',
  styleUrls: ['./view-banners.component.css']
})
export class ViewBannersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mySwiperConfig:any={
    slidesPerView: 1,
    spaceBetween: 48,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
        1024: {
          slidesPerView:2,
          spaceBetween: 20,
        },
    },
  };
}
