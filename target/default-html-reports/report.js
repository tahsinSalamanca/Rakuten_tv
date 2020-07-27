$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DELETE_method.feature");
formatter.feature({
  "name": "DELETE operation for all the endPoints",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIDeleteTest"
    }
  ]
});
formatter.scenario({
  "name": "Verify DELETE method works for movies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIDeleteTest"
    },
    {
      "name": "@deleteMovie"
    }
  ]
});
formatter.step({
  "name": "the user should be able to delete a movie with id \"369\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_DELETE_method_Step_Defs.the_user_should_be_able_to_delete_a_movie_with_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify DELETE method works for audio_qualities",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIDeleteTest"
    },
    {
      "name": "@deleteAudio_qualities"
    }
  ]
});
formatter.step({
  "name": "the user should be able to delete a audio_qualities with id \"85\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_DELETE_method_Step_Defs.the_user_should_be_able_to_delete_a_audio_qualities_with_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify DELETE method works for video_qualities",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIDeleteTest"
    },
    {
      "name": "@deleteVideo_qualities"
    }
  ]
});
formatter.step({
  "name": "the user should be able to delete a video_qualities with id \"87\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_DELETE_method_Step_Defs.the_user_should_be_able_to_delete_a_video_qualities_with_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify DELETE method works for genres",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIDeleteTest"
    },
    {
      "name": "@deleteGenres"
    }
  ]
});
formatter.step({
  "name": "the user should be able to delete a genres with id \"108\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_DELETE_method_Step_Defs.the_user_should_be_able_to_delete_a_genres_with_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/GET_method.feature");
formatter.feature({
  "name": "GET Operation for all the endpoints",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIGetTest"
    }
  ]
});
formatter.scenario({
  "name": "Verify GET methods works",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIGetTest"
    },
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "the user should be able to use get methods with following endPoints",
  "rows": [
    {
      "cells": [
        "movies",
        "audio_qualities",
        "video_qualities",
        "genres"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "API_GET_method_Step_Defs.the_user_should_be_able_to_use_get_methods_with_following_endPoints(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/POST_method.feature");
formatter.feature({
  "name": "POST operation for all the endPoints",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPostTest"
    }
  ]
});
formatter.scenario({
  "name": "Verify POST method works for movies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPostTest"
    },
    {
      "name": "@postMovie"
    }
  ]
});
formatter.step({
  "name": "the user should be able to post a movie with following data",
  "rows": [
    {
      "cells": [
        "title",
        "Salamanca Diary"
      ]
    },
    {
      "cells": [
        "year",
        "2020"
      ]
    },
    {
      "cells": [
        "plot",
        "Stay home family"
      ]
    },
    {
      "cells": [
        "duration",
        "175"
      ]
    },
    {
      "cells": [
        "audio_qualities",
        ""
      ]
    },
    {
      "cells": [
        "video_qualities",
        ""
      ]
    },
    {
      "cells": [
        "genres",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_POST_method_Step_Defs.the_user_should_be_able_to_post_a_movie_with_following_data(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify POST method works for audio_qualities",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPostTest"
    },
    {
      "name": "@postAudio_qualities"
    }
  ]
});
formatter.step({
  "name": "the user should be able to post a audio_qualities with following data",
  "rows": [
    {
      "cells": [
        "name",
        "The Boys win"
      ]
    },
    {
      "cells": [
        "abbr",
        "2027"
      ]
    },
    {
      "cells": [
        "position",
        "null"
      ]
    },
    {
      "cells": [
        "default",
        "true"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_POST_method_Step_Defs.the_user_should_be_able_to_post_a_audio_qualities_with_following_data(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify POST method works for video_qualities",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPostTest"
    },
    {
      "name": "@postVideo_qualities"
    }
  ]
});
formatter.step({
  "name": "the user should be able to post a video_qualities with following data",
  "rows": [
    {
      "cells": [
        "name",
        "The Next Cites"
      ]
    },
    {
      "cells": [
        "abbr",
        "DTS 5.8"
      ]
    },
    {
      "cells": [
        "position",
        "null"
      ]
    },
    {
      "cells": [
        "default",
        "false"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_POST_method_Step_Defs.the_user_should_be_able_to_post_a_video_qualities_with_following_data(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify POST method works for genres",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPostTest"
    },
    {
      "name": "@postGenres"
    }
  ]
});
formatter.step({
  "name": "the user should be able to post a genres",
  "keyword": "When "
});
formatter.match({
  "location": "API_POST_method_Step_Defs.the_user_should_be_able_to_post_a_genres()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PUT_method.feature");
formatter.feature({
  "name": "PUT operation for all the endPoints",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPutTest"
    }
  ]
});
formatter.scenario({
  "name": "Verify PUT method works for movies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPutTest"
    },
    {
      "name": "@putMovie"
    }
  ]
});
formatter.step({
  "name": "the user should be able to put a movie with id \"290\" and following data",
  "rows": [
    {
      "cells": [
        "title",
        "Spain Diaries_abc"
      ]
    },
    {
      "cells": [
        "year",
        "2020"
      ]
    },
    {
      "cells": [
        "plot",
        "Stay together family"
      ]
    },
    {
      "cells": [
        "duration",
        "175"
      ]
    },
    {
      "cells": [
        "audio_qualities",
        ""
      ]
    },
    {
      "cells": [
        "video_qualities",
        ""
      ]
    },
    {
      "cells": [
        "genres",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_PUT_method_Step_Defs.the_user_should_be_able_to_put_a_movie_with_id_and_following_data(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify PUT method works for audio_qualities",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPutTest"
    },
    {
      "name": "@putAudio_qualities"
    }
  ]
});
formatter.step({
  "name": "the user should be able to put a audio_qualities with id \"159\" and following data",
  "rows": [
    {
      "cells": [
        "name",
        "The man win"
      ]
    },
    {
      "cells": [
        "abbr",
        "2027"
      ]
    },
    {
      "cells": [
        "position",
        "null"
      ]
    },
    {
      "cells": [
        "default",
        "true"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_PUT_method_Step_Defs.the_user_should_be_able_to_put_a_audio_qualities_with_id_and_following_data(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify PUT method works for video_qualities",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPutTest"
    },
    {
      "name": "@putVideo_qualities"
    }
  ]
});
formatter.step({
  "name": "the user should be able to put a video_qualities with id \"126\" and following data",
  "rows": [
    {
      "cells": [
        "name",
        "The last man"
      ]
    },
    {
      "cells": [
        "abbr",
        "DTS 5.8"
      ]
    },
    {
      "cells": [
        "position",
        "null"
      ]
    },
    {
      "cells": [
        "default",
        "false"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_PUT_method_Step_Defs.the_user_should_be_able_to_put_a_video_qualities_with_id_and_following_data(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify PUT method works for genres",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@APIPutTest"
    },
    {
      "name": "@putGenres"
    }
  ]
});
formatter.step({
  "name": "the user should be able to put a genres with id \"156\" and following data",
  "rows": [
    {
      "cells": [
        "name",
        "Horror catch"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_PUT_method_Step_Defs.the_user_should_be_able_to_put_a_genres_with_id_and_following_data(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/WishList.feature");
formatter.feature({
  "name": "Adding a movie to wishList successfully",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@UItest"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_navigates_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SignUp as a new user successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@UItest"
    },
    {
      "name": "@signUp"
    }
  ]
});
formatter.step({
  "name": "the user clicks register button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_clicks_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registers successfully with valid credentials",
  "rows": [
    {
      "cells": [
        "email",
        "ozm15715@gmail.com"
      ]
    },
    {
      "cells": [
        "password",
        "123456abcd"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_registers_successfully_with_valid_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be on the main page with username \"ozm15715\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_should_be_on_the_main_page_with_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_navigates_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SignIn as a current user successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@UItest"
    },
    {
      "name": "@AddingToWishlist"
    }
  ]
});
formatter.step({
  "name": "the user clicks the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins successfully with valid credentials",
  "rows": [
    {
      "cells": [
        "email",
        "ozm15715@gmail.com"
      ]
    },
    {
      "cells": [
        "password",
        "123456abcd"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_logins_successfully_with_valid_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the notification button as a verification",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_should_see_the_notification_button_as_a_verification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user searches the movie \"Onward\" on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_searches_the_movie_on_the_search_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the result",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_clicks_the_result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the action icon to add to wishlist",
  "keyword": "And "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_clicks_the_action_icon_to_add_to_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_goes_to_the_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the movie \"Onward\" added to the wishlist",
  "keyword": "And "
});
formatter.match({
  "location": "AddingToWishlist_StepDefs.the_user_should_see_the_movie_added_to_the_wishlist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_navigates_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SignUp as a new user successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@UItest"
    },
    {
      "name": "@signUpFakeData"
    }
  ]
});
formatter.step({
  "name": "the user clicks register button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_clicks_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registers successfully with dummy credentials",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp_StepDefs.the_user_registers_successfully_with_dummy_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});