@All

@APIPostTest
Feature: POST operation for all the endPoints

  @postMovie
  Scenario: Verify POST method works for movies
    Given the user should be able to post a movie with following data
      | title           | Salamanca Diary  |
      | year            | 2020             |
      | plot            | Stay home family |
      | duration        | 175              |
      | audio_qualities |                  |
      | video_qualities |                  |
      | genres          |                  |

  @postAudio_qualities
  Scenario: Verify POST method works for audio_qualities
    Given the user should be able to post a audio_qualities with following data
      | name     | The Boys win |
      | abbr     | 2027         |
      | position | null         |
      | default  | true         |

  @postVideo_qualities
  Scenario: Verify POST method works for video_qualities
    Given the user should be able to post a video_qualities with following data
      | name     | The Next Cites |
      | abbr     | DTS 5.8        |
      | position | null           |
      | default  | false          |


  @postGenres
  Scenario: Verify POST method works for genres
    When the user should be able to post a genres




