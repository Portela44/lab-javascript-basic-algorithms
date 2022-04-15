// Iteration 1: Names and Input
hacker1 = "Jason";
console.log(`The driver's name is ${hacker1}.`);
hacker2 = "Tom";
console.log(`The navigator's name is ${hacker2}.`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
// Iteration 3: Loops
// Iteration 3.1: driver name's letters in CAPS
let hacker1InCaps = "";
for (var i = 0; i < hacker1.length; i++) {
  hacker1InCaps += hacker1[i].toUpperCase();
  if (i<(hacker1.length-1)) {
    hacker1InCaps += " ";
  }
}
console.log(hacker1InCaps);
// Bonus 1: lorem ipsum counter

// Bonus 2: phrase to check