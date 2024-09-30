import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { isPlatformBrowser } from '@angular/common';
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
@Component({
	selector: 'app-projects',
	standalone: true,
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
	imports: [FooterComponent, GetInTouchComponent]
})
export class ProjectsComponent {
	isBrowser: boolean = false

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

	ngOnInit(): void {
		this.isBrowser = isPlatformBrowser(this.platformId)
			if(this.isBrowser) {
					window.scrollTo(0, 0)
			}
  }
}
