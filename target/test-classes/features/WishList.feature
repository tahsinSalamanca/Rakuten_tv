@All

@UItest

  Feature: Adding a movie to wishList successfully

    Background:
      Given the user navigates to login page

    @signUp
    Scenario: SignUp as a new user successfully
      Then  the user clicks register button
      And  the user registers successfully with valid credentials
      |email   |ozm15715@gmail.com     |
      |password|123456abcd            |
      Then the user should be on the main page with username "ozm15715"

    @AddingToWishlist
      Scenario: SignIn as a current user successfully
      Then the user clicks the login button
      And  the user logins successfully with valid credentials
        |email   |ozm15715@gmail.com     |
        |password|123456abcd            |
      Then the user should see the notification button as a verification
      And  the user searches the movie "Onward" on the search button
      Then the user clicks the result
      And  the user clicks the action icon to add to wishlist
      Then the user goes to the wishlist
      And  the user should see the movie "Onward" added to the wishlist

    @signUpFakeData
    Scenario: SignUp as a new user successfully
      Then  the user clicks register button
      And  the user registers successfully with dummy credentials
















