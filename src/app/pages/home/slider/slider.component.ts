import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  categoryTemplate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {img: "assets/Images/rooftop.jpg"},
    {img: "assets/Images/creative.jpg"},
    {img: "assets/Images/poem.jpg"},
    {img: "assets/Images/rooftop.jpg"},
    {img: "assets/Images/creative.jpg"},
    {img: "assets/Images/poem.jpg"},
    {img: "assets/Images/rooftop.jpg"},
    {img: "assets/Images/creative.jpg"},
    {img: "assets/Images/poem.jpg"},
    {img: "assets/Images/rooftop.jpg"},
    {img: "assets/Images/creative.jpg"},
    {img: "assets/Images/poem.jpg"},

  ];
  slideConfig = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  };


  openCategoryTemplate(){
    this.categoryTemplate = true;
    console.log(this.categoryTemplate);
  }

  closeCategoryTemplate(){
    this.categoryTemplate = false;
  }

  onClickedOutside(e: Event) {
    // this.categoryTemplate = false;
    // console.log(this.categoryTemplate);
  }

}
