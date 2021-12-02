
//list contains objects which have atrribute disease and treatment 
async function performQuery(wikidataId) {

    query= 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE { ?disease  wdt:P279*'  + wikidataId + '; wdt:P924 ?possible_treatment. ?disease rdfs:label ?diseaseLabel. filter(lang(?diseaseLabel)=\'en\')?possible_treatment rdfs:label ?possible_treatmentLabel.filter(lang(?possible_treatmentLabel)=\'en\')SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". } } ORDER BY asc(?diseaseLabel)'
     /*query = 'SELECT DISTINCT ?disease ?diseaseLabel ?possible_treatment ?possible_treatmentLabel WHERE {?disease p:P279 ?statement0. ?statement0 (ps:P279/(wdt:P279*))'+ wikidataId +'.?disease wdt:P924 ?possible_treatment. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". }}' */
     const url = wdk.sparqlQuery(query) //
     const response = await fetch(url);
     const results = await response.json();// 
     const simpleResults = wdk.simplify.sparqlResults(results);
       /*data =  JSON.stringify(simpleResults, undefined, 2); 
       object = JSON.parse(data)*/

       /*Loop over query results and create an object for each disease with an array of treatments*/
    let j=0;
    const object0 = //intialises list for the loop to start so its not empty 
    {
    disease: simpleResults[0]["disease"]["label"],
    treatments: [simpleResults[0]["possible_treatment"]["label"]]
    }
    list.push(object0)
    for(let i = 1; i < simpleResults.length; i++)
    {
        while ( j < list.length)
        {
            if(simpleResults[i]["disease"]["label"]===list[j]["disease"])
            {
                list[j]["treatments"].push(simpleResults[i]["possible_treatment"]["label"])
                break;
            }
            else    
            {
                const object = {
                    disease: simpleResults[i]["disease"]["label"],
                    treatments: [simpleResults[i]["possible_treatment"]["label"]]
                }
                list.push(object)
                
                j++;
                break;
            }
        }
    }
    console.log(list)

    queryData = simpleResults 


    return await queryData, list 
       
    }


     /*  console.log( await performQuery()) ;    /* what is "await " for ? */
 
 // a cross reference of area names to text to be shown for each area

/*(async()=>{
    list = [];
    await performQuery("wd:Q190805")
    heart = list;

    list = [];
    await performQuery("wd:Q576349")
    brain = list;

    list = [];
    await performQuery("wd:Q3392853")
    lung = list;

    list = [];
    await performQuery("wd:Q7314317")
    reproductivesystem = list;

    list = [];
    await performQuery("wd:Q929737")
    liver = list;

    list = [];
    await performQuery("wd:Q175827")
    stomach = list;

    list = [];
    await performQuery("wd:Q5282137")
    foot = list;

    list = [];
    await performQuery("wd:Q3055380")
    intestine = list;

    list = [];
    await performQuery("wd:Q190805")
    trachea = list;

    list = [];
    await performQuery("wd:Q190805")
    ear = list;

    list = [];
    await performQuery("wd:Q190805")
    arm = list;

    list = [];
    await performQuery("wd:Q190805")
    eye = list;

    list = [];
    await performQuery("wd:Q190805")
    mouth = list;
    })();*/



