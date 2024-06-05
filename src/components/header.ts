import {gecutIconButton, gecutItem} from '@gecut/components';
import {nextAnimationFrame} from '@gecut/utilities/wait/polyfill.js';
import {html} from 'lit/html.js';
import {menuOpenContext} from '../context/menu-open.context';
import {gecutContext} from '@gecut/lit-helper/directives/context.js';
import {classMap} from 'lit/directives/class-map.js';
import {titleContext} from '../context/title.context';
import {resolveRouterPath} from '../router';
import menuIcon from '../assets/svgs/menu.svg?raw';
import menuCloseIcon from '../assets/svgs/menu-close.svg?raw';
import aboutIcon from '../assets/svgs/about.svg?raw';
import projectsIcon from '../assets/svgs/projects.svg?raw';

export function header() {
  return html`
    <header class="fixed top-0 inset-x-0 bg-surfaceContainer translucent flex flex-col">
      <div class="max-w-screen-sm mx-auto flex justify-between py-4 gap-4 w-full h-full relative px-4">
        <div class="size-10 rounded-full overflow-hidden m-1">
          <img src="/icon-192-maskable.png" class="rounded-full" />
        </div>

        <div class="flex items-center justify-center text-titleLarge text-primary my-auto">
          ${gecutContext(titleContext, (title) => title)}
        </div>

        ${gecutIconButton({
          type: 'normal',
          toggle: true,
          events: {
            change: (event: Event) => {
              const target = event.target as HTMLInputElement | null;

              nextAnimationFrame(() => menuOpenContext.setValue(target?.checked ?? false));
            },
          },
          selectedIcon: {
            svg: menuCloseIcon,
          },
          svg: menuIcon,
        })}
      </div>
      <div class="max-w-screen-sm w-full mx-auto">
        ${gecutContext(
          menuOpenContext,
          (isOpen) => html`
            <div
              class=${classMap({
                'overflow-hidden transition-[max-height] w-full': true,
                'max-h-0': !isOpen,
                'max-h-44': !!isOpen,
              })}
            >
              ${gecutItem({
                headline: 'About',
                href: resolveRouterPath('about'),
                leading: {
                  element: 'icon',
                  svg: aboutIcon,
                },
              })}
              ${gecutItem({
                headline: 'Projects',
                href: resolveRouterPath('projects'),
                leading: {
                  element: 'icon',
                  svg: projectsIcon,
                },
              })}
              <div class="pb-4"></div>
            </div>
          `,
        )}
      </div>
    </header>
  `;
}
