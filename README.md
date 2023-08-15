### How to run the application?
Open the base directory in the terminal and run the following commands: npm start
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

1. There are two routes available "/" and "/detail/:movieID" 
2. In route "/", if there is an optional parameter query present, the application makes an API call to search for the movie name in the query.
3. From the list of movies, we can click on a movie card and get directed to "/details/:movieID"
4. In route "/details/:movieID", we can see details of a given movie
5. Both the routes contain a home button in the header, which redirect to route "/" (without query parameter)

Following are some of the screenshots from the application hosted at https://gsiv-23-vinay-suyal.vercel.app/
1. Home Page (Containing List of movies)
![image](https://github.com/vinaysuyal/GSIV23_Vinay_Suyal/assets/47267619/0df628ae-ab3f-4436-affb-ef1086daa8f2)

2. On searching for a movie and pressing enter(see URL in the screenshot)
![image](https://github.com/vinaysuyal/GSIV23_Vinay_Suyal/assets/47267619/eff1d513-9dac-4fa0-9a1d-3e7a86a07ad2)

3. On Clicking on a movie card, we get routed to details page with ID of that movie(see URL)
![image](https://github.com/vinaysuyal/GSIV23_Vinay_Suyal/assets/47267619/2467d891-94d5-4311-8aaf-996316a530b4)

### Here are some of the features of the app:
Displaying Movie Cards:
On the List page, I've implemented the display of upcoming movies in movie cards. Each movie card showcases the movie media, title, rating, and a truncated description.

Infinite Scrolling / Paging:
I've incorporated either infinite scrolling or paging (buttons for navigation) to allow users to explore the list of upcoming movies beyond what's initially visible.

Search Functionality:
I've integrated the search API, enabling users to search for movies. Search results are displayed on the List page itself. Upon canceling the search, the page reverts to showing all movies as requested.

Navigating to Details Page:
Clicking on a movie card leads users to the Details page, where comprehensive movie details are presented, including title, rating, year of release, length, director, cast, and description. Users can return to the List page using either the browser's back button or the home button on the Details page.

Responsive Design:
The app's design is responsive and optimized for a minimum width of 512 pixels, ensuring a consistent and user-friendly experience across various devices and screen sizes.

Routing:
I've integrated a common routing library to manage navigation between the List and Details pages.

Unit Testing:
I've written comprehensive unit tests to ensure the functionality and reliability of critical components and features. These unit tests cover scenarios such as rendering components, simulating user interactions, API calls, and state changes. By incorporating unit testing, I showcase my proficiency in creating robust and maintainable code.


### What more could be done?
1. Handle movie details when certain information like length, cast information, director, etc are not available.
2. Include Error boundaries for routes that are not present or when resources are not found.
3. A better fallback mechanism when the list has yet not been loaded.



