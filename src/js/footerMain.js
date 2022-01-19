class footer{
    render(){

        const html = `
        <footer>
        <div id="footerNamer"><a href="tel:+203596">20-35-96</a><a>,</a><a href="tel:+731761">73-17-61</a></div>
        <div class="footerText">
                <a href="/certificate.html">СЕРТИФИКАТЫ</a>
                <a href="/contact.html">КОНТАКТЫ</a>
                <a href="/index.html">ГЛАВНАЯ</a>
                <a href="/service.html">УСЛУГИ</a>
                <a href="/shop.html">МАГАЗИН</a>
        </div>
    
        <div class="footerImg">
            <a id="vk1" href="https://vk.com/event189301200" target="_blank"><img src="/img/Header/vk.png" width="2.5%"></a>
            <a id="inst1" href="https://www.instagram.com/beautystudio_angel/?igshid=1shioejom3yyj" target="_blank"><img src="/img/Header/inst.png" width="2.5%"></a>
        </div>
    </footer>
        `;
        
        ROOT_FOOTER.innerHTML = html;
    }
}

const footerPage = new footer();
footerPage.render();