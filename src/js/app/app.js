function getDocWidth() {
    var D = document;
    return Math.max(
        D.body.scrollWidth, D.documentElement.scrollWidth,
        D.body.offsetWidth, D.documentElement.offsetWidth,
        D.body.clientWidth, D.documentElement.clientWidth
    );
}

var height = 2500;
var width = getDocWidth();

var i = 0;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr('id', 'svg');

svg.on("ontouchstart" in document ? "touchmove" : "mousemove", particle)

d3.select(window).on('resize', resize);

function particle() {
    d3.select('body').style("background-color", d3.hsl((i = (i + 1) % 360), 1, .8));

    var m = d3.mouse(this);
    svg.insert("circle", "rect")
        .attr("cx", m[0])
        .attr("cy", m[1])
        .attr("r", 1e-6)
        .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .4))
        .style("fill", 'transparent')
        .style("opacity", .2)
        .transition()
        .duration(1000)
        .ease('ease')
        .attr("r", 200)
        .style("opacity", 1e-6)
        .remove();


    d3.event.preventDefault();
}

function resize() {
    height = 2500;
    width = getDocWidth();
    d3.select("svg")
        .attr("width", width)
        .attr("height", height);
}

d3.select('nav').html(function() {
    var banner = '<img id="mini-logo" src="img/logo.jpg" />Indominus Trail Series';
    var frog = '';
    for (var i = 9; i >= 0; i--) {
        frog = frog + '<img src="img/frogw.png" class="froggy" style="opacity:' + (i / 10) + ';height:20px; padding: 0 10px;"/>';
    };
    var social = '<ul class="soc"><li><a class="soc-facebook soc-icon-last" href="https://www.facebook.com/profile.php?id=100008934930345"></a></li></ul>';


    return banner + frog + social;
});