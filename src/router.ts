// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(globalThis as any).URLPattern) {
  await import('urlpattern-polyfill');
}
import debounce from '@gecut/utilities/debounce.js';
import {redirect} from '@thepassle/app-tools/router/plugins/redirect.js';
import {resetFocus} from '@thepassle/app-tools/router/plugins/resetFocus.js';
import {scrollToTop} from '@thepassle/app-tools/router/plugins/scrollToTop.js';
import {appName} from '@thepassle/app-tools/router/plugins/appName.js';
import {Router} from '@thepassle/app-tools/router.js';

import {routerContext} from './context/router.context';
import {notFoundPage} from './pages/not-found.page';
import {aboutPage} from './pages/about.page';
import {i18n} from './i18n';
import {titleContext} from './context/title.context';
import {projectsPage} from './pages/projects.page';

export const router = new Router({
  plugins: [scrollToTop, resetFocus, appName('MM25Zamanian | ')],
  fallback: '/404',
  routes: [
    {
      path: resolveRouterPath(),
      title: () => i18n.msg('Home'),
      plugins: [redirect(resolveRouterPath('about'))],
    },

    {
      path: resolveRouterPath('about'),
      title: () => i18n.msg('About'),
      render: aboutPage,
    },
    {
      path: resolveRouterPath('projects'),
      title: () => i18n.msg('Projects'),
      render: projectsPage,
    },

    {
      path: resolveRouterPath('404'),
      title: () => i18n.msg('Not Found'),
      render: notFoundPage,
    },
  ],
});

export function resolveRouterPath(unresolvedPath?: string) {
  let resolvedPath = import.meta?.env?.BASE_URL ?? '/';

  if (unresolvedPath) {
    resolvedPath = resolvedPath + unresolvedPath;
  }

  return resolvedPath;
}

export const debouncedRender = debounce(() => {
  routerContext.value = router.render();
  titleContext.value = router.context.title.replace('MM25Zamanian | ', '');
}, 1000 / 60);

router.addEventListener('route-changed', debouncedRender);
