$("button").click(function(){
    $("p").select();
    document.execCommand('copy');
    $(".copied").addClass("displayP");
 })
// $(document).ready(function(){
//     function add(){
//     $(".copied").addClass("displayP");
//     }
//     function remove(){
//         $(".copied").removeClass("displayP");
//     }
//     $("button").click(function(){
//         $("p").select();
//         document.execCommand('copy');
//         add();
//         setTimeout(remove,800);
//     })
// })