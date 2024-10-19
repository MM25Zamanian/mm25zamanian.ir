import {ContextSignal} from '@gecut/signal';
import type {TemplateResult} from 'lit/html.js';
import {menuOpenContext} from './menu-open.context';

export const routerContext = new ContextSignal<TemplateResult>('router');

routerContext.subscribe(() => {
  menuOpenContext.value = false;
});
