import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ShowcaseComponent } from "./showcase/showcase.component"
import { SolutionComponent } from "./solution/solution.component"
import { FooterComponent } from "../footer/footer.component"
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component'
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component"
import { CommonModule, isPlatformBrowser } from '@angular/common'

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [ShowcaseComponent, SolutionComponent, FooterComponent, ProjectCarouselComponent, GetInTouchComponent, CommonModule]
})
export class HomepageComponent implements OnInit {

  isBrowser: boolean = false

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

	ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId)
		if(this.isBrowser) {
			window.scrollTo(0, 0)
		}
	}
}
