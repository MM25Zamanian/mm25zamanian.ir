import {ContextSignal} from '@gecut/signal';

export const menuOpenContext = new ContextSignal<true | false>('menu-open');

menuOpenContext.setValue(false);
