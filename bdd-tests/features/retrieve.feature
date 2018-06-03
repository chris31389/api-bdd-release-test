Feature: Getting posts
    This feature is about retrieving post items from an api

    Scenario: Get single with id 1
        Given a post id of 1
        When I get a single post
        Then it is successful