

    function changecolor(Element){

        if (Element.style.backgroundColor == Element.getAttribute("data-original-color")) {
            Element.style.backgroundColor = "green"

        } else {

            Element.style.backgroundColor = Element.getAttribute("data-original-color");
        }

    }
