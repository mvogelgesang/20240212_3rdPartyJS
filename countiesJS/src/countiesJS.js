// source https://en.wikipedia.org/wiki/List_of_United_States_counties_and_county_equivalents
const counties = [
  {
    "CountyorEq": "Autauga",
    "StateorEq": "Alabama",
    "Population": "58,805",
    "Area": 594.44,
    "StatisticalArea": "Montgomery, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Baldwin",
    "StateorEq": "Alabama",
    "Population": "231,767",
    "Area": 1589.78,
    "StatisticalArea": "Daphne-Fairhope-Foley, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Barbour",
    "StateorEq": "Alabama",
    "Population": "25,223",
    "Area": 884.88,
    "StatisticalArea": "Eufaula, AL-GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bibb",
    "StateorEq": "Alabama",
    "Population": "22,293",
    "Area": 622.58,
    "StatisticalArea": "Birmingham-Hoover, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Blount",
    "StateorEq": "Alabama",
    "Population": "59,134",
    "Area": 644.78,
    "StatisticalArea": "Birmingham-Hoover, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bullock",
    "StateorEq": "Alabama",
    "Population": "10,357",
    "Area": 622.8,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Alabama",
    "Population": "19,051",
    "Area": 776.83,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Alabama",
    "Population": "116,441",
    "Area": 605.87,
    "StatisticalArea": "Anniston-Oxford-Jacksonville, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chambers",
    "StateorEq": "Alabama",
    "Population": "34,772",
    "Area": 596.53,
    "StatisticalArea": "LaGrange, GA-AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "Alabama",
    "Population": "24,971",
    "Area": 553.7,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chilton",
    "StateorEq": "Alabama",
    "Population": "45,014",
    "Area": 692.85,
    "StatisticalArea": "Birmingham-Hoover, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Choctaw",
    "StateorEq": "Alabama",
    "Population": "12,665",
    "Area": 913.5,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clarke",
    "StateorEq": "Alabama",
    "Population": "23,087",
    "Area": 1238.46,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Alabama",
    "Population": "14,236",
    "Area": 603.96,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cleburne",
    "StateorEq": "Alabama",
    "Population": "15,056",
    "Area": 560.1,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Coffee",
    "StateorEq": "Alabama",
    "Population": "53,465",
    "Area": 678.97,
    "StatisticalArea": "Enterprise, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Colbert",
    "StateorEq": "Alabama",
    "Population": "57,227",
    "Area": 592.62,
    "StatisticalArea": "Florence-Muscle Shoals, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Conecuh",
    "StateorEq": "Alabama",
    "Population": "11,597",
    "Area": 850.16,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Coosa",
    "StateorEq": "Alabama",
    "Population": "10,387",
    "Area": 650.93,
    "StatisticalArea": "Alexander City, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Covington",
    "StateorEq": "Alabama",
    "Population": "37,570",
    "Area": 1030.46,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crenshaw",
    "StateorEq": "Alabama",
    "Population": "13,194",
    "Area": 608.84,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cullman",
    "StateorEq": "Alabama",
    "Population": "87,866",
    "Area": 734.84,
    "StatisticalArea": "Cullman, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dale",
    "StateorEq": "Alabama",
    "Population": "49,326",
    "Area": 561.15,
    "StatisticalArea": "Ozark, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dallas",
    "StateorEq": "Alabama",
    "Population": "38,462",
    "Area": 978.69,
    "StatisticalArea": "Selma, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeKalb",
    "StateorEq": "Alabama",
    "Population": "71,608",
    "Area": 777.09,
    "StatisticalArea": "Fort Payne, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Elmore",
    "StateorEq": "Alabama",
    "Population": "87,977",
    "Area": 618.48,
    "StatisticalArea": "Montgomery, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Escambia",
    "StateorEq": "Alabama",
    "Population": "36,757",
    "Area": 945.08,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Etowah",
    "StateorEq": "Alabama",
    "Population": "103,436",
    "Area": 534.99,
    "StatisticalArea": "Gadsden, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Alabama",
    "Population": "16,321",
    "Area": 627.66,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Alabama",
    "Population": "32,113",
    "Area": 633.82,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Geneva",
    "StateorEq": "Alabama",
    "Population": "26,659",
    "Area": 574.41,
    "StatisticalArea": "Dothan, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Alabama",
    "Population": "7,730",
    "Area": 647.11,
    "StatisticalArea": "Tuscaloosa, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hale",
    "StateorEq": "Alabama",
    "Population": "14,785",
    "Area": 643.94,
    "StatisticalArea": "Tuscaloosa, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Alabama",
    "Population": "17,146",
    "Area": 561.75,
    "StatisticalArea": "Dothan, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Houston",
    "StateorEq": "Alabama",
    "Population": "107,202",
    "Area": 579.82,
    "StatisticalArea": "Dothan, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Alabama",
    "Population": "52,579",
    "Area": 1077.87,
    "StatisticalArea": "Scottsboro, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Alabama",
    "Population": "674,721",
    "Area": 1111.28,
    "StatisticalArea": "Birmingham-Hoover, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lamar",
    "StateorEq": "Alabama",
    "Population": "13,972",
    "Area": 604.85,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lauderdale",
    "StateorEq": "Alabama",
    "Population": "93,564",
    "Area": 667.7,
    "StatisticalArea": "Florence-Muscle Shoals, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Alabama",
    "Population": "33,073",
    "Area": 690.68,
    "StatisticalArea": "Decatur, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Alabama",
    "Population": "174,241",
    "Area": 607.54,
    "StatisticalArea": "Auburn-Opelika, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Limestone",
    "StateorEq": "Alabama",
    "Population": "103,570",
    "Area": 559.94,
    "StatisticalArea": "Huntsville, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lowndes",
    "StateorEq": "Alabama",
    "Population": "10,311",
    "Area": 715.91,
    "StatisticalArea": "Montgomery, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Macon",
    "StateorEq": "Alabama",
    "Population": "19,532",
    "Area": 608.89,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Alabama",
    "Population": "388,153",
    "Area": 801.59,
    "StatisticalArea": "Huntsville, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marengo",
    "StateorEq": "Alabama",
    "Population": "19,323",
    "Area": 976.88,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Alabama",
    "Population": "29,341",
    "Area": 742.29,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Alabama",
    "Population": "97,612",
    "Area": 565.84,
    "StatisticalArea": "Albertville, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mobile",
    "StateorEq": "Alabama",
    "Population": "414,809",
    "Area": 1229.44,
    "StatisticalArea": "Mobile, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Alabama",
    "Population": "19,772",
    "Area": 1025.67,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Alabama",
    "Population": "228,954",
    "Area": 784.25,
    "StatisticalArea": "Montgomery, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Alabama",
    "Population": "123,421",
    "Area": 579.34,
    "StatisticalArea": "Decatur, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Alabama",
    "Population": "8,511",
    "Area": 719.66,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pickens",
    "StateorEq": "Alabama",
    "Population": "19,123",
    "Area": 881.41,
    "StatisticalArea": "Tuscaloosa, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Alabama",
    "Population": "33,009",
    "Area": 672.09,
    "StatisticalArea": "Troy, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "Alabama",
    "Population": "21,967",
    "Area": 580.55,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Russell",
    "StateorEq": "Alabama",
    "Population": "59,183",
    "Area": 641.14,
    "StatisticalArea": "Columbus, GA-AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Clair",
    "StateorEq": "Alabama",
    "Population": "91,103",
    "Area": 631.9,
    "StatisticalArea": "Birmingham-Hoover, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Alabama",
    "Population": "223,024",
    "Area": 784.93,
    "StatisticalArea": "Birmingham-Hoover, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sumter",
    "StateorEq": "Alabama",
    "Population": "12,345",
    "Area": 903.89,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Talladega",
    "StateorEq": "Alabama",
    "Population": "82,149",
    "Area": 736.78,
    "StatisticalArea": "Talladega-Sylacauga, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tallapoosa",
    "StateorEq": "Alabama",
    "Population": "41,311",
    "Area": 716.52,
    "StatisticalArea": "Alexander City, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tuscaloosa",
    "StateorEq": "Alabama",
    "Population": "227,036",
    "Area": 1321.75,
    "StatisticalArea": "Tuscaloosa, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Walker",
    "StateorEq": "Alabama",
    "Population": "65,342",
    "Area": 791.19,
    "StatisticalArea": "Jasper, AL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Alabama",
    "Population": "15,388",
    "Area": 1080.21,
    "StatisticalArea": "Mobile, AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilcox",
    "StateorEq": "Alabama",
    "Population": "10,600",
    "Area": 888.5,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Winston",
    "StateorEq": "Alabama",
    "Population": "23,540",
    "Area": 612.98,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Aleutians East Borough[d]",
    "StateorEq": "Alaska",
    "Population": "3,420",
    "Area": 6985,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Aleutians West Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "5,232",
    "Area": 4393,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Anchorage, Municipality of[d][f]",
    "StateorEq": "Alaska",
    "Population": "291,247",
    "Area": 1707,
    "StatisticalArea": "Anchorage, AK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bethel Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "18,666",
    "Area": 40627,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bristol Bay Borough[d]",
    "StateorEq": "Alaska",
    "Population": 844,
    "Area": 482,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chugach Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "7,102",
    "Area": 9530,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Copper River Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "2,617",
    "Area": 24692,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Denali Borough[d]",
    "StateorEq": "Alaska",
    "Population": "1,619",
    "Area": 12641,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dillingham Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "4,857",
    "Area": 18334,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fairbanks North Star Borough[d]",
    "StateorEq": "Alaska",
    "Population": "95,655",
    "Area": 7335,
    "StatisticalArea": "Fairbanks, AK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Haines Borough[d]",
    "StateorEq": "Alaska",
    "Population": "2,080",
    "Area": 2343,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hoonah–Angoon Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "2,365",
    "Area": 6555,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Juneau, City and Borough of[d][g]",
    "StateorEq": "Alaska",
    "Population": "32,255",
    "Area": 2704,
    "StatisticalArea": "Juneau, AK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kenai Peninsula Borough[d]",
    "StateorEq": "Alaska",
    "Population": "58,799",
    "Area": 16017,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ketchikan Gateway Borough[d]",
    "StateorEq": "Alaska",
    "Population": "13,948",
    "Area": 4857,
    "StatisticalArea": "Ketchikan, AK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kodiak Island Borough[d]",
    "StateorEq": "Alaska",
    "Population": "13,101",
    "Area": 6689,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kusilvak Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "8,368",
    "Area": 17077,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lake and Peninsula Borough[d]",
    "StateorEq": "Alaska",
    "Population": "1,476",
    "Area": 23832,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Matanuska-Susitna Borough[d]",
    "StateorEq": "Alaska",
    "Population": "107,081",
    "Area": 24707,
    "StatisticalArea": "Anchorage, AK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nome Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "10,046",
    "Area": 22969,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "North Slope Borough[d]",
    "StateorEq": "Alaska",
    "Population": "11,031",
    "Area": 88824,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Northwest Arctic Borough[d]",
    "StateorEq": "Alaska",
    "Population": "7,793",
    "Area": 35663,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Petersburg Borough[d][h]",
    "StateorEq": "Alaska",
    "Population": "3,398",
    "Area": 2901,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Prince of Wales – Hyder Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "5,753",
    "Area": 5268,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sitka, City and Borough of[d][i]",
    "StateorEq": "Alaska",
    "Population": "8,458",
    "Area": 2870,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Skagway, Municipality of[d]",
    "StateorEq": "Alaska",
    "Population": "1,240",
    "Area": 434,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Southeast Fairbanks Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "6,808",
    "Area": 24831,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wrangell, City and Borough of[d]",
    "StateorEq": "Alaska",
    "Population": "2,127",
    "Area": 2556,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yakutat, City and Borough of[d][j]",
    "StateorEq": "Alaska",
    "Population": 662,
    "Area": 7623,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yukon–Koyukuk Census Area[e]",
    "StateorEq": "Alaska",
    "Population": "5,343",
    "Area": 145576,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Eastern District[12]",
    "StateorEq": "American Samoa",
    "Population": "17,059",
    "Area": 25.69,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Manu'a District[12]",
    "StateorEq": "American Samoa",
    "Population": 832,
    "Area": 22.29,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rose Atoll (Rose Island)[12]",
    "StateorEq": "American Samoa",
    "Population": 0,
    "Area": 0.02,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Swains Island[12]",
    "StateorEq": "American Samoa",
    "Population": 0,
    "Area": 0.94,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Western District[12]",
    "StateorEq": "American Samoa",
    "Population": "31,819",
    "Area": 27.51,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Apache",
    "StateorEq": "Arizona",
    "Population": "66,021",
    "Area": 11218,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cochise",
    "StateorEq": "Arizona",
    "Population": "125,447",
    "Area": 6219,
    "StatisticalArea": "Sierra Vista-Douglas, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coconino",
    "StateorEq": "Arizona",
    "Population": "145,101",
    "Area": 18661,
    "StatisticalArea": "Flagstaff, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gila",
    "StateorEq": "Arizona",
    "Population": "53,272",
    "Area": 4796,
    "StatisticalArea": "Payson, AZ Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Graham",
    "StateorEq": "Arizona",
    "Population": "38,533",
    "Area": 4641,
    "StatisticalArea": "Safford, AZ Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greenlee",
    "StateorEq": "Arizona",
    "Population": "9,563",
    "Area": 1848,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "La Paz",
    "StateorEq": "Arizona",
    "Population": "16,557",
    "Area": 4513,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Maricopa",
    "StateorEq": "Arizona",
    "Population": "4,420,568",
    "Area": 9224,
    "StatisticalArea": "Phoenix-Mesa-Scottsdale, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mohave",
    "StateorEq": "Arizona",
    "Population": "213,267",
    "Area": 13470,
    "StatisticalArea": "Lake Havasu City-Kingman, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Navajo",
    "StateorEq": "Arizona",
    "Population": "106,717",
    "Area": 9959,
    "StatisticalArea": "Show Low, AZ Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pima",
    "StateorEq": "Arizona",
    "Population": "1,043,433",
    "Area": 9189,
    "StatisticalArea": "Tucson, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pinal",
    "StateorEq": "Arizona",
    "Population": "425,264",
    "Area": 5374,
    "StatisticalArea": "Phoenix-Mesa-Scottsdale, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Santa Cruz",
    "StateorEq": "Arizona",
    "Population": "47,669",
    "Area": 1238,
    "StatisticalArea": "Nogales, AZ Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yavapai",
    "StateorEq": "Arizona",
    "Population": "236,209",
    "Area": 8128,
    "StatisticalArea": "Prescott, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yuma",
    "StateorEq": "Arizona",
    "Population": "203,881",
    "Area": 5519,
    "StatisticalArea": "Yuma, AZ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Arkansas",
    "StateorEq": "Arkansas",
    "Population": "17,149",
    "Area": 1033.79,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ashley",
    "StateorEq": "Arkansas",
    "Population": "19,062",
    "Area": 939.08,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Baxter",
    "StateorEq": "Arkansas",
    "Population": "41,627",
    "Area": 586.74,
    "StatisticalArea": "Mountain Home, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Arkansas",
    "Population": "284,333",
    "Area": 884.86,
    "StatisticalArea": "Fayetteville-Springdale-Rogers, AR-MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "Arkansas",
    "Population": "37,373",
    "Area": 601.82,
    "StatisticalArea": "Harrison, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bradley",
    "StateorEq": "Arkansas",
    "Population": "10,545",
    "Area": 654.38,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Arkansas",
    "Population": "4,739",
    "Area": 632.54,
    "StatisticalArea": "Camden, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Arkansas",
    "Population": "28,260",
    "Area": 638.81,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chicot",
    "StateorEq": "Arkansas",
    "Population": "10,208",
    "Area": 690.88,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Arkansas",
    "Population": "21,446",
    "Area": 882.6,
    "StatisticalArea": "Arkadelphia, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Arkansas",
    "Population": "14,552",
    "Area": 641.12,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cleburne",
    "StateorEq": "Arkansas",
    "Population": "24,711",
    "Area": 591.91,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cleveland",
    "StateorEq": "Arkansas",
    "Population": "7,550",
    "Area": 598.8,
    "StatisticalArea": "Pine Bluff, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "Arkansas",
    "Population": "22,801",
    "Area": 766.86,
    "StatisticalArea": "Magnolia, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Conway",
    "StateorEq": "Arkansas",
    "Population": "20,715",
    "Area": 566.66,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Craighead",
    "StateorEq": "Arkansas",
    "Population": "111,231",
    "Area": 712.98,
    "StatisticalArea": "Jonesboro, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Arkansas",
    "Population": "60,133",
    "Area": 604.2,
    "StatisticalArea": "Fort Smith, AR-OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crittenden",
    "StateorEq": "Arkansas",
    "Population": "48,163",
    "Area": 636.74,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cross",
    "StateorEq": "Arkansas",
    "Population": "16,833",
    "Area": 622.33,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dallas",
    "StateorEq": "Arkansas",
    "Population": "6,482",
    "Area": 668.16,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Desha",
    "StateorEq": "Arkansas",
    "Population": "11,395",
    "Area": 819.52,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Drew",
    "StateorEq": "Arkansas",
    "Population": "17,350",
    "Area": 835.65,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Faulkner",
    "StateorEq": "Arkansas",
    "Population": "123,498",
    "Area": 664.01,
    "StatisticalArea": "Little Rock-North Little Rock-Conway, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Arkansas",
    "Population": "17,097",
    "Area": 619.69,
    "StatisticalArea": "Fort Smith, AR-OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "Arkansas",
    "Population": "12,075",
    "Area": 620.32,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Garland",
    "StateorEq": "Arkansas",
    "Population": "100,180",
    "Area": 734.57,
    "StatisticalArea": "Hot Springs, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Arkansas",
    "Population": "17,958",
    "Area": 633.01,
    "StatisticalArea": "Little Rock-North Little Rock-Conway, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Arkansas",
    "Population": "45,736",
    "Area": 579.65,
    "StatisticalArea": "Paragould, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hempstead",
    "StateorEq": "Arkansas",
    "Population": "20,065",
    "Area": 741.36,
    "StatisticalArea": "Hope, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hot Spring",
    "StateorEq": "Arkansas",
    "Population": "33,040",
    "Area": 622.16,
    "StatisticalArea": "Malvern, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Howard",
    "StateorEq": "Arkansas",
    "Population": "12,785",
    "Area": 595.2,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Independence",
    "StateorEq": "Arkansas",
    "Population": "37,938",
    "Area": 771.57,
    "StatisticalArea": "Batesville, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Izard",
    "StateorEq": "Arkansas",
    "Population": "13,577",
    "Area": 584.02,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Arkansas",
    "Population": "16,755",
    "Area": 641.45,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Arkansas",
    "Population": "67,260",
    "Area": 913.7,
    "StatisticalArea": "Pine Bluff, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Arkansas",
    "Population": "25,749",
    "Area": 682.74,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lafayette",
    "StateorEq": "Arkansas",
    "Population": "6,308",
    "Area": 545.07,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Arkansas",
    "Population": "16,216",
    "Area": 592.34,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Arkansas",
    "Population": "8,600",
    "Area": 619.47,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Arkansas",
    "Population": "12,941",
    "Area": 572.17,
    "StatisticalArea": "Pine Bluff, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Little River",
    "StateorEq": "Arkansas",
    "Population": "12,026",
    "Area": 564.87,
    "StatisticalArea": "Texarkana, TX-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Arkansas",
    "Population": "21,131",
    "Area": 731.5,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lonoke",
    "StateorEq": "Arkansas",
    "Population": "74,015",
    "Area": 802.43,
    "StatisticalArea": "Little Rock-North Little Rock-Conway, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Arkansas",
    "Population": "16,521",
    "Area": 837.06,
    "StatisticalArea": "Fayetteville-Springdale-Rogers, AR-MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Arkansas",
    "Population": "16,826",
    "Area": 640.39,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Miller",
    "StateorEq": "Arkansas",
    "Population": "42,600",
    "Area": 637.48,
    "StatisticalArea": "Texarkana, TX-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mississippi",
    "StateorEq": "Arkansas",
    "Population": "40,685",
    "Area": 919.73,
    "StatisticalArea": "Blytheville, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Arkansas",
    "Population": "6,799",
    "Area": 621.41,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Arkansas",
    "Population": "8,484",
    "Area": 800.29,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nevada",
    "StateorEq": "Arkansas",
    "Population": "8,310",
    "Area": 620.78,
    "StatisticalArea": "Hope, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Newton",
    "StateorEq": "Arkansas",
    "Population": "7,225",
    "Area": 823.18,
    "StatisticalArea": "Harrison, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ouachita",
    "StateorEq": "Arkansas",
    "Population": "22,650",
    "Area": 739.63,
    "StatisticalArea": "Camden, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Arkansas",
    "Population": "10,019",
    "Area": 560.47,
    "StatisticalArea": "Little Rock-North Little Rock-Conway, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Phillips",
    "StateorEq": "Arkansas",
    "Population": "16,568",
    "Area": 727.29,
    "StatisticalArea": "Helena-West Helena, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Arkansas",
    "Population": "10,171",
    "Area": 613.88,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Poinsett",
    "StateorEq": "Arkansas",
    "Population": "22,965",
    "Area": 763.39,
    "StatisticalArea": "Jonesboro, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Arkansas",
    "Population": "19,221",
    "Area": 862.42,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pope",
    "StateorEq": "Arkansas",
    "Population": "63,381",
    "Area": 830.79,
    "StatisticalArea": "Russellville, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Prairie",
    "StateorEq": "Arkansas",
    "Population": "8,282",
    "Area": 675.76,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pulaski",
    "StateorEq": "Arkansas",
    "Population": "399,125",
    "Area": 807.84,
    "StatisticalArea": "Little Rock-North Little Rock-Conway, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "Arkansas",
    "Population": "18,571",
    "Area": 656.04,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "St. Francis",
    "StateorEq": "Arkansas",
    "Population": "23,090",
    "Area": 642.4,
    "StatisticalArea": "Forrest City, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Saline",
    "StateorEq": "Arkansas",
    "Population": "123,416",
    "Area": 730.46,
    "StatisticalArea": "Little Rock-North Little Rock-Conway, AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Arkansas",
    "Population": "9,836",
    "Area": 898.09,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Searcy",
    "StateorEq": "Arkansas",
    "Population": "7,828",
    "Area": 668.51,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sebastian",
    "StateorEq": "Arkansas",
    "Population": "127,799",
    "Area": 546.04,
    "StatisticalArea": "Fort Smith, AR-OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sevier",
    "StateorEq": "Arkansas",
    "Population": "15,839",
    "Area": 581.35,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sharp",
    "StateorEq": "Arkansas",
    "Population": "17,271",
    "Area": 606.35,
    "StatisticalArea": "Batesville, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stone",
    "StateorEq": "Arkansas",
    "Population": "12,359",
    "Area": 609.43,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Arkansas",
    "Population": "39,054",
    "Area": 1055.27,
    "StatisticalArea": "El Dorado, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Van Buren",
    "StateorEq": "Arkansas",
    "Population": "15,796",
    "Area": 724.32,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Arkansas",
    "Population": "245,871",
    "Area": 951.72,
    "StatisticalArea": "Fayetteville-Springdale-Rogers, AR-MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "White",
    "StateorEq": "Arkansas",
    "Population": "76,822",
    "Area": 1042.36,
    "StatisticalArea": "Searcy, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Woodruff",
    "StateorEq": "Arkansas",
    "Population": "6,269",
    "Area": 594.05,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yell",
    "StateorEq": "Arkansas",
    "Population": "20,263",
    "Area": 948.84,
    "StatisticalArea": "Russellville, AR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alameda",
    "StateorEq": "California",
    "Population": "1,682,353",
    "Area": 738,
    "StatisticalArea": "San Francisco-Oakland-Hayward, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alpine",
    "StateorEq": "California",
    "Population": "1,204",
    "Area": 739,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Amador",
    "StateorEq": "California",
    "Population": "40,474",
    "Area": 606,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Butte",
    "StateorEq": "California",
    "Population": "211,632",
    "Area": 1640,
    "StatisticalArea": "Chico, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calaveras",
    "StateorEq": "California",
    "Population": "45,292",
    "Area": 1020,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Colusa",
    "StateorEq": "California",
    "Population": "21,839",
    "Area": 1151,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Contra Costa",
    "StateorEq": "California",
    "Population": "1,165,927",
    "Area": 720,
    "StatisticalArea": "San Francisco-Oakland-Hayward, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Del Norte",
    "StateorEq": "California",
    "Population": "27,743",
    "Area": 1008,
    "StatisticalArea": "Crescent City, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "El Dorado",
    "StateorEq": "California",
    "Population": "191,185",
    "Area": 1712,
    "StatisticalArea": "Sacramento–Roseville–Arden-Arcade, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fresno",
    "StateorEq": "California",
    "Population": "1,008,654",
    "Area": 5963,
    "StatisticalArea": "Fresno, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Glenn",
    "StateorEq": "California",
    "Population": "28,917",
    "Area": 1315,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Humboldt",
    "StateorEq": "California",
    "Population": "136,463",
    "Area": 3573,
    "StatisticalArea": "Eureka-Arcata-Fortuna, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Imperial",
    "StateorEq": "California",
    "Population": "179,702",
    "Area": 4175,
    "StatisticalArea": "El Centro, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Inyo",
    "StateorEq": "California",
    "Population": "19,016",
    "Area": 10192,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kern",
    "StateorEq": "California",
    "Population": "909,235",
    "Area": 8142,
    "StatisticalArea": "Bakersfield, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kings",
    "StateorEq": "California",
    "Population": "152,486",
    "Area": 1390,
    "StatisticalArea": "Hanford-Corcoran, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "California",
    "Population": "68,163",
    "Area": 1258,
    "StatisticalArea": "Clearlake, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lassen",
    "StateorEq": "California",
    "Population": "32,730",
    "Area": 4558,
    "StatisticalArea": "Susanville, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Los Angeles",
    "StateorEq": "California",
    "Population": "10,014,009",
    "Area": 4060,
    "StatisticalArea": "Los Angeles-Long Beach-Anaheim, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madera",
    "StateorEq": "California",
    "Population": "156,255",
    "Area": 2138,
    "StatisticalArea": "Madera, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marin",
    "StateorEq": "California",
    "Population": "262,321",
    "Area": 520,
    "StatisticalArea": "San Francisco-Oakland-Hayward, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mariposa",
    "StateorEq": "California",
    "Population": "17,131",
    "Area": 1451,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mendocino",
    "StateorEq": "California",
    "Population": "91,601",
    "Area": 3509,
    "StatisticalArea": "Ukiah, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Merced",
    "StateorEq": "California",
    "Population": "281,202",
    "Area": 1929,
    "StatisticalArea": "Merced, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Modoc",
    "StateorEq": "California",
    "Population": "8,700",
    "Area": 3944,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mono",
    "StateorEq": "California",
    "Population": "13,195",
    "Area": 3044,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Monterey",
    "StateorEq": "California",
    "Population": "439,035",
    "Area": 3322,
    "StatisticalArea": "Salinas, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Napa",
    "StateorEq": "California",
    "Population": "138,019",
    "Area": 754,
    "StatisticalArea": "Napa, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nevada",
    "StateorEq": "California",
    "Population": "102,241",
    "Area": 958,
    "StatisticalArea": "Truckee-Grass Valley, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "California",
    "Population": "3,186,989",
    "Area": 948,
    "StatisticalArea": "Los Angeles-Long Beach-Anaheim, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Placer",
    "StateorEq": "California",
    "Population": "404,739",
    "Area": 1407,
    "StatisticalArea": "Sacramento–Roseville–Arden-Arcade, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Plumas",
    "StateorEq": "California",
    "Population": "19,790",
    "Area": 2554,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Riverside",
    "StateorEq": "California",
    "Population": "2,418,185",
    "Area": 7208,
    "StatisticalArea": "Riverside-San Bernardino-Ontario, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sacramento",
    "StateorEq": "California",
    "Population": "1,585,055",
    "Area": 966,
    "StatisticalArea": "Sacramento–Roseville–Arden-Arcade, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Benito",
    "StateorEq": "California",
    "Population": "64,209",
    "Area": 1389,
    "StatisticalArea": "San Jose-Sunnyvale-Santa Clara, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Bernardino",
    "StateorEq": "California",
    "Population": "2,181,654",
    "Area": 20062,
    "StatisticalArea": "Riverside-San Bernardino-Ontario, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Diego",
    "StateorEq": "California",
    "Population": "3,298,634",
    "Area": 4204,
    "StatisticalArea": "San Diego-Carlsbad, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Francisco, City and County of[k]",
    "StateorEq": "California",
    "Population": "873,965",
    "Area": 47,
    "StatisticalArea": "San Francisco-Oakland-Hayward, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Joaquin",
    "StateorEq": "California",
    "Population": "779,233",
    "Area": 1399,
    "StatisticalArea": "Stockton-Lodi, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Luis Obispo",
    "StateorEq": "California",
    "Population": "282,424",
    "Area": 3304,
    "StatisticalArea": "San Luis Obispo-Paso Robles-Arroyo Grande, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Mateo",
    "StateorEq": "California",
    "Population": "764,442",
    "Area": 449,
    "StatisticalArea": "San Francisco-Oakland-Hayward, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Santa Barbara",
    "StateorEq": "California",
    "Population": "448,229",
    "Area": 2738,
    "StatisticalArea": "Santa Maria-Santa Barbara, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Santa Clara",
    "StateorEq": "California",
    "Population": "1,936,259",
    "Area": 1291,
    "StatisticalArea": "San Jose-Sunnyvale-Santa Clara, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Santa Cruz",
    "StateorEq": "California",
    "Population": "270,861",
    "Area": 446,
    "StatisticalArea": "Santa Cruz-Watsonville, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shasta",
    "StateorEq": "California",
    "Population": "182,155",
    "Area": 3786,
    "StatisticalArea": "Redding, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sierra",
    "StateorEq": "California",
    "Population": "3,236",
    "Area": 953,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Siskiyou",
    "StateorEq": "California",
    "Population": "44,076",
    "Area": 6287,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Solano",
    "StateorEq": "California",
    "Population": "453,491",
    "Area": 828,
    "StatisticalArea": "Vallejo-Fairfield, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sonoma",
    "StateorEq": "California",
    "Population": "488,863",
    "Area": 1576,
    "StatisticalArea": "Santa Rosa, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stanislaus",
    "StateorEq": "California",
    "Population": "552,878",
    "Area": 1495,
    "StatisticalArea": "Modesto, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sutter",
    "StateorEq": "California",
    "Population": "99,633",
    "Area": 603,
    "StatisticalArea": "Yuba City, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tehama",
    "StateorEq": "California",
    "Population": "65,829",
    "Area": 2951,
    "StatisticalArea": "Red Bluff, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Trinity",
    "StateorEq": "California",
    "Population": "16,112",
    "Area": 3179,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tulare",
    "StateorEq": "California",
    "Population": "473,117",
    "Area": 4824,
    "StatisticalArea": "Visalia-Porterville, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tuolumne",
    "StateorEq": "California",
    "Population": "55,620",
    "Area": 2236,
    "StatisticalArea": "Sonora, CA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ventura",
    "StateorEq": "California",
    "Population": "843,843",
    "Area": 1846,
    "StatisticalArea": "Oxnard-Thousand Oaks-Ventura, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yolo",
    "StateorEq": "California",
    "Population": "216,403",
    "Area": 1012,
    "StatisticalArea": "Sacramento–Roseville–Arden-Arcade, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yuba",
    "StateorEq": "California",
    "Population": "81,575",
    "Area": 630,
    "StatisticalArea": "Yuba City, CA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Colorado",
    "Population": "519,572",
    "Area": 1182.29,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alamosa",
    "StateorEq": "Colorado",
    "Population": "16,376",
    "Area": 723.21,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Arapahoe",
    "StateorEq": "Colorado",
    "Population": "655,070",
    "Area": 804.41,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Archuleta",
    "StateorEq": "Colorado",
    "Population": "13,359",
    "Area": 1354.53,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Baca",
    "StateorEq": "Colorado",
    "Population": "3,506",
    "Area": 2558.48,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bent",
    "StateorEq": "Colorado",
    "Population": "5,650",
    "Area": 1541.07,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Boulder",
    "StateorEq": "Colorado",
    "Population": "330,758",
    "Area": 740.48,
    "StatisticalArea": "Boulder, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Broomfield, City and County of[l]",
    "StateorEq": "Colorado",
    "Population": "74,112",
    "Area": 33.57,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chaffee",
    "StateorEq": "Colorado",
    "Population": "19,476",
    "Area": 1014.12,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cheyenne",
    "StateorEq": "Colorado",
    "Population": "1,748",
    "Area": 1781.9,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clear Creek",
    "StateorEq": "Colorado",
    "Population": "9,397",
    "Area": 396.53,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Conejos",
    "StateorEq": "Colorado",
    "Population": "7,461",
    "Area": 1290.22,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Costilla",
    "StateorEq": "Colorado",
    "Population": "3,499",
    "Area": 1229.38,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crowley",
    "StateorEq": "Colorado",
    "Population": "5,922",
    "Area": 800.27,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Custer",
    "StateorEq": "Colorado",
    "Population": "4,704",
    "Area": 739.24,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Delta",
    "StateorEq": "Colorado",
    "Population": "31,196",
    "Area": 1149.44,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Denver, City and County of[m]",
    "StateorEq": "Colorado",
    "Population": "715,522",
    "Area": 155.66,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dolores",
    "StateorEq": "Colorado",
    "Population": "2,326",
    "Area": 1076.93,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Colorado",
    "Population": "357,978",
    "Area": 842.3,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Eagle",
    "StateorEq": "Colorado",
    "Population": "55,731",
    "Area": 1700.76,
    "StatisticalArea": "Edwards, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "El Paso",
    "StateorEq": "Colorado",
    "Population": "730,395",
    "Area": 2128.6,
    "StatisticalArea": "Colorado Springs, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Elbert",
    "StateorEq": "Colorado",
    "Population": "26,062",
    "Area": 1849.08,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fremont",
    "StateorEq": "Colorado",
    "Population": "48,939",
    "Area": 1533.09,
    "StatisticalArea": "Cañon City, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garfield",
    "StateorEq": "Colorado",
    "Population": "61,685",
    "Area": 2958.23,
    "StatisticalArea": "Glenwood Springs, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gilpin",
    "StateorEq": "Colorado",
    "Population": "5,808",
    "Area": 150.15,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grand",
    "StateorEq": "Colorado",
    "Population": "15,717",
    "Area": 1868.53,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gunnison",
    "StateorEq": "Colorado",
    "Population": "16,918",
    "Area": 3259.22,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hinsdale",
    "StateorEq": "Colorado",
    "Population": 788,
    "Area": 1123.35,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Huerfano",
    "StateorEq": "Colorado",
    "Population": "6,820",
    "Area": 1592.37,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Colorado",
    "Population": "1,379",
    "Area": 1619.75,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Colorado",
    "Population": "582,910",
    "Area": 772.85,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kiowa",
    "StateorEq": "Colorado",
    "Population": "1,446",
    "Area": 1785.9,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kit Carson",
    "StateorEq": "Colorado",
    "Population": "7,087",
    "Area": 2162.43,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "La Plata",
    "StateorEq": "Colorado",
    "Population": "55,638",
    "Area": 1700.44,
    "StatisticalArea": "Durango, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Colorado",
    "Population": "7,436",
    "Area": 383.55,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Larimer",
    "StateorEq": "Colorado",
    "Population": "359,066",
    "Area": 2631.75,
    "StatisticalArea": "Fort Collins, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Las Animas",
    "StateorEq": "Colorado",
    "Population": "14,555",
    "Area": 4773.27,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Colorado",
    "Population": "5,675",
    "Area": 2585.21,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Colorado",
    "Population": "21,528",
    "Area": 1845.31,
    "StatisticalArea": "Sterling, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mesa",
    "StateorEq": "Colorado",
    "Population": "155,703",
    "Area": 3345.69,
    "StatisticalArea": "Grand Junction, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mineral",
    "StateorEq": "Colorado",
    "Population": 865,
    "Area": 878.16,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Moffat",
    "StateorEq": "Colorado",
    "Population": "13,292",
    "Area": 4755.86,
    "StatisticalArea": "Craig, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montezuma",
    "StateorEq": "Colorado",
    "Population": "25,849",
    "Area": 2035.8,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montrose",
    "StateorEq": "Colorado",
    "Population": "42,679",
    "Area": 2246.43,
    "StatisticalArea": "Montrose, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Colorado",
    "Population": "29,111",
    "Area": 1293.83,
    "StatisticalArea": "Fort Morgan, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Otero",
    "StateorEq": "Colorado",
    "Population": "18,690",
    "Area": 1267.66,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ouray",
    "StateorEq": "Colorado",
    "Population": "4,874",
    "Area": 542.3,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Park",
    "StateorEq": "Colorado",
    "Population": "17,390",
    "Area": 2209.36,
    "StatisticalArea": "Denver-Aurora-Lakewood, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Phillips",
    "StateorEq": "Colorado",
    "Population": "4,530",
    "Area": 668.3,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pitkin",
    "StateorEq": "Colorado",
    "Population": "17,358",
    "Area": 970.37,
    "StatisticalArea": "Glenwood Springs, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Prowers",
    "StateorEq": "Colorado",
    "Population": "11,999",
    "Area": 1645.37,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pueblo",
    "StateorEq": "Colorado",
    "Population": "168,162",
    "Area": 2396.77,
    "StatisticalArea": "Pueblo, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rio Blanco",
    "StateorEq": "Colorado",
    "Population": "6,529",
    "Area": 3226.24,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rio Grande",
    "StateorEq": "Colorado",
    "Population": "11,539",
    "Area": 913.1,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Routt",
    "StateorEq": "Colorado",
    "Population": "24,829",
    "Area": 2362.11,
    "StatisticalArea": "Steamboat Springs, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Saguache",
    "StateorEq": "Colorado",
    "Population": "6,368",
    "Area": 3168.32,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "San Juan",
    "StateorEq": "Colorado",
    "Population": 705,
    "Area": 388.99,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "San Miguel",
    "StateorEq": "Colorado",
    "Population": "8,072",
    "Area": 1290.76,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sedgwick",
    "StateorEq": "Colorado",
    "Population": "2,404",
    "Area": 548.83,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Summit",
    "StateorEq": "Colorado",
    "Population": "31,055",
    "Area": 618.92,
    "StatisticalArea": "Breckenridge, CO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Teller",
    "StateorEq": "Colorado",
    "Population": "24,710",
    "Area": 558.58,
    "StatisticalArea": "Colorado Springs, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Colorado",
    "Population": "4,817",
    "Area": 2522.9,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Weld",
    "StateorEq": "Colorado",
    "Population": "328,981",
    "Area": 4013.84,
    "StatisticalArea": "Greeley, CO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yuma",
    "StateorEq": "Colorado",
    "Population": "9,988",
    "Area": 2369.61,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Capitol Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "976,248",
    "Area": 1046.08,
    "StatisticalArea": "Hartford-East Hartford-Middletown, CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greater Bridgeport Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "325,778",
    "Area": 149.08,
    "StatisticalArea": "Bridgeport-Stamford-Norwalk, CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lower Connecticut River Valley Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "174,225",
    "Area": 461.57,
    "StatisticalArea": "Hartford-East Hartford-Middletown, CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Naugatuck Valley Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "450,376",
    "Area": 421.84,
    "StatisticalArea": "Waterbury-Shelton, CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Northeastern Connecticut Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "95,348",
    "Area": 563.2,
    "StatisticalArea": "Putnam, CT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Northwest Hills Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "112,503",
    "Area": 808.27,
    "StatisticalArea": "Torrington, CT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "South Central Connecticut Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "570,487",
    "Area": 387.04,
    "StatisticalArea": "New Haven-Milford, CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Southeastern Connecticut Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "280,430",
    "Area": 662.64,
    "StatisticalArea": "Norwich-New London, CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Western Connecticut Planning Region[n]",
    "StateorEq": "Connecticut",
    "Population": "620,549",
    "Area": 618.71,
    "StatisticalArea": "Bridgeport-Stamford-Norwalk, CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kent",
    "StateorEq": "Delaware",
    "Population": "181,851",
    "Area": 800,
    "StatisticalArea": "Dover, DE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "New Castle",
    "StateorEq": "Delaware",
    "Population": "570,719",
    "Area": 494,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sussex",
    "StateorEq": "Delaware",
    "Population": "237,378",
    "Area": 1196,
    "StatisticalArea": "Salisbury, MD-DE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "District of Columbia[o]",
    "StateorEq": "District of Columbia",
    "Population": "689,545",
    "Area": 68.34,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alachua",
    "StateorEq": "Florida",
    "Population": "278,468",
    "Area": 874,
    "StatisticalArea": "Gainesville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Baker",
    "StateorEq": "Florida",
    "Population": "28,259",
    "Area": 585,
    "StatisticalArea": "Jacksonville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bay",
    "StateorEq": "Florida",
    "Population": "175,216",
    "Area": 764,
    "StatisticalArea": "Panama City, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bradford",
    "StateorEq": "Florida",
    "Population": "28,203",
    "Area": 293,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brevard",
    "StateorEq": "Florida",
    "Population": "606,612",
    "Area": 1018,
    "StatisticalArea": "Palm Bay-Melbourne-Titusville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Broward",
    "StateorEq": "Florida",
    "Population": "1,944,375",
    "Area": 1209,
    "StatisticalArea": "Miami-Fort Lauderdale-West Palm Beach, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Florida",
    "Population": "13,648",
    "Area": 567,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Charlotte",
    "StateorEq": "Florida",
    "Population": "186,847",
    "Area": 694,
    "StatisticalArea": "Punta Gorda, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Citrus",
    "StateorEq": "Florida",
    "Population": "153,843",
    "Area": 584,
    "StatisticalArea": "Homosassa Springs, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Florida",
    "Population": "218,245",
    "Area": 601,
    "StatisticalArea": "Jacksonville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Collier",
    "StateorEq": "Florida",
    "Population": "375,752",
    "Area": 2026,
    "StatisticalArea": "Naples-Marco Island, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "Florida",
    "Population": "69,698",
    "Area": 797,
    "StatisticalArea": "Lake City, FL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeSoto",
    "StateorEq": "Florida",
    "Population": "33,976",
    "Area": 637,
    "StatisticalArea": "Arcadia, FL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dixie",
    "StateorEq": "Florida",
    "Population": "16,759",
    "Area": 704,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Duval",
    "StateorEq": "Florida",
    "Population": "995,567",
    "Area": 774,
    "StatisticalArea": "Jacksonville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Escambia",
    "StateorEq": "Florida",
    "Population": "321,905",
    "Area": 664,
    "StatisticalArea": "Pensacola-Ferry Pass-Brent, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Flagler",
    "StateorEq": "Florida",
    "Population": "115,378",
    "Area": 485,
    "StatisticalArea": "Deltona-Daytona Beach-Ormond Beach, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Florida",
    "Population": "12,451",
    "Area": 534,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gadsden",
    "StateorEq": "Florida",
    "Population": "43,826",
    "Area": 516,
    "StatisticalArea": "Tallahassee, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gilchrist",
    "StateorEq": "Florida",
    "Population": "17,864",
    "Area": 349,
    "StatisticalArea": "Gainesville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Glades",
    "StateorEq": "Florida",
    "Population": "12,126",
    "Area": 774,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gulf",
    "StateorEq": "Florida",
    "Population": "14,192",
    "Area": 565,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Florida",
    "Population": "14,004",
    "Area": 515,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hardee",
    "StateorEq": "Florida",
    "Population": "25,327",
    "Area": 637,
    "StatisticalArea": "Wauchula, FL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hendry",
    "StateorEq": "Florida",
    "Population": "39,619",
    "Area": 1153,
    "StatisticalArea": "Clewiston, FL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hernando",
    "StateorEq": "Florida",
    "Population": "194,515",
    "Area": 478,
    "StatisticalArea": "Tampa-St. Petersburg-Clearwater, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Highlands",
    "StateorEq": "Florida",
    "Population": "101,235",
    "Area": 1028,
    "StatisticalArea": "Sebring, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hillsborough",
    "StateorEq": "Florida",
    "Population": "1,459,762",
    "Area": 1051,
    "StatisticalArea": "Tampa-St. Petersburg-Clearwater, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Holmes",
    "StateorEq": "Florida",
    "Population": "19,653",
    "Area": 482,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Indian River",
    "StateorEq": "Florida",
    "Population": "159,788",
    "Area": 503,
    "StatisticalArea": "Sebastian-Vero Beach, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Florida",
    "Population": "47,319",
    "Area": 916,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Florida",
    "Population": "14,510",
    "Area": 598,
    "StatisticalArea": "Tallahassee, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lafayette",
    "StateorEq": "Florida",
    "Population": "8,226",
    "Area": 543,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Florida",
    "Population": "383,956",
    "Area": 953,
    "StatisticalArea": "Orlando-Kissimmee-Sanford, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Florida",
    "Population": "760,822",
    "Area": 804,
    "StatisticalArea": "Cape Coral-Fort Myers, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Leon",
    "StateorEq": "Florida",
    "Population": "292,198",
    "Area": 667,
    "StatisticalArea": "Tallahassee, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Levy",
    "StateorEq": "Florida",
    "Population": "42,915",
    "Area": 1118,
    "StatisticalArea": "Gainesville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Liberty",
    "StateorEq": "Florida",
    "Population": "7,974",
    "Area": 836,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Florida",
    "Population": "17,968",
    "Area": 692,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Manatee",
    "StateorEq": "Florida",
    "Population": "399,710",
    "Area": 741,
    "StatisticalArea": "North Port-Sarasota-Bradenton, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Florida",
    "Population": "375,908",
    "Area": 1579,
    "StatisticalArea": "Ocala, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Martin",
    "StateorEq": "Florida",
    "Population": "158,431",
    "Area": 556,
    "StatisticalArea": "Port St. Lucie, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Miami-Dade",
    "StateorEq": "Florida",
    "Population": "2,701,767",
    "Area": 1946,
    "StatisticalArea": "Miami-Fort Lauderdale-West Palm Beach, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Florida",
    "Population": "82,874",
    "Area": 997,
    "StatisticalArea": "Key West, FL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nassau",
    "StateorEq": "Florida",
    "Population": "90,352",
    "Area": 652,
    "StatisticalArea": "Jacksonville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Okaloosa",
    "StateorEq": "Florida",
    "Population": "211,668",
    "Area": 936,
    "StatisticalArea": "Crestview-Fort Walton Beach-Destin, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Okeechobee",
    "StateorEq": "Florida",
    "Population": "39,644",
    "Area": 774,
    "StatisticalArea": "Okeechobee, FL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "Florida",
    "Population": "1,429,908",
    "Area": 908,
    "StatisticalArea": "Orlando-Kissimmee-Sanford, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Osceola",
    "StateorEq": "Florida",
    "Population": "388,656",
    "Area": 1322,
    "StatisticalArea": "Orlando-Kissimmee-Sanford, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Palm Beach",
    "StateorEq": "Florida",
    "Population": "1,492,191",
    "Area": 2034,
    "StatisticalArea": "Miami-Fort Lauderdale-West Palm Beach, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pasco",
    "StateorEq": "Florida",
    "Population": "561,891",
    "Area": 745,
    "StatisticalArea": "Tampa-St. Petersburg-Clearwater, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pinellas",
    "StateorEq": "Florida",
    "Population": "959,107",
    "Area": 280,
    "StatisticalArea": "Tampa-St. Petersburg-Clearwater, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Florida",
    "Population": "725,046",
    "Area": 1875,
    "StatisticalArea": "Lakeland-Winter Haven, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "Florida",
    "Population": "73,321",
    "Area": 722,
    "StatisticalArea": "Palatka, FL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Johns",
    "StateorEq": "Florida",
    "Population": "273,425",
    "Area": 609,
    "StatisticalArea": "Jacksonville, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Lucie",
    "StateorEq": "Florida",
    "Population": "329,226",
    "Area": 572,
    "StatisticalArea": "Port St. Lucie, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Santa Rosa",
    "StateorEq": "Florida",
    "Population": "188,000",
    "Area": 1016,
    "StatisticalArea": "Pensacola-Ferry Pass-Brent, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sarasota",
    "StateorEq": "Florida",
    "Population": "434,006",
    "Area": 572,
    "StatisticalArea": "North Port-Sarasota-Bradenton, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Seminole",
    "StateorEq": "Florida",
    "Population": "470,856",
    "Area": 308,
    "StatisticalArea": "Orlando-Kissimmee-Sanford, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sumter",
    "StateorEq": "Florida",
    "Population": "129,752",
    "Area": 546,
    "StatisticalArea": "The Villages, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Suwannee",
    "StateorEq": "Florida",
    "Population": "43,474",
    "Area": 688,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Taylor",
    "StateorEq": "Florida",
    "Population": "21,796",
    "Area": 1042,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Florida",
    "Population": "16,147",
    "Area": 240,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Volusia",
    "StateorEq": "Florida",
    "Population": "553,543",
    "Area": 1106,
    "StatisticalArea": "Deltona-Daytona Beach-Ormond Beach, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wakulla",
    "StateorEq": "Florida",
    "Population": "33,764",
    "Area": 607,
    "StatisticalArea": "Tallahassee, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Walton",
    "StateorEq": "Florida",
    "Population": "75,305",
    "Area": 1058,
    "StatisticalArea": "Crestview-Fort Walton Beach-Destin, FL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Florida",
    "Population": "25,318",
    "Area": 580,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Appling",
    "StateorEq": "Georgia",
    "Population": "18,444",
    "Area": 509,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Atkinson",
    "StateorEq": "Georgia",
    "Population": "8,286",
    "Area": 338,
    "StatisticalArea": "Douglas, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bacon",
    "StateorEq": "Georgia",
    "Population": "11,140",
    "Area": 285,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Baker",
    "StateorEq": "Georgia",
    "Population": "2,876",
    "Area": 343,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Baldwin",
    "StateorEq": "Georgia",
    "Population": "43,799",
    "Area": 258,
    "StatisticalArea": "Milledgeville, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Banks",
    "StateorEq": "Georgia",
    "Population": "18,035",
    "Area": 234,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Barrow",
    "StateorEq": "Georgia",
    "Population": "83,505",
    "Area": 162,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bartow",
    "StateorEq": "Georgia",
    "Population": "108,901",
    "Area": 460,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ben Hill",
    "StateorEq": "Georgia",
    "Population": "17,194",
    "Area": 252,
    "StatisticalArea": "Fitzgerald, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Berrien",
    "StateorEq": "Georgia",
    "Population": "18,160",
    "Area": 452,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bibb",
    "StateorEq": "Georgia",
    "Population": "157,346",
    "Area": 250,
    "StatisticalArea": "Macon, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bleckley",
    "StateorEq": "Georgia",
    "Population": "12,583",
    "Area": 217,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brantley",
    "StateorEq": "Georgia",
    "Population": "18,021",
    "Area": 444,
    "StatisticalArea": "Brunswick, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brooks",
    "StateorEq": "Georgia",
    "Population": "16,301",
    "Area": 494,
    "StatisticalArea": "Valdosta, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bryan",
    "StateorEq": "Georgia",
    "Population": "44,738",
    "Area": 442,
    "StatisticalArea": "Savannah, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bulloch",
    "StateorEq": "Georgia",
    "Population": "81,099",
    "Area": 683,
    "StatisticalArea": "Statesboro, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Burke",
    "StateorEq": "Georgia",
    "Population": "24,596",
    "Area": 831,
    "StatisticalArea": "Augusta-Richmond County, GA-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Butts",
    "StateorEq": "Georgia",
    "Population": "25,434",
    "Area": 187,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Georgia",
    "Population": "5,573",
    "Area": 280,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Camden",
    "StateorEq": "Georgia",
    "Population": "54,768",
    "Area": 630,
    "StatisticalArea": "St. Marys, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Candler",
    "StateorEq": "Georgia",
    "Population": "10,981",
    "Area": 247,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Georgia",
    "Population": "119,148",
    "Area": 499,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Catoosa",
    "StateorEq": "Georgia",
    "Population": "67,872",
    "Area": 162,
    "StatisticalArea": "Chattanooga, TN-GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Charlton",
    "StateorEq": "Georgia",
    "Population": "12,518",
    "Area": 781,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chatham",
    "StateorEq": "Georgia",
    "Population": "295,291",
    "Area": 440,
    "StatisticalArea": "Savannah, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chattahoochee",
    "StateorEq": "Georgia",
    "Population": "9,565",
    "Area": 249,
    "StatisticalArea": "Columbus, GA-AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chattooga",
    "StateorEq": "Georgia",
    "Population": "24,965",
    "Area": 314,
    "StatisticalArea": "Summerville, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "Georgia",
    "Population": "266,620",
    "Area": 424,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clarke",
    "StateorEq": "Georgia",
    "Population": "128,671",
    "Area": 121,
    "StatisticalArea": "Athens-Clarke County, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Georgia",
    "Population": "2,848",
    "Area": 195,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clayton",
    "StateorEq": "Georgia",
    "Population": "297,595",
    "Area": 195,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clinch",
    "StateorEq": "Georgia",
    "Population": "6,749",
    "Area": 809,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cobb",
    "StateorEq": "Georgia",
    "Population": "766,149",
    "Area": 340,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coffee",
    "StateorEq": "Georgia",
    "Population": "43,092",
    "Area": 599,
    "StatisticalArea": "Douglas, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Colquitt",
    "StateorEq": "Georgia",
    "Population": "45,898",
    "Area": 552,
    "StatisticalArea": "Moultrie, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "Georgia",
    "Population": "156,010",
    "Area": 290,
    "StatisticalArea": "Augusta-Richmond County, GA-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cook",
    "StateorEq": "Georgia",
    "Population": "17,229",
    "Area": 229,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Coweta",
    "StateorEq": "Georgia",
    "Population": "146,158",
    "Area": 443,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Georgia",
    "Population": "12,130",
    "Area": 325,
    "StatisticalArea": "Macon, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crisp",
    "StateorEq": "Georgia",
    "Population": "20,128",
    "Area": 274,
    "StatisticalArea": "Cordele, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dade",
    "StateorEq": "Georgia",
    "Population": "16,251",
    "Area": 174,
    "StatisticalArea": "Chattanooga, TN-GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dawson",
    "StateorEq": "Georgia",
    "Population": "26,798",
    "Area": 211,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Decatur",
    "StateorEq": "Georgia",
    "Population": "29,367",
    "Area": 597,
    "StatisticalArea": "Bainbridge, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeKalb",
    "StateorEq": "Georgia",
    "Population": "764,382",
    "Area": 268,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dodge",
    "StateorEq": "Georgia",
    "Population": "19,925",
    "Area": 501,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dooly",
    "StateorEq": "Georgia",
    "Population": "11,208",
    "Area": 393,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dougherty",
    "StateorEq": "Georgia",
    "Population": "85,790",
    "Area": 330,
    "StatisticalArea": "Albany, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Georgia",
    "Population": "144,237",
    "Area": 199,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Early",
    "StateorEq": "Georgia",
    "Population": "10,854",
    "Area": 511,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Echols",
    "StateorEq": "Georgia",
    "Population": "3,697",
    "Area": 404,
    "StatisticalArea": "Valdosta, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Effingham",
    "StateorEq": "Georgia",
    "Population": "64,769",
    "Area": 480,
    "StatisticalArea": "Savannah, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Elbert",
    "StateorEq": "Georgia",
    "Population": "19,637",
    "Area": 369,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Emanuel",
    "StateorEq": "Georgia",
    "Population": "22,768",
    "Area": 686,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Evans",
    "StateorEq": "Georgia",
    "Population": "10,774",
    "Area": 185,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fannin",
    "StateorEq": "Georgia",
    "Population": "25,319",
    "Area": 386,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Georgia",
    "Population": "119,194",
    "Area": 197,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Floyd",
    "StateorEq": "Georgia",
    "Population": "98,584",
    "Area": 513,
    "StatisticalArea": "Rome, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Forsyth",
    "StateorEq": "Georgia",
    "Population": "251,283",
    "Area": 226,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Georgia",
    "Population": "23,424",
    "Area": 263,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "Georgia",
    "Population": "1,066,710",
    "Area": 529,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gilmer",
    "StateorEq": "Georgia",
    "Population": "31,353",
    "Area": 427,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Glascock",
    "StateorEq": "Georgia",
    "Population": "2,884",
    "Area": 144,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Glynn",
    "StateorEq": "Georgia",
    "Population": "84,499",
    "Area": 422,
    "StatisticalArea": "Brunswick, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gordon",
    "StateorEq": "Georgia",
    "Population": "57,544",
    "Area": 355,
    "StatisticalArea": "Calhoun, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grady",
    "StateorEq": "Georgia",
    "Population": "26,236",
    "Area": 458,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Georgia",
    "Population": "18,915",
    "Area": 388,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gwinnett",
    "StateorEq": "Georgia",
    "Population": "957,062",
    "Area": 433,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Habersham",
    "StateorEq": "Georgia",
    "Population": "46,031",
    "Area": 278,
    "StatisticalArea": "Cornelia, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hall",
    "StateorEq": "Georgia",
    "Population": "203,136",
    "Area": 394,
    "StatisticalArea": "Gainesville, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Georgia",
    "Population": "8,735",
    "Area": 473,
    "StatisticalArea": "Milledgeville, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Haralson",
    "StateorEq": "Georgia",
    "Population": "29,919",
    "Area": 282,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harris",
    "StateorEq": "Georgia",
    "Population": "34,668",
    "Area": 464,
    "StatisticalArea": "Columbus, GA-AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hart",
    "StateorEq": "Georgia",
    "Population": "25,828",
    "Area": 232,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Heard",
    "StateorEq": "Georgia",
    "Population": "11,412",
    "Area": 296,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Georgia",
    "Population": "240,712",
    "Area": 323,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Houston",
    "StateorEq": "Georgia",
    "Population": "163,633",
    "Area": 377,
    "StatisticalArea": "Warner Robins, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Irwin",
    "StateorEq": "Georgia",
    "Population": "9,666",
    "Area": 357,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Georgia",
    "Population": "75,907",
    "Area": 342,
    "StatisticalArea": "Jefferson, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "Georgia",
    "Population": "14,588",
    "Area": 370,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jeff Davis",
    "StateorEq": "Georgia",
    "Population": "14,779",
    "Area": 333,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Georgia",
    "Population": "15,709",
    "Area": 528,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jenkins",
    "StateorEq": "Georgia",
    "Population": "8,674",
    "Area": 350,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Georgia",
    "Population": "9,189",
    "Area": 304,
    "StatisticalArea": "Dublin, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jones",
    "StateorEq": "Georgia",
    "Population": "28,347",
    "Area": 394,
    "StatisticalArea": "Macon, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lamar",
    "StateorEq": "Georgia",
    "Population": "18,500",
    "Area": 185,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lanier",
    "StateorEq": "Georgia",
    "Population": "9,877",
    "Area": 187,
    "StatisticalArea": "Valdosta, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Laurens",
    "StateorEq": "Georgia",
    "Population": "49,570",
    "Area": 813,
    "StatisticalArea": "Dublin, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Georgia",
    "Population": "33,163",
    "Area": 356,
    "StatisticalArea": "Albany, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Liberty",
    "StateorEq": "Georgia",
    "Population": "65,256",
    "Area": 519,
    "StatisticalArea": "Hinesville, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Georgia",
    "Population": "7,690",
    "Area": 211,
    "StatisticalArea": "Augusta-Richmond County, GA-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Long",
    "StateorEq": "Georgia",
    "Population": "16,168",
    "Area": 401,
    "StatisticalArea": "Hinesville, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lowndes",
    "StateorEq": "Georgia",
    "Population": "118,251",
    "Area": 504,
    "StatisticalArea": "Valdosta, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lumpkin",
    "StateorEq": "Georgia",
    "Population": "33,488",
    "Area": 284,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Macon",
    "StateorEq": "Georgia",
    "Population": "12,082",
    "Area": 367,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Georgia",
    "Population": "30,120",
    "Area": 260,
    "StatisticalArea": "Athens-Clarke County, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Georgia",
    "Population": "7,498",
    "Area": 434,
    "StatisticalArea": "Columbus, GA-AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McDuffie",
    "StateorEq": "Georgia",
    "Population": "21,632",
    "Area": 403,
    "StatisticalArea": "Augusta-Richmond County, GA-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McIntosh",
    "StateorEq": "Georgia",
    "Population": "10,975",
    "Area": 284,
    "StatisticalArea": "Brunswick, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Meriwether",
    "StateorEq": "Georgia",
    "Population": "20,613",
    "Area": 503,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Miller",
    "StateorEq": "Georgia",
    "Population": "6,000",
    "Area": 283,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mitchell",
    "StateorEq": "Georgia",
    "Population": "21,755",
    "Area": 512,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Georgia",
    "Population": "27,957",
    "Area": 396,
    "StatisticalArea": "Macon, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Georgia",
    "Population": "8,610",
    "Area": 245,
    "StatisticalArea": "Vidalia, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Georgia",
    "Population": "20,097",
    "Area": 350,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Murray",
    "StateorEq": "Georgia",
    "Population": "39,973",
    "Area": 344,
    "StatisticalArea": "Dalton, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Muscogee",
    "StateorEq": "Georgia",
    "Population": "206,922",
    "Area": 216,
    "StatisticalArea": "Columbus, GA-AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Newton",
    "StateorEq": "Georgia",
    "Population": "112,483",
    "Area": 276,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oconee",
    "StateorEq": "Georgia",
    "Population": "41,799",
    "Area": 186,
    "StatisticalArea": "Athens-Clarke County, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oglethorpe",
    "StateorEq": "Georgia",
    "Population": "14,825",
    "Area": 441,
    "StatisticalArea": "Athens-Clarke County, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Paulding",
    "StateorEq": "Georgia",
    "Population": "168,661",
    "Area": 314,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Peach",
    "StateorEq": "Georgia",
    "Population": "27,981",
    "Area": 151,
    "StatisticalArea": "Warner Robins, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pickens",
    "StateorEq": "Georgia",
    "Population": "33,216",
    "Area": 232,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pierce",
    "StateorEq": "Georgia",
    "Population": "19,716",
    "Area": 343,
    "StatisticalArea": "Waycross, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Georgia",
    "Population": "18,889",
    "Area": 218,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Georgia",
    "Population": "42,853",
    "Area": 311,
    "StatisticalArea": "Cedartown, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pulaski",
    "StateorEq": "Georgia",
    "Population": "9,855",
    "Area": 247,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "Georgia",
    "Population": "22,047",
    "Area": 344,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Quitman",
    "StateorEq": "Georgia",
    "Population": "2,235",
    "Area": 152,
    "StatisticalArea": "Eufaula, AL-GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rabun",
    "StateorEq": "Georgia",
    "Population": "16,883",
    "Area": 371,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "Georgia",
    "Population": "6,425",
    "Area": 429,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Richmond",
    "StateorEq": "Georgia",
    "Population": "206,607",
    "Area": 324,
    "StatisticalArea": "Augusta-Richmond County, GA-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rockdale",
    "StateorEq": "Georgia",
    "Population": "93,570",
    "Area": 131,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Schley",
    "StateorEq": "Georgia",
    "Population": "4,547",
    "Area": 168,
    "StatisticalArea": "Americus, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Screven",
    "StateorEq": "Georgia",
    "Population": "14,067",
    "Area": 648,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Seminole",
    "StateorEq": "Georgia",
    "Population": "9,147",
    "Area": 238,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Spalding",
    "StateorEq": "Georgia",
    "Population": "67,306",
    "Area": 198,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stephens",
    "StateorEq": "Georgia",
    "Population": "26,784",
    "Area": 179,
    "StatisticalArea": "Toccoa, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stewart",
    "StateorEq": "Georgia",
    "Population": "5,314",
    "Area": 459,
    "StatisticalArea": "Columbus, GA-AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sumter",
    "StateorEq": "Georgia",
    "Population": "29,616",
    "Area": 485,
    "StatisticalArea": "Americus, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Talbot",
    "StateorEq": "Georgia",
    "Population": "5,733",
    "Area": 393,
    "StatisticalArea": "Columbus, GA-AL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Taliaferro",
    "StateorEq": "Georgia",
    "Population": "1,559",
    "Area": 195,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tattnall",
    "StateorEq": "Georgia",
    "Population": "22,842",
    "Area": 484,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Taylor",
    "StateorEq": "Georgia",
    "Population": "7,816",
    "Area": 378,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Telfair",
    "StateorEq": "Georgia",
    "Population": "12,477",
    "Area": 441,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Terrell",
    "StateorEq": "Georgia",
    "Population": "9,185",
    "Area": 336,
    "StatisticalArea": "Albany, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Thomas",
    "StateorEq": "Georgia",
    "Population": "45,798",
    "Area": 548,
    "StatisticalArea": "Thomasville, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tift",
    "StateorEq": "Georgia",
    "Population": "41,344",
    "Area": 265,
    "StatisticalArea": "Tifton, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Toombs",
    "StateorEq": "Georgia",
    "Population": "27,030",
    "Area": 367,
    "StatisticalArea": "Vidalia, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Towns",
    "StateorEq": "Georgia",
    "Population": "12,493",
    "Area": 166,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Treutlen",
    "StateorEq": "Georgia",
    "Population": "6,406",
    "Area": 201,
    "StatisticalArea": "Dublin, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Troup",
    "StateorEq": "Georgia",
    "Population": "69,426",
    "Area": 414,
    "StatisticalArea": "LaGrange, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Turner",
    "StateorEq": "Georgia",
    "Population": "9,006",
    "Area": 286,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Twiggs",
    "StateorEq": "Georgia",
    "Population": "8,022",
    "Area": 360,
    "StatisticalArea": "Macon, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Georgia",
    "Population": "24,632",
    "Area": 323,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Upson",
    "StateorEq": "Georgia",
    "Population": "27,700",
    "Area": 326,
    "StatisticalArea": "Thomaston, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Walker",
    "StateorEq": "Georgia",
    "Population": "67,654",
    "Area": 446,
    "StatisticalArea": "Chattanooga, TN-GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Walton",
    "StateorEq": "Georgia",
    "Population": "96,673",
    "Area": 329,
    "StatisticalArea": "Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ware",
    "StateorEq": "Georgia",
    "Population": "36,251",
    "Area": 903,
    "StatisticalArea": "Waycross, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Georgia",
    "Population": "5,215",
    "Area": 286,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Georgia",
    "Population": "19,988",
    "Area": 680,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Georgia",
    "Population": "30,144",
    "Area": 645,
    "StatisticalArea": "Jesup, GA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Webster",
    "StateorEq": "Georgia",
    "Population": "2,348",
    "Area": 210,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wheeler",
    "StateorEq": "Georgia",
    "Population": "7,471",
    "Area": 298,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "White",
    "StateorEq": "Georgia",
    "Population": "28,003",
    "Area": 242,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Whitfield",
    "StateorEq": "Georgia",
    "Population": "102,864",
    "Area": 290,
    "StatisticalArea": "Dalton, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilcox",
    "StateorEq": "Georgia",
    "Population": "8,766",
    "Area": 380,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wilkes",
    "StateorEq": "Georgia",
    "Population": "9,565",
    "Area": 471,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wilkinson",
    "StateorEq": "Georgia",
    "Population": "8,877",
    "Area": 447,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Worth",
    "StateorEq": "Georgia",
    "Population": "20,784",
    "Area": 570,
    "StatisticalArea": "Albany, GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Guam",
    "StateorEq": "Guam",
    "Population": "162,742",
    "Area": 210,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hawaii",
    "StateorEq": "Hawaiʻi",
    "Population": "200,629",
    "Area": 4028,
    "StatisticalArea": "Hilo, HI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Honolulu, City and County of[p]",
    "StateorEq": "Hawaiʻi",
    "Population": "1,016,508",
    "Area": 597,
    "StatisticalArea": "Urban Honolulu, HI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kalawao",
    "StateorEq": "Hawaiʻi",
    "Population": 82,
    "Area": 5.2,
    "StatisticalArea": "Kahului-Wailuku-Lahaina, HI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kauai",
    "StateorEq": "Hawaiʻi",
    "Population": "73,298",
    "Area": 622,
    "StatisticalArea": "Kapaa, HI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Maui",
    "StateorEq": "Hawaiʻi",
    "Population": "164,754",
    "Area": 1120,
    "StatisticalArea": "Kahului-Wailuku-Lahaina, HI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ada",
    "StateorEq": "Idaho",
    "Population": "494,967",
    "Area": 1055,
    "StatisticalArea": "Boise City, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Idaho",
    "Population": "4,379",
    "Area": 1365,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bannock",
    "StateorEq": "Idaho",
    "Population": "87,018",
    "Area": 1113,
    "StatisticalArea": "Pocatello, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bear Lake",
    "StateorEq": "Idaho",
    "Population": "6,372",
    "Area": 971,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Benewah",
    "StateorEq": "Idaho",
    "Population": "9,530",
    "Area": 776,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bingham",
    "StateorEq": "Idaho",
    "Population": "47,992",
    "Area": 2095,
    "StatisticalArea": "Blackfoot, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Blaine",
    "StateorEq": "Idaho",
    "Population": "24,272",
    "Area": 2645,
    "StatisticalArea": "Hailey, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boise",
    "StateorEq": "Idaho",
    "Population": "7,610",
    "Area": 1902,
    "StatisticalArea": "Boise City, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bonner",
    "StateorEq": "Idaho",
    "Population": "47,110",
    "Area": 1738,
    "StatisticalArea": "Sandpoint, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bonneville",
    "StateorEq": "Idaho",
    "Population": "123,964",
    "Area": 1869,
    "StatisticalArea": "Idaho Falls, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boundary",
    "StateorEq": "Idaho",
    "Population": "12,056",
    "Area": 1269,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Butte",
    "StateorEq": "Idaho",
    "Population": "2,574",
    "Area": 2233,
    "StatisticalArea": "Idaho Falls, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Camas",
    "StateorEq": "Idaho",
    "Population": "1,077",
    "Area": 1077,
    "StatisticalArea": "Hailey, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Canyon",
    "StateorEq": "Idaho",
    "Population": "231,105",
    "Area": 590,
    "StatisticalArea": "Boise City, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caribou",
    "StateorEq": "Idaho",
    "Population": "7,027",
    "Area": 1766,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cassia",
    "StateorEq": "Idaho",
    "Population": "24,655",
    "Area": 2567,
    "StatisticalArea": "Burley, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Idaho",
    "Population": 790,
    "Area": 1765,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clearwater",
    "StateorEq": "Idaho",
    "Population": "8,734",
    "Area": 2462,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Custer",
    "StateorEq": "Idaho",
    "Population": "4,275",
    "Area": 4926,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Elmore",
    "StateorEq": "Idaho",
    "Population": "28,666",
    "Area": 3078,
    "StatisticalArea": "Mountain Home, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Idaho",
    "Population": "14,194",
    "Area": 666,
    "StatisticalArea": "Logan, UT-ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fremont",
    "StateorEq": "Idaho",
    "Population": "13,388",
    "Area": 1867,
    "StatisticalArea": "Rexburg, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gem",
    "StateorEq": "Idaho",
    "Population": "19,123",
    "Area": 563,
    "StatisticalArea": "Boise City, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gooding",
    "StateorEq": "Idaho",
    "Population": "15,598",
    "Area": 731,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Idaho",
    "StateorEq": "Idaho",
    "Population": "16,541",
    "Area": 8485,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Idaho",
    "Population": "30,891",
    "Area": 1095,
    "StatisticalArea": "Idaho Falls, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jerome",
    "StateorEq": "Idaho",
    "Population": "24,237",
    "Area": 600,
    "StatisticalArea": "Twin Falls, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kootenai",
    "StateorEq": "Idaho",
    "Population": "171,362",
    "Area": 1245,
    "StatisticalArea": "Coeur d'Alene, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Latah",
    "StateorEq": "Idaho",
    "Population": "39,517",
    "Area": 1077,
    "StatisticalArea": "Moscow, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lemhi",
    "StateorEq": "Idaho",
    "Population": "7,974",
    "Area": 4564,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lewis",
    "StateorEq": "Idaho",
    "Population": "3,533",
    "Area": 479,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Idaho",
    "Population": "5,127",
    "Area": 1206,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Idaho",
    "Population": "52,913",
    "Area": 472,
    "StatisticalArea": "Rexburg, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Minidoka",
    "StateorEq": "Idaho",
    "Population": "21,613",
    "Area": 760,
    "StatisticalArea": "Burley, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nez Perce",
    "StateorEq": "Idaho",
    "Population": "42,090",
    "Area": 849,
    "StatisticalArea": "Lewiston, ID-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oneida",
    "StateorEq": "Idaho",
    "Population": "4,564",
    "Area": 1200,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Owyhee",
    "StateorEq": "Idaho",
    "Population": "11,913",
    "Area": 7678,
    "StatisticalArea": "Boise City, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Payette",
    "StateorEq": "Idaho",
    "Population": "25,386",
    "Area": 408,
    "StatisticalArea": "Ontario, OR-ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Power",
    "StateorEq": "Idaho",
    "Population": "7,878",
    "Area": 1406,
    "StatisticalArea": "Pocatello, ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shoshone",
    "StateorEq": "Idaho",
    "Population": "13,169",
    "Area": 2634,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Teton",
    "StateorEq": "Idaho",
    "Population": "11,630",
    "Area": 450,
    "StatisticalArea": "Jackson, WY-ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Twin Falls",
    "StateorEq": "Idaho",
    "Population": "90,046",
    "Area": 1925,
    "StatisticalArea": "Twin Falls, ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Valley",
    "StateorEq": "Idaho",
    "Population": "11,746",
    "Area": 3733,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Idaho",
    "Population": "10,500",
    "Area": 1456,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Illinois",
    "Population": "65,737",
    "Area": 855,
    "StatisticalArea": "Quincy, IL-MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alexander",
    "StateorEq": "Illinois",
    "Population": "5,240",
    "Area": 236,
    "StatisticalArea": "Cape Girardeau, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bond",
    "StateorEq": "Illinois",
    "Population": "16,725",
    "Area": 380,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "Illinois",
    "Population": "53,448",
    "Area": 280,
    "StatisticalArea": "Rockford, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Illinois",
    "Population": "6,244",
    "Area": 305,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bureau",
    "StateorEq": "Illinois",
    "Population": "33,244",
    "Area": 869,
    "StatisticalArea": "Ottawa, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Illinois",
    "Population": "4,437",
    "Area": 253,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Illinois",
    "Population": "15,702",
    "Area": 445,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Illinois",
    "Population": "13,042",
    "Area": 375,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Champaign",
    "StateorEq": "Illinois",
    "Population": "205,865",
    "Area": 996,
    "StatisticalArea": "Champaign-Urbana, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Christian",
    "StateorEq": "Illinois",
    "Population": "34,032",
    "Area": 709,
    "StatisticalArea": "Taylorville, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Illinois",
    "Population": "15,455",
    "Area": 501,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Illinois",
    "Population": "13,288",
    "Area": 468,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Illinois",
    "Population": "36,899",
    "Area": 474,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coles",
    "StateorEq": "Illinois",
    "Population": "46,863",
    "Area": 508,
    "StatisticalArea": "Charleston-Mattoon, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cook",
    "StateorEq": "Illinois",
    "Population": "5,275,541",
    "Area": 944,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Illinois",
    "Population": "18,679",
    "Area": 443,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "Illinois",
    "Population": "10,450",
    "Area": 345,
    "StatisticalArea": "Charleston-Mattoon, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeKalb",
    "StateorEq": "Illinois",
    "Population": "100,420",
    "Area": 631,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeWitt",
    "StateorEq": "Illinois",
    "Population": "15,516",
    "Area": 397,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Illinois",
    "Population": "19,740",
    "Area": 416,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "DuPage",
    "StateorEq": "Illinois",
    "Population": "932,877",
    "Area": 327,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Edgar",
    "StateorEq": "Illinois",
    "Population": "16,866",
    "Area": 623,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Edwards",
    "StateorEq": "Illinois",
    "Population": "6,245",
    "Area": 222,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Effingham",
    "StateorEq": "Illinois",
    "Population": "34,668",
    "Area": 478,
    "StatisticalArea": "Effingham, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Illinois",
    "Population": "21,488",
    "Area": 716,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ford",
    "StateorEq": "Illinois",
    "Population": "13,534",
    "Area": 485,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Illinois",
    "Population": "37,804",
    "Area": 408,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "Illinois",
    "Population": "33,609",
    "Area": 865,
    "StatisticalArea": "Peoria, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gallatin",
    "StateorEq": "Illinois",
    "Population": "4,946",
    "Area": 322,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Illinois",
    "Population": "11,985",
    "Area": 543,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grundy",
    "StateorEq": "Illinois",
    "Population": "52,533",
    "Area": 418,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Illinois",
    "Population": "7,993",
    "Area": 434,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Illinois",
    "Population": "17,620",
    "Area": 793,
    "StatisticalArea": "Fort Madison-Keokuk, IA-IL-MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hardin",
    "StateorEq": "Illinois",
    "Population": "3,649",
    "Area": 177,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Henderson",
    "StateorEq": "Illinois",
    "Population": "6,387",
    "Area": 378,
    "StatisticalArea": "Burlington, IA-IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Illinois",
    "Population": "49,284",
    "Area": 822,
    "StatisticalArea": "Davenport-Moline-Rock Island, IA-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Iroquois",
    "StateorEq": "Illinois",
    "Population": "27,077",
    "Area": 1117,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Illinois",
    "Population": "52,974",
    "Area": 584,
    "StatisticalArea": "Carbondale-Marion, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "Illinois",
    "Population": "9,287",
    "Area": 494,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Illinois",
    "Population": "37,113",
    "Area": 571,
    "StatisticalArea": "Mount Vernon, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jersey",
    "StateorEq": "Illinois",
    "Population": "21,512",
    "Area": 369,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jo Daviess",
    "StateorEq": "Illinois",
    "Population": "22,035",
    "Area": 600,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Illinois",
    "Population": "13,308",
    "Area": 343,
    "StatisticalArea": "Carbondale-Marion, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kane",
    "StateorEq": "Illinois",
    "Population": "516,522",
    "Area": 519,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kankakee",
    "StateorEq": "Illinois",
    "Population": "107,502",
    "Area": 676,
    "StatisticalArea": "Kankakee, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kendall",
    "StateorEq": "Illinois",
    "Population": "131,869",
    "Area": 320,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Illinois",
    "Population": "49,967",
    "Area": 716,
    "StatisticalArea": "Galesburg, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Illinois",
    "Population": "714,342",
    "Area": 443,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "LaSalle",
    "StateorEq": "Illinois",
    "Population": "109,658",
    "Area": 1135,
    "StatisticalArea": "Ottawa, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Illinois",
    "Population": "15,280",
    "Area": 372,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Illinois",
    "Population": "34,145",
    "Area": 724,
    "StatisticalArea": "Dixon, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Livingston",
    "StateorEq": "Illinois",
    "Population": "35,815",
    "Area": 1043,
    "StatisticalArea": "Pontiac, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Illinois",
    "Population": "27,987",
    "Area": 618,
    "StatisticalArea": "Lincoln, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Macon",
    "StateorEq": "Illinois",
    "Population": "103,998",
    "Area": 572,
    "StatisticalArea": "Decatur, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Macoupin",
    "StateorEq": "Illinois",
    "Population": "44,967",
    "Area": 386,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Illinois",
    "Population": "265,859",
    "Area": 539,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Illinois",
    "Population": "37,729",
    "Area": 237,
    "StatisticalArea": "Centralia, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Illinois",
    "Population": "11,742",
    "Area": 589,
    "StatisticalArea": "Peoria, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mason",
    "StateorEq": "Illinois",
    "Population": "13,086",
    "Area": 603,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Massac",
    "StateorEq": "Illinois",
    "Population": "14,169",
    "Area": 242,
    "StatisticalArea": "Paducah, KY-IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McDonough",
    "StateorEq": "Illinois",
    "Population": "27,238",
    "Area": 580,
    "StatisticalArea": "Macomb, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McHenry",
    "StateorEq": "Illinois",
    "Population": "310,229",
    "Area": 862,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McLean",
    "StateorEq": "Illinois",
    "Population": "170,954",
    "Area": 1186,
    "StatisticalArea": "Bloomington, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Menard",
    "StateorEq": "Illinois",
    "Population": "12,297",
    "Area": 314,
    "StatisticalArea": "Springfield, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "Illinois",
    "Population": "15,699",
    "Area": 561,
    "StatisticalArea": "Davenport-Moline-Rock Island, IA-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Illinois",
    "Population": "34,962",
    "Area": 385,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Illinois",
    "Population": "28,288",
    "Area": 703,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Illinois",
    "Population": "32,915",
    "Area": 568,
    "StatisticalArea": "Jacksonville, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Moultrie",
    "StateorEq": "Illinois",
    "Population": "14,526",
    "Area": 335,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ogle",
    "StateorEq": "Illinois",
    "Population": "51,788",
    "Area": 758,
    "StatisticalArea": "Rochelle, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Peoria",
    "StateorEq": "Illinois",
    "Population": "181,830",
    "Area": 618,
    "StatisticalArea": "Peoria, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Illinois",
    "Population": "20,945",
    "Area": 441,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Piatt",
    "StateorEq": "Illinois",
    "Population": "16,673",
    "Area": 439,
    "StatisticalArea": "Champaign-Urbana, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Illinois",
    "Population": "14,739",
    "Area": 831,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pope",
    "StateorEq": "Illinois",
    "Population": "3,763",
    "Area": 368,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pulaski",
    "StateorEq": "Illinois",
    "Population": "5,193",
    "Area": 199,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "Illinois",
    "Population": "5,637",
    "Area": 160,
    "StatisticalArea": "Ottawa, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "Illinois",
    "Population": "30,163",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Richland",
    "StateorEq": "Illinois",
    "Population": "15,813",
    "Area": 360,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rock Island",
    "StateorEq": "Illinois",
    "Population": "144,672",
    "Area": 427,
    "StatisticalArea": "Davenport-Moline-Rock Island, IA-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Clair",
    "StateorEq": "Illinois",
    "Population": "257,400",
    "Area": 379,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Saline",
    "StateorEq": "Illinois",
    "Population": "23,768",
    "Area": 868,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sangamon",
    "StateorEq": "Illinois",
    "Population": "196,343",
    "Area": 437,
    "StatisticalArea": "Springfield, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Schuyler",
    "StateorEq": "Illinois",
    "Population": "6,902",
    "Area": 250,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Illinois",
    "Population": "4,949",
    "Area": 758,
    "StatisticalArea": "Jacksonville, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Illinois",
    "Population": "20,990",
    "Area": 657,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stark",
    "StateorEq": "Illinois",
    "Population": "5,400",
    "Area": 288,
    "StatisticalArea": "Peoria, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stephenson",
    "StateorEq": "Illinois",
    "Population": "44,630",
    "Area": 564,
    "StatisticalArea": "Freeport, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tazewell",
    "StateorEq": "Illinois",
    "Population": "131,343",
    "Area": 646,
    "StatisticalArea": "Peoria, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Illinois",
    "Population": "17,244",
    "Area": 413,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Vermilion",
    "StateorEq": "Illinois",
    "Population": "74,188",
    "Area": 898,
    "StatisticalArea": "Danville, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wabash",
    "StateorEq": "Illinois",
    "Population": "11,361",
    "Area": 223,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Illinois",
    "Population": "16,835",
    "Area": 542,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Illinois",
    "Population": "13,761",
    "Area": 562,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Illinois",
    "Population": "16,179",
    "Area": 713,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "White",
    "StateorEq": "Illinois",
    "Population": "13,877",
    "Area": 494,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Whiteside",
    "StateorEq": "Illinois",
    "Population": "55,691",
    "Area": 684,
    "StatisticalArea": "Sterling, IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Will",
    "StateorEq": "Illinois",
    "Population": "696,355",
    "Area": 835,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Williamson",
    "StateorEq": "Illinois",
    "Population": "67,153",
    "Area": 420,
    "StatisticalArea": "Carbondale-Marion, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Winnebago",
    "StateorEq": "Illinois",
    "Population": "285,350",
    "Area": 513,
    "StatisticalArea": "Rockford, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Woodford",
    "StateorEq": "Illinois",
    "Population": "38,467",
    "Area": 527,
    "StatisticalArea": "Peoria, IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Indiana",
    "Population": "35,809",
    "Area": 339,
    "StatisticalArea": "Decatur, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Allen",
    "StateorEq": "Indiana",
    "Population": "385,410",
    "Area": 657,
    "StatisticalArea": "Fort Wayne, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bartholomew",
    "StateorEq": "Indiana",
    "Population": "82,208",
    "Area": 407,
    "StatisticalArea": "Columbus, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Indiana",
    "Population": "8,719",
    "Area": 406,
    "StatisticalArea": "Lafayette-West Lafayette, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Blackford",
    "StateorEq": "Indiana",
    "Population": "12,112",
    "Area": 165,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "Indiana",
    "Population": "70,812",
    "Area": 423,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Indiana",
    "Population": "15,475",
    "Area": 312,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Indiana",
    "Population": "20,306",
    "Area": 372,
    "StatisticalArea": "Lafayette-West Lafayette, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Indiana",
    "Population": "37,870",
    "Area": 412,
    "StatisticalArea": "Logansport, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Indiana",
    "Population": "121,093",
    "Area": 373,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Indiana",
    "Population": "26,466",
    "Area": 358,
    "StatisticalArea": "Terre Haute, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Indiana",
    "Population": "33,190",
    "Area": 405,
    "StatisticalArea": "Frankfort, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Indiana",
    "Population": "10,526",
    "Area": 306,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Daviess",
    "StateorEq": "Indiana",
    "Population": "33,381",
    "Area": 429,
    "StatisticalArea": "Washington, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dearborn",
    "StateorEq": "Indiana",
    "Population": "50,679",
    "Area": 305,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Decatur",
    "StateorEq": "Indiana",
    "Population": "26,472",
    "Area": 373,
    "StatisticalArea": "Greensburg, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeKalb",
    "StateorEq": "Indiana",
    "Population": "43,265",
    "Area": 363,
    "StatisticalArea": "Auburn, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Delaware",
    "StateorEq": "Indiana",
    "Population": "111,903",
    "Area": 392,
    "StatisticalArea": "Muncie, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dubois",
    "StateorEq": "Indiana",
    "Population": "43,637",
    "Area": 427,
    "StatisticalArea": "Jasper, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Elkhart",
    "StateorEq": "Indiana",
    "Population": "207,047",
    "Area": 463,
    "StatisticalArea": "Elkhart-Goshen, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Indiana",
    "Population": "23,398",
    "Area": 215,
    "StatisticalArea": "Connersville, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Floyd",
    "StateorEq": "Indiana",
    "Population": "80,484",
    "Area": 148,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fountain",
    "StateorEq": "Indiana",
    "Population": "16,479",
    "Area": 396,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Indiana",
    "Population": "22,785",
    "Area": 384,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "Indiana",
    "Population": "20,480",
    "Area": 368,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gibson",
    "StateorEq": "Indiana",
    "Population": "33,011",
    "Area": 487,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Indiana",
    "Population": "66,674",
    "Area": 414,
    "StatisticalArea": "Marion, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Indiana",
    "Population": "30,803",
    "Area": 543,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Indiana",
    "Population": "347,467",
    "Area": 394,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Indiana",
    "Population": "79,840",
    "Area": 306,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "Indiana",
    "Population": "39,654",
    "Area": 485,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hendricks",
    "StateorEq": "Indiana",
    "Population": "174,788",
    "Area": 407,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Indiana",
    "Population": "48,914",
    "Area": 392,
    "StatisticalArea": "New Castle, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Howard",
    "StateorEq": "Indiana",
    "Population": "83,658",
    "Area": 293,
    "StatisticalArea": "Kokomo, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Huntington",
    "StateorEq": "Indiana",
    "Population": "36,662",
    "Area": 383,
    "StatisticalArea": "Huntington, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Indiana",
    "Population": "46,428",
    "Area": 509,
    "StatisticalArea": "Seymour, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "Indiana",
    "Population": "32,918",
    "Area": 560,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jay",
    "StateorEq": "Indiana",
    "Population": "20,478",
    "Area": 384,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Indiana",
    "Population": "33,147",
    "Area": 361,
    "StatisticalArea": "Madison, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jennings",
    "StateorEq": "Indiana",
    "Population": "27,613",
    "Area": 377,
    "StatisticalArea": "North Vernon, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Indiana",
    "Population": "161,765",
    "Area": 320,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Indiana",
    "Population": "36,282",
    "Area": 516,
    "StatisticalArea": "Vincennes, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kosciusko",
    "StateorEq": "Indiana",
    "Population": "80,240",
    "Area": 531,
    "StatisticalArea": "Warsaw, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "LaGrange",
    "StateorEq": "Indiana",
    "Population": "40,446",
    "Area": 380,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Indiana",
    "Population": "498,700",
    "Area": 499,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "LaPorte",
    "StateorEq": "Indiana",
    "Population": "112,417",
    "Area": 598,
    "StatisticalArea": "Michigan City-La Porte, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Indiana",
    "Population": "45,011",
    "Area": 449,
    "StatisticalArea": "Bedford, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Indiana",
    "Population": "130,129",
    "Area": 452,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Indiana",
    "Population": "977,203",
    "Area": 396,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Indiana",
    "Population": "46,095",
    "Area": 444,
    "StatisticalArea": "Plymouth, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Martin",
    "StateorEq": "Indiana",
    "Population": "9,812",
    "Area": 336,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Miami",
    "StateorEq": "Indiana",
    "Population": "35,962",
    "Area": 374,
    "StatisticalArea": "Peru, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Indiana",
    "Population": "139,718",
    "Area": 395,
    "StatisticalArea": "Bloomington, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Indiana",
    "Population": "37,936",
    "Area": 505,
    "StatisticalArea": "Crawfordsville, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Indiana",
    "Population": "71,780",
    "Area": 404,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Newton",
    "StateorEq": "Indiana",
    "Population": "13,830",
    "Area": 402,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Noble",
    "StateorEq": "Indiana",
    "Population": "47,457",
    "Area": 411,
    "StatisticalArea": "Kendallville, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ohio",
    "StateorEq": "Indiana",
    "Population": "5,940",
    "Area": 86,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "Indiana",
    "Population": "19,867",
    "Area": 398,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Owen",
    "StateorEq": "Indiana",
    "Population": "21,321",
    "Area": 385,
    "StatisticalArea": "Bloomington, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Parke",
    "StateorEq": "Indiana",
    "Population": "16,156",
    "Area": 445,
    "StatisticalArea": "Terre-Haute, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Indiana",
    "Population": "19,170",
    "Area": 382,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Indiana",
    "Population": "12,250",
    "Area": 334,
    "StatisticalArea": "Jasper, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Porter",
    "StateorEq": "Indiana",
    "Population": "173,215",
    "Area": 418,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Posey",
    "StateorEq": "Indiana",
    "Population": "25,222",
    "Area": 410,
    "StatisticalArea": "Evansville, IN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pulaski",
    "StateorEq": "Indiana",
    "Population": "12,514",
    "Area": 434,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "Indiana",
    "Population": "36,726",
    "Area": 481,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "Indiana",
    "Population": "24,502",
    "Area": 452,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ripley",
    "StateorEq": "Indiana",
    "Population": "28,995",
    "Area": 446,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rush",
    "StateorEq": "Indiana",
    "Population": "16,752",
    "Area": 408,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "St. Joseph",
    "StateorEq": "Indiana",
    "Population": "272,912",
    "Area": 458,
    "StatisticalArea": "South Bend-Mishawaka, IN-MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Indiana",
    "Population": "24,384",
    "Area": 190,
    "StatisticalArea": "Scottsburg, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Indiana",
    "Population": "45,055",
    "Area": 411,
    "StatisticalArea": "Indianapolis-Carmel-Anderson, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Spencer",
    "StateorEq": "Indiana",
    "Population": "19,810",
    "Area": 397,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Starke",
    "StateorEq": "Indiana",
    "Population": "23,371",
    "Area": 309,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Steuben",
    "StateorEq": "Indiana",
    "Population": "34,435",
    "Area": 309,
    "StatisticalArea": "Angola, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sullivan",
    "StateorEq": "Indiana",
    "Population": "20,817",
    "Area": 447,
    "StatisticalArea": "Terre Haute, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Switzerland",
    "StateorEq": "Indiana",
    "Population": "9,737",
    "Area": 221,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tippecanoe",
    "StateorEq": "Indiana",
    "Population": "186,251",
    "Area": 500,
    "StatisticalArea": "Lafayette-West Lafayette, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tipton",
    "StateorEq": "Indiana",
    "Population": "15,359",
    "Area": 261,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Indiana",
    "Population": "7,087",
    "Area": 161,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Vanderburgh",
    "StateorEq": "Indiana",
    "Population": "180,136",
    "Area": 233,
    "StatisticalArea": "Evansville, IN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Vermillion",
    "StateorEq": "Indiana",
    "Population": "15,439",
    "Area": 257,
    "StatisticalArea": "Terre Haute, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Vigo",
    "StateorEq": "Indiana",
    "Population": "106,153",
    "Area": 403,
    "StatisticalArea": "Terre Haute, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wabash",
    "StateorEq": "Indiana",
    "Population": "30,976",
    "Area": 412,
    "StatisticalArea": "Wabash, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Indiana",
    "Population": "8,440",
    "Area": 365,
    "StatisticalArea": "Lafayette-West Lafayette, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warrick",
    "StateorEq": "Indiana",
    "Population": "63,898",
    "Area": 385,
    "StatisticalArea": "Evansville, IN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Indiana",
    "Population": "28,182",
    "Area": 514,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Indiana",
    "Population": "66,553",
    "Area": 402,
    "StatisticalArea": "Richmond, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wells",
    "StateorEq": "Indiana",
    "Population": "28,180",
    "Area": 368,
    "StatisticalArea": "Bluffton, IN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "White",
    "StateorEq": "Indiana",
    "Population": "24,688",
    "Area": 505,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Whitley",
    "StateorEq": "Indiana",
    "Population": "34,191",
    "Area": 336,
    "StatisticalArea": "Fort Wayne, IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adair",
    "StateorEq": "Iowa",
    "Population": "7,496",
    "Area": 569,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Iowa",
    "Population": "3,704",
    "Area": 424,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Allamakee",
    "StateorEq": "Iowa",
    "Population": "14,061",
    "Area": 640,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Appanoose",
    "StateorEq": "Iowa",
    "Population": "12,317",
    "Area": 496,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Audubon",
    "StateorEq": "Iowa",
    "Population": "5,674",
    "Area": 443,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Iowa",
    "Population": "25,575",
    "Area": 716,
    "StatisticalArea": "Cedar Rapids, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Black Hawk",
    "StateorEq": "Iowa",
    "Population": "131,144",
    "Area": 567,
    "StatisticalArea": "Waterloo-Cedar Falls, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "Iowa",
    "Population": "26,715",
    "Area": 572,
    "StatisticalArea": "Ames, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bremer",
    "StateorEq": "Iowa",
    "Population": "24,988",
    "Area": 428,
    "StatisticalArea": "Waterloo-Cedar Falls, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Buchanan",
    "StateorEq": "Iowa",
    "Population": "20,565",
    "Area": 571,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Buena Vista",
    "StateorEq": "Iowa",
    "Population": "20,823",
    "Area": 575,
    "StatisticalArea": "Storm Lake, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Iowa",
    "Population": "14,334",
    "Area": 580,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Iowa",
    "Population": "9,927",
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Iowa",
    "Population": "20,760",
    "Area": 569,
    "StatisticalArea": "Carroll, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Iowa",
    "Population": "13,127",
    "Area": 564,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cedar",
    "StateorEq": "Iowa",
    "Population": "18,505",
    "Area": 580,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cerro Gordo",
    "StateorEq": "Iowa",
    "Population": "43,127",
    "Area": 568,
    "StatisticalArea": "Mason City, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "Iowa",
    "Population": "11,658",
    "Area": 577,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chickasaw",
    "StateorEq": "Iowa",
    "Population": "12,012",
    "Area": 505,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clarke",
    "StateorEq": "Iowa",
    "Population": "9,748",
    "Area": 431,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Iowa",
    "Population": "16,384",
    "Area": 569,
    "StatisticalArea": "Spencer, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clayton",
    "StateorEq": "Iowa",
    "Population": "17,043",
    "Area": 779,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Iowa",
    "Population": "46,460",
    "Area": 695,
    "StatisticalArea": "Clinton, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Iowa",
    "Population": "16,525",
    "Area": 714,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dallas",
    "StateorEq": "Iowa",
    "Population": "99,678",
    "Area": 586,
    "StatisticalArea": "Des Moines-West Des Moines, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Davis",
    "StateorEq": "Iowa",
    "Population": "9,110",
    "Area": 503,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Decatur",
    "StateorEq": "Iowa",
    "Population": "7,645",
    "Area": 532,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Delaware",
    "StateorEq": "Iowa",
    "Population": "17,488",
    "Area": 578,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Des Moines",
    "StateorEq": "Iowa",
    "Population": "38,910",
    "Area": 416,
    "StatisticalArea": "Burlington, IA-IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dickinson",
    "StateorEq": "Iowa",
    "Population": "17,703",
    "Area": 381,
    "StatisticalArea": "Spirit Lake, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dubuque",
    "StateorEq": "Iowa",
    "Population": "99,266",
    "Area": 608,
    "StatisticalArea": "Dubuque, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Emmet",
    "StateorEq": "Iowa",
    "Population": "9,388",
    "Area": 396,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Iowa",
    "Population": "19,509",
    "Area": 731,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Floyd",
    "StateorEq": "Iowa",
    "Population": "15,627",
    "Area": 501,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Iowa",
    "Population": "10,019",
    "Area": 582,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fremont",
    "StateorEq": "Iowa",
    "Population": "6,605",
    "Area": 511,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Iowa",
    "Population": "8,771",
    "Area": 568,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grundy",
    "StateorEq": "Iowa",
    "Population": "12,329",
    "Area": 503,
    "StatisticalArea": "Waterloo-Cedar Falls, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Guthrie",
    "StateorEq": "Iowa",
    "Population": "10,623",
    "Area": 591,
    "StatisticalArea": "Des Moines-West Des Moines, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Iowa",
    "Population": "15,039",
    "Area": 577,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Iowa",
    "Population": "10,795",
    "Area": 571,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hardin",
    "StateorEq": "Iowa",
    "Population": "16,878",
    "Area": 569,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "Iowa",
    "Population": "14,582",
    "Area": 697,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Iowa",
    "Population": "20,482",
    "Area": 434,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Howard",
    "StateorEq": "Iowa",
    "Population": "9,469",
    "Area": 473,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Humboldt",
    "StateorEq": "Iowa",
    "Population": "9,597",
    "Area": 434,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ida",
    "StateorEq": "Iowa",
    "Population": "7,005",
    "Area": 432,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Iowa",
    "StateorEq": "Iowa",
    "Population": "16,662",
    "Area": 586,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Iowa",
    "Population": "19,485",
    "Area": 636,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "Iowa",
    "Population": "37,813",
    "Area": 730,
    "StatisticalArea": "Des Moines, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Iowa",
    "Population": "15,663",
    "Area": 435,
    "StatisticalArea": "Fairfield, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Iowa",
    "Population": "152,854",
    "Area": 614,
    "StatisticalArea": "Iowa City, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jones",
    "StateorEq": "Iowa",
    "Population": "20,646",
    "Area": 575,
    "StatisticalArea": "Cedar Rapids, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Keokuk",
    "StateorEq": "Iowa",
    "Population": "10,033",
    "Area": 579,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kossuth",
    "StateorEq": "Iowa",
    "Population": "14,828",
    "Area": 973,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Iowa",
    "Population": "33,555",
    "Area": 517,
    "StatisticalArea": "Fort Madison-Keokuk, IA-IL-MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Linn",
    "StateorEq": "Iowa",
    "Population": "230,299",
    "Area": 718,
    "StatisticalArea": "Cedar Rapids, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Louisa",
    "StateorEq": "Iowa",
    "Population": "10,837",
    "Area": 402,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lucas",
    "StateorEq": "Iowa",
    "Population": "8,634",
    "Area": 431,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lyon",
    "StateorEq": "Iowa",
    "Population": "11,934",
    "Area": 588,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Iowa",
    "Population": "16,548",
    "Area": 561,
    "StatisticalArea": "Des Moines-West Des Moines, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mahaska",
    "StateorEq": "Iowa",
    "Population": "22,190",
    "Area": 571,
    "StatisticalArea": "Oskaloosa, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Iowa",
    "Population": "33,414",
    "Area": 554,
    "StatisticalArea": "Pella, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Iowa",
    "Population": "40,105",
    "Area": 572,
    "StatisticalArea": "Marshalltown, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mills",
    "StateorEq": "Iowa",
    "Population": "14,484",
    "Area": 437,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mitchell",
    "StateorEq": "Iowa",
    "Population": "10,565",
    "Area": 469,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Monona",
    "StateorEq": "Iowa",
    "Population": "8,751",
    "Area": 693,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Iowa",
    "Population": "7,577",
    "Area": 433,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Iowa",
    "Population": "10,330",
    "Area": 424,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Muscatine",
    "StateorEq": "Iowa",
    "Population": "43,235",
    "Area": 439,
    "StatisticalArea": "Muscatine, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "O'Brien",
    "StateorEq": "Iowa",
    "Population": "14,182",
    "Area": 573,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Osceola",
    "StateorEq": "Iowa",
    "Population": "6,192",
    "Area": 399,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Page",
    "StateorEq": "Iowa",
    "Population": "15,211",
    "Area": 535,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Palo Alto",
    "StateorEq": "Iowa",
    "Population": "8,996",
    "Area": 564,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Plymouth",
    "StateorEq": "Iowa",
    "Population": "25,698",
    "Area": 864,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pocahontas",
    "StateorEq": "Iowa",
    "Population": "7,078",
    "Area": 578,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Iowa",
    "Population": "492,401",
    "Area": 570,
    "StatisticalArea": "Des Moines-West Des Moines, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pottawattamie",
    "StateorEq": "Iowa",
    "Population": "93,667",
    "Area": 954,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Poweshiek",
    "StateorEq": "Iowa",
    "Population": "18,662",
    "Area": 585,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ringgold",
    "StateorEq": "Iowa",
    "Population": "4,663",
    "Area": 538,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sac",
    "StateorEq": "Iowa",
    "Population": "9,814",
    "Area": 576,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Iowa",
    "Population": "174,669",
    "Area": 458,
    "StatisticalArea": "Davenport-Moline-Rock Island, IA-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Iowa",
    "Population": "11,746",
    "Area": 591,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sioux",
    "StateorEq": "Iowa",
    "Population": "35,872",
    "Area": 768,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Story",
    "StateorEq": "Iowa",
    "Population": "98,537",
    "Area": 573,
    "StatisticalArea": "Ames, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tama",
    "StateorEq": "Iowa",
    "Population": "17,135",
    "Area": 721,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Taylor",
    "StateorEq": "Iowa",
    "Population": "5,896",
    "Area": 534,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Iowa",
    "Population": "12,138",
    "Area": 424,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Van Buren",
    "StateorEq": "Iowa",
    "Population": "7,203",
    "Area": 485,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wapello",
    "StateorEq": "Iowa",
    "Population": "35,437",
    "Area": 432,
    "StatisticalArea": "Ottumwa, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Iowa",
    "Population": "52,403",
    "Area": 572,
    "StatisticalArea": "Des Moines-West Des Moines, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Iowa",
    "Population": "22,565",
    "Area": 569,
    "StatisticalArea": "Iowa City, IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Iowa",
    "Population": "6,497",
    "Area": 526,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Webster",
    "StateorEq": "Iowa",
    "Population": "36,999",
    "Area": 715,
    "StatisticalArea": "Fort Dodge, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Winnebago",
    "StateorEq": "Iowa",
    "Population": "10,679",
    "Area": 400,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Winneshiek",
    "StateorEq": "Iowa",
    "Population": "20,070",
    "Area": 690,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Woodbury",
    "StateorEq": "Iowa",
    "Population": "105,941",
    "Area": 873,
    "StatisticalArea": "Sioux City, IA-NE-SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Worth",
    "StateorEq": "Iowa",
    "Population": "7,443",
    "Area": 400,
    "StatisticalArea": "Mason City, IA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wright",
    "StateorEq": "Iowa",
    "Population": "12,943",
    "Area": 581,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Allen",
    "StateorEq": "Kansas",
    "Population": "12,526",
    "Area": 503,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Anderson",
    "StateorEq": "Kansas",
    "Population": "7,836",
    "Area": 583,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Atchison",
    "StateorEq": "Kansas",
    "Population": "16,348",
    "Area": 432,
    "StatisticalArea": "Atchison, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Barber",
    "StateorEq": "Kansas",
    "Population": "4,228",
    "Area": 1134,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Barton",
    "StateorEq": "Kansas",
    "Population": "25,493",
    "Area": 894,
    "StatisticalArea": "Great Bend, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bourbon",
    "StateorEq": "Kansas",
    "Population": "14,360",
    "Area": 637,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Kansas",
    "Population": "9,508",
    "Area": 571,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Kansas",
    "Population": "67,380",
    "Area": 1428,
    "StatisticalArea": "Wichita, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chase",
    "StateorEq": "Kansas",
    "Population": "2,572",
    "Area": 776,
    "StatisticalArea": "Emporia, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chautauqua",
    "StateorEq": "Kansas",
    "Population": "3,379",
    "Area": 642,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "Kansas",
    "Population": "19,362",
    "Area": 587,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cheyenne",
    "StateorEq": "Kansas",
    "Population": "2,616",
    "Area": 1020,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Kansas",
    "Population": "1,991",
    "Area": 975,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Kansas",
    "Population": "8,117",
    "Area": 644,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cloud",
    "StateorEq": "Kansas",
    "Population": "9,032",
    "Area": 716,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Coffey",
    "StateorEq": "Kansas",
    "Population": "8,360",
    "Area": 630,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Comanche",
    "StateorEq": "Kansas",
    "Population": "1,689",
    "Area": 788,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cowley",
    "StateorEq": "Kansas",
    "Population": "34,549",
    "Area": 1126,
    "StatisticalArea": "Winfield, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Kansas",
    "Population": "38,972",
    "Area": 593,
    "StatisticalArea": "Pittsburg, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Decatur",
    "StateorEq": "Kansas",
    "Population": "2,764",
    "Area": 894,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dickinson",
    "StateorEq": "Kansas",
    "Population": "18,402",
    "Area": 848,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Doniphan",
    "StateorEq": "Kansas",
    "Population": "7,510",
    "Area": 392,
    "StatisticalArea": "St. Joseph, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Kansas",
    "Population": "118,785",
    "Area": 457,
    "StatisticalArea": "Lawrence, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Edwards",
    "StateorEq": "Kansas",
    "Population": "2,907",
    "Area": 622,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Elk",
    "StateorEq": "Kansas",
    "Population": "2,483",
    "Area": 648,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ellis",
    "StateorEq": "Kansas",
    "Population": "28,934",
    "Area": 900,
    "StatisticalArea": "Hays, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ellsworth",
    "StateorEq": "Kansas",
    "Population": "6,376",
    "Area": 716,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Finney",
    "StateorEq": "Kansas",
    "Population": "38,470",
    "Area": 1300,
    "StatisticalArea": "Garden City, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ford",
    "StateorEq": "Kansas",
    "Population": "34,287",
    "Area": 1099,
    "StatisticalArea": "Dodge City, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Kansas",
    "Population": "25,996",
    "Area": 574,
    "StatisticalArea": "Ottawa, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Geary",
    "StateorEq": "Kansas",
    "Population": "36,739",
    "Area": 384,
    "StatisticalArea": "Manhattan, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gove",
    "StateorEq": "Kansas",
    "Population": "2,718",
    "Area": 1072,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Graham",
    "StateorEq": "Kansas",
    "Population": "2,415",
    "Area": 898,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Kansas",
    "Population": "7,352",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gray",
    "StateorEq": "Kansas",
    "Population": "5,653",
    "Area": 869,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greeley",
    "StateorEq": "Kansas",
    "Population": "1,284",
    "Area": 778,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greenwood",
    "StateorEq": "Kansas",
    "Population": "6,016",
    "Area": 1140,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Kansas",
    "Population": "2,518",
    "Area": 996,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harper",
    "StateorEq": "Kansas",
    "Population": "5,485",
    "Area": 802,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harvey",
    "StateorEq": "Kansas",
    "Population": "34,024",
    "Area": 539,
    "StatisticalArea": "Wichita, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Haskell",
    "StateorEq": "Kansas",
    "Population": "3,780",
    "Area": 577,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hodgeman",
    "StateorEq": "Kansas",
    "Population": "1,723",
    "Area": 860,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Kansas",
    "Population": "13,232",
    "Area": 657,
    "StatisticalArea": "Topeka, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Kansas",
    "Population": "18,368",
    "Area": 536,
    "StatisticalArea": "Topeka, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jewell",
    "StateorEq": "Kansas",
    "Population": "2,932",
    "Area": 909,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Kansas",
    "Population": "609,863",
    "Area": 477,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kearny",
    "StateorEq": "Kansas",
    "Population": "3,983",
    "Area": 870,
    "StatisticalArea": "Garden City, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kingman",
    "StateorEq": "Kansas",
    "Population": "7,470",
    "Area": 864,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kiowa",
    "StateorEq": "Kansas",
    "Population": "2,460",
    "Area": 722,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Labette",
    "StateorEq": "Kansas",
    "Population": "20,184",
    "Area": 649,
    "StatisticalArea": "Parsons, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lane",
    "StateorEq": "Kansas",
    "Population": "1,574",
    "Area": 717,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Leavenworth",
    "StateorEq": "Kansas",
    "Population": "81,881",
    "Area": 463,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Kansas",
    "Population": "2,939",
    "Area": 719,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Linn",
    "StateorEq": "Kansas",
    "Population": "9,591",
    "Area": 599,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Kansas",
    "Population": "2,762",
    "Area": 1073,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lyon",
    "StateorEq": "Kansas",
    "Population": "32,179",
    "Area": 851,
    "StatisticalArea": "Emporia, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Kansas",
    "Population": "11,823",
    "Area": 903,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Kansas",
    "Population": "10,038",
    "Area": 900,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McPherson",
    "StateorEq": "Kansas",
    "Population": "30,223",
    "Area": 943,
    "StatisticalArea": "McPherson, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Meade",
    "StateorEq": "Kansas",
    "Population": "4,055",
    "Area": 978,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Miami",
    "StateorEq": "Kansas",
    "Population": "34,191",
    "Area": 577,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mitchell",
    "StateorEq": "Kansas",
    "Population": "5,796",
    "Area": 700,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Kansas",
    "Population": "31,486",
    "Area": 645,
    "StatisticalArea": "Coffeyville, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morris",
    "StateorEq": "Kansas",
    "Population": "5,386",
    "Area": 697,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morton",
    "StateorEq": "Kansas",
    "Population": "2,701",
    "Area": 730,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nemaha",
    "StateorEq": "Kansas",
    "Population": "10,273",
    "Area": 719,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Neosho",
    "StateorEq": "Kansas",
    "Population": "15,904",
    "Area": 572,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ness",
    "StateorEq": "Kansas",
    "Population": "2,687",
    "Area": 1075,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Norton",
    "StateorEq": "Kansas",
    "Population": "5,459",
    "Area": 878,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Osage",
    "StateorEq": "Kansas",
    "Population": "15,766",
    "Area": 704,
    "StatisticalArea": "Topeka, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Osborne",
    "StateorEq": "Kansas",
    "Population": "3,500",
    "Area": 893,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ottawa",
    "StateorEq": "Kansas",
    "Population": "5,735",
    "Area": 721,
    "StatisticalArea": "Salina, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pawnee",
    "StateorEq": "Kansas",
    "Population": "6,253",
    "Area": 754,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Phillips",
    "StateorEq": "Kansas",
    "Population": "4,981",
    "Area": 886,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pottawatomie",
    "StateorEq": "Kansas",
    "Population": "25,348",
    "Area": 844,
    "StatisticalArea": "Manhattan, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pratt",
    "StateorEq": "Kansas",
    "Population": "9,157",
    "Area": 735,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rawlins",
    "StateorEq": "Kansas",
    "Population": "2,561",
    "Area": 1070,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Reno",
    "StateorEq": "Kansas",
    "Population": "61,898",
    "Area": 1254,
    "StatisticalArea": "Hutchinson, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Republic",
    "StateorEq": "Kansas",
    "Population": "4,674",
    "Area": 716,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rice",
    "StateorEq": "Kansas",
    "Population": "9,427",
    "Area": 727,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Riley",
    "StateorEq": "Kansas",
    "Population": "71,959",
    "Area": 610,
    "StatisticalArea": "Manhattan, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rooks",
    "StateorEq": "Kansas",
    "Population": "4,919",
    "Area": 888,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rush",
    "StateorEq": "Kansas",
    "Population": "2,956",
    "Area": 718,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Russell",
    "StateorEq": "Kansas",
    "Population": "6,691",
    "Area": 885,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Saline",
    "StateorEq": "Kansas",
    "Population": "54,303",
    "Area": 720,
    "StatisticalArea": "Salina, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Kansas",
    "Population": "5,151",
    "Area": 718,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sedgwick",
    "StateorEq": "Kansas",
    "Population": "523,824",
    "Area": 1000,
    "StatisticalArea": "Wichita, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Seward",
    "StateorEq": "Kansas",
    "Population": "21,964",
    "Area": 640,
    "StatisticalArea": "Liberal, KS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shawnee",
    "StateorEq": "Kansas",
    "Population": "178,909",
    "Area": 550,
    "StatisticalArea": "Topeka, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sheridan",
    "StateorEq": "Kansas",
    "Population": "2,447",
    "Area": 896,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sherman",
    "StateorEq": "Kansas",
    "Population": "5,927",
    "Area": 1056,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Smith",
    "StateorEq": "Kansas",
    "Population": "3,570",
    "Area": 896,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stafford",
    "StateorEq": "Kansas",
    "Population": "4,072",
    "Area": 792,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stanton",
    "StateorEq": "Kansas",
    "Population": "2,084",
    "Area": 680,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stevens",
    "StateorEq": "Kansas",
    "Population": "5,250",
    "Area": 728,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sumner",
    "StateorEq": "Kansas",
    "Population": "22,382",
    "Area": 1182,
    "StatisticalArea": "Wichita, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Thomas",
    "StateorEq": "Kansas",
    "Population": "7,930",
    "Area": 1075,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Trego",
    "StateorEq": "Kansas",
    "Population": "2,808",
    "Area": 888,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wabaunsee",
    "StateorEq": "Kansas",
    "Population": "6,877",
    "Area": 798,
    "StatisticalArea": "Topeka, KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wallace",
    "StateorEq": "Kansas",
    "Population": "1,512",
    "Area": 914,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Kansas",
    "Population": "5,530",
    "Area": 898,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wichita",
    "StateorEq": "Kansas",
    "Population": "2,152",
    "Area": 719,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wilson",
    "StateorEq": "Kansas",
    "Population": "8,624",
    "Area": 574,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Woodson",
    "StateorEq": "Kansas",
    "Population": "3,115",
    "Area": 501,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wyandotte",
    "StateorEq": "Kansas",
    "Population": "169,245",
    "Area": 151,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adair",
    "StateorEq": "Kentucky",
    "Population": "18,903",
    "Area": 407,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Allen",
    "StateorEq": "Kentucky",
    "Population": "20,588",
    "Area": 3446,
    "StatisticalArea": "Bowling Green, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Anderson",
    "StateorEq": "Kentucky",
    "Population": "23,852",
    "Area": 203,
    "StatisticalArea": "Frankfort, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ballard",
    "StateorEq": "Kentucky",
    "Population": "7,728",
    "Area": 251,
    "StatisticalArea": "Paducah, KY-IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Barren",
    "StateorEq": "Kentucky",
    "Population": "44,485",
    "Area": 491,
    "StatisticalArea": "Glasgow, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bath",
    "StateorEq": "Kentucky",
    "Population": "12,750",
    "Area": 279,
    "StatisticalArea": "Mount Sterling, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bell",
    "StateorEq": "Kentucky",
    "Population": "24,097",
    "Area": 361,
    "StatisticalArea": "Middlesborough, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "Kentucky",
    "Population": "135,968",
    "Area": 246,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bourbon",
    "StateorEq": "Kentucky",
    "Population": "20,252",
    "Area": 291,
    "StatisticalArea": "Lexington-Fayette, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boyd",
    "StateorEq": "Kentucky",
    "Population": "48,261",
    "Area": 160,
    "StatisticalArea": "Huntington-Ashland, WV-KY-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boyle",
    "StateorEq": "Kentucky",
    "Population": "30,614",
    "Area": 182,
    "StatisticalArea": "Danville, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bracken",
    "StateorEq": "Kentucky",
    "Population": "8,400",
    "Area": 203,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Breathitt",
    "StateorEq": "Kentucky",
    "Population": "13,718",
    "Area": 495,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Breckinridge",
    "StateorEq": "Kentucky",
    "Population": "20,432",
    "Area": 572,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bullitt",
    "StateorEq": "Kentucky",
    "Population": "82,217",
    "Area": 299,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Kentucky",
    "Population": "12,371",
    "Area": 428,
    "StatisticalArea": "Bowling Green, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caldwell",
    "StateorEq": "Kentucky",
    "Population": "12,649",
    "Area": 347,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Calloway",
    "StateorEq": "Kentucky",
    "Population": "37,103",
    "Area": 386,
    "StatisticalArea": "Murray, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Campbell",
    "StateorEq": "Kentucky",
    "Population": "93,076",
    "Area": 152,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carlisle",
    "StateorEq": "Kentucky",
    "Population": "4,826",
    "Area": 192,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Kentucky",
    "Population": "10,810",
    "Area": 130,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carter",
    "StateorEq": "Kentucky",
    "Population": "26,627",
    "Area": 411,
    "StatisticalArea": "Huntington-Ashland, WV-KY-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Casey",
    "StateorEq": "Kentucky",
    "Population": "15,941",
    "Area": 446,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Christian",
    "StateorEq": "Kentucky",
    "Population": "72,748",
    "Area": 721,
    "StatisticalArea": "Clarksville, TN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Kentucky",
    "Population": "36,972",
    "Area": 254,
    "StatisticalArea": "Lexington-Fayette, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Kentucky",
    "Population": "20,345",
    "Area": 471,
    "StatisticalArea": "London, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Kentucky",
    "Population": "9,253",
    "Area": 198,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crittenden",
    "StateorEq": "Kentucky",
    "Population": "8,990",
    "Area": 362,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "Kentucky",
    "Population": "5,888",
    "Area": 306,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Daviess",
    "StateorEq": "Kentucky",
    "Population": "103,312",
    "Area": 462,
    "StatisticalArea": "Owensboro, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Edmonson",
    "StateorEq": "Kentucky",
    "Population": "12,126",
    "Area": 303,
    "StatisticalArea": "Bowling Green, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Elliott",
    "StateorEq": "Kentucky",
    "Population": "7,354",
    "Area": 234,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Estill",
    "StateorEq": "Kentucky",
    "Population": "14,163",
    "Area": 254,
    "StatisticalArea": "Richmond-Berea KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Kentucky",
    "Population": "322,570",
    "Area": 284,
    "StatisticalArea": "Lexington-Fayette, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fleming",
    "StateorEq": "Kentucky",
    "Population": "15,082",
    "Area": 351,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Floyd",
    "StateorEq": "Kentucky",
    "Population": "35,942",
    "Area": 394,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Kentucky",
    "Population": "51,541",
    "Area": 210,
    "StatisticalArea": "Frankfort, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "Kentucky",
    "Population": "6,515",
    "Area": 209,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gallatin",
    "StateorEq": "Kentucky",
    "Population": "8,690",
    "Area": 105,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garrard",
    "StateorEq": "Kentucky",
    "Population": "16,953",
    "Area": 231,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Kentucky",
    "Population": "24,941",
    "Area": 260,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Graves",
    "StateorEq": "Kentucky",
    "Population": "36,649",
    "Area": 556,
    "StatisticalArea": "Mayfield, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grayson",
    "StateorEq": "Kentucky",
    "Population": "26,420",
    "Area": 504,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Green",
    "StateorEq": "Kentucky",
    "Population": "11,107",
    "Area": 289,
    "StatisticalArea": "Campbellsville, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greenup",
    "StateorEq": "Kentucky",
    "Population": "35,962",
    "Area": 346,
    "StatisticalArea": "Huntington-Ashland, WV-KY-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Kentucky",
    "Population": "9,095",
    "Area": 189,
    "StatisticalArea": "Owensboro, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hardin",
    "StateorEq": "Kentucky",
    "Population": "110,702",
    "Area": 628,
    "StatisticalArea": "Elizabethtown-Fort Knox, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harlan",
    "StateorEq": "Kentucky",
    "Population": "26,831",
    "Area": 467,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "Kentucky",
    "Population": "18,692",
    "Area": 310,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hart",
    "StateorEq": "Kentucky",
    "Population": "19,288",
    "Area": 416,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Henderson",
    "StateorEq": "Kentucky",
    "Population": "44,793",
    "Area": 440,
    "StatisticalArea": "Evansville, IN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Kentucky",
    "Population": "15,678",
    "Area": 289,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hickman",
    "StateorEq": "Kentucky",
    "Population": "4,521",
    "Area": 244,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hopkins",
    "StateorEq": "Kentucky",
    "Population": "45,423",
    "Area": 551,
    "StatisticalArea": "Madisonville, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Kentucky",
    "Population": "12,955",
    "Area": 346,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Kentucky",
    "Population": "782,969",
    "Area": 385,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jessamine",
    "StateorEq": "Kentucky",
    "Population": "52,991",
    "Area": 173,
    "StatisticalArea": "Lexington-Fayette, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Kentucky",
    "Population": "22,680",
    "Area": 262,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kenton",
    "StateorEq": "Kentucky",
    "Population": "169,064",
    "Area": 163,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Knott",
    "StateorEq": "Kentucky",
    "Population": "14,251",
    "Area": 352,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Kentucky",
    "Population": "30,193",
    "Area": 388,
    "StatisticalArea": "London, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "LaRue",
    "StateorEq": "Kentucky",
    "Population": "14,867",
    "Area": 263,
    "StatisticalArea": "Elizabethtown-Fort Knox, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Laurel",
    "StateorEq": "Kentucky",
    "Population": "62,613",
    "Area": 436,
    "StatisticalArea": "London, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Kentucky",
    "Population": "16,293",
    "Area": 419,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Kentucky",
    "Population": "7,395",
    "Area": 210,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Leslie",
    "StateorEq": "Kentucky",
    "Population": "10,513",
    "Area": 404,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Letcher",
    "StateorEq": "Kentucky",
    "Population": "21,548",
    "Area": 339,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lewis",
    "StateorEq": "Kentucky",
    "Population": "13,080",
    "Area": 484,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Kentucky",
    "Population": "24,275",
    "Area": 337,
    "StatisticalArea": "Danville, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Livingston",
    "StateorEq": "Kentucky",
    "Population": "8,888",
    "Area": 316,
    "StatisticalArea": "Paducah, KY-IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Kentucky",
    "Population": "27,432",
    "Area": 556,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lyon",
    "StateorEq": "Kentucky",
    "Population": "8,680",
    "Area": 216,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Kentucky",
    "Population": "92,701",
    "Area": 441,
    "StatisticalArea": "Richmond-Berea, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Magoffin",
    "StateorEq": "Kentucky",
    "Population": "11,637",
    "Area": 310,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Kentucky",
    "Population": "19,581",
    "Area": 347,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Kentucky",
    "Population": "31,659",
    "Area": 305,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Martin",
    "StateorEq": "Kentucky",
    "Population": "11,287",
    "Area": 231,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mason",
    "StateorEq": "Kentucky",
    "Population": "17,120",
    "Area": 241,
    "StatisticalArea": "Maysville, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McCracken",
    "StateorEq": "Kentucky",
    "Population": "67,875",
    "Area": 251,
    "StatisticalArea": "Paducah, KY-IL Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McCreary",
    "StateorEq": "Kentucky",
    "Population": "16,888",
    "Area": 428,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McLean",
    "StateorEq": "Kentucky",
    "Population": "9,152",
    "Area": 254,
    "StatisticalArea": "Owensboro, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Meade",
    "StateorEq": "Kentucky",
    "Population": "30,003",
    "Area": 308,
    "StatisticalArea": "Elizabethtown-Fort Knox, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Menifee",
    "StateorEq": "Kentucky",
    "Population": "6,113",
    "Area": 204,
    "StatisticalArea": "Mount Sterling, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "Kentucky",
    "Population": "22,641",
    "Area": 251,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Metcalfe",
    "StateorEq": "Kentucky",
    "Population": "10,286",
    "Area": 291,
    "StatisticalArea": "Glasgow, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Kentucky",
    "Population": "11,338",
    "Area": 331,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Kentucky",
    "Population": "28,114",
    "Area": 199,
    "StatisticalArea": "Mount Sterling, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Kentucky",
    "Population": "13,726",
    "Area": 381,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Muhlenberg",
    "StateorEq": "Kentucky",
    "Population": "30,928",
    "Area": 475,
    "StatisticalArea": "Central City, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nelson",
    "StateorEq": "Kentucky",
    "Population": "46,738",
    "Area": 423,
    "StatisticalArea": "Bardstown, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nicholas",
    "StateorEq": "Kentucky",
    "Population": "7,537",
    "Area": 197,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ohio",
    "StateorEq": "Kentucky",
    "Population": "23,772",
    "Area": 594,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oldham",
    "StateorEq": "Kentucky",
    "Population": "67,607",
    "Area": 189,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Owen",
    "StateorEq": "Kentucky",
    "Population": "11,278",
    "Area": 352,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Owsley",
    "StateorEq": "Kentucky",
    "Population": "4,051",
    "Area": 198,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pendleton",
    "StateorEq": "Kentucky",
    "Population": "14,644",
    "Area": 280,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Kentucky",
    "Population": "28,473",
    "Area": 342,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Kentucky",
    "Population": "58,669",
    "Area": 788,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Powell",
    "StateorEq": "Kentucky",
    "Population": "13,129",
    "Area": 180,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pulaski",
    "StateorEq": "Kentucky",
    "Population": "65,034",
    "Area": 662,
    "StatisticalArea": "Somerset, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Robertson",
    "StateorEq": "Kentucky",
    "Population": "2,193",
    "Area": 100,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rockcastle",
    "StateorEq": "Kentucky",
    "Population": "16,037",
    "Area": 318,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rowan",
    "StateorEq": "Kentucky",
    "Population": "24,662",
    "Area": 281,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Russell",
    "StateorEq": "Kentucky",
    "Population": "17,991",
    "Area": 254,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Kentucky",
    "Population": "57,155",
    "Area": 285,
    "StatisticalArea": "Lexington-Fayette, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Kentucky",
    "Population": "48,065",
    "Area": 384,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Simpson",
    "StateorEq": "Kentucky",
    "Population": "19,594",
    "Area": 236,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Spencer",
    "StateorEq": "Kentucky",
    "Population": "19,490",
    "Area": 186,
    "StatisticalArea": "Louisville/Jefferson County, KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Taylor",
    "StateorEq": "Kentucky",
    "Population": "26,023",
    "Area": 270,
    "StatisticalArea": "Campbellsville, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Todd",
    "StateorEq": "Kentucky",
    "Population": "12,243",
    "Area": 376,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Trigg",
    "StateorEq": "Kentucky",
    "Population": "14,061",
    "Area": 443,
    "StatisticalArea": "Clarksville, TN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Trimble",
    "StateorEq": "Kentucky",
    "Population": "8,474",
    "Area": 149,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Kentucky",
    "Population": "13,668",
    "Area": 345,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Kentucky",
    "Population": "134,554",
    "Area": 545,
    "StatisticalArea": "Bowling Green, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Kentucky",
    "Population": "12,027",
    "Area": 301,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Kentucky",
    "Population": "19,555",
    "Area": 459,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Webster",
    "StateorEq": "Kentucky",
    "Population": "13,017",
    "Area": 335,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Whitley",
    "StateorEq": "Kentucky",
    "Population": "36,712",
    "Area": 440,
    "StatisticalArea": "London, KY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wolfe",
    "StateorEq": "Kentucky",
    "Population": "6,562",
    "Area": 223,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Woodford",
    "StateorEq": "Kentucky",
    "Population": "26,871",
    "Area": 191,
    "StatisticalArea": "Lexington-Fayette, KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Acadia Parish",
    "StateorEq": "Louisiana",
    "Population": "57,576",
    "Area": 658,
    "StatisticalArea": "Lafayette, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Allen Parish",
    "StateorEq": "Louisiana",
    "Population": "22,750",
    "Area": 766,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ascension Parish",
    "StateorEq": "Louisiana",
    "Population": "126,500",
    "Area": 303,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Assumption Parish",
    "StateorEq": "Louisiana",
    "Population": "21,039",
    "Area": 364,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Avoyelles Parish",
    "StateorEq": "Louisiana",
    "Population": "39,693",
    "Area": 866,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beauregard Parish",
    "StateorEq": "Louisiana",
    "Population": "36,549",
    "Area": 1166,
    "StatisticalArea": "DeRidder, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bienville Parish",
    "StateorEq": "Louisiana",
    "Population": "12,981",
    "Area": 822,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bossier Parish",
    "StateorEq": "Louisiana",
    "Population": "128,746",
    "Area": 867,
    "StatisticalArea": "Shreveport-Bossier City, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caddo Parish",
    "StateorEq": "Louisiana",
    "Population": "237,848",
    "Area": 937,
    "StatisticalArea": "Shreveport-Bossier City, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calcasieu Parish",
    "StateorEq": "Louisiana",
    "Population": "216,785",
    "Area": 1094,
    "StatisticalArea": "Lake Charles, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caldwell Parish",
    "StateorEq": "Louisiana",
    "Population": "9,645",
    "Area": 541,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cameron Parish",
    "StateorEq": "Louisiana",
    "Population": "5,617",
    "Area": 1932,
    "StatisticalArea": "Lake Charles, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Catahoula Parish",
    "StateorEq": "Louisiana",
    "Population": "8,906",
    "Area": 739,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Claiborne Parish",
    "StateorEq": "Louisiana",
    "Population": "14,170",
    "Area": 768,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Concordia Parish",
    "StateorEq": "Louisiana",
    "Population": "18,687",
    "Area": 749,
    "StatisticalArea": "Natchez, MS-LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "De Soto Parish",
    "StateorEq": "Louisiana",
    "Population": "26,812",
    "Area": 895,
    "StatisticalArea": "Shreveport-Bossier City, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "East Baton Rouge Parish",
    "StateorEq": "Louisiana",
    "Population": "456,781",
    "Area": 471,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "East Carroll Parish",
    "StateorEq": "Louisiana",
    "Population": "7,459",
    "Area": 442,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "East Feliciana Parish",
    "StateorEq": "Louisiana",
    "Population": "19,539",
    "Area": 456,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Evangeline Parish",
    "StateorEq": "Louisiana",
    "Population": "32,350",
    "Area": 680,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin Parish",
    "StateorEq": "Louisiana",
    "Population": "19,774",
    "Area": 636,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant Parish",
    "StateorEq": "Louisiana",
    "Population": "22,169",
    "Area": 664,
    "StatisticalArea": "Alexandria, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Iberia Parish",
    "StateorEq": "Louisiana",
    "Population": "69,929",
    "Area": 1031,
    "StatisticalArea": "Lafayette, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Iberville Parish",
    "StateorEq": "Louisiana",
    "Population": "30,241",
    "Area": 653,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson Parish",
    "StateorEq": "Louisiana",
    "Population": "15,031",
    "Area": 580,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson Parish",
    "StateorEq": "Louisiana",
    "Population": "440,781",
    "Area": 642,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson Davis Parish",
    "StateorEq": "Louisiana",
    "Population": "32,250",
    "Area": 659,
    "StatisticalArea": "Jennings, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lafayette Parish",
    "StateorEq": "Louisiana",
    "Population": "241,753",
    "Area": 270,
    "StatisticalArea": "Lafayette, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lafourche Parish",
    "StateorEq": "Louisiana",
    "Population": "97,557",
    "Area": 1472,
    "StatisticalArea": "Houma-Thibodaux, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "LaSalle Parish",
    "StateorEq": "Louisiana",
    "Population": "14,791",
    "Area": 663,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln Parish",
    "StateorEq": "Louisiana",
    "Population": "48,396",
    "Area": 472,
    "StatisticalArea": "Ruston, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Livingston Parish",
    "StateorEq": "Louisiana",
    "Population": "142,282",
    "Area": 703,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison Parish",
    "StateorEq": "Louisiana",
    "Population": "10,017",
    "Area": 651,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morehouse Parish",
    "StateorEq": "Louisiana",
    "Population": "25,629",
    "Area": 805,
    "StatisticalArea": "Bastrop, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Natchitoches Parish",
    "StateorEq": "Louisiana",
    "Population": "37,515",
    "Area": 1299,
    "StatisticalArea": "Natchitoches, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orleans Parish[q]",
    "StateorEq": "Louisiana",
    "Population": "383,997",
    "Area": 350,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ouachita Parish",
    "StateorEq": "Louisiana",
    "Population": "160,368",
    "Area": 633,
    "StatisticalArea": "Monroe, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Plaquemines Parish",
    "StateorEq": "Louisiana",
    "Population": "23,515",
    "Area": 2429,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pointe Coupee Parish",
    "StateorEq": "Louisiana",
    "Population": "20,758",
    "Area": 591,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rapides Parish",
    "StateorEq": "Louisiana",
    "Population": "130,023",
    "Area": 1362,
    "StatisticalArea": "Alexandria, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Red River Parish",
    "StateorEq": "Louisiana",
    "Population": "7,620",
    "Area": 402,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Richland Parish",
    "StateorEq": "Louisiana",
    "Population": "20,043",
    "Area": 564,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sabine Parish",
    "StateorEq": "Louisiana",
    "Population": "22,155",
    "Area": 1012,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "St. Bernard Parish",
    "StateorEq": "Louisiana",
    "Population": "43,764",
    "Area": 1794,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Charles Parish",
    "StateorEq": "Louisiana",
    "Population": "52,549",
    "Area": 410,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Helena Parish",
    "StateorEq": "Louisiana",
    "Population": "10,920",
    "Area": 409,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. James Parish",
    "StateorEq": "Louisiana",
    "Population": "20,192",
    "Area": 258,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. John the Baptist Parish",
    "StateorEq": "Louisiana",
    "Population": "42,477",
    "Area": 348,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Landry Parish",
    "StateorEq": "Louisiana",
    "Population": "82,540",
    "Area": 939,
    "StatisticalArea": "Opelousas, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Martin Parish",
    "StateorEq": "Louisiana",
    "Population": "51,767",
    "Area": 817,
    "StatisticalArea": "Lafayette, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Mary Parish",
    "StateorEq": "Louisiana",
    "Population": "49,406",
    "Area": 612,
    "StatisticalArea": "Morgan City, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Tammany Parish",
    "StateorEq": "Louisiana",
    "Population": "264,570",
    "Area": 1124,
    "StatisticalArea": "New Orleans-Metairie, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tangipahoa Parish",
    "StateorEq": "Louisiana",
    "Population": "133,157",
    "Area": 823,
    "StatisticalArea": "Hammond, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tensas Parish",
    "StateorEq": "Louisiana",
    "Population": "4,147",
    "Area": 641,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Terrebonne Parish",
    "StateorEq": "Louisiana",
    "Population": "109,580",
    "Area": 2080,
    "StatisticalArea": "Houma-Thibodaux, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union Parish",
    "StateorEq": "Louisiana",
    "Population": "21,107",
    "Area": 905,
    "StatisticalArea": "Monroe, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Vermilion Parish",
    "StateorEq": "Louisiana",
    "Population": "57,359",
    "Area": 1538,
    "StatisticalArea": "Lafayette, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Vernon Parish",
    "StateorEq": "Louisiana",
    "Population": "48,750",
    "Area": 1341,
    "StatisticalArea": "Fort Polk South, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington Parish",
    "StateorEq": "Louisiana",
    "Population": "45,463",
    "Area": 676,
    "StatisticalArea": "Bogalusa, LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Webster Parish",
    "StateorEq": "Louisiana",
    "Population": "36,967",
    "Area": 615,
    "StatisticalArea": "Shreveport-Bossier City, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "West Baton Rouge Parish",
    "StateorEq": "Louisiana",
    "Population": "27,199",
    "Area": 203,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "West Carroll Parish",
    "StateorEq": "Louisiana",
    "Population": "9,751",
    "Area": 360,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "West Feliciana Parish",
    "StateorEq": "Louisiana",
    "Population": "15,310",
    "Area": 426,
    "StatisticalArea": "Baton Rouge, LA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Winn Parish",
    "StateorEq": "Louisiana",
    "Population": "13,755",
    "Area": 957,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Androscoggin",
    "StateorEq": "Maine",
    "Population": "111,139",
    "Area": 497,
    "StatisticalArea": "Lewiston-Auburn, ME Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Aroostook",
    "StateorEq": "Maine",
    "Population": "67,105",
    "Area": 6829,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "Maine",
    "Population": "303,069",
    "Area": 1217,
    "StatisticalArea": "Portland-South Portland, ME Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Maine",
    "Population": "29,456",
    "Area": 1744,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Maine",
    "Population": "55,478",
    "Area": 2351,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kennebec",
    "StateorEq": "Maine",
    "Population": "123,642",
    "Area": 951,
    "StatisticalArea": "Augusta-Waterville, ME Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Maine",
    "Population": "40,607",
    "Area": 1142,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Maine",
    "Population": "35,237",
    "Area": 700,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oxford",
    "StateorEq": "Maine",
    "Population": "57,777",
    "Area": 2175,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Penobscot",
    "StateorEq": "Maine",
    "Population": "152,199",
    "Area": 3556,
    "StatisticalArea": "Bangor, ME Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Piscataquis",
    "StateorEq": "Maine",
    "Population": "16,800",
    "Area": 4377,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sagadahoc",
    "StateorEq": "Maine",
    "Population": "36,699",
    "Area": 370,
    "StatisticalArea": "Portland-South Portland, ME Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Somerset",
    "StateorEq": "Maine",
    "Population": "50,477",
    "Area": 4095,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Waldo",
    "StateorEq": "Maine",
    "Population": "39,607",
    "Area": 853,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Maine",
    "Population": "31,095",
    "Area": 3255,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "York",
    "StateorEq": "Maine",
    "Population": "211,972",
    "Area": 1271,
    "StatisticalArea": "Portland-South Portland, ME Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Allegany",
    "StateorEq": "Maryland",
    "Population": "68,106",
    "Area": 430,
    "StatisticalArea": "Cumberland, MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Anne Arundel",
    "StateorEq": "Maryland",
    "Population": "588,261",
    "Area": 588,
    "StatisticalArea": "Baltimore-Columbia-Towson, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Baltimore",
    "StateorEq": "Maryland",
    "Population": "854,535",
    "Area": 682,
    "StatisticalArea": "Baltimore-Columbia-Towson, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calvert",
    "StateorEq": "Maryland",
    "Population": "92,783",
    "Area": 92,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caroline",
    "StateorEq": "Maryland",
    "Population": "33,293",
    "Area": 345,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Maryland",
    "Population": "172,891",
    "Area": 326,
    "StatisticalArea": "Baltimore-Columbia-Towson, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cecil",
    "StateorEq": "Maryland",
    "Population": "103,725",
    "Area": 452,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Charles",
    "StateorEq": "Maryland",
    "Population": "166,617",
    "Area": 418,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dorchester",
    "StateorEq": "Maryland",
    "Population": "32,531",
    "Area": 643,
    "StatisticalArea": "Cambridge, MD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Frederick",
    "StateorEq": "Maryland",
    "Population": "271,717",
    "Area": 540,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garrett",
    "StateorEq": "Maryland",
    "Population": "28,806",
    "Area": 667,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harford",
    "StateorEq": "Maryland",
    "Population": "260,924",
    "Area": 656,
    "StatisticalArea": "Baltimore-Columbia-Towson, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Howard",
    "StateorEq": "Maryland",
    "Population": "332,317",
    "Area": 527,
    "StatisticalArea": "Baltimore-Columbia-Towson, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kent",
    "StateorEq": "Maryland",
    "Population": "19,198",
    "Area": 254,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Maryland",
    "Population": "1,062,061",
    "Area": 414,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Prince George's",
    "StateorEq": "Maryland",
    "Population": "967,201",
    "Area": 507,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Queen Anne's",
    "StateorEq": "Maryland",
    "Population": "49,874",
    "Area": 498,
    "StatisticalArea": "Baltimore-Columbia-Towson, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Mary's",
    "StateorEq": "Maryland",
    "Population": "113,777",
    "Area": 510,
    "StatisticalArea": "California-Lexington Park, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Somerset",
    "StateorEq": "Maryland",
    "Population": "24,620",
    "Area": 611,
    "StatisticalArea": "Salisbury, MD-DE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Talbot",
    "StateorEq": "Maryland",
    "Population": "37,526",
    "Area": 611,
    "StatisticalArea": "Easton, MD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Maryland",
    "Population": "154,705",
    "Area": 477,
    "StatisticalArea": "Hagerstown-Martinsburg, MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wicomico",
    "StateorEq": "Maryland",
    "Population": "103,588",
    "Area": 468,
    "StatisticalArea": "Salisbury, MD-DE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Worcester",
    "StateorEq": "Maryland",
    "Population": "52,460",
    "Area": 400,
    "StatisticalArea": "Salisbury, MD-DE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Baltimore City[r]",
    "StateorEq": "Maryland",
    "Population": "585,708",
    "Area": 695,
    "StatisticalArea": "Baltimore-Columbia-Towson, MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Barnstable",
    "StateorEq": "Massachusetts",
    "Population": "228,996",
    "Area": 396,
    "StatisticalArea": "Barnstable Town, MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Berkshire[s]",
    "StateorEq": "Massachusetts",
    "Population": "129,026",
    "Area": 931,
    "StatisticalArea": "Pittsfield, MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bristol",
    "StateorEq": "Massachusetts",
    "Population": "579,200",
    "Area": 556,
    "StatisticalArea": "Providence-Warwick, RI-MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dukes",
    "StateorEq": "Massachusetts",
    "Population": "20,600",
    "Area": 104,
    "StatisticalArea": "Vineyard Haven, MA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Essex[s]",
    "StateorEq": "Massachusetts",
    "Population": "809,829",
    "Area": 498,
    "StatisticalArea": "Boston-Cambridge-Newton, MA-NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin[s]",
    "StateorEq": "Massachusetts",
    "Population": "71,029",
    "Area": 702,
    "StatisticalArea": "Springfield, MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hampden[s]",
    "StateorEq": "Massachusetts",
    "Population": "465,825",
    "Area": 618,
    "StatisticalArea": "Springfield, MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hampshire[s]",
    "StateorEq": "Massachusetts",
    "Population": "162,308",
    "Area": 529,
    "StatisticalArea": "Springfield, MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Middlesex[s]",
    "StateorEq": "Massachusetts",
    "Population": "1,632,002",
    "Area": 824,
    "StatisticalArea": "Boston-Cambridge-Newton, MA-NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nantucket, Town and County of[t]",
    "StateorEq": "Massachusetts",
    "Population": "14,255",
    "Area": 48,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Norfolk",
    "StateorEq": "Massachusetts",
    "Population": "725,981",
    "Area": 400,
    "StatisticalArea": "Boston-Cambridge-Newton, MA-NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Plymouth",
    "StateorEq": "Massachusetts",
    "Population": "530,819",
    "Area": 661,
    "StatisticalArea": "Boston-Cambridge-Newton, MA-NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Suffolk[s]",
    "StateorEq": "Massachusetts",
    "Population": "797,936",
    "Area": 58,
    "StatisticalArea": "Boston-Cambridge-Newton, MA-NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Worcester[s]",
    "StateorEq": "Massachusetts",
    "Population": "862,111",
    "Area": 1513,
    "StatisticalArea": "Worcester, MA-CT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alcona",
    "StateorEq": "Michigan",
    "Population": "10,167",
    "Area": 1791,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Alger",
    "StateorEq": "Michigan",
    "Population": "8,842",
    "Area": 5049,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Allegan",
    "StateorEq": "Michigan",
    "Population": "120,502",
    "Area": 1833,
    "StatisticalArea": "Holland, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alpena",
    "StateorEq": "Michigan",
    "Population": "28,907",
    "Area": 1695,
    "StatisticalArea": "Alpena, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Antrim",
    "StateorEq": "Michigan",
    "Population": "23,431",
    "Area": 602,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Arenac",
    "StateorEq": "Michigan",
    "Population": "15,002",
    "Area": 681,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Baraga",
    "StateorEq": "Michigan",
    "Population": "8,158",
    "Area": 1069,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Barry",
    "StateorEq": "Michigan",
    "Population": "62,423",
    "Area": 577,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bay",
    "StateorEq": "Michigan",
    "Population": "103,856",
    "Area": 631,
    "StatisticalArea": "Bay City, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Benzie",
    "StateorEq": "Michigan",
    "Population": "17,970",
    "Area": 860,
    "StatisticalArea": "Traverse City, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Berrien",
    "StateorEq": "Michigan",
    "Population": "154,316",
    "Area": 1581,
    "StatisticalArea": "Niles-Benton Harbor, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Branch",
    "StateorEq": "Michigan",
    "Population": "44,862",
    "Area": 519,
    "StatisticalArea": "Coldwater, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Michigan",
    "Population": "134,310",
    "Area": 718,
    "StatisticalArea": "Battle Creek, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Michigan",
    "Population": "51,589",
    "Area": 508,
    "StatisticalArea": "South Bend-Mishawaka, IN-MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Charlevoix",
    "StateorEq": "Michigan",
    "Population": "26,054",
    "Area": 1391,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cheboygan",
    "StateorEq": "Michigan",
    "Population": "25,579",
    "Area": 885,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chippewa",
    "StateorEq": "Michigan",
    "Population": "36,785",
    "Area": 2698,
    "StatisticalArea": "Sault Ste. Marie, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clare",
    "StateorEq": "Michigan",
    "Population": "30,856",
    "Area": 885,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Michigan",
    "Population": "79,128",
    "Area": 575,
    "StatisticalArea": "Lansing-East Lansing, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Michigan",
    "Population": "12,988",
    "Area": 563,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Delta",
    "StateorEq": "Michigan",
    "Population": "36,903",
    "Area": 1992,
    "StatisticalArea": "Escanaba, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dickinson",
    "StateorEq": "Michigan",
    "Population": "25,947",
    "Area": 777,
    "StatisticalArea": "Iron Mountain, MI-WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Eaton",
    "StateorEq": "Michigan",
    "Population": "109,175",
    "Area": 579,
    "StatisticalArea": "Lansing-East Lansing, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Emmet",
    "StateorEq": "Michigan",
    "Population": "34,112",
    "Area": 882,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Genesee",
    "StateorEq": "Michigan",
    "Population": "406,211",
    "Area": 649,
    "StatisticalArea": "Flint, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gladwin",
    "StateorEq": "Michigan",
    "Population": "25,386",
    "Area": 516,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gogebic",
    "StateorEq": "Michigan",
    "Population": "14,380",
    "Area": 1476,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grand Traverse",
    "StateorEq": "Michigan",
    "Population": "95,238",
    "Area": 601,
    "StatisticalArea": "Traverse City, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gratiot",
    "StateorEq": "Michigan",
    "Population": "41,761",
    "Area": 572,
    "StatisticalArea": "Alma, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hillsdale",
    "StateorEq": "Michigan",
    "Population": "45,746",
    "Area": 607,
    "StatisticalArea": "Hillsdale, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Houghton",
    "StateorEq": "Michigan",
    "Population": "37,361",
    "Area": 1502,
    "StatisticalArea": "Houghton, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Huron",
    "StateorEq": "Michigan",
    "Population": "31,407",
    "Area": 2136,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ingham",
    "StateorEq": "Michigan",
    "Population": "284,900",
    "Area": 561,
    "StatisticalArea": "Lansing-East Lansing, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ionia",
    "StateorEq": "Michigan",
    "Population": "66,804",
    "Area": 580,
    "StatisticalArea": "Grand Rapids-Kentwood, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Iosco",
    "StateorEq": "Michigan",
    "Population": "25,237",
    "Area": 1891,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Iron",
    "StateorEq": "Michigan",
    "Population": "11,631",
    "Area": 1211,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Isabella",
    "StateorEq": "Michigan",
    "Population": "64,394",
    "Area": 578,
    "StatisticalArea": "Mount Pleasant, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Michigan",
    "Population": "160,366",
    "Area": 724,
    "StatisticalArea": "Jackson, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kalamazoo",
    "StateorEq": "Michigan",
    "Population": "261,670",
    "Area": 580,
    "StatisticalArea": "Kalamazoo-Portage, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kalkaska",
    "StateorEq": "Michigan",
    "Population": "17,939",
    "Area": 571,
    "StatisticalArea": "Traverse City, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kent",
    "StateorEq": "Michigan",
    "Population": "657,974",
    "Area": 872,
    "StatisticalArea": "Grand Rapids-Kentwood, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Keweenaw",
    "StateorEq": "Michigan",
    "Population": "2,046",
    "Area": 5966,
    "StatisticalArea": "Houghton, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Michigan",
    "Population": "12,096",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lapeer",
    "StateorEq": "Michigan",
    "Population": "88,619",
    "Area": 663,
    "StatisticalArea": "Detroit-Warren-Dearborn, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Leelanau",
    "StateorEq": "Michigan",
    "Population": "22,301",
    "Area": 2532,
    "StatisticalArea": "Traverse City, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lenawee",
    "StateorEq": "Michigan",
    "Population": "99,423",
    "Area": 761,
    "StatisticalArea": "Adrian, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Livingston",
    "StateorEq": "Michigan",
    "Population": "193,866",
    "Area": 585,
    "StatisticalArea": "Detroit-Warren-Dearborn, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Luce",
    "StateorEq": "Michigan",
    "Population": "5,339",
    "Area": 1912,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mackinac",
    "StateorEq": "Michigan",
    "Population": "10,834",
    "Area": 2101,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Macomb",
    "StateorEq": "Michigan",
    "Population": "881,217",
    "Area": 570,
    "StatisticalArea": "Detroit-Warren-Dearborn, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Manistee",
    "StateorEq": "Michigan",
    "Population": "25,032",
    "Area": 1281,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marquette",
    "StateorEq": "Michigan",
    "Population": "66,017",
    "Area": 3425,
    "StatisticalArea": "Marquette, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mason",
    "StateorEq": "Michigan",
    "Population": "29,052",
    "Area": 1242,
    "StatisticalArea": "Ludington, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mecosta",
    "StateorEq": "Michigan",
    "Population": "39,714",
    "Area": 571,
    "StatisticalArea": "Big Rapids, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Menominee",
    "StateorEq": "Michigan",
    "Population": "23,502",
    "Area": 1338,
    "StatisticalArea": "Marinette, WI-MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Midland",
    "StateorEq": "Michigan",
    "Population": "83,494",
    "Area": 528,
    "StatisticalArea": "Midland, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Missaukee",
    "StateorEq": "Michigan",
    "Population": "15,052",
    "Area": 574,
    "StatisticalArea": "Cadillac, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Michigan",
    "Population": "154,809",
    "Area": 680,
    "StatisticalArea": "Monroe, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montcalm",
    "StateorEq": "Michigan",
    "Population": "66,614",
    "Area": 721,
    "StatisticalArea": "Grand Rapids-Wyoming, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montmorency",
    "StateorEq": "Michigan",
    "Population": "9,153",
    "Area": 562,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Muskegon",
    "StateorEq": "Michigan",
    "Population": "175,824",
    "Area": 1459,
    "StatisticalArea": "Muskegon, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Newaygo",
    "StateorEq": "Michigan",
    "Population": "49,978",
    "Area": 861,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oakland",
    "StateorEq": "Michigan",
    "Population": "1,274,395",
    "Area": 908,
    "StatisticalArea": "Detroit-Warren-Dearborn, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oceana",
    "StateorEq": "Michigan",
    "Population": "26,659",
    "Area": 1307,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ogemaw",
    "StateorEq": "Michigan",
    "Population": "20,770",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ontonagon",
    "StateorEq": "Michigan",
    "Population": "5,816",
    "Area": 3741,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Osceola",
    "StateorEq": "Michigan",
    "Population": "22,891",
    "Area": 573,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oscoda",
    "StateorEq": "Michigan",
    "Population": "8,219",
    "Area": 572,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Otsego",
    "StateorEq": "Michigan",
    "Population": "25,091",
    "Area": 526,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ottawa",
    "StateorEq": "Michigan",
    "Population": "296,200",
    "Area": 1632,
    "StatisticalArea": "Grand Rapids-Kentwood, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Presque Isle",
    "StateorEq": "Michigan",
    "Population": "12,982",
    "Area": 2573,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roscommon",
    "StateorEq": "Michigan",
    "Population": "23,459",
    "Area": 580,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Saginaw",
    "StateorEq": "Michigan",
    "Population": "190,124",
    "Area": 816,
    "StatisticalArea": "Saginaw, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Clair",
    "StateorEq": "Michigan",
    "Population": "160,383",
    "Area": 837,
    "StatisticalArea": "Detroit-Warren-Dearborn, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Joseph",
    "StateorEq": "Michigan",
    "Population": "60,939",
    "Area": 521,
    "StatisticalArea": "Sturgis, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sanilac",
    "StateorEq": "Michigan",
    "Population": "40,611",
    "Area": 1590,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Schoolcraft",
    "StateorEq": "Michigan",
    "Population": "8,047",
    "Area": 1884,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Shiawassee",
    "StateorEq": "Michigan",
    "Population": "68,094",
    "Area": 541,
    "StatisticalArea": "Lansing-East Lansing, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tuscola",
    "StateorEq": "Michigan",
    "Population": "53,323",
    "Area": 914,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Van Buren",
    "StateorEq": "Michigan",
    "Population": "75,587",
    "Area": 1090,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washtenaw",
    "StateorEq": "Michigan",
    "Population": "372,258",
    "Area": 723,
    "StatisticalArea": "Ann Arbor, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Michigan",
    "Population": "1,793,561",
    "Area": 672,
    "StatisticalArea": "Detroit-Warren-Dearborn, MI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wexford",
    "StateorEq": "Michigan",
    "Population": "33,673",
    "Area": 576,
    "StatisticalArea": "Cadillac, MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Aitkin",
    "StateorEq": "Minnesota",
    "Population": "15,697",
    "Area": 1819.3,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Anoka",
    "StateorEq": "Minnesota",
    "Population": "363,887",
    "Area": 423.61,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Becker",
    "StateorEq": "Minnesota",
    "Population": "35,183",
    "Area": 1310.42,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beltrami",
    "StateorEq": "Minnesota",
    "Population": "46,228",
    "Area": 2505.27,
    "StatisticalArea": "Bemidji, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Minnesota",
    "Population": "41,379",
    "Area": 408.28,
    "StatisticalArea": "St. Cloud, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Big Stone",
    "StateorEq": "Minnesota",
    "Population": "5,166",
    "Area": 496.95,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Blue Earth",
    "StateorEq": "Minnesota",
    "Population": "69,112",
    "Area": 752.36,
    "StatisticalArea": "Mankato-North Mankato, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Minnesota",
    "Population": "25,912",
    "Area": 610.86,
    "StatisticalArea": "New Ulm, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carlton",
    "StateorEq": "Minnesota",
    "Population": "36,207",
    "Area": 860.33,
    "StatisticalArea": "Duluth, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carver",
    "StateorEq": "Minnesota",
    "Population": "106,922",
    "Area": 357.04,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Minnesota",
    "Population": "30,066",
    "Area": 2017.6,
    "StatisticalArea": "Brainerd, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chippewa",
    "StateorEq": "Minnesota",
    "Population": "12,598",
    "Area": 582.8,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chisago",
    "StateorEq": "Minnesota",
    "Population": "56,621",
    "Area": 417.63,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Minnesota",
    "Population": "65,318",
    "Area": 1045.24,
    "StatisticalArea": "Fargo, ND-MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clearwater",
    "StateorEq": "Minnesota",
    "Population": "8,524",
    "Area": 994.71,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cook",
    "StateorEq": "Minnesota",
    "Population": "5,600",
    "Area": 1450.6,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cottonwood",
    "StateorEq": "Minnesota",
    "Population": "11,517",
    "Area": 639.99,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crow Wing",
    "StateorEq": "Minnesota",
    "Population": "66,123",
    "Area": 996.57,
    "StatisticalArea": "Brainerd, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dakota",
    "StateorEq": "Minnesota",
    "Population": "439,882",
    "Area": 569.58,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dodge",
    "StateorEq": "Minnesota",
    "Population": "20,867",
    "Area": 439.5,
    "StatisticalArea": "Rochester, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Minnesota",
    "Population": "39,006",
    "Area": 634.32,
    "StatisticalArea": "Alexandria, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Faribault",
    "StateorEq": "Minnesota",
    "Population": "13,921",
    "Area": 713.63,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fillmore",
    "StateorEq": "Minnesota",
    "Population": "21,228",
    "Area": 861.25,
    "StatisticalArea": "Rochester, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Freeborn",
    "StateorEq": "Minnesota",
    "Population": "30,895",
    "Area": 707.64,
    "StatisticalArea": "Albert Lea, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Goodhue",
    "StateorEq": "Minnesota",
    "Population": "47,582",
    "Area": 758.27,
    "StatisticalArea": "Red Wing, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Minnesota",
    "Population": "6,074",
    "Area": 546.41,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hennepin",
    "StateorEq": "Minnesota",
    "Population": "1,281,565",
    "Area": 556.62,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Houston",
    "StateorEq": "Minnesota",
    "Population": "18,843",
    "Area": 558.41,
    "StatisticalArea": "La Crosse-Onalaska, WI-MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hubbard",
    "StateorEq": "Minnesota",
    "Population": "21,344",
    "Area": 922.46,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Isanti",
    "StateorEq": "Minnesota",
    "Population": "41,135",
    "Area": 439.07,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Itasca",
    "StateorEq": "Minnesota",
    "Population": "45,014",
    "Area": 2665.06,
    "StatisticalArea": "Grand Rapids, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Minnesota",
    "Population": "9,989",
    "Area": 701.69,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kanabec",
    "StateorEq": "Minnesota",
    "Population": "16,032",
    "Area": 524.93,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kandiyohi",
    "StateorEq": "Minnesota",
    "Population": "43,732",
    "Area": 796.06,
    "StatisticalArea": "Willmar, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kittson",
    "StateorEq": "Minnesota",
    "Population": "4,207",
    "Area": 1097.08,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Koochiching",
    "StateorEq": "Minnesota",
    "Population": "12,062",
    "Area": 3102.36,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lac qui Parle",
    "StateorEq": "Minnesota",
    "Population": "6,719",
    "Area": 764.87,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Minnesota",
    "Population": "10,905",
    "Area": 2099.16,
    "StatisticalArea": "Duluth, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake of the Woods",
    "StateorEq": "Minnesota",
    "Population": "3,763",
    "Area": 1296.7,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Le Sueur",
    "StateorEq": "Minnesota",
    "Population": "28,674",
    "Area": 448.5,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Minnesota",
    "Population": "5,640",
    "Area": 537.03,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lyon",
    "StateorEq": "Minnesota",
    "Population": "25,269",
    "Area": 714.17,
    "StatisticalArea": "Marshall, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mahnomen",
    "StateorEq": "Minnesota",
    "Population": "5,411",
    "Area": 556.14,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Minnesota",
    "Population": "9,040",
    "Area": 1772.24,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Martin",
    "StateorEq": "Minnesota",
    "Population": "20,025",
    "Area": 709.34,
    "StatisticalArea": "Fairmont, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McLeod",
    "StateorEq": "Minnesota",
    "Population": "36,771",
    "Area": 491.91,
    "StatisticalArea": "Hutchinson, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Meeker",
    "StateorEq": "Minnesota",
    "Population": "23,400",
    "Area": 608.54,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mille Lacs",
    "StateorEq": "Minnesota",
    "Population": "26,459",
    "Area": 574.47,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morrison",
    "StateorEq": "Minnesota",
    "Population": "34,010",
    "Area": 1124.5,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mower",
    "StateorEq": "Minnesota",
    "Population": "40,029",
    "Area": 711.5,
    "StatisticalArea": "Austin, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Murray",
    "StateorEq": "Minnesota",
    "Population": "8,179",
    "Area": 704.43,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nicollet",
    "StateorEq": "Minnesota",
    "Population": "34,454",
    "Area": 452.29,
    "StatisticalArea": "Mankato-North Mankato, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nobles",
    "StateorEq": "Minnesota",
    "Population": "22,290",
    "Area": 715.39,
    "StatisticalArea": "Worthington, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Norman",
    "StateorEq": "Minnesota",
    "Population": "6,441",
    "Area": 876.27,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Olmsted",
    "StateorEq": "Minnesota",
    "Population": "162,847",
    "Area": 653.01,
    "StatisticalArea": "Rochester, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Otter Tail",
    "StateorEq": "Minnesota",
    "Population": "60,081",
    "Area": 1979.71,
    "StatisticalArea": "Fergus Falls, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pennington",
    "StateorEq": "Minnesota",
    "Population": "13,992",
    "Area": 616.54,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pine",
    "StateorEq": "Minnesota",
    "Population": "28,876",
    "Area": 1411.04,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pipestone",
    "StateorEq": "Minnesota",
    "Population": "9,424",
    "Area": 465.89,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Minnesota",
    "Population": "31,192",
    "Area": 1970.37,
    "StatisticalArea": "Grand Forks, ND-MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pope",
    "StateorEq": "Minnesota",
    "Population": "11,308",
    "Area": 670.14,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ramsey",
    "StateorEq": "Minnesota",
    "Population": "552,352",
    "Area": 155.78,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Red Lake",
    "StateorEq": "Minnesota",
    "Population": "3,935",
    "Area": 432.43,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Redwood",
    "StateorEq": "Minnesota",
    "Population": "15,425",
    "Area": 879.73,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Renville",
    "StateorEq": "Minnesota",
    "Population": "14,723",
    "Area": 982.92,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rice",
    "StateorEq": "Minnesota",
    "Population": "67,097",
    "Area": 497.57,
    "StatisticalArea": "Faribault-Northfield, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rock",
    "StateorEq": "Minnesota",
    "Population": "9,704",
    "Area": 482.61,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roseau",
    "StateorEq": "Minnesota",
    "Population": "15,331",
    "Area": 1662.51,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "St. Louis",
    "StateorEq": "Minnesota",
    "Population": "200,231",
    "Area": 6225.16,
    "StatisticalArea": "Duluth, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Minnesota",
    "Population": "150,928",
    "Area": 356.68,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sherburne",
    "StateorEq": "Minnesota",
    "Population": "97,183",
    "Area": 436.3,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sibley",
    "StateorEq": "Minnesota",
    "Population": "14,836",
    "Area": 588.65,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stearns",
    "StateorEq": "Minnesota",
    "Population": "158,292",
    "Area": 1344.52,
    "StatisticalArea": "St. Cloud, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Steele",
    "StateorEq": "Minnesota",
    "Population": "37,406",
    "Area": 429.55,
    "StatisticalArea": "Owatonna, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stevens",
    "StateorEq": "Minnesota",
    "Population": "9,671",
    "Area": 562.06,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Swift",
    "StateorEq": "Minnesota",
    "Population": "9,838",
    "Area": 743.53,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Todd",
    "StateorEq": "Minnesota",
    "Population": "25,262",
    "Area": 942.02,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Traverse",
    "StateorEq": "Minnesota",
    "Population": "3,360",
    "Area": 574.09,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wabasha",
    "StateorEq": "Minnesota",
    "Population": "21,387",
    "Area": 525.01,
    "StatisticalArea": "Rochester, MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wadena",
    "StateorEq": "Minnesota",
    "Population": "14,065",
    "Area": 535.02,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Waseca",
    "StateorEq": "Minnesota",
    "Population": "18,968",
    "Area": 432.25,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Minnesota",
    "Population": "267,568",
    "Area": 391.7,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Watonwan",
    "StateorEq": "Minnesota",
    "Population": "11,253",
    "Area": 434.51,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wilkin",
    "StateorEq": "Minnesota",
    "Population": "6,506",
    "Area": 751.43,
    "StatisticalArea": "Wahpeton, ND-MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Winona",
    "StateorEq": "Minnesota",
    "Population": "49,671",
    "Area": 626.3,
    "StatisticalArea": "Winona, MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wright",
    "StateorEq": "Minnesota",
    "Population": "141,337",
    "Area": 660.5,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yellow Medicine",
    "StateorEq": "Minnesota",
    "Population": "9,528",
    "Area": 757.96,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Mississippi",
    "Population": "29,538",
    "Area": 460,
    "StatisticalArea": "Natchez, MS-LA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alcorn",
    "StateorEq": "Mississippi",
    "Population": "34,740",
    "Area": 400,
    "StatisticalArea": "Corinth, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Amite",
    "StateorEq": "Mississippi",
    "Population": "12,720",
    "Area": 730,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Attala",
    "StateorEq": "Mississippi",
    "Population": "17,889",
    "Area": 735,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Mississippi",
    "Population": "7,646",
    "Area": 407,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bolivar",
    "StateorEq": "Mississippi",
    "Population": "30,985",
    "Area": 876,
    "StatisticalArea": "Cleveland, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Mississippi",
    "Population": "13,266",
    "Area": 587,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Mississippi",
    "Population": "9,998",
    "Area": 628,
    "StatisticalArea": "Greenwood, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chickasaw",
    "StateorEq": "Mississippi",
    "Population": "17,106",
    "Area": 502,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Choctaw",
    "StateorEq": "Mississippi",
    "Population": "8,246",
    "Area": 419,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Claiborne",
    "StateorEq": "Mississippi",
    "Population": "9,135",
    "Area": 487,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clarke",
    "StateorEq": "Mississippi",
    "Population": "15,615",
    "Area": 691,
    "StatisticalArea": "Meridian, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Mississippi",
    "Population": "18,636",
    "Area": 409,
    "StatisticalArea": "West Point, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coahoma",
    "StateorEq": "Mississippi",
    "Population": "21,390",
    "Area": 554,
    "StatisticalArea": "Clarksdale, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Copiah",
    "StateorEq": "Mississippi",
    "Population": "28,368",
    "Area": 777,
    "StatisticalArea": "Jackson, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Covington",
    "StateorEq": "Mississippi",
    "Population": "18,340",
    "Area": 414,
    "StatisticalArea": "Hattiesburg, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeSoto",
    "StateorEq": "Mississippi",
    "Population": "185,314",
    "Area": 478,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Forrest",
    "StateorEq": "Mississippi",
    "Population": "78,158",
    "Area": 467,
    "StatisticalArea": "Hattiesburg, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Mississippi",
    "Population": "7,675",
    "Area": 565,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "George",
    "StateorEq": "Mississippi",
    "Population": "24,350",
    "Area": 478,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Mississippi",
    "Population": "13,530",
    "Area": 713,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grenada",
    "StateorEq": "Mississippi",
    "Population": "21,629",
    "Area": 422,
    "StatisticalArea": "Grenada, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Mississippi",
    "Population": "46,053",
    "Area": 477,
    "StatisticalArea": "Gulfport-Biloxi-Pascagoula, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "Mississippi",
    "Population": "208,621",
    "Area": 581,
    "StatisticalArea": "Gulfport-Biloxi-Pascagoula, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hinds",
    "StateorEq": "Mississippi",
    "Population": "227,742",
    "Area": 869,
    "StatisticalArea": "Jackson, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Holmes",
    "StateorEq": "Mississippi",
    "Population": "17,000",
    "Area": 756,
    "StatisticalArea": "Jackson, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Humphreys",
    "StateorEq": "Mississippi",
    "Population": "7,785",
    "Area": 418,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Issaquena",
    "StateorEq": "Mississippi",
    "Population": "1,338",
    "Area": 413,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Itawamba",
    "StateorEq": "Mississippi",
    "Population": "23,863",
    "Area": 532,
    "StatisticalArea": "Tupelo, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Mississippi",
    "Population": "143,252",
    "Area": 727,
    "StatisticalArea": "Gulfport-Biloxi-Pascagoula, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "Mississippi",
    "Population": "16,367",
    "Area": 676,
    "StatisticalArea": "Laurel, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Mississippi",
    "Population": "7,260",
    "Area": 519,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson Davis",
    "StateorEq": "Mississippi",
    "Population": "11,321",
    "Area": 408,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jones",
    "StateorEq": "Mississippi",
    "Population": "67,246",
    "Area": 694,
    "StatisticalArea": "Laurel, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kemper",
    "StateorEq": "Mississippi",
    "Population": "8,988",
    "Area": 766,
    "StatisticalArea": "Meridian, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lafayette",
    "StateorEq": "Mississippi",
    "Population": "55,813",
    "Area": 631,
    "StatisticalArea": "Oxford, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lamar",
    "StateorEq": "Mississippi",
    "Population": "64,222",
    "Area": 497,
    "StatisticalArea": "Hattiesburg, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lauderdale",
    "StateorEq": "Mississippi",
    "Population": "72,984",
    "Area": 704,
    "StatisticalArea": "Meridian, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Mississippi",
    "Population": "12,016",
    "Area": 431,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Leake",
    "StateorEq": "Mississippi",
    "Population": "21,275",
    "Area": 583,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Mississippi",
    "Population": "83,343",
    "Area": 450,
    "StatisticalArea": "Tupelo, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Leflore",
    "StateorEq": "Mississippi",
    "Population": "28,339",
    "Area": 592,
    "StatisticalArea": "Greenwood, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Mississippi",
    "Population": "34,907",
    "Area": 586,
    "StatisticalArea": "Brookhaven, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lowndes",
    "StateorEq": "Mississippi",
    "Population": "58,879",
    "Area": 502,
    "StatisticalArea": "Columbus, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Mississippi",
    "Population": "109,145",
    "Area": 719,
    "StatisticalArea": "Jackson, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Mississippi",
    "Population": "24,441",
    "Area": 542,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Mississippi",
    "Population": "33,752",
    "Area": 706,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Mississippi",
    "Population": "34,180",
    "Area": 764,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Mississippi",
    "Population": "9,822",
    "Area": 407,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Neshoba",
    "StateorEq": "Mississippi",
    "Population": "29,087",
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Newton",
    "StateorEq": "Mississippi",
    "Population": "21,291",
    "Area": 578,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Noxubee",
    "StateorEq": "Mississippi",
    "Population": "10,285",
    "Area": 695,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oktibbeha",
    "StateorEq": "Mississippi",
    "Population": "51,788",
    "Area": 458,
    "StatisticalArea": "Starkville, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Panola",
    "StateorEq": "Mississippi",
    "Population": "33,208",
    "Area": 684,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pearl River",
    "StateorEq": "Mississippi",
    "Population": "56,145",
    "Area": 812,
    "StatisticalArea": "Picayune, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Mississippi",
    "Population": "11,511",
    "Area": 647,
    "StatisticalArea": "Hattiesburg, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Mississippi",
    "Population": "40,324",
    "Area": 409,
    "StatisticalArea": "McComb, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pontotoc",
    "StateorEq": "Mississippi",
    "Population": "31,184",
    "Area": 497,
    "StatisticalArea": "Tupelo, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Prentiss",
    "StateorEq": "Mississippi",
    "Population": "25,008",
    "Area": 415,
    "StatisticalArea": "Tupelo, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Quitman",
    "StateorEq": "Mississippi",
    "Population": "6,176",
    "Area": 405,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rankin",
    "StateorEq": "Mississippi",
    "Population": "157,031",
    "Area": 775,
    "StatisticalArea": "Jackson, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Mississippi",
    "Population": "27,990",
    "Area": 609,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sharkey",
    "StateorEq": "Mississippi",
    "Population": "3,800",
    "Area": 428,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Simpson",
    "StateorEq": "Mississippi",
    "Population": "25,949",
    "Area": 589,
    "StatisticalArea": "Jackson, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Smith",
    "StateorEq": "Mississippi",
    "Population": "14,209",
    "Area": 636,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stone",
    "StateorEq": "Mississippi",
    "Population": "18,333",
    "Area": 445,
    "StatisticalArea": "Gulfport-Biloxi, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sunflower",
    "StateorEq": "Mississippi",
    "Population": "25,971",
    "Area": 694,
    "StatisticalArea": "Indianola, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tallahatchie",
    "StateorEq": "Mississippi",
    "Population": "12,715",
    "Area": 644,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tate",
    "StateorEq": "Mississippi",
    "Population": "28,064",
    "Area": 404,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tippah",
    "StateorEq": "Mississippi",
    "Population": "21,815",
    "Area": 458,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tishomingo",
    "StateorEq": "Mississippi",
    "Population": "18,850",
    "Area": 424,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tunica",
    "StateorEq": "Mississippi",
    "Population": "9,782",
    "Area": 455,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Mississippi",
    "Population": "27,777",
    "Area": 416,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Walthall",
    "StateorEq": "Mississippi",
    "Population": "13,884",
    "Area": 404,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Mississippi",
    "Population": "44,722",
    "Area": 587,
    "StatisticalArea": "Vicksburg, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Mississippi",
    "Population": "44,922",
    "Area": 724,
    "StatisticalArea": "Greenville, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Mississippi",
    "Population": "19,779",
    "Area": 810,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Webster",
    "StateorEq": "Mississippi",
    "Population": "9,926",
    "Area": 423,
    "StatisticalArea": "Starkville, MS Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilkinson",
    "StateorEq": "Mississippi",
    "Population": "8,587",
    "Area": 677,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Winston",
    "StateorEq": "Mississippi",
    "Population": "17,714",
    "Area": 607,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yalobusha",
    "StateorEq": "Mississippi",
    "Population": "12,481",
    "Area": 467,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yazoo",
    "StateorEq": "Mississippi",
    "Population": "26,743",
    "Area": 920,
    "StatisticalArea": "Jackson, MS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adair",
    "StateorEq": "Missouri",
    "Population": "25,314",
    "Area": 568,
    "StatisticalArea": "Kirksville, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Andrew",
    "StateorEq": "Missouri",
    "Population": "18,135",
    "Area": 435,
    "StatisticalArea": "St. Joseph, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Atchison",
    "StateorEq": "Missouri",
    "Population": "5,305",
    "Area": 545,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Audrain",
    "StateorEq": "Missouri",
    "Population": "24,962",
    "Area": 693,
    "StatisticalArea": "Mexico, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Barry",
    "StateorEq": "Missouri",
    "Population": "34,534",
    "Area": 779,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Barton",
    "StateorEq": "Missouri",
    "Population": "11,637",
    "Area": 594,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bates",
    "StateorEq": "Missouri",
    "Population": "16,042",
    "Area": 848,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Missouri",
    "Population": "19,394",
    "Area": 706,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bollinger",
    "StateorEq": "Missouri",
    "Population": "10,567",
    "Area": 621,
    "StatisticalArea": "Cape Girardeau, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "Missouri",
    "Population": "183,610",
    "Area": 685,
    "StatisticalArea": "Columbia, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Buchanan",
    "StateorEq": "Missouri",
    "Population": "84,793",
    "Area": 410,
    "StatisticalArea": "St. Joseph, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Missouri",
    "Population": "42,130",
    "Area": 698,
    "StatisticalArea": "Poplar Bluff, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caldwell",
    "StateorEq": "Missouri",
    "Population": "8,815",
    "Area": 429,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Callaway",
    "StateorEq": "Missouri",
    "Population": "44,283",
    "Area": 839,
    "StatisticalArea": "Jefferson City, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Camden",
    "StateorEq": "Missouri",
    "Population": "42,745",
    "Area": 655,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cape Girardeau",
    "StateorEq": "Missouri",
    "Population": "81,710",
    "Area": 579,
    "StatisticalArea": "Cape Girardeau, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Missouri",
    "Population": "8,495",
    "Area": 695,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carter",
    "StateorEq": "Missouri",
    "Population": "5,202",
    "Area": 508,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Missouri",
    "Population": "107,824",
    "Area": 699,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cedar",
    "StateorEq": "Missouri",
    "Population": "14,188",
    "Area": 476,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chariton",
    "StateorEq": "Missouri",
    "Population": "7,408",
    "Area": 756,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Christian",
    "StateorEq": "Missouri",
    "Population": "88,842",
    "Area": 563,
    "StatisticalArea": "Springfield, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Missouri",
    "Population": "6,634",
    "Area": 507,
    "StatisticalArea": "Fort Madison-Keokuk, IA-IL-MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Missouri",
    "Population": "253,335",
    "Area": 396,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Missouri",
    "Population": "21,184",
    "Area": 419,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cole",
    "StateorEq": "Missouri",
    "Population": "77,279",
    "Area": 392,
    "StatisticalArea": "Jefferson City, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cooper",
    "StateorEq": "Missouri",
    "Population": "17,103",
    "Area": 565,
    "StatisticalArea": "Columbia, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Missouri",
    "Population": "23,056",
    "Area": 743,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dade",
    "StateorEq": "Missouri",
    "Population": "7,569",
    "Area": 490,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dallas",
    "StateorEq": "Missouri",
    "Population": "17,071",
    "Area": 542,
    "StatisticalArea": "Springfield, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Daviess",
    "StateorEq": "Missouri",
    "Population": "8,430",
    "Area": 567,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "DeKalb",
    "StateorEq": "Missouri",
    "Population": "11,029",
    "Area": 424,
    "StatisticalArea": "St. Joseph, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dent",
    "StateorEq": "Missouri",
    "Population": "14,421",
    "Area": 754,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Missouri",
    "Population": "11,578",
    "Area": 815,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dunklin",
    "StateorEq": "Missouri",
    "Population": "28,283",
    "Area": 546,
    "StatisticalArea": "Kennett, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Missouri",
    "Population": "104,682",
    "Area": 922,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gasconade",
    "StateorEq": "Missouri",
    "Population": "14,794",
    "Area": 520,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gentry",
    "StateorEq": "Missouri",
    "Population": "6,162",
    "Area": 492,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Missouri",
    "Population": "298,915",
    "Area": 675,
    "StatisticalArea": "Springfield, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grundy",
    "StateorEq": "Missouri",
    "Population": "9,808",
    "Area": 436,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "Missouri",
    "Population": "8,157",
    "Area": 725,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Missouri",
    "Population": "21,946",
    "Area": 702,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hickory",
    "StateorEq": "Missouri",
    "Population": "8,279",
    "Area": 399,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Holt",
    "StateorEq": "Missouri",
    "Population": "4,223",
    "Area": 462,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Howard",
    "StateorEq": "Missouri",
    "Population": "10,151",
    "Area": 466,
    "StatisticalArea": "Columbia, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Howell",
    "StateorEq": "Missouri",
    "Population": "39,750",
    "Area": 928,
    "StatisticalArea": "West Plains, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Iron",
    "StateorEq": "Missouri",
    "Population": "9,537",
    "Area": 551,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Missouri",
    "Population": "717,204",
    "Area": 605,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "Missouri",
    "Population": "122,761",
    "Area": 640,
    "StatisticalArea": "Joplin, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Missouri",
    "Population": "226,739",
    "Area": 657,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Missouri",
    "Population": "54,013",
    "Area": 831,
    "StatisticalArea": "Warrensburg, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Missouri",
    "Population": "3,744",
    "Area": 506,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Laclede",
    "StateorEq": "Missouri",
    "Population": "36,039",
    "Area": 766,
    "StatisticalArea": "Lebanon, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lafayette",
    "StateorEq": "Missouri",
    "Population": "32,984",
    "Area": 629,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Missouri",
    "Population": "38,001",
    "Area": 613,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lewis",
    "StateorEq": "Missouri",
    "Population": "10,032",
    "Area": 505,
    "StatisticalArea": "Quincy, IL-MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Missouri",
    "Population": "59,574",
    "Area": 630,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Linn",
    "StateorEq": "Missouri",
    "Population": "11,874",
    "Area": 620,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Livingston",
    "StateorEq": "Missouri",
    "Population": "14,557",
    "Area": 535,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Macon",
    "StateorEq": "Missouri",
    "Population": "15,209",
    "Area": 497,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Missouri",
    "Population": "12,626",
    "Area": 528,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Maries",
    "StateorEq": "Missouri",
    "Population": "8,432",
    "Area": 438,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Missouri",
    "Population": "28,525",
    "Area": 540,
    "StatisticalArea": "Hannibal, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McDonald",
    "StateorEq": "Missouri",
    "Population": "23,303",
    "Area": 804,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "Missouri",
    "Population": "3,538",
    "Area": 454,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Miller",
    "StateorEq": "Missouri",
    "Population": "24,722",
    "Area": 592,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mississippi",
    "StateorEq": "Missouri",
    "Population": "12,577",
    "Area": 413,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Moniteau",
    "StateorEq": "Missouri",
    "Population": "15,473",
    "Area": 417,
    "StatisticalArea": "Jefferson City, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Missouri",
    "Population": "8,666",
    "Area": 646,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Missouri",
    "Population": "11,322",
    "Area": 539,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Missouri",
    "Population": "21,006",
    "Area": 598,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "New Madrid",
    "StateorEq": "Missouri",
    "Population": "16,434",
    "Area": 678,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Newton",
    "StateorEq": "Missouri",
    "Population": "58,648",
    "Area": 626,
    "StatisticalArea": "Joplin, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nodaway",
    "StateorEq": "Missouri",
    "Population": "21,241",
    "Area": 877,
    "StatisticalArea": "Maryville, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oregon",
    "StateorEq": "Missouri",
    "Population": "8,635",
    "Area": 792,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Osage",
    "StateorEq": "Missouri",
    "Population": "13,274",
    "Area": 606,
    "StatisticalArea": "Jefferson City, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ozark",
    "StateorEq": "Missouri",
    "Population": "8,553",
    "Area": 747,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pemiscot",
    "StateorEq": "Missouri",
    "Population": "15,661",
    "Area": 493,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Missouri",
    "Population": "18,956",
    "Area": 475,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pettis",
    "StateorEq": "Missouri",
    "Population": "42,980",
    "Area": 685,
    "StatisticalArea": "Sedalia, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Phelps",
    "StateorEq": "Missouri",
    "Population": "44,638",
    "Area": 673,
    "StatisticalArea": "Rolla, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Missouri",
    "Population": "17,587",
    "Area": 673,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Platte",
    "StateorEq": "Missouri",
    "Population": "106,718",
    "Area": 420,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Missouri",
    "Population": "31,519",
    "Area": 637,
    "StatisticalArea": "Springfield, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pulaski",
    "StateorEq": "Missouri",
    "Population": "53,955",
    "Area": 547,
    "StatisticalArea": "Fort Leonard Wood, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "Missouri",
    "Population": "4,681",
    "Area": 518,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ralls",
    "StateorEq": "Missouri",
    "Population": "10,355",
    "Area": 471,
    "StatisticalArea": "Hannibal, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "Missouri",
    "Population": "24,716",
    "Area": 482,
    "StatisticalArea": "Moberly, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ray",
    "StateorEq": "Missouri",
    "Population": "23,158",
    "Area": 570,
    "StatisticalArea": "Kansas City, MO-KS Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Reynolds",
    "StateorEq": "Missouri",
    "Population": "6,096",
    "Area": 811,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ripley",
    "StateorEq": "Missouri",
    "Population": "10,679",
    "Area": 630,
    "StatisticalArea": "Poplar Bluff, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Charles",
    "StateorEq": "Missouri",
    "Population": "405,262",
    "Area": 56,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Clair",
    "StateorEq": "Missouri",
    "Population": "9,284",
    "Area": 677,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "St. Francois",
    "StateorEq": "Missouri",
    "Population": "66,922",
    "Area": 508,
    "StatisticalArea": "Farmington, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Louis",
    "StateorEq": "Missouri",
    "Population": "1,004,125",
    "Area": 61.9,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ste. Genevieve",
    "StateorEq": "Missouri",
    "Population": "18,479",
    "Area": 450,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Saline",
    "StateorEq": "Missouri",
    "Population": "23,333",
    "Area": 502,
    "StatisticalArea": "Marshall, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Schuyler",
    "StateorEq": "Missouri",
    "Population": "4,032",
    "Area": 756,
    "StatisticalArea": "Kirksville, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scotland",
    "StateorEq": "Missouri",
    "Population": "4,716",
    "Area": 308,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Missouri",
    "Population": "38,059",
    "Area": 438,
    "StatisticalArea": "Sikeston, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shannon",
    "StateorEq": "Missouri",
    "Population": "7,031",
    "Area": 421,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Missouri",
    "Population": "6,103",
    "Area": 1004,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stoddard",
    "StateorEq": "Missouri",
    "Population": "28,672",
    "Area": 501,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stone",
    "StateorEq": "Missouri",
    "Population": "31,076",
    "Area": 827,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sullivan",
    "StateorEq": "Missouri",
    "Population": "5,999",
    "Area": 463,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Taney",
    "StateorEq": "Missouri",
    "Population": "56,066",
    "Area": 651,
    "StatisticalArea": "Branson, MO Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Texas",
    "StateorEq": "Missouri",
    "Population": "24,487",
    "Area": 632,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Vernon",
    "StateorEq": "Missouri",
    "Population": "19,707",
    "Area": 1179,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Missouri",
    "Population": "35,532",
    "Area": 834,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Missouri",
    "Population": "23,514",
    "Area": 432,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Missouri",
    "Population": "10,974",
    "Area": 760,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Webster",
    "StateorEq": "Missouri",
    "Population": "39,085",
    "Area": 761,
    "StatisticalArea": "Springfield, MO Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Worth",
    "StateorEq": "Missouri",
    "Population": "1,973",
    "Area": 593,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wright",
    "StateorEq": "Missouri",
    "Population": "18,188",
    "Area": 266,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "St. Louis, City of[u]",
    "StateorEq": "Missouri",
    "Population": "301,578",
    "Area": 682,
    "StatisticalArea": "St. Louis, MO-IL Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Beaverhead",
    "StateorEq": "Montana",
    "Population": "9,371",
    "Area": 5543,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Big Horn",
    "StateorEq": "Montana",
    "Population": "13,124",
    "Area": 4995,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Blaine",
    "StateorEq": "Montana",
    "Population": "7,044",
    "Area": 4226,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Broadwater",
    "StateorEq": "Montana",
    "Population": "6,774",
    "Area": 1192,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carbon",
    "StateorEq": "Montana",
    "Population": "10,473",
    "Area": 2048,
    "StatisticalArea": "Billings, MT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carter",
    "StateorEq": "Montana",
    "Population": "1,415",
    "Area": 3340,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cascade",
    "StateorEq": "Montana",
    "Population": "84,414",
    "Area": 2698,
    "StatisticalArea": "Great Falls, MT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chouteau",
    "StateorEq": "Montana",
    "Population": "5,895",
    "Area": 3973,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Custer",
    "StateorEq": "Montana",
    "Population": "11,867",
    "Area": 3783,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Daniels",
    "StateorEq": "Montana",
    "Population": "1,661",
    "Area": 1426,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dawson",
    "StateorEq": "Montana",
    "Population": "8,940",
    "Area": 2373,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Deer Lodge",
    "StateorEq": "Montana",
    "Population": "9,421",
    "Area": 737,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fallon",
    "StateorEq": "Montana",
    "Population": "3,049",
    "Area": 1620,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fergus",
    "StateorEq": "Montana",
    "Population": "11,446",
    "Area": 4339,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Flathead",
    "StateorEq": "Montana",
    "Population": "104,357",
    "Area": 5099,
    "StatisticalArea": "Kalispell, MT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gallatin",
    "StateorEq": "Montana",
    "Population": "118,960",
    "Area": 2507,
    "StatisticalArea": "Bozeman, MT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garfield",
    "StateorEq": "Montana",
    "Population": "1,173",
    "Area": 4668,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Glacier",
    "StateorEq": "Montana",
    "Population": "13,778",
    "Area": 2995,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Golden Valley",
    "StateorEq": "Montana",
    "Population": 823,
    "Area": 1175,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Granite",
    "StateorEq": "Montana",
    "Population": "3,309",
    "Area": 1728,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hill",
    "StateorEq": "Montana",
    "Population": "16,309",
    "Area": 2896,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Montana",
    "Population": "12,085",
    "Area": 1657,
    "StatisticalArea": "Helena, MT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Judith Basin",
    "StateorEq": "Montana",
    "Population": "2,023",
    "Area": 1870,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Montana",
    "Population": "31,134",
    "Area": 194,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lewis and Clark",
    "StateorEq": "Montana",
    "Population": "70,973",
    "Area": 3461,
    "StatisticalArea": "Helena, MT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Liberty",
    "StateorEq": "Montana",
    "Population": "1,959",
    "Area": 1430,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Montana",
    "Population": "19,677",
    "Area": 3613,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Montana",
    "Population": "8,623",
    "Area": 2643,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McCone",
    "StateorEq": "Montana",
    "Population": "1,729",
    "Area": 3587,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Meagher",
    "StateorEq": "Montana",
    "Population": "1,927",
    "Area": 232,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mineral",
    "StateorEq": "Montana",
    "Population": "4,535",
    "Area": 1220,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Missoula",
    "StateorEq": "Montana",
    "Population": "117,922",
    "Area": 2598,
    "StatisticalArea": "Missoula, MT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Musselshell",
    "StateorEq": "Montana",
    "Population": "4,730",
    "Area": 1867,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Park",
    "StateorEq": "Montana",
    "Population": "17,191",
    "Area": 2656,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Petroleum",
    "StateorEq": "Montana",
    "Population": 496,
    "Area": 1654,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Phillips",
    "StateorEq": "Montana",
    "Population": "4,217",
    "Area": 5140,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pondera",
    "StateorEq": "Montana",
    "Population": "5,898",
    "Area": 1625,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Powder River",
    "StateorEq": "Montana",
    "Population": "1,694",
    "Area": 3297,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Powell",
    "StateorEq": "Montana",
    "Population": "6,946",
    "Area": 2326,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Prairie",
    "StateorEq": "Montana",
    "Population": "1,088",
    "Area": 1737,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ravalli",
    "StateorEq": "Montana",
    "Population": "44,174",
    "Area": 2394,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Richland",
    "StateorEq": "Montana",
    "Population": "11,491",
    "Area": 2084,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roosevelt",
    "StateorEq": "Montana",
    "Population": "10,794",
    "Area": 2356,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rosebud",
    "StateorEq": "Montana",
    "Population": "8,329",
    "Area": 5012,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sanders",
    "StateorEq": "Montana",
    "Population": "12,400",
    "Area": 2762,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sheridan",
    "StateorEq": "Montana",
    "Population": "3,539",
    "Area": 1677,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Silver Bow",
    "StateorEq": "Montana",
    "Population": "35,133",
    "Area": 718,
    "StatisticalArea": "Butte-Silver Bow, MT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stillwater",
    "StateorEq": "Montana",
    "Population": "8,963",
    "Area": 1795,
    "StatisticalArea": "Billings, MT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sweet Grass",
    "StateorEq": "Montana",
    "Population": "3,678",
    "Area": 1855,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Teton",
    "StateorEq": "Montana",
    "Population": "6,226",
    "Area": 2273,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Toole",
    "StateorEq": "Montana",
    "Population": "4,971",
    "Area": 1911,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Treasure",
    "StateorEq": "Montana",
    "Population": 762,
    "Area": 979,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Valley",
    "StateorEq": "Montana",
    "Population": "7,578",
    "Area": 4921,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wheatland",
    "StateorEq": "Montana",
    "Population": "2,069",
    "Area": 1423,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wibaux",
    "StateorEq": "Montana",
    "Population": 937,
    "Area": 889,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yellowstone",
    "StateorEq": "Montana",
    "Population": "164,731",
    "Area": 2635,
    "StatisticalArea": "Billings, MT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Nebraska",
    "Population": "31,205",
    "Area": 563,
    "StatisticalArea": "Hastings, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Antelope",
    "StateorEq": "Nebraska",
    "Population": "6,295",
    "Area": 857,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Arthur",
    "StateorEq": "Nebraska",
    "Population": 434,
    "Area": 715,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Banner",
    "StateorEq": "Nebraska",
    "Population": 674,
    "Area": 746,
    "StatisticalArea": "Scottsbluff, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Blaine",
    "StateorEq": "Nebraska",
    "Population": 431,
    "Area": 711,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "Nebraska",
    "Population": "5,379",
    "Area": 687,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Box Butte",
    "StateorEq": "Nebraska",
    "Population": "10,842",
    "Area": 1075,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Boyd",
    "StateorEq": "Nebraska",
    "Population": "1,810",
    "Area": 540,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Nebraska",
    "Population": "2,903",
    "Area": 1221,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Buffalo",
    "StateorEq": "Nebraska",
    "Population": "50,084",
    "Area": 968,
    "StatisticalArea": "Kearney, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Burt",
    "StateorEq": "Nebraska",
    "Population": "6,722",
    "Area": 493,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Nebraska",
    "Population": "8,369",
    "Area": 584,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Nebraska",
    "Population": "26,598",
    "Area": 559,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cedar",
    "StateorEq": "Nebraska",
    "Population": "8,380",
    "Area": 740,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chase",
    "StateorEq": "Nebraska",
    "Population": "3,893",
    "Area": 894,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cherry",
    "StateorEq": "Nebraska",
    "Population": "5,455",
    "Area": 5961,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cheyenne",
    "StateorEq": "Nebraska",
    "Population": "9,468",
    "Area": 1196,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Nebraska",
    "Population": "6,104",
    "Area": 573,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Colfax",
    "StateorEq": "Nebraska",
    "Population": "10,582",
    "Area": 413,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cuming",
    "StateorEq": "Nebraska",
    "Population": "9,013",
    "Area": 572,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Custer",
    "StateorEq": "Nebraska",
    "Population": "10,545",
    "Area": 2579,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dakota",
    "StateorEq": "Nebraska",
    "Population": "21,582",
    "Area": 264,
    "StatisticalArea": "Sioux City, IA-NE-SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dawes",
    "StateorEq": "Nebraska",
    "Population": "8,199",
    "Area": 1396,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dawson",
    "StateorEq": "Nebraska",
    "Population": "24,111",
    "Area": 1013,
    "StatisticalArea": "Lexington, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Deuel",
    "StateorEq": "Nebraska",
    "Population": "1,838",
    "Area": 440,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dixon",
    "StateorEq": "Nebraska",
    "Population": "5,606",
    "Area": 476,
    "StatisticalArea": "Sioux City, IA-NE-SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dodge",
    "StateorEq": "Nebraska",
    "Population": "37,167",
    "Area": 534,
    "StatisticalArea": "Fremont, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Nebraska",
    "Population": "584,526",
    "Area": 331,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dundy",
    "StateorEq": "Nebraska",
    "Population": "1,654",
    "Area": 920,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fillmore",
    "StateorEq": "Nebraska",
    "Population": "5,551",
    "Area": 576,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Nebraska",
    "Population": "2,889",
    "Area": 576,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Frontier",
    "StateorEq": "Nebraska",
    "Population": "2,519",
    "Area": 975,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Furnas",
    "StateorEq": "Nebraska",
    "Population": "4,636",
    "Area": 718,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gage",
    "StateorEq": "Nebraska",
    "Population": "21,704",
    "Area": 855,
    "StatisticalArea": "Beatrice, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garden",
    "StateorEq": "Nebraska",
    "Population": "1,874",
    "Area": 1705,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Garfield",
    "StateorEq": "Nebraska",
    "Population": "1,813",
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gosper",
    "StateorEq": "Nebraska",
    "Population": "1,893",
    "Area": 458,
    "StatisticalArea": "Lexington, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Nebraska",
    "Population": 611,
    "Area": 776,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greeley",
    "StateorEq": "Nebraska",
    "Population": "2,188",
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hall",
    "StateorEq": "Nebraska",
    "Population": "62,895",
    "Area": 546,
    "StatisticalArea": "Grand Island, NE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Nebraska",
    "Population": "9,429",
    "Area": 544,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harlan",
    "StateorEq": "Nebraska",
    "Population": "3,073",
    "Area": 553,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hayes",
    "StateorEq": "Nebraska",
    "Population": 856,
    "Area": 713,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hitchcock",
    "StateorEq": "Nebraska",
    "Population": "2,616",
    "Area": 710,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Holt",
    "StateorEq": "Nebraska",
    "Population": "10,127",
    "Area": 2413,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hooker",
    "StateorEq": "Nebraska",
    "Population": 711,
    "Area": 721,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Howard",
    "StateorEq": "Nebraska",
    "Population": "6,475",
    "Area": 570,
    "StatisticalArea": "Grand Island, NE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Nebraska",
    "Population": "7,240",
    "Area": 573,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Nebraska",
    "Population": "5,290",
    "Area": 376,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kearney",
    "StateorEq": "Nebraska",
    "Population": "6,688",
    "Area": 516,
    "StatisticalArea": "Kearney, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Keith",
    "StateorEq": "Nebraska",
    "Population": "8,335",
    "Area": 1061,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Keya Paha",
    "StateorEq": "Nebraska",
    "Population": 769,
    "Area": 773,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kimball",
    "StateorEq": "Nebraska",
    "Population": "3,434",
    "Area": 952,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Nebraska",
    "Population": "8,391",
    "Area": 1108,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lancaster",
    "StateorEq": "Nebraska",
    "Population": "322,608",
    "Area": 839,
    "StatisticalArea": "Lincoln, NE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Nebraska",
    "Population": "34,676",
    "Area": 2564,
    "StatisticalArea": "North Platte, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Nebraska",
    "Population": 716,
    "Area": 571,
    "StatisticalArea": "North Platte, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Loup",
    "StateorEq": "Nebraska",
    "Population": 607,
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Nebraska",
    "Population": "35,585",
    "Area": 859,
    "StatisticalArea": "Norfolk, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McPherson",
    "StateorEq": "Nebraska",
    "Population": 399,
    "Area": 573,
    "StatisticalArea": "North Platte, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Merrick",
    "StateorEq": "Nebraska",
    "Population": "7,668",
    "Area": 485,
    "StatisticalArea": "Grand Island, NE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morrill",
    "StateorEq": "Nebraska",
    "Population": "4,555",
    "Area": 1424,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nance",
    "StateorEq": "Nebraska",
    "Population": "3,380",
    "Area": 441,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nemaha",
    "StateorEq": "Nebraska",
    "Population": "7,074",
    "Area": 409,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nuckolls",
    "StateorEq": "Nebraska",
    "Population": "4,095",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Otoe",
    "StateorEq": "Nebraska",
    "Population": "15,912",
    "Area": 616,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pawnee",
    "StateorEq": "Nebraska",
    "Population": "2,544",
    "Area": 432,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Perkins",
    "StateorEq": "Nebraska",
    "Population": "2,858",
    "Area": 883,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Phelps",
    "StateorEq": "Nebraska",
    "Population": "8,968",
    "Area": 540,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pierce",
    "StateorEq": "Nebraska",
    "Population": "7,317",
    "Area": 574,
    "StatisticalArea": "Norfolk, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Platte",
    "StateorEq": "Nebraska",
    "Population": "34,296",
    "Area": 678,
    "StatisticalArea": "Columbus, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Nebraska",
    "Population": "5,214",
    "Area": 439,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Red Willow",
    "StateorEq": "Nebraska",
    "Population": "10,702",
    "Area": 717,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Richardson",
    "StateorEq": "Nebraska",
    "Population": "7,871",
    "Area": 554,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rock",
    "StateorEq": "Nebraska",
    "Population": "1,262",
    "Area": 1008,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Saline",
    "StateorEq": "Nebraska",
    "Population": "14,292",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sarpy",
    "StateorEq": "Nebraska",
    "Population": "190,604",
    "Area": 241,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Saunders",
    "StateorEq": "Nebraska",
    "Population": "22,278",
    "Area": 754,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scotts Bluff",
    "StateorEq": "Nebraska",
    "Population": "36,084",
    "Area": 739,
    "StatisticalArea": "Scottsbluff, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Seward",
    "StateorEq": "Nebraska",
    "Population": "17,609",
    "Area": 575,
    "StatisticalArea": "Lincoln, NE Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sheridan",
    "StateorEq": "Nebraska",
    "Population": "5,127",
    "Area": 2441,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sherman",
    "StateorEq": "Nebraska",
    "Population": "2,959",
    "Area": 566,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sioux",
    "StateorEq": "Nebraska",
    "Population": "1,135",
    "Area": 1313,
    "StatisticalArea": "Scottsbluff, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stanton",
    "StateorEq": "Nebraska",
    "Population": "5,842",
    "Area": 430,
    "StatisticalArea": "Norfolk, NE Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Thayer",
    "StateorEq": "Nebraska",
    "Population": "5,034",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Thomas",
    "StateorEq": "Nebraska",
    "Population": 669,
    "Area": 713,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Thurston",
    "StateorEq": "Nebraska",
    "Population": "6,773",
    "Area": 394,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Valley",
    "StateorEq": "Nebraska",
    "Population": "4,059",
    "Area": 568,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Nebraska",
    "Population": "20,865",
    "Area": 390,
    "StatisticalArea": "Omaha-Council Bluffs, NE-IA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Nebraska",
    "Population": "9,697",
    "Area": 444,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Webster",
    "StateorEq": "Nebraska",
    "Population": "3,395",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wheeler",
    "StateorEq": "Nebraska",
    "Population": 774,
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "York",
    "StateorEq": "Nebraska",
    "Population": "14,125",
    "Area": 576,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Churchill",
    "StateorEq": "Nevada",
    "Population": "25,516",
    "Area": 4929,
    "StatisticalArea": "Fallon, NV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Nevada",
    "Population": "2,265,461",
    "Area": 7911,
    "StatisticalArea": "Las Vegas-Henderson-Paradise, NV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Nevada",
    "Population": "49,488",
    "Area": 710,
    "StatisticalArea": "Gardnerville Ranchos, NV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Elko",
    "StateorEq": "Nevada",
    "Population": "53,702",
    "Area": 17182,
    "StatisticalArea": "Elko, NV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Esmeralda",
    "StateorEq": "Nevada",
    "Population": 729,
    "Area": 3589,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Eureka",
    "StateorEq": "Nevada",
    "Population": "1,855",
    "Area": 4176,
    "StatisticalArea": "Elko, NV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Humboldt",
    "StateorEq": "Nevada",
    "Population": "17,285",
    "Area": 9658,
    "StatisticalArea": "Winnemucca, NV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lander",
    "StateorEq": "Nevada",
    "Population": "5,734",
    "Area": 5798,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Nevada",
    "Population": "4,499",
    "Area": 10635,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lyon",
    "StateorEq": "Nevada",
    "Population": "59,235",
    "Area": 1994,
    "StatisticalArea": "Fernley, NV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mineral",
    "StateorEq": "Nevada",
    "Population": "4,554",
    "Area": 3757,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nye",
    "StateorEq": "Nevada",
    "Population": "51,591",
    "Area": 18147,
    "StatisticalArea": "Pahrump, NV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pershing",
    "StateorEq": "Nevada",
    "Population": "6,650",
    "Area": 6009,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Storey",
    "StateorEq": "Nevada",
    "Population": "4,104",
    "Area": 264,
    "StatisticalArea": "Reno, NV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washoe",
    "StateorEq": "Nevada",
    "Population": "486,492",
    "Area": 6342,
    "StatisticalArea": "Reno, NV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "White Pine",
    "StateorEq": "Nevada",
    "Population": "9,080",
    "Area": 8877,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carson City, Consolidated Municipality of[v]",
    "StateorEq": "Nevada",
    "Population": "58,639",
    "Area": 144,
    "StatisticalArea": "Carson City, NV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Belknap",
    "StateorEq": "New Hampshire",
    "Population": "63,705",
    "Area": 401,
    "StatisticalArea": "Laconia, NH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "New Hampshire",
    "Population": "50,107",
    "Area": 934,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cheshire",
    "StateorEq": "New Hampshire",
    "Population": "76,458",
    "Area": 708,
    "StatisticalArea": "Keene, NH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coos",
    "StateorEq": "New Hampshire",
    "Population": "31,268",
    "Area": 1801,
    "StatisticalArea": "Berlin, NH-VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grafton",
    "StateorEq": "New Hampshire",
    "Population": "91,118",
    "Area": 1714,
    "StatisticalArea": "Lebanon, NH-VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hillsborough",
    "StateorEq": "New Hampshire",
    "Population": "422,937",
    "Area": 876,
    "StatisticalArea": "Manchester-Nashua, NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Merrimack",
    "StateorEq": "New Hampshire",
    "Population": "153,808",
    "Area": 934,
    "StatisticalArea": "Concord, NH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rockingham",
    "StateorEq": "New Hampshire",
    "Population": "314,176",
    "Area": 695,
    "StatisticalArea": "Boston-Cambridge-Newton, MA-NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Strafford",
    "StateorEq": "New Hampshire",
    "Population": "130,889",
    "Area": 369,
    "StatisticalArea": "Boston-Cambridge-Newton, MA-NH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sullivan",
    "StateorEq": "New Hampshire",
    "Population": "43,063",
    "Area": 537,
    "StatisticalArea": "Lebanon, NH-VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Atlantic",
    "StateorEq": "New Jersey",
    "Population": "274,534",
    "Area": 561,
    "StatisticalArea": "Atlantic City-Hammonton, NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bergen",
    "StateorEq": "New Jersey",
    "Population": "955,732",
    "Area": 234,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Burlington",
    "StateorEq": "New Jersey",
    "Population": "461,860",
    "Area": 805,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Camden",
    "StateorEq": "New Jersey",
    "Population": "523,485",
    "Area": 222,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cape May",
    "StateorEq": "New Jersey",
    "Population": "95,263",
    "Area": 255,
    "StatisticalArea": "Ocean City, NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "New Jersey",
    "Population": "154,152",
    "Area": 489,
    "StatisticalArea": "Vineland-Bridgeton, NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Essex",
    "StateorEq": "New Jersey",
    "Population": "863,728",
    "Area": 126,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gloucester",
    "StateorEq": "New Jersey",
    "Population": "302,294",
    "Area": 325,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hudson",
    "StateorEq": "New Jersey",
    "Population": "724,854",
    "Area": 47,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hunterdon",
    "StateorEq": "New Jersey",
    "Population": "128,947",
    "Area": 430,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "New Jersey",
    "Population": "387,340",
    "Area": 226,
    "StatisticalArea": "Trenton-Princeton, NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Middlesex",
    "StateorEq": "New Jersey",
    "Population": "863,162",
    "Area": 311,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monmouth",
    "StateorEq": "New Jersey",
    "Population": "643,615",
    "Area": 472,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morris",
    "StateorEq": "New Jersey",
    "Population": "509,285",
    "Area": 469,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ocean",
    "StateorEq": "New Jersey",
    "Population": "637,229",
    "Area": 636,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Passaic",
    "StateorEq": "New Jersey",
    "Population": "524,118",
    "Area": 185,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Salem",
    "StateorEq": "New Jersey",
    "Population": "64,837",
    "Area": 338,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Somerset",
    "StateorEq": "New Jersey",
    "Population": "345,361",
    "Area": 305,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sussex",
    "StateorEq": "New Jersey",
    "Population": "144,221",
    "Area": 521,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "New Jersey",
    "Population": "575,345",
    "Area": 103,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "New Jersey",
    "Population": "109,632",
    "Area": 358,
    "StatisticalArea": "Allentown-Bethlehem-Easton, PA-NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bernalillo",
    "StateorEq": "New Mexico",
    "Population": "676,444",
    "Area": 1166,
    "StatisticalArea": "Albuquerque, NM Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Catron",
    "StateorEq": "New Mexico",
    "Population": "3,579",
    "Area": 6928,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chaves",
    "StateorEq": "New Mexico",
    "Population": "65,157",
    "Area": 6071,
    "StatisticalArea": "Roswell, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cibola",
    "StateorEq": "New Mexico",
    "Population": "27,172",
    "Area": 4540,
    "StatisticalArea": "Grants, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Colfax",
    "StateorEq": "New Mexico",
    "Population": "12,387",
    "Area": 3757,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Curry",
    "StateorEq": "New Mexico",
    "Population": "48,430",
    "Area": 1406,
    "StatisticalArea": "Clovis, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "De Baca",
    "StateorEq": "New Mexico",
    "Population": "1,698",
    "Area": 2325,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Doña Ana",
    "StateorEq": "New Mexico",
    "Population": "219,561",
    "Area": 3807,
    "StatisticalArea": "Las Cruces, NM Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Eddy",
    "StateorEq": "New Mexico",
    "Population": "62,314",
    "Area": 4182,
    "StatisticalArea": "Carlsbad-Artesia, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "New Mexico",
    "Population": "28,185",
    "Area": 3966,
    "StatisticalArea": "Silver City, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Guadalupe",
    "StateorEq": "New Mexico",
    "Population": "4,452",
    "Area": 3031,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harding",
    "StateorEq": "New Mexico",
    "Population": 657,
    "Area": 2126,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hidalgo",
    "StateorEq": "New Mexico",
    "Population": "4,178",
    "Area": 3446,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lea",
    "StateorEq": "New Mexico",
    "Population": "74,455",
    "Area": 4393,
    "StatisticalArea": "Hobbs, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "New Mexico",
    "Population": "20,269",
    "Area": 4831,
    "StatisticalArea": "Ruidoso, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Los Alamos[w]",
    "StateorEq": "New Mexico",
    "Population": "19,419",
    "Area": 109,
    "StatisticalArea": "Los Alamos, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Luna",
    "StateorEq": "New Mexico",
    "Population": "25,427",
    "Area": 2965,
    "StatisticalArea": "Deming, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McKinley",
    "StateorEq": "New Mexico",
    "Population": "72,902",
    "Area": 5449,
    "StatisticalArea": "Gallup, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mora",
    "StateorEq": "New Mexico",
    "Population": "4,189",
    "Area": 1931,
    "StatisticalArea": "Las Vegas, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Otero",
    "StateorEq": "New Mexico",
    "Population": "67,839",
    "Area": 6627,
    "StatisticalArea": "Alamogordo, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Quay",
    "StateorEq": "New Mexico",
    "Population": "8,746",
    "Area": 2855,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rio Arriba",
    "StateorEq": "New Mexico",
    "Population": "40,363",
    "Area": 5858,
    "StatisticalArea": "Española, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Roosevelt",
    "StateorEq": "New Mexico",
    "Population": "19,191",
    "Area": 2449,
    "StatisticalArea": "Portales, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Juan",
    "StateorEq": "New Mexico",
    "Population": "121,661",
    "Area": 5514,
    "StatisticalArea": "Farmington, NM Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Miguel",
    "StateorEq": "New Mexico",
    "Population": "27,201",
    "Area": 4717,
    "StatisticalArea": "Las Vegas, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sandoval",
    "StateorEq": "New Mexico",
    "Population": "148,834",
    "Area": 3710,
    "StatisticalArea": "Albuquerque, NM Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Santa Fe",
    "StateorEq": "New Mexico",
    "Population": "154,823",
    "Area": 1909,
    "StatisticalArea": "Santa Fe, NM Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sierra",
    "StateorEq": "New Mexico",
    "Population": "11,576",
    "Area": 4180,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Socorro",
    "StateorEq": "New Mexico",
    "Population": "16,595",
    "Area": 6647,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Taos",
    "StateorEq": "New Mexico",
    "Population": "34,489",
    "Area": 2203,
    "StatisticalArea": "Taos, NM Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Torrance",
    "StateorEq": "New Mexico",
    "Population": "15,045",
    "Area": 3345,
    "StatisticalArea": "Albuquerque, NM Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "New Mexico",
    "Population": "4,079",
    "Area": 3830,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Valencia",
    "StateorEq": "New Mexico",
    "Population": "76,205",
    "Area": 1068,
    "StatisticalArea": "Albuquerque, NM Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Albany",
    "StateorEq": "New York",
    "Population": "314,848",
    "Area": 533,
    "StatisticalArea": "Albany-Schenectady-Troy, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Allegany",
    "StateorEq": "New York",
    "Population": "46,456",
    "Area": 1034,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bronx",
    "StateorEq": "New York",
    "Population": "1,472,654",
    "Area": 57.43,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Broome",
    "StateorEq": "New York",
    "Population": "198,683",
    "Area": 715,
    "StatisticalArea": "Binghamton, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cattaraugus",
    "StateorEq": "New York",
    "Population": "77,042",
    "Area": 1310,
    "StatisticalArea": "Olean, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cayuga",
    "StateorEq": "New York",
    "Population": "76,248",
    "Area": 864,
    "StatisticalArea": "Auburn, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chautauqua",
    "StateorEq": "New York",
    "Population": "127,657",
    "Area": 1500,
    "StatisticalArea": "Jamestown-Dunkirk-Fredonia, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chemung",
    "StateorEq": "New York",
    "Population": "84,148",
    "Area": 410.81,
    "StatisticalArea": "Elmira, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chenango",
    "StateorEq": "New York",
    "Population": "47,220",
    "Area": 898.95,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "New York",
    "Population": "79,843",
    "Area": 1118,
    "StatisticalArea": "Plattsburgh, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "New York",
    "Population": "61,570",
    "Area": 648,
    "StatisticalArea": "Hudson, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cortland",
    "StateorEq": "New York",
    "Population": "46,809",
    "Area": 502,
    "StatisticalArea": "Cortland, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Delaware",
    "StateorEq": "New York",
    "Population": "44,308",
    "Area": 1468,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dutchess",
    "StateorEq": "New York",
    "Population": "295,911",
    "Area": 825,
    "StatisticalArea": "Poughkeepsie-Newbury-Middletown, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Erie",
    "StateorEq": "New York",
    "Population": "954,236",
    "Area": 1227,
    "StatisticalArea": "Buffalo-Cheektowaga-Niagara Falls, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Essex",
    "StateorEq": "New York",
    "Population": "37,381",
    "Area": 1916,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "New York",
    "Population": "47,555",
    "Area": 1697,
    "StatisticalArea": "Malone, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "New York",
    "Population": "53,324",
    "Area": 533,
    "StatisticalArea": "Gloversville, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Genesee",
    "StateorEq": "New York",
    "Population": "58,388",
    "Area": 495,
    "StatisticalArea": "Batavia, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "New York",
    "Population": "47,931",
    "Area": 658,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "New York",
    "Population": "5,107",
    "Area": 1808,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Herkimer",
    "StateorEq": "New York",
    "Population": "60,139",
    "Area": 1458,
    "StatisticalArea": "Utica-Rome, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "New York",
    "Population": "116,721",
    "Area": 1857,
    "StatisticalArea": "Watertown-Fort Drum, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kings",
    "StateorEq": "New York",
    "Population": "2,736,074",
    "Area": 96.9,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lewis",
    "StateorEq": "New York",
    "Population": "26,582",
    "Area": 1290,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Livingston",
    "StateorEq": "New York",
    "Population": "61,834",
    "Area": 640,
    "StatisticalArea": "Rochester, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "New York",
    "Population": "68,016",
    "Area": 662,
    "StatisticalArea": "Syracuse, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "New York",
    "Population": "759,443",
    "Area": 1366,
    "StatisticalArea": "Rochester, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "New York",
    "Population": "49,532",
    "Area": 410,
    "StatisticalArea": "Amsterdam, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nassau",
    "StateorEq": "New York",
    "Population": "1,395,774",
    "Area": 453,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "New York",
    "StateorEq": "New York",
    "Population": "1,694,251",
    "Area": 33.77,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Niagara",
    "StateorEq": "New York",
    "Population": "212,666",
    "Area": 1140,
    "StatisticalArea": "Buffalo-Cheektowaga-Niagara Falls, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oneida",
    "StateorEq": "New York",
    "Population": "232,125",
    "Area": 1213,
    "StatisticalArea": "Utica-Rome, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Onondaga",
    "StateorEq": "New York",
    "Population": "476,516",
    "Area": 806,
    "StatisticalArea": "Syracuse, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ontario",
    "StateorEq": "New York",
    "Population": "112,458",
    "Area": 662,
    "StatisticalArea": "Rochester, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "New York",
    "Population": "401,310",
    "Area": 839,
    "StatisticalArea": "Poughkeepsie-Newburgh-Middletown, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orleans",
    "StateorEq": "New York",
    "Population": "40,343",
    "Area": 817,
    "StatisticalArea": "Rochester, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oswego",
    "StateorEq": "New York",
    "Population": "117,525",
    "Area": 1312,
    "StatisticalArea": "Syracuse, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Otsego",
    "StateorEq": "New York",
    "Population": "58,524",
    "Area": 1003,
    "StatisticalArea": "Oneonta, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "New York",
    "Population": "97,668",
    "Area": 246,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Queens",
    "StateorEq": "New York",
    "Population": "2,405,464",
    "Area": 178.28,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rensselaer",
    "StateorEq": "New York",
    "Population": "161,130",
    "Area": 665,
    "StatisticalArea": "Albany-Schenectady-Troy, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Richmond",
    "StateorEq": "New York",
    "Population": "495,747",
    "Area": 102.5,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rockland",
    "StateorEq": "New York",
    "Population": "338,329",
    "Area": 199,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "St. Lawrence",
    "StateorEq": "New York",
    "Population": "108,505",
    "Area": 2821,
    "StatisticalArea": "Ogdensburg-Massena, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Saratoga",
    "StateorEq": "New York",
    "Population": "235,509",
    "Area": 844,
    "StatisticalArea": "Albany-Schenectady-Troy, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Schenectady",
    "StateorEq": "New York",
    "Population": "158,061",
    "Area": 210,
    "StatisticalArea": "Albany-Schenectady-Troy, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Schoharie",
    "StateorEq": "New York",
    "Population": "29,714",
    "Area": 626,
    "StatisticalArea": "Albany-Schenectady-Troy, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Schuyler",
    "StateorEq": "New York",
    "Population": "17,898",
    "Area": 342,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Seneca",
    "StateorEq": "New York",
    "Population": "33,814",
    "Area": 325,
    "StatisticalArea": "Seneca Falls, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Steuben",
    "StateorEq": "New York",
    "Population": "93,584",
    "Area": 1404,
    "StatisticalArea": "Corning, NY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Suffolk",
    "StateorEq": "New York",
    "Population": "1,525,920",
    "Area": 2373,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sullivan",
    "StateorEq": "New York",
    "Population": "78,624",
    "Area": 997,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tioga",
    "StateorEq": "New York",
    "Population": "48,455",
    "Area": 523,
    "StatisticalArea": "Binghamton, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tompkins",
    "StateorEq": "New York",
    "Population": "105,740",
    "Area": 476,
    "StatisticalArea": "Ithaca, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ulster",
    "StateorEq": "New York",
    "Population": "181,851",
    "Area": 1161,
    "StatisticalArea": "Kingston, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "New York",
    "Population": "65,737",
    "Area": 870,
    "StatisticalArea": "Glens Falls, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "New York",
    "Population": "61,302",
    "Area": 846,
    "StatisticalArea": "Glens Falls, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "New York",
    "Population": "91,283",
    "Area": 1384,
    "StatisticalArea": "Rochester, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Westchester",
    "StateorEq": "New York",
    "Population": "1,004,457",
    "Area": 500,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wyoming",
    "StateorEq": "New York",
    "Population": "40,531",
    "Area": 596,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yates",
    "StateorEq": "New York",
    "Population": "24,774",
    "Area": 376,
    "StatisticalArea": "Rochester, NY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alamance",
    "StateorEq": "North Carolina",
    "Population": "171,415",
    "Area": 435,
    "StatisticalArea": "Burlington, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alexander",
    "StateorEq": "North Carolina",
    "Population": "36,444",
    "Area": 263,
    "StatisticalArea": "Hickory-Lenoir-Morganton, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alleghany",
    "StateorEq": "North Carolina",
    "Population": "10,888",
    "Area": 236,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Anson",
    "StateorEq": "North Carolina",
    "Population": "22,055",
    "Area": 537,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ashe",
    "StateorEq": "North Carolina",
    "Population": "26,577",
    "Area": 427,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Avery",
    "StateorEq": "North Carolina",
    "Population": "17,806",
    "Area": 247,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beaufort",
    "StateorEq": "North Carolina",
    "Population": "44,652",
    "Area": 959,
    "StatisticalArea": "Washington, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bertie",
    "StateorEq": "North Carolina",
    "Population": "17,934",
    "Area": 741,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bladen",
    "StateorEq": "North Carolina",
    "Population": "29,606",
    "Area": 887,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brunswick",
    "StateorEq": "North Carolina",
    "Population": "136,693",
    "Area": 860,
    "StatisticalArea": "Myrtle Beach-Conway-North Myrtle Beach, SC-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Buncombe",
    "StateorEq": "North Carolina",
    "Population": "269,452",
    "Area": 660,
    "StatisticalArea": "Asheville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Burke",
    "StateorEq": "North Carolina",
    "Population": "87,570",
    "Area": 515,
    "StatisticalArea": "Hickory-Lenoir-Morganton, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cabarrus",
    "StateorEq": "North Carolina",
    "Population": "225,804",
    "Area": 365,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caldwell",
    "StateorEq": "North Carolina",
    "Population": "80,652",
    "Area": 474,
    "StatisticalArea": "Hickory-Lenoir-Morganton, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Camden",
    "StateorEq": "North Carolina",
    "Population": "10,355",
    "Area": 306,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carteret",
    "StateorEq": "North Carolina",
    "Population": "67,686",
    "Area": 1341,
    "StatisticalArea": "Morehead City, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caswell",
    "StateorEq": "North Carolina",
    "Population": "22,736",
    "Area": 428,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Catawba",
    "StateorEq": "North Carolina",
    "Population": "160,610",
    "Area": 414,
    "StatisticalArea": "Hickory-Lenoir-Morganton, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chatham",
    "StateorEq": "North Carolina",
    "Population": "76,285",
    "Area": 709,
    "StatisticalArea": "Durham-Chapel Hill, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "North Carolina",
    "Population": "28,774",
    "Area": 497,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chowan",
    "StateorEq": "North Carolina",
    "Population": "13,708",
    "Area": 233,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "North Carolina",
    "Population": "11,089",
    "Area": 221,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cleveland",
    "StateorEq": "North Carolina",
    "Population": "99,519",
    "Area": 469,
    "StatisticalArea": "Shelby, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbus",
    "StateorEq": "North Carolina",
    "Population": "50,623",
    "Area": 954,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Craven",
    "StateorEq": "North Carolina",
    "Population": "100,720",
    "Area": 774,
    "StatisticalArea": "New Bern, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "North Carolina",
    "Population": "334,728",
    "Area": 658,
    "StatisticalArea": "Fayetteville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Currituck",
    "StateorEq": "North Carolina",
    "Population": "28,100",
    "Area": 526,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dare",
    "StateorEq": "North Carolina",
    "Population": "36,915",
    "Area": 1562,
    "StatisticalArea": "Kill Devil Hills, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Davidson",
    "StateorEq": "North Carolina",
    "Population": "168,930",
    "Area": 567,
    "StatisticalArea": "Winston-Salem, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Davie",
    "StateorEq": "North Carolina",
    "Population": "42,712",
    "Area": 267,
    "StatisticalArea": "Winston-Salem, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Duplin",
    "StateorEq": "North Carolina",
    "Population": "48,715",
    "Area": 819,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Durham",
    "StateorEq": "North Carolina",
    "Population": "324,833",
    "Area": 298,
    "StatisticalArea": "Durham-Chapel Hill, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Edgecombe",
    "StateorEq": "North Carolina",
    "Population": "48,900",
    "Area": 507,
    "StatisticalArea": "Rocky Mount, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Forsyth",
    "StateorEq": "North Carolina",
    "Population": "382,590",
    "Area": 413,
    "StatisticalArea": "Winston-Salem, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "North Carolina",
    "Population": "68,573",
    "Area": 495,
    "StatisticalArea": "Raleigh, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gaston",
    "StateorEq": "North Carolina",
    "Population": "227,943",
    "Area": 364,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gates",
    "StateorEq": "North Carolina",
    "Population": "10,478",
    "Area": 346,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Graham",
    "StateorEq": "North Carolina",
    "Population": "8,030",
    "Area": 302,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Granville",
    "StateorEq": "North Carolina",
    "Population": "60,992",
    "Area": 537,
    "StatisticalArea": "Durham-Chapel Hill, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "North Carolina",
    "Population": "20,451",
    "Area": 266,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Guilford",
    "StateorEq": "North Carolina",
    "Population": "541,299",
    "Area": 658,
    "StatisticalArea": "Greensboro-High Point, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Halifax",
    "StateorEq": "North Carolina",
    "Population": "48,622",
    "Area": 731,
    "StatisticalArea": "Roanoke Rapids, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harnett",
    "StateorEq": "North Carolina",
    "Population": "133,568",
    "Area": 601,
    "StatisticalArea": "Fayetteville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Haywood",
    "StateorEq": "North Carolina",
    "Population": "62,089",
    "Area": 555,
    "StatisticalArea": "Asheville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henderson",
    "StateorEq": "North Carolina",
    "Population": "116,281",
    "Area": 375,
    "StatisticalArea": "Asheville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hertford",
    "StateorEq": "North Carolina",
    "Population": "21,552",
    "Area": 360,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hoke",
    "StateorEq": "North Carolina",
    "Population": "52,082",
    "Area": 392,
    "StatisticalArea": "Fayetteville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hyde",
    "StateorEq": "North Carolina",
    "Population": "4,589",
    "Area": 1424,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Iredell",
    "StateorEq": "North Carolina",
    "Population": "186,693",
    "Area": 597,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "North Carolina",
    "Population": "43,109",
    "Area": 494,
    "StatisticalArea": "Cullowhee, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnston",
    "StateorEq": "North Carolina",
    "Population": "215,999",
    "Area": 796,
    "StatisticalArea": "Raleigh, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jones",
    "StateorEq": "North Carolina",
    "Population": "9,172",
    "Area": 473,
    "StatisticalArea": "New Bern, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "North Carolina",
    "Population": "63,285",
    "Area": 259,
    "StatisticalArea": "Sanford, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lenoir",
    "StateorEq": "North Carolina",
    "Population": "55,122",
    "Area": 402,
    "StatisticalArea": "Kinston, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "North Carolina",
    "Population": "86,810",
    "Area": 307,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Macon",
    "StateorEq": "North Carolina",
    "Population": "37,014",
    "Area": 452,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "North Carolina",
    "Population": "21,193",
    "Area": 461,
    "StatisticalArea": "Asheville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Martin",
    "StateorEq": "North Carolina",
    "Population": "22,031",
    "Area": 446,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McDowell",
    "StateorEq": "North Carolina",
    "Population": "44,578",
    "Area": 519,
    "StatisticalArea": "Marion, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mecklenburg",
    "StateorEq": "North Carolina",
    "Population": "1,115,482",
    "Area": 546,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mitchell",
    "StateorEq": "North Carolina",
    "Population": "14,903",
    "Area": 222,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "North Carolina",
    "Population": "25,751",
    "Area": 502,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Moore",
    "StateorEq": "North Carolina",
    "Population": "99,727",
    "Area": 706,
    "StatisticalArea": "Pinehurst-Southern Pines, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nash",
    "StateorEq": "North Carolina",
    "Population": "94,970",
    "Area": 543,
    "StatisticalArea": "Rocky Mount, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "New Hanover",
    "StateorEq": "North Carolina",
    "Population": "225,702",
    "Area": 328,
    "StatisticalArea": "Wilmington, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Northampton",
    "StateorEq": "North Carolina",
    "Population": "17,471",
    "Area": 551,
    "StatisticalArea": "Roanoke Rapids, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Onslow",
    "StateorEq": "North Carolina",
    "Population": "204,576",
    "Area": 909,
    "StatisticalArea": "Jacksonville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "North Carolina",
    "Population": "148,696",
    "Area": 401,
    "StatisticalArea": "Durham-Chapel Hill, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pamlico",
    "StateorEq": "North Carolina",
    "Population": "12,276",
    "Area": 566,
    "StatisticalArea": "New Bern, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pasquotank",
    "StateorEq": "North Carolina",
    "Population": "40,568",
    "Area": 289,
    "StatisticalArea": "Elizabeth City, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pender",
    "StateorEq": "North Carolina",
    "Population": "60,203",
    "Area": 933,
    "StatisticalArea": "Wilmington, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perquimans",
    "StateorEq": "North Carolina",
    "Population": "13,005",
    "Area": 329,
    "StatisticalArea": "Elizabeth City, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Person",
    "StateorEq": "North Carolina",
    "Population": "39,097",
    "Area": 404,
    "StatisticalArea": "Durham-Chapel Hill, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pitt",
    "StateorEq": "North Carolina",
    "Population": "170,243",
    "Area": 655,
    "StatisticalArea": "Greenville, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "North Carolina",
    "Population": "19,328",
    "Area": 239,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "North Carolina",
    "Population": "144,171",
    "Area": 790,
    "StatisticalArea": "Greensboro-High Point, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Richmond",
    "StateorEq": "North Carolina",
    "Population": "42,946",
    "Area": 480,
    "StatisticalArea": "Rockingham, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Robeson",
    "StateorEq": "North Carolina",
    "Population": "116,530",
    "Area": 951,
    "StatisticalArea": "Lumberton, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rockingham",
    "StateorEq": "North Carolina",
    "Population": "91,096",
    "Area": 572,
    "StatisticalArea": "Greensboro-High Point, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rowan",
    "StateorEq": "North Carolina",
    "Population": "146,875",
    "Area": 524,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rutherford",
    "StateorEq": "North Carolina",
    "Population": "64,444",
    "Area": 566,
    "StatisticalArea": "Forest City, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sampson",
    "StateorEq": "North Carolina",
    "Population": "59,036",
    "Area": 947,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Scotland",
    "StateorEq": "North Carolina",
    "Population": "34,174",
    "Area": 321,
    "StatisticalArea": "Laurinburg, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stanly",
    "StateorEq": "North Carolina",
    "Population": "62,504",
    "Area": 404,
    "StatisticalArea": "Albemarle, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stokes",
    "StateorEq": "North Carolina",
    "Population": "44,520",
    "Area": 456,
    "StatisticalArea": "Winston-Salem, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Surry",
    "StateorEq": "North Carolina",
    "Population": "71,359",
    "Area": 538,
    "StatisticalArea": "Mount Airy, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Swain",
    "StateorEq": "North Carolina",
    "Population": "14,117",
    "Area": 541,
    "StatisticalArea": "Cullowhee, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Transylvania",
    "StateorEq": "North Carolina",
    "Population": "32,986",
    "Area": 381,
    "StatisticalArea": "Brevard, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tyrrell",
    "StateorEq": "North Carolina",
    "Population": "3,245",
    "Area": 600,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "North Carolina",
    "Population": "238,267",
    "Area": 640,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Vance",
    "StateorEq": "North Carolina",
    "Population": "42,578",
    "Area": 270,
    "StatisticalArea": "Henderson, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wake",
    "StateorEq": "North Carolina",
    "Population": "1,129,410",
    "Area": 857,
    "StatisticalArea": "Raleigh, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "North Carolina",
    "Population": "18,642",
    "Area": 444,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "North Carolina",
    "Population": "11,003",
    "Area": 424,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Watauga",
    "StateorEq": "North Carolina",
    "Population": "54,086",
    "Area": 313,
    "StatisticalArea": "Boone, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "North Carolina",
    "Population": "117,333",
    "Area": 557,
    "StatisticalArea": "Goldsboro, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilkes",
    "StateorEq": "North Carolina",
    "Population": "65,969",
    "Area": 760,
    "StatisticalArea": "North Wilkesboro, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilson",
    "StateorEq": "North Carolina",
    "Population": "78,784",
    "Area": 374,
    "StatisticalArea": "Wilson, NC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yadkin",
    "StateorEq": "North Carolina",
    "Population": "37,214",
    "Area": 337,
    "StatisticalArea": "Winston-Salem, NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yancey",
    "StateorEq": "North Carolina",
    "Population": "18,470",
    "Area": 313,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "North Dakota",
    "Population": "2,200",
    "Area": 988,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Barnes",
    "StateorEq": "North Dakota",
    "Population": "10,853",
    "Area": 1492,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Benson",
    "StateorEq": "North Dakota",
    "Population": "5,964",
    "Area": 1389,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Billings",
    "StateorEq": "North Dakota",
    "Population": 945,
    "Area": 1152,
    "StatisticalArea": "Dickinson, ND Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bottineau",
    "StateorEq": "North Dakota",
    "Population": "6,379",
    "Area": 1669,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bowman",
    "StateorEq": "North Dakota",
    "Population": "2,993",
    "Area": 1162,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Burke",
    "StateorEq": "North Dakota",
    "Population": "2,201",
    "Area": 1104,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Burleigh",
    "StateorEq": "North Dakota",
    "Population": "98,458",
    "Area": 1633,
    "StatisticalArea": "Bismarck, ND Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "North Dakota",
    "Population": "184,525",
    "Area": 1766,
    "StatisticalArea": "Fargo, ND-MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cavalier",
    "StateorEq": "North Dakota",
    "Population": "3,704",
    "Area": 1489,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dickey",
    "StateorEq": "North Dakota",
    "Population": "4,999",
    "Area": 1131,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Divide",
    "StateorEq": "North Dakota",
    "Population": "2,195",
    "Area": 1259,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dunn",
    "StateorEq": "North Dakota",
    "Population": "4,095",
    "Area": 2010,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Eddy",
    "StateorEq": "North Dakota",
    "Population": "2,347",
    "Area": 632,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Emmons",
    "StateorEq": "North Dakota",
    "Population": "3,301",
    "Area": 1510,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Foster",
    "StateorEq": "North Dakota",
    "Population": "3,397",
    "Area": 635,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Golden Valley",
    "StateorEq": "North Dakota",
    "Population": "1,736",
    "Area": 1002,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grand Forks",
    "StateorEq": "North Dakota",
    "Population": "73,170",
    "Area": 1438,
    "StatisticalArea": "Grand Forks, ND-MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "North Dakota",
    "Population": "2,301",
    "Area": 1660,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Griggs",
    "StateorEq": "North Dakota",
    "Population": "2,306",
    "Area": 708,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hettinger",
    "StateorEq": "North Dakota",
    "Population": "2,489",
    "Area": 1132,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kidder",
    "StateorEq": "North Dakota",
    "Population": "2,394",
    "Area": 1352,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "LaMoure",
    "StateorEq": "North Dakota",
    "Population": "4,093",
    "Area": 1147,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "North Dakota",
    "Population": "1,876",
    "Area": 993,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McHenry",
    "StateorEq": "North Dakota",
    "Population": "5,345",
    "Area": 1874,
    "StatisticalArea": "Minot, ND Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McIntosh",
    "StateorEq": "North Dakota",
    "Population": "2,530",
    "Area": 975,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McKenzie",
    "StateorEq": "North Dakota",
    "Population": "14,704",
    "Area": 2742,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McLean",
    "StateorEq": "North Dakota",
    "Population": "9,771",
    "Area": 2110,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "North Dakota",
    "Population": "8,350",
    "Area": 1045,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morton",
    "StateorEq": "North Dakota",
    "Population": "33,291",
    "Area": 1926,
    "StatisticalArea": "Bismarck, ND Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mountrail",
    "StateorEq": "North Dakota",
    "Population": "9,809",
    "Area": 1824,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nelson",
    "StateorEq": "North Dakota",
    "Population": "3,015",
    "Area": 982,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oliver",
    "StateorEq": "North Dakota",
    "Population": "1,877",
    "Area": 724,
    "StatisticalArea": "Bismarck, ND Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pembina",
    "StateorEq": "North Dakota",
    "Population": "6,844",
    "Area": 1119,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pierce",
    "StateorEq": "North Dakota",
    "Population": "3,990",
    "Area": 1018,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ramsey",
    "StateorEq": "North Dakota",
    "Population": "11,605",
    "Area": 1186,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ransom",
    "StateorEq": "North Dakota",
    "Population": "5,703",
    "Area": 863,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Renville",
    "StateorEq": "North Dakota",
    "Population": "2,282",
    "Area": 875,
    "StatisticalArea": "Minot, ND Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Richland",
    "StateorEq": "North Dakota",
    "Population": "16,529",
    "Area": 1437,
    "StatisticalArea": "Wahpeton, ND-MN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rolette",
    "StateorEq": "North Dakota",
    "Population": "12,187",
    "Area": 902,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sargent",
    "StateorEq": "North Dakota",
    "Population": "3,862",
    "Area": 859,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sheridan",
    "StateorEq": "North Dakota",
    "Population": "1,265",
    "Area": 972,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sioux",
    "StateorEq": "North Dakota",
    "Population": "3,898",
    "Area": 1094,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Slope",
    "StateorEq": "North Dakota",
    "Population": 706,
    "Area": 1218,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stark",
    "StateorEq": "North Dakota",
    "Population": "33,646",
    "Area": 1338,
    "StatisticalArea": "Dickinson, ND Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Steele",
    "StateorEq": "North Dakota",
    "Population": "1,798",
    "Area": 712,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stutsman",
    "StateorEq": "North Dakota",
    "Population": "21,593",
    "Area": 2222,
    "StatisticalArea": "Jamestown, ND Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Towner",
    "StateorEq": "North Dakota",
    "Population": "2,162",
    "Area": 1025,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Traill",
    "StateorEq": "North Dakota",
    "Population": "7,997",
    "Area": 862,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Walsh",
    "StateorEq": "North Dakota",
    "Population": "10,563",
    "Area": 1282,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ward",
    "StateorEq": "North Dakota",
    "Population": "69,919",
    "Area": 2013,
    "StatisticalArea": "Minot, ND Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wells",
    "StateorEq": "North Dakota",
    "Population": "3,982",
    "Area": 1271,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Williams",
    "StateorEq": "North Dakota",
    "Population": "40,950",
    "Area": 2071,
    "StatisticalArea": "Williston, ND Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Northern Islands Municipality",
    "StateorEq": "Northern Mariana Islands",
    "Population": 0,
    "Area": 59.75,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rota Municipality",
    "StateorEq": "Northern Mariana Islands",
    "Population": "2,477",
    "Area": 32.97,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Saipan Municipality",
    "StateorEq": "Northern Mariana Islands",
    "Population": "48,220",
    "Area": 44.55,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tinian Municipality",
    "StateorEq": "Northern Mariana Islands",
    "Population": "3,136",
    "Area": 39,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Ohio",
    "Population": "27,477",
    "Area": 583.91,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Allen",
    "StateorEq": "Ohio",
    "Population": "102,206",
    "Area": 404.43,
    "StatisticalArea": "Lima, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ashland",
    "StateorEq": "Ohio",
    "Population": "52,447",
    "Area": 424.37,
    "StatisticalArea": "Ashland, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ashtabula",
    "StateorEq": "Ohio",
    "Population": "97,574",
    "Area": 702.44,
    "StatisticalArea": "Ashtabula, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Athens",
    "StateorEq": "Ohio",
    "Population": "62,431",
    "Area": 506.76,
    "StatisticalArea": "Athens, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Auglaize",
    "StateorEq": "Ohio",
    "Population": "46,422",
    "Area": 401.25,
    "StatisticalArea": "Wapakoneta, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Belmont",
    "StateorEq": "Ohio",
    "Population": "66,497",
    "Area": 537.35,
    "StatisticalArea": "Wheeling, WV-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Ohio",
    "Population": "43,676",
    "Area": 491.76,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Ohio",
    "Population": "390,357",
    "Area": 467.27,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Ohio",
    "Population": "26,721",
    "Area": 394.67,
    "StatisticalArea": "Canton-Massillon, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Champaign",
    "StateorEq": "Ohio",
    "Population": "38,714",
    "Area": 428.56,
    "StatisticalArea": "Urbana, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Ohio",
    "Population": "136,001",
    "Area": 399.86,
    "StatisticalArea": "Springfield, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clermont",
    "StateorEq": "Ohio",
    "Population": "208,601",
    "Area": 451.99,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Ohio",
    "Population": "42,018",
    "Area": 410.88,
    "StatisticalArea": "Wilmington, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbiana",
    "StateorEq": "Ohio",
    "Population": "101,877",
    "Area": 532.46,
    "StatisticalArea": "Salem, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coshocton",
    "StateorEq": "Ohio",
    "Population": "36,612",
    "Area": 564.07,
    "StatisticalArea": "Coshocton, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Ohio",
    "Population": "42,025",
    "Area": 402.11,
    "StatisticalArea": "Bucyrus-Galion, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cuyahoga",
    "StateorEq": "Ohio",
    "Population": "1,264,817",
    "Area": 458.49,
    "StatisticalArea": "Cleveland-Elyria, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Darke",
    "StateorEq": "Ohio",
    "Population": "51,881",
    "Area": 599.8,
    "StatisticalArea": "Greenville, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Defiance",
    "StateorEq": "Ohio",
    "Population": "38,286",
    "Area": 411.16,
    "StatisticalArea": "Defiance, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Delaware",
    "StateorEq": "Ohio",
    "Population": "214,124",
    "Area": 442.41,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Erie",
    "StateorEq": "Ohio",
    "Population": "75,622",
    "Area": 254.88,
    "StatisticalArea": "Sandusky, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fairfield",
    "StateorEq": "Ohio",
    "Population": "158,921",
    "Area": 505.11,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Ohio",
    "Population": "28,951",
    "Area": 406.58,
    "StatisticalArea": "Washington Court House, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Ohio",
    "Population": "1,323,807",
    "Area": 539.87,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "Ohio",
    "Population": "42,713",
    "Area": 406.78,
    "StatisticalArea": "Toledo, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gallia",
    "StateorEq": "Ohio",
    "Population": "29,220",
    "Area": 468.78,
    "StatisticalArea": "Point Pleasant, WV-OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Geauga",
    "StateorEq": "Ohio",
    "Population": "95,397",
    "Area": 403.66,
    "StatisticalArea": "Cleveland-Elyria, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Ohio",
    "Population": "167,966",
    "Area": 414.88,
    "StatisticalArea": "Dayton, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Guernsey",
    "StateorEq": "Ohio",
    "Population": "38,438",
    "Area": 521.9,
    "StatisticalArea": "Cambridge, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Ohio",
    "Population": "830,639",
    "Area": 407.36,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Ohio",
    "Population": "74,920",
    "Area": 531.35,
    "StatisticalArea": "Findlay, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hardin",
    "StateorEq": "Ohio",
    "Population": "30,696",
    "Area": 470.29,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "Ohio",
    "Population": "14,483",
    "Area": 403.53,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Ohio",
    "Population": "27,662",
    "Area": 416.5,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Highland",
    "StateorEq": "Ohio",
    "Population": "43,317",
    "Area": 553.28,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hocking",
    "StateorEq": "Ohio",
    "Population": "28,050",
    "Area": 422.75,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Holmes",
    "StateorEq": "Ohio",
    "Population": "44,223",
    "Area": 422.99,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Huron",
    "StateorEq": "Ohio",
    "Population": "58,565",
    "Area": 429.69,
    "StatisticalArea": "Norwalk, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Ohio",
    "Population": "32,653",
    "Area": 420.28,
    "StatisticalArea": "Jackson, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Ohio",
    "Population": "65,249",
    "Area": 409.61,
    "StatisticalArea": "Weirton-Steubenville, WV-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Ohio",
    "Population": "62,721",
    "Area": 527.12,
    "StatisticalArea": "Mount Vernon, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Ohio",
    "Population": "232,603",
    "Area": 228.21,
    "StatisticalArea": "Cleveland-Elyria, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Ohio",
    "Population": "58,240",
    "Area": 454.96,
    "StatisticalArea": "Huntington-Ashland, WV-KY-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Licking",
    "StateorEq": "Ohio",
    "Population": "178,519",
    "Area": 686.5,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Ohio",
    "Population": "46,150",
    "Area": 458.44,
    "StatisticalArea": "Bellefontaine, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lorain",
    "StateorEq": "Ohio",
    "Population": "312,964",
    "Area": 492.5,
    "StatisticalArea": "Cleveland-Elyria, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lucas",
    "StateorEq": "Ohio",
    "Population": "431,279",
    "Area": 340.46,
    "StatisticalArea": "Toledo, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Ohio",
    "Population": "43,824",
    "Area": 465.44,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mahoning",
    "StateorEq": "Ohio",
    "Population": "228,614",
    "Area": 415.25,
    "StatisticalArea": "Youngstown-Warren-Boardman, OH-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Ohio",
    "Population": "65,359",
    "Area": 403.84,
    "StatisticalArea": "Marion, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Medina",
    "StateorEq": "Ohio",
    "Population": "182,470",
    "Area": 423,
    "StatisticalArea": "Cleveland-Elyria, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Meigs",
    "StateorEq": "Ohio",
    "Population": "22,210",
    "Area": 429.42,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "Ohio",
    "Population": "42,528",
    "Area": 463.27,
    "StatisticalArea": "Celina, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Miami",
    "StateorEq": "Ohio",
    "Population": "108,774",
    "Area": 407.04,
    "StatisticalArea": "Dayton, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Ohio",
    "Population": "13,385",
    "Area": 455.54,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Ohio",
    "Population": "537,309",
    "Area": 461.68,
    "StatisticalArea": "Dayton, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Ohio",
    "Population": "13,802",
    "Area": 417.66,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morrow",
    "StateorEq": "Ohio",
    "Population": "34,950",
    "Area": 406.22,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Muskingum",
    "StateorEq": "Ohio",
    "Population": "86,410",
    "Area": 664.63,
    "StatisticalArea": "Zanesville, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Noble",
    "StateorEq": "Ohio",
    "Population": "14,115",
    "Area": 399,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ottawa",
    "StateorEq": "Ohio",
    "Population": "40,364",
    "Area": 254.95,
    "StatisticalArea": "Toledo, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Paulding",
    "StateorEq": "Ohio",
    "Population": "18,806",
    "Area": 416.26,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Ohio",
    "Population": "35,408",
    "Area": 409.78,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pickaway",
    "StateorEq": "Ohio",
    "Population": "58,539",
    "Area": 501.91,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Ohio",
    "Population": "27,088",
    "Area": 441.49,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Portage",
    "StateorEq": "Ohio",
    "Population": "161,791",
    "Area": 492.39,
    "StatisticalArea": "Akron, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Preble",
    "StateorEq": "Ohio",
    "Population": "40,999",
    "Area": 424.8,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "Ohio",
    "Population": "34,451",
    "Area": 483.87,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Richland",
    "StateorEq": "Ohio",
    "Population": "124,936",
    "Area": 496.88,
    "StatisticalArea": "Mansfield, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ross",
    "StateorEq": "Ohio",
    "Population": "77,093",
    "Area": 688.41,
    "StatisticalArea": "Chillicothe, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sandusky",
    "StateorEq": "Ohio",
    "Population": "58,896",
    "Area": 409.18,
    "StatisticalArea": "Fremont, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scioto",
    "StateorEq": "Ohio",
    "Population": "74,008",
    "Area": 612.27,
    "StatisticalArea": "Portsmouth, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Seneca",
    "StateorEq": "Ohio",
    "Population": "55,069",
    "Area": 550.59,
    "StatisticalArea": "Tiffin, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Ohio",
    "Population": "48,230",
    "Area": 409.27,
    "StatisticalArea": "Sidney, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stark",
    "StateorEq": "Ohio",
    "Population": "374,853",
    "Area": 576.14,
    "StatisticalArea": "Canton-Massillon, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Summit",
    "StateorEq": "Ohio",
    "Population": "540,428",
    "Area": 419.38,
    "StatisticalArea": "Akron, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Trumbull",
    "StateorEq": "Ohio",
    "Population": "201,977",
    "Area": 616.48,
    "StatisticalArea": "Youngstown-Warren-Boardman, OH-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tuscarawas",
    "StateorEq": "Ohio",
    "Population": "93,263",
    "Area": 567.58,
    "StatisticalArea": "New Philadelphia-Dover, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Ohio",
    "Population": "62,784",
    "Area": 436.65,
    "StatisticalArea": "Columbus, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Van Wert",
    "StateorEq": "Ohio",
    "Population": "28,931",
    "Area": 410.09,
    "StatisticalArea": "Van Wert, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Vinton",
    "StateorEq": "Ohio",
    "Population": "12,800",
    "Area": 414.08,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Ohio",
    "Population": "242,337",
    "Area": 399.63,
    "StatisticalArea": "Cincinnati, OH-KY-IN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Ohio",
    "Population": "59,771",
    "Area": 635.15,
    "StatisticalArea": "Marietta, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Ohio",
    "Population": "116,894",
    "Area": 555.36,
    "StatisticalArea": "Wooster, OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Williams",
    "StateorEq": "Ohio",
    "Population": "37,102",
    "Area": 421.74,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wood",
    "StateorEq": "Ohio",
    "Population": "132,248",
    "Area": 617.32,
    "StatisticalArea": "Toledo, OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wyandot",
    "StateorEq": "Ohio",
    "Population": "21,900",
    "Area": 405.61,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Adair",
    "StateorEq": "Oklahoma",
    "Population": "19,495",
    "Area": 576,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Alfalfa",
    "StateorEq": "Oklahoma",
    "Population": "5,699",
    "Area": 867,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Atoka",
    "StateorEq": "Oklahoma",
    "Population": "14,143",
    "Area": 978,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beaver",
    "StateorEq": "Oklahoma",
    "Population": "5,049",
    "Area": 1814,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beckham",
    "StateorEq": "Oklahoma",
    "Population": "22,410",
    "Area": 902,
    "StatisticalArea": "Elk City, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Blaine",
    "StateorEq": "Oklahoma",
    "Population": "8,735",
    "Area": 929,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bryan",
    "StateorEq": "Oklahoma",
    "Population": "46,067",
    "Area": 909,
    "StatisticalArea": "Durant, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caddo",
    "StateorEq": "Oklahoma",
    "Population": "26,945",
    "Area": 1278,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Canadian",
    "StateorEq": "Oklahoma",
    "Population": "154,405",
    "Area": 900,
    "StatisticalArea": "Oklahoma City, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carter",
    "StateorEq": "Oklahoma",
    "Population": "48,003",
    "Area": 824,
    "StatisticalArea": "Ardmore, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "Oklahoma",
    "Population": "47,078",
    "Area": 751,
    "StatisticalArea": "Tahlequah, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Choctaw",
    "StateorEq": "Oklahoma",
    "Population": "14,204",
    "Area": 774,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cimarron",
    "StateorEq": "Oklahoma",
    "Population": "2,296",
    "Area": 1835,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cleveland",
    "StateorEq": "Oklahoma",
    "Population": "295,528",
    "Area": 536,
    "StatisticalArea": "Oklahoma City, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coal",
    "StateorEq": "Oklahoma",
    "Population": "5,266",
    "Area": 518,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Comanche",
    "StateorEq": "Oklahoma",
    "Population": "121,125",
    "Area": 1069,
    "StatisticalArea": "Lawton, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cotton",
    "StateorEq": "Oklahoma",
    "Population": "5,527",
    "Area": 637,
    "StatisticalArea": "Lawton, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Craig",
    "StateorEq": "Oklahoma",
    "Population": "14,107",
    "Area": 761,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Creek",
    "StateorEq": "Oklahoma",
    "Population": "71,754",
    "Area": 956,
    "StatisticalArea": "Tulsa, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Custer",
    "StateorEq": "Oklahoma",
    "Population": "28,513",
    "Area": 987,
    "StatisticalArea": "Weatherford, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Delaware",
    "StateorEq": "Oklahoma",
    "Population": "40,397",
    "Area": 741,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dewey",
    "StateorEq": "Oklahoma",
    "Population": "4,484",
    "Area": 1000,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ellis",
    "StateorEq": "Oklahoma",
    "Population": "3,749",
    "Area": 1229,
    "StatisticalArea": "Woodward, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garfield",
    "StateorEq": "Oklahoma",
    "Population": "62,846",
    "Area": 1058,
    "StatisticalArea": "Enid, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garvin",
    "StateorEq": "Oklahoma",
    "Population": "25,656",
    "Area": 809,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grady",
    "StateorEq": "Oklahoma",
    "Population": "54,795",
    "Area": 1101,
    "StatisticalArea": "Oklahoma City, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Oklahoma",
    "Population": "4,169",
    "Area": 1001,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greer",
    "StateorEq": "Oklahoma",
    "Population": "5,491",
    "Area": 639,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harmon",
    "StateorEq": "Oklahoma",
    "Population": "2,488",
    "Area": 538,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harper",
    "StateorEq": "Oklahoma",
    "Population": "3,272",
    "Area": 1039,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Haskell",
    "StateorEq": "Oklahoma",
    "Population": "11,561",
    "Area": 577,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hughes",
    "StateorEq": "Oklahoma",
    "Population": "13,367",
    "Area": 807,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Oklahoma",
    "Population": "24,785",
    "Area": 803,
    "StatisticalArea": "Altus, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Oklahoma",
    "Population": "5,337",
    "Area": 759,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Johnston",
    "StateorEq": "Oklahoma",
    "Population": "10,272",
    "Area": 645,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kay",
    "StateorEq": "Oklahoma",
    "Population": "43,700",
    "Area": 919,
    "StatisticalArea": "Ponca City, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kingfisher",
    "StateorEq": "Oklahoma",
    "Population": "15,184",
    "Area": 903,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kiowa",
    "StateorEq": "Oklahoma",
    "Population": "8,509",
    "Area": 1015,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Latimer",
    "StateorEq": "Oklahoma",
    "Population": "9,444",
    "Area": 722,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Le Flore",
    "StateorEq": "Oklahoma",
    "Population": "48,129",
    "Area": 1586,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Oklahoma",
    "Population": "33,458",
    "Area": 959,
    "StatisticalArea": "Oklahoma City, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "Oklahoma",
    "Population": "49,555",
    "Area": 745,
    "StatisticalArea": "Oklahoma City, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Love",
    "StateorEq": "Oklahoma",
    "Population": "10,146",
    "Area": 515,
    "StatisticalArea": "Ardmore, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Major",
    "StateorEq": "Oklahoma",
    "Population": "7,782",
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Oklahoma",
    "Population": "15,312",
    "Area": 1852,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mayes",
    "StateorEq": "Oklahoma",
    "Population": "39,046",
    "Area": 620,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McClain",
    "StateorEq": "Oklahoma",
    "Population": "41,662",
    "Area": 957,
    "StatisticalArea": "Oklahoma City, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McCurtain",
    "StateorEq": "Oklahoma",
    "Population": "30,814",
    "Area": 371,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McIntosh",
    "StateorEq": "Oklahoma",
    "Population": "18,941",
    "Area": 656,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Murray",
    "StateorEq": "Oklahoma",
    "Population": "13,904",
    "Area": 418,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Muskogee",
    "StateorEq": "Oklahoma",
    "Population": "66,339",
    "Area": 814,
    "StatisticalArea": "Muskogee, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Noble",
    "StateorEq": "Oklahoma",
    "Population": "10,924",
    "Area": 732,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nowata",
    "StateorEq": "Oklahoma",
    "Population": "9,320",
    "Area": 565,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Okfuskee",
    "StateorEq": "Oklahoma",
    "Population": "11,310",
    "Area": 625,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oklahoma",
    "StateorEq": "Oklahoma",
    "Population": "796,292",
    "Area": 709,
    "StatisticalArea": "Oklahoma City, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Okmulgee",
    "StateorEq": "Oklahoma",
    "Population": "36,706",
    "Area": 697,
    "StatisticalArea": "Tulsa, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Osage",
    "StateorEq": "Oklahoma",
    "Population": "45,818",
    "Area": 2251,
    "StatisticalArea": "Tulsa, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ottawa",
    "StateorEq": "Oklahoma",
    "Population": "30,285",
    "Area": 471,
    "StatisticalArea": "Miami, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pawnee",
    "StateorEq": "Oklahoma",
    "Population": "15,553",
    "Area": 570,
    "StatisticalArea": "Tulsa, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Payne",
    "StateorEq": "Oklahoma",
    "Population": "81,646",
    "Area": 686,
    "StatisticalArea": "Stillwater, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pittsburg",
    "StateorEq": "Oklahoma",
    "Population": "43,773",
    "Area": 1306,
    "StatisticalArea": "McAlester, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pontotoc",
    "StateorEq": "Oklahoma",
    "Population": "38,065",
    "Area": 720,
    "StatisticalArea": "Ada, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pottawatomie",
    "StateorEq": "Oklahoma",
    "Population": "72,454",
    "Area": 788,
    "StatisticalArea": "Shawnee, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pushmataha",
    "StateorEq": "Oklahoma",
    "Population": "10,812",
    "Area": 1397,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roger Mills",
    "StateorEq": "Oklahoma",
    "Population": "3,442",
    "Area": 1142,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rogers",
    "StateorEq": "Oklahoma",
    "Population": "95,240",
    "Area": 675,
    "StatisticalArea": "Tulsa, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Seminole",
    "StateorEq": "Oklahoma",
    "Population": "23,556",
    "Area": 632,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sequoyah",
    "StateorEq": "Oklahoma",
    "Population": "39,281",
    "Area": 674,
    "StatisticalArea": "Fort Smith, AR-OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stephens",
    "StateorEq": "Oklahoma",
    "Population": "42,848",
    "Area": 877,
    "StatisticalArea": "Duncan, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Texas",
    "StateorEq": "Oklahoma",
    "Population": "21,384",
    "Area": 2037,
    "StatisticalArea": "Guymon, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tillman",
    "StateorEq": "Oklahoma",
    "Population": "6,968",
    "Area": 872,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tulsa",
    "StateorEq": "Oklahoma",
    "Population": "669,279",
    "Area": 570,
    "StatisticalArea": "Tulsa, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wagoner",
    "StateorEq": "Oklahoma",
    "Population": "80,981",
    "Area": 563,
    "StatisticalArea": "Tulsa, OK Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Oklahoma",
    "Population": "52,455",
    "Area": 417,
    "StatisticalArea": "Bartlesville, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washita",
    "StateorEq": "Oklahoma",
    "Population": "10,924",
    "Area": 1004,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Woods",
    "StateorEq": "Oklahoma",
    "Population": "8,624",
    "Area": 1287,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Woodward",
    "StateorEq": "Oklahoma",
    "Population": "20,470",
    "Area": 1242,
    "StatisticalArea": "Woodward, OK Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Baker",
    "StateorEq": "Oregon",
    "Population": "16,668",
    "Area": 3068,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Oregon",
    "Population": "95,184",
    "Area": 676,
    "StatisticalArea": "Corvallis, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clackamas",
    "StateorEq": "Oregon",
    "Population": "421,401",
    "Area": 868,
    "StatisticalArea": "Portland-Vancouver-Hillsboro, OR-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clatsop",
    "StateorEq": "Oregon",
    "Population": "41,072",
    "Area": 827,
    "StatisticalArea": "Astoria, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "Oregon",
    "Population": "52,589",
    "Area": 657,
    "StatisticalArea": "Portland-Vancouver-Hillsboro, OR-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coos",
    "StateorEq": "Oregon",
    "Population": "64,929",
    "Area": 1600,
    "StatisticalArea": "Coos Bay, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crook",
    "StateorEq": "Oregon",
    "Population": "24,738",
    "Area": 2980,
    "StatisticalArea": "Prineville, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Curry",
    "StateorEq": "Oregon",
    "Population": "23,446",
    "Area": 1627,
    "StatisticalArea": "Brookings, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Deschutes",
    "StateorEq": "Oregon",
    "Population": "198,253",
    "Area": 3018,
    "StatisticalArea": "Bend, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Oregon",
    "Population": "111,201",
    "Area": 5037,
    "StatisticalArea": "Roseburg, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gilliam",
    "StateorEq": "Oregon",
    "Population": "1,995",
    "Area": 1204,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Oregon",
    "Population": "7,233",
    "Area": 4529,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harney",
    "StateorEq": "Oregon",
    "Population": "7,495",
    "Area": 10135,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hood River",
    "StateorEq": "Oregon",
    "Population": "23,977",
    "Area": 522,
    "StatisticalArea": "Hood River, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Oregon",
    "Population": "223,259",
    "Area": 2785,
    "StatisticalArea": "Medford, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Oregon",
    "Population": "24,502",
    "Area": 1781,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Josephine",
    "StateorEq": "Oregon",
    "Population": "88,090",
    "Area": 1640,
    "StatisticalArea": "Grants Pass, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Klamath",
    "StateorEq": "Oregon",
    "Population": "69,413",
    "Area": 5945,
    "StatisticalArea": "Klamath Falls, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Oregon",
    "Population": "8,160",
    "Area": 7940,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lane",
    "StateorEq": "Oregon",
    "Population": "382,971",
    "Area": 4554,
    "StatisticalArea": "Eugene, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Oregon",
    "Population": "50,395",
    "Area": 980,
    "StatisticalArea": "Newport, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Linn",
    "StateorEq": "Oregon",
    "Population": "128,610",
    "Area": 2291,
    "StatisticalArea": "Albany, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Malheur",
    "StateorEq": "Oregon",
    "Population": "31,571",
    "Area": 9888,
    "StatisticalArea": "Ontario, OR-ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Oregon",
    "Population": "345,920",
    "Area": 1185,
    "StatisticalArea": "Salem, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morrow",
    "StateorEq": "Oregon",
    "Population": "12,186",
    "Area": 2033,
    "StatisticalArea": "Hermiston-Pendleton, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Multnomah",
    "StateorEq": "Oregon",
    "Population": "815,428",
    "Area": 435,
    "StatisticalArea": "Portland-Vancouver-Hillsboro, OR-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Oregon",
    "Population": "87,433",
    "Area": 741,
    "StatisticalArea": "Salem, OR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sherman",
    "StateorEq": "Oregon",
    "Population": "1,870",
    "Area": 823,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tillamook",
    "StateorEq": "Oregon",
    "Population": "27,390",
    "Area": 1102,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Umatilla",
    "StateorEq": "Oregon",
    "Population": "80,075",
    "Area": 3215,
    "StatisticalArea": "Hermiston-Pendleton, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Oregon",
    "Population": "26,196",
    "Area": 2037,
    "StatisticalArea": "La Grande, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wallowa",
    "StateorEq": "Oregon",
    "Population": "7,391",
    "Area": 3145,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wasco",
    "StateorEq": "Oregon",
    "Population": "26,670",
    "Area": 2381,
    "StatisticalArea": "The Dalles, OR Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Oregon",
    "Population": "600,372",
    "Area": 724,
    "StatisticalArea": "Portland-Vancouver-Hillsboro, OR-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wheeler",
    "StateorEq": "Oregon",
    "Population": "1,451",
    "Area": 1715,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yamhill",
    "StateorEq": "Oregon",
    "Population": "107,722",
    "Area": 716,
    "StatisticalArea": "Portland-Vancouver-Hillsboro, OR-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Pennsylvania",
    "Population": "103,852",
    "Area": 522,
    "StatisticalArea": "Gettysburg, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Allegheny",
    "StateorEq": "Pennsylvania",
    "Population": "1,250,578",
    "Area": 745,
    "StatisticalArea": "Pittsburgh, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Armstrong",
    "StateorEq": "Pennsylvania",
    "Population": "65,558",
    "Area": 664,
    "StatisticalArea": "Pittsburgh, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Beaver",
    "StateorEq": "Pennsylvania",
    "Population": "168,215",
    "Area": 444,
    "StatisticalArea": "Pittsburgh, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bedford",
    "StateorEq": "Pennsylvania",
    "Population": "47,577",
    "Area": 1015,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Berks",
    "StateorEq": "Pennsylvania",
    "Population": "428,849",
    "Area": 866,
    "StatisticalArea": "Reading, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Blair",
    "StateorEq": "Pennsylvania",
    "Population": "122,822",
    "Area": 527,
    "StatisticalArea": "Altoona, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bradford",
    "StateorEq": "Pennsylvania",
    "Population": "59,967",
    "Area": 1161,
    "StatisticalArea": "Sayre, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bucks",
    "StateorEq": "Pennsylvania",
    "Population": "646,538",
    "Area": 622,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Butler",
    "StateorEq": "Pennsylvania",
    "Population": "193,763",
    "Area": 795,
    "StatisticalArea": "Pittsburgh, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cambria",
    "StateorEq": "Pennsylvania",
    "Population": "133,472",
    "Area": 693,
    "StatisticalArea": "Johnstown, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cameron",
    "StateorEq": "Pennsylvania",
    "Population": "4,547",
    "Area": 399,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carbon",
    "StateorEq": "Pennsylvania",
    "Population": "64,749",
    "Area": 387,
    "StatisticalArea": "Allentown-Bethlehem-Easton, PA-NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Centre",
    "StateorEq": "Pennsylvania",
    "Population": "158,172",
    "Area": 1112,
    "StatisticalArea": "State College, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chester",
    "StateorEq": "Pennsylvania",
    "Population": "534,413",
    "Area": 760,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clarion",
    "StateorEq": "Pennsylvania",
    "Population": "37,241",
    "Area": 609,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clearfield",
    "StateorEq": "Pennsylvania",
    "Population": "80,562",
    "Area": 1154,
    "StatisticalArea": "DuBois, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clinton",
    "StateorEq": "Pennsylvania",
    "Population": "37,450",
    "Area": 898,
    "StatisticalArea": "Lock Haven, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "Pennsylvania",
    "Population": "64,727",
    "Area": 490,
    "StatisticalArea": "Bloomsburg-Berwick, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Pennsylvania",
    "Population": "83,938",
    "Area": 1038,
    "StatisticalArea": "Meadville, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "Pennsylvania",
    "Population": "259,469",
    "Area": 551,
    "StatisticalArea": "Harrisburg-Carlisle, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dauphin",
    "StateorEq": "Pennsylvania",
    "Population": "286,401",
    "Area": 558,
    "StatisticalArea": "Harrisburg-Carlisle, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Delaware",
    "StateorEq": "Pennsylvania",
    "Population": "576,830",
    "Area": 191,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Elk",
    "StateorEq": "Pennsylvania",
    "Population": "30,990",
    "Area": 832,
    "StatisticalArea": "St. Mary's, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Erie",
    "StateorEq": "Pennsylvania",
    "Population": "270,876",
    "Area": 799,
    "StatisticalArea": "Erie, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Pennsylvania",
    "Population": "128,804",
    "Area": 798,
    "StatisticalArea": "Pittsburgh, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Forest",
    "StateorEq": "Pennsylvania",
    "Population": "6,973",
    "Area": 431,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Pennsylvania",
    "Population": "155,932",
    "Area": 771,
    "StatisticalArea": "Chambersburg-Waynesboro, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fulton",
    "StateorEq": "Pennsylvania",
    "Population": "14,556",
    "Area": 438,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Pennsylvania",
    "Population": "35,954",
    "Area": 578,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Huntingdon",
    "StateorEq": "Pennsylvania",
    "Population": "44,092",
    "Area": 889,
    "StatisticalArea": "Huntingdon, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Indiana",
    "StateorEq": "Pennsylvania",
    "Population": "83,246",
    "Area": 834,
    "StatisticalArea": "Indiana, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Pennsylvania",
    "Population": "44,492",
    "Area": 657,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Juniata",
    "StateorEq": "Pennsylvania",
    "Population": "23,509",
    "Area": 394,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lackawanna",
    "StateorEq": "Pennsylvania",
    "Population": "215,896",
    "Area": 465,
    "StatisticalArea": "Scranton–Wilkes-Barre–Hazleton, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lancaster",
    "StateorEq": "Pennsylvania",
    "Population": "552,984",
    "Area": 984,
    "StatisticalArea": "Lancaster, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Pennsylvania",
    "Population": "86,070",
    "Area": 363,
    "StatisticalArea": "New Castle, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lebanon",
    "StateorEq": "Pennsylvania",
    "Population": "143,257",
    "Area": 363,
    "StatisticalArea": "Lebanon, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lehigh",
    "StateorEq": "Pennsylvania",
    "Population": "374,557",
    "Area": 349,
    "StatisticalArea": "Allentown-Bethlehem-Easton, PA-NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Luzerne",
    "StateorEq": "Pennsylvania",
    "Population": "325,594",
    "Area": 907,
    "StatisticalArea": "Scranton–Wilkes-Barre–Hazleton, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lycoming",
    "StateorEq": "Pennsylvania",
    "Population": "114,188",
    "Area": 1244,
    "StatisticalArea": "Williamsport, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McKean",
    "StateorEq": "Pennsylvania",
    "Population": "40,432",
    "Area": 984,
    "StatisticalArea": "Bradford, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "Pennsylvania",
    "Population": "110,652",
    "Area": 683,
    "StatisticalArea": "Youngstown-Warren-Boardman, OH-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mifflin",
    "StateorEq": "Pennsylvania",
    "Population": "46,143",
    "Area": 415,
    "StatisticalArea": "Lewistown, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Pennsylvania",
    "Population": "168,327",
    "Area": 617,
    "StatisticalArea": "East Stroudsburg, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Pennsylvania",
    "Population": "856,553",
    "Area": 487,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Montour",
    "StateorEq": "Pennsylvania",
    "Population": "18,136",
    "Area": 132,
    "StatisticalArea": "Bloomsburg-Berwick, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Northampton",
    "StateorEq": "Pennsylvania",
    "Population": "312,951",
    "Area": 377,
    "StatisticalArea": "Allentown-Bethlehem-Easton, PA-NJ Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Northumberland",
    "StateorEq": "Pennsylvania",
    "Population": "91,647",
    "Area": 477,
    "StatisticalArea": "Sunbury, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Pennsylvania",
    "Population": "45,842",
    "Area": 556,
    "StatisticalArea": "Harrisburg-Carlisle, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Philadelphia[x]",
    "StateorEq": "Pennsylvania",
    "Population": "1,603,797",
    "Area": 143,
    "StatisticalArea": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pike",
    "StateorEq": "Pennsylvania",
    "Population": "58,535",
    "Area": 567,
    "StatisticalArea": "New York-Newark-Jersey City, NY-NJ-PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Potter",
    "StateorEq": "Pennsylvania",
    "Population": "16,396",
    "Area": 1081,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Schuylkill",
    "StateorEq": "Pennsylvania",
    "Population": "143,049",
    "Area": 778,
    "StatisticalArea": "Pottsville, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Snyder",
    "StateorEq": "Pennsylvania",
    "Population": "39,736",
    "Area": 332,
    "StatisticalArea": "Selinsgrove, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Somerset",
    "StateorEq": "Pennsylvania",
    "Population": "74,129",
    "Area": 1081,
    "StatisticalArea": "Somerset, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sullivan",
    "StateorEq": "Pennsylvania",
    "Population": "5,840",
    "Area": 452,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Susquehanna",
    "StateorEq": "Pennsylvania",
    "Population": "38,434",
    "Area": 832,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tioga",
    "StateorEq": "Pennsylvania",
    "Population": "41,045",
    "Area": 1137,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Pennsylvania",
    "Population": "42,681",
    "Area": 317,
    "StatisticalArea": "Lewisburg, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Venango",
    "StateorEq": "Pennsylvania",
    "Population": "50,454",
    "Area": 683,
    "StatisticalArea": "Oil City, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Pennsylvania",
    "Population": "38,587",
    "Area": 898,
    "StatisticalArea": "Warren, PA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Pennsylvania",
    "Population": "209,349",
    "Area": 861,
    "StatisticalArea": "Pittsburgh, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Pennsylvania",
    "Population": "51,155",
    "Area": 751,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Westmoreland",
    "StateorEq": "Pennsylvania",
    "Population": "354,663",
    "Area": 1036,
    "StatisticalArea": "Pittsburgh, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wyoming",
    "StateorEq": "Pennsylvania",
    "Population": "26,069",
    "Area": 406,
    "StatisticalArea": "Scranton–Wilkes-Barre–Hazleton, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "York",
    "StateorEq": "Pennsylvania",
    "Population": "456,438",
    "Area": 910,
    "StatisticalArea": "York-Hanover, PA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adjuntas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "18,020",
    "Area": 66.69,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Aguada Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "38,136",
    "Area": 30.85,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Aguadilla Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "55,101",
    "Area": 36.53,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Aguas Buenas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "24,223",
    "Area": 30.08,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Aibonito Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "24,637",
    "Area": 31.31,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Añasco Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "25,596",
    "Area": 39.29,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Arecibo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "87,754",
    "Area": 125.95,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Arroyo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "15,843",
    "Area": 15.01,
    "StatisticalArea": "Guayama metropolitan area"
  },
  {
    "CountyorEq": "Barceloneta Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "22,657",
    "Area": 18.69,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Barranquitas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "28,983",
    "Area": 34.25,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Bayamón Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "185,187",
    "Area": 44.32,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Cabo Rojo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "47,158",
    "Area": 70.37,
    "StatisticalArea": "San Germán–Cabo Rojo metropolitan area"
  },
  {
    "CountyorEq": "Caguas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "127,244",
    "Area": 58.6,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Camuy Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "32,827",
    "Area": 46.35,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Canóvanas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "42,337",
    "Area": 32.87,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Carolina Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "154,815",
    "Area": 45.32,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Cataño Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "23,155",
    "Area": 4.84,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Cayey Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "41,652",
    "Area": 51.93,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Ceiba Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "11,307",
    "Area": 29.04,
    "StatisticalArea": "Fajardo metropolitan area"
  },
  {
    "CountyorEq": "Ciales Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "16,984",
    "Area": 66.53,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Cidra Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "39,970",
    "Area": 36.02,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Coamo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "34,668",
    "Area": 78.1,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Comerío Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "18,883",
    "Area": 28.4,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Corozal Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "34,571",
    "Area": 42.57,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Culebra Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "1,792",
    "Area": 11.62,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dorado Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "35,879",
    "Area": 23.09,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Fajardo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "32,124",
    "Area": 29.86,
    "StatisticalArea": "Fajardo metropolitan area"
  },
  {
    "CountyorEq": "Florida Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "11,692",
    "Area": 15.21,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Guánica Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "13,787",
    "Area": 37.05,
    "StatisticalArea": "Yauco metropolitan area"
  },
  {
    "CountyorEq": "Guayama Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "36,614",
    "Area": 64.99,
    "StatisticalArea": "Guayama metropolitan area"
  },
  {
    "CountyorEq": "Guayanilla Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "17,784",
    "Area": 42.27,
    "StatisticalArea": "Yauco metropolitan area"
  },
  {
    "CountyorEq": "Guaynabo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "89,780",
    "Area": 27.58,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Gurabo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "40,622",
    "Area": 27.89,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Hatillo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "38,486",
    "Area": 41.78,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Hormigueros Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "15,654",
    "Area": 11.34,
    "StatisticalArea": "Mayagüez metropolitan area"
  },
  {
    "CountyorEq": "Humacao Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "50,896",
    "Area": 44.75,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Isabela Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "42,943",
    "Area": 55.3,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Jayuya Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "14,779",
    "Area": 44.53,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Juana Díaz Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "46,538",
    "Area": 60.28,
    "StatisticalArea": "Ponce metropolitan area"
  },
  {
    "CountyorEq": "Juncos Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "37,012",
    "Area": 26.49,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Lajas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "23,334",
    "Area": 59.95,
    "StatisticalArea": "San Germán–Cabo Rojo metropolitan area"
  },
  {
    "CountyorEq": "Lares Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "28,105",
    "Area": 61.45,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Las Marías Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "8,874",
    "Area": 46.36,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Las Piedras Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "35,180",
    "Area": 33.88,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Loíza Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "23,693",
    "Area": 19.37,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Luquillo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "17,781",
    "Area": 25.81,
    "StatisticalArea": "Fajardo metropolitan area"
  },
  {
    "CountyorEq": "Manatí Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "39,492",
    "Area": 46.13,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Maricao Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "4,755",
    "Area": 36.62,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Maunabo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "10,589",
    "Area": 21.07,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Mayagüez Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "73,077",
    "Area": 77.65,
    "StatisticalArea": "Mayagüez metropolitan area"
  },
  {
    "CountyorEq": "Moca Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "37,460",
    "Area": 50.34,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Morovis Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "28,727",
    "Area": 38.87,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Naguabo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "23,386",
    "Area": 51.66,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Naranjito Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "29,241",
    "Area": 27.4,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Orocovis Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "21,434",
    "Area": 63.62,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Patillas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "15,985",
    "Area": 46.7,
    "StatisticalArea": "Guayama metropolitan area"
  },
  {
    "CountyorEq": "Peñuelas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "20,399",
    "Area": 44.62,
    "StatisticalArea": "Yauco metropolitan area"
  },
  {
    "CountyorEq": "Ponce Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "137,491",
    "Area": 114.76,
    "StatisticalArea": "Ponce metropolitan area"
  },
  {
    "CountyorEq": "Quebradillas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "23,638",
    "Area": 22.68,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Rincón Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "15,187",
    "Area": 14.29,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Río Grande Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "47,060",
    "Area": 60.62,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Sabana Grande Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "22,729",
    "Area": 35.83,
    "StatisticalArea": "San Germán–Cabo Rojo metropolitan area"
  },
  {
    "CountyorEq": "Salinas Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "25,789",
    "Area": 69.37,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "San Germán Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "31,879",
    "Area": 54.5,
    "StatisticalArea": "San Germán–Cabo Rojo metropolitan area"
  },
  {
    "CountyorEq": "San Juan Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "342,259",
    "Area": 47.85,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "San Lorenzo Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "37,693",
    "Area": 53.11,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "San Sebastián Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "39,345",
    "Area": 70.42,
    "StatisticalArea": "Aguadilla–Isabela–San Sebastián metropolitan area"
  },
  {
    "CountyorEq": "Santa Isabel Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "20,281",
    "Area": 34.02,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Toa Alta Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "66,852",
    "Area": 27.02,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Toa Baja Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "75,293",
    "Area": 23.24,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Trujillo Alto Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "67,740",
    "Area": 20.76,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Utuado Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "28,287",
    "Area": 113.53,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Vega Alta Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "35,395",
    "Area": 27.73,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Vega Baja Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "54,414",
    "Area": 45.86,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Vieques Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "8,249",
    "Area": 50.77,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Villalba Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "22,093",
    "Area": 35.64,
    "StatisticalArea": "Ponce metropolitan area"
  },
  {
    "CountyorEq": "Yabucoa Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "30,426",
    "Area": 55.21,
    "StatisticalArea": "San Juan–Caguas–Guaynabo metropolitan area"
  },
  {
    "CountyorEq": "Yauco Municipality",
    "StateorEq": "Puerto Rico",
    "Population": "34,172",
    "Area": 68.19,
    "StatisticalArea": "Yauco metropolitan area"
  },
  {
    "CountyorEq": "Bristol[s]",
    "StateorEq": "Rhode Island",
    "Population": "50,793",
    "Area": 24,
    "StatisticalArea": "Providence-Warwick, RI-MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kent[s]",
    "StateorEq": "Rhode Island",
    "Population": "170,363",
    "Area": 168,
    "StatisticalArea": "Providence-Warwick, RI-MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Newport[s]",
    "StateorEq": "Rhode Island",
    "Population": "85,643",
    "Area": 102,
    "StatisticalArea": "Providence-Warwick, RI-MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Providence[s]",
    "StateorEq": "Rhode Island",
    "Population": "660,741",
    "Area": 409,
    "StatisticalArea": "Providence-Warwick, RI-MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington[s]",
    "StateorEq": "Rhode Island",
    "Population": "129,839",
    "Area": 329,
    "StatisticalArea": "Providence-Warwick, RI-MA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Abbeville",
    "StateorEq": "South Carolina",
    "Population": "24,295",
    "Area": 511,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Aiken",
    "StateorEq": "South Carolina",
    "Population": "168,808",
    "Area": 1080,
    "StatisticalArea": "Augusta-Richmond County, GA-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Allendale",
    "StateorEq": "South Carolina",
    "Population": "8,039",
    "Area": 413,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Anderson",
    "StateorEq": "South Carolina",
    "Population": "203,718",
    "Area": 757,
    "StatisticalArea": "Greenville-Anderson-Mauldin, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bamberg",
    "StateorEq": "South Carolina",
    "Population": "13,311",
    "Area": 395,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Barnwell",
    "StateorEq": "South Carolina",
    "Population": "20,589",
    "Area": 557,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beaufort",
    "StateorEq": "South Carolina",
    "Population": "187,117",
    "Area": 576,
    "StatisticalArea": "Hilton Head Island-Bluffton-Beaufort, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Berkeley",
    "StateorEq": "South Carolina",
    "Population": "229,861",
    "Area": 1228,
    "StatisticalArea": "Charleston-North Charleston, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "South Carolina",
    "Population": "14,119",
    "Area": 392,
    "StatisticalArea": "Columbia, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Charleston",
    "StateorEq": "South Carolina",
    "Population": "408,235",
    "Area": 1358,
    "StatisticalArea": "Charleston-North Charleston, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "South Carolina",
    "Population": "56,216",
    "Area": 397,
    "StatisticalArea": "Gaffney, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chester",
    "StateorEq": "South Carolina",
    "Population": "32,294",
    "Area": 586,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chesterfield",
    "StateorEq": "South Carolina",
    "Population": "43,273",
    "Area": 806,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clarendon",
    "StateorEq": "South Carolina",
    "Population": "31,144",
    "Area": 696,
    "StatisticalArea": "Sumter, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Colleton",
    "StateorEq": "South Carolina",
    "Population": "38,604",
    "Area": 1133,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Darlington",
    "StateorEq": "South Carolina",
    "Population": "62,905",
    "Area": 567,
    "StatisticalArea": "Florence, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dillon",
    "StateorEq": "South Carolina",
    "Population": "28,292",
    "Area": 407,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dorchester",
    "StateorEq": "South Carolina",
    "Population": "161,540",
    "Area": 577,
    "StatisticalArea": "Charleston-North Charleston, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Edgefield",
    "StateorEq": "South Carolina",
    "Population": "25,657",
    "Area": 507,
    "StatisticalArea": "Augusta-Richmond County, GA-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fairfield",
    "StateorEq": "South Carolina",
    "Population": "20,948",
    "Area": 710,
    "StatisticalArea": "Columbia, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Florence",
    "StateorEq": "South Carolina",
    "Population": "137,059",
    "Area": 804,
    "StatisticalArea": "Florence, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Georgetown",
    "StateorEq": "South Carolina",
    "Population": "63,404",
    "Area": 813.55,
    "StatisticalArea": "Georgetown, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greenville",
    "StateorEq": "South Carolina",
    "Population": "525,534",
    "Area": 795,
    "StatisticalArea": "Greenville-Anderson-Mauldin, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greenwood",
    "StateorEq": "South Carolina",
    "Population": "69,351",
    "Area": 463,
    "StatisticalArea": "Greenwood, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hampton",
    "StateorEq": "South Carolina",
    "Population": "18,561",
    "Area": 563,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Horry",
    "StateorEq": "South Carolina",
    "Population": "351,029",
    "Area": 1255,
    "StatisticalArea": "Myrtle Beach-Conway-North Myrtle Beach, SC-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "South Carolina",
    "Population": "28,791",
    "Area": 700,
    "StatisticalArea": "Hilton Head Island-Bluffton-Beaufort, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kershaw",
    "StateorEq": "South Carolina",
    "Population": "65,403",
    "Area": 740,
    "StatisticalArea": "Columbia, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lancaster",
    "StateorEq": "South Carolina",
    "Population": "96,016",
    "Area": 555,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Laurens",
    "StateorEq": "South Carolina",
    "Population": "67,539",
    "Area": 724,
    "StatisticalArea": "Greenville-Anderson-Mauldin, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "South Carolina",
    "Population": "16,531",
    "Area": 411,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lexington",
    "StateorEq": "South Carolina",
    "Population": "293,991",
    "Area": 758,
    "StatisticalArea": "Columbia, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "South Carolina",
    "Population": "29,183",
    "Area": 485,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marlboro",
    "StateorEq": "South Carolina",
    "Population": "26,667",
    "Area": 394,
    "StatisticalArea": "Bennettsville, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McCormick",
    "StateorEq": "South Carolina",
    "Population": "9,526",
    "Area": 494,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Newberry",
    "StateorEq": "South Carolina",
    "Population": "37,719",
    "Area": 647,
    "StatisticalArea": "Newberry, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oconee",
    "StateorEq": "South Carolina",
    "Population": "78,607",
    "Area": 674,
    "StatisticalArea": "Seneca, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orangeburg",
    "StateorEq": "South Carolina",
    "Population": "84,223",
    "Area": 1128,
    "StatisticalArea": "Orangeburg, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pickens",
    "StateorEq": "South Carolina",
    "Population": "131,404",
    "Area": 512,
    "StatisticalArea": "Greenville-Anderson-Mauldin, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Richland",
    "StateorEq": "South Carolina",
    "Population": "416,147",
    "Area": 772,
    "StatisticalArea": "Columbia, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Saluda",
    "StateorEq": "South Carolina",
    "Population": "18,862",
    "Area": 462,
    "StatisticalArea": "Columbia, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Spartanburg",
    "StateorEq": "South Carolina",
    "Population": "327,997",
    "Area": 819,
    "StatisticalArea": "Spartanburg, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sumter",
    "StateorEq": "South Carolina",
    "Population": "105,556",
    "Area": 682,
    "StatisticalArea": "Sumter, SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "South Carolina",
    "Population": "27,244",
    "Area": 516,
    "StatisticalArea": "Union, SC Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Williamsburg",
    "StateorEq": "South Carolina",
    "Population": "31,026",
    "Area": 937,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "York",
    "StateorEq": "South Carolina",
    "Population": "282,090",
    "Area": 696,
    "StatisticalArea": "Charlotte-Concord-Gastonia, NC-SC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Aurora",
    "StateorEq": "South Dakota",
    "Population": "2,747",
    "Area": 708,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beadle",
    "StateorEq": "South Dakota",
    "Population": "19,149",
    "Area": 1259,
    "StatisticalArea": "Huron, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bennett",
    "StateorEq": "South Dakota",
    "Population": "3,381",
    "Area": 1185,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bon Homme",
    "StateorEq": "South Dakota",
    "Population": "7,003",
    "Area": 563,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brookings",
    "StateorEq": "South Dakota",
    "Population": "34,375",
    "Area": 794,
    "StatisticalArea": "Brookings, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "South Dakota",
    "Population": "38,301",
    "Area": 1713,
    "StatisticalArea": "Aberdeen, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brule",
    "StateorEq": "South Dakota",
    "Population": "5,247",
    "Area": 819,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Buffalo",
    "StateorEq": "South Dakota",
    "Population": "1,948",
    "Area": 471,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Butte",
    "StateorEq": "South Dakota",
    "Population": "10,243",
    "Area": 2249,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Campbell",
    "StateorEq": "South Dakota",
    "Population": "1,377",
    "Area": 736,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Charles Mix",
    "StateorEq": "South Dakota",
    "Population": "9,373",
    "Area": 1098,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "South Dakota",
    "Population": "3,837",
    "Area": 958,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "South Dakota",
    "Population": "14,967",
    "Area": 412,
    "StatisticalArea": "Vermillion, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Codington",
    "StateorEq": "South Dakota",
    "Population": "28,325",
    "Area": 688,
    "StatisticalArea": "Watertown, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Corson",
    "StateorEq": "South Dakota",
    "Population": "3,902",
    "Area": 2473,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Custer",
    "StateorEq": "South Dakota",
    "Population": "8,318",
    "Area": 1558,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Davison",
    "StateorEq": "South Dakota",
    "Population": "19,956",
    "Area": 436,
    "StatisticalArea": "Mitchell, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Day",
    "StateorEq": "South Dakota",
    "Population": "5,449",
    "Area": 1029,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Deuel",
    "StateorEq": "South Dakota",
    "Population": "4,295",
    "Area": 624,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dewey",
    "StateorEq": "South Dakota",
    "Population": "5,239",
    "Area": 2303,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "South Dakota",
    "Population": "2,835",
    "Area": 434,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Edmunds",
    "StateorEq": "South Dakota",
    "Population": "3,986",
    "Area": 1146,
    "StatisticalArea": "Aberdeen, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fall River",
    "StateorEq": "South Dakota",
    "Population": "6,973",
    "Area": 1740,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Faulk",
    "StateorEq": "South Dakota",
    "Population": "2,125",
    "Area": 1000,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "South Dakota",
    "Population": "7,556",
    "Area": 682,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gregory",
    "StateorEq": "South Dakota",
    "Population": "3,994",
    "Area": 1016,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Haakon",
    "StateorEq": "South Dakota",
    "Population": "1,872",
    "Area": 1813,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hamlin",
    "StateorEq": "South Dakota",
    "Population": "6,164",
    "Area": 511,
    "StatisticalArea": "Watertown, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hand",
    "StateorEq": "South Dakota",
    "Population": "3,145",
    "Area": 1437,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hanson",
    "StateorEq": "South Dakota",
    "Population": "3,461",
    "Area": 435,
    "StatisticalArea": "Mitchell, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harding",
    "StateorEq": "South Dakota",
    "Population": "1,311",
    "Area": 2671,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hughes",
    "StateorEq": "South Dakota",
    "Population": "17,765",
    "Area": 741,
    "StatisticalArea": "Pierre, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hutchinson",
    "StateorEq": "South Dakota",
    "Population": "7,427",
    "Area": 813,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hyde",
    "StateorEq": "South Dakota",
    "Population": "1,262",
    "Area": 861,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "South Dakota",
    "Population": "2,806",
    "Area": 1869,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jerauld",
    "StateorEq": "South Dakota",
    "Population": "1,663",
    "Area": 530,
    "StatisticalArea": "Huron, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jones",
    "StateorEq": "South Dakota",
    "Population": 917,
    "Area": 971,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kingsbury",
    "StateorEq": "South Dakota",
    "Population": "5,187",
    "Area": 838,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "South Dakota",
    "Population": "11,059",
    "Area": 563,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "South Dakota",
    "Population": "25,768",
    "Area": 800,
    "StatisticalArea": "Spearfish, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "South Dakota",
    "Population": "65,161",
    "Area": 578,
    "StatisticalArea": "Sioux Falls, SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lyman",
    "StateorEq": "South Dakota",
    "Population": "3,718",
    "Area": 1640,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "South Dakota",
    "Population": "4,306",
    "Area": 1137,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McCook",
    "StateorEq": "South Dakota",
    "Population": "5,682",
    "Area": 839,
    "StatisticalArea": "Sioux Falls, SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McPherson",
    "StateorEq": "South Dakota",
    "Population": "2,411",
    "Area": 575,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Meade",
    "StateorEq": "South Dakota",
    "Population": "29,852",
    "Area": 3471,
    "StatisticalArea": "Rapid City, SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mellette",
    "StateorEq": "South Dakota",
    "Population": "1,918",
    "Area": 1307,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Miner",
    "StateorEq": "South Dakota",
    "Population": "2,298",
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Minnehaha",
    "StateorEq": "South Dakota",
    "Population": "197,214",
    "Area": 809,
    "StatisticalArea": "Sioux Falls, SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Moody",
    "StateorEq": "South Dakota",
    "Population": "6,336",
    "Area": 520,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oglala Lakota",
    "StateorEq": "South Dakota",
    "Population": "13,672",
    "Area": 2094,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pennington",
    "StateorEq": "South Dakota",
    "Population": "109,222",
    "Area": 2776,
    "StatisticalArea": "Rapid City, SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perkins",
    "StateorEq": "South Dakota",
    "Population": "2,835",
    "Area": 2872,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Potter",
    "StateorEq": "South Dakota",
    "Population": "2,472",
    "Area": 866,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roberts",
    "StateorEq": "South Dakota",
    "Population": "10,280",
    "Area": 1101,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sanborn",
    "StateorEq": "South Dakota",
    "Population": "2,330",
    "Area": 569,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Spink",
    "StateorEq": "South Dakota",
    "Population": "6,361",
    "Area": 1504,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Stanley",
    "StateorEq": "South Dakota",
    "Population": "2,980",
    "Area": 1443,
    "StatisticalArea": "Pierre, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sully",
    "StateorEq": "South Dakota",
    "Population": "1,446",
    "Area": 1007,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Todd",
    "StateorEq": "South Dakota",
    "Population": "9,319",
    "Area": 1388,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tripp",
    "StateorEq": "South Dakota",
    "Population": "5,624",
    "Area": 1614,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Turner",
    "StateorEq": "South Dakota",
    "Population": "8,673",
    "Area": 617,
    "StatisticalArea": "Sioux Falls, SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "South Dakota",
    "Population": "16,811",
    "Area": 460,
    "StatisticalArea": "Sioux City, IA-NE-SD Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Walworth",
    "StateorEq": "South Dakota",
    "Population": "5,315",
    "Area": 708,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yankton",
    "StateorEq": "South Dakota",
    "Population": "23,310",
    "Area": 522,
    "StatisticalArea": "Yankton, SD Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ziebach",
    "StateorEq": "South Dakota",
    "Population": "2,413",
    "Area": 1962,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Anderson",
    "StateorEq": "Tennessee",
    "Population": "77,123",
    "Area": 338,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bedford",
    "StateorEq": "Tennessee",
    "Population": "50,237",
    "Area": 474,
    "StatisticalArea": "Shelbyville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Tennessee",
    "Population": "15,864",
    "Area": 394,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bledsoe",
    "StateorEq": "Tennessee",
    "Population": "14,913",
    "Area": 406,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Blount",
    "StateorEq": "Tennessee",
    "Population": "135,280",
    "Area": 559,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bradley",
    "StateorEq": "Tennessee",
    "Population": "108,620",
    "Area": 329,
    "StatisticalArea": "Cleveland, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Campbell",
    "StateorEq": "Tennessee",
    "Population": "39,272",
    "Area": 480,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cannon",
    "StateorEq": "Tennessee",
    "Population": "14,506",
    "Area": 266,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Tennessee",
    "Population": "28,440",
    "Area": 599,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carter",
    "StateorEq": "Tennessee",
    "Population": "56,356",
    "Area": 341,
    "StatisticalArea": "Johnson City, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cheatham",
    "StateorEq": "Tennessee",
    "Population": "41,072",
    "Area": 303,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chester",
    "StateorEq": "Tennessee",
    "Population": "17,341",
    "Area": 289,
    "StatisticalArea": "Jackson, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Claiborne",
    "StateorEq": "Tennessee",
    "Population": "32,043",
    "Area": 434,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Tennessee",
    "Population": "7,581",
    "Area": 236,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cocke",
    "StateorEq": "Tennessee",
    "Population": "35,999",
    "Area": 434,
    "StatisticalArea": "Newport, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coffee",
    "StateorEq": "Tennessee",
    "Population": "57,889",
    "Area": 429,
    "StatisticalArea": "Tullahoma-Manchester, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crockett",
    "StateorEq": "Tennessee",
    "Population": "13,911",
    "Area": 265,
    "StatisticalArea": "Jackson, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "Tennessee",
    "Population": "61,145",
    "Area": 682,
    "StatisticalArea": "Crossville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Davidson",
    "StateorEq": "Tennessee",
    "Population": "715,884",
    "Area": 502,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Decatur",
    "StateorEq": "Tennessee",
    "Population": "11,435",
    "Area": 333,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "DeKalb",
    "StateorEq": "Tennessee",
    "Population": "20,080",
    "Area": 304,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dickson",
    "StateorEq": "Tennessee",
    "Population": "54,315",
    "Area": 490,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dyer",
    "StateorEq": "Tennessee",
    "Population": "36,801",
    "Area": 510,
    "StatisticalArea": "Dyersburg, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Tennessee",
    "Population": "41,990",
    "Area": 705,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fentress",
    "StateorEq": "Tennessee",
    "Population": "18,489",
    "Area": 499,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Tennessee",
    "Population": "42,774",
    "Area": 553,
    "StatisticalArea": "Tullahoma-Manchester, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gibson",
    "StateorEq": "Tennessee",
    "Population": "50,429",
    "Area": 603,
    "StatisticalArea": "Jackson, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Giles",
    "StateorEq": "Tennessee",
    "Population": "30,346",
    "Area": 611,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grainger",
    "StateorEq": "Tennessee",
    "Population": "23,527",
    "Area": 280,
    "StatisticalArea": "Morristown, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Tennessee",
    "Population": "70,152",
    "Area": 622,
    "StatisticalArea": "Greeneville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grundy",
    "StateorEq": "Tennessee",
    "Population": "13,529",
    "Area": 361,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hamblen",
    "StateorEq": "Tennessee",
    "Population": "64,499",
    "Area": 161,
    "StatisticalArea": "Morristown, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Tennessee",
    "Population": "366,207",
    "Area": 543,
    "StatisticalArea": "Chattanooga, TN-GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "Tennessee",
    "Population": "6,662",
    "Area": 222,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hardeman",
    "StateorEq": "Tennessee",
    "Population": "25,462",
    "Area": 668,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hardin",
    "StateorEq": "Tennessee",
    "Population": "26,831",
    "Area": 578,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hawkins",
    "StateorEq": "Tennessee",
    "Population": "56,721",
    "Area": 487,
    "StatisticalArea": "Kingsport-Bristol-Bristol, TN-VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Haywood",
    "StateorEq": "Tennessee",
    "Population": "17,864",
    "Area": 533,
    "StatisticalArea": "Brownsville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henderson",
    "StateorEq": "Tennessee",
    "Population": "27,842",
    "Area": 520,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Tennessee",
    "Population": "32,199",
    "Area": 562,
    "StatisticalArea": "Paris, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hickman",
    "StateorEq": "Tennessee",
    "Population": "24,925",
    "Area": 613,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Houston",
    "StateorEq": "Tennessee",
    "Population": "8,283",
    "Area": 200,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Humphreys",
    "StateorEq": "Tennessee",
    "Population": "18,990",
    "Area": 532,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Tennessee",
    "Population": "11,617",
    "Area": 309,
    "StatisticalArea": "Cookeville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Tennessee",
    "Population": "54,683",
    "Area": 274,
    "StatisticalArea": "Morristown, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Tennessee",
    "Population": "17,948",
    "Area": 299,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Tennessee",
    "Population": "478,971",
    "Area": 509,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lake",
    "StateorEq": "Tennessee",
    "Population": "7,005",
    "Area": 163,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lauderdale",
    "StateorEq": "Tennessee",
    "Population": "25,143",
    "Area": 470,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lawrence",
    "StateorEq": "Tennessee",
    "Population": "44,159",
    "Area": 617,
    "StatisticalArea": "Lawrenceburg, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lewis",
    "StateorEq": "Tennessee",
    "Population": "12,582",
    "Area": 282,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Tennessee",
    "Population": "35,319",
    "Area": 570,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Loudon",
    "StateorEq": "Tennessee",
    "Population": "54,886",
    "Area": 229,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Macon",
    "StateorEq": "Tennessee",
    "Population": "25,216",
    "Area": 500,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Tennessee",
    "Population": "98,823",
    "Area": 375,
    "StatisticalArea": "Jackson, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Tennessee",
    "Population": "28,837",
    "Area": 613,
    "StatisticalArea": "Chattanooga, TN-GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "Tennessee",
    "Population": "34,318",
    "Area": 430,
    "StatisticalArea": "Lewisburg, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Maury",
    "StateorEq": "Tennessee",
    "Population": "100,974",
    "Area": 560,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McMinn",
    "StateorEq": "Tennessee",
    "Population": "53,276",
    "Area": 307,
    "StatisticalArea": "Athens, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McNairy",
    "StateorEq": "Tennessee",
    "Population": "25,866",
    "Area": 557,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Meigs",
    "StateorEq": "Tennessee",
    "Population": "12,758",
    "Area": 195,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Tennessee",
    "Population": "46,250",
    "Area": 635,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Tennessee",
    "Population": "220,069",
    "Area": 539,
    "StatisticalArea": "Clarksville, TN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Moore",
    "StateorEq": "Tennessee",
    "Population": "6,461",
    "Area": 129,
    "StatisticalArea": "Tullahoma-Manchester, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Tennessee",
    "Population": "21,035",
    "Area": 522,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Obion",
    "StateorEq": "Tennessee",
    "Population": "30,787",
    "Area": 545,
    "StatisticalArea": "Union City, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Overton",
    "StateorEq": "Tennessee",
    "Population": "22,511",
    "Area": 433,
    "StatisticalArea": "Cookeville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Perry",
    "StateorEq": "Tennessee",
    "Population": "8,366",
    "Area": 415,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pickett",
    "StateorEq": "Tennessee",
    "Population": "5,001",
    "Area": 163,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Tennessee",
    "Population": "17,544",
    "Area": 435,
    "StatisticalArea": "Cleveland, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "Tennessee",
    "Population": "79,854",
    "Area": 401,
    "StatisticalArea": "Cookeville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rhea",
    "StateorEq": "Tennessee",
    "Population": "32,870",
    "Area": 316,
    "StatisticalArea": "Dayton, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Roane",
    "StateorEq": "Tennessee",
    "Population": "53,404",
    "Area": 361,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Robertson",
    "StateorEq": "Tennessee",
    "Population": "72,803",
    "Area": 477,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rutherford",
    "StateorEq": "Tennessee",
    "Population": "341,486",
    "Area": 619,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Tennessee",
    "Population": "21,850",
    "Area": 532,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sequatchie",
    "StateorEq": "Tennessee",
    "Population": "15,826",
    "Area": 266,
    "StatisticalArea": "Chattanooga, TN-GA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sevier",
    "StateorEq": "Tennessee",
    "Population": "98,380",
    "Area": 592,
    "StatisticalArea": "Sevierville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Tennessee",
    "Population": "929,744",
    "Area": 755,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Smith",
    "StateorEq": "Tennessee",
    "Population": "19,904",
    "Area": 314,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stewart",
    "StateorEq": "Tennessee",
    "Population": "13,657",
    "Area": 458,
    "StatisticalArea": "Clarksville, TN-KY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sullivan",
    "StateorEq": "Tennessee",
    "Population": "158,163",
    "Area": 413,
    "StatisticalArea": "Kingsport-Bristol-Bristol, TN-VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sumner",
    "StateorEq": "Tennessee",
    "Population": "196,281",
    "Area": 529,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tipton",
    "StateorEq": "Tennessee",
    "Population": "60,970",
    "Area": 459,
    "StatisticalArea": "Memphis, TN-MS-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Trousdale",
    "StateorEq": "Tennessee",
    "Population": "11,615",
    "Area": 114,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Unicoi",
    "StateorEq": "Tennessee",
    "Population": "17,928",
    "Area": 186,
    "StatisticalArea": "Johnson City, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Union",
    "StateorEq": "Tennessee",
    "Population": "19,802",
    "Area": 224,
    "StatisticalArea": "Knoxville, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Van Buren",
    "StateorEq": "Tennessee",
    "Population": "6,168",
    "Area": 247,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Tennessee",
    "Population": "40,953",
    "Area": 433,
    "StatisticalArea": "McMinnville, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Tennessee",
    "Population": "133,001",
    "Area": 326,
    "StatisticalArea": "Johnson City, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Tennessee",
    "Population": "16,232",
    "Area": 734,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Weakley",
    "StateorEq": "Tennessee",
    "Population": "32,902",
    "Area": 580,
    "StatisticalArea": "Martin, TN Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "White",
    "StateorEq": "Tennessee",
    "Population": "27,351",
    "Area": 377,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Williamson",
    "StateorEq": "Tennessee",
    "Population": "247,726",
    "Area": 582,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilson",
    "StateorEq": "Tennessee",
    "Population": "147,737",
    "Area": 571,
    "StatisticalArea": "Nashville-Davidson–Murfreesboro–Franklin, TN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Anderson",
    "StateorEq": "Texas",
    "Population": "57,922",
    "Area": 1071,
    "StatisticalArea": "Palestine, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Andrews",
    "StateorEq": "Texas",
    "Population": "18,610",
    "Area": 1501,
    "StatisticalArea": "Andrews, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Angelina",
    "StateorEq": "Texas",
    "Population": "86,395",
    "Area": 802,
    "StatisticalArea": "Lufkin, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Aransas",
    "StateorEq": "Texas",
    "Population": "23,830",
    "Area": 252,
    "StatisticalArea": "Rockport, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Archer",
    "StateorEq": "Texas",
    "Population": "8,560",
    "Area": 910,
    "StatisticalArea": "Wichita Falls, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Armstrong",
    "StateorEq": "Texas",
    "Population": "1,848",
    "Area": 914,
    "StatisticalArea": "Amarillo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Atascosa",
    "StateorEq": "Texas",
    "Population": "48,981",
    "Area": 1232,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Austin",
    "StateorEq": "Texas",
    "Population": "30,167",
    "Area": 653,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bailey",
    "StateorEq": "Texas",
    "Population": "6,904",
    "Area": 827,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bandera",
    "StateorEq": "Texas",
    "Population": "20,851",
    "Area": 792,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bastrop",
    "StateorEq": "Texas",
    "Population": "97,216",
    "Area": 888,
    "StatisticalArea": "Austin-Round Rock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Baylor",
    "StateorEq": "Texas",
    "Population": "3,465",
    "Area": 871,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bee",
    "StateorEq": "Texas",
    "Population": "31,047",
    "Area": 880,
    "StatisticalArea": "Beeville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bell",
    "StateorEq": "Texas",
    "Population": "370,647",
    "Area": 1059,
    "StatisticalArea": "Killeen-Temple, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bexar",
    "StateorEq": "Texas",
    "Population": "2,009,324",
    "Area": 1247,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Blanco",
    "StateorEq": "Texas",
    "Population": "11,374",
    "Area": 711,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Borden",
    "StateorEq": "Texas",
    "Population": 631,
    "Area": 899,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bosque",
    "StateorEq": "Texas",
    "Population": "18,235",
    "Area": 989,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bowie",
    "StateorEq": "Texas",
    "Population": "92,893",
    "Area": 888,
    "StatisticalArea": "Texarkana, TX-AR Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brazoria",
    "StateorEq": "Texas",
    "Population": "372,031",
    "Area": 1387,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brazos",
    "StateorEq": "Texas",
    "Population": "233,849",
    "Area": 586,
    "StatisticalArea": "College Station-Bryan, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brewster",
    "StateorEq": "Texas",
    "Population": "9,546",
    "Area": 6193,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Briscoe",
    "StateorEq": "Texas",
    "Population": "1,435",
    "Area": 900,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brooks",
    "StateorEq": "Texas",
    "Population": "7,076",
    "Area": 943,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Texas",
    "Population": "38,095",
    "Area": 944,
    "StatisticalArea": "Brownwood, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Burleson",
    "StateorEq": "Texas",
    "Population": "17,642",
    "Area": 666,
    "StatisticalArea": "College Station-Bryan, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Burnet",
    "StateorEq": "Texas",
    "Population": "49,130",
    "Area": 995,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Caldwell",
    "StateorEq": "Texas",
    "Population": "45,883",
    "Area": 546,
    "StatisticalArea": "Austin-Round Rock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "Texas",
    "Population": "20,106",
    "Area": 512,
    "StatisticalArea": "Port Lavaca, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Callahan",
    "StateorEq": "Texas",
    "Population": "13,708",
    "Area": 899,
    "StatisticalArea": "Abilene, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cameron",
    "StateorEq": "Texas",
    "Population": "421,017",
    "Area": 906,
    "StatisticalArea": "Brownsville-Harlingen, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Camp",
    "StateorEq": "Texas",
    "Population": "12,464",
    "Area": 1998,
    "StatisticalArea": "Mount Pleasant, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carson",
    "StateorEq": "Texas",
    "Population": "5,807",
    "Area": 923,
    "StatisticalArea": "Amarillo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cass",
    "StateorEq": "Texas",
    "Population": "28,454",
    "Area": 938,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Castro",
    "StateorEq": "Texas",
    "Population": "7,371",
    "Area": 898,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chambers",
    "StateorEq": "Texas",
    "Population": "46,571",
    "Area": 599,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cherokee",
    "StateorEq": "Texas",
    "Population": "50,412",
    "Area": 1052,
    "StatisticalArea": "Jacksonville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Childress",
    "StateorEq": "Texas",
    "Population": "6,664",
    "Area": 710,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "Texas",
    "Population": "10,218",
    "Area": 1098,
    "StatisticalArea": "Wichita Falls, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cochran",
    "StateorEq": "Texas",
    "Population": "2,547",
    "Area": 775,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Coke",
    "StateorEq": "Texas",
    "Population": "3,285",
    "Area": 899,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Coleman",
    "StateorEq": "Texas",
    "Population": "7,684",
    "Area": 1273,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Collin",
    "StateorEq": "Texas",
    "Population": "1,064,465",
    "Area": 848,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Collingsworth",
    "StateorEq": "Texas",
    "Population": "2,652",
    "Area": 919,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Colorado",
    "StateorEq": "Texas",
    "Population": "20,557",
    "Area": 963,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Comal",
    "StateorEq": "Texas",
    "Population": "161,501",
    "Area": 562,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Comanche",
    "StateorEq": "Texas",
    "Population": "13,594",
    "Area": 938,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Concho",
    "StateorEq": "Texas",
    "Population": "3,303",
    "Area": 992,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Cooke",
    "StateorEq": "Texas",
    "Population": "41,668",
    "Area": 94,
    "StatisticalArea": "Gainesville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Coryell",
    "StateorEq": "Texas",
    "Population": "83,093",
    "Area": 1052,
    "StatisticalArea": "Killeen-Temple, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cottle",
    "StateorEq": "Texas",
    "Population": "1,380",
    "Area": 901,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crane",
    "StateorEq": "Texas",
    "Population": "4,675",
    "Area": 786,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crockett",
    "StateorEq": "Texas",
    "Population": "3,098",
    "Area": 2808,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crosby",
    "StateorEq": "Texas",
    "Population": "5,133",
    "Area": 900,
    "StatisticalArea": "Lubbock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Culberson",
    "StateorEq": "Texas",
    "Population": "2,188",
    "Area": 3813,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dallam",
    "StateorEq": "Texas",
    "Population": "7,115",
    "Area": 1505,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dallas",
    "StateorEq": "Texas",
    "Population": "2,613,539",
    "Area": 880,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dawson",
    "StateorEq": "Texas",
    "Population": "12,456",
    "Area": 902,
    "StatisticalArea": "Lamesa, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Deaf Smith",
    "StateorEq": "Texas",
    "Population": "18,583",
    "Area": 1497,
    "StatisticalArea": "Hereford, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Delta",
    "StateorEq": "Texas",
    "Population": "5,230",
    "Area": 277,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Denton",
    "StateorEq": "Texas",
    "Population": "906,422",
    "Area": 888,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "DeWitt",
    "StateorEq": "Texas",
    "Population": "19,824",
    "Area": 909,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dickens",
    "StateorEq": "Texas",
    "Population": "1,770",
    "Area": 904,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dimmit",
    "StateorEq": "Texas",
    "Population": "8,615",
    "Area": 1331,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Donley",
    "StateorEq": "Texas",
    "Population": "3,258",
    "Area": 930,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Duval",
    "StateorEq": "Texas",
    "Population": "9,831",
    "Area": 1793,
    "StatisticalArea": "Alice, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Eastland",
    "StateorEq": "Texas",
    "Population": "17,725",
    "Area": 926,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ector",
    "StateorEq": "Texas",
    "Population": "165,171",
    "Area": 901,
    "StatisticalArea": "Odessa, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Edwards",
    "StateorEq": "Texas",
    "Population": "1,422",
    "Area": 2120,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "El Paso",
    "StateorEq": "Texas",
    "Population": "865,657",
    "Area": 1013,
    "StatisticalArea": "El Paso, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ellis",
    "StateorEq": "Texas",
    "Population": "192,455",
    "Area": 940,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Erath",
    "StateorEq": "Texas",
    "Population": "42,545",
    "Area": 1086,
    "StatisticalArea": "Stephenville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Falls",
    "StateorEq": "Texas",
    "Population": "16,968",
    "Area": 769,
    "StatisticalArea": "Waco, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fannin",
    "StateorEq": "Texas",
    "Population": "35,662",
    "Area": 892,
    "StatisticalArea": "Bonham, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "Texas",
    "Population": "24,435",
    "Area": 950,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fisher",
    "StateorEq": "Texas",
    "Population": "3,672",
    "Area": 901,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Floyd",
    "StateorEq": "Texas",
    "Population": "5,402",
    "Area": 992,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Foard",
    "StateorEq": "Texas",
    "Population": "1,095",
    "Area": 707,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fort Bend",
    "StateorEq": "Texas",
    "Population": "822,779",
    "Area": 875,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Texas",
    "Population": "10,359",
    "Area": 286,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Freestone",
    "StateorEq": "Texas",
    "Population": "19,435",
    "Area": 885,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Frio",
    "StateorEq": "Texas",
    "Population": "18,385",
    "Area": 1133,
    "StatisticalArea": "Pearsall, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gaines",
    "StateorEq": "Texas",
    "Population": "21,598",
    "Area": 1502,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Galveston",
    "StateorEq": "Texas",
    "Population": "350,682",
    "Area": 399,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garza",
    "StateorEq": "Texas",
    "Population": "5,816",
    "Area": 896,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gillespie",
    "StateorEq": "Texas",
    "Population": "26,725",
    "Area": 1061,
    "StatisticalArea": "Fredericksburg, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Glasscock",
    "StateorEq": "Texas",
    "Population": "1,116",
    "Area": 901,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Goliad",
    "StateorEq": "Texas",
    "Population": "7,012",
    "Area": 854,
    "StatisticalArea": "Victoria, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gonzales",
    "StateorEq": "Texas",
    "Population": "19,653",
    "Area": 1068,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Gray",
    "StateorEq": "Texas",
    "Population": "21,227",
    "Area": 928,
    "StatisticalArea": "Pampa, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grayson",
    "StateorEq": "Texas",
    "Population": "135,543",
    "Area": 934,
    "StatisticalArea": "Sherman-Denison, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gregg",
    "StateorEq": "Texas",
    "Population": "124,239",
    "Area": 274,
    "StatisticalArea": "Longview, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grimes",
    "StateorEq": "Texas",
    "Population": "29,268",
    "Area": 794,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Guadalupe",
    "StateorEq": "Texas",
    "Population": "172,706",
    "Area": 711,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hale",
    "StateorEq": "Texas",
    "Population": "32,522",
    "Area": 1005,
    "StatisticalArea": "Plainview, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hall",
    "StateorEq": "Texas",
    "Population": "2,825",
    "Area": 903,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hamilton",
    "StateorEq": "Texas",
    "Population": "8,222",
    "Area": 836,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hansford",
    "StateorEq": "Texas",
    "Population": "5,285",
    "Area": 920,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hardeman",
    "StateorEq": "Texas",
    "Population": "3,549",
    "Area": 695,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hardin",
    "StateorEq": "Texas",
    "Population": "56,231",
    "Area": 894,
    "StatisticalArea": "Beaumont-Port Arthur, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harris",
    "StateorEq": "Texas",
    "Population": "4,731,145",
    "Area": 1729,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "Texas",
    "Population": "68,839",
    "Area": 899,
    "StatisticalArea": "Longview, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hartley",
    "StateorEq": "Texas",
    "Population": "5,382",
    "Area": 1462,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Haskell",
    "StateorEq": "Texas",
    "Population": "5,416",
    "Area": 903,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hays",
    "StateorEq": "Texas",
    "Population": "241,067",
    "Area": 678,
    "StatisticalArea": "Austin-Round Rock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hemphill",
    "StateorEq": "Texas",
    "Population": "3,382",
    "Area": 910,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Henderson",
    "StateorEq": "Texas",
    "Population": "82,150",
    "Area": 874,
    "StatisticalArea": "Athens, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hidalgo",
    "StateorEq": "Texas",
    "Population": "870,781",
    "Area": 1569,
    "StatisticalArea": "McAllen-Edinburg-Mission, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hill",
    "StateorEq": "Texas",
    "Population": "35,874",
    "Area": 962,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hockley",
    "StateorEq": "Texas",
    "Population": "21,537",
    "Area": 908,
    "StatisticalArea": "Levelland, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hood",
    "StateorEq": "Texas",
    "Population": "61,598",
    "Area": 422,
    "StatisticalArea": "Granbury, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hopkins",
    "StateorEq": "Texas",
    "Population": "36,787",
    "Area": 785,
    "StatisticalArea": "Sulphur Springs, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Houston",
    "StateorEq": "Texas",
    "Population": "22,066",
    "Area": 1231,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Howard",
    "StateorEq": "Texas",
    "Population": "34,860",
    "Area": 903,
    "StatisticalArea": "Big Spring, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hudspeth",
    "StateorEq": "Texas",
    "Population": "3,202",
    "Area": 4571,
    "StatisticalArea": "El Paso, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hunt",
    "StateorEq": "Texas",
    "Population": "99,956",
    "Area": 841,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hutchinson",
    "StateorEq": "Texas",
    "Population": "20,617",
    "Area": 887,
    "StatisticalArea": "Borger, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Irion",
    "StateorEq": "Texas",
    "Population": "1,513",
    "Area": 1052,
    "StatisticalArea": "San Angelo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jack",
    "StateorEq": "Texas",
    "Population": "8,472",
    "Area": 917,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Texas",
    "Population": "14,988",
    "Area": 830,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jasper",
    "StateorEq": "Texas",
    "Population": "32,980",
    "Area": 938,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jeff Davis",
    "StateorEq": "Texas",
    "Population": "1,996",
    "Area": 2265,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Texas",
    "Population": "256,526",
    "Area": 904,
    "StatisticalArea": "Beaumont-Port Arthur, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jim Hogg",
    "StateorEq": "Texas",
    "Population": "4,838",
    "Area": 1136,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jim Wells",
    "StateorEq": "Texas",
    "Population": "38,891",
    "Area": 865,
    "StatisticalArea": "Alice, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Texas",
    "Population": "179,927",
    "Area": 729,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jones",
    "StateorEq": "Texas",
    "Population": "19,663",
    "Area": 931,
    "StatisticalArea": "Abilene, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Karnes",
    "StateorEq": "Texas",
    "Population": "14,710",
    "Area": 750,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kaufman",
    "StateorEq": "Texas",
    "Population": "145,310",
    "Area": 786,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kendall",
    "StateorEq": "Texas",
    "Population": "44,279",
    "Area": 662,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kenedy",
    "StateorEq": "Texas",
    "Population": 350,
    "Area": 1457,
    "StatisticalArea": "Kingsville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kent",
    "StateorEq": "Texas",
    "Population": 753,
    "Area": 902,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kerr",
    "StateorEq": "Texas",
    "Population": "52,598",
    "Area": 1106,
    "StatisticalArea": "Kerrville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kimble",
    "StateorEq": "Texas",
    "Population": "4,286",
    "Area": 1251,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "King",
    "StateorEq": "Texas",
    "Population": 265,
    "Area": 912,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kinney",
    "StateorEq": "Texas",
    "Population": "3,129",
    "Area": 1364,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kleberg",
    "StateorEq": "Texas",
    "Population": "31,040",
    "Area": 871,
    "StatisticalArea": "Kingsville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Knox",
    "StateorEq": "Texas",
    "Population": "3,353",
    "Area": 854,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "La Salle",
    "StateorEq": "Texas",
    "Population": "6,664",
    "Area": 1489,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lamar",
    "StateorEq": "Texas",
    "Population": "50,088",
    "Area": 917,
    "StatisticalArea": "Paris, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lamb",
    "StateorEq": "Texas",
    "Population": "13,045",
    "Area": 1016,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lampasas",
    "StateorEq": "Texas",
    "Population": "21,627",
    "Area": 712,
    "StatisticalArea": "Killeen-Temple, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lavaca",
    "StateorEq": "Texas",
    "Population": "20,337",
    "Area": 970,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Texas",
    "Population": "17,478",
    "Area": 629,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Leon",
    "StateorEq": "Texas",
    "Population": "15,719",
    "Area": 1072,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Liberty",
    "StateorEq": "Texas",
    "Population": "91,628",
    "Area": 1160,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Limestone",
    "StateorEq": "Texas",
    "Population": "22,146",
    "Area": 909,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lipscomb",
    "StateorEq": "Texas",
    "Population": "3,059",
    "Area": 932,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Live Oak",
    "StateorEq": "Texas",
    "Population": "11,335",
    "Area": 1036,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Llano",
    "StateorEq": "Texas",
    "Population": "21,243",
    "Area": 935,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Loving",
    "StateorEq": "Texas",
    "Population": 64,
    "Area": 673,
    "StatisticalArea": "Pecos, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lubbock",
    "StateorEq": "Texas",
    "Population": "310,639",
    "Area": 900,
    "StatisticalArea": "Lubbock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lynn",
    "StateorEq": "Texas",
    "Population": "5,596",
    "Area": 892,
    "StatisticalArea": "Lubbock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Texas",
    "Population": "13,455",
    "Area": 472,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "Texas",
    "Population": "9,725",
    "Area": 381,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Martin",
    "StateorEq": "Texas",
    "Population": "5,237",
    "Area": 915,
    "StatisticalArea": "Midland, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mason",
    "StateorEq": "Texas",
    "Population": "3,953",
    "Area": 932,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Matagorda",
    "StateorEq": "Texas",
    "Population": "36,255",
    "Area": 1114,
    "StatisticalArea": "Bay City, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Maverick",
    "StateorEq": "Texas",
    "Population": "57,887",
    "Area": 1280,
    "StatisticalArea": "Eagle Pass, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McCulloch",
    "StateorEq": "Texas",
    "Population": "7,630",
    "Area": 1069,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "McLennan",
    "StateorEq": "Texas",
    "Population": "260,579",
    "Area": 1042,
    "StatisticalArea": "Waco, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "McMullen",
    "StateorEq": "Texas",
    "Population": 600,
    "Area": 1113,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Medina",
    "StateorEq": "Texas",
    "Population": "50,748",
    "Area": 1328,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Menard",
    "StateorEq": "Texas",
    "Population": "1,962",
    "Area": 902,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Midland",
    "StateorEq": "Texas",
    "Population": "169,983",
    "Area": 900,
    "StatisticalArea": "Midland, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Milam",
    "StateorEq": "Texas",
    "Population": "24,754",
    "Area": 1017,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mills",
    "StateorEq": "Texas",
    "Population": "4,456",
    "Area": 748,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mitchell",
    "StateorEq": "Texas",
    "Population": "8,990",
    "Area": 910,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montague",
    "StateorEq": "Texas",
    "Population": "19,965",
    "Area": 931,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Texas",
    "Population": "620,443",
    "Area": 1044,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Moore",
    "StateorEq": "Texas",
    "Population": "21,358",
    "Area": 900,
    "StatisticalArea": "Dumas, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Morris",
    "StateorEq": "Texas",
    "Population": "11,973",
    "Area": 254,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Motley",
    "StateorEq": "Texas",
    "Population": "1,063",
    "Area": 989,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nacogdoches",
    "StateorEq": "Texas",
    "Population": "64,653",
    "Area": 947,
    "StatisticalArea": "Nacogdoches, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Navarro",
    "StateorEq": "Texas",
    "Population": "52,624",
    "Area": 1071,
    "StatisticalArea": "Corsicana, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Newton",
    "StateorEq": "Texas",
    "Population": "12,217",
    "Area": 933,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nolan",
    "StateorEq": "Texas",
    "Population": "14,738",
    "Area": 912,
    "StatisticalArea": "Sweetwater, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nueces",
    "StateorEq": "Texas",
    "Population": "353,178",
    "Area": 836,
    "StatisticalArea": "Corpus Christi, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ochiltree",
    "StateorEq": "Texas",
    "Population": "10,015",
    "Area": 918,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oldham",
    "StateorEq": "Texas",
    "Population": "1,758",
    "Area": 1501,
    "StatisticalArea": "Amarillo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "Texas",
    "Population": "84,808",
    "Area": 356,
    "StatisticalArea": "Beaumont-Port Arthur, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Palo Pinto",
    "StateorEq": "Texas",
    "Population": "28,409",
    "Area": 953,
    "StatisticalArea": "Mineral Wells, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Panola",
    "StateorEq": "Texas",
    "Population": "22,491",
    "Area": 801,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Parker",
    "StateorEq": "Texas",
    "Population": "148,222",
    "Area": 904,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Parmer",
    "StateorEq": "Texas",
    "Population": "9,869",
    "Area": 882,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pecos",
    "StateorEq": "Texas",
    "Population": "15,193",
    "Area": 4764,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Texas",
    "Population": "50,123",
    "Area": 1057,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Potter",
    "StateorEq": "Texas",
    "Population": "118,525",
    "Area": 909,
    "StatisticalArea": "Amarillo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Presidio",
    "StateorEq": "Texas",
    "Population": "6,131",
    "Area": 3856,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rains",
    "StateorEq": "Texas",
    "Population": "12,164",
    "Area": 259,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Randall",
    "StateorEq": "Texas",
    "Population": "140,753",
    "Area": 914,
    "StatisticalArea": "Amarillo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Reagan",
    "StateorEq": "Texas",
    "Population": "3,385",
    "Area": 1175,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Real",
    "StateorEq": "Texas",
    "Population": "2,758",
    "Area": 700,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Red River",
    "StateorEq": "Texas",
    "Population": "11,587",
    "Area": 1050,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Reeves",
    "StateorEq": "Texas",
    "Population": "14,748",
    "Area": 2636,
    "StatisticalArea": "Pecos, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Refugio",
    "StateorEq": "Texas",
    "Population": "6,741",
    "Area": 770,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roberts",
    "StateorEq": "Texas",
    "Population": 827,
    "Area": 924,
    "StatisticalArea": "Pampa, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Robertson",
    "StateorEq": "Texas",
    "Population": "16,757",
    "Area": 855,
    "StatisticalArea": "College Station-Bryan, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rockwall",
    "StateorEq": "Texas",
    "Population": "107,819",
    "Area": 149,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Runnels",
    "StateorEq": "Texas",
    "Population": "9,900",
    "Area": 1054,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rusk",
    "StateorEq": "Texas",
    "Population": "52,214",
    "Area": 924,
    "StatisticalArea": "Longview, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sabine",
    "StateorEq": "Texas",
    "Population": "9,894",
    "Area": 490,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "San Augustine",
    "StateorEq": "Texas",
    "Population": "7,918",
    "Area": 528,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "San Jacinto",
    "StateorEq": "Texas",
    "Population": "27,402",
    "Area": 571,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "San Patricio",
    "StateorEq": "Texas",
    "Population": "68,755",
    "Area": 692,
    "StatisticalArea": "Corpus Christi, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Saba",
    "StateorEq": "Texas",
    "Population": "5,730",
    "Area": 1134,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Schleicher",
    "StateorEq": "Texas",
    "Population": "2,451",
    "Area": 1311,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Scurry",
    "StateorEq": "Texas",
    "Population": "16,932",
    "Area": 903,
    "StatisticalArea": "Snyder, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shackelford",
    "StateorEq": "Texas",
    "Population": "3,105",
    "Area": 914,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Shelby",
    "StateorEq": "Texas",
    "Population": "24,022",
    "Area": 794,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sherman",
    "StateorEq": "Texas",
    "Population": "2,782",
    "Area": 923,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Smith",
    "StateorEq": "Texas",
    "Population": "233,479",
    "Area": 928,
    "StatisticalArea": "Tyler, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Somervell",
    "StateorEq": "Texas",
    "Population": "9,205",
    "Area": 187,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Starr",
    "StateorEq": "Texas",
    "Population": "65,920",
    "Area": 1223,
    "StatisticalArea": "Rio Grande City, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stephens",
    "StateorEq": "Texas",
    "Population": "9,101",
    "Area": 895,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sterling",
    "StateorEq": "Texas",
    "Population": "1,372",
    "Area": 923,
    "StatisticalArea": "San Angelo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stonewall",
    "StateorEq": "Texas",
    "Population": "1,245",
    "Area": 919,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sutton",
    "StateorEq": "Texas",
    "Population": "3,372",
    "Area": 1454,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Swisher",
    "StateorEq": "Texas",
    "Population": "6,971",
    "Area": 900,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tarrant",
    "StateorEq": "Texas",
    "Population": "2,110,640",
    "Area": 864,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Taylor",
    "StateorEq": "Texas",
    "Population": "143,208",
    "Area": 916,
    "StatisticalArea": "Abilene, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Terrell",
    "StateorEq": "Texas",
    "Population": 760,
    "Area": 2358,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Terry",
    "StateorEq": "Texas",
    "Population": "11,831",
    "Area": 890,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Throckmorton",
    "StateorEq": "Texas",
    "Population": "1,440",
    "Area": 912,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Titus",
    "StateorEq": "Texas",
    "Population": "31,247",
    "Area": 411,
    "StatisticalArea": "Mount Pleasant, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tom Green",
    "StateorEq": "Texas",
    "Population": "120,003",
    "Area": 1522,
    "StatisticalArea": "San Angelo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Travis",
    "StateorEq": "Texas",
    "Population": "1,290,188",
    "Area": 989,
    "StatisticalArea": "Austin-Round Rock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Trinity",
    "StateorEq": "Texas",
    "Population": "13,602",
    "Area": 693,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tyler",
    "StateorEq": "Texas",
    "Population": "19,798",
    "Area": 923,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Upshur",
    "StateorEq": "Texas",
    "Population": "40,892",
    "Area": 588,
    "StatisticalArea": "Longview, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Upton",
    "StateorEq": "Texas",
    "Population": "3,308",
    "Area": 1242,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Uvalde",
    "StateorEq": "Texas",
    "Population": "24,564",
    "Area": 1557,
    "StatisticalArea": "Uvalde, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Val Verde",
    "StateorEq": "Texas",
    "Population": "47,586",
    "Area": 3171,
    "StatisticalArea": "Del Rio, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Van Zandt",
    "StateorEq": "Texas",
    "Population": "59,541",
    "Area": 849,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Victoria",
    "StateorEq": "Texas",
    "Population": "91,319",
    "Area": 883,
    "StatisticalArea": "Victoria, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Walker",
    "StateorEq": "Texas",
    "Population": "76,400",
    "Area": 788,
    "StatisticalArea": "Huntsville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Waller",
    "StateorEq": "Texas",
    "Population": "56,794",
    "Area": 514,
    "StatisticalArea": "Houston-The Woodlands-Sugar Land, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ward",
    "StateorEq": "Texas",
    "Population": "11,644",
    "Area": 836,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Texas",
    "Population": "35,805",
    "Area": 609,
    "StatisticalArea": "Brenham, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Webb",
    "StateorEq": "Texas",
    "Population": "267,114",
    "Area": 3357,
    "StatisticalArea": "Laredo, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wharton",
    "StateorEq": "Texas",
    "Population": "41,570",
    "Area": 1090,
    "StatisticalArea": "El Campo, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wheeler",
    "StateorEq": "Texas",
    "Population": "4,990",
    "Area": 914,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wichita",
    "StateorEq": "Texas",
    "Population": "129,350",
    "Area": 628,
    "StatisticalArea": "Wichita Falls, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilbarger",
    "StateorEq": "Texas",
    "Population": "12,887",
    "Area": 971,
    "StatisticalArea": "Vernon, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Willacy",
    "StateorEq": "Texas",
    "Population": "20,164",
    "Area": 597,
    "StatisticalArea": "Raymondville, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Williamson",
    "StateorEq": "Texas",
    "Population": "609,017",
    "Area": 1124,
    "StatisticalArea": "Austin-Round Rock, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wilson",
    "StateorEq": "Texas",
    "Population": "49,753",
    "Area": 807,
    "StatisticalArea": "San Antonio-New Braunfels, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Winkler",
    "StateorEq": "Texas",
    "Population": "7,791",
    "Area": 841,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wise",
    "StateorEq": "Texas",
    "Population": "68,632",
    "Area": 905,
    "StatisticalArea": "Dallas–Fort Worth–Arlington, TX Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wood",
    "StateorEq": "Texas",
    "Population": "44,843",
    "Area": 650,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Yoakum",
    "StateorEq": "Texas",
    "Population": "7,694",
    "Area": 800,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Young",
    "StateorEq": "Texas",
    "Population": "17,867",
    "Area": 922,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Zapata",
    "StateorEq": "Texas",
    "Population": "13,889",
    "Area": 997,
    "StatisticalArea": "Zapata, TX Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Zavala",
    "StateorEq": "Texas",
    "Population": "9,670",
    "Area": 1299,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bajo Nuevo Bank[y][z]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 0.01,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Baker Island[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 0.58,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Howland Island[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 0.62,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jarvis Island[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 1.7,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Johnston Atoll[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 1.02,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kingman Reef[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 0.01,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Midway Islands[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 40,
    "Area": 2.4,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Navassa Island[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 2.1,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Palmyra Atoll[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 20,
    "Area": 4.59,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Serranilla Bank[y][z]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 0,
    "Area": 0.01,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wake Island[y]",
    "StateorEq": "U.S. Minor Outlying Islands",
    "Population": 100,
    "Area": 2.5,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Beaver",
    "StateorEq": "Utah",
    "Population": "7,072",
    "Area": 2592,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Box Elder",
    "StateorEq": "Utah",
    "Population": "57,666",
    "Area": 6729,
    "StatisticalArea": "Ogden-Clearfield, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cache",
    "StateorEq": "Utah",
    "Population": "133,154",
    "Area": 1173,
    "StatisticalArea": "Logan, UT-ID Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carbon",
    "StateorEq": "Utah",
    "Population": "20,412",
    "Area": 1485,
    "StatisticalArea": "Price, UT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Daggett",
    "StateorEq": "Utah",
    "Population": 935,
    "Area": 721,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Davis",
    "StateorEq": "Utah",
    "Population": "362,679",
    "Area": 634,
    "StatisticalArea": "Ogden-Clearfield, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Duchesne",
    "StateorEq": "Utah",
    "Population": "19,596",
    "Area": 3256,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Emery",
    "StateorEq": "Utah",
    "Population": "9,825",
    "Area": 4472,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Garfield",
    "StateorEq": "Utah",
    "Population": "5,083",
    "Area": 5208,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grand",
    "StateorEq": "Utah",
    "Population": "9,669",
    "Area": 3684,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Iron",
    "StateorEq": "Utah",
    "Population": "57,289",
    "Area": 3301,
    "StatisticalArea": "Cedar City, UT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Juab",
    "StateorEq": "Utah",
    "Population": "11,786",
    "Area": 3406,
    "StatisticalArea": "Provo-Orem, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kane",
    "StateorEq": "Utah",
    "Population": "7,667",
    "Area": 4109,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Millard",
    "StateorEq": "Utah",
    "Population": "12,975",
    "Area": 6828,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "Utah",
    "Population": "12,295",
    "Area": 611,
    "StatisticalArea": "Ogden-Clearfield, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Piute",
    "StateorEq": "Utah",
    "Population": "1,438",
    "Area": 766,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rich",
    "StateorEq": "Utah",
    "Population": "2,510",
    "Area": 1086,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Salt Lake",
    "StateorEq": "Utah",
    "Population": "1,185,238",
    "Area": 807,
    "StatisticalArea": "Salt Lake City, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Juan",
    "StateorEq": "Utah",
    "Population": "14,518",
    "Area": 7933,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sanpete",
    "StateorEq": "Utah",
    "Population": "28,437",
    "Area": 1603,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sevier",
    "StateorEq": "Utah",
    "Population": "21,522",
    "Area": 1918,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Summit",
    "StateorEq": "Utah",
    "Population": "42,357",
    "Area": 1882,
    "StatisticalArea": "Heber, UT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tooele",
    "StateorEq": "Utah",
    "Population": "72,698",
    "Area": 7286,
    "StatisticalArea": "Salt Lake City, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Uintah",
    "StateorEq": "Utah",
    "Population": "35,620",
    "Area": 4501,
    "StatisticalArea": "Vernal, UT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Utah",
    "StateorEq": "Utah",
    "Population": "659,399",
    "Area": 2144,
    "StatisticalArea": "Provo-Orem, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wasatch",
    "StateorEq": "Utah",
    "Population": "34,788",
    "Area": 1206,
    "StatisticalArea": "Heber, UT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Utah",
    "Population": "180,279",
    "Area": 2430,
    "StatisticalArea": "St. George, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "Utah",
    "Population": "2,486",
    "Area": 2466,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Weber",
    "StateorEq": "Utah",
    "Population": "262,223",
    "Area": 659,
    "StatisticalArea": "Ogden-Clearfield, UT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Addison",
    "StateorEq": "Vermont",
    "Population": "37,363",
    "Area": 2426,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bennington",
    "StateorEq": "Vermont",
    "Population": "37,347",
    "Area": 2461,
    "StatisticalArea": "Bennington, VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caledonia",
    "StateorEq": "Vermont",
    "Population": "30,233",
    "Area": 576,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chittenden",
    "StateorEq": "Vermont",
    "Population": "168,323",
    "Area": 770,
    "StatisticalArea": "Burlington-South Burlington, VT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Essex",
    "StateorEq": "Vermont",
    "Population": "5,920",
    "Area": 676,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Vermont",
    "Population": "49,946",
    "Area": 651,
    "StatisticalArea": "Burlington-South Burlington, VT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grand Isle",
    "StateorEq": "Vermont",
    "Population": "7,293",
    "Area": 539,
    "StatisticalArea": "Burlington-South Burlington, VT Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lamoille",
    "StateorEq": "Vermont",
    "Population": "25,945",
    "Area": 665,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "Vermont",
    "Population": "29,277",
    "Area": 637,
    "StatisticalArea": "Lebanon, NH-VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Orleans",
    "StateorEq": "Vermont",
    "Population": "27,393",
    "Area": 83,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rutland",
    "StateorEq": "Vermont",
    "Population": "60,572",
    "Area": 461,
    "StatisticalArea": "Rutland, VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Vermont",
    "Population": "59,807",
    "Area": 689,
    "StatisticalArea": "Barre, VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Windham",
    "StateorEq": "Vermont",
    "Population": "45,905",
    "Area": 697,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Windsor",
    "StateorEq": "Vermont",
    "Population": "57,753",
    "Area": 932,
    "StatisticalArea": "Lebanon, NH-VT Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Saint Croix Island",
    "StateorEq": "Virgin Islands (U.S.)",
    "Population": "50,601",
    "Area": 690,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Saint John Island",
    "StateorEq": "Virgin Islands (U.S.)",
    "Population": "4,170",
    "Area": 789,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Saint Thomas Island",
    "StateorEq": "Virgin Islands (U.S.)",
    "Population": "51,634",
    "Area": 971,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Accomack",
    "StateorEq": "Virginia",
    "Population": "33,413",
    "Area": 455,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Albemarle",
    "StateorEq": "Virginia",
    "Population": "112,395",
    "Area": 723,
    "StatisticalArea": "Charlottesville, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alleghany",
    "StateorEq": "Virginia",
    "Population": "15,223",
    "Area": 446,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Amelia",
    "StateorEq": "Virginia",
    "Population": "13,265",
    "Area": 357,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Amherst",
    "StateorEq": "Virginia",
    "Population": "31,307",
    "Area": 475,
    "StatisticalArea": "Lynchburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Appomattox",
    "StateorEq": "Virginia",
    "Population": "16,119",
    "Area": 334,
    "StatisticalArea": "Lynchburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Arlington",
    "StateorEq": "Virginia",
    "Population": "238,643",
    "Area": 26,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Augusta",
    "StateorEq": "Virginia",
    "Population": "77,487",
    "Area": 971,
    "StatisticalArea": "Staunton-Waynesboro, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bath",
    "StateorEq": "Virginia",
    "Population": "4,209",
    "Area": 532,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bedford[aa]",
    "StateorEq": "Virginia",
    "Population": "79,462",
    "Area": 755,
    "StatisticalArea": "Lynchburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bland",
    "StateorEq": "Virginia",
    "Population": "6,270",
    "Area": 359,
    "StatisticalArea": "Bluefield, WV-VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Botetourt",
    "StateorEq": "Virginia",
    "Population": "33,596",
    "Area": 543,
    "StatisticalArea": "Roanoke, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Brunswick",
    "StateorEq": "Virginia",
    "Population": "15,849",
    "Area": 566,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Buchanan",
    "StateorEq": "Virginia",
    "Population": "20,355",
    "Area": 504,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Buckingham",
    "StateorEq": "Virginia",
    "Population": "16,824",
    "Area": 581,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Campbell",
    "StateorEq": "Virginia",
    "Population": "55,696",
    "Area": 504,
    "StatisticalArea": "Lynchburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Caroline",
    "StateorEq": "Virginia",
    "Population": "30,887",
    "Area": 533,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Carroll",
    "StateorEq": "Virginia",
    "Population": "29,155",
    "Area": 476,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Charles City",
    "StateorEq": "Virginia",
    "Population": "6,773",
    "Area": 182,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Charlotte",
    "StateorEq": "Virginia",
    "Population": "11,529",
    "Area": 475,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Chesterfield",
    "StateorEq": "Virginia",
    "Population": "364,548",
    "Area": 426,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clarke",
    "StateorEq": "Virginia",
    "Population": "14,783",
    "Area": 177,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Craig",
    "StateorEq": "Virginia",
    "Population": "4,892",
    "Area": 330,
    "StatisticalArea": "Roanoke, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Culpeper",
    "StateorEq": "Virginia",
    "Population": "52,552",
    "Area": 381,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cumberland",
    "StateorEq": "Virginia",
    "Population": "9,675",
    "Area": 298,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dickenson",
    "StateorEq": "Virginia",
    "Population": "14,124",
    "Area": 333,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dinwiddie",
    "StateorEq": "Virginia",
    "Population": "27,947",
    "Area": 504,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Essex",
    "StateorEq": "Virginia",
    "Population": "10,599",
    "Area": 258,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fairfax",
    "StateorEq": "Virginia",
    "Population": "1,150,309",
    "Area": 396,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fauquier",
    "StateorEq": "Virginia",
    "Population": "72,972",
    "Area": 650,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Floyd",
    "StateorEq": "Virginia",
    "Population": "15,476",
    "Area": 382,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fluvanna",
    "StateorEq": "Virginia",
    "Population": "27,249",
    "Area": 287,
    "StatisticalArea": "Charlottesville, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Virginia",
    "Population": "54,477",
    "Area": 692,
    "StatisticalArea": "Roanoke, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Frederick",
    "StateorEq": "Virginia",
    "Population": "91,419",
    "Area": 415,
    "StatisticalArea": "Winchester, VA-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Giles",
    "StateorEq": "Virginia",
    "Population": "16,787",
    "Area": 358,
    "StatisticalArea": "Blacksburg-Christiansburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gloucester",
    "StateorEq": "Virginia",
    "Population": "38,711",
    "Area": 217,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Goochland",
    "StateorEq": "Virginia",
    "Population": "24,727",
    "Area": 284,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grayson",
    "StateorEq": "Virginia",
    "Population": "15,333",
    "Area": 443,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greene",
    "StateorEq": "Virginia",
    "Population": "20,552",
    "Area": 157,
    "StatisticalArea": "Charlottesville, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Greensville",
    "StateorEq": "Virginia",
    "Population": "11,391",
    "Area": 296,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Halifax",
    "StateorEq": "Virginia",
    "Population": "34,022",
    "Area": 814,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hanover",
    "StateorEq": "Virginia",
    "Population": "109,979",
    "Area": 473,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henrico",
    "StateorEq": "Virginia",
    "Population": "334,389",
    "Area": 238,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Henry",
    "StateorEq": "Virginia",
    "Population": "50,948",
    "Area": 382,
    "StatisticalArea": "Martinsville, VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Highland",
    "StateorEq": "Virginia",
    "Population": "2,232",
    "Area": 416,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Isle of Wight",
    "StateorEq": "Virginia",
    "Population": "38,606",
    "Area": 316,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "James City",
    "StateorEq": "Virginia",
    "Population": "78,254",
    "Area": 143,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "King and Queen",
    "StateorEq": "Virginia",
    "Population": "6,608",
    "Area": 316,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "King George",
    "StateorEq": "Virginia",
    "Population": "26,723",
    "Area": 180,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "King William",
    "StateorEq": "Virginia",
    "Population": "17,810",
    "Area": 275,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lancaster",
    "StateorEq": "Virginia",
    "Population": "10,919",
    "Area": 133,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lee",
    "StateorEq": "Virginia",
    "Population": "22,173",
    "Area": 437,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Loudoun",
    "StateorEq": "Virginia",
    "Population": "420,959",
    "Area": 520,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Louisa",
    "StateorEq": "Virginia",
    "Population": "37,596",
    "Area": 498,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lunenburg",
    "StateorEq": "Virginia",
    "Population": "11,936",
    "Area": 432,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Madison",
    "StateorEq": "Virginia",
    "Population": "13,837",
    "Area": 322,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mathews",
    "StateorEq": "Virginia",
    "Population": "8,533",
    "Area": 86,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mecklenburg",
    "StateorEq": "Virginia",
    "Population": "30,319",
    "Area": 624,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Middlesex",
    "StateorEq": "Virginia",
    "Population": "10,625",
    "Area": 130,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Montgomery",
    "StateorEq": "Virginia",
    "Population": "99,721",
    "Area": 388,
    "StatisticalArea": "Blacksburg-Christiansburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nelson",
    "StateorEq": "Virginia",
    "Population": "14,775",
    "Area": 472,
    "StatisticalArea": "Charlottesville, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "New Kent",
    "StateorEq": "Virginia",
    "Population": "22,945",
    "Area": 210,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Northampton",
    "StateorEq": "Virginia",
    "Population": "12,282",
    "Area": 207,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Northumberland",
    "StateorEq": "Virginia",
    "Population": "11,839",
    "Area": 192,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Nottoway",
    "StateorEq": "Virginia",
    "Population": "15,642",
    "Area": 315,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Orange",
    "StateorEq": "Virginia",
    "Population": "36,254",
    "Area": 342,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Page",
    "StateorEq": "Virginia",
    "Population": "23,709",
    "Area": 311,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Patrick",
    "StateorEq": "Virginia",
    "Population": "17,608",
    "Area": 483,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pittsylvania",
    "StateorEq": "Virginia",
    "Population": "60,501",
    "Area": 978,
    "StatisticalArea": "Danville, VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Powhatan",
    "StateorEq": "Virginia",
    "Population": "30,333",
    "Area": 261,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Prince Edward",
    "StateorEq": "Virginia",
    "Population": "21,849",
    "Area": 353,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Prince George",
    "StateorEq": "Virginia",
    "Population": "43,010",
    "Area": 266,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Prince William",
    "StateorEq": "Virginia",
    "Population": "482,204",
    "Area": 338,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pulaski",
    "StateorEq": "Virginia",
    "Population": "33,800",
    "Area": 321,
    "StatisticalArea": "Blacksburg-Christiansburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rappahannock",
    "StateorEq": "Virginia",
    "Population": "7,348",
    "Area": 267,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Richmond",
    "StateorEq": "Virginia",
    "Population": "8,923",
    "Area": 192,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roanoke",
    "StateorEq": "Virginia",
    "Population": "96,929",
    "Area": 251,
    "StatisticalArea": "Roanoke, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rockbridge",
    "StateorEq": "Virginia",
    "Population": "22,650",
    "Area": 600,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rockingham",
    "StateorEq": "Virginia",
    "Population": "83,757",
    "Area": 851,
    "StatisticalArea": "Harrisonburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Russell",
    "StateorEq": "Virginia",
    "Population": "25,781",
    "Area": 475,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Scott",
    "StateorEq": "Virginia",
    "Population": "21,576",
    "Area": 537,
    "StatisticalArea": "Kingsport-Bristol-Bristol, TN-VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Shenandoah",
    "StateorEq": "Virginia",
    "Population": "44,186",
    "Area": 512,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Smyth",
    "StateorEq": "Virginia",
    "Population": "29,800",
    "Area": 452,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Southampton",
    "StateorEq": "Virginia",
    "Population": "17,996",
    "Area": 600,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Spotsylvania",
    "StateorEq": "Virginia",
    "Population": "140,032",
    "Area": 401,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stafford",
    "StateorEq": "Virginia",
    "Population": "156,927",
    "Area": 270,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Surry",
    "StateorEq": "Virginia",
    "Population": "6,561",
    "Area": 279,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sussex",
    "StateorEq": "Virginia",
    "Population": "10,829",
    "Area": 491,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tazewell",
    "StateorEq": "Virginia",
    "Population": "40,429",
    "Area": 520,
    "StatisticalArea": "Bluefield, WV-VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Warren",
    "StateorEq": "Virginia",
    "Population": "40,727",
    "Area": 214,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Virginia",
    "Population": "53,935",
    "Area": 564,
    "StatisticalArea": "Kingsport-Bristol-Bristol, TN-VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Westmoreland",
    "StateorEq": "Virginia",
    "Population": "18,477",
    "Area": 229,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wise",
    "StateorEq": "Virginia",
    "Population": "36,130",
    "Area": 403,
    "StatisticalArea": "Big Stone Gap, VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wythe",
    "StateorEq": "Virginia",
    "Population": "28,290",
    "Area": 463,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "York",
    "StateorEq": "Virginia",
    "Population": "70,045",
    "Area": 106,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Alexandria, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "159,467",
    "Area": 15,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Bristol, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "17,219",
    "Area": 12,
    "StatisticalArea": "Kingsport-Bristol-Bristol, TN-VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Buena Vista, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "6,641",
    "Area": 7,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Charlottesville, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "46,553",
    "Area": 10,
    "StatisticalArea": "Charlottesville, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chesapeake, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "249,422",
    "Area": 341,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Colonial Heights, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "18,170",
    "Area": 8,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Covington, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "5,737",
    "Area": 4,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Danville, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "42,590",
    "Area": 43,
    "StatisticalArea": "Danville, VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Emporia, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "5,766",
    "Area": 7,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Fairfax, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "24,146",
    "Area": 6,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Falls Church, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "14,658",
    "Area": 2.1,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Franklin, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "8,180",
    "Area": 8,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fredericksburg, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "27,982",
    "Area": 10,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Galax, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "6,720",
    "Area": 8,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hampton, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "137,148",
    "Area": 52,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Harrisonburg, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "51,814",
    "Area": 18,
    "StatisticalArea": "Harrisonburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hopewell, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "23,033",
    "Area": 10,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lexington, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "7,320",
    "Area": 2.5,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lynchburg, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "79,009",
    "Area": 49,
    "StatisticalArea": "Lynchburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Manassas, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "42,772",
    "Area": 10,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Manassas Park, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "17,219",
    "Area": 2.5,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Martinsville, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "13,485",
    "Area": 11,
    "StatisticalArea": "Martinsville, VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Newport News, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "186,247",
    "Area": 68,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Norfolk, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "238,005",
    "Area": 54,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Norton, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "3,687",
    "Area": 7,
    "StatisticalArea": "Big Stone Gap, VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Petersburg, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "33,458",
    "Area": 23,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Poquoson, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "12,460",
    "Area": 16,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Portsmouth, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "97,915",
    "Area": 33,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Radford, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "16,070",
    "Area": 10,
    "StatisticalArea": "Blacksburg-Christiansburg, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Richmond, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "226,610",
    "Area": 60,
    "StatisticalArea": "Richmond, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Roanoke, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "100,011",
    "Area": 43,
    "StatisticalArea": "Roanoke, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Salem, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "25,346",
    "Area": 15,
    "StatisticalArea": "Roanoke, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Staunton, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "25,750",
    "Area": 20,
    "StatisticalArea": "Staunton-Waynesboro, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Suffolk, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "94,324",
    "Area": 400,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Virginia Beach, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "459,470",
    "Area": 248,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Waynesboro, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "22,196",
    "Area": 14,
    "StatisticalArea": "Staunton-Waynesboro, VA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Williamsburg, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "15,425",
    "Area": 9,
    "StatisticalArea": "Virginia Beach-Norfolk-Newport News, VA-NC Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Winchester, City of[ab]",
    "StateorEq": "Virginia",
    "Population": "28,120",
    "Area": 9,
    "StatisticalArea": "Winchester, VA-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Washington",
    "Population": "20,613",
    "Area": 1925,
    "StatisticalArea": "Othello, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Asotin",
    "StateorEq": "Washington",
    "Population": "22,285",
    "Area": 636,
    "StatisticalArea": "Lewiston, ID-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Benton",
    "StateorEq": "Washington",
    "Population": "206,873",
    "Area": 1700,
    "StatisticalArea": "Kennewick-Richland, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Chelan",
    "StateorEq": "Washington",
    "Population": "79,074",
    "Area": 2920,
    "StatisticalArea": "Wenatchee, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clallam",
    "StateorEq": "Washington",
    "Population": "77,155",
    "Area": 1738,
    "StatisticalArea": "Port Angeles, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Washington",
    "Population": "503,311",
    "Area": 629,
    "StatisticalArea": "Portland-Vancouver-Hillsboro, OR-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "Washington",
    "Population": "3,952",
    "Area": 869,
    "StatisticalArea": "Walla Walla, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cowlitz",
    "StateorEq": "Washington",
    "Population": "110,730",
    "Area": 1139,
    "StatisticalArea": "Longview, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Washington",
    "Population": "42,938",
    "Area": 1819,
    "StatisticalArea": "Wenatchee, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ferry",
    "StateorEq": "Washington",
    "Population": "7,178",
    "Area": 2204,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Franklin",
    "StateorEq": "Washington",
    "Population": "96,749",
    "Area": 1242,
    "StatisticalArea": "Kennewick-Richland, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Garfield",
    "StateorEq": "Washington",
    "Population": "2,286",
    "Area": 710,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Washington",
    "Population": "99,123",
    "Area": 2680,
    "StatisticalArea": "Moses Lake, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Grays Harbor",
    "StateorEq": "Washington",
    "Population": "75,636",
    "Area": 1902,
    "StatisticalArea": "Aberdeen, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Island",
    "StateorEq": "Washington",
    "Population": "86,857",
    "Area": 209,
    "StatisticalArea": "Oak Harbor, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Washington",
    "Population": "32,977",
    "Area": 1804,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "King",
    "StateorEq": "Washington",
    "Population": "2,269,675",
    "Area": 2115,
    "StatisticalArea": "Seattle-Tacoma-Bellevue, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kitsap",
    "StateorEq": "Washington",
    "Population": "275,611",
    "Area": 395,
    "StatisticalArea": "Bremerton-Silverdale, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kittitas",
    "StateorEq": "Washington",
    "Population": "44,337",
    "Area": 2297,
    "StatisticalArea": "Ellensburg, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Klickitat",
    "StateorEq": "Washington",
    "Population": "22,735",
    "Area": 1872,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lewis",
    "StateorEq": "Washington",
    "Population": "82,149",
    "Area": 2403,
    "StatisticalArea": "Centralia, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Washington",
    "Population": "10,876",
    "Area": 2311,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mason",
    "StateorEq": "Washington",
    "Population": "65,726",
    "Area": 959,
    "StatisticalArea": "Shelton, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Okanogan",
    "StateorEq": "Washington",
    "Population": "42,104",
    "Area": 5268,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pacific",
    "StateorEq": "Washington",
    "Population": "23,365",
    "Area": 933,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pend Oreille",
    "StateorEq": "Washington",
    "Population": "13,401",
    "Area": 1400,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pierce",
    "StateorEq": "Washington",
    "Population": "921,130",
    "Area": 1670,
    "StatisticalArea": "Seattle-Tacoma-Bellevue, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "San Juan",
    "StateorEq": "Washington",
    "Population": "17,788",
    "Area": 174,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Skagit",
    "StateorEq": "Washington",
    "Population": "129,523",
    "Area": 1731,
    "StatisticalArea": "Mount Vernon-Anacortes, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Skamania",
    "StateorEq": "Washington",
    "Population": "12,036",
    "Area": 1656,
    "StatisticalArea": "Portland-Vancouver-Hillsboro, OR-WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Snohomish",
    "StateorEq": "Washington",
    "Population": "827,957",
    "Area": 2087,
    "StatisticalArea": "Seattle-Tacoma-Bellevue, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Spokane",
    "StateorEq": "Washington",
    "Population": "539,339",
    "Area": 1764,
    "StatisticalArea": "Spokane-Spokane Valley, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Stevens",
    "StateorEq": "Washington",
    "Population": "46,445",
    "Area": 2478,
    "StatisticalArea": "Spokane-Spokane Valley, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Thurston",
    "StateorEq": "Washington",
    "Population": "294,793",
    "Area": 722,
    "StatisticalArea": "Olympia-Tumwater, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wahkiakum",
    "StateorEq": "Washington",
    "Population": "4,422",
    "Area": 264,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Walla Walla",
    "StateorEq": "Washington",
    "Population": "62,584",
    "Area": 1270,
    "StatisticalArea": "Walla Walla, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Whatcom",
    "StateorEq": "Washington",
    "Population": "226,847",
    "Area": 2107,
    "StatisticalArea": "Bellingham, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Whitman",
    "StateorEq": "Washington",
    "Population": "47,973",
    "Area": 2159,
    "StatisticalArea": "Pullman, WA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Yakima",
    "StateorEq": "Washington",
    "Population": "256,728",
    "Area": 4296,
    "StatisticalArea": "Yakima, WA Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Barbour",
    "StateorEq": "West Virginia",
    "Population": "15,465",
    "Area": 341,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Berkeley",
    "StateorEq": "West Virginia",
    "Population": "122,076",
    "Area": 321,
    "StatisticalArea": "Hagerstown-Martinsburg, MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Boone",
    "StateorEq": "West Virginia",
    "Population": "21,809",
    "Area": 503,
    "StatisticalArea": "Charleston, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Braxton",
    "StateorEq": "West Virginia",
    "Population": "12,447",
    "Area": 514,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brooke",
    "StateorEq": "West Virginia",
    "Population": "22,559",
    "Area": 89,
    "StatisticalArea": "Weirton-Steubenville, WV-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Cabell",
    "StateorEq": "West Virginia",
    "Population": "94,350",
    "Area": 282,
    "StatisticalArea": "Huntington-Ashland, WV-KY-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Calhoun",
    "StateorEq": "West Virginia",
    "Population": "6,229",
    "Area": 281,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Clay",
    "StateorEq": "West Virginia",
    "Population": "8,051",
    "Area": 342,
    "StatisticalArea": "Charleston, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Doddridge",
    "StateorEq": "West Virginia",
    "Population": "7,808",
    "Area": 320,
    "StatisticalArea": "Clarksburg, WV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fayette",
    "StateorEq": "West Virginia",
    "Population": "40,488",
    "Area": 664,
    "StatisticalArea": "Beckley, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Gilmer",
    "StateorEq": "West Virginia",
    "Population": "7,408",
    "Area": 340,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "West Virginia",
    "Population": "10,976",
    "Area": 477,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Greenbrier",
    "StateorEq": "West Virginia",
    "Population": "32,977",
    "Area": 1021,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hampshire",
    "StateorEq": "West Virginia",
    "Population": "23,093",
    "Area": 642,
    "StatisticalArea": "Winchester, VA-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hancock",
    "StateorEq": "West Virginia",
    "Population": "29,095",
    "Area": 83,
    "StatisticalArea": "Weirton-Steubenville, WV-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Hardy",
    "StateorEq": "West Virginia",
    "Population": "14,299",
    "Area": 583,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Harrison",
    "StateorEq": "West Virginia",
    "Population": "65,921",
    "Area": 416,
    "StatisticalArea": "Clarksburg, WV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "West Virginia",
    "Population": "27,791",
    "Area": 466,
    "StatisticalArea": "Charleston, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "West Virginia",
    "Population": "57,701",
    "Area": 210,
    "StatisticalArea": "Washington-Arlington-Alexandria, DC-VA-MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kanawha",
    "StateorEq": "West Virginia",
    "Population": "180,745",
    "Area": 903,
    "StatisticalArea": "Charleston, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lewis",
    "StateorEq": "West Virginia",
    "Population": "17,033",
    "Area": 389,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "West Virginia",
    "Population": "20,463",
    "Area": 438,
    "StatisticalArea": "Charleston, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Logan",
    "StateorEq": "West Virginia",
    "Population": "32,567",
    "Area": 454,
    "StatisticalArea": "Logan, WV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marion",
    "StateorEq": "West Virginia",
    "Population": "56,205",
    "Area": 307,
    "StatisticalArea": "Fairmont, WV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marshall",
    "StateorEq": "West Virginia",
    "Population": "30,591",
    "Area": 432,
    "StatisticalArea": "Wheeling, WV-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mason",
    "StateorEq": "West Virginia",
    "Population": "25,453",
    "Area": 535,
    "StatisticalArea": "Point Pleasant, WV-OH Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "McDowell",
    "StateorEq": "West Virginia",
    "Population": "19,111",
    "Area": 310,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Mercer",
    "StateorEq": "West Virginia",
    "Population": "59,664",
    "Area": 420,
    "StatisticalArea": "Bluefield, WV-VA Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mineral",
    "StateorEq": "West Virginia",
    "Population": "26,938",
    "Area": 328,
    "StatisticalArea": "Cumberland, MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Mingo",
    "StateorEq": "West Virginia",
    "Population": "23,568",
    "Area": 423,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Monongalia",
    "StateorEq": "West Virginia",
    "Population": "105,822",
    "Area": 361,
    "StatisticalArea": "Morgantown, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "West Virginia",
    "Population": "12,376",
    "Area": 473,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Morgan",
    "StateorEq": "West Virginia",
    "Population": "17,063",
    "Area": 229,
    "StatisticalArea": "Hagerstown-Martinsburg, MD-WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Nicholas",
    "StateorEq": "West Virginia",
    "Population": "24,604",
    "Area": 649,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ohio",
    "StateorEq": "West Virginia",
    "Population": "42,425",
    "Area": 106,
    "StatisticalArea": "Wheeling, WV-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pendleton",
    "StateorEq": "West Virginia",
    "Population": "6,143",
    "Area": 698,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pleasants",
    "StateorEq": "West Virginia",
    "Population": "7,653",
    "Area": 131,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pocahontas",
    "StateorEq": "West Virginia",
    "Population": "7,869",
    "Area": 940,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Preston",
    "StateorEq": "West Virginia",
    "Population": "34,216",
    "Area": 648,
    "StatisticalArea": "Morgantown, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Putnam",
    "StateorEq": "West Virginia",
    "Population": "57,440",
    "Area": 346,
    "StatisticalArea": "Huntington-Ashland, WV-KY-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Raleigh",
    "StateorEq": "West Virginia",
    "Population": "74,591",
    "Area": 607,
    "StatisticalArea": "Beckley, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Randolph",
    "StateorEq": "West Virginia",
    "Population": "27,932",
    "Area": 1040,
    "StatisticalArea": "Elkins, WV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Ritchie",
    "StateorEq": "West Virginia",
    "Population": "8,444",
    "Area": 454,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Roane",
    "StateorEq": "West Virginia",
    "Population": "14,028",
    "Area": 484,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Summers",
    "StateorEq": "West Virginia",
    "Population": "11,959",
    "Area": 361,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Taylor",
    "StateorEq": "West Virginia",
    "Population": "16,705",
    "Area": 173,
    "StatisticalArea": "Clarksburg, WV Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Tucker",
    "StateorEq": "West Virginia",
    "Population": "6,762",
    "Area": 419,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Tyler",
    "StateorEq": "West Virginia",
    "Population": "8,313",
    "Area": 258,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Upshur",
    "StateorEq": "West Virginia",
    "Population": "23,816",
    "Area": 355,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wayne",
    "StateorEq": "West Virginia",
    "Population": "38,982",
    "Area": 506,
    "StatisticalArea": "Huntington-Ashland, WV-KY-OH Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Webster",
    "StateorEq": "West Virginia",
    "Population": "8,378",
    "Area": 556,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wetzel",
    "StateorEq": "West Virginia",
    "Population": "14,442",
    "Area": 359,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Wirt",
    "StateorEq": "West Virginia",
    "Population": "5,194",
    "Area": 233,
    "StatisticalArea": "Parkersburg-Vienna, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wood",
    "StateorEq": "West Virginia",
    "Population": "84,296",
    "Area": 367,
    "StatisticalArea": "Parkersburg-Vienna, WV Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wyoming",
    "StateorEq": "West Virginia",
    "Population": "21,382",
    "Area": 501,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Adams",
    "StateorEq": "Wisconsin",
    "Population": "20,654",
    "Area": 645.65,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Ashland",
    "StateorEq": "Wisconsin",
    "Population": "16,027",
    "Area": 1045.04,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Barron",
    "StateorEq": "Wisconsin",
    "Population": "46,711",
    "Area": 862.71,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Bayfield",
    "StateorEq": "Wisconsin",
    "Population": "16,220",
    "Area": 1477.86,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Brown",
    "StateorEq": "Wisconsin",
    "Population": "268,740",
    "Area": 529.71,
    "StatisticalArea": "Green Bay, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Buffalo",
    "StateorEq": "Wisconsin",
    "Population": "13,317",
    "Area": 671.64,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Burnett",
    "StateorEq": "Wisconsin",
    "Population": "16,526",
    "Area": 821.85,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Calumet",
    "StateorEq": "Wisconsin",
    "Population": "52,442",
    "Area": 318.24,
    "StatisticalArea": "Appleton, Wisconsin metropolitan area"
  },
  {
    "CountyorEq": "Chippewa",
    "StateorEq": "Wisconsin",
    "Population": "66,297",
    "Area": 1008.37,
    "StatisticalArea": "Eau Claire, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Clark",
    "StateorEq": "Wisconsin",
    "Population": "34,659",
    "Area": 1209.82,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Columbia",
    "StateorEq": "Wisconsin",
    "Population": "58,490",
    "Area": 765.53,
    "StatisticalArea": "Madison, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Crawford",
    "StateorEq": "Wisconsin",
    "Population": "16,113",
    "Area": 570.66,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Dane",
    "StateorEq": "Wisconsin",
    "Population": "561,504",
    "Area": 1197.24,
    "StatisticalArea": "Madison, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dodge",
    "StateorEq": "Wisconsin",
    "Population": "89,396",
    "Area": 875.63,
    "StatisticalArea": "Beaver Dam, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Door",
    "StateorEq": "Wisconsin",
    "Population": "30,066",
    "Area": 481.98,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Douglas",
    "StateorEq": "Wisconsin",
    "Population": "44,295",
    "Area": 1304.14,
    "StatisticalArea": "Duluth, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Dunn",
    "StateorEq": "Wisconsin",
    "Population": "45,440",
    "Area": 850.11,
    "StatisticalArea": "Menomonie, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Eau Claire",
    "StateorEq": "Wisconsin",
    "Population": "105,710",
    "Area": 637.98,
    "StatisticalArea": "Eau Claire, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Florence",
    "StateorEq": "Wisconsin",
    "Population": "4,558",
    "Area": 488.2,
    "StatisticalArea": "Iron Mountain, MI-WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fond du Lac",
    "StateorEq": "Wisconsin",
    "Population": "104,154",
    "Area": 719.55,
    "StatisticalArea": "Fond du Lac, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Forest",
    "StateorEq": "Wisconsin",
    "Population": "9,179",
    "Area": 1014.07,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Grant",
    "StateorEq": "Wisconsin",
    "Population": "51,938",
    "Area": 1146.85,
    "StatisticalArea": "Platteville, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Green",
    "StateorEq": "Wisconsin",
    "Population": "37,093",
    "Area": 583.96,
    "StatisticalArea": "Madison, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Green Lake",
    "StateorEq": "Wisconsin",
    "Population": "19,018",
    "Area": 349.44,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Iowa",
    "StateorEq": "Wisconsin",
    "Population": "23,709",
    "Area": 762.58,
    "StatisticalArea": "Madison, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Iron",
    "StateorEq": "Wisconsin",
    "Population": "6,137",
    "Area": 758.17,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jackson",
    "StateorEq": "Wisconsin",
    "Population": "21,145",
    "Area": 987.72,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Jefferson",
    "StateorEq": "Wisconsin",
    "Population": "84,900",
    "Area": 556.47,
    "StatisticalArea": "Watertown-Fort Atkinson, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Juneau",
    "StateorEq": "Wisconsin",
    "Population": "26,718",
    "Area": 766.93,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Kenosha",
    "StateorEq": "Wisconsin",
    "Population": "169,151",
    "Area": 271.99,
    "StatisticalArea": "Chicago-Naperville-Elgin, IL-IN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Kewaunee",
    "StateorEq": "Wisconsin",
    "Population": "20,563",
    "Area": 342.52,
    "StatisticalArea": "Green Bay, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "La Crosse",
    "StateorEq": "Wisconsin",
    "Population": "120,784",
    "Area": 451.69,
    "StatisticalArea": "La Crosse-Onalaska, WI-MN Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lafayette",
    "StateorEq": "Wisconsin",
    "Population": "16,611",
    "Area": 633.59,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Langlade",
    "StateorEq": "Wisconsin",
    "Population": "19,491",
    "Area": 870.64,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Wisconsin",
    "Population": "28,415",
    "Area": 878.97,
    "StatisticalArea": "Wausau-Weston, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Manitowoc",
    "StateorEq": "Wisconsin",
    "Population": "81,359",
    "Area": 589.08,
    "StatisticalArea": "Manitowoc, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marathon",
    "StateorEq": "Wisconsin",
    "Population": "138,013",
    "Area": 1544.98,
    "StatisticalArea": "Wausau-Weston, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marinette",
    "StateorEq": "Wisconsin",
    "Population": "41,872",
    "Area": 1399.35,
    "StatisticalArea": "Marinette, WI-MI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Marquette",
    "StateorEq": "Wisconsin",
    "Population": "15,592",
    "Area": 455.6,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Menominee",
    "StateorEq": "Wisconsin",
    "Population": "4,255",
    "Area": 357.61,
    "StatisticalArea": "Shawano, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Milwaukee",
    "StateorEq": "Wisconsin",
    "Population": "939,489",
    "Area": 241.4,
    "StatisticalArea": "Milwaukee-Waukesha-West Allis, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Monroe",
    "StateorEq": "Wisconsin",
    "Population": "46,274",
    "Area": 900.78,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Oconto",
    "StateorEq": "Wisconsin",
    "Population": "38,965",
    "Area": 997.99,
    "StatisticalArea": "Green Bay, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Oneida",
    "StateorEq": "Wisconsin",
    "Population": "37,845",
    "Area": 1112.97,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Outagamie",
    "StateorEq": "Wisconsin",
    "Population": "190,705",
    "Area": 637.52,
    "StatisticalArea": "Appleton, Wisconsin metropolitan area"
  },
  {
    "CountyorEq": "Ozaukee",
    "StateorEq": "Wisconsin",
    "Population": "91,503",
    "Area": 233.08,
    "StatisticalArea": "Milwaukee-Waukesha-West Allis, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Pepin",
    "StateorEq": "Wisconsin",
    "Population": "7,318",
    "Area": 231.98,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Pierce",
    "StateorEq": "Wisconsin",
    "Population": "42,212",
    "Area": 573.75,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Polk",
    "StateorEq": "Wisconsin",
    "Population": "44,977",
    "Area": 913.96,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Portage",
    "StateorEq": "Wisconsin",
    "Population": "70,377",
    "Area": 800.68,
    "StatisticalArea": "Stevens Point, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Price",
    "StateorEq": "Wisconsin",
    "Population": "14,054",
    "Area": 1254.38,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Racine",
    "StateorEq": "Wisconsin",
    "Population": "197,727",
    "Area": 332.5,
    "StatisticalArea": "Racine, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Richland",
    "StateorEq": "Wisconsin",
    "Population": "17,304",
    "Area": 586.15,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Rock",
    "StateorEq": "Wisconsin",
    "Population": "163,687",
    "Area": 718.14,
    "StatisticalArea": "Janesville-Beloit, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Rusk",
    "StateorEq": "Wisconsin",
    "Population": "14,188",
    "Area": 913.59,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "St. Croix",
    "StateorEq": "Wisconsin",
    "Population": "93,536",
    "Area": 830.9,
    "StatisticalArea": "Minneapolis-St. Paul-Bloomington, MN-WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sauk",
    "StateorEq": "Wisconsin",
    "Population": "65,763",
    "Area": 1257.31,
    "StatisticalArea": "Baraboo, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sawyer",
    "StateorEq": "Wisconsin",
    "Population": "18,074",
    "Area": 893.06,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Shawano",
    "StateorEq": "Wisconsin",
    "Population": "40,881",
    "Area": 511.27,
    "StatisticalArea": "Shawano, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sheboygan",
    "StateorEq": "Wisconsin",
    "Population": "118,034",
    "Area": 722.33,
    "StatisticalArea": "Sheboygan, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Taylor",
    "StateorEq": "Wisconsin",
    "Population": "19,913",
    "Area": 974.88,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Trempealeau",
    "StateorEq": "Wisconsin",
    "Population": "30,760",
    "Area": 732.97,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Vernon",
    "StateorEq": "Wisconsin",
    "Population": "30,714",
    "Area": 791.58,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Vilas",
    "StateorEq": "Wisconsin",
    "Population": "23,047",
    "Area": 856.6,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Walworth",
    "StateorEq": "Wisconsin",
    "Population": "106,478",
    "Area": 555.13,
    "StatisticalArea": "Whitewater-Elkhorn, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washburn",
    "StateorEq": "Wisconsin",
    "Population": "16,623",
    "Area": 797.11,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Washington",
    "StateorEq": "Wisconsin",
    "Population": "136,761",
    "Area": 430.7,
    "StatisticalArea": "Milwaukee-Waukesha-West Allis, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Waukesha",
    "StateorEq": "Wisconsin",
    "Population": "406,978",
    "Area": 549.57,
    "StatisticalArea": "Milwaukee-Waukesha-West Allis, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Waupaca",
    "StateorEq": "Wisconsin",
    "Population": "51,812",
    "Area": 747.71,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Waushara",
    "StateorEq": "Wisconsin",
    "Population": "24,520",
    "Area": 626.15,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Winnebago",
    "StateorEq": "Wisconsin",
    "Population": "171,730",
    "Area": 434.49,
    "StatisticalArea": "Oshkosh-Neenah, WI Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Wood",
    "StateorEq": "Wisconsin",
    "Population": "74,207",
    "Area": 793.12,
    "StatisticalArea": "Wisconsin Rapids-Marshfield, WI Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Albany",
    "StateorEq": "Wyoming",
    "Population": "37,066",
    "Area": 4274,
    "StatisticalArea": "Laramie, WY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Big Horn",
    "StateorEq": "Wyoming",
    "Population": "11,521",
    "Area": 3137,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Campbell",
    "StateorEq": "Wyoming",
    "Population": "47,026",
    "Area": 4797,
    "StatisticalArea": "Gillette, WY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Carbon",
    "StateorEq": "Wyoming",
    "Population": "14,537",
    "Area": 7897,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Converse",
    "StateorEq": "Wyoming",
    "Population": "13,751",
    "Area": 4255,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Crook",
    "StateorEq": "Wyoming",
    "Population": "7,181",
    "Area": 2859,
    "StatisticalArea": "Gillette, WY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Fremont",
    "StateorEq": "Wyoming",
    "Population": "39,234",
    "Area": 9183,
    "StatisticalArea": "Riverton, WY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Goshen",
    "StateorEq": "Wyoming",
    "Population": "12,498",
    "Area": 2225,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Hot Springs",
    "StateorEq": "Wyoming",
    "Population": "4,621",
    "Area": 2004,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Johnson",
    "StateorEq": "Wyoming",
    "Population": "8,447",
    "Area": 4166,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Laramie",
    "StateorEq": "Wyoming",
    "Population": "100,512",
    "Area": 2686,
    "StatisticalArea": "Cheyenne, WY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Lincoln",
    "StateorEq": "Wyoming",
    "Population": "19,581",
    "Area": 4069,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Natrona",
    "StateorEq": "Wyoming",
    "Population": "79,955",
    "Area": 5340,
    "StatisticalArea": "Casper, WY Metropolitan Statistical Area"
  },
  {
    "CountyorEq": "Niobrara",
    "StateorEq": "Wyoming",
    "Population": "2,467",
    "Area": 2626,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Park",
    "StateorEq": "Wyoming",
    "Population": "29,624",
    "Area": 6943,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Platte",
    "StateorEq": "Wyoming",
    "Population": "8,605",
    "Area": 2085,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sheridan",
    "StateorEq": "Wyoming",
    "Population": "30,921",
    "Area": 2523,
    "StatisticalArea": "Sheridan, WY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Sublette",
    "StateorEq": "Wyoming",
    "Population": "8,728",
    "Area": 4882,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Sweetwater",
    "StateorEq": "Wyoming",
    "Population": "42,272",
    "Area": 10426,
    "StatisticalArea": "Rock Springs, WY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Teton",
    "StateorEq": "Wyoming",
    "Population": "23,331",
    "Area": 4008,
    "StatisticalArea": "Jackson, WY-ID Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Uinta",
    "StateorEq": "Wyoming",
    "Population": "20,450",
    "Area": 2082,
    "StatisticalArea": "Evanston, WY Micropolitan Statistical Area"
  },
  {
    "CountyorEq": "Washakie",
    "StateorEq": "Wyoming",
    "Population": "7,685",
    "Area": 2240,
    "StatisticalArea": ""
  },
  {
    "CountyorEq": "Weston",
    "StateorEq": "Wyoming",
    "Population": "6,838",
    "Area": 2398,
    "StatisticalArea": "Gillette, WY Micropolitan Statistical Area"
  }
];

export function findCountiesByName(name) {
  return counties.filter(county => county.CountyorEq.toLowerCase().includes(name.toLowerCase()));
}

export function findCountiesByState(state) {
  return counties.filter(county => county.StateorEq.toLowerCase().includes(state.toLowerCase()));
}

window.countiesJS = {
  findCountiesByName, findCountiesByState
}