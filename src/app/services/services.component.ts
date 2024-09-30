import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core'
import { FooterComponent } from "../footer/footer.component"
import { DOCUMENT, isPlatformBrowser } from '@angular/common'
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component"
import { animateUp } from '../util'
import { ScrollFadeUpDirective } from '../helper.directive'
import { debounce } from 'lodash'

@Component({
	selector: 'app-services',
	standalone: true,
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
	imports: [FooterComponent, GetInTouchComponent, ScrollFadeUpDirective]
})
export class ServicesComponent {
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
		const m01 = this.document.getElementById('m-01');
		const m02 = this.document.getElementById('m-02');
		const m03 = this.document.getElementById('m-03');
		const m04 = this.document.getElementById('m-04');
		const m05 = this.document.getElementById('m-05');

		animateUp('animate-fadeInUpSlower', m01)
		animateUp('animate-fadeInUpSlower', m02)
		animateUp('animate-fadeInUpSlower', m03)
		animateUp('animate-fadeInUpSlower', m04)
		animateUp('animate-fadeInUpSlower', m05)
	}

	debounce(func: (...args: any[]) => void, wait: number) {
		let timeout: any
		return function(...args: any[]) {
			const later = () => {
				clearTimeout(timeout)
				func(...args)
			}
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
		}
	}

}
