define('facets_faceted_navigation_item_category.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"facets-faceted-navigation-item-category\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"facets-faceted-navigation-item-category-facet-group\" data-type=\"rendered-facet\" data-facet-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetId","hash":{},"data":data}) : helper)))
    + "\"  id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " facets-faceted-navigation-item-category-facet-group-wrapper\"><div class=\"facets-faceted-navigation-item-category-facet-group-content\"><ul class=\"facets-faceted-navigation-item-category-facet-optionlist\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"displayValues") : depth0), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </ul> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showExtraValues") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"facets-faceted-navigation-item-category-facet-group-expander\"><h3 class=\"facets-faceted-navigation-item-category-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"parentName") || (depth0 != null ? compilerNameLookup(depth0,"parentName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentName","hash":{},"data":data}) : helper)))
    + "</h3></div> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"#\" class=\"facets-faceted-navigation-item-category-facet-group-expander\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + " .facets-faceted-navigation-item-category-facet-group-wrapper\" data-type=\"collapse\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Category", {"name":"translate","hash":{},"data":data})))
    + "\"><i class=\"facets-faceted-navigation-item-category-facet-group-expander-icon\"></i><h3 class=\"facets-faceted-navigation-item-category-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"parentName") || (depth0 != null ? compilerNameLookup(depth0,"parentName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentName","hash":{},"data":data}) : helper)))
    + "</h3></a> ";
},"6":function(depth0,helpers,partials,data) {
  return " collapse ";
  },"8":function(depth0,helpers,partials,data) {
  return " collapse in ";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li><a class=\"facets-faceted-navigation-item-category-facet-option ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"link") || (depth0 != null ? compilerNameLookup(depth0,"link") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"displayName") || (depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayName","hash":{},"data":data}) : helper)))
    + " </a></li> ";
},"11":function(depth0,helpers,partials,data) {
  return "option-active";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <ul class=\"facets-faceted-navigation-item-category-facet-optionlist-extra collapse\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"extraValues") : depth0), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul><div class=\"facets-faceted-navigation-item-category-optionlist-extra-wrapper\"><button class=\"facets-faceted-navigation-item-category-optionlist-extra-button\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + " .facets-faceted-navigation-item-category-facet-optionlist-extra\" data-action=\"see-more\"><span data-type=\"see-more\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See More", {"name":"translate","hash":{},"data":data})))
    + " </span><span data-type=\"see-less\" class=\"facets-faceted-navigation-item-category-alt-caption\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See Less", {"name":"translate","hash":{},"data":data})))
    + " </span></button></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFacet") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"useData":true}); template.Name = 'facets_faceted_navigation_item_category'; return template;});