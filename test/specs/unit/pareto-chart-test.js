"use strict";

const tape = require("tape");
const sucrose = require("../../fixtures/build/sucrose.js");
const tests = require("../../lib/twine.js");

let type = "pareto";

// -----------------
// Pareto Unit Tests

tests("UNIT: paretoChart -", function(t) {
    let _chart = null;
    let _model = null;

    tape.onFinish(function() {
        t.report(type);
    });

    t.methods(type, [
        "linesBackground", //module
        "lines", //module
        "multibar", //module
        "barLegend", //module
        "lineLegend", //module
        "xAxis", //module
        "yAxis", //module
        "xScale", //d3 scale
        "yScale", //d3 scale
        "colorFill", //deprecated
    ]);

    t.beforeEach(function (assert) {
        _chart = sucrose.charts.paretoChart();
        _model = _chart.multibar;
        assert.end();
    });

    // Public method tests

    t.test("options: ", function(assert) {
        assert.plan(4);
        let opts = {
            width: 100,
            id: function(){return "asdf";},
            showTitle: false,
            strings: {
                noLabel: "there is no label"
            }
        };
        _chart.options(opts);
        assert.equal(_chart.width(), opts.width, "returns width value set by options");
        assert.equal(_chart.id(), opts.id, "returns id value set by options");
        assert.equal(_chart.showTitle(), opts.showTitle, "returns showTitle value set by options");
        assert.equal(_chart.strings().noLabel, opts.strings.noLabel, "returns string value set by options");
        t.register(assert, type);
    });

    t.test("margin: ", function(assert) {
        assert.plan(2);
        let def = {top: 10, right: 10, bottom: 10, left: 10};
        assert.deepEqual(_chart.margin(), def, "returns default 'hashmap' values");
        let val = {top: 1, right: 1, bottom: 1, left: 1};
        _chart.margin(val);
        assert.deepEqual(_chart.margin(), val, "returns set value");
        t.register(assert, type);
    });

    t.test("width: ", function(assert) {
        assert.plan(2);
        let def = null;
        assert.equal(_chart.width(), def, "returns default 'null' value");
        let val = 600;
        _chart.width(val);
        assert.equal(_chart.width(), val, "returns set value");
        t.register(assert, type);
    });

    t.test("height: ", function(assert) {
        assert.plan(2);
        let def = null;
        assert.equal(_chart.height(), def, "returns default 'null' value");
        let val = 600;
        _chart.height(val);
        assert.equal(_chart.height(), val, "returns set value");
        t.register(assert, type);
    });

    t.test("tooltips: ", function(assert) {
        assert.plan(2);
        let def = true;
        assert.equal(_chart.tooltips(), def, "returns default 'boolean' value");
        let val = false;
        _chart.tooltips(val);
        assert.equal(_chart.tooltips(), val, "returns set value");
        t.register(assert, type);
    });

    t.test("tooltipBar: ", function(assert) {
        assert.plan(3);
        var def = _chart.tooltipBar();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "asdf";};
        _chart.tooltipBar(val);
        assert.equal(_chart.tooltipBar(), val, "returns set function");
        assert.equal(_chart.tooltipBar()(), "asdf", "returns set function value");
        t.register(assert, type);
    });

    t.test("tooltipLine: ", function(assert) {
        assert.plan(3);
        var def = _chart.tooltipLine();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "asdf";};
        _chart.tooltipLine(val);
        assert.equal(_chart.tooltipLine(), val, "returns set function");
        assert.equal(_chart.tooltipLine()(), "asdf", "returns set function value");
        t.register(assert, type);
    });

    t.test("tooltipQuota: ", function(assert) {
        assert.plan(3);
        var def = _chart.tooltipQuota();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "asdf";};
        _chart.tooltipQuota(val);
        assert.equal(_chart.tooltipQuota(), val, "returns set function");
        assert.equal(_chart.tooltipQuota()(), "asdf", "returns set function value");
        t.register(assert, type);
    });

    t.test("xValueFormat: ", function(assert) {
        assert.plan(3);
        var def = _chart.xValueFormat();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "asdf";};
        _chart.xValueFormat(val);
        assert.equal(_chart.xValueFormat(), val, "returns set function");
        assert.equal(_chart.xValueFormat()(), "asdf", "returns set function value");
        t.register(assert, type);
    });

    t.test("yValueFormat: ", function(assert) {
        assert.plan(3);
        var def = _chart.yValueFormat();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "asdf";};
        _chart.yValueFormat(val);
        assert.equal(_chart.yValueFormat(), val, "returns set function");
        assert.equal(_chart.yValueFormat()(), "asdf", "returns set function value");
        t.register(assert, type);
    });

    t.test("quotaValueFormat: ", function(assert) {
        assert.plan(3);
        var def = _chart.quotaValueFormat();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "asdf";};
        _chart.quotaValueFormat(val);
        assert.equal(_chart.quotaValueFormat(), val, "returns set function");
        assert.equal(_chart.quotaValueFormat()(), "asdf", "returns set function value");
        t.register(assert, type);
    });

    t.test("valueFormat: ", function(assert) {
        assert.plan(3);
        var def = _chart.valueFormat();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "asdf";};
        _chart.valueFormat(val);
        assert.equal(_chart.valueFormat(), val, "returns set function");
        assert.equal(_chart.valueFormat()(), "asdf", "returns set function value");
        t.register(assert, type);
    });
    t.test("state: ", function(assert) {
        assert.plan(2);
        let def = {};
        assert.deepEqual(_chart.state(), def, "returns default empty 'hashmap' value");
        let val = {disabled:[]};
        _chart.state(val);
        assert.deepEqual(_chart.state(), val, "returns set value");
        t.register(assert, type);
    });

    t.test("colorData: (set as data) ", function(assert) {
        assert.plan(3);
        _chart.colorData("data");
        let color = _chart.color();
        let fill = _chart.fill();
        let classes = _chart.classes();
        let val = {seriesIndex: 0, color: "#369"};
        assert.equal(color(val, 0), "#369", "returns data defined color");
        val = {seriesIndex: 0, classes: "sc-test"};
        assert.equal(fill(val, 0), "inherit", "returns data defined color as fill");
        assert.equal(classes(val, 0), "sc-series sc-series-0 sc-test", "returns data defined classes");
        t.register(assert, type);
    });
    t.test("colorData: (set as class) ", function(assert) {
        assert.plan(3);
        _chart.colorData("class");
        let color = _chart.color();
        let fill = _chart.fill();
        let classes = _chart.classes();
        let val = {seriesIndex: 0};
        assert.equal(color(val, 0), "inherit", "returns inherit color");
        assert.equal(fill(val, 0), "inherit", "returns inherit fill");
        assert.equal(classes(val, 0), "sc-series sc-series-0 sc-fill00", "returns indexed fill and stroke classes");
        t.register(assert, type);
    });
    t.test("colorData: (set as graduated) ", function(assert) {
        assert.plan(3);
        _chart.colorData("graduated", {barColor: {c1: "#FFF", c2: "#000", l: 4}});
        let color = _chart.color();
        let fill = _chart.fill();
        let classes = _chart.classes();
        let val = {seriesIndex: 0};
        assert.equal(color(val, 0), "rgb(255, 255, 255)", "returns graduated color");
        assert.equal(fill(val, 0), "rgb(255, 255, 255)", "returns graduated color as fill");
        assert.equal(classes(val, 0), "sc-series sc-series-0", "returns default classes");
        t.register(assert, type);
    });

    // Masks header module
    t.test("strings: ", function(assert) {
        assert.plan(9);
        let def = {
            barlegend: {close: "Hide bar legend", open: "Show bar legend"},
            linelegend: {close: "Hide line legend", open: "Show line legend"},
            controls: {close: "Hide controls", open: "Show controls"},
            noData: "No Data Available.",
            noLabel: "undefined"
        };
        let defaultStrings = _chart.strings();
        assert.deepEqual(defaultStrings.barlegend, def.barlegend, "returns default 'hashmap' value legend");
        assert.deepEqual(defaultStrings.linelegend, def.linelegend, "returns default 'hashmap' value legend");
        assert.equal(defaultStrings.noData, def.noData, "returns default 'hashmap' value noData");
        assert.equal(defaultStrings.noLabel, "undefined", "returns default 'hashmap' value noLabel");
        let val = {
            barlegend: {close: "fdsa", open: "asdf"},
            linelegend: {close: "fdsa", open: "asdf"},
            controls: {close: "fdsa", open: "asdf"},
            noData: "asdf",
            noLabel: "asdf"
        };
        _chart.strings(val);
        let modifiedStrings = _chart.strings();
        assert.deepEqual(modifiedStrings.barlegend, val.barlegend, "returns set value");
        assert.deepEqual(modifiedStrings.linelegend, val.linelegend, "returns set value");
        assert.equal(modifiedStrings.noData, val.noData, "returns set value");
        assert.equal(modifiedStrings.noLabel, val.noLabel, "returns set value");
        assert.deepEqual(_chart.barLegend.strings(), val.barlegend, "legend returns set value");
        t.register(assert, type);
    });

    // Composed from header module
    t.test("showTitle: ", function(assert) {
        assert.plan(2);
        let def = false;
        assert.equal(_chart.showTitle(), def, "returns default 'boolean' value");
        let val = true;
        _chart.showTitle(val);
        assert.equal(_chart.showTitle(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("showLegend: ", function(assert) {
        assert.plan(2);
        let def = true;
        assert.equal(_chart.showLegend(), def, "returns default 'boolean' value");
        let val = false;
        _chart.showLegend(val);
        assert.equal(_chart.showLegend(), val, "returns set value");
        t.register(assert, type);
    });

    // Masks model method
    t.test("direction: ", function(assert) {
        assert.plan(4);
        let def = "ltr";
        assert.equal(_chart.direction(), def, "returns default 'string' value");
        assert.equal(_model.direction(), def, "model returns default 'string' value");
        let val = "rtl";
        _chart.direction(val);
        assert.equal(_chart.direction(), val, "returns set value");
        assert.equal(_model.direction(), val, "model returns set value");
        t.register(assert, type);
    });
    t.test("duration: ", function(assert) {
        assert.plan(4);
        let def = 0;
        assert.equal(_chart.duration(), def, "returns default 'integer' value");
        assert.equal(_model.duration(), def, "model returns default 'integer' value");
        let val = 500;
        _chart.duration(val);
        assert.equal(_chart.duration(), val, "returns set value");
        assert.equal(_model.duration(), val, "model returns set value");
        t.register(assert, type);
    });
    t.test("delay: ", function(assert) {
        assert.plan(4);
        let def = 0;
        assert.equal(_chart.delay(), def, "returns default 'integer' value");
        assert.equal(_model.delay(), def, "model returns default 'integer' value");
        let val = 500;
        _chart.delay(val);
        assert.equal(_chart.delay(), val, "returns set value");
        assert.equal(_model.delay(), val, "model returns set value");
        t.register(assert, type);
    });

    // Composed from model
    t.test("id: ", function(assert) {
        assert.plan(2);
        let def = _chart.id();
        assert.equal(Number.isInteger(def), true, "returns an integer by default");
        let val = 12345;
        _chart.id(val);
        assert.equal(_chart.id(), val, "returns set value");
        t.register(assert, type);
    });

    t.test("x: ", function(assert) {
        assert.plan(5);
        var def = _chart.x();
        assert.equal(typeof def, "function", "returns default function");
        assert.equal(typeof _chart.x()({}), "undefined", "returns undefined if value is undefined");
        assert.equal(_chart.x()({x: 1}), 1, "returns value if value is defined");
        let val = function(d){return d.x * 2;};
        _chart.x(val);
        assert.equal(_chart.x(), val, "returns set function");
        assert.equal(_chart.x()({x: 1}), 2, "returns set function value");
        t.register(assert, type);
    });
    t.test("y: ", function(assert) {
        assert.plan(5);
        var def = _chart.x();
        assert.equal(typeof def, "function", "returns default function");
        assert.equal(typeof _chart.y()({}), "undefined", "returns undefined if value is undefined");
        assert.equal(_chart.y()({y: 1}), 1, "returns value if value is defined");
        let val = function(d){return d.y * 2;};
        _chart.y(val);
        assert.equal(_chart.y(), val, "returns set function");
        assert.equal(_chart.y()({y: 1}), 2, "returns set function value");
        t.register(assert, type);
    });

    t.test("xDomain: ", function(assert) {
        assert.plan(2);
        let def = null;
        assert.equal(_chart.xDomain(), def, "returns default 'null' value");
        let val = [0, 100];
        _chart.xDomain(val);
        assert.equal(_chart.xDomain(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("yDomain: ", function(assert) {
        assert.plan(2);
        let def = null;
        assert.equal(_chart.yDomain(), def, "returns default 'null' value");
        let val = [0, 100];
        _chart.yDomain(val);
        assert.equal(_chart.yDomain(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("forceY: ", function(assert) {
        assert.plan(2);
        let def = [0];
        assert.deepEqual(_chart.forceY(), def, "returns a numeric array by default");
        let val = [50];
        _chart.forceY(val);
        assert.equal(_chart.forceY(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("clipEdge: ", function(assert) {
        assert.plan(5);
        let def = false;
        assert.equal(_chart.clipEdge(), def, "returns default 'boolean' value");
        let val = true;
        _chart.clipEdge(val);
        assert.equal(_chart.clipEdge(), val, "returns set value");
        assert.equal(_chart.multibar.clipEdge(), val, "returns set value");
        assert.equal(_chart.linesBackground.clipEdge(), val, "returns set value");
        assert.equal(_chart.lines.clipEdge(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("color: ", function(assert) {
        assert.plan(5);
        let def = _chart.color();
        assert.equal(typeof def, "function", "returns default function");
        assert.equal(_chart.color()({seriesIndex: 0}, 0), "#1f77b4", "returns indexed color");
        assert.equal(_chart.color()({color: "#369"}, 0), "#369", "returns data defined color");
        let val = function(){return "#000";};
        _chart.color(val);
        assert.equal(_chart.color(), val, "returns set function");
        assert.equal(_chart.color()(), "#000", "returns set function value");
        t.register(assert, type);
    });
    t.test("fill: ", function(assert) {
        assert.plan(3);
        let def = _chart.fill();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "#000";};
        _chart.fill(val);
        assert.equal(_chart.fill(), val, "returns set function");
        assert.equal(_chart.fill()(), "#000", "returns set function value");
        t.register(assert, type);
    });
    t.test("classes: ", function(assert) {
        assert.plan(3);
        let def = _chart.classes();
        assert.equal(typeof def, "function", "returns default function");
        let val = function(){return "sc-class";};
        _chart.classes(val);
        assert.equal(_chart.classes(), val, "returns set function");
        assert.equal(_chart.classes()(), "sc-class", "returns set function value");
        t.register(assert, type);
    });
    t.test("rotateTicks: ", function(assert) {
        assert.plan(3);
        let def = 30;
        assert.equal(_chart.rotateTicks(), def, "returns default value");
        let val = false;
        _chart.rotateTicks(val);
        assert.equal(_chart.rotateTicks(), val, "returns set value");
        val = 45;
        _chart.rotateTicks(val);
        assert.equal(_chart.rotateTicks(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("staggerTicks: ", function(assert) {
        assert.plan(2);
        let def = false;
        assert.equal(_chart.staggerTicks(), def, "returns default value");
        let val = true;
        _chart.staggerTicks(val);
        assert.equal(_chart.staggerTicks(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("wrapTicks: ", function(assert) {
        assert.plan(2);
        let def = false;
        assert.equal(_chart.wrapTicks(), def, "returns default value");
        let val = true;
        _chart.wrapTicks(val);
        assert.equal(_chart.wrapTicks(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("reduceXTicks: ", function(assert) {
        assert.plan(2);
        let def = false;
        assert.equal(_chart.reduceXTicks(), def, "returns default value");
        let val = true;
        _chart.reduceXTicks(val);
        assert.equal(_chart.reduceXTicks(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("showValues: ", function(assert) {
        assert.plan(2);
        let def = false;
        assert.equal(_chart.showValues(), def, "returns default value");
        let val = true;
        _chart.showValues(val);
        assert.equal(_chart.showValues(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("stacked: ", function(assert) {
        assert.plan(2);
        let def = true;
        assert.equal(_chart.stacked(), def, "returns default value");
        let val = false;
        _chart.stacked(val);
        assert.equal(_chart.stacked(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("textureFill: ", function(assert) {
        assert.plan(2);
        let def = false;
        assert.equal(_chart.textureFill(), def, "returns default value");
        let val = true;
        _chart.textureFill(val);
        assert.equal(_chart.textureFill(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("nice: ", function(assert) {
        assert.plan(2);
        let def = false;
        assert.equal(_chart.nice(), def, "returns default value");
        let val = true;
        _chart.nice(val);
        assert.equal(_chart.nice(), val, "returns set value");
        t.register(assert, type);
    });
    t.test("xAxisLabel: ", function(assert) {
        let def = null;
        assert.equal(_chart.xAxisLabel(), def, "returns null as default value");
        let val = "asdf";
        _chart.xAxisLabel(val);
        assert.equal(_chart.xAxisLabel(), val, "returns set value");
        assert.end();
        t.register(assert, type);
    });
    t.test("yAxisLabel: ", function(assert) {
        let def = null;
        assert.equal(_chart.yAxisLabel(), def, "returns null as default value");
        let val = "asdf";
        _chart.yAxisLabel(val);
        assert.equal(_chart.yAxisLabel(), val, "returns set value");
        assert.end();
        t.register(assert, type);
    });

    t.test("seriesClick: ", function(assert) {
        assert.plan(3);
        var def = _chart.seriesClick();
        assert.equal(typeof def, "function", "returns default function");
        assert.equal(typeof _chart.seriesClick()(), "undefined", "returns default function value");
        let val = function(){return "asdf";};
        _chart.seriesClick(val);
        assert.equal(_chart.seriesClick(), val, "returns set function");
        t.register(assert, type);
    });
    t.test("gradient: ", function(assert) {
        assert.plan(2);
        let def = _chart.gradient();
        let clg = sucrose.utility.colorLinearGradient;
        assert.equal(def, clg, "returns colorLinearGradient by default");
        let val = function(){return 1;};
        _chart.gradient(val);
        assert.equal(_chart.gradient(), val, "returns set function");
        t.register(assert, type);
    });
    t.test("locality: ", function(assert) {
        assert.plan(2);
        let def = _chart.locality();
        let expected = {
            "decimal": ".",
            "thousands": ",",
            "grouping": [3],
            "currency": ["$", ""],
            "periods": ["AM", "PM"],
            "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "date": "%b %-d, %Y", //defines %x
            "time": "%-I:%M:%S %p", //defines %X
            "dateTime": "%B %-d, %Y at %X GMT%Z", //defines %c
            // Custom patterns
            "full": "%A, %c",
            "long": "%c",
            "medium": "%x, %X",
            "short": "%-m/%-d/%y, %-I:%M %p",
            "yMMMEd": "%a, %x",
            "yMEd": "%a, %-m/%-d/%Y",
            "yMMMMd": "%B %-d, %Y",
            "yMMMd": "%x",
            "yMd": "%-m/%-d/%Y",
            "yMMMM": "%B %Y",
            "yMMM": "%b %Y",
            "MMMd": "%b %-d",
            "MMMM": "%B",
            "MMM": "%b",
            "y": "%Y"
        };
        assert.deepEqual(def, expected, "returns locality settings hashmap by default");
        let val = {
            "decimal": ",",
            "thousands": " ",
        };
        _chart.locality(val);
        let mod = _chart.locality();
        expected = {
            "decimal": ",",
            "thousands": " ",
            "grouping": [3],
            "currency": ["$", ""],
            "periods": ["AM", "PM"],
            "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "date": "%b %-d, %Y", //defines %x
            "time": "%-I:%M:%S %p", //defines %X
            "dateTime": "%B %-d, %Y at %X GMT%Z", //defines %c
            // Custom patterns
            "full": "%A, %c",
            "long": "%c",
            "medium": "%x, %X",
            "short": "%-m/%-d/%y, %-I:%M %p",
            "yMMMEd": "%a, %x",
            "yMEd": "%a, %-m/%-d/%Y",
            "yMMMMd": "%B %-d, %Y",
            "yMMMd": "%x",
            "yMd": "%-m/%-d/%Y",
            "yMMMM": "%B %Y",
            "yMMM": "%b %Y",
            "MMMd": "%b %-d",
            "MMMM": "%B",
            "MMM": "%b",
            "y": "%Y"
        };
        assert.deepEqual(mod, expected, "returns set function");
        t.register(assert, type);
    });

    t.end();
});
