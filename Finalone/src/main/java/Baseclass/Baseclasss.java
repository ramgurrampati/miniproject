package Baseclass;


import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.collections4.functors.ComparatorPredicate.Criterion;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Baseclasss { 
	protected WebDriver driver;
	//public static Properties prop;
	
	public void launchBrowser(String browserName, String url) throws IOException{
		
		
		if(browserName.equalsIgnoreCase("chrome")){
			
			System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\drivers\\chromedriver_v80.exe");
			driver = new ChromeDriver();
		}
		
		else if(browserName.equalsIgnoreCase("firefox")){
			
			System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\drivers\\geckodriver.exe");
			//System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"/src/test/resources/drivers/geckodriver");
			driver = new FirefoxDriver();
		}
		
		else if(browserName.equals("IE")){
			System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "src\\test\\resources\\drivers\\IEDriverServer.exe");
			 driver = new FirefoxDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(url);
		
	}
	
	public void screenShot(String path) throws IOException{
		File Sshot=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(Sshot, new File(path));
	}
	public static Logger log;	
	public static void logger(String msg)
	{
		log = Logger.getLogger(Baseclasss.class.getName());
		log.info(msg);
	}
	public void quit()
	{
		driver.close();
		
	}


}


