$(document).ready(function () {
// Wheel Spinner Data and References
    // View 2A: Rum Wheel
    const view2aChart = document.querySelector("#view2aChart");
    const view2aQuestion = document.querySelector("#view2aQuestion");
    var view2aData = [
        { "label": "Pina Colada", "value": 17207, "question": "" },
        { "label": "Dark and Stormy", "value": 17211, "question": "" },
        { "label": "Mojito", "value": 1, "question": "" },
        { "label": "Bahama Mama", "value": 1, "question": "" },
        { "label": "Rum Punch", "value": 1, "question": "" },
        { "label": "Mai Tai", "value": 1, "question": "" },
        { "label": "Hurricane", "value": 1, "question": "" },
        { "label": "Zombie", "value": 1, "question": "" },
        { "label": "Daiquiri", "value": 1, "question": "" },
    ];
    // View 2B: Vodka Wheel
    const view2bChart = document.querySelector("#view2aChart");
    const view2bQuestion = document.querySelector("#view2aQuestion");
    var view2bData = [
        { "label": "Bloody Mary", "value": 11113, "question": "" },
        { "label": "Bushwacker", "value": 14588, "question": "" },
        { "label": "Sea Breeze", "value": 13377, "question": "" },
        { "label": "Black Russian", "value": 1, "question": "" },
        { "label": "Grasshopper", "value": 1, "question": "" },
        { "label": "Kamikaze", "value": 1, "question": "" },
        { "label": "Cosmopolitan", "value": 1,  "question": "" },
        { "label": "Lemon Drop", "value": 1, "question": "" },
        { "label": "Harvey Wallbanger", "value": 1, "question": "" },
    ];
    // View 2C: Whiskey Wheel
    const view2cChart = document.querySelector("#view2aChart");
    const view2cQuestion = document.querySelector("#view2aQuestion");
    var view2cData = [
        { "label": "Whiskey Sour", "value": 11004, "question": "" },
        { "label": "Manhattan", "value": 11008, "question": "" },
        { "label": "Rob Roy", "value": 1, "question": "" },
        { "label": "Old Fashioned", "value": 1, "question": "" },
        { "label": "Irish Coffee", "value": 1, "question": "" },
        { "label": "Rusty Nail", "value": 1, "question": "" },
        { "label": "Red Snapper", "value": 1, "question": "" },
        { "label": "Mint Julep", "value": 1, "question": "" },
        { "label": "Sazerac", "value": 1, "question": "" },
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
        { "label": "The 1970s", "value": "1970|1971|1972|1973|1974|1975|1976|1977|1978|1979", "question": "Ready for the 70s? <br> Oh yes, you know you are." },
        { "label": "The 1980s", "value": "1980|1981|1982|1983|1984|1985|1986|1987|1988|1989", "question": "Ready for the 80s? <br> Oh yes, you know you are." },
        { "label": "The 1990s", "value": "1990|1991|1992|1993|1994|1995|1996|1997|1998|1999", "question": "Ready for the 90s? <br> Oh yes, you know you are." },
        { "label": "The 2000s", "value": "2000|2001|2002|2003|2004|2005|2006|2007|2008|2009", "question": "Ready for the 00s? <br> Oh yes, you know you are." },
        { "label": "The 2010s", "value": "2010|2011|2012|2013|2014|2015|2016|2017|2018|2019", "question": "Ready for the 2010s? <br> Oh yes, you know you are." },
        { "label": "Most Recent", "value": "2020|2021", "question": "Ready for the most recent stuff? <br> Oh yes, you know you are." }
    ];

// Button Functionality for each view
    // View 1A: Start Screen
    const view1aBtnStart = document.querySelector("#view1aBtnStart");
    // Brings user to view 2: Choose a beverage type
    $(view1aBtnStart).on("click", function () {
        // Hides View 1 and displays View 2
        $("#view1a").addClass("hideMe");
        $("#view2").removeClass("hideMe");
    });

    // View 1B: Returning User Start Screen
    const view1bBtnStart = document.querySelector("#view1bBtnStart");
    // Brings user to view 2: Choose a beverage type
    $(view1bBtnStart).on("click", function () {
        // Hides View 1 and displays View 2
        $("#view1b").addClass("hideMe");
        $("#view2").removeClass("hideMe");
    });

    // View 2: Choose a Beverage Type Screen
    // By Rum Button
    const view2BtnRum = document.querySelector("#view2BtnRum");
    // Hides view 2 and goes to view 2a
    $(view2BtnRum).on("click", function () {
        $("#view2").addClass("hideMe");
        $("#view2a").removeClass("hideMe");
        // Populates the wheel with view 2a data
        callWheel(view2aChart, view2aQuestion, view2aData, "2a");
    });
    // By Vodka Button
    const view2BtnVodka = document.querySelector("#view2BtnVodka");
    // Hides view 2 and goes to view 2b
    $(view2BtnVodka).on("click", function () {
        $("#view2").addClass("hideMe");
        $("#view2b").removeClass("hideMe");
        // Populates the wheel with view 2b data
        callWheel(view2bChart, view2bQuestion, view2bData, "2b");
    });
    // By Whiskey Button
    const view2BtnWhiskey = document.querySelector("#view2BtnWhiskey");
    // Hides view 2 and goes to view 2c
    $(view2BtnWhiskey).on("click", function () {
        $("#view2").addClass("hideMe");
        $("#view2c").removeClass("hideMe");
        // Populates the wheel with view 2c data
        callWheel(view2cChart, view2cQuestion, view2cData, "2c");
    });
    // Random Cocktail Button
    const view2BtnRandom = document.querySelector("#view2BtnRandom")
    // Hides view 2 and goes to view 2d
    $(view2BtnRandom).on("click", function () {
        $("#view2").addClass("hideMe");
        $("#view2d").removeClass("hideMe");
        // Grab a random drink

        // Populate view 2d with the details of the random drink
    });

    // View 2a-d: Confirm your beverage
    const view2aBtnWheel = document.querySelector("#view2aBtnWheel");
    // $(view2aBtnWheel).on("click", function () {

    // });

    const view2bBtnWheel = document.querySelector("#view2bBtnWheel");
    const view2cBtnWheel = document.querySelector("#view2cBtnWheel");
    const view4BtnWheel = document.querySelector("#view4BtnWheel");
    const view5BtnWheel = document.querySelector("#view5BtnWheel");

// Functions
    // Call Cocktail API based on ID found in the data set
    function getDrink(questionDiv, data) {
        // URL to the Cocktail API
        let cocktailCall = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + data.value;
        $.ajax({
            url: cocktailCall,
            method: "GET"
        }).then(function (cocktail) {
            getDrinkInformation(cocktail, data);
            populateQuestion(questionDiv, data);
        })
    }

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
        data.question = `<div class="row header">${cocktailDrink.strDrink}</div><div class="row questionsBody"><img src="${cocktailDrink.strDrinkThumb}" alt="Image of ${cocktailDrink.strDrink}" class="cocktailImage"><article id="drinkInstructions"><li>Grab your ${cocktailDrink.strGlass}!</li>${instructionsList}</article></div>`;
        console.log(data.question);
    }
    function populateQuestion(questionDiv, data){
        d3.select(questionDiv.children[0])
        .html(data.question);
    }

    // function getDrink(drink) {
    //     getDrinkInformation(drink.value);
    //     var drinkInformationPanel = $(returnStorageBox).html;
    //     return drinkInformationPanel;
    // }

    // // View 2a Testing
    // $(view2aBtnWheel).on("click", function () {
    //     $("#view2a").addClass("hideMe");
    //     $("#view3").removeClass("hideMe");
    // });

    // // View 3 Testing 
    // // Clean up task- Change the const variable to a single selector pointed towards view3Btn. Then in HTML, add a value tag. Use a switch statement to change what var movieWatchProviderID is.
    // const view3BtnProvider1 = document.querySelector("#view3Btn1");
    // const view3BtnProvider2 = document.querySelector("#view3Btn2");
    // const view3BtnProvider3 = document.querySelector("#view3Btn3");
    // const view3BtnProvider4 = document.querySelector("#view3Btn4");
    // const view3BtnProvider5 = document.querySelector("#view3Btn5");
    // const view3BtnProvider6 = document.querySelector("#view3Btn6");

    // $(view3BtnProvider1).on("click", function () {
    //     $("#view3").addClass("hideMe");
    //     $("#view4").removeClass("hideMe");
    //     callWheel(view4Chart, view4Question, view4Data, 4);
    // });

    // $(view3BtnProvider2).on("click", function () {
    //     $("#view3").addClass("hideMe");
    //     $("#view4").removeClass("hideMe");
    //     callWheel(view4Chart, view4Question, view4Data, 4);
    // });

    // $(view3BtnProvider3).on("click", function () {
    //     $("#view3").addClass("hideMe");
    //     $("#view4").removeClass("hideMe");
    //     callWheel(view4Chart, view4Question, view4Data, 4);
    // });

    // $(view3BtnProvider4).on("click", function () {
    //     $("#view3").addClass("hideMe");
    //     $("#view4").removeClass("hideMe");
    //     callWheel(view4Chart, view4Question, view4Data, 4);
    // });

    // $(view3BtnProvider5).on("click", function () {
    //     $("#view3").addClass("hideMe");
    //     $("#view4").removeClass("hideMe");
    //     callWheel(view4Chart, view4Question, view4Data, 4);
    // });

    // $(view3BtnProvider6).on("click", function () {
    //     $("#view3").addClass("hideMe");
    //     $("#view4").removeClass("hideMe");
    //     callWheel(view4Chart, view4Question, view4Data, 4);
    // });

    // // View 4 Testing
    // $(view4BtnWheel).on("click", function () {
    //     $("#view4").addClass("hideMe");
    //     $("#view5").removeClass("hideMe");
    //     callWheel(view5Chart, view5Question, view5Data);
    // });

    // // View 5 Testing
    // $(view5BtnWheel).on("click", function () {
    //     $("#view5").addClass("hideMe");
    //     $("#view6").removeClass("hideMe");
    // });

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
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if (oldpick.length == data.length) {
                console.log("done");
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
                        getDrink(questionDiv, data[picked]);
                    }
                    else {
                        populateQuestion(questionDiv, data[picked]);
                    }

                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#111");

                    oldrotation = rotation;

                    // Show the button based on which button was just spun
                    switch (view) {
                        case '2a':
                            $(view2aBtnWheel).removeClass("hideMe");
                            break;
                        case '2b':
                            $(view2bBtnWheel).removeClass("hideMe");
                            break;
                        case '2c':
                            $(view2cBtnWheel).removeClass("hideMe");
                            break;
                        case '4':
                            $(view4BtnWheel).removeClass("hideMe");
                            break;
                        case '5':
                            $(view5BtnWheel).removeClass("hideMe");
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
                console.log("works");
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

}); //End of Script


// Personal Reminder on Javascript functionality -Edward
// const dynamicPanelBottom = document.querySelector("#dynamicPanelBottom");
// dynamicPanelBottom.innerHTML = "Change text";
// $(view5BtnWheel).on("click", function () {
//     $("#view5").addClass("hideMe");
//     $("#view6").removeClass("hideMe");
// });
