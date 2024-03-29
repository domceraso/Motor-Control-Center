{{!
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="header-message" data-type="message-placeholder"></div>

<div class="header-main-wrapper">
	<div class="header-subheader">
		<div class="header-subheader-container">
		<ul class="header-subheader-options">
			<li class="header-li-phone">1(888)293-6004</li>
			<li class="header-li-email"><a href="mailto:sales@contactsandcoils.com">sales@contactsandcoils.com</a></li>
		</ul>
		</div>
	</div>
	<nav class="header-main-nav">
	
		<div id="banner-header-top" class="content-banner banner-header-top" data-cms-area="header_banner_top" data-cms-area-filters="global"></div>

		<div class="header-sidebar-toggle-wrapper">
			<button class="header-sidebar-toggle" data-action="header-sidebar-show">
				<i class="header-sidebar-toggle-icon"></i>
			</button>
		</div>

		<div class="header-content">
			<div class="header-logo-wrapper">
				<div data-view="Header.Logo"></div>
			</div>

			
			<div class="header-right-menu">
				<div class="header-menu-profile" data-view="Header.Profile">
				</div>
				<div class="header-menu-locator-mobile" data-view="StoreLocatorHeaderLink"></div>
				<div class="header-menu-searchmobile">
					<button class="header-menu-searchmobile-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
						<i class="header-menu-searchmobile-icon"></i>
					</button>
				</div>

				<div class="header-menu-cart">
					<div class="header-menu-cart-dropdown" >
						<div data-view="Header.MiniCart"></div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom" data-cms-area-filters="global"></div>
	</nav>
</div>

<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>
<div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_menu">
</div>

<div class="header-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>