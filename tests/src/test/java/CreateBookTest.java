import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.nio.file.Paths;
import java.time.Duration;

public class CreateBookTest {
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

    public void clickCreateBook() {
        driver.findElement(By.cssSelector("#root > div > main > section > section.mt-12.flex.flex-row.justify-end > a")).click();
    }

    public void fillFormWithData() {
        driver.findElement(By.name("title")).sendKeys("JavaScript For Dummies 3rd Edition");
        driver.findElement(By.name("description")).sendKeys("Coding with JavaScript For Dummies\" is a beginner-friendly guide that provides easy, hands-on instruction for learning JavaScript, a popular client-side language.");
        driver.findElement(By.name("isbn")).sendKeys("978-3-16-148410-0");
        driver.findElement(By.name("author")).sendKeys("The Javascript For Dummies");
        driver.findElement(By.name("copies")).sendKeys("500");
        driver.findElement(By.cssSelector("#root > div > main > section > form > div > section.flex.flex-col.gap-3.font-\\[poppins\\] > div.flex.items-center.flex-row.gap-2 > select > option:nth-child(2)")).click();

        // Use an absolute path for the file upload
        String absolutePath = Paths.get("src/main/resources/promises_community.png").toAbsolutePath().toString();
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/form/div/section[1]/div[5]/label/input"))
              .sendKeys(absolutePath);
    }


    public void clickCreateBookButton() {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/form/div/section[2]/button")).click();
        driver.navigate().refresh();
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

    public void end() {
        driver.quit();
    }

    @Test
    public void testCreateBook() throws InterruptedException {
        this.login();
        this.findAdminBookDashboard();
        this.clickCreateBook();
        this.fillFormWithData();
        Thread.sleep(4000);
        this.clickCreateBookButton();
        Thread.sleep(4000);

    }

    @AfterEach
    public void tearDown() {
        this.end();
    }
}