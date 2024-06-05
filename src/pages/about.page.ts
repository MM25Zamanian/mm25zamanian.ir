import {html} from 'lit/html.js';
import {map} from 'lit/directives/map.js';
import profileImage from '../assets/profile.webp?inline';
import {divider} from '@gecut/components';

const content: Array<{
  title: string;
  texts: string[];
}> = [
  {
    title: 'profile',
    texts: [
      'Motivated and forward-thinking Chief Technology Officer and Web Developer with a demonstrated history of delivering leading-edge technology solutions.',
      'Eager to leverage experience in team leadership, technology implementation, and strategic development to drive business growth.',
      'Seeking a challenging opportunity to contribute to a dynamic and progressive organization.',
    ],
  },
  {
    title: 'work experience',
    texts: [
      'Led a team of developers in the successful design and implementation of a new e-commerce platform, which resulted in a 40% increase in online sales in the first quarter.',
      'Directing old systems to modern cloud-based architecture, improving overall system efficiency and reducing maintenance costs by 70%.',
      'Research and development and use of micro-service & micro-frontend architectures to increase expandability and reduce development and maintenance costs.',
      'Collaborated with cross-functional teams to develop and launch a mobile app that received over 100,000 hits in the first month of release.',
    ],
  },
];

export function aboutPage() {
  return html`
    <div class="aspect-[4/3] w-full rounded-[4rem] shrink-0 overflow-hidden shadow-xl my-4">
      <img src=${profileImage} class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col *:text-center pb-4">
      <h1 class="text-titleLarge">S. MohammadMahdi Zamanian</h1>
      <p class="text-bodyLarge text-onSurfaceVariant">CTO and Co-founder at Gecut</p>
      <p class="text-labelMedium text-onSurfaceVariant">Mashhad, Razavi Khorasan, Iran</p>
    </div>

    ${map(
      content,
      (box) => html`
        ${divider({})}
        <div class="*:text-center py-4">
          <h2 class="text-titleLarge capitalize pb-2">${box.title}</h2>

          ${map(box.texts, (paragraph) => html`<p class="text-labelLarge text-onSurfaceVariant text-balance mb-2">${paragraph}</p>`)}
        </div>
      `,
    )}
  `;
}
