Feature: Techfios bank and cash new account functionality validation 

Background: 
	 Given User is on techfios login page
	
@Smoke
Scenario Outline: User should be able to login with valid credentials
	When User enters the username as "<username>" 
	When User enters the password as "<password>" 
	And User clicks on login button 
	Then User should be able to see the dashboard 
	When User clicks on bank and cash
	When User clicks on new account
	Then User should able to see the add new account  
	When User fill up the form entering accountTittle as "<accountTitle>" 
	When User fill up the form entering description as "<description2>"
	When User fill up the form entering balance as "<balance>"
	When User fill up the form entering accountNumber as "<accountNumber>"
	When User fill up the form entering contactPerson as "<contactPerson>"
	When User fill up the form entering phone as "<phone>" 
	When User fill up the form entering internetBankingURL as "<internetBankingUrl>" 
	And User clicks on submit button 
	Then User should be able to validate new account created 
	Examples: 
		|username|password|accountTitle|description2|balance|accountNumber|contactPerson|phone|internetBankingUrl| 
		|demo@techfios.com|abc123|Dream Girl01|Saving Account|40000|SB354278654|Dream G|212 321 4406|/www.techfios.com/billing/?ng=login/| 