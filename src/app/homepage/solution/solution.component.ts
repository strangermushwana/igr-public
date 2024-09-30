import { DOCUMENT } from '@angular/common'
import { Component, HostListener, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { animateUp, isInViewport } from '../../util'

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const h1: HTMLElement | null = this.document.getElementById('h-1')
    const hh: HTMLElement | null = this.document.getElementById('hhh')
    const pp: HTMLElement | null = this.document.getElementById('ppp')

    animateUp('animate-fadeInUpLower', h1)
    animateUp('animate-fadeInUpLower', hh)
    animateUp('animate-fadeInUpLower', pp)
  }

  navigate(): void {
    this.router.navigate(['/services'])
  }

}
