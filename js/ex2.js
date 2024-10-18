//Complete the code for the following function
//Display text for 400 level courses
const displayText400 = () => {
  
  const level400Classes = document.getElementsByClassName("400level");
    Array.from(level400Classes).forEach(element => {
    console.log(element.textContent);
    });
}
displayText400();