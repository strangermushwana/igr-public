import { CommonModule, DOCUMENT } from '@angular/common'
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  path: string = '/'
  open = false
  @Output() messageEvent = new EventEmitter<any>()
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = event.urlAfterRedirects.split('/')[1]
      }
    })
  }

  navigate(path: string): void {
    this.router.navigate([path])
  }


  nvg(path: string): void {
    this.router.navigate([path])
    this.toggleMenu()
  }

  toggleMenu(): void {
    this.messageEvent.emit(!this.open)
    this.open = !this.open
    const menu = this.document.querySelector('#menu')
    const btn = this.document.querySelector('#menu-btn')
    menu?.classList.toggle('hidden')
    btn?.classList.toggle('open')
  }
}
