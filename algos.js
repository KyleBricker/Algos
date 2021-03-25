
/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
//Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * @param   {string} tableName
 * @param   {Object} columnValuePairs
 * @return  {string}
 *          A string formatted as a SQL insert statement
 *          where the columns and values are extracted
 *          from @columnValuePairs
 * - Time: O(?).
 * - Space: O(?).
 */


/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
];

/**
 * Filters the given items based on the search criteria using a string
 * startsWith search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchBy The key to search by.
 * @param {string} searchFor The value of the given key to search for.
 * @returns {Array<Objects>} The matched items.
 */
function filterByKey(items, searchFor, searchBy, searchMethod = 'includes') {
  return items.filter(item => {
    if (item[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase())) {
      return item
    }
  })
}

console.log(filterByKey(people, searchFor4, searchBy4, searchMethod4))

function insert(tableName, columnValuePairs) {}

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function insertFunctional(tableName, columnValuePairs) {
  return `"INSERT INTO ${tableName} (${Object.keys(columnValuePairs)}) VALUES (${Object.values(columnValuePairs).map(e => {return typeof(e)=='string' ? `'${e}'`:e})});"`
}
console.log(insertFunctional(table,insertData2));


/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
  firstName: "Bob",
  age: 31,
};
// const expected1 = [
//   { firstName: "Bob", lastName: "Bobbert", age: 31 },
//   { firstName: "Bob", lastName: "White", age: 31 },
// ];

const searchCriteria2 = {
  lastName: "Smith",
};
// const expected2 = [
//   { firstName: "John", lastName: "Smith", age: 25 },
//   { firstName: "Bob", lastName: "Smith", age: 27 },
// ];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */

function findObjects(criteria, collection) {
  arr = []
  collection.forEach(object => {
    let match = true
    for (const key in criteria) {
      if (object[key] != criteria[key]) {
        match = false
        break
      }
    }
    if (match) {
      arr.push(object)
    }
  });
  return arr
}
console.log(findObjectsFunctional(searchCriteria1,items))
console.log(findObjects(searchCriteria1,items))

/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
  id: 3,
  name: "student3",
  isLateToday: true,
  lateCount: 0,
  redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
  isLateToday: true,
  lateCount: 16,
  randomKey: "randomValue",
};
const expected2 = {
  id: 1,
  name: "student1",
  isLateToday: true,
  lateCount: 16,
  redBeltStatus: false,
};
/* 
  Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedVals Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */
function findByIdAndUpdate(id, updatedVals, collection) {
  let match = null
  collection.forEach(object => {
    if (object.id == id) {
      for (const key in updatedVals) {
        if (object.hasOwnProperty(key)) {
          object[key] = updatedVals[key]
        }
      }
      match = object
    }
  });
  return match
}

console.log(findByIdAndUpdate(id1, updateData1, students))

/* 
  Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here): 
    https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d
  The more you deal with objects, especially ones with many nested objects, where you
  are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null
  
  These errors mean, somewhere along your chain of dots, one of the keys did not exist
  on the object so it returned undefined, and then the next dot was trying to access
  a key on undefined, or the key did exist but null was it's value.
  One example of how this might happen is getting JSON data back from an API. Sometimes, 
  the record you requested has more data so there are more levels of nesting, which you get used to,
  so you write your code to access the nested data but then you request a different record, and
  less data is available, so your code breaks when trying to access nested data that isn't there.
  There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
  you look through a "lens" to help you see into an object and safely attempt to access a nested value.
  Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
  one at a time, to make sure it is not undefined or null before going to the next dot.
  Input:
    Object,
    Array of strings representing a path of keys in the Object
  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/

const user = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      line1: "westwish st",
      line2: "washmasher",
      city: "wallas",
      state: "WX",
    },
  },
  favorites: {
    number: 0,
  },
};

const keys1 = ["personalInfo", "address", "city"];
//const expected1 = "wallas";

const keys2 = ["personalInfo", "address", "country"];
//const expected2 = null;

const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
//const expected3 = null;

const keys4 = ["favorites", "number"];
//const expected4 = 0;

const keys5 = [];
//const expected5 = user;

/**
 * Retrieves the value at the end of the path of keys or null.
 * - Time O(?).
 * - Space O(?).
 * @param {Object<string, any>} obj
 * @param {Array<string>} keys
 * @returns {any} The value at end of path of given keys or null.
 */
function lens(obj, keys) {
  let result=obj
  for (let i = 0; i < keys.length; i++) {
    if (result.hasOwnProperty(keys[i])){
      result=result[keys[i]]
    } else { return null }
  }
  return result
}
//console.log(lens(user,keys1))



/* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)
  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the avaialable ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

const recipe1 = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  spicy: 5,
  "gourmet memes": 4200,
};

const available1 = {
  "organic fat": 990,
  "live squid": 1,
  "birds nest": 10,
  "fried flesh": 10,
  spicy: 50,
  "gourmet memes": 42000,
  sugar: 9001,
  spice: 5,
  "everything nice": 1,
  "triple point water": 5,
};
const expected1 = 1;
// because only 1 live squid is available and that is the limiting ingredient

// same as available1, except live squid has 10
const available2 = { ...available1, ["live squid"]: 10 };
const expected2 = 10;

const available3 = { ...available1, ["live squid"]: 0 };

const expected3 = 0;

/**
 * Determines how many servings can be made of the given recipe.
 * - Time: O(?).
 * - Space: O(?).
 * @typedef {Object<string, number>} Ingredients Key value pairs are ingredient
 *    name and a quantity.
 * @param {Ingredients} recipe
 * @param {Ingredients} available
 * @returns {number} Max servings of the recipe that can be made.
 */
function getMaxServings(recipe, available) {
  return (
    Math.min(
      ...Object.keys(recipe).map(ingredient => {
        return available[ingredient]/recipe[ingredient] || 0
      })
    )
  )
}
console.log(getMaxServings(recipe1,available2))
