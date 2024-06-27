// created new xmlhttp.request object
let http = new XMLHttpRequest();

// prepare the request with the open() method

 http.open('get', 'js/prices.json', true);

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
                            <div class="card-pricing"> 
                                <div class="header">
                                <div class="icon">
                                    <i class="fas fa-laptop"></i>
                                </div>
                                <span>Website<br>Builder</span>
                                <p class="top">${item.top}</p>
                                </div>
                            <hr>
                            <!-------------------------PRICING 1------------->
                            
                            <div class="price-1">
                                <div class="left-p">
                                <p class="text">Web hosting and storage from just</p>
                                <h4 class="b1-price">${item.b1-price}</h4>
                                including VAT
                                </div>
                                <div class="right-p">
                                    <span>+</span><span class="s-price">${item.s-price}</span>
                                    <p class="text">Web design and build</p>
                                </div>
                            </div>
                            <!-------------------------PRICING 2------------->
                            <div class="price-2">
                                <p class="text">or pay monthly for Web hosting and storage from just</p>
                                <h4 class="b2-price">${item.b2-price}</h4>
                                including VAT
                            </div>
                            
                            <div class="bottom-txt">
                                <div class="icon">
                                <i class="fas fa-check"></i>
                                </div>
                                <span class="ful-desc">${item.ful-desc}</span>
                            </div>

                        </div>
                    
            `;   
        }

        document.querySelector(".slider-pricing").innerHTML = output;
    }
}