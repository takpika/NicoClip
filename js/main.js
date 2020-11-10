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

function setlanguage(lang){
    var url = document.location.href;
    if (lang == "ja" || lang == "ja-jp" && url == "https://takpika.github.io/NicoClip/en/"){
        document.location.replace("/NicoClip/");
    }else if (url == "https://takpika.github.io/NicoClip/"){
        document.location.replace("/NicoClip/en/");
    }
}
