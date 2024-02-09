// use d3 to read in sampls.json from the provided URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function (data) {
    console.log(data);
});

// display the initial plot


// On change to the dropdown menu, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// use sample_values as the values, otu_ids as the labels, otu_labels as the hovertext

        // get the otu ids for the selected individual, sort them, slice the top 10.


// Create a bubble chart that displays each sample.
// use otu_id for x and marker colors, sample_values for y and marker size, otu_labels for text values


// Display the sample metadata, i.e., an individual's demographic information. Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all the plots when a new sample is selected.


//Deploy your app to a free static page hosting service, such as GitHub Pages. 
