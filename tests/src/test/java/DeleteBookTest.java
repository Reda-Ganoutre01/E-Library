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

public class DeleteBookTest {
    private WebDriver driver;
    private WebDriverWait wait;
    @BeforeEach
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver-win64/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    public void findAdminBookDashboard() {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/nav/ul/li[3]/a")).click();
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/section[2]/a[2]")).click();
    }

    public void login() throws InterruptedException {
        driver.get("http://localhost:5173/");
        WebElement button = driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/nav/ul/a"));
        button.click();
        WebElement username = driver.findElement(By.name("username"));
        WebElement password = driver.findElement(By.name("password"));
        username.sendKeys("admin");
        password.sendKeys("1234");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/form/div/section[2]/div/button")).click();
        Thread.sleep(2000);
    }

    public void clickDeleteBook() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/table/tbody/tr/td[7]/button")).click();
        driver.switchTo().alert().accept();
        driver.navigate().refresh();
    }

    public void end() {
        driver.quit();
    }

    @Test
    public void testCreateBook() throws InterruptedException {
        this.login();
        this.findAdminBookDashboard();
        this.clickDeleteBook();
        Thread.sleep(2000);
    }

    @AfterEach
    public void tearDown() {
        this.end();
    }
}
