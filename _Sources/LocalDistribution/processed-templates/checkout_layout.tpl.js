define('checkout_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return " <div id=\"layout\" class=\"checkout-layout\"><header id=\"site-header\" class=\"checkout-layout-header\" data-view=\"Header\"></header><div id=\"main-container\"><div class=\"checkout-layout-breadcrumb\" data-view=\"Global.Breadcrumb\" data-type=\"breadcrumb\"></div><div id=\"content\" class=\"checkout-layout-content\"></div></div><footer id=\"site-footer\" class=\"checkout-layout-footer\" data-view=\"Footer\"></footer></div>";
},"useData":true}); template.Name = 'checkout_layout'; return template;});