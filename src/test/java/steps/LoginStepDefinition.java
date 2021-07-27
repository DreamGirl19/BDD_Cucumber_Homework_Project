package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.BankAndCashFillingForm;
import page.LoginPage;
import page.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPageObj;
	BankAndCashFillingForm bankAndCashPageObj;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
		bankAndCashPageObj = PageFactory.initElements(driver, BankAndCashFillingForm.class);
	}

	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String username) throws Throwable {
		loginPageObj.enterUserName(username);
		Thread.sleep(2000);
	}

	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) throws Throwable {
		loginPageObj.enterPassword(password);
		Thread.sleep(2000);
	}

	@And("^User clicks on login button$")
	public void user_clicks_on_login_button() {
		loginPageObj.clickSignInButton();
	}

	@Then("^User should be able to see the dashboard$")
	public void user_should_be_able_to_see_the_dashboard() throws Throwable {
		String expectedTittle = "Dashboard- iBilling";
		String actualTittle = loginPageObj.getPageTitle();
		Assert.assertEquals(expectedTittle, actualTittle);
		Thread.sleep(4000);
	}

	@When("^User clicks on bank and cash$")
	public void user_clicks_on_bank_and_cash() throws Throwable {
		bankAndCashPageObj.clickBankandCash();
		//Thread.sleep(2000);
	}
	
	@When("^User clicks on new account$")
	public void user_clicks_on_new_account() throws Throwable {
		bankAndCashPageObj.clickNewAccount();
		Thread.sleep(4000);
	}
	
	@Then ("^User should able to see the add new account$")
	public void user_should_able_to_see_the_add_new_account() throws Throwable {
		String expectedTitle = "Accounts- iBilling";
		String actualTitle = bankAndCashPageObj.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		Thread.sleep(4000);
	}
	
	@When("^User fill up the form entering accountTittle as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_accountTittle_as(String accountTitle) throws Throwable {
		bankAndCashPageObj.enterAccountTittle(accountTitle);
		Thread.sleep(2000);
	}

	@When ("^User fill up the form entering description as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_description_as(String description2) throws Throwable {
		bankAndCashPageObj.enterDescription(description2);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up the form entering balance as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_balance_as(String balance) throws Throwable {
		bankAndCashPageObj.enterInitialBalance(balance);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up the form entering accountNumber as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_accountNumber_as(String accountNumber) throws Throwable {
		bankAndCashPageObj.enterAccountNumber(accountNumber);
		Thread.sleep(2000);
	}		
	
	@When ("^User fill up the form entering contactPerson as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_contactPerson_as(String person) throws Throwable {
		bankAndCashPageObj.enterContactPerson(person);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up the form entering phone as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_phone_as(String phone) throws Throwable {
		bankAndCashPageObj.enterPhone(phone);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up the form entering internetBankingURL as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_internetBankingURL_as(String url) throws Throwable {
		bankAndCashPageObj.enterInternetBankingURL(url);
		Thread.sleep(2000);
	}
	
	@And ("^User clicks on submit button$")
	public void user_clicks_on_submit_button() {
		bankAndCashPageObj.clickSubmitButton();
	}
	
	@Then ("^User should be able to validate new account created$")
	public void user_should_be_able_to_validate_new_account_created() {
		
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
	}
	
	
