// References to wheel
const view2aChart = document.querySelector("#view2aChart");
const view2aQuestion = document.querySelector("#view2aQuestion");
const view4Chart = document.querySelector("#view4Chart");
const view4Question = document.querySelector("#view4Question");
const view5Chart = document.querySelector("#view5Chart");
const view5Question = document.querySelector("#view5Question");

// Data for the wheel
var view2aData = [
    { "label": "Actiona", "value": 1, "question": "Some witty response about Actiona" },
    { "label": "Action2a", "value": 1, "question": "Some witty response about Action2a" },
    { "label": "Action3a", "value": 1, "question": "Some witty response about Action3a" },
    { "label": "Action4a", "value": 1, "question": "Some witty response about Action4a" },
    { "label": "Romancea", "value": 1, "question": "Some witty response about Romancea" }
];
    // Genre ("label": "Genre", "value": Genre ID, "question": "Commentary", "filmChoice": "choice" )
var view4Data = [
    { "label": "Action", "value": 28, "question": "\"GET TO THE CHOPPA!\", You landed on an action movie!"},
    { "label": "Adventure", "value": 12, "question": "\"One does not simply walk into Mordor.\" \n You landed on an adventure movie!" },
    { "label": "Comedy", "value": 35, "question": "\"It's the f*cking Catalina Wine Mixer.\" \n You landed on a comedy movie!" },
    { "label": "Crime", "value": 80, "question": "\"Leave the gun. Take the cannoli.\" \n You landed on a crime movie!" },
    { "label": "Drama", "value": 18, "question": "\"Yo, Adrian!\" \n You landed on a drama!" },
    { "label": "Family", "value": 10751, "question": "\"Just keep swimming, just keep swimming.\" \n You landed on a family movie!" },
    { "label": "Horror", "value": 27, "question": "\"Do you want to play a game?\" \n You landed on a horror movie!" },
    { "label": "Mystery", "value": 9648, "question": "\"YOU CAN'T HANDLE THE TRUTH!\" \n You landed on mystery!" },
    { "label": "Romance", "value": 10749, "question": "\"You had me at hello.\" \n You landed on a romance movie!" },
    { "label": "SciFi", "value": 878, "question": "\"Leeloo Dallas Multipass.\"  \n You landed on SciFi!" },
    { "label": "Thriller", "value": 53, "question": "\"HERE'S JOHNNY!\" \n You landed on a thriller movie!" }
];
    // Release Year ("label": "ReleaseYear", "value": ReleaseYear, "question": "Commentary" )
var view5Data = [
    { "label": "The 1970s", "value": "1970|1971|1972|1973|1974|1975|1976|1977|1978|1979", "question": "Ready for the 70s? Oh yes, you know you are." },
    { "label": "The 1980s", "value": "1980|1981|1982|1983|1984|1985|1986|1987|1988|1989", "question": "Ready for the 80s? Oh yes, you know you are." },
    { "label": "The 1990s", "value": "1990|1991|1992|1993|1994|1995|1996|1997|1998|1999", "question": "Ready for the 90s? Oh yes, you know you are." },
    { "label": "The 2000s", "value": "2000|2001|2002|2003|2004|2005|2006|2007|2008|2009", "question": "Ready for the 00s? Oh yes, you know you are." },
    { "label": "The 2010s", "value": "2010|2011|2012|2013|2014|2015|2016|2017|2018|2019", "question": "Ready for the 2010s? Oh yes, you know you are." },
    { "label": "Most Recent", "value": "2020|2021", "question": "Ready for the most recent stuff? Oh yes, you know you are." }
];

var vodkaData = [
    { "label": "Bloody Mary", "value": 1,}, 
    { "label": "Blue Hawaii", "value": 1,},
    { "label": "Bushwacker", "value": 1,},
    { "label": "Sea Breeze", "value": 1,},
    { "label": "Black Russian", "value": 1,},
    { "label": "Hand Grenade", "value": 1,},
    { "label": "U-Boat", "value": 1,},
    { "label": "Creamsicle", "value": 1,},
    { "label": "Polar Bear" , "value": 1,},
    { "label": "Grasshopper", "value": 1,},
    { "label": "Hummer", "value": 1,},
    { "label": "Kamikaze" , "value": 1,},
    { "label": "Cosmopolitan", "value": 1,},
    { "label": "Lemon Drop Martini", "value": 1,},
    { "label": "Harvey Wallbanger", "value": 1,},
    { "label": "Peach Fuzz", "value": 1,},
    { "label": "Pina Coolada", "value": 1,},
];

var rumData = [
    { "label": "Pina Colada" , "value": 1,}, 
    { "label": "Dark and Stormy", "value": 1,},
    { "label": "Mojito", "value": 1,},
    { "label":  "Bahama Mama", "value": 1,},
    { "label": "Sunset Rum Punch", "value": 1,},
    { "label": "Blue Motorcycle", "value": 1,},
    { "label": "Mai Tai", "value": 1,},
    { "label": "Cherry Bomb", "value": 1,},
    { "label": "Bikini Martini" , "value": 1,},
    { "label": "Sex with an Alligator", "value": 1,},
    { "label": "Hurricane" , "value": 1,},
    { "label": "Pinapple Breeze", "value": 1,},
    { "label": "New Orleans Hurricane" , "value": 1 },
    { "label": "Caribbean Breeze" , "value": 1 },
    { "label": "Zombie", "value": 1,},
];

