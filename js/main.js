window.onload = function(){
    var language;
    if (navigator.browserLanguage != null) {
        // Internet Explorer, Opera, 他
        language = navigator.browserLanguage.substr(0, 2);
      } else if(navigator.userLanguage != null) {
        // Internet Explorerの場合
        language = navigator.userLanguage.substr(0, 2);
      } else if(navigator.language != null) {
        // Chrome, Firefox, Opera, 他
        language = navigator.language.substr(0, 2);
      } else {
        // その他
        language = "en";
    }
    setlanguage(language);
}

setlanguage(lang){
    if (lang == "en"){
        document.location.href = "NicoClip/en/";
    }else{
        document.location.href = "NicoClip/";
    }
}
