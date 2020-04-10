package automation.stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.support.PageFactory;

import Baseclass.Baseclasss;

import automation.pages.AddtocartPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addcartTC_05 extends Baseclasss {
	static AddtocartPage lpom;
	static String[] data = null;
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
		quit();
	}
}
