package com.Automation.step_definitions;

import com.Automation.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class API_DELETE_method_Step_Defs {


    @Given("the user should be able to delete a movie with id {string}")
    public void the_user_should_be_able_to_delete_a_movie_with_id(String id) {

        int MovieId = Integer.parseInt(id);
        Response response = given().pathParam("id", MovieId)
                .when().delete(ConfigurationReader.get("herokuapp_uri") + "/movies/{id}");

        assertEquals(204, response.statusCode() );

    }


    @Given("the user should be able to delete a audio_qualities with id {string}")
    public void the_user_should_be_able_to_delete_a_audio_qualities_with_id(String id) {


        int Audio_qualitiesId = Integer.parseInt(id);
        Response response = given().pathParam("id", Audio_qualitiesId)
                .when().delete(ConfigurationReader.get("herokuapp_uri") + "/audio_qualities/{id}");

        assertEquals(204, response.statusCode() );

    }


    @Given("the user should be able to delete a video_qualities with id {string}")
    public void the_user_should_be_able_to_delete_a_video_qualities_with_id(String id) {

        int Video_qualitiesId = Integer.parseInt(id);
        Response response = given().pathParam("id", Video_qualitiesId)
                .when().delete(ConfigurationReader.get("herokuapp_uri") + "/video_qualities/{id}");

        assertEquals(204, response.statusCode() );

    }


    @Given("the user should be able to delete a genres with id {string}")
    public void the_user_should_be_able_to_delete_a_genres_with_id(String id) {

        int GenresId = Integer.parseInt(id);
        Response response = given().pathParam("id", GenresId)
                .when().delete(ConfigurationReader.get("herokuapp_uri") + "/genres/{id}");

        assertEquals(204, response.statusCode() );


    }







































}
