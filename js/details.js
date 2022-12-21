function newsDetails(news_id) {

    fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
        .then(res => res.json())
        .then(data => newsModal(data.data))
        .catch(error => console.log(error));

    const newsModal = Modals => {

        const News_Title = document.getElementById('Newstitle');
        News_Title.innerText = '';
        const News_Detail = document.getElementById('news-details')
        News_Detail.innerHTML = '';

        Modals.forEach(modal => {

            News_Title.innerText = `${modal.title}`;
            let div = document.createElement('div');
            div.innerHTML = `<div class="container mt-5 col-lg-12">

                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-12">
                            <img src="${modal.image_url ? modal.image_url : 'No Image found'}" class="img-fluid rounded-start " alt="...">
                        </div>
                        
                            
                    </div>

                </div>
            </div>
            <div class="container mt-5 col-lg-12">

                <div class="card mb-3">
                    <div class="row g-0">
                        
                        <div class="card-body">
                        
                              <p class="card-text pt-3 text-truncate" style="max-width: 650px;" >${modal.details ? modal.details : 'No details found'}</p>
                                <div class="d-flex justify-content-evenly">
                                    <div>
                                        <p class='font'>${modal.author.name ? modal.author.name : 'No Author'}</p>
                                        <p class="text-muted fonts">${modal.author.published_date ? modal.author.published_date.slice(0, 10) : "No Data Found"}</p>
                                    </div
                                    <div>
                                        <h6> View: ${modal.total_view ? modal.total_view : 'No view'}</h6> 
                                        <h6> Rating: ${modal.rating.number ? modal.rating.number : 'No Ratings found'}</h6>
                                    </div
                                </div>

                                
                        
                        
                            
                    </div>

                </div>
            </div>`;


            News_Detail.appendChild(div);

        })

    }
}