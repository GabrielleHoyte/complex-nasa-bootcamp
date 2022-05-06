document.querySelector('button').addEventListener('click', getTemp)

function hideGif(){
  let hidden = document.querySelector('.gif')
  hidden.classList.add('hidden')
}

function getTemp(){

  let url = `https://data.nasa.gov/resource/gvk9-iz74.json`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
      for(let i = 0; i < data.length; i++){
        let list = document.querySelector('.list')
        let zipCode = data[i].zipcode
        let centerName = data[i].center
      
        let urlTwo = `http://api.weatherapi.com/v1/current.json?key=3179d3c0541e425f8f7183737220305&q=${zipCode}&aqi=no`
      
        fetch(urlTwo)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          let li = document.createElement('li')
          let temp = data.current.temp_f
          li.innerText = `${centerName} | Temp: ${temp} | Location: ${zipCode}`
          list.appendChild(li)
        })
        .catch(err => {
          console.log(`err ${err}`)
        })
   }
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
  hideGif()
}