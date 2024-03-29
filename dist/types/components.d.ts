/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface AddressCard {
    }
}
export interface AddressCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAddressCardElement;
}
declare global {
    interface HTMLAddressCardElement extends Components.AddressCard, HTMLStencilElement {
    }
    var HTMLAddressCardElement: {
        prototype: HTMLAddressCardElement;
        new (): HTMLAddressCardElement;
    };
    interface HTMLElementTagNameMap {
        "address-card": HTMLAddressCardElement;
    }
}
declare namespace LocalJSX {
    interface AddressCard {
        "onMyCustomEvent"?: (event: AddressCardCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "address-card": AddressCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "address-card": LocalJSX.AddressCard & JSXBase.HTMLAttributes<HTMLAddressCardElement>;
        }
    }
}
