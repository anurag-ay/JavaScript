// Dealing  with window object

console.log(window);

// create an alert message
alert("hello");

// create a prompt message
prompt("enter some number");

// how to take confirmation
confirm("are you sure");

// Dealing with the Document object

console.log(window.document);

// inner width, inner Height

console.log(window.innerWidth);
console.log(window.innerHeight);

// how to check scrolling
console.log(scrollX);
console.log(scrollY);

// how to find location
console.log(location);
// how to relode the page
location.reload();

// to get the whole url
console.log(location.href);
// goto the particular location
location.href = "https:\\google.com";

// History method
console.log(history);

// go to the previous page
history.go(-1);

//===============================================================================================================================

// Undersating DOM

// seeing the document object

console.log(document);

// checking the type of document
console.log(typeof document);

// to get the all tags

console.log(document.all); //array type of object but not array
// you can't access it using for each method

// How to print all the elemenets of this method

const tags = document.all;

// Important
// it means form a array using tags than apply for each method
Array.from(tags).forEach((element) => {
  console.log(element);
});

// to get the body tag
console.log(document.body);

// to get all the form objects
console.log(document.forms); // it return the array of forms

// accessign the particular form
// console.log(document.form[0]);

// to get all the hyperlinks
console.log(document.links);

// quiz-> use document.image and document.script and print them

// Exercies-> pick up all the links form the page and which contains the specific text.
// solution:

let links = document.links;

Array.from(links).forEach(function (element) {
  let href = element.href; // element.fref select all the links in the form of text
  let rslt = href.includes("java");

  if (rslt) {
    console.log(href);
  }
});

//==========================================================================================================================

//HTML Element Selectors In JavaScript

console.log("welocme to the tut ");

/**
 * 1. Single element Selector
 * 2. Multi element Selector
 */

// 1. Single element Selector

// slecting element by id
const element = document.getElementById("myfirst");
console.log(element.childNodes); // to get all the child of this element

// printing the parent node
console.log(element.parentNode);

// change the color // targeting the CSS Properties
element.style.color = "red";

//changing the text of the element
const element2 = document.getElementById("heading");
element2.innerText = "Changing the heading";

// Chaning the html
element2.innerHTML = "<h3>bold</h3>";

// 1.2 Second single element selector (querySelector)

// it is used to select the element in the css format from the document

// Note querySelector only selects first element
// select id
let css = document.querySelector("#myfirst");
// select class
css = document.querySelector(".good");
// select using tags
css = document.querySelector("div");
css = document.querySelector("h1");

console.log(css);

// 2.1 MultiElement Selector
// used to select multiple element at once

let ele = document.getElementsByClassName("container");
console.log(ele[0]);

// how to select element inside the element
console.log(ele[0].getElementsByClassName("good"));

// How to all the elements with particular tag

ele = document.getElementsByTagName("div");
console.log(ele);

// iterating on all the elements
// we can also use traditional array

Array.from(ele).forEach((element) => {
  console.log(element);
});
