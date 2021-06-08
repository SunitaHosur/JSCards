
async function getFromServer(){

fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto')
      .then(response => response.json())
      .then(quotes => {
          function createCard(anime, quote){
              let card = document.createElement('div')
              let title = document.createElement('h2')
              title.innerText = anime;
              let content = document.createElement('div')
              content.innerText = quote
              card.appendChild(title)
              card.appendChild(content)
            
            card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
            card.style.width = '20rem';
            card.style.marginTop = "2%";
            card.style.borderRadius = "15px";
            card.style.flexWrap = "wrap";
              
            title.style.color = "gold";
            title.style.color = "gold";

            content.style.color = "peachpuff";
            content.style.fontSize = "20px"
              
            return card;

          }
          quotes.map(quote => {
              document.getElementById('main').appendChild(createCard(quote.anime, quote.quote))
          })
         
      })

}
getFromServer();

let design = document.getElementById('main')
design.style.display = 'flex';
design.style.flexWrap = "wrap";
design.style.justifyContent = "space-between";