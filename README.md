# Practicing React Hooks with the Tailwind UI Take-Home Test

I recently read about the [hiring process](https://blog.tailwindcss.com/from-900-to-1-how-we-hired-robin-malfait) for [TailwindCSS](https://tailwindcss.com). Part of the process included a [take-home test](https://github.com/adamwathan/tailwind-take-home-project) for candidates to complete over the space of 2 weeks. 

Board of building to-do apps and with a growing appreciation of Tailwinds class-based system, that allows you to style components without using any custom CSS, I decided to give it a try to practice some of what I've been learning with **React Hooks**. 

However, in the article below, I mostly demonstrate how React Hooks can be used to manipulate 'state' and implement the interactive functionality of the program (including styling changes).

Check out the live URL to my solution [here](https://tailwind-take-home-test-react.vercel.app) hosted on [Vercel](https://vercel.com/).

# Building the Functionality for the Gallery

I broke down the different sections to decide on which parts needed to be interactive or _reactive_ and meant examining the elements of the concept and seeing if they met the criteria listed in the [docs](https://reactjs.org/docs/thinking-in-react.html). The featured image gallery would change data over time based on user input, so would need to **use state**. 

More specifically, the URL for the featured image of the gallery would be updated using React Hooks to which ever thumbnail the user clicked on using the `clickHandler` function. 

The border for the active thumbnails was slightly trickier to implement as I wasn't sure on what the design pattern would look be. For example, if we just needed to add a border to the thumbnail that was clicked, and didn't need it to toggle, the functionality would be a lot easier! 

The solution I used was found by looking at [tutorials on tabs](https://www.digitalocean.com/community/tutorials/react-tabs-component) components and involved creating a new state for `active` that would update to the clicked thumbnail (using the `clickHandler` function). The `thumbnailSelect` function would then compare the active thumbnail to the thumbnail index, using a [ternary expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) which, when it resolved true, resulted in using a border with a bolder outline. 



# Updating the Price Across Different Components

The other functionality that used React Hooks was for the product price, which would change based on the user input of the form in **two places**, the product description component, and the footer. I created a state to manage the change for the price  (`ampPrice`).

Initially, I decided to approach the solution by breaking down the form options into three separate groups and focused on updating the price based on the input from just one group as an example.

 In addition to the state for `ampPrice`, I also created one for `active`, which would update to whichever form option was selected (same as the thumbnails for the gallery). I also created a state for the cost associated with the option (`costState`) and added to the price. The `updatePrice` function, combined the total cost of all the options, across all of the groups.

# Reflection 

I think whilst my solution for using React Hooks to build the gallery was reasonable robust, I would ideally like to organise the form groups into their a component to make them a little more reusable. 

It might involve updating the state from the child component that is two or three levels deep, which may take us into implementing  [redux](https://redux.js.org/basics/usage-with-react/) in the program.

In general, though, I think React Hooks are an excellent way to implement the interactivity of a program. Having now used both React and Vue, I can honestly say that they are both viable options for handling the front-end interactivity of web applications. I think it's also good to learn both as the trends are always changing.
