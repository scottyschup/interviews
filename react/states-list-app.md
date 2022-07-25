# States List App

|                     |                                                                           |
| ------------------- | ------------------------------------------------------------------------- |
| **Difficulty**      | Easy / Intermediate                                                       |
| **Completion Time** | ~45 minutes for all 4 steps                                               |
| **Interview Slot**  | On-site Interview, React (Javascript)                                     |

You are given a base React app and a data source containing information on the states/regions of 3 countries (US, India, Canada).
Add functionality that satisfies the following:

> 1. Display all states data from the US only. Data resides in data.js which is accessible via `getDataAsync`
> 2. Add a `<select>` that allows you to fetch one of the countries' data (US, India, Canada).
> 3. Add a text `<input>` that will filter by state, configured to ignore casing.
> 4. Add a `<select>` that allows you sort states by name, population or square mileage - should continue to work with the text filter from step 3.

  
## Setup Code (Codesandbox is highly recommended for this set-up)

Example: https://codesandbox.io/s/sqlvt?file=/src/App.js

App.js:

```

import React from 'react';
import StateList from './StateList';
import "./app.css";

const App = () => {

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>States App</h1>
      </header>
      <StateList />
    </div>
  );
}

export default App;


```

StateList.js:

```

import React from 'react';

const StateList = ({country = 'US'}) => {

  return (
    <section>
      <h2>States in {country}:</h2>
    </section>
  );
};

export default StateList;


```

app.css:

```
.app-container {
  font-family: sans-serif;
  text-align: center;
}


```
  
index.js:

```
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


```
  
data.js:

