import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {//implements OnInit

  // ngOnInit() {
  //   const showNavbar = (toggleId: string, navId: string, bodyId: string, headerId: string) => {
  //     const toggle = document.getElementById(toggleId);
  //     const nav = document.getElementById(navId);
  //     const bodypd = document.getElementById(bodyId);
  //     const headerpd = document.getElementById(headerId);

  //     // Validate that all variables exist
  //     if (toggle && nav && bodypd && headerpd) {
  //       toggle.addEventListener('click', () => {
  //         // show navbar
  //         nav.classList.toggle('show');
  //         // change icon
  //         //toggle.classList.toggle('bx-x')
  //         // add padding to body
  //         bodypd.classList.toggle('body-pd');
  //         // add padding to header
  //         headerpd.classList.toggle('body-pd');
  //       });
  //     }
  //   };

  //   showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

  //   /*===== LINK ACTIVE =====*/
  //   //const linkColor:NodeListOf<Element>;
  //   const linkColor = document.querySelectorAll('.nav_link');

  //   function colorLink() {
  //     if (linkColor) {
  //       linkColor.forEach((l: Element) => l.classList.remove('active'));
  //       //this.classList.add('active');
  //     }
  //   }

  //   linkColor.forEach((l: Element) => l.addEventListener('click', colorLink));
  // }

}

