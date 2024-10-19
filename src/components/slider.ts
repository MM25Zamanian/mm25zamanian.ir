import {html} from 'lit/html.js';
import {register} from 'swiper/element/bundle';

// import profile1 from '../assets/profile.webp';
import {map} from 'lit/directives/map.js';

const slides = import.meta.glob('../assets/profiles/*.profile.webp', {eager: true, import: 'default', query: '?inline'});

export function slider() {
  register();

  return html`
    <swiper-container class="my-4" pagination .centeredSlides=${true} .slidesPerView=${1.1} .speed=${512} .spaceBetween=${16}>
      ${map(
        Object.values<string>(slides as Record<string, string>),
        (slide, i) => html`
          <swiper-slide class="rounded-2xl overflow-hidden aspect-[3/2] shadow-xl">
            <img src=${slide} alt=${'Profile ' + i} class="w-full h-full object-cover" />
          </swiper-slide>
        `,
      )}
    </swiper-container>
  `;
}
