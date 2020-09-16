let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Splits story into an array.
let storyWords = story.split(' ');

// Filters and returns filtered words (sw) into betterWords[]
const betterWords = storyWords.filter(sw => {
  if (!unnecessaryWords.includes(sw)) {
    return sw
  }
}); 

// Counter for how many times a word was used.
let checkReally = 0;
let checkVery = 0;
let checkBasically = 0;

for (let i = 0; i < betterWords.length; i++) {
  if (betterWords[i] === 'really') {
    checkReally++;
  } else if (betterWords[i] === 'very') {
    checkVery++;
  } else if (betterWords[i] === 'basically') {
    checkBasically++;
  }
}



// Counter for how many sentences are in the paragraph.

let checkSentence = 0
for (let i = 0; i < betterWords.length; i++) {
  if (betterWords[i].includes('.')) {
    checkSentence++;
  } else if (betterWords[i].includes('!')) {
    checkSentence++;
  }
}

// Final log of results.
console.log(`You have ${betterWords.length} words in your story.`);
console.log(`There are ${checkSentence} sentences in your story.`);
console.log(`You have used the word "really" ${checkReally} times, the word "very" ${checkVery} times, and the word "basically" ${checkBasically} times.`);
console.log(betterWords.join(' '));







    