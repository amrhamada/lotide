const pass = String.fromCodePoint(0x1F7E2);
const fail = String.fromCodePoint(0x1F534);
const assertEqual = (actual, expected)=>{
  if (actual === expected) {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (list) => {
  return list.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!