import { h } from '@stencil/core';
export class MyCard {
  constructor() {
    this.handleClick = () => {
      console.log('handleClick');
      this.myCustomEvent.emit({ isAvailable: this.isAvailable });
    };
    this.isAvailable = true;
  }
  render() {
    const addressChange = e => {
      if (e.currentTarget.value === 'available') {
        this.isAvailable = true;
      }
      else {
        this.isAvailable = false;
      }
    };
    return (h("main", { class: "flex justify-center" }, h("div", { class: "flex flex-col items-center justify-center w-[600px] shadow-2xl m-10 p-4" }, h("img", { src: "https://res.cloudinary.com/doalzf6o2/image/upload/v1678421121/logo_hozn4t.png", height: 100, width: 100 }), h("p", { class: "text-center text-3xl p-6" }, "America's #50 ", h("span", { class: "font-extrabold" }, "Meal Delivery Service")), h("div", { class: "p-6" }, h("label", { htmlFor: "street-address", class: "block text-sm font-medium leading-6 text-gray-900" }, "Check if delivery service is available at your location"), h("div", { class: "flex flex-row gap-4 items-center" }, h("input", { type: "text", name: "street-address", id: "street-address", autocomplete: "street-address", class: "w-[400px] mt-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }), h("button", { onClick: this.handleClick, class: "px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full" }, "Search")), h("div", { class: "flex justify-center gap-6 mt-4" }, h("div", { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, h("input", { checked: this.isAvailable, type: "radio", name: "available", value: "available", id: "radioDefault01", onChange: addressChange }), h("label", { class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer", htmlFor: "radioDefault01" }, "Available")), h("div", { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, h("input", { checked: !this.isAvailable, type: "radio", name: "unavailable", value: "unavailable", id: "radioDefault02", onChange: addressChange }), h("label", { class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer", htmlFor: "radioDefault02" }, "Unavailable")))))));
  }
  static get is() { return "address-card"; }
  static get originalStyleUrls() {
    return {
      "$": ["address-card.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["address-card.css"]
    };
  }
  static get states() {
    return {
      "isAvailable": {}
    };
  }
  static get events() {
    return [{
        "method": "myCustomEvent",
        "name": "myCustomEvent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=address-card.js.map
