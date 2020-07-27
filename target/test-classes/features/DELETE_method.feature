@All

@APIDeleteTest
Feature: DELETE operation for all the endPoints

  @deleteMovie
  Scenario: Verify DELETE method works for movies
    Given the user should be able to delete a movie with id "369"


  @deleteAudio_qualities
  Scenario: Verify DELETE method works for audio_qualities
    Given the user should be able to delete a audio_qualities with id "85"


  @deleteVideo_qualities
  Scenario: Verify DELETE method works for video_qualities
    Given the user should be able to delete a video_qualities with id "87"


  @deleteGenres
  Scenario: Verify DELETE method works for genres
    Given the user should be able to delete a genres with id "108"
