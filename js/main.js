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
    if (lang == "ja" && url.includes("/en/")){
        document.location.replace(url.replace("/en/","/"));
    }else if (lang != "ja" && !url.includes("/en/")){
        document.location.replace(url.replace("/","/en/"));
    }
}

function onClick(){
  if(jQuery('#title_bar .menu').css('display') === 'block'){
    jQuery('#title_bar .menu').slideUp('1500');
  }else{
    jQuery('#title_bar .menu').slideDown('1500');
  }
}
