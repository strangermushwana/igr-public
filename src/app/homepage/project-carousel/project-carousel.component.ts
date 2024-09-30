import { CommonModule, DOCUMENT } from '@angular/common'
import { Component, Inject, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.scss'
})
export class ProjectCarouselComponent implements OnInit {
  innerWidth: number = 0
imageArr: Array<{ image: string; link: string; }> = [
  {
    image: '../../../assets/projects/Born Into Fame Square.png',
    link: 'https://www.behance.net/gallery/204845889/Born-Into-Fame-On-Air-Toolkit',
  },
  {
    image: '../../../assets/projects/Channel O Youth Over Everything.png',
    link: 'https://www.behance.net/gallery/205386857/Channel-O-Youth-Over-Everything-Campaign-2024',
  },
  {
    image: '../../../assets/projects/Real Housewives Ultimate Girls Trip Sqaure.png',
    link: 'https://www.behance.net/gallery/204805711/The-Real-Housewives-Ultimate-Girls-Trip-South-Africa',
  },
  {
    image: '../../../assets/projects/IGR Showreel.png',
    link: 'https://www.behance.net/gallery/204868873/IGR-Showreel-2024',
  },
  {
    image: '../../../assets/projects/Superbets.png',
    link: 'https://www.behance.net/gallery/135090095/SupaTV-Channel-Identity',
  },
  {
    image: '../../../assets/projects/Mzansi Super League Square.png',
    link: 'https://www.behance.net/gallery/90323273/MSL-rebranding-for-SABC',
  },
]
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {}


  ngOnInit(): void {}

  move(direction: string): void {
    if (direction === 'left') {
      const el: any = this.imageArr.pop()
      this.imageArr.unshift(el)
      return
    }
    const el: any = this.imageArr.shift() || ''
    this.imageArr.push(el)
  }

  navigate(): void {
    this.router.navigate(['/projects'])
  }
}
