class Shopping {
  handlerClear() {
    ROOT_SHOPPING.innerHTML = "";
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;
    let idElement = [];

    CATALOG.forEach(({ id, name, price, img, quantity }) => {
      price = price * quantity;
      if (productsStore.indexOf(id) !== -1) {
        // Соответственно здесь меняем код внутри кнопок
        // Помимо того что btn_sub и btn_sum теперь методы класса Shopping
        // Я добавил к аргументам этих методов передачу названия товара, который мы +/-
        // Также добавил к каждому <input> свой id товара, для дальнейшег опоиска и замены числа
        htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__quantity"><span class="shopping-element__quantity">
                        <button class="btn-sub" onclick="shoppingPage.btn_sub('${id}')" type="button">-</button>
                        <input id="count-${id}" class="btn-input" type="text" name="field" value="${quantity}" />
                        <button class="btn-sum" onclick="shoppingPage.btn_sum('${id}')" type="button">+</button>
                        </span></td>
                        <td id='price-${id}' class="shopping-element__price">${price} RUB</td>
                        <td class="shopping-element__img"><img src="${img}"></td>
                    </tr>
                `;

        sumCatalog += price;
      }
    });

    CATALOG.forEach(({ id, name, price, quantity }) => {
      if (productsStore.indexOf(id) !== -1) {
        idElement.push("Имя: " + name, " Цена: " + price, " Кол: " + quantity);
        console.log("arr", idElement);
      }
      if (productsStore.indexOf(id) !== -1) {
        const html = `
            <div class="shopping-container">
              <div onclick="opacitySee()"><div class="shopping__close" onclick="shoppingPage.handlerClear();"></div></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                      <td class="shopping-element__name">💥 Сумма:</td>
                      <td class="shopping-element__price">${sumCatalog} RUB</td>
                      <tr>
                        <td>
                        <a href="https://wa.me/79143799898/?text=Добрый день, я с сайта angelkhv.ru, я хочу приобрести: ${idElement}" target="_blank" style="
                        color: #000;
                        font-size: inherit;
                        font-weight: bold;
                        padding: var(--spacing-medium);
                        ">
                        <i class="fa fa-whatsapp" style="font-size:32px;color:green;margin-top:-10px;"></i> Оформить заказ через WhatsApp</a>
                        </td>
                      </tr>
                    </tr>
                </table>
            </div>
            `;

        ROOT_SHOPPING.innerHTML = html;
      }

      const even = (element) => element; //Проверка есть ли элемент

      if (productsStore.some(even) === false) {
        const html = `
        <div class="shopping-container">
          <div onclick="opacitySee()"><div class="shopping__close" onclick="shoppingPage.handlerClear();"></div></div>
            <table>
                ${htmlCatalog}
                <tr>
                  <td class="shopping-element__name">💥 Пожалуйста, выберите товар</td>
                  <tr>
                    <td>
                    <a href="https://wa.me/79143799898/?text=Добрый день, я с сайта angelkhv.ru, я хочу target="_blank" style="
                    color: #000;
                    font-size: inherit;
                    font-weight: bold;
                    padding: var(--spacing-medium);
                    ">
                    <i class="fa fa-whatsapp" style="font-size:32px;color:green"></i> Связаться по WhatsApp</a>
                    </td>
                  </tr>
                </tr>
            </table>
        </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
      }
    });
  }
  // Для начала - перенёс методы добавления и удаления внутрь класса
  btn_sum(product_id) {
    // product_id -  айдишник продукта, которого становиться на один больше

    // Ищем в котологе продукт, используя его айдишник
    var edited_product = CATALOG.filter(function (x) {
      return x.id === product_id;
    });

    // После этого увеличиваем кол-во продукта на один
    edited_product[0]["quantity"]++;

    var new_price =
      Number(edited_product[0]["quantity"]) *
      Number(edited_product[0]["price"]);

    //Затем ищем нужный нам <input> по id`шнику
    var html_tag_input = document.querySelector("#count-" + product_id);
    // И меняем айди без перезагрузки
    html_tag_input.value = edited_product[0]["quantity"];

    // Затем повторяем это с ценой
    var html_tag_td_price = document.querySelector("#price-" + product_id);
    html_tag_td_price.innerHTML = new_price + " RUB";
    //Затем нужно посчитать новую цену, кода многа, поэтмоу новая функиция
    this.countNewOrderPrice();
  }

  btn_sub(product_id) {
    var edited_product = CATALOG.filter(function (x) {
      return x.id === product_id;
    });

    // Здесь также, но нужно проверить что продуктов не станет ноль
    if (edited_product[0]["quantity"] > 1) {
      edited_product[0]["quantity"]--;
      var new_price =
        Number(edited_product[0]["quantity"]) *
        Number(edited_product[0]["price"]);

      var html_tag_input = document.querySelector("#count-" + product_id);
      html_tag_input.value = edited_product[0]["quantity"];

      var html_tag_td_price = document.querySelector("#price-" + product_id);

      html_tag_td_price.innerHTML = new_price + " RUB";
      this.countNewOrderPrice();
    }
  }

  // Подсчёт новой цены
  countNewOrderPrice() {
    // получаем все тэги, связанные с ценой по классу
    var tags_with_prices = document.querySelectorAll(
      ".shopping-element__price"
    );
    var sumPrice = 0;
    //Начинаем их перебирать
    for (var i = 0; i < tags_with_prices.length; i++) {
      var tag_price = tags_with_prices[i];

      // Если у нас номер тэга последний, то мы имеем дело с тэгом финальной цены
      if (i + 1 === tags_with_prices.length) {
        // Задаём финальную цену
        tag_price.innerHTML = sumPrice + " RUB";
      } else {
        // Танцы с бубном:
        // Берётся текст старой цены из тэга, вырезается слово RUB, и запятая удаляется
        var slice = tag_price.innerHTML.slice(0, -4).replace(",", "");
        // Чтобы затем нормельно конвертировать строку в число и начать считать новую цену
        sumPrice += Number(slice);
      }
      console.log("curr price:", sumPrice);
    }
  }
}
const shoppingPage = new Shopping();
