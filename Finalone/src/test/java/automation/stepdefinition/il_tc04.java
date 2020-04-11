package automation.stepdefinition;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.support.PageFactory;

import Baseclass.Baseclasss;
import Baseclass.ReadandWriteExcel;
import automation.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class il_tc04  extends Baseclasss{
	static LoginPage lpom;
	static String[] data = null;
	final static Logger log = LogManager.getLogger(il_tc04.class);

	
	@Given("^the user launch the app in browser$")
	public void the_user_launch_the_app_in_browser() throws Throwable {
		log.debug("browser will be opened ");
		launchBrowser("chrome", "http://practice.automationtesting.in");
	}

	@When("^user clicks on My Accounts$")
	public void user_clicks_on_My_Accounts() throws Throwable {
		lpom =PageFactory.initElements(driver, LoginPage.class);
		   lpom.account();
	}

	@When("^the user Enters the Invalid username and password$")
	public void the_user_Enters_the_Invalid_username_and_password() throws Throwable {
		ReadandWriteExcel xl=new ReadandWriteExcel();
		int j=0;
		data=new String[2]; 
		for(int i=13;i<=14;i++)
		{
			data[j]=xl.readXL("src\\test\\resources\\testdata\\Book5.xlsx", i, 1);
			System.out.println(data[j]);
			j++;
		}
		lpom.details(data);
	}

	@When("^click on the signin button$")
	public void click_on_the_signin_button() throws Throwable {
		lpom.login();
	}

	@Then("^I validate the outcomes of invalid login$")
	public void i_validate_the_outcomes_of_invalid_login() throws Throwable {
		String ar=lpom.invalid();
		System.out.println(ar);
		String er="ERROR: The password you entered for the username ramgurrampati777@gmail.com is incorrect. Lost your password?";
		if(ar.equals(er))
			System.out.println("pass");
		else
			System.out.println("fail");
		Thread.sleep(5000);
		
	    screenShot("src\\test\\resources\\screenshots\\invalidLogin.png");
		quit();
		log.info("browser is closed");
	}

}


