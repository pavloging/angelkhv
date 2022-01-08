class Header {
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }
    render(count) {
        const html = `

           <div class="header-container">

                        <div class="action">
                        <div class="profile" onclick="menuToggle();">
                            <img src="/img/store/fliter.svg" alt="">
                        </div>
                        <div class="menu">
                            <h3>Продукты<br><span>Католог</span></h3>
                            <ul>
                                <li id="shampooToggle"  onclick="shampooFun()">     <img src="/store/common/img-ico/shampoo.png" alt="">  <a href="#">Шампунь</a></li>
                                <li id="balsamToggle"   onclick="balsamFun()">      <img src="/store/common/img-ico/balsam.png" alt="">   <a href="#">Бальзам</a></li>
                                <li id="maskToggle"     onclick="maskFun()">        <img src="/store/common/img-ico/mask.png" alt="">     <a href="#">Маска</a></li>
                                <li id="careToggle"     onclick="careFun()">        <img src="/store/common/img-ico/set.png" alt="">      <a href="#">Уходы</a></li>
                                <li id="stylingToggle"  onclick="stylingFun()">     <img src="/store/common/img-ico/sprey.png" alt="">    <a href="#">Стайлинг</a></li>
                                <li id="creamToggle"    onclick="creamFun()">       <img src="/store/common/img-ico/cream.png" alt="">    <a href="#">Крем</a></li>
                                <li id="setToggle"      onclick="setFun()">         <img src="/store/common/img-ico/set.png" alt="">      <a href="#">Набор</a></li>
                                <li id="menToggle"      onclick="menFun()">         <img src="/store/common/img-ico/other.png" alt="">    <a href="#">Мужчинам</a></li>
                                <li id="otherToggle"    onclick="otherFun()">       <img src="/store/common/img-ico/other.png" alt="">    <a href="#">Другое</a></li>
                            </ul>
                        </div>
                    </div>

                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage()" >
                    <div class="action_basket" onclick="opacitySee()" >
                        <div class="profile_basket" >
                            <img src="/img/store/basket.png" alt="">
                        </div>
                    </div>

                <div class="action_count">
                    <div class="profile_count">
                        <div id="count">${count}</div>
                    </div>
                </div>

            </div>
           </div>

           
           <header>
           <div class="headerImg">
               <a id="vk" href="https://vk.com/event189301200" target="_blank"><img src="/img/Header/vk.png" width="2.5%"></a>
               <a href="/index.html"><img src="/img/Header/header.webp" width="20%"></a>
               <a id="inst" href="https://www.instagram.com/beautystudio_angel/?igshid=1shioejom3yyj" target="_blank"><img src="/img/Header/inst.png" width="2.5%"></a>
           </div>
           <div class="headerText">
               <certificate><a href="/certificate.html">СЕРТИФИКАТЫ</a></certificate>
               <contact><a href="/contact.html">КОНТАКТЫ</a></contact>
               <index><a href="/index.html">ГЛАВНАЯ</a></index>
               <service><a href="/service.html">УСЛУГИ</a></service>
               <shop><a href="/shop.html">МАГАЗИН</a></shop>
           </div>
           <namber>
               <a href="tel:+203596">20-35-96</a><a>,</a><a href="tel:+731761">73-17-61</a>
           </namber>
       </header>
   
       <topNav>
           <div class="navigation">
               <button id="sized" class="menu"><span></span></button>
                   <div id="myModal" class="modal">
                       <div class="modal-content">
   
                           <div class="modal-header">
                               <span class="close">×</span>
                           </div>
                               
                           <div class="modal-body nav">
                               <ul>
                               <li><a href="/index.html">ГЛАВНАЯ</a></li>
                               <li><a href="/service.html">УСЛУГИ</a></li>
                               <li><a href="/shop.html">МАГАЗИН</a></li>
                               <li><a href="/contact.html">КОНТАКТЫ</a></li>
                               <li><a href="/certificate.html">СЕРТИФИКАТЫ</a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
                   <div class=container>
                       <div class="headerImg">
                       <a href="/index.html"><img src="/img/Header/mob-head.png" width="30%"></a>
                       </div>
                   </div>
           </div>
       </topNav>
       
        `;

        ROOT_HEADER_APP.innerHTML = html;
    }
}

function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

function opacitySee() {
    const Seeopacity = document.querySelector('.products-contanier');
    Seeopacity.classList.toggle('active')

    const Clicknone = document.querySelector('.action_basket');
    Clicknone.classList.toggle('active')
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);