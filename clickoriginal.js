let queryData = [];
async function performQuery(wikidataId) {


    query = 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE { ?disease p:P279 ?statement0.?statement0 (ps:P279/(wdt:P279*))' + wikidataId +'.?disease wdt:P924 ?possible_treatment.?disease rdfs:label ?diseaseLabel. filter(lang(?diseaseLabel)=\'en\') ?possible_treatment rdfs:label ?possible_treatmentLabel.  filter(lang(?possible_treatmentLabel)=\'en\')SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". } }' 
 
     /*query = 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE {?disease p:P279 ?statement0. ?statement0 (ps:P279/(wdt:P279*))'+ wikidataId +'.?disease wdt:P924 ?possible_treatment. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". }}' */
     const url = wdk.sparqlQuery(query)
     const response = await fetch(url);
     const results = await response.json();
     const simpleResults = wdk.simplify.sparqlResults(results);
       data =  JSON.stringify(simpleResults, undefined, 2); 
       object = JSON.parse(data)
     queryData = simpleResults
      /* console.log(object)  
       /* return object           /* this is not getting returned */
       console.log(queryData[0]["disease"]["label"])
    return await queryData
       
    }


     /*  console.log( await performQuery()) ;    /* what is "await " for ? */
 
 // a cross reference of area names to text to be shown for each area
(async()=>{

    await performQuery("wd:Q190805")
    performQuery("wd:Q190805")
    heart = queryData[0]["disease"]["label"];

    await performQuery("wd:Q576349")
    performQuery("wd:Q576349")
    brain = queryData[0]["disease"]["label"];

    await performQuery("wd:Q3392853")
    performQuery("wd:Q3392853")
    lung = queryData[0]["disease"]["label"];

    await performQuery("wd:Q18971535")
    performQuery("wd:Q18971535")
    reproductivesystem = queryData[0]["disease"]["label"];

    await performQuery("wd:Q929737")
    performQuery("wd:Q929737")
    liver = queryData[0]["disease"]["label"];

    await performQuery("wd:Q175827")
    performQuery("wd:Q175827")
    stomach = queryData[0]["disease"]["label"];

 const xref = {
    
     Heart: {
         id: "wd:Q190805",
         content:  heart
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
         content: "<b>knee</b> is very fat."
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
        content: "<b>skin </b> is scratched"
 
     },
 
     Intestine: {
         id: "wd:Q3055380",
         content: "<b>intestines </b> is scrad"
     },
 
     Bones: {
         id:"wd:Q4941552",
         content: "<b>intestines </b> is scrad"
 
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
         console.log(queryData)
         $('#selections').html(xref[e.key].content); 
        
         
     }})
    })();