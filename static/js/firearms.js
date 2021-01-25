// new Dygraph(div, "reduced_firearms.csv", {
//     legend: 'always',
//     title: 'NYC vs. SF',
//     showRoller: true,
//     rollPeriod: 14,
//     customBars: true,
//     ylabel: 'Temperature (F)',
//   });

// Chart Params
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file
d3.csv("/datasets/reduced_firearms").then(function(firearmsData) {
  console.log(firearmsData);
  console.log([firearmsData]);

  // Create a function to parse date and time
  var parseTime = d3.timeParse("%b-%Y");

  // Format the data
  firearmsData.forEach(function(data) {
    data.month = parseTime(data.month);
    data.state = +data.state;
    data.totals = +data.totals;
  });

  // Create scaling functions
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(firearmsData, d => d.month))
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(firearmsData, d => d.state)])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([0, d3.max(firearmsData, d => d.totals)])
    .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xTimeScale)
    .tickFormat(d3.timeFormat("%b-%Y"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Add x-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // Add y1-axis to the left side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("green", true)
    .call(leftAxis);

  // Add y2-axis to the right side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("blue", true)
    .attr("transform", `translate(${width}, 0)`)
    .call(rightAxis);

  // Line generators for each line
  var line1 = d3.line()
    .x(d => xTimeScale(d.month))
    .y(d => yLinearScale1(d.state));

  var line2 = d3.line()
    .x(d => xTimeScale(d.month))
    .y(d => yLinearScale2(d.totals));

  // Append a path for line1
  chartGroup.append("path")
    .data([firearmsData])
    .attr("d", line1)
    .classed("line green", true);

  // Append a path for line2
  chartGroup.append("path")
    .data([firearmsData])
    .attr("d", line2)
    .classed("line blue", true);

  // Append axes titles
  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
    .classed("violence-text text", true)
    .text("Gun Violence Incidents");

  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
    .classed("firearms-text text", true)
    .text("Firearm Sales");
}).catch(function(error) {
  console.log(error);
});