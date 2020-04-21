/**
 * Get an order from a customer at a restaraunt.
 */

function takeOrder(order) {
  let orderedItem = askForOrder();

  recordOrder(order, orderedItem);

  if (canHaveMore(order) && askIfWantMore()) {
    return takeOrder(order);
  }

  return order
}

const order = takeOrder([]);

console.log(`You ordered: ${order.join(', ')}.`);

//
//
//
// -------------------
// Simulation helpers.
// -------------------

function askForOrder() {
  // Ask the customer what they'd like to order
  console.log('What would you like to order?');

  const menu = [
    'Cheese Burger',
    'Fries',
    'Salad'
  ];

  const randomChoice = menu[Math.floor(Math.random() * Math.floor(menu.length))];
  console.log(randomChoice);
  return randomChoice;
}

function askIfWantMore() {
  console.log('Would you like anything else?');

  const randomChoice = true; // Math.random() >= 0.5;
  console.log(randomChoice ? 'Yes' : 'No');
  return randomChoice;
}

function recordOrder(order, item) {
  order.push(item);
}

function canHaveMore(order) {
  return order.length < 5;
}