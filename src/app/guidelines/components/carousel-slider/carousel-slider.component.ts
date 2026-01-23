import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
})
export class CarouselSliderComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withNavigation: '',
    autoSlide: '',
  };

  listData = [
    { src: '1', title: 'Post One', date: '4 days ago', read: '4', views: '5123', comments: '932' },
    { src: '2', title: 'Post Two', date: '5 days ago', read: '4', views: '8902', comments: '432' },
    { src: '3', title: 'Post Three', date: '3 days ago', read: '4', views: '3292', comments: '2132' },
    { src: '4', title: 'Post Four', date: '8 days ago', read: '4', views: '9792', comments: '532' },
    { src: '5', title: 'Post Five', date: '9 days ago', read: '4', views: '3333', comments: '432' },
  ];

  carouselOptions = {
    loop: true,
    items: 3,
    slideTransition: 'linear',
    navButtonPosition: 'center',
  };

  carouselOptionsWithNav = {
    loop: true,
    items: 3,
    slideBy: '2',
    slideTransition: 'linear',
    dotsData: true,
    navText: ['<div class="nav-btn prev-slide">&#10094;</div>', '<div class="nav-btn next-slide">&#10095;</div>'],
  };

  carouselOptionsAutoSlide = {
    loop: true,
    items: 2,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplay: true,
    navSpeed: true,
  };

  carouselSliderCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Carousel Slider -->
<bntv-carousel-slider
  [type]="'custom'"
  [listData]="listData"
  [contentTemplate]="cardTemplate"
>
</bntv-carousel-slider>`,
    },
    withNavigation: {
      default: `<!-- Carousel with Navigation Buttons -->
<bntv-carousel-slider
  [type]="'custom'"
  [carouselOptions]="carouselOptions"
  [listData]="listData"
  [contentTemplate]="cardTemplate"
>
</bntv-carousel-slider>`,
    },
    autoSlide: {
      default: `<!-- Auto Slide Carousel -->
<bntv-carousel-slider
  [type]="'custom'"
  [carouselOptions]="carouselOptions"
  [listData]="listData"
  [contentTemplate]="cardTemplate"
>
</bntv-carousel-slider>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.carouselSliderCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.carouselSliderCodeSnippets[section] &&
      this.carouselSliderCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.carouselSliderCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
