//selects all the list items in ordered list
const ols = document.querySelectorAll('ol li')
//create the function that will be executed
const lineThrough = function (event) {
    event.target.style.textDecoration = 'line-through';
  
  //adds event listener to the selection

}

for(const li of ols) {
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


//the divs with the images 
const pics = document.querySelectorAll('div img');
//changes the width over a period of time
const picOpacity = function (event) {
  event.target.style.width = '0px'
  event.target.style.transition = '2s'
}
//event listener added  
for (const img of pics) {
  img.addEventListener('click', picOpacity)
}

//found the one button div
const button = document.querySelector('#destroy-all')
//should be able to fuse all the pre-made functions?
const destroy = function(){
    lineThrough();
    opacity();
    picOpacity();
}

button.addEventListener('click', destroy)
