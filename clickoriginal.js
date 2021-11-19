const performQuery=async(wikidataId)=> {

 wd = 'wd:Q576349.'
    query = 'SELECT DISTINCT ?brain_disease ?brain_diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE {?brain_disease p:P279 ?statement0. ?statement0 (ps:P279/(wdt:P279*))'+ wikidataId +'.?brain_disease wdt:P924 ?possible_treatment. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". }}'
    const url = wdk.sparqlQuery(query)
const response = await fetch(url);
      const results = await response.json();
      const simpleResults = wdk.simplify.sparqlResults(results);
      data =  JSON.stringify(simpleResults, undefined, 0);
      object = JSON.parse(data)

    
      console.log(object)
      console.log(object[0]['brain_disease']['label'])


   }

// a cross reference of area names to text to be shown for each area
const xref = {
    carrots: "<b>Carrots</b> are delicious and may turn your skin orange!",
    asparagus: "<b>Asparagus</b> is one of the first vegetables of the spring. " 
        +"Being a dark green, it's great for you, and has interesting side effects.",
    squash: "<b>Squash</b> is a winter vegetable, and not eaten raw too much. Is that really squash?",
    brain: {
        id: "wd:Q576349",
        content: "<b>brain</b> are actually the same as green peppers, they've just been left on "
        +"the vine longer. Delicious when fire-roasted."


    } ,
    yellowpepper: "Similar to red peppers, <b>yellow peppers</b> are sometimes sweeter.",
    celery: "<b>Celery</b> is a fascinating vegetable. Being mostly water, it actually takes your body "
        +"more calories to process it than it provides.",
    cucumbers: "<b>Cucumbers</b> are cool.",
    broccoli: "<b>Broccoli</b> is like a forest of goodness in your mouth. And very good for you. "
        +"Eat lots of broccoli!",
    dip: "Everything here is good for you but this one. <b>Don't be a dip!</b>" 
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
    },
    areas: [
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
        ]
});