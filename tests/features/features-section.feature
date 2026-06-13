Feature: Features Section
  As a visitor
  I want to learn about the service features
  So that I can decide if it meets my needs

  Background:
    Given I am on the home page

  Scenario: Features section heading is visible
    Then I should see the heading "Our Features"

  Scenario: All four features are displayed
    Then I should see the feature "We'll Watch the Weather"
    And I should see the feature "Global Guides"
    And I should see the feature "Wi-Fi Waypoints"
    And I should see the feature "Survival Kit"

  Scenario: Features section has exactly 4 feature cards
    Then there should be 4 feature cards
