import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Given, When, Then } = createBdd()

Given('I am on the home page', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
})

When('I click the {string} nav link', async ({ page }, linkText) => {
  await page.getByRole('navigation').getByRole('link', { name: linkText }).click()
  await page.waitForTimeout(800) // allow smooth scroll
})

When('I click {string}', async ({ page }, linkText) => {
  await page.getByRole('link', { name: linkText }).first().click()
  await page.waitForTimeout(800)
})

Then('the {string} section should be in view', async ({ page }, sectionId) => {
  const section = page.locator(`#${sectionId}`)
  await section.scrollIntoViewIfNeeded()
  const box = await section.boundingBox()
  const viewportSize = page.viewportSize()
  expect(box.y).toBeLessThan(viewportSize.height)
})
