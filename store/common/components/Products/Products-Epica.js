function shampooFun(){
    let shampoo = catalogEpica.filter((element)=>{return element['productType'] === 'shampoo';});
    catalogEpica = shampoo;
    console.log(shampoo)
    productsPage.render();
    return catalogEpica = Epica;
}
function balsamFun(){
    let balsam = catalogEpica.filter((element)=>{return element['productType'] === 'balsam';});
    catalogEpica = balsam;
    console.log(balsam)
    productsPage.render();
    return catalogEpica = Epica;
}
function maskFun(){
    let mask = catalogEpica.filter((element)=>{return element['productType'] === 'mask';});
    catalogEpica = mask;
    console.log(mask)
    productsPage.render();
    return catalogEpica = Epica;
}
function careFun(){
    let care = catalogEpica.filter((element)=>{return element['productType'] === 'care';});
    catalogEpica = care;
    console.log(care)
    productsPage.render();
    return catalogEpica = Epica;
}
function stylingFun(){
    let styling = catalogEpica.filter((element)=>{return element['productType'] === 'styling';});
    catalogEpica = styling;
    console.log(styling)
    productsPage.render();
    return catalogEpica = Epica;
}
function creamFun(){
    let cream = catalogEpica.filter((element)=>{return element['productType'] === 'cream';});
    catalogEpica = cream;
    console.log(cream)
    productsPage.render();
    return catalogEpica = Epica;
}
function setFun(){
    let set = catalogEpica.filter((element)=>{return element['productType'] === 'set';});
    catalogEpica = set;
    console.log(set)
    productsPage.render();
    return catalogEpica = Epica;
}
function menFun(){
    let men = catalogEpica.filter((element)=>{return element['productType'] === 'men';});
    catalogEpica = men;
    console.log(men)
    productsPage.render();
    return catalogEpica = Epica;
}
function otherFun(){
    let other = catalogEpica.filter((element)=>{return element['productType'] === 'other';});
    catalogEpica = other;
    console.log(other)
    productsPage.render();
    return catalogEpica = Epica;
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


        catalogEpica.forEach(({id, name, price, img}) => { //catalogEpica-catalogEpica-catalogKapous-catalogConstant_Delight если изменять их в ручную то будет тот результат который мне нужен
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