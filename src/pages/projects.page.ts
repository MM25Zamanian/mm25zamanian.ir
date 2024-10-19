import {html} from 'lit/html.js';
import projects from '../content/projects.json';
import {map} from 'lit/directives/map.js';
import {when} from 'lit/directives/when.js';
import {gecutIconButton} from '@gecut/components';

import linkIcon from '../assets/svgs/link.svg?raw';
import githubIcon from '../assets/svgs/github.svg?raw';

export function projectsPage() {
  return html`
    <div class="py-4 w-full flex flex-col gap-4" dir="ltr">
      ${map(projects, (project) => {
        const image = new Image();
        const lazyLoadImage = new Image();

        lazyLoadImage.addEventListener(
          'load',
          () => {
            image.src = lazyLoadImage.src;
            lazyLoadImage.remove();
          },
          {once: true},
        );

        image.src = '/placeholder.png';
        image.className = 'w-full h-full object-cover';
        image.alt = project.name;

        lazyLoadImage.src = project.image_url;

        return html`
          <div class="gecut-card-filled m-0 p-4 gap-4 flex flex-col md:flex-row">
            <div class="w-full md:w-1/3 aspect-[2/1] overflow-hidden rounded-xl">${image}</div>
            <div class="w-full md:w-2/3 flex flex-col">
              <div class="w-full flex items-center my-2">
                <div class="flex flex-col grow">
                  <h2 class="text-titleLarge">${project.name}</h2>
                  <h3 class="text-labelMedium text-onSurfaceVariant">${project.owner}</h3>
                </div>

                ${when(project.url, () =>
                  gecutIconButton({
                    svg: linkIcon,
                    href: project.url,
                    target: '_blank',
                  }),
                )}
                ${gecutIconButton({
                  svg: githubIcon,
                  href: project.github_url,
                  target: '_blank',
                })}
              </div>
              <p class="text-bodyMedium text-onSurfaceVariant">${project.description}</p>
            </div>
          </div>
        `;
      })}
    </div>
  `;
}