```
const canada = [
    {
        name: 'Ontario',
        population: 13448494,
        squareMiles: 350851,
    },
    {
        name: 'Quebec',
        population: 8164361,
        squareMiles: 523796,
    },
    {
        name: 'British Columbia',
        population: 4648055,
        squareMiles: 356180,
    },
    {
        name: 'Alberta',
        population: 4067175,
        squareMiles: 247233,
    },
    {
        name: 'Manitoba',
        population: 1278365,
        squareMiles: 213272,
    },
    {
        name: 'Saskatchewan',
        population: 1098352,
        squareMiles: 227122,
    },
    {
        name: 'Nova Scotia',
        population: 971395,
        squareMiles: 20441,
    },
    {
        name: 'New Brunswick',
        population: 747101,
        squareMiles: 27563,
    },
    {
        name: 'Newfoundland and Labrador',
        population: 519716,
        squareMiles: 143056,
    },
    {
        name: 'Prince Edward Island',
        population: 142907,
        squareMiles: 2195,
    },
    {
        name: 'Northwest Territories',
        population: 41786,
        squareMiles: 441621,
    },
    {
        name: 'Nunavut',
        population: 35944,
        squareMiles: 725014,
    },
    {
        name: 'Yukon',
        population: 35874,
        squareMiles: 183288,
    },
];

const us = [
    {
        name: 'Alabama',
        population: 4708708,
        squareMiles: 52423,
    },
    {
        name: 'Alaska',
        population: 698473,
        squareMiles: 656425,
    },
    {
        name: 'Arizona',
        population: 6595778,
        squareMiles: 114006,
    },
    {
        name: 'Arkansas',
        population: 2889450,
        squareMiles: 53182,
    },
    {
        name: 'California',
        population: 36961664,
        squareMiles: 163707,
    },
    {
        name: 'Colorado',
        population: 5024748,
        squareMiles: 104100,
    },
    {
        name: 'Connecticut',
        population: 3518288,
        squareMiles: 5544,
    },
    {
        name: 'Delaware',
        population: 885122,
        squareMiles: 1954,
    },
    {
        name: 'Florida',
        population: 18537969,
        squareMiles: 65758,
    },
    {
        name: 'Georgia',
        population: 9829211,
        squareMiles: 59441,
    },
    {
        name: 'Hawaii',
        population: 1295178,
        squareMiles: 10932,
    },
    {
        name: 'Idaho',
        population: 1545801,
        squareMiles: 83574,
    },
    {
        name: 'Illinois',
        population: 12910409,
        squareMiles: 57918,
    },
    {
        name: 'Indiana',
        population: 6423113,
        squareMiles: 36420,
    },
    {
        name: 'Iowa',
        population: 3007856,
        squareMiles: 56276,
    },
    {
        name: 'Kansas',
        population: 2818747,
        squareMiles: 82282,
    },
    {
        name: 'Kentucky',
        population: 4314113,
        squareMiles: 40411,
    },
    {
        name: 'Louisiana',
        population: 4492076,
        squareMiles: 51843,
    },
    {
        name: 'Maine',
        population: 1318301,
        squareMiles: 35387,
    },
    {
        name: 'Maryland',
        population: 5699478,
        squareMiles: 12407,
    },
    {
        name: 'Massachusetts',
        population: 6593587,
        squareMiles: 10555,
    },
    {
        name: 'Michigan',
        population: 9969727,
        squareMiles: 96810,
    },
    {
        name: 'Minnesota',
        population: 5266214,
        squareMiles: 86943,
    },
    {
        name: 'Mississippi',
        population: 2951996,
        squareMiles: 48434,
    },
    {
        name: 'Missouri',
        population: 5987580,
        squareMiles: 69709,
    },
    {
        name: 'Montana',
        population: 974989,
        squareMiles: 147046,
    },
    {
        name: 'Nebraska',
        population: 1796619,
        squareMiles: 77358,
    },
    {
        name: 'Nevada',
        population: 2643085,
        squareMiles: 110567,
    },
    {
        name: 'New Hampshire',
        population: 1324575,
        squareMiles: 9351,
    },
    {
        name: 'New Jersey',
        population: 8707739,
        squareMiles: 8722,
    },
    {
        name: 'New Mexico',
        population: 2009671,
        squareMiles: 121593,
    },
    {
        name: 'New York',
        population: 19541453,
        squareMiles: 54475,
    },
    {
        name: 'North Carolina',
        population: 9380884,
        squareMiles: 53821,
    },
    {
        name: 'North Dakota',
        population: 646844,
        squareMiles: 70704,
    },
    {
        name: 'Ohio',
        population: 11542645,
        squareMiles: 44828,
    },
    {
        name: 'Oklahoma',
        population: 3687050,
        squareMiles: 69903,
    },
    {
        name: 'Oregon',
        population: 3825657,
        squareMiles: 98386,
    },
    {
        name: 'Pennsylvania',
        population: 12604767,
        squareMiles: 46058,
    },
    {
        name: 'Rhode Island',
        population: 1053209,
        squareMiles: 1545,
    },
    {
        name: 'South Carolina',
        population: 4561242,
        squareMiles: 32007,
    },
    {
        name: 'South Dakota',
        population: 812383,
        squareMiles: 77121,
    },
    {
        name: 'Tennessee',
        population: 6296254,
        squareMiles: 42146,
    },
    {
        name: 'Texas',
        population: 24782302,
        squareMiles: 268601,
    },
    {
        name: 'Utah',
        population: 2784572,
        squareMiles: 84904,
    },
    {
        name: 'Vermont',
        population: 621760,
        squareMiles: 9615,
    },
    {
        name: 'Virginia',
        population: 7882590,
        squareMiles: 42769,
    },
    {
        name: 'Washington',
        population: 6664195,
        squareMiles: 71303,
    },
    {
        name: 'West Virginia',
        population: 1819777,
        squareMiles: 24231,
    },
    {
        name: 'Wisconsin',
        population: 5654774,
        squareMiles: 65503,
    },
    {
        name: 'Wyoming',
        population: 544270,
        squareMiles: 97818,
    },
];

const india = [
    {
        name: 'Uttar Pradesh',
        population: 199812341,
        squareMiles: 93023,
    },
    {
        name: 'Maharashtra',
        population: 112374333,
        squareMiles: 118809,
    },
    {
        name: 'Bihar',
        population: 104099452,
        squareMiles: 36357,
    },
    {
        name: 'West Bengal',
        population: 91276115,
        squareMiles: 34267,
    },
    {
        name: 'Madhya Pradesh',
        population: 72626809,
        squareMiles: 119014,
    },
    {
        name: 'Tamil Nadu',
        population: 72147030,
        squareMiles: 50216,
    },
    {
        name: 'Rajasthan',
        population: 68548437,
        squareMiles: 132139,
    },
    {
        name: 'Karnataka',
        population: 61095297,
        squareMiles: 74051,
    },
    {
        name: 'Gujarat',
        population: 60439692,
        squareMiles: 75685,
    },
    {
        name: 'Andhra Pradesh',
        population: 49577103,
        squareMiles: 62922,
    },
    {
        name: 'Odisha',
        population: 41974218,
        squareMiles: 60119,
    },
    {
        name: 'Telangana',
        population: 35003674,
        squareMiles: 43273,
    },
    {
        name: 'Kerala',
        population: 33406061,
        squareMiles: 15005,
    },
    {
        name: 'Jharkhand',
        population: 32988134,
        squareMiles: 30778,
    },
    {
        name: 'Assam',
        population: 31205576,
        squareMiles: 30285,
    },
    {
        name: 'Punjab',
        population: 27743338,
        squareMiles: 19445,
    },
    {
        name: 'Chhattisgarh',
        population: 25545198,
        squareMiles: 52198,
    },
    {
        name: 'Haryana',
        population: 25351462,
        squareMiles: 17070,
    },
    {
        name: 'Uttarakhand',
        population: 10086292,
        squareMiles: 20650,
    },
    {
        name: 'Himachal Pradesh',
        population: 6864602,
        squareMiles: 21495,
    },
    {
        name: 'Tripura',
        population: 3673917,
        squareMiles: 4049,
    },
    {
        name: 'Meghalaya',
        population: 2966889,
        squareMiles: 8660,
    },
    {
        name: 'Manipur[c]',
        population: 2570390,
        squareMiles: 8621,
    },
    {
        name: 'Nagaland',
        population: 1978502,
        squareMiles: 6401,
    },
    {
        name: 'Goa',
        population: 1458545,
        squareMiles: 1429,
    },
    {
        name: 'Arunachal Pradesh',
        population: 1383727,
        squareMiles: 32333,
    },
    {
        name: 'Mizoram',
        population: 1097206,
        squareMiles: 8139,
    },
    {
        name: 'Sikkim',
        population: 610577,
        squareMiles: 2740,
    },
    {
        name: 'Delhi',
        population: 16787941,
        squareMiles: 573,
    },
    {
        name: 'Jammu and Kashmir',
        population: 12267032,
        squareMiles: 48469,
    },
    {
        name: 'Puducherry',
        population: 1247953,
        squareMiles: 185,
    },
    {
        name: 'Chandigarh',
        population: 1055450,
        squareMiles: 44,
    },
    {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        population: 585764,
        squareMiles: 233,
    },
    {
        name: 'Andaman and Nicobar Islands',
        population: 380581,
        squareMiles: 3185,
    },
    {
        name: 'Ladakh',
        population: 274000,
        squareMiles: 37336,
    },
    {
        name: 'Lakshadweep',
        population: 64473,
        squareMiles: 12,
    },
];

export const getData = country => {
    switch (country) {
        case 'Canada':
            return canada;
        case 'India':
            return india;
        case 'US':
            return us;
        default:
            throw new Error(
                `Country must be either "Canada", "India", or "US". You provided ${country}`,
            );
    }
};

export const getDataAsync = country =>
    new Promise(res => {
        setTimeout(() => res(getData(country)), 500);
    });



```

## What We're Testing

- React knowledge - the ability to use state and props, display content dynamically, use of hooks (useState / useEffect)
- ES6 knowledge - map, filter, arrow functions, etc.
- Asynchronous requests - Promises, .then()
- Handle changes to <select> and <input> forms to update state

## Evaluation Criteria

_Regular_

- Is able to complete the first few steps with a little help / guidance
- Communicates throughout the process, asks questions if stuck or asks to look at documentation if needed
- Is able to open the console and debug problems

_Senior+_

- Asks about constraints, edge cases, or requirements before starting / details and communicates how they will approach the problem
- Some thought into accessibility
- Is able to complete the exercise with minimal or no hints
- Is able to complete all 4 steps within the time limit
- More elegant ES6 approach
- Functions are clean, input field state object is clean
- Naming conventions for functions & variables have thought put into them
