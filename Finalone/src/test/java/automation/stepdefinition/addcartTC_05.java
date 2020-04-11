package automation.stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import Baseclass.Baseclasss;
import Baseclass.ReadandWriteExcel;
import automation.pages.AddtocartPage;
import automation.pages.LoginPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addcartTC_05 extends Baseclasss {
	static AddtocartPage lpom;
	static LoginPage lpom1;
	static String[] data = null;
	/*public addcartTC_05(WebDriver driver)
	{
		this.driver=driver;
			}*/
	@Given("^user launches the application in the browser$")
	public void user_launches_the_application_in_the_browser() throws Throwable {
		launchBrowser("chrome", "http://practice.automationtesting.in");
	}
	@When("^the  user clicks on Shop$")
	public void the_user_clicks_on_Shop() throws Throwable {
	    
		lpom =PageFactory.initElements(driver, AddtocartPage.class);
	    // Write code here that turns the phrase above into concrete actions
		lpom.shopp();
	}

	    
	

	@Then("^the user clicks on add to basket$")
	public void the_user_clicks_on_add_to_basket() throws Throwable {
		lpom =PageFactory.initElements(driver, AddtocartPage.class);
	    // Write code here that turns the phrase above into concrete actions
		lpom.addtocart();
	}
	@And("^user clicks items$")
	public void user_clicks_items() throws Throwable {
		
		lpom =PageFactory.initElements(driver, AddtocartPage.class);
		lpom.showitems();
		Thread.sleep(5000);
	}
	@Then("^I validate the outcomes of Adding to Basket")
	public void I_validate_the_outcomes_of_Adding_to_Basket() throws Throwable {
     screenShot("src\\test\\resources\\screenshots\\addeditems.png");
     
     lpom1=PageFactory.initElements(driver, LoginPage.class);
     lpom1.account();
     ReadandWriteExcel xl=new ReadandWriteExcel();
		int j=0;
		data=new String[2]; 
		for(int i=9;i<=10;i++)
		{
			data[j]=xl.readXL("src\\test\\resources\\testdata\\Book5.xlsx", i, 1);
			System.out.println(data[j]);
			j++;
		}
		lpom1.details(data);
     
		 lpom1.login();
		 lpom1.logout();
		 screenShot("src\\test\\resources\\screenshots\\Logout.png");
		quit();
	}
}
