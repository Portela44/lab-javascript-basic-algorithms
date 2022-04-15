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
loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt dictum ipsum, eget volutpat dolor ornare in. Phasellus nec luctus purus, in tempor quam. Nulla imperdiet odio et justo elementum dictum. Sed finibus ex a tellus tincidunt ullamcorper. Nunc neque ligula, lobortis id congue in, tristique in ipsum. Aenean finibus, lorem non vestibulum commodo, lectus dolor malesuada massa, ac bibendum dui tortor non lectus. Donec id laoreet eros. In ac ex metus. Suspendisse potenti. Praesent placerat metus tellus, eget molestie dolor pellentesque a. Praesent tincidunt tempor dolor a condimentum. Nam laoreet quam in posuere lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In tincidunt urna non feugiat mollis. Maecenas a egestas enim. Suspendisse vel molestie sem. Fusce malesuada felis non mauris ullamcorper sodales. Aenean et felis placerat, scelerisque tortor et, pulvinar justo. Duis a rutrum libero, et tristique diam. Integer facilisis, arcu non varius ultrices, ligula nibh malesuada mi, ac tempor velit felis id elit. Nulla purus leo, feugiat quis dui id, iaculis dapibus tortor. Aliquam ullamcorper mauris vel turpis porttitor, ac accumsan nunc placerat. Morbi mattis leo ipsum, ac condimentum lorem rutrum et. Aliquam mi augue, ultrices vel lacinia non, sodales et dolor. Pellentesque convallis vitae ex bibendum maximus. Fusce lacinia enim et orci pharetra posuere vitae vitae lorem. Cras vitae ligula vel purus suscipit pharetra id a ligula. Nunc ullamcorper ultrices mi eu volutpat. Pellentesque auctor est eget enim fringilla pulvinar. Sed placerat convallis tortor, ut scelerisque nisi gravida eu. Sed porttitor, urna et pharetra tincidunt, purus ligula consectetur eros, vel faucibus ex nunc a lectus. Nam eu justo quis justo luctus dignissim in a turpis. Maecenas molestie velit non turpis vestibulum tincidunt. Aliquam quis erat odio. Quisque augue sem, fringilla ornare malesuada et, accumsan eget ipsum. Donec lorem arcu, porta vitae sodales sit amet, pharetra id tellus. Proin efficitur mi ac lacus ullamcorper, eu tristique ipsum mattis."

function wordCounter (text) {
  let counter = 1;
  for (letter of text) {
    if(letter === " ") {
      counter += 1;
    }
  }
  return (counter);
}
console.log(wordCounter(loremIpsum));

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