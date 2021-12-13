# Documentation
## V0.1.0
***

## clickoriginal.js
This javascript file contains the sparql query requests to obtain the list of diseases for each human organ along with (if available) a list of treatments. It is run in
each of the organ files (eg. brain.html) to import the performQuery function. 

### performQuery
* Takes in a wikidataID of each organ (heart, lung, brain etc.)
* Obtains the list of diseases for which there is listed atleast one treatment (so diseases that have no treatments are not returned in this query
* Returns array with ['disease'] and ['possible_treatment']

#### Calling the function
* The function is called when a specific body part is clicked. For eg, when the brain is clicked on the image map, it redirects you to brain.html in which the function is run.
* The id passed into the function is that of the body part clicked, for eg. for brain 'wd:Q576349', and the corresponding diseases are returned

## ImageMapster
* The image mapster plugin is used to map the different body parts
* These areas are highlighted when hovered over
* Clicking the area will redirect you to the individual organs html page

