// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery_ujs

//= require_tree


$("#menu").click(function() {
  $('.new_menu').toggleClass('new_menu-active');
});

$(document).ready(function() {

$("#menu_close").click(function() {
  $('.new_menu').removeClass('new_menu-active');
});
});

window.onload=function(){

    getCookie();
    doSomething();
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

function doSomething() {
    var myCookie = getCookie('SouthpawCookie');

    if (myCookie == null) {
      modal_appear();
        console.log("model will appear as no cookie");
    }
    else {
        console.log('you have a cookie');

        var x = getCookieValue('SouthpawCookie');
        if(x == 'accept'){
            console.log('you have an accept cookie');
        }
        else{
            gaOptout();
        console.log('you have a reject cookie');
      }


  }
}



function getCookieValue(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


 function modal_appear(){
     var modal = document.getElementById('simpleModal');
     /*var closeBtn = document.getElementsByClassName('closeBtn')[0];*/
     var acceptBtn = document.getElementById('acceptBtn');

/*closeBtn.addEventListener('click', closeModal);*/
acceptBtn.addEventListener('click', acceptTerms);
     modal.style.display = 'block';
 }

/*function closeModal(){
    document.getElementById('simpleModal').style.display = 'none';
    setcookie('SouthpawCookie','reject',86400);
    //document.cookie="Southpaw=reject";
    gaOptout();
}*/


/*function setcookie(cookieName,cookieValue) {
    var today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000*24*14);
    document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}*/


 function setcookie(variable, value, expires_seconds) {
    var d = new Date();
    d = new Date(d.getTime() + 1000 * expires_seconds);
    document.cookie = variable + '=' + value + '; expires=' + d.toGMTString() + ';';
}




/*function setcookie(c_name,c_value,exdays) {
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   document.cookie=encodeURIComponent(c_name)
     + "=" + encodeURIComponent(c_value)
     + (!exdays ? "" : "; expires="+exdate.toUTCString());
     ;
}*/
var age;


function acceptTerms(){
    var DOBString = document.getElementById("DOB").value;
    getAge(DOBString);

    function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        age--;
}


  if (age >= 18){
    document.getElementById('simpleModal').style.display = 'none';
    setcookie('SouthpawCookie','accept',31536000);

}
else{
  document.getElementById('modal-body').style.display = 'none';
  document.getElementById('noentry').style.display = 'block';

}


}



// Opt-out function
function gaOptout() {
    console.log('youve opted out');
}
