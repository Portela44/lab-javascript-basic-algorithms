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
for (let i = 0; i < hacker1.length; i++) {
  hacker1InCaps += hacker1[i].toUpperCase();
  if (i<(hacker1.length-1)) {
    hacker1InCaps += " ";
  }
}
console.log(hacker1InCaps);
// Iteration 3.2: navigator Reverse
let hacker2Reverse = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);
// Iteration 3.3: lexicographic order
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
// Bonus 1: lorem ipsum counter
function itemCounter (item, text) {
    let counter = 0;
    textSplitInWords = text.split(" ");
    for (let i = 0; i < textSplitInWords.length; i++) {
        if (textSplitInWords[i].toLowerCase() === item.toLowerCase()) {
        counter += 1;
        }
    }
    return (counter);
}
console.log(itemCounter("et", loremIpsum));
// Bonus 2: phrase to check