@All

@APIGetTest

Feature: GET Operation for all the endpoints

  @get
  Scenario: Verify GET methods works
    Then the user should be able to use get methods with following endPoints
      | movies | audio_qualities | video_qualities | genres |




