package com.Automation.pages;

import com.Automation.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage {


    public CreateAccountPage() {PageFactory.initElements(Driver.get(), this); }

    @FindBy(xpath = "//div[@id='root']//a[@data-test-id='menu-desktop-register-link']")
    public WebElement register;

    @FindBy(xpath = "//input[@name='email'][@type='email']")
    public WebElement email;

    @FindBy(xpath = "//input[@name='emailConfirmation'][@type='email']")
    public WebElement RepEmail;

    @FindBy(xpath = "(//input[@name='password'][@type='password'])[2]")
    public WebElement password_;

    @FindBy(xpath = "//input[@id='opt_in_register']//..//label[@class='i-checkbox__draw']")
    public WebElement firstCheckbox;

    @FindBy(xpath = "//input[@id='terms_check_register']//..//label[@class='i-checkbox__draw']")
    public WebElement secondCheckbox;

    @FindBy(xpath = "//div[@class='card card--register']//div[@class='button__contents']")
    public WebElement register_submit;

    @FindBy(xpath = "//a[@id='register'][@data-test-id='identification-register-link']")
    public WebElement createAccountTitle;

    @FindBy(xpath = "//div[@class='nav__items__user__anchor nav__items__user__anchor--unique']/span[@class='navmenu__parent__anchor__text']")
    public WebElement username_onPage;

    public void createAccount(String userName, String password){

        email.sendKeys(userName);
        RepEmail.sendKeys(userName);
        password_.sendKeys(password);
        firstCheckbox.click();
        secondCheckbox.click();
        register_submit.click();

    }










}
