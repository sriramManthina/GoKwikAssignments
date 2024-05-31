// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

// Checks if input is an object (but not an array)
const isValidObj = (value) => {
    return typeof value === 'object' && !Array.isArray(value)
}

// the method searches all values to find the given value
const contains = (obj, value) => {
    for(const [key, val] of Object.entries(obj)) {
        if (isValidObj(val)) { 
            // using recursion search if the value object contains the given value
            if(contains(val, value)) return true 
        } else {
            // check if the given value equal the current value
            if(val === value) return true
        }
    }
    // not found the given value in the current object
    return false
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
    info2: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 444,
            something: "foo24",
          },
        },
      },
    },
  },
};

console.log('foo24', contains(nestedObject, 'foo24')) // true
console.log('44', contains(nestedObject, '44')) // false
console.log(44, contains(nestedObject, 44)) // true 
console.log(24, contains(nestedObject, 24)) // false