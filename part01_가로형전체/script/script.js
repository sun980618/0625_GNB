/*eslint-disable*/

$(function(){
   $("li.mainLi").mouseover(function(){

       $(this).children("ul.subMenu").stop().slideDown(800);
       /*가로전체형 코드$("ul.subMenu").stop().slideDown(800);*/
   });

    $("li.mainLi").mouseout(function(){

        $(this).children("ul.subMenu").stop().slideUp(300);
        /*가로전체형 코드$("ul.subMenu").stop().slideUp(300)*/
    });

    /*.stop() 매서드는 메모리 유지기능을 소멸시켜서 사용자의 이벤트가 종료되면 기능 또한 즉시 멈추는 기능*/
});
