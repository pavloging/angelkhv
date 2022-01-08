if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    alert('hi');
    let womenElement = document.querySelector('#women');
    womenElement.style.backgroundAttachment = 'scroll;';

    let menElement = document.querySelector('#men');
    menElement.style.backgroundAttachment = 'scroll;';

    let childrenElement = document.querySelector('#children');
    childrenElement.style.backgroundAttachment = 'scroll;';

    document.getElementById("women").style.backgroundAttachment = 'scroll;';
    document.getElementById("men").style.backgroundAttachment = 'scroll;';
    document.getElementById("children").style.backgroundAttachment = 'scroll;';
}