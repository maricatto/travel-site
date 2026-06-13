Feature: Hero Section
  As a visitor
  I want to see an impactful hero section
  So that I understand the site's purpose immediately

  Background:
    Given I am on the home page

  Scenario: Hero displays main headline
    Then I should see the heading "Your clarity."

  Scenario: Hero displays subheadline
    Then I should see the text "One trip away."

  Scenario: Hero displays tagline
    Then I should see the text "We create soul restoring journeys that inspire you to be you."

  Scenario: Get Started Today CTA is present
    Then I should see a "Get Started Today" link in the hero

  Scenario: Get Started Today links to Our Beginning
    When I click "Get Started Today"
    Then the "our-beginning" section should be in view
