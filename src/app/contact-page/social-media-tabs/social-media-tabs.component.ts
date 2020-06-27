import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-tabs',
  templateUrl: './social-media-tabs.component.html',
  styleUrls: ['./social-media-tabs.component.scss']
})
export class SocialMediaTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMediaInNewTab(siteName: string) {
    if (siteName === "github") {
      const githubWindow = window.open("https://github.com/JMo911", "_blank");
      githubWindow.focus();
    }
  }
}
