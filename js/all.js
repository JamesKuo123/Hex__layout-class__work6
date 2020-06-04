function hamburgerShow(){
    document.getElementById("mobileHeaderMenu").classList.toggle("show");
}

function toCheckout2(){
    window.location.href="checkout2.html";
}

// cart modal在進入detail.html的時候會自動跳出
$('#cart').modal('show');