define('store_locator_upgrade.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"store-locator-upgrade-container\"><h2>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your browser does not support this feature", {"name":"translate","hash":{},"data":data})))
    + "</h2><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please update to the latest version", {"name":"translate","hash":{},"data":data})))
    + "</p></div>";
},"useData":true}); template.Name = 'store_locator_upgrade'; return template;});