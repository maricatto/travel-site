import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('I should see the heading {string}', async ({ page }, text) => {
  await expect(page.getByRole('heading', { name: text })).toBeVisible()
})

Then('I should see the text {string}', async ({ page }, text) => {
  await expect(page.getByText(text).first()).toBeVisible()
})

Then('I should see a {string} link in the hero', async ({ page }, text) => {
  const hero = page.locator('section').first()
  await expect(hero.getByRole('link', { name: text })).toBeVisible()
})
