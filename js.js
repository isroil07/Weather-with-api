    // let mydata;
    let icons = document.getElementById('icons')
    let tempr = document.getElementById('tempr')
    let sunrise = document.getElementById('sunrise')
      let todays = document.getElementById('todays')
      let forcats = document.getElementById('forcats')
    let tempred = document.getElementById('tempred')
    let feels = document.getElementById('feels')
    let winds = document.getElementById('wind')
    let fdays = document.getElementById("five_day")
    let curwrap = document.getElementById('cur_wrap')
    let card_cont = document.getElementById("card_cont")
    function getHours(rets) {
        let srd = new Date((rets) * 1000);
        return (srd.getHours() + ":" + srd.getMinutes())
    }
    // function getHoured(retd) {
    //     let srt = new Date((retd) * 1000);
    //     return ((srt.getHours()-5) + ":" + srt.getMinutes())
    // }
    function dur(date1, date2) {

        date1.setHours(date1.getHours() - date2.getHours());

        date1.setMinutes(date1.getMinutes() - date2.getMinutes())


        return `${date1.getHours()}:${date1.getMinutes()}`

    }
     function kmh(ket) {
       return  Math.floor(ket*10)
     }
    function rud (ddd) {
        return Math.floor(ddd)
    }
 
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=3ae172ccc457bc3d8f04e1864fb778f9&units=metric&lang=ru")
        .then(data => {
            return data.json()
        }).then(data => {
            console.log(data);


            console.log(dur(new Date(data.sys.sunset * 1000), new Date(data.sys.sunrise * 1000)));
            icons.innerHTML = `<div><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"> <p class="musor"> ${data.weather[0].description}</p> </div>`
            tempr.innerHTML = `<div> <h1>${data.main.temp}  C  </h1> <p>feels like ${ data.main.feels_like} </p> </div>`
            sunrise.innerHTML = `<div> <p>Sunrise:  ${getHours(data.sys.sunrise)} </p>  <p>Sunset: ${getHours(data.sys.sunset)}</p> <p>Duration: ${dur(new Date(data.sys.sunset * 1000), new Date(data.sys.sunrise * 1000))}  </p></div>`
        })

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Tashkent&appid=3ae172ccc457bc3d8f04e1864fb778f9&units=metric&lang=ru")
        .then(dated => {
            return dated.json()
        })
        .then(dated => {
            // console.log(dated);
          todays.innerHTML+= `<div class="directed"><p class="musor">${getHours(dated.list[0].dt)} </p> <div> <img src="http://openweathermap.org/img/wn/${dated.list[0].weather[0].icon}@2x.png"> </div> </div>`
          todays.innerHTML+= `<div class="directed"><p class="musor">${getHours(dated.list[1].dt)} </p> <div> <img src="http://openweathermap.org/img/wn/${dated.list[1].weather[0].icon}@2x.png"> </div> </div>`
          todays.innerHTML+= `<div class="directed"><p class="musor">${getHours(dated.list[2].dt)} </p> <div> <img src="http://openweathermap.org/img/wn/${dated.list[2].weather[0].icon}@2x.png"> </div> </div>`
          todays.innerHTML+= `<div class="directed"><p class="musor">${getHours(dated.list[3].dt)} </p> <div> <img src="http://openweathermap.org/img/wn/${dated.list[3].weather[0].icon}@2x.png"> </div> </div>`
          todays.innerHTML+= `<div class="directed"><p class="musor">${getHours(dated.list[4].dt)} </p> <div> <img src="http://openweathermap.org/img/wn/${dated.list[4].weather[0].icon}@2x.png"> </div> </div>`
          todays.innerHTML+= `<div class="directed"><p class="musor">${getHours(dated.list[5].dt)} </p> <div> <img src="http://openweathermap.org/img/wn/${dated.list[5].weather[0].icon}@2x.png"> </div> </div>`
          forcats.innerHTML += `<div> <p class="ter">${dated.list[0].weather[0].main} </p> </div>`
          forcats.innerHTML += `<div> <p class="ter">${dated.list[1].weather[0].main} </p> </div>`
          forcats.innerHTML += `<div> <p class="ter">${dated.list[2].weather[0].main} </p> </div>`
          forcats.innerHTML += `<div> <p class="ter">${dated.list[3].weather[0].main} </p> </div>`
          forcats.innerHTML += `<div> <p class="ter">${dated.list[4].weather[0].main} </p> </div>`
          forcats.innerHTML += `<div> <p class="ter">${dated.list[5].weather[0].main} </p> </div>`
         tempred.innerHTML += `<div> <p class="ter">${dated.list[0].main.temp} </p> </div>`
         tempred.innerHTML += `<div> <p class="ter">${dated.list[1].main.temp} </p> </div>`
         tempred.innerHTML += `<div> <p class="ter">${dated.list[2].main.temp} </p> </div>`
         tempred.innerHTML += `<div> <p class="ter">${dated.list[3].main.temp} </p> </div>`
         tempred.innerHTML += `<div> <p class="ter">${dated.list[4].main.temp} </p> </div>`
         tempred.innerHTML += `<div> <p class="ter">${dated.list[5].main.temp} </p> </div>`
         feels.innerHTML += `<div> <p class="ter">${dated.list[0].main.feels_like} </p> </div>`
         feels.innerHTML += `<div> <p class="ter">${dated.list[1].main.feels_like} </p> </div>`
         feels.innerHTML += `<div> <p class="ter">${dated.list[2].main.feels_like} </p> </div>`
         feels.innerHTML += `<div> <p class="ter">${dated.list[3].main.feels_like} </p> </div>`
         feels.innerHTML += `<div> <p class="ter">${dated.list[4].main.feels_like} </p> </div>`
         feels.innerHTML += `<div> <p class="ter">${dated.list[5].main.feels_like} </p> </div>`

         winds.innerHTML += `<div> <p class="mrg">${kmh(dated.list[0].wind.speed)} </p> </div>`
         winds.innerHTML += `<div> <p class="mrg">${kmh(dated.list[1].wind.speed)} </p> </div>`
         winds.innerHTML += `<div> <p class="mrg">${kmh(dated.list[2].wind.speed)} </p> </div>`
         winds.innerHTML += `<div> <p class="mrg">${kmh(dated.list[3].wind.speed)} </p> </div>`
         winds.innerHTML += `<div> <p class="mrg">${kmh(dated.list[4].wind.speed)} </p> </div>`
         winds.innerHTML += `<div> <p class="mrg">${kmh(dated.list[5].wind.speed)} </p> </div>`
        
        })
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=41.2646&lon=69.2163&exclude=minutely,hourly&appid=3ae172ccc457bc3d8f04e1864fb778f9&units=metric")
        .then(dail => {
           return dail.json()
        })
        .then(dail => {
            console.log(dail);
            card_cont.innerHTML += `<div class="cards"> <img src="http://openweathermap.org/img/wn/${dail.daily[0].weather[0].icon}@2x.png"> <h2>${rud( dail.daily[0].temp.day)} C</h2> <p> ${dail.daily[0].weather[0].description}</p> </div>`
        })

        fdays.onclick = function () {
            curwrap.style.display = 'none';
         
        }
       