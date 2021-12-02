// JavaScript source code


//const performQuery=async(wikidataId)=> {
let queryData=[];
async function performQuery(wikidataId) {

    query= 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE { ?disease  wdt:P279*'  + wikidataId + '; wdt:P924 ?possible_treatment. ?disease rdfs:label ?diseaseLabel. filter(lang(?diseaseLabel)=\'en\')?possible_treatment rdfs:label ?possible_treatmentLabel.filter(lang(?possible_treatmentLabel)=\'en\')SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". } } LIMIT 6'

   /*query = 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE { ?disease p:P279 ?statement0.?statement0 (ps:P279/(wdt:P279*))' + wikidataId +'.?disease wdt:P924 ?possible_treatment.?disease rdfs:label ?diseaseLabel. filter(lang(?diseaseLabel)=\'en\') ?possible_treatment rdfs:label ?possible_treatmentLabel.  filter(lang(?possible_treatmentLabel)=\'en\')SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". } } LIMIT 6'     complicated query*/ 

   /* query = 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE {?disease p:P279 ?statement0. ?statement0 (ps:P279/(wdt:P279*))'+ wikidataId +'.?disease wdt:P924 ?possible_treatment. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". }}' */    /* this query does not manually assign labels  */
    const url = wdk.sparqlQuery(query)
    const response = await fetch(url);
    const results = await response.json();
    const simpleResults = wdk.simplify.sparqlResults(results);
      data =  JSON.stringify(simpleResults, undefined, 0);     /* 2  NOT USING THIS ?!  --> number to determine white space into output of JSON string, doesn't seem to change anything in output on console ?' */ 
      object = JSON.parse(data)    /*  resolve data into its components parts */ 
     
     /* console.log(simpleResults)   gives same output as object   ?? */    

   
       console.log(simpleResults);   /* to view whole arrays 
    
     //for (let step = 0; step < 6; step++) {
  /* Runs n times, with values of step 0 through length of simpleresults -1 . */
  
   for (let step = 0; step < simpleResults.length-1; step++) {
  // Runs 6 times, with values of step 0 through 5.
  console.log(simpleResults[step]["disease"]["label"]); 
  queryData.push(simpleResults[step]["disease"]["label"]);  
  
      }
  return await queryData

}


 (async () => {
    /* await performQuery("wd:Q576349");
    brain = queryData;
    console.log(Brain) */
    /*queryData=simpleResults[0]["disease"]["label"];  */
 
    await performQuery("wd:Q190805")
    /*performQuery("wd:Q190805")*/
    heart = JSON.stringify(queryData, undefined, 0);
    console.log(queryData);
    queryData=[];

    await performQuery("wd:Q576349")
    /*performQuery("wd:Q576349")*/
    brain = JSON.stringify(queryData, undefined, 0);
    console.log(queryData);
    queryData=[];

    await performQuery("wd:Q3392853")
    /*performQuery("wd:Q3392853")*/
    lung = JSON.stringify(queryData, undefined, 0);
    console.log(queryData);
    queryData=[];

    await performQuery("wd:Q7314317")
    /*performQuery("wd:Q7314317")*/
    reproductivesystem = JSON.stringify(queryData, undefined, 0);
    console.log(queryData);
    queryData=[];

    await performQuery("wd:Q929737")
    /*performQuery("wd:Q929737")*/
    liver = JSON.stringify(queryData, undefined, 0);
     console.log(queryData);
    queryData=[];

    await performQuery("wd:Q175827")
    /*performQuery("wd:Q175827")*/
    stomach = JSON.stringify(queryData, undefined, 0);
     console.log(queryData);
    queryData=[];

    await performQuery("wd:Q949302")
    skin= JSON.stringify(queryData, undefined,0);
    console.log(queryData);
    queryData=[];

    await performQuery("wd:Q4941552")
    bones=JSON.stringify(queryData,undefined,0);
    console.log(queryData);
    queryData=[];

    await performQuery("wd:Q18971535")
    knee=JSON.stringify(queryData,undefined,0);
    console.log(queryData);
    queryData=[];

    await performQuery("wd:Q3055380")
    intestine=JSON.stringify(queryData,undefined,0);
    console.log(queryData);
    queryData=[];









    // all of the script.... //

    const xref = {
   
    Heart: {
        id: "wd:Q190805",
        content: heart 
    },

    Brain: {
        id: "wd:Q576349",
        content: brain


    },

    Lung: {
        id: "wd:Q3392853",
        content: lung

    },



    Knee: {
        id: "wd:Q18971535",
        content: knee
    },

    Reproductivesystem: {

         id: "wd:Q7314317",
         content: reproductivesystem

    },

    Liver: {

         id: "wd:Q929737",
         content: liver

    },

    Stomach: {
        id:"wd:Q175827",
        content: stomach


    },

    Skin: {
       id: "wd:Q949302",
       content: skin

    },

    Intestine: {
        id: "wd:Q3055380",
        content: intestine
    },

    Bones: {
        id:"wd:Q4941552",
        content: bones

    }
    
};


const image = $('#body_img');

image.mapster(
{
    fillOpacity: 0.4,
    fillColor: "d42e16",
    stroke: true,
    strokeColor: "3320FF",
    strokeOpacity: 0.8,
    strokeWidth: 4,
    singleSelect: true,
    mapKey: 'name',
    listKey: 'name',
    onClick: function (e) {
        
        // update text depending on area selected

         
        $('#selections').html(xref[e.key].content); 


       /* performQuery(xref[e.key].id) */
     

    }
    
});


}) ();


