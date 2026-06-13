Feature: Accessibility
  As a user with assistive technology
  I want the page to be accessible
  So that I can use it regardless of ability

  Background:
    Given I am on the home page

  Scenario: Page has a single h1 element
    Then there should be exactly 1 h1 on the page

  Scenario: All images have alt attributes
    Then all images should have alt attributes

  Scenario: Decorative images have empty alt
    Then decorative icon images should have empty alt text

  Scenario: Page has a main landmark
    Then the page should have a main landmark

  Scenario: Page has navigation landmark
    Then the page should have a navigation landmark
