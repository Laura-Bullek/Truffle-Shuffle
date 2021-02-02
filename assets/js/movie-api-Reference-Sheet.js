// Documentation Link: https://developers.themoviedb.org/3/discover/movie-discover

// API key given by The Movie Database
const theMovieAPI = "13c21541869f280af7a13cd66a18fedc";
// The API URL for finding movies with the parameters "Genre" and "Release Year"
const theMovieURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + theMovieAPI + "&with_genres=" + movieGenreID + "&primary_release_year=" + movieReleaseYear + "&with_watch_providers=" + movieProviderID + "&watch_region=" + movieProviderRegion;
// The API URL for grabbing the images (Use with the "backdrop_path" and "poster_path" return data)
const theMoviePosterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + moviePosterPath;

// Important variables to keep track of
// var movieGenreID = "This is the Genre ID."
// var movieReleaseYear = "This is the movie's release year."
// var movieProviderID = "This is the watch provider's ID."
// var movieProviderRegion = "This is the user's region."


// Example URL (Seperate parameter inputs with comma "," for "And" and pipe "|" for "Or")
// This URL is searching for movies with the genres "Drama" and "Romance", as well as the release year being from 2010-2019
// https://api.themoviedb.org/3/discover/movie?api_key=13c21541869f280af7a13cd66a18fedc&with_genres=18,10749&primary_release_year=2010|2011|2012|2013|2014|2015|2016|2017|2018|2019

// Movie Genre IDs (Note: This is the official list given so there should not be any more available genres)
// {"genres":[
//     {"id":28,"name":"Action"},
//     {"id":12,"name":"Adventure"},
//     {"id":16,"name":"Animation"},
//     {"id":35,"name":"Comedy"},
//     {"id":80,"name":"Crime"},
//     {"id":99,"name":"Documentary"},
//     {"id":18,"name":"Drama"},
//     {"id":10751,"name":"Family"},
//     {"id":14,"name":"Fantasy"},
//     {"id":36,"name":"History"},
//     {"id":27,"name":"Horror"},
//     {"id":10402,"name":"Music"},
//     {"id":9648,"name":"Mystery"},
//     {"id":10749,"name":"Romance"},
//     {"id":878,"name":"Science Fiction"},
//     {"id":10770,"name":"TV Movie"},
//     {"id":53,"name":"Thriller"},
//     {"id":10752,"name":"War"},
//     {"id":37,"name":"Western"}
// ]}

// Watch Provider IDs (Note: This is not all of the available providers, this is just as much as different providers I could find using a sample request)
// {"Providers":[
//     {"provider_id":2,"provider_name":"Apple iTunes"},            
//     {"provider_id":3, "provider_name":"Google Play Movies"},
//     {"provider_id":7,"provider_name":"Vudu"},
//     {"provider_id":8, "provider_name":"Netflix"},
//     {"provider_id":10,"provider_name":"Amazon Video"},
//     {"provider_id":15,"provider_name":"Hulu"},
//     {"provider_id":20,"provider_name":"maxdome Store"},
//     {"provider_id":29,"provider_name":"Sky Go"},
//     {"provider_id":35,"provider_name":"Rakuten TV"},
//     {"provider_id":40,"provider_name":"Chili"},
//     {"provider_id":68,"provider_name":"Microsoft Store"},
//     {"provider_id":105,"provider_name":"FandangoNOW"},
//     {"provider_id":109,"provider_name":"Timvision"},
//     {"provider_id":113,"provider_name":"Ivi"},
//     {"provider_id":115,"provider_name":"Okko"},
//     {"provider_id":119,"provider_name":"Amazon Prime Video"},
//     {"provider_id":122,"provider_name":"Hotstar"},
//     {"provider_id":150,"provider_name":"SwissCom"},
//     {"provider_id":167,"provider_name":"Claro video"},
//     {"provider_id":192,"provider_name":"YouTube"},
//     {"provider_id":250,"provider_name":"Horizon"},
//     {"provider_id":273,"provider_name":"Neon TV"},
//     {"provider_id":299,"provider_name":"Sling TV"},
//     {"provider_id":337,"provider_name":"Disney Plus"},
//     {"provider_id":339,"provider_name":"Movistar Play"},
//     {"provider_id":356,"provider_name":"wavve"},
//     {"provider_id":358,"provider_name":"DIRECTV"},
//     {"provider_id":423,"provider_name":"Blockbuster"},
//     {"provider_id":425,"provider_name":"HBO Go"},
// ]}

