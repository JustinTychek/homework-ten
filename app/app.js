import * as MODEL from "../model/model.js";


function init(){


    $("nav .links a").click(function(e){
        let btnId = this.id;
        let contentId = btnId + "Content";
        $("#app").html(eval(contentId));


        if (btnId == "home") {
            // $("nav").css("display", "block")
            $("nav") //was hero
            .removeClass("black-nav")
            .addClass("white-nav");
            currentHeroImage = btnId;
        }else {
            $("nav")
            .removeClass("white-nav")
            .addClass("black-nav");
            currentHeroImage = btnId;
        }

        //gets the page content from model.js
        MODEL.getPageContent(contentId);
    })
}

$(document).ready(function(){
    init()
})