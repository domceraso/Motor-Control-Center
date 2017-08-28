define('store_locator_main.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"store-locator-main\"><div class=\"store-locator-main-container\"><div class=\"store-locator-main-container-box\"><div class=\"store-locator-main-container-box-wrap\"><h1>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1></div></div><div class=\"store-locator-main-container-box\"><div class=\"store-locator-main-left\"><div class=\"store-locator-main-location\" data-view=\"LocatorLocation\"></div></div><div class=\"store-locator-main-right\" data-type=\"main-right\"><div class=\"store-locator-main-map\" data-view=\"LocatorMap\" data-type=\"map-view\"></div></div></div></div></div>";
},"useData":true}); template.Name = 'store_locator_main'; return template;});