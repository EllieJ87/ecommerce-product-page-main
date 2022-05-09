# Testing

## Contents

1. [Functionality Testing](#functionalitytesting)

   - [OnLoad Display](#onloaddisplay)

   - [Footer Social Navigation Links](#footerlinks)

     - [Home Icon](#homeicon)
     - [Email Icon](#emailicon)
     - [Question Icon](#questionicon)
     - [Audio Icon](#audioicon)
     - [Button Icon](#buttonicon)
     - [LinkedIn Icon](#linkedinicon)
     - [GitHub Icon](#githubicon)

   - [Game Container](#gamecontainer)
     - [Image Container](#imagecontainer)
     - [Text & Option Containers](#textcontainers)

2. [Testing User Stories](#testinguserstories)

   - [As a Text Adventure Game Fan](#textgamefan)
   - [As a User returning to the Site](#returningfan)
   - [As a User who does not play Text Adventure](#newfan)
   - [All Users](#allusers)

3. [Responsive Design Testing](#responsivedesigntesting)

4. [Performance Testing](#performancetesting)

5. [Validation](#validationcode)

   - [HTML](#htmlcode)
   - [CSS](#csscode)

6. [Bugs](#bugsfixes)

# <a name="functionalitytesting">Functionality Testing</a>

Browsers tested: Google Chrome, Mozilla Firefox & Opera.
The devices used in this testing include Samsung S10 v.Android 10.

## <a name="onloaddisplay">OnLoad Display</a>

Expected: modal to load on screen start
Testing: when browser is refreshed, link is clicked, html is opened
Results: modal loads

Expected: to not dismiss the modal when clicked outside of the modal & no ‘X’ button is present
Testing: clicked outside of the modal
Results: modal is not dismissed making the user use the input field to start the game

Expected: input field should not be left blank when user clicks on the ‘descend’ button
Testing: added validation so the user needed to input a ‘name’ before able to proceed
Results: this ran an error but was not closing the modal box
Testing: added an event listener onto the button, this was logged on the console to see if this input worked
Results: displayed message to console to state the button was clicked
Testing: added to remove the modal after the button has been clicked
Results: modal was removed
Bug: modal fade back hidden was still visible
Testing: added this class into the remove modal click event to remove this
Results: modal and background is removed

Expected: when hovering over the ‘Descend’ button to change background and text colour
Testing: tested by hovering over the ‘Descend’ button
Results: ‘Descend’ button changes background colour and text colour

Expected: when ‘Descend’ button is clicked to take the user to the start of the game
Testing: tested by clicking the ‘Descend’ button
Results: modal is removed, and the game container is displayed

### Responsiveness

Expected: modal, text, input field and button to be responsive to screen size and width
Testing: through different screen sizes and Google Chrome Dev tools
Results: modal, text, input field and button are all fit to screen size and width

## <a name="footerlinks">Footer Social Navigation Links</a>

### <a name="homeicon">Home Icon</a>

Expected: when hovering over 'home' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: clicking on 'home' button pops up modal to take the user back to the beginning
Testing: tested by clicking 'home' icon
Result: Opens ‘home’ modal
Expected: to be able to dismiss the modal when clicked outside the modal
Testing: clicked outside of the modal
Results: modal is dismissed and returns user back at the same point it was clicked

Expected: when hovering over the ‘X’ icon to change colour
Testing: tested by hovering over item
Results: ‘X’ changes colour on hover

Expected: when click on the ‘X’ icon to close the modal
Testing: tested by clicking on the ‘X’
Results: modal is closed and returns user back at the same point it was clicked

Expected: when hovering over the ‘Home’ button to change background and text colour, when user hovers out to return to original pre-set colour
Testing: tested by hovering over item
Results: ‘Home’ button changes colour of text and background colour on hover

Expected: when ‘Home’ button is clicked to remove modal, main game container and display end of game scenario
Testing: tested by clicking the ‘Home’ button
Results: modal, and game container is removed, text is displayed with a ‘refresh’ icon to take the user back to the main game

Expected: when hovering over the ‘refresh’ icon to change colour, increase size and rotate continuously when user stays hovered over, this stops when the user is not hovering over the icon
Testing: tested by hovering over the ‘refresh’ icon
Results: ‘refresh’ icon changes colour, increases size and rotates on hover

Expected: when clicked on ‘refresh’ icon to refresh the browser page
Testing: tested by clicking the ‘refresh’ icon
Results: text and ‘refresh’ icon is then removed and the browser is re-loaded back to the main game screen to re-play again (with new name)

### Responsiveness

Expected: home modal, text, and button to be responsive to screen size and width
Testing: through different screen sizes and Google Chrome Dev tools
Results: modal, text and button are all fit to screen size and width

Expected: ending home text and ‘refresh’ icon to be responsive to screen size and width
Testing: through different screen sizes and Google Chrome Dev tools
Results: ending home text and ‘refresh’ icon are all fit to screen size and width

### <a name="emailicon">Email Icon</a>

**_Removed Temporarily will come back to re-develop_**

Expected: when hovering over 'email' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: clicking on 'email' button pops up modal to display a contact form so the user can submit their feedback / contact me if they wish regarding the site
Testing: tested by clicking 'email' icon
Result: Opens ‘Contact’ modal

Expected: to be able to dismiss the modal when clicked outside the modal
Testing: clicked outside of the modal
Results: modal is dismissed and returns user back at the same point it was clicked

Expected: when hovering over the ‘X’ icon to change colour
Testing: tested by hovering over item
Results: ‘X’ changes colour on hover

Expected: when click on the ‘X’ icon to close the modal
Testing: tested by clicking on the ‘X’
Results: modal is closed and returns user back at the same point it was clicked

Expected: when hovering over the ‘Submit’ & ‘Reset’ button to change background and text colour, when user hovers out to return to original pre-set colour
Testing: tested by hovering over item
Results: Submit’ & ‘Reset’ button changes colour of text and background colour on hover

Expected: when ‘Submit’ button is clicked an alert to show the user the form has been submitted & received, contact form is reset and modal closes
Testing: clicked on the ‘submit’ button to submit the form  
Results: alert message to prompt the use that the form has been submitted

Expected: form should not submit without all fields completed
Testing: tested 1 input at a time to see if the validation has worked
Result: form has been submitted with an alert message

From this testing
Form is only allowing 1 input to be submitted rather than both, also new bug where once the user clicks the submit button this still submits the form.

Expected: when ‘Reset’ button is clicked this should empty all fields of information
Testing: clicking the ‘reset’ button to clear the form
Result: form is cleared and is cleared when the user re-opens the modal again

### Responsiveness

Expected: contact modal, text, input fields and button to be responsive to screen size and width,
Testing: through different screen sizes and Google Chrome Dev tools
Results: contact modal, text, input fields and button are all fit to screen size and width landscape and smaller screen has a scrollable pre-fixed display built in by using bootstrap

### <a name="questionicon">Question Icon</a>

Expected: when hovering over 'question' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: clicking on 'question' icon pops up modal to explain what their mission objective is for the game and how to play
Testing: tested by clicking 'question' icon
Result: Opens ‘How to Play’ modal

Expected: to be able to dismiss the modal when clicked outside the modal
Testing: clicked outside of the modal
Results: modal is dismissed and returns user back at the same point it was clicked

Expected: when hovering over the ‘X’ icon to change colour
Testing: tested by hovering over item
Results: ‘X’ changes colour on hover

Expected: when click on the ‘X’ icon to close the modal
Testing: tested by clicking on the ‘X’
Results: modal is closed and returns user back at the same point it was clicked

Expected: when hovering over the ‘Ready?’ button to change background and text colour, when user hovers out to return to original pre-set colour
Testing: tested by hovering over item
Results: ‘Ready?’ button changes colour of text and background colour on hover

Expected: when ‘Ready?’ button is clicked to remove modal, returns user back at the same point it was
Testing: tested by clicking the ‘Ready?’ button
Results: modal is dismissed and returns user back at the same point it was clicked

### Responsiveness

Expected: home modal, text, and button to be responsive to screen size and width,
Testing: through different screen sizes and Google Chrome Dev tools
Results: home modal, text, and button are all fit to screen size and width landscape and smaller screen has a scrollable pre-fixed display built in by using bootstrap

### <a name="audioicon">Audio Icon</a>

Expected: when hovering over 'audio' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: when ‘audio’ icon is clicked sound to be enabled and icon to change to ‘audio with sound’ icon
Testing: clicking the audio volume sound
Results: sound is logged in the console and is played for the user; the icon also changes to a ‘volume on’ icon

Expected: when ‘audio’ icon is clicked again sound to be muted and ‘audio muted’ icon is to be displayed
Testing: clicking the audio volume sound again
Results: sound is logged in the console and sound is now off, the icon changes back to ‘volume off’ icon

### <a name="buttonicon">Button Audio</a>

Expected: when audio is enabled by the user all buttons make a sound
Testing: adding a generic class to all clickable buttons and clicking every button when the sound is enabled
Results: all buttons play a ‘click’ sound

Expected: when audio is disabled (automatically on page load) or when the user wishes to turn the sound off buttons do not make a sound
Testing: clicking on all buttons and toggling between the sound being on/off to see if this works
Results: all buttons do not make a sound if the volume is off

### <a name="linkedinicon">LinkedIn Icon</a>

Expected: when hovering over 'LinkedIn' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: when clicking on the ‘LinkedIn’ icon takes the user to my LinkedIn page
Testing: tested by clicking on the ‘LinkedIn’ icon
Results: link takes user to [LinkedIn](https://www.linkedin.com/in/ellie-judge-45b00689/)

### <a name="githubicon">GitHub Icon</a>

Expected: when hovering over 'GitHub' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: when clicking on the ‘GitHub’ icon takes the user to my GitHub repo page
Testing: tested by clicking on the ‘GitHub’ icon
Results: link takes user to [GitHub](https://github.com/EllieJ87)

## <a name="gamecontainer">Game Container</a>

### <a name="imagecontainer">Image Container</a>

Expected: image is to load and change on different scenarios
Testing: <img> tag first
Results: this was not responsive had to amend the sizing which became problematic on each page load and screen size
Fix: change the <img> tag to a background image so this could be contained inside the element
Final Results: image changes on different sizes and is responsive to different screen sizes

### <a name="textcontainers">Text & Option Containers</a>

Expected: game play text and options are displayed when user starts the game  
Testing: after clicking the ‘Descend’ button on main page load
Results: game play text and options are displayed

Expected: when hovering over and ‘Option’ button to change background and text colour, when user hovers out to return to original pre-set colour
Testing: tested by hovering over ‘Option’ button
Results: ‘Option’ button changes colour of text and background colour on hover

Expected: when option is selected the next question shows
Testing: click an option to proceed
Results: next option is displayed

### Responsiveness

Expected: to be displayed and re-sized across different screen sizes and width
Testing: re-layout the smaller screen and landscape screen for more visual readability and to make the most of the available space
Results: multiple testing and layout plans to achieve the look, smaller screens have text and buttons stacked so they take up the full width

## <a name="testinguserstories">Testing User Stories</a>

I used my user stories and documented each of the steps that each user would need to accomplish what they have stated. Below is the link to the document that contains this information.

### <a name="textgamefan">As a Text Adventure Game Fan</a>

Expectation 1: I want to play the game to find out which ending scenario I would get depending on my choices throughout the game play.
Testing: I played the game through once to get my first outcome.
Result: see screenshots of one of my final first play through once the story mode is completed: [one](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play1/play1-1.jpg) | [two](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play1/play1-2.jpg) | [three](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play1/play1-3.jpg) | [four](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play1/play1-4.jpg) | [five](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play1/play1-5.jpg) | [six](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play1/play1-6.jpg).

Expectation 2: I want to be able to interact via social media through the social media links in the footer.
Testing: check footer to see links to social media included to open in new tab easily.

Result: ![linkedIn](assets/readme_docs/testing/social-links.jpg) | ![GitHub](assets/readme_docs/testing/social-links-1.jpg).

Expectation 3: I want the site to have images from my own design to help portray the game play and experience through the option scenarios.
Testing: played through the game to see different imagery / character change.

Results: imagery changes: [one](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/shot-1.jpg) | [two](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/shot-2.jpg) | [three](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/shot-3.jpg).

Expectation 4: As I want to explore different options / choices to see which ending I would end up with.
Testing: play the game to see different ending options.

Result: [one](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play2/play2-1.jpg) | [two](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play2/play2-2.jpg) | [three](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play2/play2-3.jpg) | [four](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play2/play2-4.jpg) | [five](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play2/play2-5.jpg) | [six](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/play2/play2-6.jpg).

Notes: As you can see through this second play through I found that image 4 had no image and would also not link to the next playable option. This then made me re-check all the images, button links and locations to make sure that these all pulled through to the next scenario. This was good test to run through and catch any more potential link errors.

Expectation 5: I want the text adventure game to reflect the theme and story mode, so this was more captivating
Testing: researched space theme, control boards and scenery
Result: ![Moodboard](assets/readme_docs/moodboard/moodboard-img.jpg)

### <a name="returningfan">As a User Returning to the Site</a>

Expectation 6: I want to be able to be able to play multiple times and see what endings I end up with based on my decisions.
Testing: Play the game through once and make note of the ending then try and change my options for a different ending
Result: Adding a ‘refresh icon’ so the player can easily refresh the page again to see what other endings they can get!

![Refresh Icon](assets/readme_docs/testing/ending-refresh.jpg)

### <a name="newfan">As a User who does not play Text Adventure</a>

Expectation 7: I want to see a character guide and any additional imagery to help capture the game asthetics, this also made making my decisions more engaging and interactive

Testing: Checked all options that represents the character, imagery or event that was happening at that moment. Checked all endings and made sure the decrement of the ammo, fuel and health impacted at the correct time and also run the right ending theme.

Conclusion: The full decrement of the ammo, fuel and health had to have another 'empty / dud' scenario so this would take count the decrease correctly and run the correct ending. For the 'OR' statements this was not needed and could run without having a 'empty / dud' scenario.

Result: Run through all option endings to make sure that all endings were functional and run the correct ending.

Expectation 8: I want to see a help section to get information on how to play the game.

Testing: Trigger help modal from each page.

Result: help modal triggers as expected on each page.
[help](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/help.jpg)

### <a name="allusers">All Users</a>

Expectation 9: I want the site to be easy to navigate on mobile primarily so I can complete it on the go and this also makes it easier to share with others.

Testing: Tested all pages on different mobiles portrait and landscape.
Development: When developing the site first this was scrolling naturally, this then developed where the smaller screen sizes would not scroll, therefore cutting off the game play.

Results: Add scroll to smaller media queries to enable this feature on both portrait and landscape screen sizes.

Expectation 10: I want the ability to turn on and off the audio.

Testing: Pressed the audio button to turn ‘On’ and ‘Off’ the audio, ran through all buttons that had the '.audio' class to enable the sound.

Result: Audio turns on and off when the volume button is toggled between on and off. All buttons targeted with this class also plays/does not play a sound

Expectation 11: I want the text adventure game to be slick, so each scenario / option is displayed one at a time to prevent scrolling and general clutter.

Testing: Click through game to ensure each text, imagery and option is visible at each scenario option.

Result: Game play works with each change of imagery, text and options.

**_Still in Development_**

Expectation 12: I want to be able to contact the site owner with feedback

Testing: click contact icon to open contact form modal

Result: Contact page has feedback: [Contact Form](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/contact.jpg)

### <a name="responsivedesigntesting">Responsive Design Testing</a>

I used Google Chrome's Development tools and [Mattkersley](http://mattkersley.com/responsive/) Responsive Design site to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes. I also tested my website on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

I used my own phone to test the orientation and how the site differs from portrait to landscape and to get a feel on the user experience.

To test my whole website, I went through each page, feature by feature, and documented the results on a spreadsheet. The spreadsheet also documents any responsive features and confirms that they work and appear as intended on different screen sizes. The link to the spreadsheet it below:

Responsive testing-checklist [here](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/testing-checklist.pdf)

## <a name="performancetesting">Performance Testing</a>

[Lighthouse Report Result](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/lighthouse.jpg) - Main issues to bring down the performance score were things out of my control - eg. Bootstrap links (error unused CSS) and caching issues (requesting http cache-control)

## <a name="validationcode">Validation</a>

### <a name="htmlcode">HTML</a>

W3C testing completed for: index.html
No other issues with W3C Validator on Markup except for the below two warnings:

**Warning message**: <section id=”text-container”> required a heading element, this is empty as this information gets inputted from the JavaScript file.

**Warning message**: <section id=”buttonBox” class”nested btn”> required a heading element, this is empty as this information gets inputted from the JavaScript file.

_Fixed Errors_:

Error Bad Value: On favicon images: these were raised an error as there was a spacing in the file path, all favicon icons were all corrected and not throwing an error message.
Error Bad Value: On the form action attribute as this was left blank, this was amened to have the “#” symbol, this was corrected and not throwing an error message.
Error Attribute: On textarea as ‘type=”text”’ was added, this has been removed, no longer throwing an error message.

## <a name="csscode">CSS</a>

W3C testing completed for: main.css

_Error_:
Testing completed with one error on the end container, there was no minimum declaration on the height of the grid-row as this was set to: minmax(auto). I then corrected this to be set to minmax(100px, auto) which cleared the error and no more further errors were found.

## <a name="bugsfixes">Bugs</a>

**Welcome Modal**

- Issue: input was not validating correctly, the value input was duplicated thus not pulling through the correct value from the input field.
- Testing:

  1. Removed the duplicated input.value for the 'playersName' this was tested in the console directly and returned the value.

- Results: Console log correctly displayed the correct input value.

- Issue: From the input validation, the scenario was pulling undefined at first input, when this re-linked back to the start again the input was then valid and no longer showing undefined
- Testing:

  1. Changed where the 'advanceTo(scenario.scene1)' this was initally not being called in the correct position.
  2. Amended to be called directly after the button was clicked and linked to the start of the game.

- Results: Displays the users input value through out the game.

**Main Game**

- Issue: page was not scrolling - was not an issue prior
- Testing:

  1. Added 'overflow: scroll;' to html body to ensure page is scrollable on different decives

- Results: page is now scrollable on different screen sizes

**Main Background**

- Issue: Image not showing on the main html page
- Testing:

  1. Added background image to the main.css file – this did not link through came up with error “failed to load resource the server responded with a status 404”
  2. Add file direct to html inline body tag to test if this worked

- Results: background image is now visible in the main html body

**Game container**

- Issue: main game container did not fit into the outer container when the screen is resized / reduced
- Testing:

  1. Tested on boot strap grid system– was still not re-sizing and having the right formation
  2. Changed layout to a css grid template

- Results: amend the layout to be in a css grid layout so this was easier to manipulate and move containers around

**_Issues still unresolved (due to timing)_**

1. When checking the main game on my phone, settings on my phone is in dark mode, with this setting the div containers for the states the 'place holder' numbers were visible and could be seen.
   [Image One](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/error/error-1.jpg) | [Image Two](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/error/error-2.jpg)

This is not as asthetic that I like I am going to look into this feature and see how to amend this going forward and test across dark and light mode on mobiles. Desktop Opera is in dark mode and this was not showing up as a design asthetic issue.

Re-checking this on Google Chrome and Opera desk top this was not a problem:

[Image One](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/error/error-3.jpg) | [Image Two](https://github.com/EllieJ87/ranger-game/blob/master/assets/readme_docs/testing/error/error-4.jpg)

**Text / Button Container**

- Issue: The text / buttons and fuel and missiles do not fit within the main game container
- Testing:

  1. Tested on bootstrap – was still not re-sizing and having the right formation
  2. Changed layout to a css grid template

- Results: amend the layout to be in a css grid layout so this was easier to manipulate and move containers around

**Image container**

- Issue: Image does not fit or re-size in the main container
- Testing:

  1. Targeted wrong element, as JS was creating the image nothing was inputted in HTML just the container
  2. Added a class to the image tag to amend the image resizing issue, this was still not resizing the image
  3. Tested this as a background image to see if the sizing is resized on different screen sizes

- Results: changed the image to be a background image url so this is easier to contain and cover the image container through different screen sizes

**Contact Modal**

- Issue: When the user clicks inside the input field this removed the contact overlay.
- Testing:

  1. Added JQuery to make the overlay static so this would not be removed
  2. Added a ‘X’ so the user can close the overlay
  3. This overlay created difficulties with re-sizing and keep a consistent sizing through all the modal / overlays displays

- Results: changed the overlay to a bootstrap modal so this was more consistent and keeping with the size ratio and dimensions.

**_Issues still unresolved (due to timing)_**

1. Realised that when hitting the submit form with one required field filled in the form is still able to be submitted, intention was to have both ‘Player Name’ and ‘Email’ to be filled in
2. When the form is submitted the ‘alert’ box appears twice

With both of these issues I will investigate and research further into form validation’s and how this information gets pulled into a third party source.

**_Updated:25-11-2021_**

- With the aove issues regarding the contact form it was discussed with my mentor to remove this feature temporarily and come back to it when I have a bit more timr to develop this further.

**Return Home Modal**

- Issue: Sizing of overlay is not re-sizing correctly.
- Testing:

  1. Styled through css for sizing and ratio

- Results: changed the overlay to a bootstrap modal so this was more consistent and keeping with the size ratio and dimensions.

**Ending Page**

- Issue: Added an automatic timeout refresh.
- Testing:

  1. Added different times for a timeout refresh
  2. Added an icon for the user

- Results: removed the refresh time out feature and added this to the icon so the user can choose if they wished to refresh the page or not.
