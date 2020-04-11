package automation.testrunner;


import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\resources\\features\\Myapp.Feature",
		plugin= {"pretty","html:Reports\\cucumberHTMLReport","json:Reports\\cucumberHTMLReport\\jsonreport",
		"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:Reports\\ExtentReports\\extentreport.html"},

		glue= {"automation.stepdefinition"},
		
	monochrome=true	
		)
public class TestRunner {
	
	@AfterClass
	public static void extendReport() {
		
	}
}


