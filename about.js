var btn1 = document.querySelector('.add-Btn')

btn1.addEventListener('click', function() {
    let add = document.querySelector('.addCity')
    var pop = document.querySelector('.addPop')
    let addCity = add.value
    let popInput = parseFloat(pop.value)


    fetch('https://avancera.app/cities/', {
            body: JSON.stringify({ "name": addCity, "population": popInput }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result) /*POST*/
        })
})


function clickedBtn() {

    let stader = document.querySelector('.stad'); /*SHOW CITYS*/

    let dataUrl = "https://avancera.app/cities"

    fetch(dataUrl)
        .then(response => response.json())
        .then((data) => {
            data.forEach(uni => {
                stader.innerHTML += `
                <div class ="result">
                <div class="card" style="width: 18rem;">
               <ul class="list-group list-group-flush">
               <li class="list-group-item">Namn: ${uni.name}</li>
               <li class="list-group-item">Invånare: ${uni.population}</li>
              <li class="list-group-item">ID: ${uni.id}</li>
              </ul>
             </div>
              `
            })
        });
    let visa = document.querySelector('#show')
    const refreshPage = () => {
        location.reload();
    }

    visa.addEventListener('click', refreshPage)





}



function deleteCity() {
    let add = document.querySelector('.addCity')
    let id = add.value

    fetch('https://avancera.app/cities/' + id, { /*DELETE*/
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
}