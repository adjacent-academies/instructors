## playing with recursion

A recursive method is a method that calls itself either directly or indirectly.

There are three important rules of thumb in developing recursive programs:

- The recursion has a base case.
- Recursive calls must address subproblems that are smaller in some sense, so that recursive calls converge to the base case.
- Recursive calls should not address subproblems that overlap.

## what does software do?

<!-- Note for a future revision - let's turn all this JS into pseudocode so that the confusing parts don't derail the lesson -->

Let's first take a look at the purpose and design of software programs.

The first computer programs were designed for "computation" hence the name "computer". But what are computational tasks?

Let's discuss some physical tools you're familiar with. (I'd probably break the class up into small groups to perform this exercise).

For each of these, the groups will describe their purpose.

* A frying pan
* A stethescope
* A flashlight
* A screwdriver
* A toaster

* A frying pan - cook food
* A stethescope - make heartbeats audible
* A flashlight - shine light on objects
* A screwdriver - turn screws
* A toaster - turns bread toast

After we've done that, we'll reframe the purpose of each tool as an object that converts some set of `inputs` into an `output`. Can each tool use the same inputs? e.g. does using a screwdriver on bread make sense? Probably not, but using a frying pan ortoaster with bread probably does.

On a whiteboard describe each tool.

|  tool |  input |  output |
|---|---|---|
| frying pan   |  food |  cooked food |
|  stethescope |  heartbeats |  sound of heartbeats |

etc, etc.

## ok, so all these things do something and somone has to use them for them to be useful, but software seems to be "magical" and "automatic"

Let's try to understand the idea of *algorithmic* thinking. Computer programs can do work because computers can perform instructions like "add 5 to 3" and "flip this 0 to a 1" or answer questions like "is this value equal to this other value". Computer programs work "automatically" (or "automagically" if you prefer) because they are essentially sets of instructions that you write for the computer to *execute*. Toaster's are cool but you can't just tell it to 

0. Ensure the toaster is plugged in
1. Take a slice of bread
2. Place the slice in the toaster
3. Push the spring down
4. Wait for toaster stuff to happen
5. Move the fully toasted bread to a plate

Except for the core "toaster" behavior, you as a human being have to perform a number of necessary steps. 

So software programs are tools, but you have to define the instructions and behaviors that define how the code is supposed to work and what the computer is supposed to do. The steps you define so that your software programs can accomplish some goal are called *algorithms*.

Let's try to figure out the algorithms we'd need to write to ensure our physical tools work properly.

(Break into groups again and develop algorithms for each tool)

## how does this relate to software?

From the above exercise, tools are things that can act upon certain kinds or types of objects and generate certain kinds of objects. e.g. a toaster can take any two slices of bread and make two slightly different slices of bread (to jump ahead a little bit with some terminology we may see later, the bread `objects` are `mutated`).

If we throw some algorithmic behavior on top, the tools can basically do the job themselves as long as you provide it the right material to work with. 

To apply our analogy to coding, programming lets you develop software tools that act upon data and generate new data. 

Inside a software program we sometimes call the tools the program uses "functions". These snippets of code are algorithms that tell the computer how to accomplish a computational task. <!-- N.B. Maybe functions are too much for right now... -->

Let's look at a basic function

```javascript
function add(number1, number2){
  return number1 + number2;
}
```

Obviously, this is kind of dull example, but it fits our paradigm. We have our software tool (`add`) that takes an input (two numbers: `number1`, `number2`), adds the numbers, and outputs the sum. All software is essentially collections of these tools orchestrated together to do work for you.

## great, why is this interesting?

Because we're working in software, you're allowed to do things that don't make a lot of sense in the real world. It's hard to imagine easily implementing a tool that makes you multiple pans or lights or garbage disposals to do more work for you. Or maybe you want a quick way to move the output of a chainsaw to the input of a screwdriver. With software, these sorts of tasks are more fathomable and become trivial. Let's look at another basic example.

```javascript
function add(number1, number2){
  return number1 + number2;
}

function numberOfCharactersInYourName(firstName, lastName){
  return add(firstName.length, lastName.length)
}
```

Here we add a new function _that uses another function_. Further we see with `firstName.length` the language we're using (JavaScript) gives us lots of built in tools to help us build our own tools. Again this example is trivial. 

## great you added two numbers, so what?

Let's make our first big leap and start to solve a problem in a more "programmatic" way. 

There are lots of types of data you can use when developing software and we'll get to a point that you'll make your own types of data. Just like a toaster takes "bread" as its input, you can't just take a nice, fresh sourdough baguette and try to stick it in the toaster. You need the bread in a particular structure and size for the toaster to work. 

In the same way, software functions generally don't take generic data, but they take data with particular types and structure. In our first example, `add` accepted two numbers. You can't give it three numbers, a string (explain to class they haven't learned about strings), a video, or a song file, a text file, etc. 

So we need *data types* to properly design our software. 

What if I wanted to update my `add` function to take 3 numbers? I'd have to rewrite it like 

```javascript
function add(number1, number2, number3){
  return number1 + number2 + number3;
}
```

That's fine until I decide I want to add a fourth, fifth number, etc. In every programming language (that I know of), there are *collection* types. What this means is that there is a generic data type that can store multiple instances of other kinds of data. Imagine a toaster that doesn't just take 2 pieces of bread, but that takes a collection of slices and toasts them all for you. That'd be nice, right? With software we can do that.

The first collection type you'll be exposed to is the Array. There are lots of interesting behaviors associated with arrays that we'll cover, but for now let's see how we can put a bunch of numbers in an Array.

```javascript
function add(numbersArray){
  // We'll do this later
  return 0;
}

let numbers = [1,2,3,4];
add(numbers);
```

We haven't built our tool, our function, but we have defined its *interface* - what it will take in and what it sends back.

With arrays you can use the programming language to *iterate* or *loop* over the collection. What this is means is we can visit each element and do something with it. Using our toaster example, imagine your toaster had a little device that you placed your loaf of sliced bread on and one-by-one it put each slice in the toaster. The toaster is still the primary function but the device that feeds it is our *iterator* (I'd draw a silly picture of our device here).

Here's our example with iteration (take time here since looping, indexing may blow their minds. Not going to write it all out, but the for loop will take some time to understand).

```javascript
function add(numbersArray){
  // We'll do this later
  let sum = 0
  for(let arrayIndex = 0; arrayIndex < numbersArray.length; arrayIndex++){
    sum += numbersArray[arrayIndex];
  }
  return sum;
}

let numbers = [1,2,3,4];
add(numbers);
```

Now, almost magically, we have a tool that takes an array of numbers and adds them all.

## woah, that's cool! So now we're good to go?

Iteration isn't the _only_ way to process a collection of items. Remember earlier when we called `add` from the `numberOfCharactersInYourName` function? Most software languages allow you to _call a function from itself_. 🤯

This will be critical to understand at the end of the lesson, but don't be worried if it doesn't make any sense right now.

How does this affect our example? Now we need to start thinking about the structure of our problem solving. We came to an easy solution for adding up all the elements in an array (visit each one and keep a running tally). Let's dig a little deeper into how this problem to see if we can identify patterns that can simplify our solution.

Let's look at our example

```javascript
let numbers = [1,2,3,4];
```

What are some ways we could use our existing code to come to the same answer as passing `[1,2,3,4]` into `add`? Let the class get crazy and clever trying to figure out what they can do. 

Some possibilities 

* Assign the values of `add([1,2])` and `add([3,4])` to new variables, then create array `[x,y]` and call `add[x,y]` (or some variation)
* Add 1 to `add([2,3,4])`

If we look at the structure of the problem we realize that we can perform addition on *subsets* of the original array. We also may notice something about how `add` should perform if it gets an array with one element (explain that, yes, an array can have one element, just like a package of bread can have one slice because some rude person decided to leave it behind).

Let's refactor

```javascript
function add(numbersArray){
  if(numbersArray.length == 1){
    return numbersArray[0]; //THIS IS OUR BASE CASE
  }
  // We'll do this later
  let sum = 0
  for(let arrayIndex = 0; arrayIndex < numbersArray.length; arrayIndex++){
    sum += numbersArray[arrayIndex];
  }
  return sum;
}

let numbers = [1,2,3,4];
add(numbers);
```

(After adding the `if(numbersArray.length == 1){` block, explain how this is a base case for the function. This will be critical to completing our 
recursive solution.)

In order to implement a recursive solution we should be aware of two key facts.

- The recursion has a base case. (we addressed this with the `if(numbersArray.length == 1){` line. If we have an array of 1 element, we don't need to add anything and we just return the element)

- Recursive calls must address subproblems that are smaller in some sense, so that recursive calls converge to the base case.

Ensure students that this barely makes sense to me, so let's do recursion without realizing it and then return to the defintion.

We saw earlier that the addition problem can be broken down into the smaller problem of performing `add` on subarrays of the input then adding those results together. Let's break this down further.

Say we have 

```javascript
function add(numbersArray){
  if(numbersArray.length == 1){
    return numbersArray[0]; //THIS IS OUR BASE CASE
  }
  // We'll do this later
  let sum = 0
  for(let arrayIndex = 0; arrayIndex < numbersArray.length; arrayIndex++){
    sum += numbersArray[arrayIndex];
  }
  return sum;
}


let numbers1 = [1];
let numbers2 = [2,3,4];

// What happens when we call add with a single element?
// we the element back! (if(numbersArray.length == 1){))
let sum1 = add(numbers1);

// What happens when we call add with an array with multiple elements?
// We get into the loop and add them all up and reutrn the result
let sum2 = add(numbers2);

// We can take the results from above and stick them in a new array
// [1, 9]
let numbers3 = [sum1, sum2];

// Then runn add([1,9]) and we get 10!
let sum3 = add(numbers3);
```

That's all great, but we're *hard coding* the behavior such that we break off the first element of the array and then perform add on the rest.

Let's look at a neat thing that coding allows us to do, but is kind of strange and may seem scary. Let's write a new function.

```javascript
function sayHiForever(){
  console.log("Hi");
  sayHiForever();
}

sayHiForever();
```

Because algorithms are comprised of unambiguous instructions, the computer is going to print "Hi", then call `sayHiForever()`, which will in turn 
print "Hi", and call `sayHiForever()`, which will in turn... the computer's only doing what you tell it!

What are some ways we can fix this so it doesn't go on forever? (Talk it over with the class)

```javascript
function sayHiUntilZero(counter){
  if(counter <= 0){
    return
  }
  console.log("Hi");
  sayHiUntilZero(counter-1);
}

sayHiUntilZero(10);
```

So we've actually just written a recursive version of a loop where the *base case* is tied to the value of `counter`. Returning to our `add` function, what is our base case dependent on? (Class discussion) - length of the input array.

Since the *loop* is the main mechanism with which we add numbers and we want to replace it with *recursion* let's remove that section of code

```javascript
function add(numbersArray){
  if(numbersArray.length == 1){
    return numbersArray[0]; //THIS IS OUR BASE CASE
  }
  let sum = 0
  //Recurision happens here
  return sum;
}

let numbers = [1,2,3,4];
add(numbers);
```

We could pass in a `counter` value like we did before, but we have enough information (`numbersArray.length`) so we can do things recursively.

We know we have to replace the "loop" section of the function with a recursive call, but how do we do that? Using our example, if we're adding up elements in the array `[1,2,3,4]` how do we know when we've reached the end? When `add` gets an array with a single element. 

How do we start with `[1,2,3,4]` and end up with a single element?

Let's do something crazy and write some new functions.


```javascript
function add(numbersArray){
  if(numbersArray.length == 1){
    return numbersArray[0]; //THIS IS OUR BASE CASE
  }
  // We'll do this later
  let sum = 0
  for(let arrayIndex = 0; arrayIndex < numbersArray.length; arrayIndex++){
    sum += numbersArray[arrayIndex];
  }
  return sum;
}

function add2(length2NumbersArray){
  return length2NumbersArray[0] + add([length2NumbersArray[1]]);
}

function add3(length3NumbersArray){
  return length3NumbersArray[0] + add2([length3NumbersArray[1], length3NumbersArray[2]]);
}

function add4(length4NumbersArray){
  return length4NumbersArray[0] + add3([length4NumbersArray[1], length4NumbersArray[2], length4NumbersArray[3]]);
}

let numbers = [1,2,3,4];
add4(numbers);
```

How can we translate this such that we can stick all the code into the `add` function?

Let's break this down. (explain call stack)
```

1 + add([2,3,4])
     |
     |-> 2 + add([3,4])
              |
              |-> 3 + add([4])
                       |
                       |-> 4 (BASE CASE 👊)
```

As the stack returns from the base case we get

```

return 1 + (9)
            |
            |-> 2 + (7)
                     |
                     |-> 3 + (4)
                              |
                              |-> 4
```

And we get 10!

Great so, hopefully, conceptually you see what we're going to do, but how do we code this? We'll thankfully with a base case it's easy to string together.

```javascript
function add(numbersArray){
  if(numbersArray.length == 1){
    return numbersArray[0]; //THIS IS OUR BASE CASE
  }
  let sum = 0;
  sum = numbersArray[0] + add(numbersArray.slice(1, numbersArray.length)); //This is our recursion 
  return sum;
}

let numbers = [1,2,3,4];
add(numbers);
```

Explain `slice` since I kind of throw it in. <!-- N.B. Remove JS and replace with generic pseudocode. -->

Cover tail recursion if there's time or mental bandwidth.

> *src: http://algs4.cs.princeton.edu/11model/*
