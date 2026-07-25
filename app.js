let getdiv = document.getElementById("getdiv");
let getsearch = document.getElementById("news");

function getnews() {

    let search = getsearch.value;

    if (search === "") {
        search = "Pakistan";
    }

    getdiv.innerHTML = "";

    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2026-06-24&sortBy=publishedAt&apiKey=63fe3f1d89d44666a70ce86a2f942727`)

        .then(response => response.json())

        .then(data => {

            console.log(data);

            data.articles.forEach(article => {

                getdiv.innerHTML += `

                <div class="col-md-4 mb-4">

                    <div class="card h-100 shadow">

                        <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}"
                        class="card-img-top"
                        alt="News">

                        <div class="card-body">

                            <h5 class="card-title">
                                ${article.title}
                            </h5>

                            <p class="card-text">
                                ${article.description || "No Description Available"}
                            </p>

                        </div>

                        <div class="card-footer">

                            <a href="${article.url}"
                            target="_blank"
                            class="btn btn-primary w-100">

                            Read More

                            </a>

                        </div>

                    </div>

                </div>

                `;

            });

        })

        .catch(error => {

            console.log(error);

        });

}

getnews();