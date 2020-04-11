package automation.stepdefinition;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import automation.pages.DemoSitePage;

import Baseclass.Baseclasss;
import Baseclass.ReadandWriteExcel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DemoTc_07 extends Baseclasss {
	static DemoSitePage dpom;
	static String[] data = null;
	/*public DemoTc_07(WebDriver driver)
	{
		this.driver=driver;
			}*/
	
	@Given("^the user launches the application in browser$")
	public void the_user_launches_the_application_in_browser() throws Throwable {
		launchBrowser("chrome", "http://practice.automationtesting.in");
	}

	@Then("^click DemoSite$")
	public void click_DemoSite() throws Throwable {
		dpom =PageFactory.initElements(driver, DemoSitePage.class);
		   dpom.account();
	}

	@Then("^user fills all the details$")
	public void user_fills_all_the_details() throws Throwable {
		ReadandWriteExcel xl=new ReadandWriteExcel();
		int j=0;
		data=new String[10]; 
		for(int i=17;i<=25;i++)
		{
			data[j]=xl.readXL("src\\test\\resources\\TestData\\Book5.xlsx", i, 1);
			System.out.println(data[j]);
			j++;
		}
		dpom.details(data);
	}

	@Then("^Clicks Register button$")
	public void clicks_Register_button() throws Throwable {
	   dpom.submit();
	   Thread.sleep(5000);
	}

	@Then("^I validate the results$")
	public void i_validate_the_results() throws Throwable {
		String ar=driver.getTitle();
	 System.out.println(ar);
		String er="Web Table";
		if(ar.equals(er))
			System.out.println("pass");
		else
			System.out.println("fail");
		
	    screenShot("src\\test\\resources\\ScreenShots\\demo.png");
		quit();
	    
	}
}

 
