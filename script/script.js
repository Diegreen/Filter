import { data } from "./data.js";

function filterCountry(data) {
  const filteredCountrys = data.filter((data => data.country == 'Brasil'))
  return filteredCountrys;
}

console.log(filterCountry(data));


function filterPrice(array) {
  const filteredHotelPrice = data.filter(data => data.price >= 200)
  return filteredHotelPrice;
}
console.log(filterPrice(data));

function filterIsOpen(array) {
  const filteredOpenHotels = data.filter(data => data.isOpen == true)
  return filteredOpenHotels;
}
console.log(filterIsOpen(data));


function filterHotelName(array) {
  const filteredForCopacabana = data.filter(data => data.name == "Copacabana Palace")
  return filteredForCopacabana;
}
console.log(filterHotelName(data))

function filterToBook(data) {
  const hotel = filterHotelName(data);
  const availableDates = hotel[0].toBook.filter(date => date.isAvaliable == true);
  return availableDates.map(date => date.date);
}

console.log(filterToBook(data));
