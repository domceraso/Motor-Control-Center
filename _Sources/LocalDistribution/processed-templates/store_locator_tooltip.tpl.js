define('store_locator_tooltip.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"store-locator-tooltip-box-distance\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"storeDistance") || (depth0 != null ? compilerNameLookup(depth0,"storeDistance") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"storeDistance","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"distanceUnit") || (depth0 != null ? compilerNameLookup(depth0,"distanceUnit") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"distanceUnit","hash":{},"data":data}) : helper)))
    + " </span> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"store-locator-tooltip-box-address\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"storeAddress") || (depth0 != null ? compilerNameLookup(depth0,"storeAddress") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"storeAddress","hash":{},"data":data}) : helper)))
    + " </span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li class=\"store-locator-tooltip-box\"><a href=\"stores/details/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"storeId") || (depth0 != null ? compilerNameLookup(depth0,"storeId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"storeId","hash":{},"data":data}) : helper)))
    + "\"><span class=\"store-locator-tooltip-box-count\"><span>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"index") || (depth0 != null ? compilerNameLookup(depth0,"index") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + "</span></span><ul class=\"store-locator-tooltip-box-info\"><li class=\"store-locator-tooltip-store-name\"><strong>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"storeName") || (depth0 != null ? compilerNameLookup(depth0,"storeName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"storeName","hash":{},"data":data}) : helper)))
    + "</strong></li><li class=\"store-locator-tooltip-box-details\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showStoreDistance") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showStoreAddress") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </li></ul><a href=\"stores/details/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"storeId") || (depth0 != null ? compilerNameLookup(depth0,"storeId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"storeId","hash":{},"data":data}) : helper)))
    + "\" class=\"store-locator-tooltip-box-arrow-container\"><i class=\"store-locator-tooltip-box-arrow-icon\"></i></a></a></li>";
},"useData":true}); template.Name = 'store_locator_tooltip'; return template;});