import { r as registerInstance, e as createEvent, h } from './index-91df2493.js';

const addressCardCss = "@tailwind base;@tailwind utilities;@tailwind components; /*! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.m-10{margin:2.5rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-px{margin-top:1px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border-0{border-width:0}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.leading-6{line-height:1.5rem}.text-gray-900{color:rgb(17 24 39/var(--tw-text-opacity))}.text-gray-900,.text-white{--tw-text-opacity:1}.text-white{color:rgb(255 255 255/var(--tw-text-opacity))}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}.shadow-2xl,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-inset{--tw-ring-inset:inset}.ring-gray-300{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219/var(--tw-ring-opacity))}:after,:before{--tw-content:\"\"}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}.mb-\\[0\\.125rem\\]{margin-bottom:.125rem}.min-h-\\[1\\.5rem\\]{min-height:1.5rem}.w-\\[400px\\]{width:400px}.w-\\[600px\\]{width:600px}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.pl-\\[0\\.15rem\\]{padding-left:.15rem}.pl-\\[1\\.5rem\\]{padding-left:1.5rem}.placeholder\\:text-gray-400::-moz-placeholder{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.placeholder\\:text-gray-400::placeholder{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity))}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset:inset}.focus\\:ring-indigo-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(79 70 229/var(--tw-ring-opacity))}@media (min-width:640px){.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:leading-6{line-height:1.5rem}}";

const MyCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.myCustomEvent = createEvent(this, "myCustomEvent", 7);
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
    return (h("main", { class: "flex justify-center" }, h("div", { class: "flex flex-col items-center justify-center w-[600px] shadow-2xl m-10 p-4" }, h("img", { src: "https://res.cloudinary.com/doalzf6o2/image/upload/v1678421121/logo_hozn4t.png", height: 100, width: 100 }), h("p", { class: "text-center text-3xl p-6" }, "America's #10 ", h("span", { class: "font-extrabold" }, "Meal Delivery Service")), h("div", { class: "p-6" }, h("label", { htmlFor: "street-address", class: "block text-sm font-medium leading-6 text-gray-900" }, "Check if delivery service is available at your location"), h("div", { class: "flex flex-row gap-4 items-center" }, h("input", { type: "text", name: "street-address", id: "street-address", autocomplete: "street-address", class: "w-[400px] mt-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }), h("button", { onClick: this.handleClick, class: "px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full" }, "Search")), h("div", { class: "flex justify-center gap-6 mt-4" }, h("div", { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, h("input", { checked: this.isAvailable, type: "radio", name: "available", value: "available", id: "radioDefault01", onChange: addressChange }), h("label", { class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer", htmlFor: "radioDefault01" }, "Available")), h("div", { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, h("input", { checked: !this.isAvailable, type: "radio", name: "unavailable", value: "unavailable", id: "radioDefault02", onChange: addressChange }), h("label", { class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer", htmlFor: "radioDefault02" }, "Unavailable")))))));
  }
};
MyCard.style = addressCardCss;

export { MyCard as address_card };

//# sourceMappingURL=address-card.entry.js.map