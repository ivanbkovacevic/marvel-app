# marvel-app

Hi,

I build the requestet marvel app.

I had problems with API key and authoratisation. First I tried to pass a parametars object in axios request but it would not work. Than I deceided to put it directly in URL.

The API does not return usable thumbnail images. I do not have permision to use tham so I hard coded the thumbnail image.

The search bar, I used two input type number fields for search year and one input for titleStartswith search. Clicking on button displays the results below.

Till now, I did not used React with hooks....so it was a litlle bit chalanging for me to switch to React hooks in short time but it was ok  :)

I'm using useEffect() for calling API, render variable for rerendering the component.

CSS/SASS is build on a fly. Did not put much effort on a design so the app look very preaty. I more focus on functionality.

App structure files:

App.js and SearchBar.js in which case App.js is a parent component for a SearchBar.js

Every comic card is a link to a comic web page.

Live version you can check at this link  https://dreamy-engelbart-82ac1a.netlify.app/

Best regards,
