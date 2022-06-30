let allQuotes;

function getRandomValue(length) {
    return Math.floor(Math.random() * length);
}

function writeNewQuote(value) {
    $("#text").text(allQuotes.quotes[value].quote);
    $("#author").text(allQuotes.quotes[value].author);
}

function newQuote() {
    $.ajax({url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        success: function (allquotes) {
            allQuotes = JSON.parse(allquotes);
            writeNewQuote(getRandomValue(allQuotes.quotes.length));
        } 
    });
}

$(function() {
    newQuote();
    $("#new-quote").on('click', function() {
        newQuote();
    });
});


