var data = [[5,3], [10,17], [15,4], [2,8], [2.9], [9,45], [13,87], [20,33], [5,67], [50, 89], [78,81], [23,45], [15,55], [45,10], [88,13], [17,86], [4,91], [99,7], [23,6], [36,48], [12,78], [16,25], [81,9], [81,89], [58,57], [98,54], [63,74], [12,96], [41,9], [56,8], [8,2], [87,78], [92,89], [45,14], [4,92], [9,12], [84,73], [9,67], [85,1], [19,96], [91,78], [45,28], [89,56], [73,11], [77,8], [88,8], [65,3]];

    var margin = {top: 30, right: 15, bottom: 60, left: 60}
      , width = 960 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom;

    var marginR = {top: 30, right: 15, bottom: 60, left: 60}
      , widthR = 960 - marginR.left - marginR.right
      , heightR = 500 - marginR.top - marginR.bottom;

    var x = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d[0]; })])
              .range([ 0, width ]);

    var y = d3.scale.linear()
    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
    	      .range([ height, 0 ]);


// SCATTER PLOT WITH CIRCLES
    var chart = d3.select('body')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')

    // draw the x axis
    var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

    var g = main.append("svg:g");

    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 3);


// SCATTER PLOT WITH RECTANGLES
    var chart = d3.select('body')
  .append('svg:svg')
  .attr('width', widthR + marginR.right + marginR.left)
  .attr('height', heightR + marginR.top + marginR.bottom)
  .attr('class', 'chart')

    var main = chart.append('g')
  .attr('transform', 'translate(' + marginR.left + ',' + marginR.top + ')')
  .attr('width', widthR)
  .attr('height', heightR)
  .attr('class', 'main')

    // draw the x axis
    var xAxis = d3.svg.axis()
  .scale(x)
  .orient('bottom');

    main.append('g')
  .attr('transform', 'translate(0,' + heightR + ')')
  .attr('class', 'main axis date')
  .call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
  .scale(y)
  .orient('left');

    main.append('g')
  .attr('transform', 'translate(0,0)')
  .attr('class', 'main axis date')
  .call(yAxis);

    var g = main.append("svg:g");

    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:rect")
          .attr("x", function (d,i) { return x(d[0]); } )
          .attr("y", function (d) { return y(d[1]); } )
          .attr("width", 5)
          .attr("height", 5);
