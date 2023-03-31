import { Component, h, State, Event, EventEmitter } from '@stencil/core';

const mockSuggestions = [
  {
    place_id: 1,
    formatted_address: '9463 North Fifth Street Brighton, MA 02135',
  },
  {
    place_id: 2,
    formatted_address: '41 Sherwood Street Dearborn Heights, MI 48127',
  },
  {
    place_id: 3,
    formatted_address: '930 Pine Avenue Sandusky, OH 44870',
  },
  {
    place_id: 4,
    formatted_address: '8089 Water St. Norfolk, VA 23503',
  },
  {
    place_id: 5,
    formatted_address: '161 Sycamore Ave. Pelham, AL 35124',
  },
];

@Component({
  tag: 'address-card',
  styleUrl: 'address-card.css',
  shadow: true,
})
export class MyCard {
  @State() isAvailable: boolean = true;
  @Event() addressSelectionEvent: EventEmitter;

  handleClick = () => {
    this.addressSelectionEvent.emit({ isAvailable: this.isAvailable });
  };
    
 addressChange = e => {
      if (e.currentTarget.value === 'available') {
        this.isAvailable = true;
      } else {
        this.isAvailable = false;
      }
    };
  render() {
    const handleSelect = () => {};
    const renderSuggestions = () =>
      mockSuggestions.map(suggestion => {
        const { place_id, formatted_address } = suggestion;

        return (
          <li class="pl-5 pr-2 py-3 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer" tabIndex={0} key={place_id} onClick={this.handleClick}>
            <span class="font-medium">
              {formatted_address}
            </span>
          </li>
        );
      });

    return (
      <main class="flex justify-center">
        <div class="flex flex-col items-center justify-center w-[600px] shadow-2xl m-10 p-4">
          <p class="text-center text-3xl p-6">
            America&apos;s #1 Laundry and Cleaning <span class="font-extrabold">Pick up and Delivery</span>
          </p>
          <div class="p-6">
            <label htmlFor="street-address" class="block text-sm font-medium leading-6 text-gray-900">
              Check if Home Delivery is available at your location
            </label>
            <div class="flex flex-col items-center">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="w-full mt-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ul>{renderSuggestions()}</ul>
            </div>
            <div class="flex justify-center gap-6 mt-4">
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input checked={this.isAvailable} type="radio" name="available" value="available" id="radioDefault01" onChange={this.addressChange} />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="radioDefault01">
                  Available
                </label>
              </div>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input checked={!this.isAvailable} type="radio" name="unavailable" value="unavailable" id="radioDefault02" onChange={this.addressChange} />
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
