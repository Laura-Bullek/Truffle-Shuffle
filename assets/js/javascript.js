// References to wheel
const view4Chart = document.querySelector("#view4Chart");
const view4Question = document.querySelector("#view4Question");
const view5Chart = document.querySelector("#view5Chart");
const view5Question = document.querySelector("#view5Question");

// Data for the wheel
    // Genre ("label": "Genre", "value": Genre ID, "question": "Commentary" )
var view4Data = [
    { "label": "Action", "value": 1, "question": "Some witty response about Action" },
    { "label": "Action2", "value": 1, "question": "Some witty response about Action2" },
    { "label": "Action3", "value": 1, "question": "Some witty response about Action3" },
    { "label": "Action4", "value": 1, "question": "Some witty response about Action4" },
    { "label": "Romance", "value": 1, "question": "Some witty response about Romance" }
];
    // Release Year ("label": "ReleaseYear", "value": ReleaseYear, "question": "Commentary" )
var view5Data = [
    { "label": "Year 1", "value": 1, "question": "Some witty response about Year 1" },
    { "label": "Year 2", "value": 1, "question": "Some witty response about Year 2" },
    { "label": "Year 3", "value": 1, "question": "Some witty response about Year 3" },
    { "label": "Year 4", "value": 1, "question": "Some witty response about Year 4" },
    { "label": "Year 5", "value": 1, "question": "Some witty response about Year 5" },
    { "label": "Year 6", "value": 1, "question": "Some witty response about Year 6" }
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

// $(view3btnProvider1).on("click", function () {
//     $("#view4").addClass("hideMe");

// });

// $(view3btnProvider2).on("click", function () {
//     $("#view4").removeClass("hideMe");
// });

$(view3btnProvider3).on("click", function () {
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