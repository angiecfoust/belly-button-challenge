// use d3 to read in samples.json from the provided URL; console log to check it
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// create an init function and use d3 to read in data
function init() {
  d3.json(url).then((data) => {
    let dropdownMenu = d3.select("#selDataset");
    let options = data.names;
    options.forEach((id) => {
      dropdownMenu.append("option").text(id).property("value",id);
    });

    // display the initial plots and data
  let firstid = options[0];
  demoBox(firstid);
  barChart(firstid);
  bubbleChart(firstid);
  });
};

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// use sample_values as the values, otu_ids as the labels, otu_labels as the hovertext
function barChart(sample) {
  d3.json(url).then(data => {
    let idData = data.samples;
    //get the otu ids for the selected individual to filter/slice/graph
    let value = idData.filter(result => result.id == sample);
    let valueData = value[0];
    let otuIds = valueData.otu_ids;
    let otuLabels = valueData.otu_labels;
    let sampleValues = valueData.sample_values;
    //get top 10 for graph, flip x and y values for horizontal graph
    //set up trace and layout
    let trace1 = {
      x: sampleValues.slice(0,10).reverse(),
      y: otuIds.slice(0,10).reverse(),
      text: otuLabels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    };
    // Data array
    let array1 = trace1
    // Apply a title to the layout
    let layout = {
      title: "Top 10 OTUs"
    };
    //plot it to div tag 'bar'
    Plotly.newPlot("bar", array1, layout);
  });

};


// Create a bubble chart that displays each sample.
// use otu_id for x and marker colors, sample_values for y and marker size, otu_labels for text values
                                ///// https://plotly.com/javascript/bubble-charts/
function bubbleChart(sample) {
  d3.json(url).then(data => {
    let idData = data.samples;
    let value = idData.filter(result => result.id == sample);
    let valueData = value[0];
    let trace2 = {
      x: valueData.otu_ids,
      y: valueData.sample_values,
      mode: "markers",
      marker: {
        size: valueData.sample_values,
        color: valueData.otu_ids,
        colorscale: "geyser"
      }
    };
    // data array
    let array2 = trace2;
    // apply a title
    let layout = {
      title: "OTUs Found in Selected Sample",
      xaxis: {title: "OTU ID"}
    };
    //plot it
    Plotly.newPlot("bubble", array2, layout);

  });

};


// Display the sample metadata, i.e., an individual's demographic information. Display each key-value pair from the metadata JSON object somewhere on the page.
function demoBox(sample) {
  d3.json(url).then(data => {
    let demos = data.metadata;
    let value = demos.filter(result => result.id == sample);
    let valueData = value[0];
    //clear data
    d3.select("#sample-metadata").html("");
    //add key-value pairs to metadata section
    Object.entries(valueData).forEach(([key,value]) => {
      d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
    });

  });
};


// Update all the plots when a new sample is selected. Note: optionChanged is in html file
function optionChanged(value) {
  demoBox(value);
  barChart(value);
  bubbleChart(value);

};



// call the init function
init();