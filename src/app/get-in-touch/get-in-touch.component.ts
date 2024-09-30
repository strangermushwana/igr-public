import { DOCUMENT } from '@angular/common'
import { Component, HostListener, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { animateUp, isInViewport } from '../util'

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {
  
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const ggg = this.document.getElementById('ggg')
    const icons = this.document.getElementById('icons')

    animateUp('animate-fadeInUpFaster', ggg)
    animateUp('animate-fadeInUpSlower', icons)
  }

  navigate(): void {
    this.router.navigate(['/contact'])
  }
}
