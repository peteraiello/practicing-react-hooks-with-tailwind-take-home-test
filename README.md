# Practicing React Hooks with the Tailwind UI Take-Home Test

I recently read about the [hiring process](https://blog.tailwindcss.com/from-900-to-1-how-we-hired-robin-malfait) for [TailwindCSS](https://tailwindcss.com).

Part of the process included a [take home test](https://github.com/adamwathan/tailwind-take-home-project) for candidates to complete over the space of 2 weeks.

I decided to give it a go in order to practice some of what I've been learning using **React Hooks**. In the below, I discuss how the program uses React Hooks to manipulate state and implement the programs functionality.

Check out the live URL to my solution [here](https://tailwind-take-home-test-react.vercel.app)

# Building the Functionality for the Gallery

I broke down the different sections to decide on which parts needed to be interactive or _reactive_. 

This meant examining the elements of the concept and seeing if they met the criteria listed in the [docs](https://reactjs.org/docs/thinking-in-react.html) for **using state**.  

The featured image gallery would change data over time based on user input, so would need to manage this using state. 

More specifically, the image url for the featured image of the gallery would be updated using react hooks to which ever thumbnail was clicked using the `clickHandler` function. 

The border for the active thumbnails were slightly trickier as I wasn't sure on what the design pattern would like. 

For example, if we just needed to add a border to thumbnail that was clicked, it would be a lot easier. 

However, the styling for border needed to toggle which meant a slightly more complicated solution. 

I found one solution to help implement this by looking at [tutorials on tabs](https://www.digitalocean.com/community/tutorials/react-tabs-component) components.

The solution I went with was to create a new state for `active` that would update to the clicked thumbnail (using the `clickHandler` function).

The `thumbnailSelect` function would then compare the active thumbnail to the thumbnail index, using a [ternary expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). If it resolved true, the `activeClass` would have a heavier border.

# Updating the Price Across Different Components

The other functionality that used React Hooks was for the product price, which would change based on the input of the forms input options. 

The price needed to be updated in two separate places, the product description component, and the footer. 

At first, I broke decided to approach the solution by breaking down the form options into three separate groups, and focused on using just one group as an example (before adding the rest).

In addition to the state for `ampPrice`, I also added an `active` state, which would update to whichever form option was selected, and also a `costState`. If the option had a cost associated with it, it would be added to the price using a `clickHandler`. 

From there, I simply had to duplicate the `buttonGroup` data for the other options. The `updatePrice` function, combined the cost of all the options, across all of the groups. 

# Reflection 

I think my solution for the gallery was strong and it was good to have separate components for the thumbnails and the featured image. 

However, my solution for the form is less DRY (Don't Repeat Yourself) and I'm interested to see if there is a way to reuse the methods for the options across all of the form groups as well as manage state two or three levels deep. This might take us into implementing [redux](https://redux.js.org/basics/usage-with-react/).

In general though, I think React Hooks are a good way to implement the interactivity of a program. Having now used both React and Vue, I can honestly say that they are both viable options for handling the front-end interactivity of web applications. I think it's also good to learn both as the trends are always changing.