package com.Automation.step_definitions;

import com.Automation.utilities.ConfigurationReader;
import com.github.javafaker.Faker;
import com.google.gson.Gson;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import java.util.HashMap;
import java.util.Map;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

public class API_POST_method_Step_Defs {


    @Given("the user should be able to post a movie with following data")
    public void the_user_should_be_able_to_post_a_movie_with_following_data(Map<String, String> MovieData) {

        Response response = given().accept(ContentType.JSON).
                and().contentType(ContentType.JSON)
                .and().body(MovieData).when().post(ConfigurationReader.get("herokuapp_uri") + "/movies");

        assertEquals(201, response.statusCode() );
        assertEquals("application/json; charset=utf-8", response.contentType());
    }

    @Given("the user should be able to post a audio_qualities with following data")
    public void the_user_should_be_able_to_post_a_audio_qualities_with_following_data(Map<String, String> audio_qualitiesData) {

        Response response = given().accept(ContentType.JSON).
                and().contentType(ContentType.JSON)
                .and().body(audio_qualitiesData).when().post(ConfigurationReader.get("herokuapp_uri") + "/audio_qualities");

        assertEquals(201, response.statusCode() );
        assertEquals("application/json; charset=utf-8", response.contentType());
    }


    @Given("the user should be able to post a video_qualities with following data")
    public void the_user_should_be_able_to_post_a_video_qualities_with_following_data(Map<String, String> video_qualitiesData) {

        Response response = given().accept(ContentType.JSON).
                and().contentType(ContentType.JSON)
                .and().body(video_qualitiesData).when().post(ConfigurationReader.get("herokuapp_uri") + "/video_qualities");

        assertEquals(201, response.statusCode() );
        assertEquals("application/json; charset=utf-8", response.contentType());

    }


    @When("the user should be able to post a genres")
    public void the_user_should_be_able_to_post_a_genres() {

        Faker faker= new Faker();

        Map<String, String> genres = new HashMap<>();
        genres.put("name", faker.book().genre());
        Gson gson = new Gson();
        String genre = gson.toJson(genres);
        System.out.println("genre = " + genre);

        Response response = given().accept(ContentType.JSON).
                and().contentType(ContentType.JSON)
                .and().body(genre).when().post(ConfigurationReader.get("herokuapp_uri") + "/genres");

        assertEquals(201, response.statusCode() );
        assertEquals("application/json; charset=utf-8", response.contentType());
    }













































}
