const SAFIISAWESOME = {};

SAFIISAWESOME.quotes = [
  {
    quote: "Everything is nothing, and the universe is chaos",
    wordCount: 8
  },
  {
    quote: "Deborah",
    wordCount: 1,
    append: true
  },
  {
    quote: "My favourite coffee shop is",
    wordCount: 4
  },
  {
    quote: "I wanted to take a sip of my coffee",
    wordCount: 9
  },
  {
    quote: "This is all made up and none of it matters",
    wordCount: 10
  },
  {
    quote: "If you try to find resolution outside self you'll be miserable and lonely",
    wordCount: 13
  },
  {
    quote: "We are all fundamentally alone",
    wordCount: 5
  },
  {
    quote: "Everything beyond the self is chaos",
    wordCount: 6
  },
  {
    quote: "SAFIISHANDSOME",
    wordCount: 1
  },
  {
    quote: "It's a cave full of idiots and it's great",
    wordCount: 9
  },
  {
    quote: "It's a cluster of fuckeds",
    wordCount: 5
  },
  {
    quote: "Enslave a wizard",
    wordCount: 3
  },
  {
    quote: "Guess I'm gonna hit this API 40 times in a fuckin' row",
    wordCount: 12
  },
  {
    quote: "This is what the professional world refers to as a clusterfuck",
    wordCount: 11
  },
  {
    quote: "🔥🔥🔥🔥🔥🔥🔥",
    wordCount: 1
  },
  {
    quote: "I want you to turn yourself into an array",
    wordCount: 9
  },
  {
    quote: "The best jokes need to be explained",
    wordCount: 7
  },
  {
    quote: "it's same same",
    wordCount: 3,
    append: true
  },
  {
    quote: "If it's written down it must be true",
    wordCount: 8
  },
  {
    quote: "Say my name, wizard",
    wordCount: 4
  },
  {
    quote: "Don't waste three days of your mortal existence on a semicolon",
    wordCount: 11
  },
  {
    quote: "Everything is arbitrary and will is an illusion",
    wordCount: 8
  },
  {
    quote: "Git will give you no feedback",
    wordCount: 6
  },
  {
    quote: "You'll never know if you're doing anything right",
    wordCount: 8
  },
  {
    quote: "I would follow this sagelike turtle into war",
    wordCount: 8
  },
  {
    quote: "Take a break",
    wordCount: 3
  },
  {
    quote: "because truth is an illusion",
    wordCount: 5,
    append: true
  },
  {
    quote: "The answer to this question doesn't matter because soon we'll all be dead",
    wordCount: 13
  },
  {
    quote: "None of this matters",
    wordCount: 4
  },
  {
    quote: "The time demons weren't available this early in the schedule",
    wordCount: 10
  },
  {
    quote: "We create structure for the illusion of control",
    wordCount: 8
  },
  {
    quote: "SNUBONS",
    wordCount: 1
  },
  {
    quote: "Please, I have a family",
    wordCount: 5
  },
  {
    quote: "Look how happy this dog is",
    wordCount: 6
  },
  {
    quote: "I could watch this for days",
    wordCount: 6
  },
  {
    quote: "because capitalism",
    wordCount: 2,
    append: true
  },
  {
    quote: "We are using a bulbasaur database",
    wordCount: 6
  },
  {
    quote: "Quokkas are not that happy; their face just looks like that",
    wordCount: 11
  },
  {
    quote: "666",
    wordCount: 1
  },
  {
    quote: "I'd still get brunch with any of you",
    wordCount: 8
  },
  {
    quote: "My favourite character in the Matrix was Agent Smith",
    wordCount: 9
  },
  {
    quote: "There is no more Juno, there is only AJAX calls",
    wordCount: 10
  }
]

SAFIISAWESOME.getInput = () => {
  $("form").on("submit", function(event){
    event.preventDefault();
    $('.ipsum').html("");
    const paragraphs = parseInt($("#paragraphs").val(), 10);
    const words = parseInt($("#words").val(), 10);
    SAFIISAWESOME.generateIpsum(paragraphs, words);
  })
}

SAFIISAWESOME.generateIpsum = (numParagraphs, numWords) => {  
  // start with a for loop so we can do this again and again and again and again.
  // there is no Juno, there is only Ipsum
  for (let i = 1; i <= numParagraphs; ++i) {
    let ipsum = ""; //oh look a shiny variable we can store our quotes in.
    let allTheWords = 0; //and something so we know how many words we have!
    for (let j = 1; j <= numWords; ++j) {
      if (allTheWords < numWords) {
        const quotesThatWillFit = SAFIISAWESOME.quotes.filter ( (value) => {
          return value.wordCount <= (numWords - allTheWords);
        })
        const numbah = Math.floor(Math.random() * quotesThatWillFit.length);
        const newQuote = quotesThatWillFit[numbah];
        if (ipsum == "") {
          ipsum += `${newQuote.quote}`;
          allTheWords += newQuote.wordCount;
        } else if (newQuote.append) {
          ipsum += `, ${newQuote.quote}`
          allTheWords += newQuote.wordCount;
        } else {
          ipsum += `. ${newQuote.quote}`
          allTheWords += newQuote.wordCount;
        }
      }
    }
    SAFIISAWESOME.displayIpsum(ipsum);
  }
}

SAFIISAWESOME.displayIpsum = (depressingNonsense) => {
  $('.ipsum').append(`<p>${depressingNonsense}!</p>`);
}

SAFIISAWESOME.init = () => {
  SAFIISAWESOME.getInput();
}

$(function(){
  SAFIISAWESOME.init();
})