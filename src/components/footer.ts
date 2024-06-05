import {html} from 'lit/html.js';

export function footer() {
  return html`
    <footer class="fixed bottom-0 inset-x-0 bg-surfaceContainer translucent flex flex-col p-4 gap-2 *:text-center">
      <p>&copy; 2024 S.MohammadMahdi Zamanian.</p>
      <p>All rights reserved.</p>
    </footer>
  `;
}
