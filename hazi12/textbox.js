const defaultRender = document.querySelector('#content');

const TextBox = (function(){

    const template = `
        <div class="text-box">
            <h2></h2>
            <h4></h4>
            <p></p>
        </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = template;

    const boxElement = div.firstElementChild;

    return class TextBox {
        constructor(options){

            if (typeof options.renderTo == "string")
                this.parentElement = document.querySelector(options.renderTo);
            else if (typeof options.renderTo == "object" && options.renderTo instanceof HTMLElement)
                this.parentElement = options.renderTo;
            else
                this.parentElement = defaultRender;
                
    
            this.element = boxElement.cloneNode(true);
            if(typeof options.class == "string")
                this.element.classList.add(options.class);
    
            this.titleElement = this.element.querySelector('h2');
            this.subtitleElement = this.element.querySelector('h4');
            this.textElement = this.element.querySelector('p');
    
            this.title = options.title;
            this.subtitle = options.subtitle;
            this.text = options.text;
    
            this.parentElement.appendChild(this.element);
        }
    
        set title(text){
            this.titleElement.textContent = text;
        }
    
        get title(){
            return this.titleElement.textContent;
        }
    
        set subtitle(text){
            this.subtitleElement.textContent = text;
        }
    
        get subtitle(){
            return this.subtitleElement.textContent;
        }
    
        set text(text){
            this.textElement.innerHTML = text;
        }
    
        get text(){
            return this.textElement.textContent;
        }

    }
})();

export{TextBox}