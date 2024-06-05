import {gecutContext} from '@gecut/lit-helper/directives/context.js';
import {html, render} from 'lit/html.js';
import {cache} from 'lit/directives/cache.js';
import 'unfonts.css';

import {routerContext} from './context/router.context';
import './router';
import './styles/global.css';
import {header} from './components/header';
import { footer } from './components/footer';

render(
  html`
    ${header()}
    <main class="w-full py-20 px-4">${cache(gecutContext(routerContext, (template) => template))}</main>
    ${footer()}
  `,
  document.body,
);
