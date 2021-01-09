// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 760 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
export const svg = d3
  .select('#scatter')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//Read the data
d3.csv(
  'https://raw.githubusercontent.com/aanchalsd/JsonData/main/ScatterPlotData.csv',
  function (data) {
    // Add X axis
    const x = d3.scaleLinear().domain([0, 986000]).range([0, width]);
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      // to change font for axis
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 9939]).range([height, 0]);
    svg
      .append('g')
      .call(d3.axisLeft(y))
      // to change font for axis
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Add dots
    svg
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return x(d.SalePrice);
      })
      .attr('cy', function (d) {
        return y(d.GrLArea);
      })
      .attr('r', 2.5)
      .attr('fill', '#FF69B4');
  }
);

// ‘GrLivArea’- This is one of the many area-related parameters available. This one specifically indicates the above ground (grade) living area (in square feet) available in the house.

// ‘SalePrice’- This is the target variable that contains the sale price of the property in dollars. While this variable is populated for all records in the train data-set, the same column has to predicted for the data in the test.csv file
