import java.time.Duration;
import java.util.Random;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegisterUserTest {

    private WebDriver driver;
    Random random = new Random();
    int randomNumber = random.nextInt(1000); 
    @BeforeEach
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/chromedriver-win64/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(60));
        driver.manage().window().maximize();
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void testBorrowRecordFlow() throws InterruptedException {
        // Step 1: Register a User
        driver.get("http://localhost:5173/");
        Thread.sleep(1000); 

        WebElement loginButton= driver.findElement(By.id("btn-login"));
        loginButton.click();
        Thread.sleep(1000); 

        WebElement registerButton= driver.findElement(By.id("btn-register"));
        registerButton.click();
        Thread.sleep(1000);
    WebElement usernameField = driver.findElement(By.name("username"));
    usernameField.sendKeys("reda" + randomNumber); 
    
    WebElement fullNameField = driver.findElement(By.name("Full Name"));
    fullNameField.sendKeys("Reda Ganoutre" + randomNumber);

    WebElement emailField = driver.findElement(By.name("email"));
    emailField.sendKeys("reda@gmail.com");

    WebElement passwordField = driver.findElement(By.name("password"));
    passwordField.sendKeys("1234");

    Thread.sleep(3000);

    
    WebElement submitButton = driver.findElement(By.id("btn-SignUp"));
    submitButton.click();
    Thread.sleep(4000);
     // Handle the alert
    try {
        Alert alert = driver.switchTo().alert(); // Switch to the alert
        System.out.println("Alert message: " + alert.getText()); // Print the alert message for debugging
        alert.accept(); // Click the "OK" button to dismiss the alert
    } catch (Exception e) {
        System.out.println("No alert present.");
    }    
    WebElement profileButton = driver.findElement(By.id("profile-link"));
    profileButton.click();
    Thread.sleep(4000);

    WebElement btnlogout= driver.findElement(By.id("btn-logout"));
    btnlogout.click();
    Thread.sleep(4000);

    }
}
