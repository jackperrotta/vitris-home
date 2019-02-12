$(function(){
    var basepath = window.location.protocol + "//" + window.location.host + "/";
    $("#nav").load(basepath + "assets/shared-components/nav.html"); 
    $("#footer").load(basepath + "assets/shared-components/footer.html"); 
    $("#contact-modal").load(basepath + "assets/shared-components/contact-modal.html"); 
});