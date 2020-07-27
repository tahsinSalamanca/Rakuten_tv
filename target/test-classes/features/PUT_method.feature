@All

@APIPutTest
Feature: PUT operation for all the endPoints

  @putMovie
  Scenario: Verify PUT method works for movies
    Given the user should be able to put a movie with id "290" and following data
      | title           | Spain Diaries_abc    |
      | year            | 2020                 |
      | plot            | Stay together family |
      | duration        | 175                  |
      | audio_qualities |                      |
      | video_qualities |                      |
      | genres          |                      |


  @putAudio_qualities
  Scenario: Verify PUT method works for audio_qualities
    Given the user should be able to put a audio_qualities with id "159" and following data
      | name     | The man win |
      | abbr     | 2027        |
      | position | null        |
      | default  | true        |


  @putVideo_qualities
  Scenario: Verify PUT method works for video_qualities
    Given the user should be able to put a video_qualities with id "126" and following data
      | name     | The last man |
      | abbr     | DTS 5.8      |
      | position | null         |
      | default  | false        |


  @putGenres
  Scenario: Verify PUT method works for genres
    When the user should be able to put a genres with id "156" and following data
      | name | Horror catch |