var whiskeyData = [
    { "label": "Whiskey Sour", "value": 1,}, 
    { "label": "Manhattan", "value": 1,},
    { "label": "Rob Roy", "value": 1, },
    { "label": "Old Fashioned", "value": 1,},
    { "label": "Hot Toddy", "value": 1, },
    { "label": "whiskey Sidecar", "value": 1, },
    { "label": "Irish Coffee" , "value": 1,},
    { "label": "Rusty Nail", "value": 1, },
    { "label": "Liquid Valium", "value": 1,},
    { "label": "Captains Cannonball", "value": 1,},
    { "label": "Red Snapper", "value": 1,},
    { "label": "Tennessee Tea", "value": 1,},
    { "label": "Mint Julep", "value": 1,},
    { "label": "Irish Whisper", "value": 1,},
    { "label": "Friday Night Special", "value": 1,},
];

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

                //mark question as seen
                d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                    .attr("fill", "#111");

                //populate question
                d3.select(questionDiv.children[0])
                    .text(data[picked].question);

                oldrotation = rotation;

                if (view == 4) {
                    console.log("Hello, view 4");
                }
                console.log(view);
                // // Removing hideMe so users can click on the view4 button to continue to view5    
                // $("#view4btnWheel").removeClass("hideMe");
                // // Removing hideMe so users can click on the view5 button to continue to view6    
                // $("#view5btnWheel").removeClass("hideMe");


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
    // // Hiding view 4 button so users can't continue without pressing "shuffle" **Laura
    // $("#view4btnWheel").addClass("hideMe");

    // // Hiding view 5 button so users can't continue without pressing "shuffle" **Laura
    // $("#view5btnWheel").addClass("hideMe");

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

// Materialze JS- Dropdown functionality
$('.dropdown-trigger').dropdown();

// Personal Reminder on Javascript functionality -Edward
// const dynamicPanelBottom = document.querySelector("#dynamicPanelBottom");
// dynamicPanelBottom.innerHTML = "Change text";
// $(view5BtnWheel).on("click", function () {
//     $("#view5").addClass("hideMe");
//     $("#view6").removeClass("hideMe");
// });

// View 1 Testing
const view1BtnStart = document.querySelector("#view1BtnStart");

$(view1BtnStart).on("click", function () {
    // Hides View 1 and displays View 2
    $("#view1").addClass("hideMe");
    $("#view2").removeClass("hideMe");
});


// View 2 Testing
const view2BtnDrinkTropical = document.querySelector("#view2BtnDrinkTropical");
const view2BtnAlcoholGin = document.querySelector("#view2BtnAlcoholGin");
const view2BtnRandom = document.querySelector("#view2BtnRandom")

$(view2BtnDrinkTropical).on("click", function () {
    $("#view2").addClass("hideMe");
    $("#view2a").removeClass("hideMe");
    callWheel(view2aChart,view2aQuestion,view2aData);

});
$(view2BtnAlcoholGin).on("click", function () {
    $("#view2").addClass("hideMe");
    $("#view3").removeClass("hideMe");
});
$(view2BtnRandom).on("click", function () {
    $("#view2").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data, 4);
});

// View 2a Testing
const view2aBtnWheel = document.querySelector("#view2aBtnWheel");

$(view2aBtnWheel).on("click", function () {
    $("#view2a").addClass("hideMe");
    $("#view3").removeClass("hideMe");
});

// View 3 Testing 
// Clean up task- Change the const variable to a single selector pointed towards view3Btn. Then in HTML, add a value tag. Use a switch statement to change what var movieWatchProviderID is.
const view3BtnProvider1 = document.querySelector("#view3Btn1");
const view3BtnProvider2 = document.querySelector("#view3Btn2");
const view3BtnProvider3 = document.querySelector("#view3Btn3");
const view3BtnProvider4 = document.querySelector("#view3Btn4")
const view3BtnProvider5 = document.querySelector("#view3Btn5")
const view3BtnProvider6 = document.querySelector("#view3Btn6")

$(view3BtnProvider1).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data, 4);
});

$(view3BtnProvider2).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data, 4);
});

$(view3BtnProvider3).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data, 4);
});

$(view3BtnProvider4).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data, 4);
});

$(view3BtnProvider5).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data, 4);
});

$(view3BtnProvider6).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data, 4);
});

// View 4 Testing
const view4BtnWheel = document.querySelector("#view4BtnWheel");

$(view4BtnWheel).on("click", function () {
    $("#view4").addClass("hideMe");
    $("#view5").removeClass("hideMe");
    callWheel(view5Chart,view5Question,view5Data);
});



// View 5 Testing
const view5BtnWheel = document.querySelector("#view5BtnWheel");

$(view5BtnWheel).on("click", function () {
    $("#view5").addClass("hideMe");
    $("#view6").removeClass("hideMe");
});

