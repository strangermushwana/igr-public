import { DOCUMENT } from '@angular/common'
import { Component, HostListener, Inject } from '@angular/core'

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const h1 = this.document.getElementById('heading-1')
    const p1 = this.document.getElementById('paragraph-1')

    if (window.scrollY < 20) {
      h1?.classList.remove('scale-105')
    }

    if (window.scrollY < 200) {
      p1?.classList.remove('scale-105', 'bottom-48')
    }
  }

  triggerAnimations(): void {
    const blockC = document.getElementById('block-c');
    const blockB = document.getElementById('block-b');

    if (blockC && blockB) {
      blockC.classList.add('animate-shrinkGrow');

      // Listen for the end of block C's animation, then animate block B
      blockC.addEventListener('animationend', () => {
        blockB.classList.add('animate-growShrink');
      }, { once: true });
    }
  }
}
