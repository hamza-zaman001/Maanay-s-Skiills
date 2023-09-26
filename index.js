const heading = document.getElementById("hamza")
const btn = document.getElementById("btn")
let isClicked = true
let details = "I am Gandu"

// heading.addEventListener("click", function() {

    
//     if(isClicked === true)
//     {    
//     heading.classList.add("red")
    

//     } else {
//         heading.classList.remove("red")
        
//     }

//     isClicked = !isClicked
// })

// btn.addEventListener("click", function(){
//     btn.classList.remove("details")
//     btn.style.display = "none"
//     document.body.innerHTML += `<p>${details}</p>`
//     console.log("button is double Clicked")
// })


document.body.addEventListener("click",function(e){

    console.log(e.target.id)
    if (e.target.id === "hamza" ){
        
        hamzaColorChanger(e.target.id)
       

    } else if (e.target.id === "btn") {
        btn.classList.remove("details")
        btn.style.display = "none"
        document.body.innerHTML += `<p>${details}</p>`
        console.log("button is double Clicked")
    }
})

function hamzaColorChanger(targetID) {

    if(isClicked === true)
    {    
    heading.classList.add("red")
    

    } else {
        heading.classList.remove("red")
        
    }

    isClicked = !isClicked
}


