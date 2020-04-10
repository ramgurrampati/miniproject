package automation.stepdefinition;


import org.openqa.selenium.support.PageFactory;


import automation.pages.RegisterPage;
import Baseclass.Baseclasss;
import Baseclass.ReadandWriteExcel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ir_tc02 extends Baseclasss{
	
	static RegisterPage rpom;
	static String[] data = null;
	@Given("^the user launches the application in the browser$")
	public void the_user_launches_the_application_in_the_browser() throws Throwable {
		launchBrowser("chrome", "http://practice.automationtesting.in");
	}

	@When("^the user clicks on My Accounts Page$")
	public void the_user_clicks_on_My_Accounts_Page() throws Throwable {
		rpom =PageFactory.initElements(driver, RegisterPage.class);
		   rpom.account();
	}

	@Then("^the user fills Invalid username and Password$")
	public void the_user_fills_Invalid_username_and_Password() throws Throwable {
		ReadandWriteExcel xl=new ReadandWriteExcel();
		int j=0;
		data=new String[2]; 
		for(int i=5;i<=6;i++)
		{
			data[j]=xl.readXL("src\\test\\resources\\testdata\\Book5.xlsx", i, 1);
			System.out.println(data[j]);
			j++;
		}
		rpom.details(data);
	}

	@Then("^I validate the outcomes of invalid Register$")
	public void i_validate_the_outcomes_of_invalid_Register() throws Throwable {
		String ar=driver.getTitle();
		String er="My Account – Automation Practice Site";
		if(ar.equals(er))
			System.out.println("pass");
		else
			System.out.println("fail");
		Thread.sleep(5000);
		
	    screenShot("src\\test\\resources\\screenshots\\InvalidRegister.png");
		quit();
	   
	}

}


