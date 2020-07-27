package com.Automation.step_definitions;

import com.Automation.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.List;

import static io.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;

public class API_GET_method_Step_Defs {


    @Then("the user should be able to use get methods with following endPoints")
    public void the_user_should_be_able_to_use_get_methods_with_following_endPoints(List<String> endPoints) {

        for (String endPoint : endPoints) {
            Response response = given().accept(ContentType.JSON).get(ConfigurationReader.get("herokuapp_uri") + "/" + endPoint);
            assertEquals(200,response.statusCode());

        }

    }


































}
