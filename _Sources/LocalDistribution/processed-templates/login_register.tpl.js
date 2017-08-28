define('login_register.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h1 class=\"login-register-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Log in | Register", {"name":"translate","hash":{},"data":data})))
    + "</h1> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h1 class=\"login-register-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Log in", {"name":"translate","hash":{},"data":data})))
    + "</h1> ";
},"5":function(depth0,helpers,partials,data) {
  return " class=\"login-register-body\" ";
  },"7":function(depth0,helpers,partials,data) {
  return " class=\"login-register-body-colored\" ";
  },"9":function(depth0,helpers,partials,data) {
  return " <div class=\"login-register-wrapper-column-login\"><div class=\"login-register-wrapper-login\" data-view=\"Login\"></div></div> ";
  },"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"login-register-wrapper-column-register\"><div class=\"login-register-wrapper-register\"><h2 class=\"login-register-title-register\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "New customer", {"name":"translate","hash":{},"data":data})))
    + " <span><fb:login-button scope=\"public_profile,email\" id=\"facebook-reg\" onlogin=\"checkLoginState();\"> Sign Up With Facebook </fb:login-button></span></h2> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCheckoutAsGuest") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"12":function(depth0,helpers,partials,data) {
  return " <div class=\"login-register-wrapper-guest\" data-view=\"CheckoutAsGuest\"></div> ";
  },"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCheckoutAsGuest") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \" data-view=\"Register\" id=\"register-view\"></div> ";
},"15":function(depth0,helpers,partials,data) {
  return "collapse";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <section class=\"login-register\" ><header class=\"login-register-header\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </header><div ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLogin") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRegisterOrGuest") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></section><script> function statusChangeCallback(response) {\n    if (response.status === 'connected') {\n      GetFbUserDetails();\n    } else if (response.status === 'not_authorized') {\n      document.getElementById('status').innerHTML = 'Please log ' +\n        'into this app.';\n    } else {\n      document.getElementById('status').innerHTML = 'Please log ' +\n        'into Facebook.';\n    }\n  }\n  function checkLoginState() {\n        document.getElementById(\"fblogin\").innerHTML=\"Processing..\";\n    FB.getLoginStatus(function(response) {\n      statusChangeCallback(response);\n    });\n  }\n  window.fbAsyncInit = function()\n    {\n  FB.init({\n    appId      : 'your-app-id',\n    cookie     : true,  // enable cookies to allow the server to access\n                        // the session\n    xfbml      : true,  // parse social plugins on this page\n    version    : 'v2.6' // use graph api version 2.8\n  });\n  FB.getLoginStatus(function(response)\n    {\n    statusChangeCallback(response);});\n  };\n\n    (function(d, s, id){\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = \"//connect.facebook.net/en_US/sdk.js\";\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));\n\n  function GetFbUserDetails()\n    {\n            FB.api('/me?fields=id,email,first_name,last_name', function(response)\n            {\n                     var fname = document.getElementById('register-firstname');\n                     fname.value = response.first_name;\n\n                     var lname = document.getElementById('register-lastname');\n                     lname.value = response.last_name;\n\n                     var email = document.getElementById('register-email');\n                     email.value = response.email;\n\n                     var pass = document.getElementById('register-password');\n                     pass.value = response.id;\n\n                     var pass2 = document.getElementById('register-password2');\n                     pass2.value = response.id;\n                     if(pass!==\"\" && pass2!==\"\")\n                     {\n                        document.getElementById('facebook').click();\n                     }\n    }  );\n} </script>";
},"useData":true}); template.Name = 'login_register'; return template;});