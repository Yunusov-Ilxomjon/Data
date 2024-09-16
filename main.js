
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');


start.addEventListener('click', () => {

    // let sekund
    let times = setInterval(() => {

        let vaqt = new Date()
        // console.log(vaqt);


        // Vaqtlarni ajratib olamiz
        let soat = vaqt.getHours()
        let minut = vaqt.getMinutes()
        let sekund = vaqt.getSeconds()
        let oy = vaqt.getMonth()
        console.log(soat, minut, sekund);

        // h larni ushlab olamiz
        let hsoat = document.querySelector('.soat')
        let hminut = document.querySelector('.minut')
        let hsekund = document.querySelector('.sekund')
        let hoy = document.querySelector('.oy')

        hsoat.innerHTML = soat + " :"
        hminut.innerHTML = minut + " :"
        hsekund.innerHTML = sekund
        // hoy.innerHTML = 'Hozir' + ' ' + oy+1 + ' ' + 'oyi'
        // hoy.innerHTML =oy+1

        if (oy==4) {
            hoy.innerHTML = 'Hozir' + ' ' + 'May' + ' ' + 'oyi'
        }


    }, 100)

})


stop.addEventListener('click', () => {
    
        clearInterval(times);
  
})


// ///////////////////////////////////////
const random = Math.random()*10
console.log(random);

const random1 = Math.round(Math.random()*10)
console.log(random1);

console.log(0/0);