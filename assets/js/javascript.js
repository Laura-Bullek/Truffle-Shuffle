$(document).ready(function () {
// Wheel Spinner Data and References
    // View 2A: Rum Wheel
    const view2aChart = document.querySelector("#view2aChart");
    const view2aQuestion = document.querySelector("#view2aQuestion");
    var view2aData = [
        { "label": "Pina Colada", "value": 17207, "question": "" },
        { "label": "Dark and Stormy", "value": 17211, "question": "" },
        { "label": "Mojito", "value": 11000, "question": "" },
        { "label": "Bahama Mama", "value": 17267, "question": "" },
        { "label": "Rum Punch", "value": 14978, "question": "" },
        { "label": "Mai Tai", "value": 11690, "question": "" },
        { "label": "Hurricane", "value": 17268, "question": "" },
        { "label": "Zombie", "value": 17241, "question": "" },
        { "label": "Daiquiri", "value": 11006, "question": "" },
    ];
    // View 2B: Vodka Wheel
    const view2bChart = document.querySelector("#view2bChart");
    const view2bQuestion = document.querySelector("#view2bQuestion");
    var view2bData = [
        { "label": "Bloody Mary", "value": 11113, "question": "" },
        { "label": "Bushwacker", "value": 14588, "question": "" },
        { "label": "Sea Breeze", "value": 13377, "question": "" },
        { "label": "Black Russian", "value": 11102, "question": "" },
        { "label": "Grasshopper", "value": 17200, "question": "" },
        { "label": "Kamikaze", "value": 11600, "question": "" },
        { "label": "Cosmopolitan", "value": 17196,  "question": "" },
        { "label": "Lemon Drop", "value": 14366, "question": "" },
        { "label": "Harvey Wallbanger", "value": 11462, "question": "" },
    ];
    // View 2C: Whiskey Wheel
    const view2cChart = document.querySelector("#view2cChart");
    const view2cQuestion = document.querySelector("#view2cQuestion");
    var view2cData = [
        { "label": "Whiskey Sour", "value": 11004, "question": "" },
        { "label": "Manhattan", "value": 11008, "question": "" },
        { "label": "Rob Roy", "value": 11324, "question": "" },
        { "label": "Old Fashioned", "value": 11001, "question": "" },
        { "label": "Irish Coffee", "value": 13971, "question": "" },
        { "label": "Rusty Nail", "value": 12101, "question": "" },
        { "label": "Red Snapper", "value": 14807, "question": "" },
        { "label": "Mint Julep", "value": 17206, "question": "" },
        { "label": "Sazerac", "value": 12127, "question": "" },
    ];
    // View 4: Movie Genre Wheel
    const view4Chart = document.querySelector("#view4Chart");
    const view4Question = document.querySelector("#view4Question");
    var view4Data = [
        { "label": "Action", "value": 28, "question": "\"GET TO THE CHOPPA!\" <br> You landed on an action movie!" },
        { "label": "Adventure", "value": 12, "question": "\"One does not simply walk into Mordor.\" <br> You landed on an adventure movie!" },
        { "label": "Comedy", "value": 35, "question": "\"It's the f*cking Catalina Wine Mixer.\" <br> You landed on a comedy movie!" },
        { "label": "Crime", "value": 80, "question": "\"Leave the gun. Take the cannoli.\" <br> You landed on a crime movie!" },
        { "label": "Drama", "value": 18, "question": "\"Yo, Adrian!\" <br> You landed on a drama!" },
        { "label": "Family", "value": 10751, "question": "\"Just keep swimming, just keep swimming.\" <br> You landed on a family movie!" },
        { "label": "Horror", "value": 27, "question": "\"Do you want to play a game?\" <br> You landed on a horror movie!" },
        { "label": "Mystery", "value": 9648, "question": "\"YOU CAN'T HANDLE THE TRUTH!\" <br> You landed on mystery!" },
        { "label": "Romance", "value": 10749, "question": "\"You had me at hello.\" <br> You landed on a romance movie!" },
        { "label": "SciFi", "value": 878, "question": "\"Leeloo Dallas Multipass.\"  <br> You landed on SciFi!" },
        { "label": "Thriller", "value": 53, "question": "\"HERE'S JOHNNY!\" <br> You landed on a thriller movie!" }
    ];
    // View 5: Movie Release Year Wheel
    const view5Chart = document.querySelector("#view5Chart");
    const view5Question = document.querySelector("#view5Question");
    var view5Data = [
        { "label": "The 1970s", "value": "197", "question": "Ready for the 70s? <br> Oh yes, you know you are." },
        { "label": "The 1980s", "value": "198", "question": "Ready for the 80s? <br> Oh yes, you know you are." },
        { "label": "The 1990s", "value": "199", "question": "Ready for the 90s? <br> Oh yes, you know you are." },
        { "label": "The 2000s", "value": "200", "question": "Ready for the 00s? <br> Oh yes, you know you are." },
        { "label": "The 2010s", "value": "201", "question": "Ready for the 2010s? <br> Oh yes, you know you are." },
        { "label": "Most Recent", "value": "202", "question": "Ready for the most recent stuff? <br> Oh yes, you know you are." }
    ];

// References to all of the different views
    const view1a = document.querySelector("#view1a");
    const view1b = document.querySelector("#view1b");
    const view2 = document.querySelector("#view2");
    const view2Star = document.querySelector("#view2Star");
    const view2a = document.querySelector("#view2a");
    const view2b = document.querySelector("#view2b");
    const view2c = document.querySelector("#view2c");
    const view2d = document.querySelector("#view2d");
    const view3 = document.querySelector("#view3");
    const view4 = document.querySelector("#view4");
    const view5 = document.querySelector("#view5");
    const view6 = document.querySelector("#view6");

// Variables for the movie API
    let movieProviderID = "";
    let movieGenreID = "";
    let movieReleaseYear = "";
    // API key given by The Movie Database
    const theMovieAPI = "13c21541869f280af7a13cd66a18fedc";

// Button Functionality for each view
    // View 1A: Start Screen
    // Start app button
    const view1aBtnStart = document.querySelector("#view1aBtnStart");
    // View 1A's button click handler
    $(view1aBtnStart).on("click", function () {
        // Hides View 1 and displays View 2
        $(view1a).addClass("hideMe");
        $(view2).removeClass("hideMe");
    });

    // View 1B: Returning User Start Screen
    // Reference to images
    const lastMovie = document.querySelector("#lastMovie");
    const lastDrink = document.querySelector("#lastDrink");
    // Start app button
    const view1bBtnStart = document.querySelector("#view1bBtnStart");
    // View 1B's button click handler
    $(view1bBtnStart).on("click", function () {
        // Hides View 1 and displays View 2
        $(view1b).addClass("hideMe");
        $(view2).removeClass("hideMe");
    });

    // View 2: Choose a Beverage Type Screen
    // By Rum Button
    const view2BtnRum = document.querySelector("#view2BtnRum");
    // View 2's Rum button click handler
    $(view2BtnRum).on("click", function () {
        // Populates the wheel with view 2a data
        callWheel(view2aChart, view2aQuestion, view2aData, "2");
        // Hides view 2 and goes to view 2a
        $(view2).addClass("hideMe");
        $(view2a).removeClass("hideMe");
    });
    // By Vodka Button
    const view2BtnVodka = document.querySelector("#view2BtnVodka");
    // View 2's Vodka button click handler
    $(view2BtnVodka).on("click", function () {
        // Populates the wheel with view 2b data
        callWheel(view2bChart, view2bQuestion, view2bData, "2");
        // Hides view 2 and goes to view 2b
        $(view2).addClass("hideMe");
        $(view2b).removeClass("hideMe");
    });
    // By Whiskey Button
    const view2BtnWhiskey = document.querySelector("#view2BtnWhiskey");
    // View 2's Whiskey button click handler
    $(view2BtnWhiskey).on("click", function () {
        // Populates the wheel with view 2c data
        callWheel(view2cChart, view2cQuestion, view2cData, "2");
        // Hides view 2 and goes to view 2c
        $(view2).addClass("hideMe");
        $(view2c).removeClass("hideMe");
    });
    // Random Cocktail Button
    const view2BtnRandom = document.querySelector("#view2BtnRandom")
    // Hides view 2 and goes to view 2d
    $(view2BtnRandom).on("click", function () {
        $(view2).addClass("hideMe");
        $(view2d).removeClass("hideMe");
        // Grab a random drink
        getDrinkRandom();
        // Populate view 2d with the details of the random drink
    });
    
    // View 2*: Get your Beverage Screen (Wheel)
    // Move on to next view Button
    const view2BtnConfirm = document.querySelector("#view2BtnConfirm");
    // View 2*'s button click handler
    $(view2BtnConfirm).on("click", function () {
        // Hides view 2* and goes to view 3.
        $(view2Star).addClass("hideMe");
        $(view3).removeClass("hideMe");
    });

    // View 3: Choose your Watch Provider 
    // All of the Watch Provider Buttons
    const view3Btn = document.querySelectorAll(".view3Btn");
    // View 3's buttons click handler
    $(view3Btn).on("click", function() {
        // Reference to itself
        var _this = $(this);
        // Get information on which button was clicked
        var providerClicked = _this.attr("value");
        switch (providerClicked) {
            case '1':
                // Set ID to Netflix
                movieProviderID = 8;
                break;
            case '2':
                // Set ID to Hulu
                movieProviderID = 15;
                break;
            case '3':
                // Set ID to Amazon Prime
                movieProviderID =119;
                break;
            case '4':
                // Set ID to Apple TV
                movieProviderID = 2;
                break;
            case '5':
                // Set ID to HBO Go
                movieProviderID = 425;
                break;
            case '6':
                // Set ID to Disney Plus
                movieProviderID = 337;
                break;
        }
        // Populates the Wheel with view 4 data
        callWheel(view4Chart, view4Question, view4Data, "4");
        // Hide view 3 and goes to view 4
        $(view3).addClass("hideMe");
        $(view4).removeClass("hideMe");
    });
    
    // View 4: Spin for Movie Genre Screen (Wheel)
    // Move on to next view button
    const view4BtnConfirm = document.querySelector("#view4BtnConfirm");
    // View 4's button click handler
    $(view4BtnConfirm).on("click", function() {
        // Populates the Wheel with view 5 data
        callWheel(view5Chart, view5Question, view5Data, "5");
        // Hides view 4 and goes to view 5
        $(view4).addClass("hideMe");
        $(view5).removeClass("hideMe");
    });
    
    // View 5: Spin for Movie Release Year Screen (Wheel)
    // Move on to next view button
    const view5BtnConfirm = document.querySelector("#view5BtnConfirm");
    const selectedDrink = document.querySelector("#selectedDrink");
    const selectedMovie = document.querySelector("#selectedMovie");
    const drinkFinalDiv = document.querySelector("#drinkFinalDiv");
    // View 5's button click handler
    $(view5BtnConfirm).on("click", function() {
        // Updates Movie image in view 6
        selectedMovie.src = movieImageURL;
        selectedMovie.alt = movieImageAlt;
        // Updates Cockatail image in view 6
        selectedDrink.src = cocktailImageURL;
        selectedDrink.alt = cocktailImageAlt;
        $(drinkFinalDiv).append(drinkInformationHTML);
        // Hides view 5 and goes to view 6
        $(view5).addClass("hideMe");
        $(view6).removeClass("hideMe");
    });

    // Clear Button functionality
    const clearBtn = document.querySelector("#clearBtn");
    $(clearBtn).on("click",function() {
        // Sets storage to empty.
        localStorage.setItem("lastDrink", "");
        localStorage.setItem("lastMovie", "");
        // Refresh the page
        window.location.reload();
    })

    
// Functions
    // Check for save data and load appropriate page
    function loadSaveData(){
        // Grab the local storage data
        var storedMovie = localStorage.getItem("lastMovie");
        var storedDrink = localStorage.getItem("lastDrink");
        // Check if stored data is empty or non-existent
        if (!storedMovie || !storedDrink || storedMovie.length == 0 || storedDrink.length == 0) {
            return;
        }
        else {
            // Populate the contents of view 1b based on previous drink/movie
            getDrinkOld(storedDrink);
            getMovieOld(storedMovie);
            // Hide view 1a and show 1b
            $(view1a).addClass("hideMe");
            $(view1b).removeClass("hideMe");
        }
    }

    // Call Cocktail API based on ID found in the data set
    function getDrink(questionDiv, data, view) {
        // URL to the Cocktail API
        let cocktailCall = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + data.value;
        $.ajax({
            url: cocktailCall,
            method: "GET"
        }).then(function (cocktail) {
            // Save the information obtained from the API
            getDrinkInformation(cocktail, data);
            // Loads the information on screen
            populateQuestion(questionDiv, data, view);
        })
    
    }
    // Call Cocktail API for a random drink
    function getDrinkRandom() {
        var view2dDiv = document.querySelector("#view2dQuestion");
        // URL to the Cocktail API
        let cocktailRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        $.ajax({
            url: cocktailRandom,
            method: "GET"
        }).then(function (cocktail) {
            // Create data format for a random drink
            var randomDrinkData = [
                { "label": cocktail.drinks[0].strDrink, "value": cocktail.drinks[0].idDrink, "question": "" },
            ];
            // Save the information obtained from the API
            getDrinkInformation(cocktail, randomDrinkData[0]);
            // Loads the information on screen
            populateQuestion(view2dDiv, randomDrinkData[0], "2");
            // Display the button continue button
            $(view2BtnConfirm.parentNode).removeClass("hideMe");
        })
    }
    // Call Cocktail API for information on old drink
    function getDrinkOld(cocktailID){
        let cocktailOldURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailID;
        $.ajax({
            url: cocktailOldURL,
            method: "GET"
        }).then(function (cocktail) {
            updateView1b(cocktail, "drink");
        })
    }

    // Grabs the drink information and updates the data array 
    function getDrinkInformation(cocktail, data) {
        // Shorten the array index
        var cocktailDrink = cocktail.drinks[0];
        // Puts all 15 measurements into an array
        var cocktailMeasureArray = [cocktailDrink.strMeasure1, cocktailDrink.strMeasure2, cocktailDrink.strMeasure3, cocktailDrink.strMeasure4, cocktailDrink.strMeasure5, cocktailDrink.strMeasure6, cocktailDrink.strMeasure7, cocktailDrink.strMeasure8, cocktailDrink.strMeasure9, cocktailDrink.strMeasure10, cocktailDrink.strMeasure11, cocktailDrink.strMeasure12, cocktailDrink.strMeasure13, cocktailDrink.strMeasure14, cocktailDrink.strMeasure15];
        // Puts all 15 ingredients into an array
        var cocktailIngredientArray = [cocktailDrink.strIngredient1, cocktailDrink.strIngredient2, cocktailDrink.strIngredient3, cocktailDrink.strIngredient4, cocktailDrink.strIngredient5, cocktailDrink.strIngredient6, cocktailDrink.strIngredient7, cocktailDrink.strIngredient8, cocktailDrink.strIngredient9, cocktailDrink.strIngredient10, cocktailDrink.strIngredient11, cocktailDrink.strIngredient12, cocktailDrink.strIngredient13, cocktailDrink.strIngredient14, cocktailDrink.strIngredient15];
        // List of instructions
        var instructionsList = "";
        for (i = 0; i < 15; i++) {
            // If one of the steps returns null, stop and finish the list
            if (cocktailMeasureArray[i] == null || cocktailIngredientArray[i] == null) {
                break;
            }
            // Add new instruction step to the list
            instructionsList = `${instructionsList}<li>${cocktailMeasureArray[i]} ${cocktailIngredientArray[i]}</li>`;
        }
        // Populates the question field of the object with the HTML containing the necessary information
        data.question = `<div class="row header">${cocktailDrink.strDrink}</div><div class="row questionsBody"><img src="${cocktailDrink.strDrinkThumb}" alt="Image of ${cocktailDrink.strDrink}" class="cocktailImage"><article id="drinkInstructions"><li>Grab your ${cocktailDrink.strGlass}!</li>${instructionsList}<li>${cocktailDrink.strInstructions}</li></article></div>`;
        drinkInformationHTML = `<div class="row header">${cocktailDrink.strDrink}</div><div class="row questionsBody"><article><li>Grab your ${cocktailDrink.strGlass}!</li>${instructionsList}<li>${cocktailDrink.strInstructions}</li></article></div>`;
        // Saves the cocktail image url
        cocktailImageURL = cocktailDrink.strDrinkThumb;
        // Saves the cocktail alt information
        cocktailImageAlt = `Image of ${cocktailDrink.strDrink}`;
    }

    function getMovie() {
        // URL to the Movie Database
        let theMovieURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + theMovieAPI + "&with_genres=" + movieGenreID + "&primary_release_year=" + movieReleaseYear + "&with_watch_providers=" + movieProviderID;
        $.ajax({
            url: theMovieURL,
            method: "GET"
        }).then(function (movieResponse){
            // Get the length of the reponse result's array
            var movieListLength = movieResponse.results.length;
            // Generate a random index based on the length of the result array
            var randomIndex = Math.floor(Math.random() * (movieListLength) + 1);
            // Shorten the movie response path
            var chosenMovie = movieResponse.results[randomIndex];
            // Store the movie ID into local storage
            localStorage.setItem("lastMovie", chosenMovie.id);
            // Store the drink ID into local storage now that the data is finalized
            localStorage.setItem("lastDrink", chosenDrink);
            // Saves the movie image url
            movieImageURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + chosenMovie.poster_path;
            // Saves the movie alt information
            movieImageAlt = `Poster of ${chosenMovie.title}`;
        })
    }
    // Call Cocktail API for information on old drink
    function getMovieOld(movieID){
        let movieOldURL = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + theMovieAPI;
        $.ajax({
            url: movieOldURL,
            method: "GET"
        }).then(function (chosenMovie){
            updateView1b(chosenMovie, "movie");
        })
    }

    // Populates the questions panel with the data given
    function populateQuestion(questionDiv, data, view){
        d3.select(questionDiv.children[0])
        .html(data.question);
        // Store variable based on which view wheel was spun
        switch (view) {
            case '2':
                chosenDrink = data.value;
                break;
            case '4':
                movieGenreID = data.value;
                break;
            case '5':
                if (data.value == 202) {
                    // Random number from 0-1
                    var randomNumber = Math.floor(Math.random() * (2));
                    movieReleaseYear = data.value + randomNumber.toString();
                }
                else {
                    // Random number from 0-9
                    var randomNumber = Math.floor(Math.random() * (10));
                    movieReleaseYear = data.value + randomNumber.toString();
                }
                getMovie();
                break;
        }
    }

    function updateView1b(data,category) {
        // Checks which category to update
        switch (category) {
            // Change movie image
            case 'movie':
                lastMovie.src = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + data.poster_path;
                lastMovie.alt = `Poster of ${data.title}`;
                break;
            // Change drink image
            case 'drink':
                lastDrink.src = data.drinks[0].strDrinkThumb;
                lastDrink.alt = `Image of ${data.drinks[0].strDrink}`;
                break;
        }
    }

// Materialze JS- Dropdown functionality
    $('.dropdown-trigger').dropdown();

// Wheel function
    function callWheel(chartDiv, questionDiv, data, view) {
        var padding = { top: 20, right: 40, bottom: 0, left: 0 },
        w = 300 - padding.left - padding.right,
        h = 300 - padding.top - padding.bottom,
        r = Math.min(w, h) / 2,
        rotation = 0,
        oldrotation = 0,
        picked = 100000,
        oldpick = [],
        color = d3.scale.category20();
        var svg = d3.select(chartDiv)
            .append("svg")
            .data([data])
            .attr("width", w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);

        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");

        var vis = container
            .append("g");

        var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });

        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);

        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");


        arcs.append("path")
            .attr("fill", function (d, i) { return color(i); })
            .attr("d", function (d) { return arc(d); });

        // add the text
        arcs.append("text").attr("transform", function (d) {
            d.innerRadius = 0;
            d.outerRadius = r;
            d.angle = (d.startAngle + d.endAngle) / 2;
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
        })
            .attr("text-anchor", "end")
            .text(function (d, i) {
                return data[i].label;
            });

        container.on("click", spin);


        function spin(d) {
            container.on("click", null);

            //all slices have been seen, all done
            if (oldpick.length == data.length) {
                container.on("click", null);
                return;
            }

            var ps = 360 / data.length,
                pieslice = Math.round(1440 / data.length),
                rng = Math.floor((Math.random() * 1440) + 360);

            rotation = (Math.round(rng / ps) * ps);

            picked = Math.round(data.length - (rotation % 360) / ps);
            picked = picked >= data.length ? (picked % data.length) : picked;


            if (oldpick.indexOf(picked) !== -1) {
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }

            rotation += 90 - Math.round(ps / 2);

            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function () {
                    if (data[picked].question == "") {
                        getDrink(questionDiv, data[picked], view);
                    }
                    else {
                        populateQuestion(questionDiv, data[picked], view);
                    }

                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#111");

                    oldrotation = rotation;

                    // Show the button based on which button was just spun
                    switch (view) {
                        case '2':
                            $(view2BtnConfirm.parentNode).removeClass("hideMe");
                            break;
                        case '4':
                            $(view4BtnConfirm).removeClass("hideMe");
                            break;
                        case '5':
                            $(view5BtnConfirm).removeClass("hideMe");
                            break;
                    }

                    container.on("click", spin);
                });
        }

        //make arrow
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
            .style({ "fill": "black" });

        //draw spin circle
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({ "fill": "white", "cursor": "pointer" });

        //spin text
        container.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("SHUFFLE!")
            .style({ "font-weight": "bold", "font-size": "23px" });


        function rotTween(to) {
            var i = d3.interpolate(oldrotation % 360, rotation);
            return function (t) {
                return "rotate(" + i(t) + ")";
            };
        }


        function getRandomNumbers() {
            var array = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

            if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
                window.crypto.getRandomValues(array);
            } else {
                //no support for crypto, get crappy random numbers
                for (var i = 0; i < 1000; i++) {
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }

            return array;
        }
    }
    // End of Wheel Function

    function init(){
        loadSaveData();
    }

    init();

}); //End of Script