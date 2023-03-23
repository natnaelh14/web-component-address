import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'address-card',
  styleUrl: 'address-card.css',
  shadow: false,
})
export class MyCard {
  @State() isAvailable: boolean = true;
  @Event() myCustomEvent: EventEmitter;

  handleClick = () => {
    console.log('handleClick');
    this.myCustomEvent.emit({ isAvailable: this.isAvailable });
  };

  render() {
    const addressChange = e => {
      if (e.currentTarget.value === 'available') {
        this.isAvailable = true;
      } else {
        this.isAvailable = false;
      }
    };

    return (
      <main class="flex justify-center">
        <div class="flex flex-col items-center justify-center w-[600px] shadow-2xl m-10 p-4">
          <img src="https://res.cloudinary.com/doalzf6o2/image/upload/v1678421121/logo_hozn4t.png" height={100} width={100} />
          <p class="text-center text-3xl p-6">
            America&apos;s #50 <span class="font-extrabold">Meal Delivery Service</span>
          </p>
          <div class="p-6">
            <label htmlFor="street-address" class="block text-sm font-medium leading-6 text-gray-900">
              Check if delivery service is available at your location
            </label>
            <div class="flex flex-row gap-4 items-center">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="w-[400px] mt-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button onClick={this.handleClick} class="px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full">
                Search
              </button>
            </div>
            <div class="flex justify-center gap-6 mt-4">
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input checked={this.isAvailable} type="radio" name="available" value="available" id="radioDefault01" onChange={addressChange} />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="radioDefault01">
                  Available
                </label>
              </div>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input checked={!this.isAvailable} type="radio" name="unavailable" value="unavailable" id="radioDefault02" onChange={addressChange} />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="radioDefault02">
                  Unavailable
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
