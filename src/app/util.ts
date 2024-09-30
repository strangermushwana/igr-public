export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
  rect.top >= 50 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

export function animateUp(animation: string, el?: HTMLElement | null): void {
  if (el && isInViewport(el)) {
    el.classList.add(animation)
  }
}