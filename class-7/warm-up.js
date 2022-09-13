// function changeColor(){
//     document.querySelector('h1').style.color="lightblue";
// }
// document.querySelector('button').addEventListener('click', changeColor) ;

function changeBackground(color){
    console.log("it works");
    document.body.style.backgroundColor = color
}
function colorChanged(){
    console.log("Color Changed")
    console.log(this.value)
    changeBackground(this.value)

}
const colorPicker = document.getElementById("colorPicker");
// const colorPicker = document.getElementById("colorPicker2");
colorPicker.addEventListener("change", colorChanged);
// console.log(colorPicker);
document.getElementById("colorForm").addEventListener
("submit",() => {
    console.log("Form submitted");
    const p = document.createElement("p");
    p.innerHTML = "The form submission";    
})