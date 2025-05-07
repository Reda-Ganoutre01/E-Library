import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class BookSearchTest {

    private WebDriver driver;

    @BeforeEach
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/chromedriver-win64/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(60));
        driver.manage().window().maximize();
    }

    @Test
    public void testBookSearchAndClick() {
        // Navigate to the application
        driver.get("http://localhost:5173/");

        // Locate the search bar and enter the book name
        WebElement searchBar = driver.findElement(By.id("searchedBooks"));
        searchBar.sendKeys("JavaScript For Dummies 3rd Edition");

        // Wait for the dropdown to populate
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("ul > li > a")));

        // Locate the dropdown results
        List<WebElement> results = driver.findElements(By.cssSelector("ul > li > a"));

        // Click on the first result that matches the book title
        for (WebElement result : results) {
            if (result.getText().contains("JavaScript For Dummies 3rd Edition")) {
                result.click();
                break;
            }
        }

        // Verify that the URL has changed to the book's details page
        String currentUrl = driver.getCurrentUrl();
        Assertions.assertTrue(currentUrl.contains("/books/"), "The URL does not contain '/books/' as expected.");
    }

@AfterEach
public void tearDown() {
    if (driver != null) {
        driver.quit();
    }
}
}

