define('ContactUs.Model'
, [
    'Models.Init'
  , 'SC.Model'
  ]
, function
  (
    CommerceAPI
  , SCModel
  )
{

  'use strict';

  return SCModel.extend({

    name: 'ContactUs'

  , validation:
    {
      firstname:
      {
        required: true
      , msg: 'Please enter a first name'
      }
    , lastname:
      {
        required: true
      , msg: 'Please enter a last name'
      }
    , email:
      [
        {
          required: true
        , msg: 'Please enter an email address'
        }
      , {
          pattern: 'email'
        , msg: 'Please enter a valid email address'
        }
      ]
    , title:
      {
        required: true
      , msg: 'Please write a subject'
      }
    , incomingmessage:
      {
        required: true
      , msg: 'Please write a message'
      }
    }

  , create: function(data)
    {
    // Validate! Validate! Validate!
      this.validate(data);

    // Create a bunch of useful variables
      var configuration
      , currentDomain
      , currentDomainMatch
      , request
      , url;

      // Get the config options for the functionality
      configuration = SC.Configuration && SC.Configuration.contactUs;

      // Get the URL for the secure login domain
      currentDomainMatch = CommerceAPI.session.getSiteSettings(['touchpoints'])
      .touchpoints.login
      .match((/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i));

      currentDomain = currentDomainMatch && currentDomainMatch[0];

      // Build the request URL
      url = currentDomain
      + 'app/site/crm/externalcasepage.nl?compid=' + nlapiGetContext().getCompany()
      + '&formid=' + configuration.formId
      + '&h=' + configuration.hash
      + '&globalsubscriptionstatus=1';

    // Include subsidiary data, if relevant
      if (CommerceAPI.context.getFeature('SUBSIDIARIES'))
      {
        data.subsidiary = CommerceAPI.session.getShopperSubsidiary();
      }

    // Make the request!
      try
      {
        response = nlapiRequestURL(url, data);
      }

      // Unfortunately, even successfully submitting data this way results in an exception, so we need to handle that
      catch(e)
      {
        // The 'successful' exception is a redirect error, so let's intercept that
        if (e instanceof nlobjError && e.getCode().toString() === 'ILLEGAL_URL_REDIRECT')
        {
          return {
            successMessage: 'Thanks for contacting us'
          }
        }

        // Finally, let's catch any other error that may come
        return {
          status: 500
        , code: 'ERR_FORM'
        , message: 'There was an error submitting the form, please try again later'
        }
      }
    }
  });
});