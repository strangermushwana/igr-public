import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core'
import { FooterComponent } from "../footer/footer.component"
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common'
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
import { animateUp, isInViewport } from '../util';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [FooterComponent, CommonModule, GetInTouchComponent]
})
export class AboutComponent {
  isBrowser: boolean = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}


	ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId)
		if(this.isBrowser) {
			window.scrollTo(0, 0)
		}
	}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const s1 = this.document.getElementById('s1')
    const s2 = this.document.getElementById('s2')
    const s3 = this.document.getElementById('s3')
    const h2 = this.document.getElementById('h2')
    const v1 = this.document.getElementById('v1')

    animateUp('animate-fadeInUpSlower', h2)
    animateUp('animate-fadeInUpSlower', v1)
    animateUp('animate-fadeInUpSlower', s1)
    animateUp('animate-fadeInUpFaster', s2)
    animateUp('animate-fadeInUpSlower', s3)

  }
}
