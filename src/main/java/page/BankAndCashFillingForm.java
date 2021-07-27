package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashFillingForm {
	WebDriver driver;
	
public BankAndCashFillingForm(WebDriver driver) {
	this.driver = driver;
}
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a")
	WebElement BankandCash;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement NewAccount;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement AccountTittle;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement InitialBalance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement InternetBankingURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement Submit;

	// Methods to interact with the elements
	public void clickBankandCash() {
		BankandCash.click();
	}

	public void clickNewAccount() {
		NewAccount.click();
	}

	public void enterAccountTittle(String accountTitle) {
		AccountTittle.sendKeys(accountTitle);
	}
	
	public void enterDescription(String description2) {
		Description.sendKeys(description2);
	}

	public void enterInitialBalance(String balance) {
		InitialBalance.sendKeys(balance);
	}

	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
	}

	public void enterContactPerson(String person) {
		ContactPerson.sendKeys(person);
	}

	public void enterPhone(String phone) {
		Phone.sendKeys(phone);
	}

	public void enterInternetBankingURL(String url) {
		InternetBankingURL.sendKeys(url);
	}

	public void clickSubmitButton() {
	Submit.click();
	}
	
	public void bankAndCashFillingForm(String accountTitle, String description2, String balance, String accountNumber, String person, String phone, String url) {
		AccountTittle.sendKeys(accountTitle);
		Description.sendKeys(description2);
		InitialBalance.sendKeys(balance);
		AccountNumber.sendKeys(accountNumber);
		ContactPerson.sendKeys(person);
		Phone.sendKeys(phone);
		InternetBankingURL.sendKeys(url);
		Submit.click();
	}
	
	public String getPageTitle() {
		return driver.getTitle();
		}

	}