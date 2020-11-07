console.log(d3)
console.log("Hello world!")

const DATA = [
    {id:1, value:10, name:"Kaz", check:1},
    {id:2, value:5, name:"Rus", check:1},
    {id:3, value:3, name:"Kyr", check:1},
    {id:4, value:1, name:"Ukr", check:1},
]


const listItems = d3.select('ul')
.selectAll('li')
.data(DATA, (data)=>data.name)
.enter()
.append('li');

listItems.append('span')
.text((data)=>data.name);


const xScale = d3.scaleBand()
  .domain(DATA.map( (dp) => dp.name ))
  .rangeRound([0,250])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0,12])
  .rangeRound([0,200]);


const container = d3.select("svg")
.append('g')
.call(d3.axisBottom(xScale))
.attr('color','#DD1111');

const bars = container
.selectAll(".bar")
.data(DATA)
.enter()
.append('rect')
.classed('bar',true)
.attr('width',xScale.bandwidth())
.attr('height',data=>yScale(data.value))
.attr('x',data=>xScale(data.name))
.attr('y', data=>200-yScale(data.value))
.attr('id', (data)=>"bar"+ data.id);
// .text(data=>data.value);

listItems
.append('input')
.attr('type','checkbox')
.attr('checked',true)
.attr('id',(data)=>"inp" + data.id)
.on('change', (evnt)=>{
  console.log(evnt.target.id);

  var re = new RegExp("[0-4]");

  z = re.exec(evnt.target.id);
  console.log('z ' + z );
  cid = parseInt(z);
  console.log(DATA[cid-1]['id']);
  console.log(DATA.length);
  for (var i = 0; i < DATA.length; i++) {
    if ((DATA[i]['id']) == cid) {
      if (DATA[i]['check'] == 1) {
        DATA[i]['check'] = 0;
        console.log(DATA[cid-1]['id']);
        var filtered = DATA.filter((el)=>el.check!==0);
        console.log('console.log(filtered);');
        console.log(filtered);
        console.log('id ' + '#bar'+cid);

        container.selectAll('.bar')
        .data(filtered, data=>data.id)
        .exit()
        .remove();
      } else {
        DATA[i]['check'] = 1;

        var filtered_add = DATA.filter((el)=>el.check==1);
        console.log('console.log(filtered_add);');
        console.log(console.log(filtered_add));
        var appending = container
        .selectAll('.bar')
        .data(filtered_add, data=>data.name)
        .enter()
        .append('rect')
        .classed('bar',true)
        .attr('width',xScale.bandwidth())
        .attr('height',data=>yScale(data.value))
        .attr('x',data=>xScale(data.name))
        .attr('y', data=>200-yScale(data.value))
        .attr('id', (data)=>"bar"+ data.id);
      }
    }
  }

});

