import type { Components, JSX } from "../types/components";

interface AddressCard extends Components.AddressCard, HTMLElement {}
export const AddressCard: {
  prototype: AddressCard;
  new (): AddressCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
