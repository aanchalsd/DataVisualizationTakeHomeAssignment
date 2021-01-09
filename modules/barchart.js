let data = [
  {
    name: 'Burj Khalifa',
    value: 829.8,
  },
  {
    name: 'Petronius',
    value: 640,
  },
  {
    name: 'Tokyo Skytree',
    value: 634,
  },
  {
    name: 'KVLY-TV mast',
    value: 629,
  },
  {
    name: 'Canton Tower',
    value: 604,
  },
  {
    name: 'Abraj AlBait Towers',
    value: 601,
  },
  {
    name: 'Bullwinkle',
    value: 529,
  },
];

//sort bars based on value
data = data.sort(function (a, b) {
  return d3.ascending(a.value, b.value);
});

//set up svg using margin conventions - we'll need plenty of room on the left for labels
const margin = {
  top: 15,
  right: 25,
  bottom: 15,
  left: 150,
};

// selecting the color-scheme
let colors = d3.schemeCategory20;
// let colors = d3.schemeCategory10;
// let colors = d3.schemeCategory20b;
// let colors = d3.schemeCategory20c;

const width = 900 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

const svg = d3
  .select('#barchart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .style('fill', 'black')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// xscale
export const barC = d3
  .scaleLinear()
  .range([0, width])
  .domain([
    0,
    d3.max(data, function (d) {
      return d.value;
    }),
  ]);

//yscale
const y = d3
  .scaleBand()
  .rangeRound([height, 0])
  .padding(0.6)
  .domain(
    data.map(function (d) {
      return d.name;
    })
  );

const xAxis = d3.axisBottom().scale(barC);

//make y axis to show bar names
const yAxis = d3.axisLeft().scale(y);

const gy = svg
  .append('g')
  .attr('class', 'y axis')
  .call(yAxis)
  .style('font-size', '14px')
  .style('font-weight', 'bold');

gy.append('g')
  .attr('class', 'x axis')
  .call(xAxis)
  .attr('transform', `translate(,${height})`);

// to hide domain line
gy.select('.domain').attr('stroke-width', 5);

var bars = svg.selectAll('.bar').data(data).enter().append('g');

//append rects
bars
  .append('rect')
  .style('fill', '#ffb6c1')
  .attr('class', 'bar')
  .attr('y', function (d) {
    return y(d.name);
  })
  .attr('height', y.bandwidth())
  .attr('barC', 0)
  .attr('width', function (d) {
    return barC(d.value);
  });

//add a value label to the right of each bar
bars
  .append('text')
  .style('fill', '#000000')
  .style('font-size', '12px')
  .style('font-weight', 'bold')
  .style('text-shadow', '1px')
  .attr('class', 'label')
  //y position of the label is halfway down the bar
  .attr('y', function (d) {
    return y(d.name) + y.bandwidth() / 2 + 4;
  })
  //x position is 3 pixels to the right of the bar
  .attr('barC', function (d) {
    return barC(d.value) + 3;
  })
  .text(function (d) {
    return d.value;
  });
