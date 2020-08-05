//selects all the list items in ordered list
const ols = document.querySelectorAll('ol li')
//create the function that will be executed
const lineThrough = function (event) {
    event.target.style.textDecoration = 'line-through';
  };
  //adds event listener to the selection

for (const li of ols) {
    li.addEventListener('click', lineThrough);
}

//selects all the list items in the unordered list
const uls = document.querySelectorAll('ul li');
//creates a function that alters the opacity  
const opacity = function (event) {
  event.target.style.opacity = '0';
};
//adds the event listener

for (const li of uls) {
  li.addEventListener('click', opacity);
}