define('ContactUs.Model'
, [
    'Backbone'
  , 'underscore'
  , 'Utils'
  ]
, function
  (
    Backbone
  , _
  , Utils
  )
{
  'use strict';

  return Backbone.Model.extend({
    urlRoot: Utils.getAbsoluteUrl('services/ContactUs.Service.ss')

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
  });
});