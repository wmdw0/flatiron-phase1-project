function fetchInfo() {
    // To pass the tests, don't forget to return your fetch!
    return fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(resp => resp.json())
    .then(json => renderInfo(json));
  }

  function renderInfo(info) {
    console.log(info)

    let quote = document.getElementById("quote");
    quote.innerHTML = "";
    // info.forEach((item) => {
    //   let div = document.createElement('div');
    //   div.className = "listitem";
    //   div.innerHTML = item.name;
    //   quote.appendChild(div);
    // })
    //go through list
    //for each item in list
    //create a paragraph
    //display the name
    var i = 0;



    for(var i = 0; i < 10; i++){
      console.log(i)
      let div = document.createElement('div');
      div.className = "list-group";
      div.innerHTML = info[i].name;
      quote.appendChild(div);
      let remove = document.createElement('button');
      remove.className = "delete";
      remove.innerHTML = "Remove From List";
      let button = document.createElement('button');
      button.className = "refresh";
      button.innerHTML = "Learn More";
      div.appendChild(button);
      div.appendChild(remove);
      remove.onclick = function () {
        div.innerHTML = "";
        div.className = "";
      }
      let item_id = info[i].id;
      let brewdiv = document.createElement('div');
      button.onclick = function () {
        console.log(item_id)
        brewdiv.innerHTML = "";
        fetch("https://api.punkapi.com/v2/beers/" + item_id)
        .then(response => response.json())
        .then(json => showBrew(json));
      };
      function showBrew(json){
        let brewInfo = json[0];  
        
        let newInfo = document.createElement('p');
        newInfo.className = "content";
        newInfo.innerHTML = "Description: " + brewInfo.description;
        brewdiv.appendChild(newInfo);
        let newInfo2 = document.createElement('p');
        newInfo2.className = "content";
        newInfo2.innerHTML = "ABV = " + brewInfo.abv + "%";
        brewdiv.appendChild(newInfo2);
        let newInfo3 = document.createElement('p');
        newInfo3.className = "content";
        newInfo3.innerHTML = "First Brewed On: " + brewInfo.first_brewed;
        brewdiv.appendChild(newInfo3);
        let hide = document.createElement('button');
        hide.className = "hide";
        hide.innerHTML = "Hide";
        brewdiv.appendChild(hide);
        div.appendChild(brewdiv);
        
        hide.onclick = function() {
          brewdiv.innerHTML = "";
        }
      }



      // function displayInfo(json){
      //   // div.innerHTML = "";
      //   json.forEach((name) => {
      //       let displayInfo = document.createElement('li');
      //       console.log(name)
      //       div.innerHTML = name.name;
      //       div.appendChild(displayInfo);
      //   });
    }


  }
// }






document.addEventListener('DOMContentLoaded', function(){
    fetchInfo();
});
