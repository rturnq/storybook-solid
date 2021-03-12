import { render } from 'solid-js/web';
import { document } from 'global';
import dedent from 'ts-dedent';
import { RenderContext } from './types';

const rootElement = document ? document.getElementById('root') : null;

let dispose: (() => void) | undefined;

export default function renderMain({
  storyFn,
  kind,
  name,
  showMain,
  showError,
  forceRender,
}: RenderContext) {
  if (typeof storyFn !== 'function') {
    showError({
      title: `Expecting a Solid render function from the story: "${name}" of "${kind}".`,
      description: dedent`
        Did you forget to return the Solid element from the story?
        Use "() => (<MyComp/>)" or "() => { return <MyComp/>; }" when defining the story.
      `,
    });
  }

  dispose && dispose();
  dispose = render(storyFn, rootElement);
  showMain();
}
