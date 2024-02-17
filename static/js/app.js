// use d3 to read in sampls.json from the provided URL; console log to check it
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function (data) {
    console.log(data);
});
 
// need to populate drop down menu on webpage; check out this video: https://www.youtube.com/watch?v=x1BSYD7RXYM

   //need to append to the html options the value and the text option.value




// display the initial plots
function init() {
  let dropdownMenu = d3.select("#selDataset");
  d3.json(url).then((data) => {
    let options = data.names;
    options.forEach((id) => {
      dropdownMenu.append("option").text(id).property("value",id);
  });

})};

init();

// On change to the dropdown menu, call getData()


// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// use sample_values as the values, otu_ids as the labels, otu_labels as the hovertext

        // get the otu ids for the selected individual, sort them, slice the top 10.



// Create a bubble chart that displays each sample.
// use otu_id for x and marker colors, sample_values for y and marker size, otu_labels for text values
                                ///// https://plotly.com/javascript/bubble-charts/


// Display the sample metadata, i.e., an individual's demographic information. Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all the plots when a new sample is selected.


//Deploy your app to a free static page hosting service, such as GitHub Pages. 


/// BONUS: Gauge chats: https://plotly.com/javascript/gauge-charts/
