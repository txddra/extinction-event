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