// Removed incorrect import
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class BorrowRecordSeleniumTest {

    private WebDriver driver;
    private WebDriverWait wait;

    @BeforeEach
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/chromedriver-win64/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Test
    public void testBorrowRecord() throws InterruptedException {
        // Step 1: Navigate to the application
        driver.get("http://localhost:5173/");

        // Step 2: Log in
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("btn-login")));
        loginButton.click();

        WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("username")));
        usernameField.sendKeys("reda");

        WebElement passwordField = driver.findElement(By.name("password"));
        passwordField.sendKeys("1234");

        WebElement submitButton = driver.findElement(By.id("btn-signin"));
        submitButton.click();
        Thread.sleep(4000);
    

    // Locate the search bar and enter the book name
    WebElement searchBar = driver.findElement(By.id("searchedBooks"));
    searchBar.sendKeys("PHP 5 For Dummies");

    // Wait for the dropdown to populate
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("ul > li > a")));

    // Locate the dropdown results
    List<WebElement> results = driver.findElements(By.cssSelector("ul > li > a"));

    // Click on the first result that matches the book title
    for (WebElement result : results) {
        if (result.getText().contains("PHP 5 For Dummies")) {
            result.click();
            break;
        }
    }

    // Verify that the URL has changed to the book's details page
    String currentUrl = driver.getCurrentUrl();
    assertTrue(currentUrl.contains("/books/"), "The URL does not contain '/books/' as expected.");
    Thread.sleep(4000);


    WebElement Btnborrow= driver.findElement(By.id("btnborrow"));
    Btnborrow.click();
    Thread.sleep(2000);

    WebElement BtnborrowConfirm= driver.findElement(By.id("btnborrowConfirm"));
        BtnborrowConfirm.click();
    Thread.sleep(2000);

    

    

    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}