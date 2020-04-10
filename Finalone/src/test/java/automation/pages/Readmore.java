package automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Readmore {

	@FindBy(xpath="/html/body/div[1]/div[1]/header/div[2]/nav/ul/li[1]/a")
	public WebElement cshop;
	
	@FindBy(xpath="/html/body/div[1]/div[2]/div/div/ul/li[1]/a[2]")
	public WebElement Readmoree;
	
	
	
	
	
	public void Shopp() {
    cshop.click();
	}
	
	public void Read() {
	Readmoree.click();
	}
	
	
	}
	
	
	


