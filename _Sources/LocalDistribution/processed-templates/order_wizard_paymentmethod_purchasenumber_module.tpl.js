define('order_wizard_paymentmethod_purchasenumber_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"order-wizard-paymentmethod-purchasenumber-module\"><h3 class=\"order-wizard-paymentmethod-purchasenumber-module-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchase Order Number", {"name":"translate","hash":{},"data":data})))
    + " </h3><div class=\"order-wizard-paymentmethod-purchasenumber-module-row\"><label for=\"purchase-order-number\" class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Enter Purchase Order Number", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-optional\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(Optional)", {"name":"translate","hash":{},"data":data})))
    + " </span></label><input\n			type=\"text\"\n			name=\"purchase-order-number\"\n			id=\"purchase-order-number\"\n			class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-value\"\n			value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"purchaseNumber") || (depth0 != null ? compilerNameLookup(depth0,"purchaseNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"purchaseNumber","hash":{},"data":data}) : helper)))
    + "\"\n		></div></div>";
},"useData":true}); template.Name = 'order_wizard_paymentmethod_purchasenumber_module'; return template;});