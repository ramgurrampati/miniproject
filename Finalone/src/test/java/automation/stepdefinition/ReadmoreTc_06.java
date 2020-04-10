package automation.stepdefinition;


import org.openqa.selenium.support.PageFactory;

import Baseclass.Baseclasss;
import automation.pages.AddtocartPage;
import automation.pages.Readmore;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class ReadmoreTc_06 extends Baseclasss{
	static Readmore lpom;
	static String[] data = null;
	@Given("^the user launches the app in browser$")
	public void the_user_launches_the_app_in_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		launchBrowser("chrome", "http://practice.automationtesting.in");
	}
	
	

	@When("^user clicks on Shop$")
	public void user_clicks_on_Shop() throws Throwable {
		lpom =PageFactory.initElements(driver, Readmore.class);
	    // Write code here that turns the phrase above into concrete actions
	    lpom.Shopp();
	}

	@Then("^user clicks Read more$")
	public void user_clicks_Read_more() throws Throwable {
		lpom =PageFactory.initElements(driver, Readmore.class);
	    // Write code here that turns the phrase above into concrete actions
	    lpom.Read();
	}

	@Then("^I validate the outcomes of Read more$")
	public void i_validate_the_outcomes_of_Read_more() throws Throwable {
		Thread.sleep(5000);
	    
		screenShot("src\\test\\resources\\screenshots\\Readmore.png");
		quit();

}
}
