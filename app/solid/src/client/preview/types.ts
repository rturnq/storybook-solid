export { RenderContext } from '@storybook/core';
import { ClientStoryApi, Loadable } from '@storybook/addons';
import type { JSX } from 'solid-js';

export type StoryFnSolidReturnType = JSX.Element;

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export interface IStorybookStory {
  name: string;
  render: () => any;
}

export interface IStorybookSection {
  kind: string;
  stories: IStorybookStory[];
}

export interface ClientApi extends ClientStoryApi<StoryFnSolidReturnType> {
  setAddon(addon: any): void;
  configure(loader: Loadable, module: NodeModule): void;
  getStorybook(): IStorybookSection[];
  clearDecorators(): void;
  forceReRender(): void;
  raw: () => any; // todo add type
  load: (...args: any[]) => void;
}
