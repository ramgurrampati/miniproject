package automation.stepdefinition;
import org.openqa.selenium.support.PageFactory;
import automation.pages.RegisterPage;
import Baseclass.Baseclasss;
import Baseclass.ReadandWriteExcel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class vr_tc01 extends Baseclasss {
	static RegisterPage rpom;
	static String[] data = null;
	
	@Given("^the user launch the application in the browser$")
	public void the_user_launch_the_application_in_the_browser() throws Throwable {
		launchBrowser("chrome", "http://practice.automationtesting.in");
	}
 
	@When("^the user open My Accounts Page$")
	public void the_user_open_My_Accounts_Page() throws Throwable {
	   rpom =PageFactory.initElements(driver, RegisterPage.class);
	   rpom.account();
			   
	}
   
	@Then("^the user fills valid username and Password$")
	public void the_user_fills_valid_username_and_Password() throws Throwable {
		ReadandWriteExcel xl=new ReadandWriteExcel();
		int j=0;
		data=new String[2]; 
		for(int i=1;i<=2;i++)
		{
			data[j]=xl.readXL("src\\test\\resources\\testdata\\Book5.xlsx", i, 1);
			System.out.println(data[j]);
			j++;
		}
		rpom.details(data);
	   
	}

	@Then("^click on the Register button$")
	public void click_on_the_Register_button() throws Throwable {
		 rpom =PageFactory.initElements(driver, RegisterPage.class);
		rpom.register();
		Thread.sleep(5000);
		
	    
	}

	@Then("^I validate the outcomes$")
	public void i_validate_the_outcomes() throws Throwable {
		String ar=driver.getTitle();
		
		String er="My Account – Automation Practice Site";
		if(ar.equals(er))
			System.out.println("pass");
		else
			System.out.println("fail");
		
		
	    screenShot("src\\test\\resources\\screenshots\\ValidRegister_TC_01.png");
		quit();
	}



 

}
