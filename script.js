const quoteEL = document.querySelector(".quote")
const authorEL = document.querySelector(".author")
const btnEL = document.querySelector("button")
const quotes = [
    {
        quote :"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        author: "William Faulkner"
    },
    {
        quote: "As a writer, you should not judge, you should understand. ",
        author: "Ernest Hemingway"

    },
    {
        quote: "To produce a mighty book, you must choose a mighty theme. ",
        author: "Herman Melville"
    },
    {
        quote: "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen. ",
        author: "John Steinbeck"
    },
    {
        quote: "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book. ",
        author: "John Green"
    },
    {
       quote: "The Six Golden Rules of Writing: Read, read, read, and write, write, write. ",
        author: "Ernest Gaines"
    },
    {
        quote: "As for ‘Write what you know,' I was regularly told this as a beginner. I think it's a very good rule and have always obeyed it. I write about imaginary countries, alien societies on other planets, dragons, wizards, the Napa Valley in 22002. I know these things. I know them better than anybody else possibly could, so it's my duty to testify about them ",
        author: "Ursula K.Le Guin"
    }, 
    {
        quote: "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "The purpose of a writer is to keep civilization from destroying itself",
        author: "Albert Camus"
    },
    {
        quote: "A writer never has a vacation. For a writer life consists of either writing or thinking about writing. ",
        author: "Eugene Ionesco"
    },
    {
        quote: "Read, read, read. Read everything – trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window. ",
        author: "William Faulkner"
    },
    {
        quote: "A good writer possesses not only his own spirit but also the spirit of his friends.",
        author: "Friedrich Nietzsche"
    }, {
        quote: "Maybe it’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.",
        author: "Anna White"
    },
    {
        quote: "I've had the sort of day that would make St. Francis of Assisi kick babies.",
        author: "Douglas Adams"
    },
    {
        quote: "Don't cry because it's over. Smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        quote: "Everything is hard before it is easy.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    }, {
        quote: "These worst mornings with cold floors and hot windows and merciless light — the soul's certainty that the day will have to be not traversed but sort of climbed, vertically, and then that going to sleep again at the end of it will be like falling, again, off something tall and sheer.",
        author: "David Foster Wallace"
    },
    {
        quote: "Don't let your happiness depend on something you may lose.",
        author: "C.S. Lewis"
    },
    {
        quote: "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
        author: "Chuck Palahniuk"
    },
    {
        quote: "We are all broken, that's how the light gets in.",
        author: "Ernest Hemingway"
    },
    {
        quote: "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.",
        author: "Stephen King"
    }, {
        quote: "We are all ordinary. We are all boring. We are all spectacular. We are all shy. We are all bold. We are all heroes. We are all helpless. It just depends on the day.",
        author: "Brad Meltzer"
    },
    {
        quote: "It hurt because it mattered.",
        author: "John Green"
    },
    {
        quote: "Some of us think holding on makes us strong; but sometimes it is letting go.",
        author: "Herman Hesse"
    },
    {
        quote: "I want to taste and glory in each day, and never be afraid to experience pain.",
        author: "Sylvia Plath"
    },
    {
        quote: "Life's not fair; why should I be?",
        author: "Margaret Atwood"
    }, {
        quote: "Never look back unless you are planning to go that way.",
        author: "​Henry David Thoreau"
    },
    {
        quote: "Sooner or later even the fastest runners have to stand and fight.",
        author: "Stephen King"
    },
    {
        quote: "We rise by lifting others.",
        author: "​Robert Ingersoll"
    },
    {
        quote: "I can be changed by what happens to me. But I refuse to be reduced by it.",
        author: "​Maya Angelou"
    },
    {
        quote: "Things usually work out in the end.What if they don't?,That just means you haven't come to the end yet.",
        author: "​Jeanette Walls"
    },
    {
        quote: "Life is a journey, not a destination",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.",
        author: "Audre Lorde"
    },
    {
        quote: "All that is gold does not glitter, not all those who wander are lost; the old that is strong. Does not wither, deep roots are not reached by the frost.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "There are chords in the hearts of the most reckless which cannot be touched without emotion.",
        author: "​Edgar Allen Poe"
    },
    {
        quote: "The clearest way into the universe is through a forest wilderness.",
        author: "John Muir"
    },
    {
        quote: "As you start to walk on the way, the way appears.",
        author: "​Rumi"
    },
    {
        quote: "It takes a great deal of courage to see the world in all its tainted glory, and still love it.",
        author: "​Oscar Wilde"
    },
    {
        quote: "To thine own self be true.",
        author: "​William Shakespeare"
    },
    {
        quote: "Never think of pain or danger or enemies a moment longer than is necessary to fight them.",
        author: "​Ayn Rand"
    }, {
        quote: "When you can't change the direction of the wind, adjust your sails.",
        author: "​H. Jackson Brown Jr."
    },
    {
        quote: "Trust our heart if the seas catch fire, live by love though the stars walk backwards.",
        author: "​E.E. Cummings"
    },
    {
        quote: "Dwell in possibility",
        author: "​Emily Dickinson"
    },
    {
        quote: "To avoid criticism: say nothing, do nothing, be nothing.",
        author: "​Aristotle"
    },
    {
        quote: "And in the end, we were all just humans... drunk on the idea that love, only love, could heal our brokenness",
        author: "F. Scott Fitzgerald"
    },
    {
        quote: "Straight roads do not make skillful drivers",
        author: "Paula Coelho"
    }, {
        quote: "There's very little in my world that a foot massage and a thin-crust, everything-on-it pizza won't set right.",
        author: "G.A. McKevett"
    },
    {
        quote: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
        author: "Mark Twain"
    },
    {
        quote: "Life is tough my darling, but so are you.",
        author: "​Stephanie Bennett Henry"
    },
    {
        quote: "Laugh loudly, laugh often, and most important, laugh at yourself.",
        author: "—​Chelsea Handler"
    },
    {
        quote: "Let yourself be gutted. Let it open you. Start there.",
        author: "​Cheryl Strayed"
    },
    {
        quote: "Rock solid became the solid foundation on which I rebuilt my life.",
        author: "​J.K. Rowling"
    },
    {
        quote: "Have faith, have faith. When you have nothing else have faith.",
        author: "​Francine Rivers"
    }




]

btnEL.addEventListener("click",() => {
    const randomEL = Math.floor(Math.random() * quotes.length)
    quoteEL.textContent = quotes[randomEL].quote
    authorEL.textContent = quotes[randomEL].author
})

