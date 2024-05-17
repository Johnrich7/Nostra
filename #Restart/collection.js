var productContainer = document.getElementById("products")
var search = document.getElementById("search")                // targeting search ID //
var productlist = productContainer.querySelectorAll("div")      //Selecting the div under the products//

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUppercase()

    for (count = 0; count < productlist.length; count = count + 1) {
        
        var productname = productlist[count].querySelector("p").textContent       // selecting the p tags inside the div tag of products-box//

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
        
})