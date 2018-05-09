let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWord = story.split(" ");

let betterWords = storyWord.filter(word => !unnecessaryWords.includes(word));

let overusedCount0 = 0;
let overusedCount1 = 0;
let overusedCount2 = 0;

storyWord.filter(function(word)
{
	if(word === overusedWords[0])
    {
    	overusedCount0++;
    }
    if(word === overusedWords[1])
    {
    	overusedCount1++;
    }
    if(word === overusedWords[2])
    {
    	overusedCount2++;
    }
});

// count the number of sentences
let sentence = 0;

storyWord.forEach(function(word)
{
      if(word[word.length-1] === '.' || word[word.length-1] === '!')
      {
        sentence +=1;
      }
});

console.log('The word count is ' + storyWord.length);

console.log('The betterWords word count is ' + betterWords.length);

console.log("There are " + overusedCount0 + " overused word " + `${overusedWords[0]}`);
console.log("There are " + overusedCount1 + " overused word " + `${overusedWords[1]}`);
console.log("There are " + overusedCount2 + " overused word " + `${overusedWords[2]}`);

console.log('There are '+ sentence + ' sentences');

console.log(betterWords.join(' '));
