package automation.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
public class AddtocartPage {
	

	
		@FindBy(xpath="//*[@id=\"menu-item-40\"]/a")
		public WebElement shop;
		
		@FindBy(xpath="/html/body/div[1]/div[2]/div/div/ul/li[2]/a[2]")
		public WebElement addcartt;
		
		@FindBy(xpath="/html/body/div[1]/div[1]/header/div[2]/nav/ul/li[6]/a/span[1]")
		public WebElement items;
		
		
		
		public void shopp() {
	    shop.click();
		}
		
		public void addtocart() {
		addcartt.click();
		}
		
		public void showitems () {
			items.click();
		}
		
		
		}



	



