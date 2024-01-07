class UI{

    constructor(){

        this.outputImage = document.getElementById("outputImage");
        this.outputLanguage = document.getElementById("outputLanguage");
        this.outputWord = document.getElementById("outputWord");

        this.LanguageList = document.getElementById("language");

        

    }
    changeUI()
    {
        this.outputImage.src = 'images/'+this.LanguageList.value+'.png';
        this.outputLanguage.innerHTML = this.LanguageList.options[this.LanguageList.selectedIndex].textContent;
    }
    displayTranslate(word)
    {
        this.outputWord.textContent = word;
    }


}