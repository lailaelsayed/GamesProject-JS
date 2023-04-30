export class test{
    constructor (){
        this.active = document.querySelector('.active').innerHTML;
        this.getGames(this.active);
    }
    async getGames(Category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3add65a4e1msh515e6ee67b26b5ep17ab20jsna6d894ec2269',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let responseGame = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`, options)
        let finalResponseGame = await responseGame.json();
        this.displayGames(finalResponseGame);
    }
    async displayGames(arr){
        var cartona =[];
        for(var i = 0 ; i<arr.length ; i++){
            cartona += `
                    <div class="col " att='${arr[i].id}'>
                        <div class="card h-100 bg-transparent position-relative" att='${arr[i].id}' style="cursor: pointer;" >
                            <div class="card-body " att='${arr[i].id}'>
                               <img src= ${arr[i].thumbnail} class="card-img-top" att='${arr[i].id}'> 
                                <div class="d-flex justify-content-between mt-3" att='${arr[i].id}'>
                                    <h3 class="small align-self-center" att='${arr[i].id}'>${arr[i].title}</h3>
                                    <span  class="badge bg-primary p-2 ID" att='${arr[i].id}'>free</span>
                                </div>
                                <p class="text-center" style="color: #696C6F;"att='${arr[i].id}'>${arr[i].short_description}</p>
                            </div>
                            <div class="card-footer  d-flex justify-content-between" att='${arr[i].id}'>
                                <span class="badge main-bg "att='${arr[i].id}'>${arr[i].genre}</span>
                                <span class="badge main-bg "att='${arr[i].id}'>${arr[i].platform}</span>
                            </div>
                        </div>
                    </div>`;
        }
        document.getElementById('game-data').innerHTML = cartona;
        this.getId()
    }
    getId(){
       for (var i = 0 ; i< document.querySelectorAll('.card').length ; i++ ){
                document.querySelectorAll('.card')[i].addEventListener('click',(e)=>{
                    this.getDetails(e.target.getAttribute('att'))
                   
                })
       }
    }
    async getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3add65a4e1msh515e6ee67b26b5ep17ab20jsna6d894ec2269',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
       let responseDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
       let finalResponseDetails = await responseDetails.json();
       this.displayDetails(finalResponseDetails)
    }
    async displayDetails(arr){
        document.getElementById("loading").style.display = "block";
        document.getElementById('game').classList.add('d-none');
        setTimeout(()=>{
            document.getElementById("loading").style.display = "none";
            document.getElementById('details').classList.remove('d-none');
        },500);
        document.querySelector('#details .row').innerHTML= `   
          <div class="col-lg-4">
            <img src=${arr.thumbnail}>
          </div>
          <div class="col-lg-8">
            <h4>Title: ${arr.title}</h4>
            <p>Category: <span class="badge text-bg-info">${arr.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${arr.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${arr.status}</span></p>
            <p class='small'>${arr.description}</p>
            <button class="btn btn-outline-warning text-white">Show Game</button>
          </div>
       
     `
    }

}