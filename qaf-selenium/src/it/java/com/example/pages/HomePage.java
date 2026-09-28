package com.example.pages;

import org.openqa.selenium.WebDriver;

public class HomePage {
    private final WebDriver driver;

    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public void open(String url) {
        driver.get(url);
    }

    public void loginIfNeeded(String username, String password) {
        // no-op placeholder
    }

    public void search(String query) {
        // no-op placeholder
    }
}
