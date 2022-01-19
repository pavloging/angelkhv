function shampooFun(){
    let shampoo = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'shampoo';});
    catalogConstant_Delight = shampoo;
    console.log(shampoo)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function balsamFun(){
    let balsam = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'balsam';});
    catalogConstant_Delight = balsam;
    console.log(balsam)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function maskFun(){
    let mask = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'mask';});
    catalogConstant_Delight = mask;
    console.log(mask)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function careFun(){
    let care = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'care';});
    catalogConstant_Delight = care;
    console.log(care)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function stylingFun(){
    let styling = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'styling';});
    catalogConstant_Delight = styling;
    console.log(styling)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function creamFun(){
    let cream = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'cream';});
    catalogConstant_Delight = cream;
    console.log(cream)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function setFun(){
    let set = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'set';});
    catalogConstant_Delight = set;
    console.log(set)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function menFun(){
    let men = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'men';});
    catalogConstant_Delight = men;
    console.log(men)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
}
function otherFun(){
    let other = catalogConstant_Delight.filter((element)=>{return element['productType'] === 'other';});
    catalogConstant_Delight = other;
    console.log(other)
    productsPage.render();
    return catalogConstant_Delight = Constant_Delight;
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


        catalogConstant_Delight.forEach(({id, name, price, img}) => { //catalogConstant_Delight-catalogEpica-catalogKapous-catalogConstant_Delight если изменять их в ручную то будет тот результат который мне нужен
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