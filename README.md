Crager Brewery Interview Project
Part: Frontend
Frameworks used:  React, Redux, SASS, Pigeon Maps

End goal:
A single page application (SPA) which allows a user to search for breweries from Open Brewery DB.

Design:
Prompt suer to select an US city
Search Bar for brewery names
Display breweries by 25 count, inside of a table.
Each row consists of Name, Type, Address (Street, City, State, ZIP), Website, and map

Comments:
React Redux changed significantly from prior use.  The single page for actions, reducers, middleware, and api calls over splitting them and using a split state saves memory, but took some time to understand.

Google Maps, and Bing Maps proved to be difficult to use.  Google maps due to how expensive it was to be, and how out of date and outside the philosophy of React the implementation was to be.  Bing Maps as Microsoft developed for the .Net frameworks so little information on React implementation.  Thus ended up going with Pigeon Maps as an easy solution to grab maps without fusing around with the two prior due to time constraints.

The maps not correctly displaying objects seems to be tied to the coordinates => The coordinates determine the style, which caused an error.  Ran out of time to debug and fix.

Spent time learning Socket.IO due to a misunderstanding for one of the stretch goals.  Thought I needed to establish a membrane around the application.  This is fairly standard practice with defense in depth and ensuring proper delegation of tasks.  Typically used AWS API Gateway with serverless, but thought I would have time to host both and figure out the implementation.  Did not have time.

Naming convention:
I have used multiple, and keep iterating to try something new.  In this case, each component has an "Index" element as the base for the component.  For specific redux parts, it was named "redux-part" + "component" as to keep things in alphabetical order and for ease of access.  For example, brewery component interacts with the sliceBrewery.  
Thought the search component would behave differently and have it's own set of redux afflicated stuff due to old understanding, so kept it sparate at first, then kept it separate as it is a different component.  If more search functions are added then, the search bar will be made agnostic to the components and instead look at what is currently active.

Some code debt remains with refactoring and enhancing, but do not have the time for it.

Requested an extension due to illness.
