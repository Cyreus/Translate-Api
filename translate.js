class Translate{

    constructor(word,language)
    {
        this.apikey ="";
        this.word = word;
        this.language=language;
        
        this.xhr = new XMLHttpRequest();

    }

     translateWord()
    {
        const endpoint = "link";//apikeyler , wordler,languagelar burda olacaka

        this.xhr.open("GET",endpoint);

        this.xhr.onload = function(){

            if(this.xhr.status === 200)
            {
                const json = JSON.parse(this.xhr.responseText);
                const text = json.text[0];
                
                callback(null,text);

            }else
            {
                callback("burda bir hata oluştu..",null);
            }
        }

        this.xhr.send();
          
    }
    changeParameters(newWord,newLanguage)
    {
        this.word = newWord;
        this.language = newLanguage;

    }


}