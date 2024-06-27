// created new xmlhttp.request object
let http = new XMLHttpRequest();

// prepare the request with the open() method

 http.open('get', 'js/services.json', true);

// /* first Argument get => sets the http method
//     Second Arguent pass the file where the data lives (products.json)
//     keyword "true" sets the request to be asynchronous
http.send();

// catch the response
// check the onload eventlistner

http.onload = function(){
    // check the readystate and properties.
    if(this.readyState == 4 && this.status == 200){ 
        // if we have a succesful response , i have to pass json data
        // and convert to javascript array
        let card = JSON.parse(this.responseText);

        // empty variable is needed to add the incoming data
        let output ="";

        // loop through the products, and in every iteration add the html template to the output variable
        for(let item of card ){
            output += `
                        <div class="card">
                            <div id="icon" class="row"><i class="fas fa-store"></i></div>
                            <span class="text">
                            <h5 class"ecom">${item.ecom}</h5>
                            <p class="description">${item.description}</p>
                            <a class="link">${item.link}</a>
                            </span>
                        </div>
                    
            `;   
        }

        document.querySelector(".slider").innerHTML = output;
    }
}