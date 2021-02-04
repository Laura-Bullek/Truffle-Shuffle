// References to wheel
const view4Chart = document.querySelector("#view4Chart");
const view4Question = document.querySelector("#view4Question");
const view5Chart = document.querySelector("#view5Chart");
const view5Question = document.querySelector("#view5Question");

// Data for the wheel
    // Genre ("label": "Genre", "value": Genre ID, "question": "Commentary", "filmChoice": "choice" )
var view4Data = [
    { "label": "Action", "value": 1, "question": "\"GET TO THE CHOPPA!\", You landed on an action movie!"},
    { "label": "Adventure", "value": 1, "question": "\"One does not simply walk into Mordor.\" \n You landed on an adventure movie!" },
    { "label": "Comedy", "value": 1, "question": "\"It's the f*cking Catalina Wine Mixer.\" \n You landed on a comedy movie!" },
    { "label": "Crime", "value": 1, "question": "\"Leave the gun. Take the cannoli.\" \n You landed on a crime movie!" },
    { "label": "Drama", "value": 1, "question": "\"Yo, Adrian!\" \n You landed on a drama!" },
    { "label": "Family", "value": 1, "question": "\"Just keep swimming, just keep swimming.\" \n You landed on a family movie!" },
    { "label": "Horror", "value": 1, "question": "\"Do you want to play a game?\" \n You landed on a horror movie!" },
    { "label": "Mystery", "value": 1, "question": "\"YOU CAN'T HANDLE THE TRUTH!\" \n You landed on mystery!" },
    { "label": "Romance", "value": 1, "question": "\"You had me at hello.\" \n You landed on a romance movie!" },
    { "label": "SciFi", "value": 1, "question": "\"Leeloo Dallas Multipass.\"  \n You landed on SciFi!" },
    { "label": "Thriller", "value": 1, "question": "\"HERE'S JOHNNY!\" \n You landed on a thriller movie!" }
];
    // Release Year ("label": "ReleaseYear", "value": ReleaseYear, "question": "Commentary" )
var view5Data = [
    { "label": "The 1970s", "value": 1, "question": "Ready for the 70s? Oh yes, you know you are." },
    { "label": "The 1980s", "value": 1, "question": "Ready for the 80s? Oh yes, you know you are." },
    { "label": "The 1990s", "value": 1, "question": "Ready for the 90s? Oh yes, you know you are." },
    { "label": "The 2000s", "value": 1, "question": "Ready for the 00s? Oh yes, you know you are." },
    { "label": "The 2010s", "value": 1, "question": "Ready for the 2010s? Oh yes, you know you are." },
    { "label": "Most Recent", "value": 1, "question": "Ready for the most recent stuff? Oh yes, you know you are." }
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
function callWheel(chartDiv, questionDiv, data) {
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

// Materialze JS- Dropdown functionality
$('.dropdown-trigger').dropdown();

// Personal Reminder on Javascript functionality -Edward
// const dynamicPanelBottom = document.querySelector("#dynamicPanelBottom");
// dynamicPanelBottom.innerHTML = "Change text";
// $(view5btnWheel).on("click", function () {
//     $("#view5").addClass("hideMe");
//     $("#view6").removeClass("hideMe");
// });

// View 1 Testing
const view1btnStart1 = document.querySelector("#view1btn1");

$(view1btn1).on("click", function () {
    $("#view1").addClass("hideMe");
    $("#view2").removeClass("hideMe");
});


// View 2 Testing
const view2btnDrink1 = document.querySelector("#view2btnDrink1");
const view2btnAlcohol1 = document.querySelector("#view2btnAlcohol1");
const view2btnRandom = document.querySelector("#view2btnRandom")

$(view2btnDrink1).on("click", function () {
    $("#view2").addClass("hideMe");
    $("#view1").removeClass("hideMe");
});
$(view2btnAlcohol1).on("click", function () {
    $("#view2").addClass("hideMe");
    $("#view3").removeClass("hideMe");
});
$(view2btnRandom).on("click", function () {
    $("#view2").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data);
});

// View 3 Testing
const view3btnProvider1 = document.querySelector("#view3btn1");
const view3btnProvider2 = document.querySelector("#view3btn2");
const view3btnProvider3 = document.querySelector("#view3btn3");
const view3btnProvider4 = document.querySelector("#view3btn4")
const view3btnProvider5 = document.querySelector("#view3btn5")
const view3btnProvider6 = document.querySelector("#view3btn6")

$(view3btnProvider1).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data);
});

$(view3btnProvider2).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data);
});

$(view3btnProvider3).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data);
});

$(view3btnProvider4).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data);
});

$(view3btnProvider5).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data);
});

$(view3btnProvider6).on("click", function () {
    $("#view3").addClass("hideMe");
    $("#view4").removeClass("hideMe");
    callWheel(view4Chart,view4Question,view4Data);
});

// View 4 Testing
const view4btnWheel = document.querySelector("#view4btnWheel");

$(view4btnWheel).on("click", function () {
    $("#view4").addClass("hideMe");
    $("#view5").removeClass("hideMe");
    callWheel(view5Chart,view5Question,view5Data);

});

// View 5 Testing
const view5btnWheel = document.querySelector("#view5btnWheel");

$(view5btnWheel).on("click", function () {
    $("#view5").addClass("hideMe");
    $("#view6").removeClass("hideMe");
});

