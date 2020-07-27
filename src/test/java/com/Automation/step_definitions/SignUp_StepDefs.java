package com.Automation.step_definitions;

import com.Automation.pages.CreateAccountPage;
import com.Automation.utilities.ConfigurationReader;
import com.Automation.utilities.Driver;
import com.github.javafaker.Faker;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import java.util.Map;
import static org.junit.Assert.assertEquals;

public class SignUp_StepDefs {

    CreateAccountPage createAccountPage;

    @Given("the user navigates to login page")
    public void the_user_navigates_to_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @Then("the user clicks register button")
    public void the_user_clicks_register_button() {
        createAccountPage= new CreateAccountPage();
        createAccountPage.register.click();

    }

    @Then("the user registers successfully with valid credentials")
    public void the_user_registers_successfully_with_valid_credentials(Map<String, String > userdata) {
        createAccountPage.createAccount(userdata.get("email"),userdata.get("password"));

    }

    @Then("the user should be on the main page with username {string}")
    public void the_user_should_be_on_the_main_page_with_username(String expectedUsername) throws InterruptedException {

        Thread.sleep(10);
        String actualUsername = createAccountPage.username_onPage.getText();
        assertEquals(actualUsername,expectedUsername);

    }

    @Then("the user registers successfully with dummy credentials")
    public void the_user_registers_successfully_with_dummy_credentials() throws InterruptedException {

        Faker faker= new Faker();
        createAccountPage.createAccount(faker.internet().emailAddress(), faker.internet().password(8,12));
        Thread.sleep(3000);
        String currentUrl = Driver.get().getCurrentUrl();
        String expecteduRL ="https://www.rakuten.tv/es";
        assertEquals(expecteduRL,currentUrl);

    }

































}
