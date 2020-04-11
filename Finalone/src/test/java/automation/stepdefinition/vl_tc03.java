package automation.stepdefinition;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import automation.pages.LoginPage;

import Baseclass.Baseclasss;
import Baseclass.ReadandWriteExcel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class vl_tc03  extends Baseclasss {
	static LoginPage lpom;
	static String[] data = null;
	/*public vl_tc03(WebDriver driver)
	{
		this.driver=driver;
			}*/
	@Given("^the user launch the application in browser$")
	public void the_user_launch_the_application_in_browser() throws Throwable {
		launchBrowser("chrome", "http://practice.automationtesting.in");
	}

	@When("^the user clicks on My Accounts$")
	public void the_user_clicks_on_My_Accounts() throws Throwable {
		lpom =PageFactory.initElements(driver, LoginPage.class);
		   lpom.account();
	}

	@When("^the user Enters the valid username and password$")
	public void the_user_Enters_the_valid_username_and_password() throws Throwable {
		ReadandWriteExcel xl=new ReadandWriteExcel();
		int j=0;
		data=new String[2]; 
		for(int i=9;i<=10;i++)
		{
			data[j]=xl.readXL("src\\test\\resources\\testdata\\Book5.xlsx", i, 1);
			System.out.println(data[j]);
			j++;
		}
		lpom.details(data);
	}

	@When("^click on signin button$")
	public void click_on_signin_button() throws Throwable {
	    lpom.login();
	}

	@Then("^I validate the outcomes of valid login$")
	public void i_validate_the_outcomes_of_valid_login() throws Throwable {
		String ar=driver.getTitle();
		String er="My Account – Automation Practice Site";
		if(ar.equals(er))
			System.out.println("pass");
		else
			System.out.println("fail");
		Thread.sleep(5000);
		
	    screenShot("src\\test\\resources\\screenshots\\validLogin.png");
	    lpom =PageFactory.initElements(driver, LoginPage.class);
	    
		quit();
	}


}


