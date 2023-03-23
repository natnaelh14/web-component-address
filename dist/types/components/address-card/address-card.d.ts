import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyCard {
  isAvailable: boolean;
  myCustomEvent: EventEmitter;
  handleClick: () => void;
  render(): any;
}
