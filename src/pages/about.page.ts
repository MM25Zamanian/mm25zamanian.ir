import {html} from 'lit/html.js';
import {map} from 'lit/directives/map.js';
import {divider} from '@gecut/components';
import {slider} from '../components/slider';
import {i18n} from '../i18n';

const content: Array<{
  title: string;
  texts: string[];
}> = [
  {
    title: i18n.msg('profile'),
    texts: [i18n.msg('$summary')],
  },
  {
    title: i18n.msg('work_experience'),
    texts: [i18n.msg('$we1'), i18n.msg('$we2'), i18n.msg('$we3'), i18n.msg('$we4')],
  },
];

export function aboutPage() {
  return html`
    ${slider()}

    <div class="flex flex-col *:text-start pb-4">
      <h1 class="text-titleLarge">${i18n.msg('$name')}</h1>
      <p class="text-bodyLarge text-onSurfaceVariant">${i18n.msg('$job')}</p>
      <p class="text-labelMedium text-onSurfaceVariant">${i18n.msg('$location')}</p>
    </div>

    ${map(
      content,
      (box) => html`
        ${divider({})}
        <div class="*:text-start py-4">
          <h2 class="text-titleLarge capitalize mb-4 ms-2">${box.title}</h2>

          ${map(
            box.texts,
            (paragraph) => html`
              <p class="text-labelLarge text-onSurfaceVariant mb-2 flex gap-4 items-center group">
                <span class="size-2 shadow-md rounded-full bg-primary block shrink-0 group-hover:h-4 transition-[height]"></span>
                ${paragraph}
              </p>
            `,
          )}
        </div>
      `,
    )}
  `;
}