// Watch Providers Region Codes (Note: This is not all of the available provider regions. This is all that I got from the sample request.)
// {"Regions":[
        // AR:
        // AT:
        // AU: Australia(?)
        // BE:
        // BR:
        // CA:
        // CH:
        // CL:
        // CO:
        // CZ:
        // DE: Germany(?)
        // DK:
        // EC:
        // EE:
        // ES: Spain(?)
        // FI:
        // FR: France
        // GB:
        // HU:
        // ID: Indonesia(?)
        // IE:
        // IN: India(?)
        // IT: Italy(?)
        // JP: Japan
        // KR: Korea
        // LT:
        // LV:
        // MX:
        // MY:
        // NL:
        // NO:
        // NZ: New Zealand(?)
        // PE:
        // PH: Philippines(?)
        // PL:
        // PT:
        // RO:
        // RU:
        // SE:
        // SG:
        // TH:
        // TR:
        // US: United States
        // VE:
        // ZA:
// ]}

// Example on how to read the returned information: To grab movie title (Note, "response" is your custom variable!) -> response.results[i].original_title
// Sample Response using the below Example URL 
// https://api.themoviedb.org/3/discover/movie?api_key=13c21541869f280af7a13cd66a18fedc&with_genres=18&primary_release_year=2014
// {"page":1,
// "results":[
    //     {
        //     "adult":false,
        //     "backdrop_path":"/cHvwgJPaT59H1HiQsvBrGD5I46g.jpg",
        //     "genre_ids":[28,18,878],
        //     "id":124905,
        //     "original_language":"en",
        //     "original_title":"Godzilla",
        //     "overview":"Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when an ancient alpha predator arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.",
        //     "popularity":313.222,
        //     "poster_path":"/iBZhbCVhLpyxAfW1B8ePUxjScrx.jpg",
        //     "release_date":"2014-05-14",
        //     "title":"Godzilla",
        //     "video":false,
        //     "vote_average":6.2,
        //     "vote_count":6445
    //     },

    //     {"adult":false,"backdrop_path":"/xJHokMbljvjADYdit5fK5VQsXEG.jpg","genre_ids":[12,18,878],"id":157336,"original_language":"en","original_title":"Interstellar","overview":"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.","popularity":99.378,"poster_path":"/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg","release_date":"2014-11-05","title":"Interstellar","video":false,"vote_average":8.3,"vote_count":24907},
    //     {"adult":false,"backdrop_path":"/1uKHoFWyYJn060dpIXUCU7Wbc15.jpg","genre_ids":[10752,18,28],"id":228150,"original_language":"en","original_title":"Fury","overview":"In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.","popularity":79.963,"poster_path":"/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg","release_date":"2014-10-15","title":"Fury","video":false,"vote_average":7.5,"vote_count":8749},
    //     {"adult":false,"backdrop_path":"/hwowjWNnBc7PKZNDHQyLfvywzVY.jpg","genre_ids":[12,18,28],"id":147441,"original_language":"en","original_title":"Exodus: Gods and Kings","overview":"The defiant leader Moses rises up against the Egyptian Pharaoh Ramses, setting 400,000 slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues.","popularity":64.815,"poster_path":"/uaDj37JtvLan9tihxZ18e6qL33b.jpg","release_date":"2014-12-03","title":"Exodus: Gods and Kings","video":false,"vote_average":5.8,"vote_count":3558},
    //     {"adult":false,"backdrop_path":"/zlU8BIkgY7E6SMfD3USTWC6bchL.jpg","genre_ids":[878,28,18,53],"id":119450,"original_language":"en","original_title":"Dawn of the Planet of the Apes","overview":"A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.","popularity":56.454,"poster_path":"/ie14Sm0hRI5f7Te2KIfU64NyCPr.jpg","release_date":"2014-06-26","title":"Dawn of the Planet of the Apes","video":false,"vote_average":7.3,"vote_count":8536},
    //     {"adult":false,"backdrop_path":"/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg","genre_ids":[9648,53,18],"id":210577,"original_language":"en","original_title":"Gone Girl","overview":"With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.","popularity":38.056,"poster_path":"/qymaJhucquUwjpb8oiqynMeXnID.jpg","release_date":"2014-10-01","title":"Gone Girl","video":false,"vote_average":7.9,"vote_count":13747},
    //     {"adult":false,"backdrop_path":"/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg","genre_ids":[18,10402],"id":244786,"original_language":"en","original_title":"Whiplash","overview":"Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.","popularity":42.35,"poster_path":"/9E949mB5NEq3BZu9nHQgWF2uGGN.jpg","release_date":"2014-10-10","title":"Whiplash","video":false,"vote_average":8.4,"vote_count":10631},
    //     {"adult":false,"backdrop_path":"/isrro0soStk2tSWMsI50lPPhUsU.jpg","genre_ids":[80,18,9648,53],"id":169917,"original_language":"en","original_title":"A Walk Among the Tombstones","overview":"Private investigator Matthew Scudder is hired by a drug kingpin to find out who kidnapped and murdered his wife.","popularity":38.137,"poster_path":"/bQTHTZezSudf27mMQtedHf1XpgO.jpg","release_date":"2014-09-18","title":"A Walk Among the Tombstones","video":false,"vote_average":6.3,"vote_count":2103},
    //     {"adult":false,"backdrop_path":"/oQaVV7p916HO5MDI820zzs1pin9.jpg","genre_ids":[10749,18],"id":222935,"original_language":"en","original_title":"The Fault in Our Stars","overview":"Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.","popularity":33.814,"poster_path":"/clmvI4B5JB2ToPGtiHodaLMFaoM.jpg","release_date":"2014-05-16","title":"The Fault in Our Stars","video":false,"vote_average":7.6,"vote_count":9147},
    //     {"adult":false,"backdrop_path":"/chjkfyo57JexWo1YeIZRMk8wA4m.jpg","genre_ids":[28,18],"id":53182,"original_language":"en","original_title":"300: Rise of an Empire","overview":"Greek general Themistokles attempts to unite all of Greece by leading the charge that will change the course of the war. Themistokles faces the massive invading Persian forces led by mortal-turned-god, Xerxes and Artemesia, the vengeful commander of the Persian navy.","popularity":36.471,"poster_path":"/7lqsbSbSJVU5jYVso1j3lvC9Ehu.jpg","release_date":"2014-03-05","title":"300: Rise of an Empire","video":false,"vote_average":6.1,"vote_count":4947},
    //     {"adult":false,"backdrop_path":"/sixfWYfNegaGGHKdXrNNUHaMiAC.jpg","genre_ids":[36,18,53,10752],"id":205596,"original_language":"en","original_title":"The Imitation Game","overview":"Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.","popularity":43.34,"poster_path":"/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg","release_date":"2014-11-14","title":"The Imitation Game","video":false,"vote_average":8,"vote_count":13117},
    //     {"adult":false,"backdrop_path":"/syVAWAnY6fTBDDFntHsM8vFjKex.jpg","genre_ids":[28,80,18,53],"id":136797,"original_language":"en","original_title":"Need for Speed","overview":"The film revolves around a local street-racer who partners with a rich and arrogant business associate, only to find himself framed by his colleague and sent to prison. After he gets out, he joins a New York-to-Los Angeles race to get revenge. But when the ex-partner learns of the scheme, he puts a massive bounty on the racer's head, forcing him to run a cross-country gauntlet of illegal racers in all manner of supercharged vehicles.","popularity":39.427,"poster_path":"/z42kyMizgDKetejusZgucSQsQ4l.jpg","release_date":"2014-03-13","title":"Need for Speed","video":false,"vote_average":6.3,"vote_count":3147},
    //     {"adult":false,"backdrop_path":"/axUX7urQDwCGQ9qbgh2Yys7qY9J.jpg","genre_ids":[16,18],"id":242828,"original_language":"ja","original_title":"思い出のマーニー","overview":"Upon being sent to live with relatives in the countryside due to an illness, an emotionally distant adolescent girl becomes obsessed with an abandoned mansion and infatuated with a girl who lives there - a girl who may or may not be real.","popularity":36.34,"poster_path":"/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg","release_date":"2014-07-19","title":"When Marnie Was There","video":false,"vote_average":8,"vote_count":1106},
    //     {"adult":false,"backdrop_path":"/3kEfSOwBYhb11APEG0aUDysvW8F.jpg","genre_ids":[80,18,53],"id":242582,"original_language":"en","original_title":"Nightcrawler","overview":"When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.","popularity":34.226,"poster_path":"/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg","release_date":"2014-10-23","title":"Nightcrawler","video":false,"vote_average":7.7,"vote_count":7744},
    //     {"adult":false,"backdrop_path":"/bQSfsZDaBWZCHI8Z2nrN1hkR6EG.jpg","genre_ids":[35,27,18,53],"id":246403,"original_language":"en","original_title":"Tusk","overview":"When his best friend and podcast co-host goes missing in the backwoods of Canada, a young guy joins forces with his friend's girlfriend to search for him.","popularity":23.422,"poster_path":"/pA2SgITmH0lzet9Nn5cxeinRKMv.jpg","release_date":"2014-09-06","title":"Tusk","video":false,"vote_average":5.3,"vote_count":839},
    //     {"adult":false,"backdrop_path":null,"genre_ids":[10749,16,18],"id":448441,"original_language":"ja","original_title":"劇場版 世界一初恋 -横澤隆史の場合-","overview":"Yokozawa meets a man (Kirishima) and his life is turned around. Kirishima starts to blackmail and tease Yokozawa, but Kirishima might actually be trying to help him recover from an emotional period of his life in the process.","popularity":32.744,"poster_path":null,"release_date":"2014-03-15","title":"Sekaiichi Hatsukoi Movie","video":false,"vote_average":7,"vote_count":11},
    //     {"adult":false,"backdrop_path":"/foHNouNDJluHhXOEvztd6cJIqn1.jpg","genre_ids":[10749,18],"id":283727,"original_language":"ja","original_title":"アオハライド","overview":"When she was a middle school student, Futaba Yoshioka liked Kou Tanaka who was unlike the other boys and quite gentle. Kou Tanaka then moved away and they lost contact.  At the end of Futaba Yoshioka's first year as a high school student she meets Kou Tanaka again. Kou Tanaka’s name has changed to Kou Mabuchi and his personality seems different from his middle school days.","popularity":25.463,"poster_path":"/8ic3JNoQVPTGtOwgUeTWu09mmNl.jpg","release_date":"2014-12-13","title":"Blue Spring Ride","video":false,"vote_average":6.6,"vote_count":40},
    //     {"adult":false,"backdrop_path":"/sMAv1YV6bCuy3lnzqXPdrCkIv7e.jpg","genre_ids":[18,12,28],"id":302666,"original_language":"en","original_title":"10.0 Earthquake","overview":"Los Angeles is about to be hit by a devastating earthquake, and time is running out to save the city from imminent danger.","popularity":28.21,"poster_path":"/92x7FzJJmRes04vZNneufcDZkPj.jpg","release_date":"2014-10-15","title":"10.0 Earthquake","video":false,"vote_average":4.8,"vote_count":74},
    //     {"adult":false,"backdrop_path":"/56jkKfItg1yjRu1OJwStxE1mqFA.jpg","genre_ids":[18],"id":249164,"original_language":"en","original_title":"If I Stay","overview":"Mia Hall, a talented young cellist, thought the most difficult decision she would ever have to make would be whether to pursue her musical dreams at prestigious Juilliard or follow her heart to be with the love of her life, Adam, a rock singer/guitarist. However, a car wreck changes everything in an instant, and now Mia's life hangs in the balance. Suspended between life and death, Mia faces a choice that will decide her future.","popularity":24.591,"poster_path":"/7Twh8h3Wh7GC9npTAEUThgkxkWL.jpg","release_date":"2014-08-21","title":"If I Stay","video":false,"vote_average":7.4,"vote_count":3513},
    //     {"adult":false,"backdrop_path":"/2Pe9zcZRmmV3WqWwNCUWmXbHSK2.jpg","genre_ids":[18,80],"id":154400,"original_language":"en","original_title":"The Drop","overview":"Bob Saginowski finds himself at the center of a robbery gone awry and entwined in an investigation that digs deep into the neighborhood's past where friends, families, and foes all work together to make a living - no matter the cost.","popularity":29.854,"poster_path":"/tISeGHqQTzL91FVf8y6wyDU3TIO.jpg","release_date":"2014-09-12","title":"The Drop","video":false,"vote_average":6.7,"vote_count":1559}
// ],
// "total_pages":212,
// "total_results":4235
// }


// let cocktailCall = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//     $.ajax({
//         url: cocktailCall,
//         method: "GET"
//     }).then(function (cocktail) {
//         console.log(cocktail);
//         console.log("Drink name: " + cocktail.drinks[0].strDrink);
//         console.log("Glass needed: " + cocktail.drinks[0].strGlass);
//         console.log("Drink image is at: " + cocktail.drinks[0].strDrinkThumb);
//         console.log("Ingredient 1: " + cocktail.drinks[0].strIngredient1);
//         console.log("Ingredient 2: " + cocktail.drinks[0].strIngredient1);
//         console.log("Ingredient 3: " + cocktail.drinks[0].strIngredient1);
//         console.log("Ingredient 4: " + cocktail.drinks[0].strIngredient1);
//         console.log("Instructions: " + cocktail.drinks[0].strInstructions);
//         console.log("First Measurement: " + cocktail.drinks[0].strMeasure1);
//         console.log("Second Measurement: " + cocktail.drinks[0].strMeasure2);
//         console.log("Third Measurement: " + cocktail.drinks[0].strMeasure3);
//         console.log("Forth Measurement: " + cocktail.drinks[0].strMeasure4);
//     })
// })