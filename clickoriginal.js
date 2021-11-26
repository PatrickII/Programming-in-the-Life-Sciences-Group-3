const performQuery=async(wikidataId)=> {


   query = 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE { ?disease p:P279 ?statement0.?statement0 (ps:P279/(wdt:P279*))' + wikidataId +'.?disease wdt:P924 ?possible_treatment.?disease rdfs:label ?diseaseLabel. filter(lang(?diseaseLabel)=\'en\') ?possible_treatment rdfs:label ?possible_treatmentLabel.  filter(lang(?possible_treatmentLabel)=\'en\')SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". } }' 

    /*query = 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE {?disease p:P279 ?statement0. ?statement0 (ps:P279/(wdt:P279*))'+ wikidataId +'.?disease wdt:P924 ?possible_treatment. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". }}' */
    const url = wdk.sparqlQuery(query)
    const response = await fetch(url);
    const results = await response.json();
    const simpleResults = wdk.simplify.sparqlResults(results);
      data =  JSON.stringify(simpleResults, undefined, 2); 
      object = JSON.parse(data)

      console.log(object)  
      /* return object           /* this is not getting returned */

      
   }

    /*  console.log( await performQuery()) ;    /* what is "await " for ? */

// a cross reference of area names to text to be shown for each area
const xref = {
   
    Heart: {
        id: "wd:Q190805",
        content: "fuuuuuuuuucckkkk"
    },

    Brain: {
        id: "wd:Q576349",
        content: "<b>brain</b> is dumb."


    },

    Lung: {
        id: "wd:Q3392853",
        content: "<b>lung</b> are infected with COVID-19"

    },



    Knee: {
        id: "wd:Q18971535",
        content: "<b>knee</b> is very fat."
    },

    Reproductivesystem: {

         id: "wd:Q7314317",
         content: "<b>reproductive system </b>  male or female ."

    },

    Liver: {

         id: "wd:Q929737",
         content: "<b>liver </b>  is damaged by alcohol"

    },

    Stomach: {
        id:"wd:Q175827",
        content: "<b>stomach </b> is empty"


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
        $('#selections').html(xref[e.key].content); 
        performQuery(xref[e.key].id)
      /*  function askStefan(){insert answer} */

       /*  $('#selections2').performQuery(xref[e.key].id.object);  */
    },
    /*areas: [
        {
            key: "brain",
            fillColor: "ffffff"
        },
        {
            key: "yellowpepper",
            fillColor: "000000"
        },
        {
            key: "carrots",
            fillColor: "000000"
        },
        {
            key: "asparagus",
            strokeColor: "FFFFFF"
        } 
        ]                    what was this part for ? */
});