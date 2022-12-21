// display all news

function loadNewsDetails(cat_id, a) {

    // start spinner or loader
    toggleSpinner(true);
    // fetch(`https://openapi.programming-hero.com/api/news/category/0${cat_id}`)
    fetch(`https://openapi.programming-hero.com/api/news/category/${cat_id}`)
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));

    const displayNews = News => {
        const showNews = document.getElementById('news');
        showNews.innerHTML = '';

        // sorting on the basis of view

        News.sort((a, b) => b.total_view - a.total_view);

        News.forEach(news => {

            const div = document.createElement('div');
            div.innerHTML = `<div class="container mt-5 col-lg-12">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${news.image_url ? news.image_url : 'No Image found'}" class="img-fluid rounded-start " alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${news.title ? news.title : 'No title found'}</h5>
                                <p class="card-text pt-3 " 
                                >${news.details ? news.details.slice(0, 200) : 'No details found'}...</p>

                                <div class="d-flex justify-content-evenly pt-5 pb-4">
                                    <div class="col pe-5">
                                        <div class="d-flex ">
                                            <div>
                                                <a href="#" class="d-block  text-decoration-none pe-2">
                                                    <img src="${news.thumbnail_url ? news.thumbnail_url : 'No image found'}" alt="mdo" width="50" height="50"
                                                        class="rounded-circle">
                                                </a>
                                            </div>
                                            <div>
                                                <p class='font'>${news.author.name ? news.author.name : 'No Author'}</p>
                                                <p class="text-muted fonts">${news.author.published_date ? news.author.published_date.slice(0, 10) : "No Data Found"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h6>View: ${news.total_view ? news.total_view : 'No view'}</h6>
                                    </div>
                                    <div class="col">
                                        <h6 class="d-none d-sm-block d-lg-block">Rating: ${news.rating.number ? news.rating.number : 'No Ratings found'}</h6>
                                    </div>
                                    <div class="col">
                                        <button onclick="newsDetails('${news._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            showNews.appendChild(div);

        })


        toggleSpinner(true);
        const length = document.getElementById('length');

        length.innerText = '';
        if (News.length > 0) {
            const element = document.createElement('div');
            element.innerHTML = `<textarea name=""  class="text-center column" >${News.length
                } items found on ${a} </textarea > `;
            length.appendChild(element);

        } else {
            const element = document.createElement('div');
            element.innerHTML = `<textarea  class="text-center column" >"No News Found on ${a} "</textarea > `;
            length.appendChild(element);
            // end spinner or loader
            toggleSpinner(false);
        }
        // end spinner or loader
        toggleSpinner(false);

    }

}



loadNewsDetails('08', 'all news');