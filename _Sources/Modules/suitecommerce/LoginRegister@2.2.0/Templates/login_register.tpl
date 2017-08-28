{{!
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<section class="login-register" >

	<header class="login-register-header">
		{{#if showRegister}}
		<h1 class="login-register-title"> {{translate 'Log in | Register'}}</h1>
		{{else}}
		<h1 class="login-register-title"> {{translate 'Log in'}}</h1>
		{{/if}}
	</header>

	<div {{#if showRegister}} class="login-register-body" {{else}} class="login-register-body-colored" {{/if}}>

		{{#if showLogin}}
			<div class="login-register-wrapper-column-login">
				<div class="login-register-wrapper-login" data-view="Login"></div>
			</div>
		{{/if}}

		{{#if showRegisterOrGuest}}
			<div class="login-register-wrapper-column-register">
				<div class="login-register-wrapper-register">
					<h2 class="login-register-title-register">{{translate 'New customer'}}
						<span><!-- Code Button to get The Login With Fb -->
						<fb:login-button scope="public_profile,email" id="facebook-reg" onlogin="checkLoginState();">
							Sign Up With Facebook
						</fb:login-button>
						</span>
					</h2>

					{{#if showCheckoutAsGuest}}
						<div class="login-register-wrapper-guest" data-view="CheckoutAsGuest"></div>
					{{/if}}

					{{#if showRegister}}
						<div class="{{#if showCheckoutAsGuest}}collapse{{/if}} " data-view="Register" id="register-view"></div>
					{{/if}}
				</div>
			</div>
		{{/if}}

	</div>
</section>

<script>
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      GetFbUserDetails();
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }
  function checkLoginState() {
        document.getElementById("fblogin").innerHTML="Processing..";
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  window.fbAsyncInit = function()
    {
  FB.init({
    appId      : 'your-app-id',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.6' // use graph api version 2.8
  });
  FB.getLoginStatus(function(response)
    {
    statusChangeCallback(response);});
  };

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function GetFbUserDetails()
    {
            FB.api('/me?fields=id,email,first_name,last_name', function(response)
            {
                     var fname = document.getElementById('register-firstname');
                     fname.value = response.first_name;

                     var lname = document.getElementById('register-lastname');
                     lname.value = response.last_name;

                     var email = document.getElementById('register-email');
                     email.value = response.email;

                     var pass = document.getElementById('register-password');
                     pass.value = response.id;

                     var pass2 = document.getElementById('register-password2');
                     pass2.value = response.id;
                     if(pass!=="" && pass2!=="")
                     {
                        document.getElementById('facebook').click();
                     }
    }  );
}
</script>