document.getElementById("check-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value;
  const resultsDiv = document.getElementById("results-div");

  // Regular expressions for UK landline and mobile numbers
  const landlinePattern = /^(?:01|02)\d{8,9}$/; // Landline (e.g., 020 7946 0958, 0117 496 0123)
  const mobilePattern = /^07\d{9}$/; // Mobile (e.g., 07400 123456, 07900 123456)

  // Extended area code mapping to regions
  const areaCodes = {
    '020': 'London',
    '0117': 'Bristol',
    '0113': 'Leeds',
    '0114': 'Sheffield',
    '0115': 'Nottingham',
    '0121': 'Birmingham',
    '0131': 'Edinburgh',
    '0141': 'Glasgow',
    '0151': 'Liverpool',
    '0161': 'Manchester',
    '01792': 'Swansea',
    '0191': 'Newcastle',
    '01865': 'Oxford',
    '01223': 'Cambridge',
    '01752': 'Plymouth',
    '01202': 'Bournemouth',
    '01392': 'Exeter',
    '01733': 'Peterborough',
    '01782': 'Stoke-on-Trent',
    '01904': 'York',
    '01273': 'Brighton',
    '01483': 'Guildford',
    '01332': 'Derby',
    '01784': 'Staines',
    '01452': 'Gloucester',
    '01384': 'Dudley',
    '01273': 'Brighton',
    '01225': 'Bath',
    '01603': 'Norwich',
    '01908': 'Milton Keynes',
    '01706': 'Rochdale',
    '01244': 'Chester',
    '01224': 'Aberdeen',
    '01865': 'Oxford',
    '028': 'Northern Ireland',
    '029': 'Cardiff',
    '01382': 'Dundee',
    '01962': 'Winchester',
    '01723': 'Scarborough',
    '01743': 'Shrewsbury',
    '01803': 'Torquay',
    '01924': 'Wakefield',
    '01522': 'Lincoln',
    '01482': 'Hull',
    '01233': 'Ashford',
    '01772': 'Preston',
    '01539': 'Kendal',
    '01491': 'Henley-on-Thames',
    '01926': 'Warwick',
    '01295': 'Banbury',
    '01633': 'Newport',
    '01740': 'Sedgefield',
    '01386': 'Evesham',
    '01326': 'Falmouth',
    '01493': 'Great Yarmouth',
    '01905': 'Worcester',
    '01524': 'Lancaster',
    '01522': 'Lincoln',
    '01527': 'Redditch',
    '01604': 'Northampton',
    '01642': 'Middlesbrough',
    '01942': 'Wigan',
    '01227': 'Canterbury',
    '01273': 'Brighton',
    '01245': 'Chelmsford',
    '01375': 'Grays',
    '01708': 'Romford',
    '01206': 'Colchester',
    '01228': 'Carlisle',
    '01472': 'Grimsby',
    '01329': 'Fareham',
    '01707': 'Welwyn Garden City',
    '01925': 'Warrington',
    '01454': 'Thornbury',
    '01507': 'Louth',
    '01745': 'Rhyl',
    '01935': 'Yeovil',
    '01977': 'Pontefract',
    '01455': 'Hinckley',
    '01670': 'Morpeth',
    '01823': 'Taunton',
    '01726': 'St Austell',
    '01736': 'Penzance',
    '01782': 'Stoke-on-Trent',
    '01872': 'Truro',
    '01342': 'East Grinstead',
    '01376': 'Braintree',
    '01440': 'Haverhill',
    '01634': 'Rochester',
    '01795': 'Sittingbourne',
    '01903': 'Worthing',
    '01702': 'Southend-on-Sea',
    '01291': 'Chepstow',
    '01595': 'Shetland',
    '01905': 'Worcester',
    '01323': 'Eastbourne',
    '01628': 'Maidenhead',
    '01768': 'Penrith',
    '01778': 'Bourne',
    '01424': 'Hastings',
    '01793': 'Swindon',
    '0161': 'Manchester',
    '0151': 'Liverpool',
    '01642': 'Teesside',
    '01865': 'Oxford',
    // More area codes can be added
  };

  // Check if input is empty
  if (userInput.trim() === "") {
    alert("Please provide a phone number");
    return;
  }

  // Clean the input by removing spaces and dashes
  const cleanedInput = userInput.replace(/[\s-]/g, "");

  // Check if it matches landline or mobile pattern
  if (landlinePattern.test(cleanedInput)) {
    // Extract area code
    const areaCode = cleanedInput.substring(0, 5); // Get first 4 digits for checking
    let region = "Unknown region"; // Default if area code not found

    // Check if the first 4 digits match an area code
    if (areaCodes[areaCode]) {
      region = areaCodes[areaCode];
    } else if (areaCodes[cleanedInput.substring(0, 4)]) {
      region = areaCodes[cleanedInput.substring(0, 3)];
    } else if (areaCodes[cleanedInput.substring(0, 2)]) {
      region = areaCodes[cleanedInput.substring(0, 2)];
    }

    resultsDiv.textContent = `Valid UK landline number: ${userInput} This number is calling you from... ${region}`;
  } else if (mobilePattern.test(cleanedInput)) {
    resultsDiv.textContent = `Valid UK mobile number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid UK number: ${userInput}`;
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  // Clear the results-div content and the input field
  document.getElementById("results-div").textContent = "";
  document.getElementById("user-input").value = "";
});
