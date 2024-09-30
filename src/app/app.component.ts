import { Component, HostListener, Inject, OnInit } from '@angular/core'
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { NavbarComponent } from "./navbar/navbar.component"
import { HomepageComponent } from "./homepage/homepage.component"
import { CommonModule, DOCUMENT } from '@angular/common'
import { ProjectsComponent } from "./projects/projects.component"
import { AboutComponent } from "./about/about.component"
import { ServicesComponent } from "./services/services.component"
import { ContactComponent } from "./contact/contact.component"

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, HomepageComponent, CommonModule, ProjectsComponent, AboutComponent, ServicesComponent, ContactComponent]
})
export class AppComponent implements OnInit {
  title = 'imagine-greater'

  path: string = ''
  private lastScrollY = 0;
  navActive = false
  isMenuVisible: boolean = true

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {}

  ngOnInit(): void {
    this.path = this.router.url
    this.router.events.subscribe((event: unknown) => {
      if (event instanceof NavigationEnd) {
        this.path = event.urlAfterRedirects
      }
    })
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav:  HTMLElement | null = this.document.getElementById('main-nav')
    const bg:  HTMLElement | null = this.document.getElementById('main-bg')

    const currentScrollY = window.scrollY;
    if (currentScrollY < this.lastScrollY) {
      nav?.classList.remove('top-[-100%]')
      nav?.classList.add('sticky', 'backdrop-blur-xl', 'bg-white/5', 'top-0', 'z-[3000]', 'drop-down')
    } else {
      if (currentScrollY > 10) {
        nav?.classList.add('top-[-100%]')
        nav?.classList.remove('sticky', 'backdrop-blur-xl', 'bg-white/5')
      }
    }

    if (currentScrollY < 10) {
      nav?.classList.remove('backdrop-blur-xl', 'bg-white/5');
    } else {
      nav?.classList.add('backdrop-blur-xl');
    }

    if (currentScrollY < 30) {
      bg?.classList.remove('bg-overlay', 'backdrop-blur-xl', 'bg-white/5')
    } else {
      bg?.classList.add('bg-overlay')
    }

    this.lastScrollY = currentScrollY
  }

  handleEvent(open: boolean) {
    console.log('open ', open)
    this.navActive = open
  }

  initBackground(): string {
    switch(this.path) {
      case '/':
        return '../assets/background.png'
      case '/about':
        return '../assets/about.png'
      case '/projects':
        return '../assets/projects.png'
        case '/services':
          return '../assets/services.png'
        case '/contact':
          return '../assets/Background_2.png'
      default:
        return '../assets/background.png'
    }
  }
}
