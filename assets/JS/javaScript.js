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
            let randomValue = getRandomValue(allQuotes.quotes.length);;

            $("#quote-box").html("<div id='quote-box'></div>");

            for (let i = 0; i < allQuotes.quotes.length; i++) {
                if (i == randomValue) {
                    $("#quote-box").append("<div id='text'><span style='font-size:75px;'>\"  </span>" + allQuotes.quotes[i].quote + "<span style='font-size:25px;'>&nbsp;&nbsp;" + allQuotes.quotes[i].author + "</span></div>")
                    //$("#quote-box").append("<div id='text'><span style='font-size:50px;'>" + allQuotes.quotes[i].quote + "</span>" + "<span style='font-size:25px;'>&nbsp;&nbsp;" + allQuotes.quotes[i].author + "</span></div>")
                } else {
                    $("#quote-box").append(allQuotes.quotes[i].quote)
                    //console.log(i + ": " + allQuotes.quotes[i].quote);
                }
                
            }
        } 
    });
}

$(function() {
    newQuote();
    $("#new-quote").on('click', function() {
        newQuote();
    });
});


