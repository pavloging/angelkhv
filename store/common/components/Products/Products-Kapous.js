function shampooFun(){
    let shampoo = catalogKapous.filter((element)=>{return element['productType'] === 'shampoo';});
    catalogKapous = shampoo;
    console.log(shampoo)
    productsPage.render();
    return catalogKapous = Kapous;
}
function balsamFun(){
    let balsam = catalogKapous.filter((element)=>{return element['productType'] === 'balsam';});
    catalogKapous = balsam;
    console.log(balsam)
    productsPage.render();
    return catalogKapous = Kapous;
}
function maskFun(){
    let mask = catalogKapous.filter((element)=>{return element['productType'] === 'mask';});
    catalogKapous = mask;
    console.log(mask)
    productsPage.render();
    return catalogKapous = Kapous;
}
function careFun(){
    let care = catalogKapous.filter((element)=>{return element['productType'] === 'care';});
    catalogKapous = care;
    console.log(care)
    productsPage.render();
    return catalogKapous = Kapous;
}
function stylingFun(){
    let styling = catalogKapous.filter((element)=>{return element['productType'] === 'styling';});
    catalogKapous = styling;
    console.log(styling)
    productsPage.render();
    return catalogKapous = Kapous;
}
function creamFun(){
    let cream = catalogKapous.filter((element)=>{return element['productType'] === 'cream';});
    catalogKapous = cream;
    console.log(cream)
    productsPage.render();
    return catalogKapous = Kapous;
}
function setFun(){
    let set = catalogKapous.filter((element)=>{return element['productType'] === 'set';});
    catalogKapous = set;
    console.log(set)
    productsPage.render();
    return catalogKapous = Kapous;
}
function menFun(){
    let men = catalogKapous.filter((element)=>{return element['productType'] === 'men';});
    catalogKapous = men;
    console.log(men)
    productsPage.render();
    return catalogKapous = Kapous;
}
function otherFun(){
    let other = catalogKapous.filter((element)=>{return element['productType'] === 'other';});
    catalogKapous = other;
    console.log(other)
    productsPage.render();
    return catalogKapous = Kapous;
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


        catalogKapous.forEach(({id, name, price, img}) => { //catalogKapous-catalogEpica-catalogKapous-catalogConstant_Delight если изменять их в ручную то будет тот результат который мне нужен
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            // console.log(balsamFun(CATALOG));

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