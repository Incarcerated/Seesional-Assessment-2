// Step 1 - Create object pof XHR
const xhr = new XMLHttpRequest()
console.log(`Ready State - ${xhr.readyState}`)

// const variable = 'Ram'
// console.log(`Hi my name is ${variable} and I am 20 years old!`)

const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

// Step 2 - Open the porta; of communication b/w client & the server
xhr.open('GET', url)
console.log(`Ready State - ${xhr.readyState}`)

// document.querySelector('#some-value').addEventListener('click', () => {
//     console.log('CLIKCED')
// })



// Step 3 - Execute the function when the request state changes
xhr.onreadystatechange  = () => {
    console.log(`Ready State - ${xhr.readyState}`)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const objectResponse = JSON.parse( xhr.responseText )
        console.log(objectResponse)
        var output = ''
        for(let i=0; i < objectResponse.length; i++) {
                output += `
            <div id="card" >
            
            <div class ="user-info">
                <h2>${objectResponse[i].name}</h2>
                <p>${objectResponse[i].email}</p>
                <ul class="info">
                    <li><strong>Followers</strong>${objectResponse[i].address.street}</li>
                    <li><strong>Followers</strong>${objectResponse[i].address.suite}</li>
                    <li><strong>Followers</strong>${objectResponse[i].address.geo.lat}</li>
                    
                </ul>
                <div id="repos"></div>
                
            </div>
        </div>
            `
        }
        console.log(output)
        document.querySelector('#main').innerHTML = output
    }
}

// Step 4 - Send the request
xhr.send()


!function(t){"use strict";t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:e.offset().top},1e3,"easeInOutExpo"),!1}}),t(".js-scroll-trigger").click(function(){t(".navbar-collapse").collapse("hide")}),t("body").scrollspy({target:"#sideNav"})}(jQuery);