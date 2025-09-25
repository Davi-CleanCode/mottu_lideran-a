import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setupNavSmoothScroll();
    this.setupCardToggle();
  }

  private setupNavSmoothScroll(): void {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.navbar a'));
    links.forEach(link => {
      this.renderer.listen(link, 'click', (e: Event) => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('#') === false) {

          return;
        }
        e.preventDefault();
        const section = document.querySelector(href);
        if (section instanceof HTMLElement) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    this.renderer.listen('window', 'scroll', () => {
      const fromTop = window.scrollY + 80;
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const section = document.querySelector(href) as HTMLElement | null;
        if (!section) return;
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  }

  private setupCardToggle(): void {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.card'));
    cards.forEach((card, index) => {
      // create or find a 'Detalhes' button inside card
      let btn = card.querySelector('.detalhes-btn') as HTMLButtonElement | null;
      if (!btn) {
        btn = this.renderer.createElement('button') as HTMLButtonElement;
        btn.className = 'detalhes-btn';
        btn.type = 'button';
        btn.textContent = 'Detalhes';
        this.renderer.appendChild(card, btn);
      }

      // listen only on the button to toggle details
      this.renderer.listen(btn, 'click', (event: Event) => {
        event.stopPropagation();
        this.toggleDetalhes(index);
      });

      // ensure collapsed initial state
      card.classList.remove('expanded');
      card.style.transition = 'max-height 0.25s ease, padding 0.25s ease';
      card.style.overflow = 'hidden';
      // default collapsed height
      card.style.maxHeight = '4.5rem';
    });
  }

  toggleDetalhes(index: number): void {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.card'));
    const card = cards[index];
    if (!card) return;
    const isExpanded = card.classList.toggle('expanded');
    if (isExpanded) {
      card.style.maxHeight = card.scrollHeight + 'px';
      card.style.padding = '';
    } else {
      card.style.maxHeight = '4.5rem';
    }
  }

  voltar(): void {
    window.history.back();
  }
}
