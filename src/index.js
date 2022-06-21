import { companiesData } from "./companies-data";
import { extraRecord } from "./extra-record";
const before = document.getElementById("before");

//TODO: object functions.
//TODO: Extract an element from the array.

//TODO: Add elements and remove to beginning and end of array.

//TODO: Create a new array from old data.
//TODO: Filter for a certain state.
//TODO: Find the first element with a certain name.
//TODO: Create a new array with just elements of a certain state.
//TODO: Create buttons for each record.
//functions are here
//const manipulatedData = companiesData.filter(function (company) {
//return company.fieldData.State === "NM";
//});
const filterFunction = function (company) {
  return company.fieldData.State === "TX";
};

const mappedFunction = function (company) {
  return {
    company: company.fieldData.CompanyName,
    state: company.fieldData.State,
  };
};
const manipulatedData = companiesData
  .filter(filterFunction)
  .map(mappedFunction);
//ßconst manipulatedData = companiesData.map(mappedFunction);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
before.innerHTML = JSON.stringify(companiesData, null, 2);

//TODO: write manipulated data to the 'after' div.
//slice is a way to remove elements out of the array
