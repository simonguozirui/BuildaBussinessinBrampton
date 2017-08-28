# BuildaBussinessinBrampton

## Inspiration
Brampton is a diverse and booming city with a population of over 600,000, making it the ninth largest city in Canada. Brampton’s annual growth of 13.3% outpaces Toronto at 4.5% or Montreal at only 3.3%, meaning new businesses are popping up left and right. These new store owners will need to find an optimal location of for the business to grow. To do this, they’ll need statistics on business demand, population density, target demographic, and other applicable statistics. Enter Build a Business in Brampton (BBB)

## What it does
Build a Business in Brampton’s (BBB) objective is to help emerging businesses find an optimal location to build their business using map data and metadata from Esri Tech’s ArcGIS and Brampton Open Data.
For user:
1. User inputs their business type, employee number, budget.
2. An algorithm would analyze the input data and matches them through one of the available rental spaces.
3. A section on the right will show analysis of the recommendation of the place to open your business, with several aspects and reasons, as well as link to street view
4. The user can find all kinds of data and information that provides different aspects of the business neighborhood.
5. The user can filter layers of data and click data end points for more organized and detailed data.

For provider:
1. Rental Space provider can post their space through a form.
2. Data from the form would be shown on the form instantly. Display as stars that represent available rental space, as well as added to the data matching array.

### How we built it
#### Front End
We use react-bootstrap. 
#### Back End
We use firebase database, esri-js-api, google-maps-api, javascript for data processing

## Challenges we ran into
Initially, we were unsure about how to create value from the main API which we used. Having an abundance of data on Brampton gave us many potential ideas, but we came to the conclusion that applying the data to determine where to start a business in Brampton would be. As mentioned earlier, Brampton is the fastest growing city in Canada, and there fore using data to aid in the process of starting new and upcoming businesses seemed the most viable and disruptive option.


## What we learned
We accessed spatial data using GeoHub, in addition to layers of filters with the database provided by ArcGIS. As well, we learned how to program using Arcade to create street view samples of potential areas of interest for Brampton business owners.

## Mentor and Mentee Relationship

Mentees: Arif and Steven were immersed to the rigorous nature of hackathons, under the mentorship of Simon. They were also able to significantly improve their programming skills under Simon, as he pushed them to get out of their comfort zone and try out new ideas and processes.

Mentor: Simon It was a challenging task because I never worked with Esri or Geohub Brampton data, and my mentees are pretty new to web development. I have to push the project in frameworks that my mentees understand as well as pushing them to learn more skills at the hackathon. We did not finish all the features (data analysis), but I am still really proud that we finish the data processing and UI UX design.


## What's next for BBB?
Due to time constraints, the BBB team wasn't able to finish data analysis part of the project.
In the future, BBB will provide more data and a more algorithmic method to keep providing business owners and entrepreneurs with uniquely crafted business solutions and recommendations for their business. We will provide more in-depth analysis that combines all kinds of information that GeoHub provides. More features such as pricing comparisoin and competitve analysis could be performed on the platform and its dataset.
