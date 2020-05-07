/*
feedback for 01-countEvens.js:

Hi!  This was a great effort, and in a lot of ways the places where you went awry were because you overthought it.  But the great news about that was you shined the light on some areas that you need to learn, and learning is what we're doing here!

1) Your testing function:

How cool that you decided to write your own testing function!  That's great!  But a couple of things went wrong here for you.  First, remember that all things programming come down to data types.  You need to always be able to identify what data type each variable you're using needs to be.  

In your testing function, what does the second argument's data type need to be?  What data type are you giving it? Spoiler alert:  on line 32 you can see that you want it to be an array, but on lines 41-44 you are giving it numbers. So your tests aren't going to work.

But wait, there's more. . . 

I'm quickly glancing at your line 42.  Are you sure that array only has 2 even numbers in it?  It looks to me like it has 4. Unless you were trying to get a false here (?)  It seems to me that if you are going to write a testing function, use the values that are given in the original problem -- meaning: lines 7-9.  I do see that line 9 would produce a false value, which is maybe what you were going for in your line 42.

Maybe it would be a good idea to focus right now on the function itself, and wait until you've mastered that to write a testing function.

2) Important note on 'for' loops: 

The second argument in 'for' loops, which represents the condition that has to be true in order for the loop to continue is calculated EACH LOOP.  So that was a bunch of words but here is what those words mean:   on line 15 your 'array.length' is calculated EACH LOOP.  And, if you look down to line 19, you are using the 'splice' method which is going to alter the length of the array.  So if there are odd numbers in the array, the array length will change and you may not iterate over all values.  

Quick note on array methods: some alter the original array, others don't.  It is VERY IMPORTANT to know whether the method you're using alters the original array. Splice alters the original array.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Can you think of a way to accomplish this that didn't use splice?  Maybe a simple counter?

3) Loose equality

Super important to read the section on loose equality here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

Basically, in JavaScript, if you are making a comparison that involves zero, please always use strict equality.  Line 17 is not strict equality.  But don't worry! These things become second nature quickly!

4) Code formatting / consistency

One day, you would probably like to be a professional coder -- and why not, it is awesome.  But when this happens you will likely be coding on a team and consistent formatting will be enormously appreciated by your teammates.  I'm assuming that adjacent academies has given you coding style guidelines.  Please follow them!  I know this seems picky but when you're looking at code for 8 hours a day it really helps.  Also, you used 'let' in one 'for' loop and not the other.  As a practice, please use 'let' in all for loops.

*/