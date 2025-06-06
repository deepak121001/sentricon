export default function decorate(block) {
  const divs = block.querySelectorAll(':scope > div');
  if (divs[0]) divs[0].classList.add('band-content-text');
  if (divs[1]) divs[1].classList.add('band-content-tiles');
}
