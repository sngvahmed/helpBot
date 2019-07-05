import $ from 'jquery';

class ElementsService {
    constructor() {
        this.elements = [];
    }

    addElement(x, y, elemnt){
        this.elements.push({
            x: x, y: y, element: elemnt
        });
    }
}

class ElementSelectService {
    
    constructor() {
        this.elementService = new ElementsService();

        this.startSelect = false;

        $(window).click(this.pushElementSelect.bind(this));
        $(document).ready(this.init.bind(this));
    }

    init() {
        console.log("Register element showElement", $('#showElement'));
        console.log("Register element pickElement", $('#pickElement'));

        $('#showElement').click(this.showElement.bind(this));
        $('#pickElement').click(() => {
            this.startSelect = true;
            console.log("start picking element");
        });    
    }

    pushElementSelect(e) {
        var x = e.clientX, y = e.clientY, elementMouseIsOver = document.elementFromPoint(x, y);

        if (document.getElementById('helpBot').contains(elementMouseIsOver)) {
            console.log("not allowed to select app module");
            return;
        }
        if (this.startSelect == false) return;
            
        this.elementService.addElement(x, y, elementMouseIsOver);
        this.startSelect = false;
        alert("element selected");
    }

    showElement(){
        console.log(this.elementService.elements);
    }
}

export default new ElementSelectService();