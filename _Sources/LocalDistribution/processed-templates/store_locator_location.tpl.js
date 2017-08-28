define('store_locator_location.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"store-locator-location-list-view\"><div class=\"store-locator-location-pusher\"><div class=\"store-locator-location-nav-back\"><a href=\"#\" data-action=\"refine-search\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "< Back to Refine Search", {"name":"translate","hash":{},"data":data})))
    + "</a></div><div class=\"store-locator-location-nav-button-container\"><div class=\"store-locator-location-nav-button-container-grid\"><button class=\"store-locator-location-nav-button-list active\" data-action=\"show-list\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "List View", {"name":"translate","hash":{},"data":data})))
    + " </button></div><div class=\"store-locator-location-nav-button-container-grid\"><button class=\"store-locator-location-nav-button-map\" data-action=\"show-map\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Map View", {"name":"translate","hash":{},"data":data})))
    + " </button></div></div><div class=\"store-locator-location-nav-description\"><span class=\"store-locator-location-nav-description-highlight\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalStores") || (depth0 != null ? compilerNameLookup(depth0,"totalStores") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalStores","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "stores", {"name":"translate","hash":{},"data":data})))
    + "</span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "near", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"store-locator-location-nav-description-geolocation\">\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"myposition") || (depth0 != null ? compilerNameLookup(depth0,"myposition") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"myposition","hash":{},"data":data}) : helper)))
    + "\"</span></div><div class=\"store-locator-location-list\" data-id=\"list-view\" data-type=\"list-view\"><ul class=\"store-locator-location-list-container\"  data-view=\"LocatorList\"></ul></div></div></div> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"store-locator-location-search-view\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLocalizationMap") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"store-locator-location-enter-location\" data-type=\"location-enter\"><label>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Enter Address, Zip Code or City", {"name":"translate","hash":{},"data":data})))
    + "</label><input id=\"autocomplete\" class=\"store-locator-location-input-autocomplete\"/><div class=\"store-locator-location-geolocation-message-error\" data-action=\"message-error\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select a valid address.", {"name":"translate","hash":{},"data":data})))
    + " </div><div class=\"store-locator-location-buttons-container\"><div class=\"store-locator-location-buttons-container-find\"><button class=\"store-locator-location-button-find\" data-action=\"find-stores\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Find Stores", {"name":"translate","hash":{},"data":data})))
    + " </button></div><div class=\"store-locator-location-buttons-container-or-wrap\"><div class=\"store-locator-location-buttons-container-or\" data-type=\"geolocation-or\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "or", {"name":"translate","hash":{},"data":data})))
    + "</span></div></div><div class=\"store-locator-location-buttons-container-geolocalization\" data-type=\"geolocation-button\"><button class=\"store-locator-location-button-current\" data-action=\"show-geolocation\"><i class=\"store-locator-location-button-current-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Use Current Location", {"name":"translate","hash":{},"data":data})))
    + " </button></div></div><div class=\"store-locator-location-geolocation\" data-type=\"location-geolocation\"><div class=\"store-locator-location-geolocation-message-warning\" data-action=\"message-warning\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "To use this functionality enable geolocation.", {"name":"translate","hash":{},"data":data})))
    + " </div></div></div></div> ";
},"4":function(depth0,helpers,partials,data) {
  return " <div id=\"map-localization\" class=\"store-locator-location-map-localization\" data-view=\"LocalizationMap\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"store-locator-location\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showList") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <a class=\"store-locator-location-see-all-stores\" href=\"stores/all\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See complete list of stores", {"name":"translate","hash":{},"data":data})))
    + "</a></div>";
},"useData":true}); template.Name = 'store_locator_location'; return template;});