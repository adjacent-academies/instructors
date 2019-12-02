// if you want to see how the list of projects below was generated, follow these instructions
// (this is NOT necessary for the scavenger hunt)
// 1. open http://microjs.com in your browser
// 2. open the JS console in your browser
// 3. copy / paste the code below into the console and execute it (copy, paste, hit enter)
// 4. the report will be added to your clipboard
// -----------------
// find all star counts on age
const nodes = document.querySelectorAll('span.w.icon')

// filter projects with more than MINIMUM_THRESHOLD stars
const MINIMUM_THRESHOLD = 1000
const stars = Array.from(nodes).filter(
  node => parseInt(node.innerText.replace(/,/g, ""), 10) > MINIMUM_THRESHOLD
);

// extract name and star count from the list of stars
const report = stars.map(star => ({
  name: star.parentElement.parentElement.firstChild.innerText,
  code: star.parentElement.parentElement.parentElement.href
}));

// copy results of the report to the clipboard
copy(JSON.stringify(report))
