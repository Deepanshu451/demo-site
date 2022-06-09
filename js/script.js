$(function () { 

    $("#navbarToggle").blur(function (event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        $("#collapsable-nav").collapse('hide');
      }
    });
  
    $("#navbarToggle").click(function (event) {
      $(event.target).focus();
    });
  });
  
  (function (global) {
  
  var dc = {};
  
  var homeHtml = "snippets/home-snippet.html";
  
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };
  
  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/loading2.gif'></div>";
    insertHtml(selector, html);
  };
  
  // On page load (before images or CSS)
  document.addEventListener("DOMContentLoaded", function (event) {
  
  // On first load, show home view
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
  });
  
  
  global.$dc = dc;
  
  })(window);
  