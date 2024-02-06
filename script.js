

    function changecolor(Element){

        if (Element.style.backgroundColor == "gray") {
            Element.style.backgroundColor = Element.getAttribute("data-original-color")

        } else {

            Element.style.backgroundColor = "gray";
        }

    }

    function alertBtn(){
        alert ("Du klarte ikke la være? ;)");

    }