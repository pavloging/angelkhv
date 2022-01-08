class header{
    render(){

        const html = `
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

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new header();
headerPage.render();