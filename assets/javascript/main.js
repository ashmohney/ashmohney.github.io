$(document).ready(function(){

    let gitClick = $("#icon1");
    let linkClick = $("#icon2");
    
gitClick.on("click", function(gitOne){
    window.open("https://github.com/ashmohney", '_blank');
    console.log(gitOne);
});
// console.log(gitOne);

linkClick.on("click", function(linkOne){
    window.open("http://www.linkedin.com/in/ashmohney", '_blank');
    console.log(linkOne);
});



{/* <a href=""></a> */}




});




