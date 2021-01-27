/var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Import Data
  d3.csv('datasets/reduced_gun_violence.csv').then(function(violenceData) {
    violenceData.forEach(function(data) {
      data.date = +data.date;
      data.state = +data.state;
      data.characteristics = +data.characteristics;
      data.lat = +data.lat;
      data.long = +data.long;
    });
    
    var xLinearScale = d3.scaleLinear()
    .domain([20, d3.max(violenceData, d => d.state)])
    .range([0, width]);

    var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(violenceData, d => d.characteristics)])
    .range([height, 0]);
    
    // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

      var circlesGroup = chartGroup.selectAll("circle")
      .data(violenceData)
      .enter()
      .append("circle")
      .attr("cx", d => xLinearScale(d.state))
      .attr("cy", d => yLinearScale(d.characteristics))
      .attr("r", "15")
      .attr("fill", "pink")
      .attr("opacity", ".5");

        // Step 6: Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.date}<br>State: ${d.state}<br>Characteristics of incident: ${d.characteristics}`);
    });
     // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("mouseover", function(data) {
      toolTip.show(data, this);
    })

    // OR circlesGroup.on("click", function(data) {
    //   toolTip.show(data, this);
    // })
    
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Number of Billboard 100 Hits");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Hair Metal Band Hair Length (inches)");
  }).catch(function(error) {
    console.log(error);
  });