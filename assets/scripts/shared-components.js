$(function(){
    var basepath = window.location.protocol + "//" + window.location.host + "/";
    $("#nav").load(basepath + "assets/shared-components/nav.html"); 
    $("#footer").load(basepath + "assets/shared-components/footer.html"); 
    $("#contact-modal").load(basepath + "assets/shared-components/contact-modal.html"); 
});

// Contact form titles
function setModalHeader(title, secTitle = null){
    document.getElementById("modalTitle").innerHTML = title;

    if(secTitle === null){
        document.getElementById("secondModalTitle").innerHTML = "";
    } else{
        document.getElementById("secondModalTitle").innerHTML = secTitle;
    }
}

// Tawk API
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/5ce553f82846b90c57afddba/default';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();