define('newsletter.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "error";
  },"3":function(depth0,helpers,partials,data) {
  return " <div data-view=\"GlobalMessageFeedback\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <form class=\"newsletter-suscription-form\" data-action=\"newsletter-subscribe\" novalidate><div data-validation=\"control-group\"><h5 class=\"newsletter-subscription-form-label\" for=\"login-email\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Newsletter Sign Up", {"name":"translate","hash":{},"data":data})))
    + "</h5><div class=\"newsletter-subscription-form-container ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-validation=\"control\"><input\n				name=\"email\"\n				id=\"email\"\n				type=\"email\"\n				class=\"newsletter-suscription-form-input\"\n				placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "username@domain.com", {"name":"translate","hash":{},"data":data})))
    + "\"\n			><button type=\"submit\" class=\"newsletter-subscription-form-button-subscribe\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subscribe", {"name":"translate","hash":{},"data":data})))
    + " </button><div class=\"newsletter-alert-placeholder\" data-type=\"alert-placeholder\" > ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isFeedback") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></form>";
},"useData":true}); template.Name = 'newsletter'; return template;});