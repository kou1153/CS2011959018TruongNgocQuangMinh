$(document).ready(function () {
    itemFetch();
});

function itemFetch() {
    let url = "https://fakestoreapi.herokuapp.com/products";
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            let res = JSON.parse(this.responseText);
            console.log(res);
            getItem(res);
        }
    }
    xhr.send();
}

function getItem(itemList) {

    for (let i = 0; i < 8; i++) {

        let url = itemList[i].image;

        let data = `
                <div class="col-md-3">
                    <img src="${url}" width ="100px" height = "100px">
                        <div class="title">${itemList[i].title}</div>
                            <div class="price-wrapper">
                                <p class="price"> ${[itemList[i].price]}USD</p>
                </div>
                </div>
        `

        $(".products").append(data);
    
    }
}