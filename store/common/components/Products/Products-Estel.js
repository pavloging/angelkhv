function shampooFun(){
    let shampoo = catalogEstel.filter((element)=>{return element['productType'] === 'shampoo';});
    catalogEstel = shampoo;
    console.log(shampoo)
    productsPage.render();
    return catalogEstel = Estel;
}
function balsamFun(){
    let balsam = catalogEstel.filter((element)=>{return element['productType'] === 'balsam';});
    catalogEstel = balsam;
    console.log(balsam)
    productsPage.render();
    return catalogEstel = Estel;
}
function maskFun(){
    let mask = catalogEstel.filter((element)=>{return element['productType'] === 'mask';});
    catalogEstel = mask;
    console.log(mask)
    productsPage.render();
    return catalogEstel = Estel;
}
function careFun(){
    let care = catalogEstel.filter((element)=>{return element['productType'] === 'care';});
    catalogEstel = care;
    console.log(care)
    productsPage.render();
    return catalogEstel = Estel;
}
function stylingFun(){
    let styling = catalogEstel.filter((element)=>{return element['productType'] === 'styling';});
    catalogEstel = styling;
    console.log(styling)
    productsPage.render();
    return catalogEstel = Estel;
}
function creamFun(){
    let cream = catalogEstel.filter((element)=>{return element['productType'] === 'cream';});
    catalogEstel = cream;
    console.log(cream)
    productsPage.render();
    return catalogEstel = Estel;
}
function setFun(){
    let set = catalogEstel.filter((element)=>{return element['productType'] === 'set';});
    catalogEstel = set;
    console.log(set)
    productsPage.render();
    return catalogEstel = Estel;
}
function menFun(){
    let men = catalogEstel.filter((element)=>{return element['productType'] === 'men';});
    catalogEstel = men;
    console.log(men)
    productsPage.render();
    return catalogEstel = Estel;
}
function otherFun(){
    let other = catalogEstel.filter((element)=>{return element['productType'] === 'other';});
    catalogEstel = other;
    console.log(other)
    productsPage.render();
    return catalogEstel = Estel;
}

class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }
    
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';


        catalogEstel.forEach(({id, name, price, img}) => { //catalogEstel-catalogEpica-catalogKapous-catalogConstant_Delight если изменять их в ручную то будет тот результат который мне нужен
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }


            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}"/>
                <span class="products-element__price">💄 ${price} RUB</span>
                <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                ${activeText}
                </button>
            </li>
            `;
        })

        const html = `
            <ul class="products-contanier">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();