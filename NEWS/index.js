// 353af44ca98f42f5a3852eb0e5af3bde
console.log("hii");
let source = 'bbc-news';
let apikey = '353af44ca98f42f5a3852eb0e5af3bde';
let newsAccord = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function(element,index) {
            
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                 ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
                        
        });
        newsAccord.innerHTML = newsHtml;
        
        
    }
    else {
        console.log('error');
    }

};
xhr.send()

// function getData(){
//     url="https://developer.github.com/v3/users/#get-a-user";
//     fetch(url).then((response)=> {response.json()})
//     .then((data) =>{ console.log(data)})
// }

// getData();
