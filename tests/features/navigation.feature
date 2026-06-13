Feature: Site Navigation
  As a visitor
  I want to navigate between sections
  So that I can explore the site content

  Background:
    Given I am on the home page

  Scenario: Nav links are visible in the header
    Then I should see a "Our Beginning" navigation link
    And I should see a "Features" navigation link
    And I should see a "Testimonials" navigation link

  Scenario: Clicking Our Beginning nav link scrolls to section
    When I click the "Our Beginning" nav link
    Then the "our-beginning" section should be in view

  Scenario: Clicking Features nav link scrolls to section
    When I click the "Features" nav link
    Then the "features" section should be in view

  Scenario: Clicking Testimonials nav link scrolls to section
    When I click the "Testimonials" nav link
    Then the "testimonials" section should be in view

  Scenario: Get in Touch CTA is visible
    Then I should see a "Get in Touch" button in the header
