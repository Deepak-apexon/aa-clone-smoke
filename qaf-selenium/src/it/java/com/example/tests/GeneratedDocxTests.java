package com.example.tests;

import com.example.pages.HomePage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class GeneratedDocxTests {
    private static final String APP_URL = "http://localhost";
    private static final String AUTH_USER = "";
    private static final String AUTH_PASS = "";
    private WebDriver driver;

    @BeforeMethod
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions opts = new ChromeOptions();
        opts.addArguments("--headless=new", "--no-sandbox", "--disable-dev-shm-usage");
        driver = new ChromeDriver(opts);
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test(description = "TC_001: placeholder smoke navigation")
    public void testPlaceholderSmokeNavigation() {
        HomePage home = new HomePage(driver);
        home.open(APP_URL);
    }
}
