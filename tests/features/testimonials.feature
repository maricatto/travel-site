Feature: Testimonials Section
  As a visitor
  I want to read customer testimonials
  So that I can build trust in the service

  Background:
    Given I am on the home page

  Scenario: Testimonials section heading is visible
    Then I should see the heading "Real Testimonials"

  Scenario: All testimonials are displayed
    Then I should see a testimonial from "Jane Doe"
    And I should see a testimonial from "John Smith"
    And I should see a testimonial from "Cat McKitty"

  Scenario: There are exactly 3 testimonials
    Then there should be 3 testimonial cards

  Scenario: Testimonials show trip count
    Then "Jane Doe" should show "9 Time Escaper"
    And "John Smith" should show "4 Time Escaper"
    And "Cat McKitty" should show "6 Time Escaper"
