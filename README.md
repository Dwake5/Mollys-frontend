## Mollys Pet & Home Care

This project is for the business Mollys Pet & Home Care (Molly's). I am creating thier first website.

It has various pages and features.

Currently it will have a permanent Header with logo, name and quote.

A left held navbar, which will lead to:

1. The Home Page

2. Services and Prices

3. Photo's

4. Business Recommendations

5. Customer reviews

I created the design, color and layout, whilst adjusting to feedback from the client. 

I have created this project on my own and from scratch. 

## User Stories

We have tried to design every feature and page with a goal in mind, namely to help the business grow and generate revenue. 

This is the homepage, the first page seen when navigating to the website. 

<img src="/screenshots/Homepage.png" alt="Homepage" width="65%" height="65%" />


## Permanent Header and Sidebar

There is a logo top left, to establish the brand.

Underneath the Title is the Quote of the Day feature. This adds flavour to the page, shows some of the owners personality and changes the page each visit slightly, encouraging potential clients to repeat visit. Under the hood this chooses a random quote each day but never the same one consecutively.

Under the logo, there is a navigation bar. On hover, it gets a darker background, is bold and transitions slowly to the right.

We then have a contact me section, this has a phone number, an email address, which when clicked opens up an email template. Then hyperlinks to both the business's facebook and instagram page. 

Then there is the Whats New? feature, the same kind of idea as the quote of the day this allows the client to update viewers on what has been going on or any new news. 

We can see in the background a repeating image of paws and bones, enforcing the pet centered website.


## Signing In

Having visited other relevant websites during the research phase, many of them had a sign in button, with no sign up capabilities. This was found to be annoying, a poor use of time, and unproffesional. Wanting a sign in feature my proposed workaround was to have a large invisible button at the top right, and to further decrease the chance of a visitor accidently clicking it, it requires a double click to open. 
If you look at the top right of the heading, you will see a blank part, this is where the sign in button is located, this will open a form to sign in. 
When signed in you will see this instead: 

<img src="/screenshots/SignedIn.png" alt="Now signed in" width="65%" height="65%" />


When signed in, lots more features are included and visible to the user. Including: Adding new pictures to the gallery. Changing the news. Seeing new customer reviews, with the option to show, hide or delete them. 


## HomePage

The homepage has a main block with a quote at the top with accompanying icon. Then various bits about the business owner, their interest's, achievements and motivations. On the right of the screen are various pictures of the owner to help build a relationship and to show proffesionalism. 

<img src="/screenshots/Homepage2.png" alt="Homepage bottom" width="65%" height="65%" />


It then has a picture and some great quotes from other customers. With a link at the bottom to go to the dedicated customer reviews page. 


## Services & Prices

This page first shows a list of the area's the owner operates in. 

<img src="/screenshots/Areas.png" alt="Areas operated in" width="65%" height="65%" />

It then has three boxes for each of Dog Walking, Pet Visits and House Sitting. These display information about the service, optional extra's, how they will benefit a customer, prices and then some relevant pictures.

<img src="/screenshots/Service.png" alt="Dog walking div" width="65%" height="65%" />


## Gallery

The Gallery portrays a range of photo's of the client, many of them walking dogs, looking after other customers pets and homes, and various other animals she looks after. 

<img src="/screenshots/Gallery.png" alt="Gallery" width="65%" height="65%" />


Pictures zoom in on hover and when clicked are displayed in full screen in a lightbox, with the user being able to zoom in and out.

At the top is a show slideshow button, this will loop through each of the images every 3 seconds. Here is a picture from the slideshow in what is called a lightbox.

<img src="/screenshots/Lightbox.png" alt="Cat in lightbox mode" width="65%" height="65%" />


These were added to help visitors build a connection with Molly, see that she has various other clients and experience, and that she is dedicated and has performed a range of other roles.


## Suggested Businesses

The next page is Suggested Businesses. This page shows four other businesses that Molly works and partners with. There is information about each business, an address, and clickable contact information and links.

<img src="/screenshots/Businesses.png" alt="2 other businesses" width="65%" height="65%" />

The other businesses also promote Molly, in a mutually beneficial exchange. 


## Customer Reviews

Lastly we have the customer reviews page. This allows visitors to leave a review on any of the services Molly provides.

When researching we found a few similiar businesses that had a list of reviews, but none which also allowed you to leave one. We thought that the reviews on there page could be fabricated, so we built a review feature to show visitors these were legitimate.

Each review is structured with a relevant image at the top left, i.e. a dog for dog walking, house for housesitting. The main review in the center and the name of the person bold in the bottom right. The last name has been condensed for visitors to increase annoymity for the reviewer. Reviews are also truncated if there total length exceeds 400 characters, if they have been there is then a show more/show less button as can be seen on the first review, this is top stop one long review taking up the page.

For each service there are two related pictures, these will cycle through to help change up the page. You can see below the two dogs pictures are different, if someone posted another dog walking review, that would then have the first image again.

<img src="/screenshots/Reviews.png" alt="Review page" width="65%" height="65%" />

A few issues arose when giving anyone the ability to post to a business website. People could leave bad reviews, spam the account, or troll by other means. The workaround for this was for reviews to be saved to a database, but be hidden by default until Molly approved them. When signed in you will see the page change in a few ways:

<img src="/screenshots/Reviews2.png" alt="Reviews page sing in" width="65%" height="65%" />


The first three comments are hardcoded, to prevent people from seeing a blank page, they were taking from other sites and are real reviews. You can see there are now more reviews as all are being shown. For each one Shown/Hidden can be toggled, there is also a delete button, which when clicked leads to a shifted 'Are you sure?' button, which I have showcased on the bottom review. This is to help prevent the accidental removal of reviews. Names are also now in full. 

At the bottom is a form to leave reviews, with placeholders, a drop down for dog walking, pet visits and house sitting. 

<img src="/screenshots/Form.png" alt="review form" width="35%" height="35%" />

I created my own error handling system to ensure names, areas and the review were of sufficient length, and that names and areas were text only. 

Upon entering incorrect data, you will see the following:

<img src="/screenshots/Form2.png" alt="bad data" width="35%" height="35%" />

When a review is submitted, Molly is automatically emailed the review with a message saying who its from and where they live.


## Responsive Web Design

This website has been created with all screen sizes in mind, PC, Tablet and Phone. This meant testing for all screen sizes, horizontal and landscape, and making sure the page kept to a high standard.

There is a breakpoint at width 1550px

Mobile will be for 720px width or less.

When on mobile the screen changes radically and will look like this: 

<img src="/screenshots/Mobile.png" alt="mobile size screen" width="65%" height="65%" />

You can see that the nav div has been moved to the top and condensed, the sign in button has been removed for more space, and the contact div is now a footer. When on mobile, the phone link will automatically start a phone call. 

When on a landscape device, probably mobile, the page will look like this.

<img src="/screenshots/MobileLandscape.png" alt="landscape mobile" width="65%" height="65%" />

The contact info and news div, looked poor when the screen cut them off slightly and with no way to scroll on this the solution was to only display them if the entire element could fit on screen. 

The height of the news div changes based on the length of the news message, this is also accounted for in the code. 


## To Do

Change where the news form is, its not user friendly at the moment.

A way for owner to add pictures. Drag around would be good. 

Track how many times a business link has been clicked on. (google analytics)

Create piechart for user, for where people live.

Make review form much better for mobile users, very hard to see at the moment.

Make heading less high for mobile users. Looks a little bit squashed.

Important! When clicking the form on mobile, hide the header and footer. --
Dont show header if height is under ~400

## Completed

Made mobile way more friendly and asthetic.

Added margin-right to the hyperlinks for large screen.

Increased size of review form text in the select.

Shadow was not completely filling around main about page - fixed.

Title is bad around 1000 width - fixed. 

Slideshow 2 seconds interval if on mobile, 3 otherwise.

Important scroll to top on every page change.

cutSidesOfText doesnt work correctly with a single letter - fixed.

The form remembers data entry on page change and refresh, decided to use sessionStorage, not local, meaning that it will purposefully forget the data on page close. 

Added a function -cutSidesOfText- which sanitizes data and removes potential error messages. Basically decreases chance of bad data on the form.

The Review link on homepage scrolls to the top.

Reviews now say { Name, Area } to add personality.

Added some more error handling.

Made error messages smaller and less margin.

Have three pictures left to right on mobile.

Move book readings to the left.

Look into EM. (gone with @media screen)

Centered insta/fb links on contact div. 

When using a mobile, can now click the phone number to make a call. 

On mobile, contact div is condensed and sticks to the bottom.

Changed news input to textarea.

Fixed review names, was not formatting properly, required .trim().

Moved pet visit pricing table to the left as the (twice) made it shift over.

Various fixes to make mobile/smaller screen size work better.

Added more images vertically on mobile.

Center pictures on home page.

User can update whats new.

Center the heading.

Improved logo.

Change font now using Raleway for body, Poppins for headings.

Improve gallery button.

Finish off about me - quotes, 2 hands, styling.

Confirm button for delete comments.

Hidden/ show is now saving.

Review truncation.

Review form validation.

Double click to sign in.

Fix gallery loading slowly. 

Fix gallery being blank on refresh.

Have instant mail link like on happy tails.

Make navbar grey slightly less wide.

Modal for gallery pictures. Arrows left and right 

Expand on about section more.

Images now auto display from gallery folder.

Make top left corner match up better.

Move diamond inline with text.

For quote of the day use local storage.

Use flexbox to style the business section with div then picture followed by picture with div and repeat. 

Expand on about section.

Change Logo.

Moving animation at the top. 

Make the gallery, pictures all squares, 4 per row. 

Pictures bigger on hover. 

Pictures expand on hover. 

Border around contact me.

Bold the hyperlink of the page user is on.

Phone icon next to phone number.

Add grey rounded border on hover to links.

Make links black.

Add Paws in front of each hyperlink. 

Add each page - [services, photos, contact info, 
businesses, reviews]

Make it live for testing/viewing

Find a way to link the app to Mollys phone, for added 
functionality. Work around found.

Get house style for styled components working.

Made fb/insta hyperlinks. Made 40px picture margin not clickable, probably needs some more though, maybe 5px?

Got router working, pages now have appropriate url and can navigate to them.

Add Router, so it shows what page it is on.
