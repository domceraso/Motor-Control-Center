define('facets_facet_browse.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"facets-facet-browse-content\"><div class=\"facets-facet-browse-facets\" data-action=\"pushable\" data-id=\"product-search-facets\"><div data-cms-area=\"facet_navigation_top\" data-cms-area-filters=\"page_type\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCategory") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-view=\"Facets.FacetedNavigation\" data-exclude-facets=\"commercecategoryname,category\"></div><div data-cms-area=\"facet_navigation_bottom\" data-cms-area-filters=\"page_type\"></div></div><div class=\"facets-facet-browse-results\" itemscope=\"\" itemtype=\"http://schema.org/ItemList\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCategory") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <header class=\"facets-facet-browse-header\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showItems") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </header><meta itemprop=\"name\" content=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\"/><div id=\"banner-section-top\" class=\"content-banner banner-section-top\" data-cms-area=\"item_list_banner_top\" data-cms-area-filters=\"path\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showItems") : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div><div class=\"facets-facet-browse-pagination\" data-view=\"GlobalViews.Pagination\"></div> ";
},"2":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Facets.CategorySidebar\" class=\"facets-facet-browse-facets-sidebar\"></div> ";
  },"4":function(depth0,helpers,partials,data) {
  return " <div class=\"facets-facet-browse-category\"><div data-view=\"Facets.Browse.CategoryHeading\"></div><div data-view=\"Facets.CategoryCells\"></div></div> ";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <h1 class=\"facets-facet-browse-title\" data-quantity=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"total") || (depth0 != null ? compilerNameLookup(depth0,"total") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </h1><nav class=\"facets-facet-browse-list-header\"><div class=\"facets-facet-browse-list-header-actions\" data-view=\"Facets.ItemListDisplaySelector\"></div><div class=\"facets-facet-browse-list-header-expander\"><button class=\"facets-facet-browse-list-header-expander-button collapsed\" data-toggle=\"collapse\" data-target=\"#list-header-filters\" aria-expanded=\"true\" aria-controls=\"list-header-filters\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sort & Filter", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"facets-facet-browse-list-header-expander-icon\"></i></button></div><div class=\"facets-facet-browse-list-header-filters collapse\" id=\"list-header-filters\"><div class=\"facets-facet-browse-list-header-filters-wrapper\"><div class=\"facets-facet-browse-list-header-filters-row\"><div class=\"facets-facet-browse-list-header-filter-column\" data-view=\"Facets.ItemListShowSelector\"></div><div class=\"facets-facet-browse-list-header-filter-column\" data-view=\"Facets.ItemListSortSelector\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasItemsAndFacets") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></nav> ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTotalProductsOne") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 Result for <span class=\"facets-facet-browse-title-alt\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) Results for <span class=\"facets-facet-browse-title-alt\">$(1)</span>", (depth0 != null ? compilerNameLookup(depth0,"total") : depth0), (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTotalProductsOne") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 Product", {"name":"translate","hash":{},"data":data})))
    + " ";
},"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) Products", (depth0 != null ? compilerNameLookup(depth0,"total") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"facets-facet-browse-list-header-filter-column\"><button class=\"facets-facet-browse-list-header-filter-facets\" data-type=\"sc-pusher\" data-target=\"product-search-facets\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Narrow By", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"facets-facet-browse-list-header-filter-facets-icon\"></i></button></div> ";
},"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"facets-facet-browse-narrowedby\" data-view=\"Facets.FacetsDisplay\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmptyList") : depth0), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"20":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Facets.Items.Empty\"></div> ";
  },"22":function(depth0,helpers,partials,data) {
  return " <div class=\"facets-facet-browse-items\" data-view=\"Facets.Items\" ></div> ";
  },"24":function(depth0,helpers,partials,data) {
  return " <div class=\"facets-facet-browse-empty-items\" data-view=\"Facets.Items.Empty\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <section class=\"facets-facet-browse\"><div data-cms-area=\"item_list_banner\" data-cms-area-filters=\"page_type\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showResults") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(24, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div id=\"banner-section-bottom\" class=\"content-banner banner-section-bottom\" data-cms-area=\"item_list_banner_bottom\" data-cms-area-filters=\"page_type\"></div></section> ";
},"useData":true}); template.Name = 'facets_facet_browse'; return template;});