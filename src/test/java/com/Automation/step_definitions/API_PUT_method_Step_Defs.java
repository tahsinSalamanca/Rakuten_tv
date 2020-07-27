package com.Automation.step_definitions;

import com.Automation.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import java.util.Map;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class API_PUT_method_Step_Defs {



    @Given("the user should be able to put a movie with id {string} and following data")
    public void the_user_should_be_able_to_put_a_movie_with_id_and_following_data(String id, Map<String, String> movieData) {

        int MovieId = Integer.parseInt(id);
        Response response = given().pathParam("id", MovieId)
                .and().contentType(ContentType.JSON)
                .and().body(movieData)
                .when().put(ConfigurationReader.get("herokuapp_uri") + "/movies/{id}");

        assertEquals(204, response.statusCode() );

    }


    @Given("the user should be able to put a audio_qualities with id {string} and following data")
    public void the_user_should_be_able_to_put_a_audio_qualities_with_id_and_following_data(String id, Map<String, String> audio_qualitiesData) {

        int AudioId = Integer.parseInt(id);
        Response response = given().pathParam("id", AudioId)
                .and().contentType(ContentType.JSON)
                .and().body(audio_qualitiesData)
                .when().put(ConfigurationReader.get("herokuapp_uri") + "/audio_qualities/{id}");

        assertEquals(204, response.statusCode() );
    }


    @Given("the user should be able to put a video_qualities with id {string} and following data")
    public void the_user_should_be_able_to_put_a_video_qualities_with_id_and_following_data(String id, Map<String, String> video_qualitiesData) {

        int VideoId = Integer.parseInt(id);
        Response response = given().pathParam("id", VideoId)
                .and().contentType(ContentType.JSON)
                .and().body(video_qualitiesData)
                .when().put(ConfigurationReader.get("herokuapp_uri") + "/video_qualities/{id}");

        assertEquals(204, response.statusCode() );

    }

    @When("the user should be able to put a genres with id {string} and following data")
    public void the_user_should_be_able_to_put_a_genres_with_id_and_following_data(String id, Map<String, String> genresData) {

        int GenresId = Integer.parseInt(id);
        Response response = given().pathParam("id", GenresId)
                .and().contentType(ContentType.JSON)
                .and().body(genresData)
                .when().put(ConfigurationReader.get("herokuapp_uri") + "/genres/{id}");

        assertEquals(204, response.statusCode() );

    }









































}
