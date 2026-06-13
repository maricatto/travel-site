import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('I should see a {string} navigation link', async ({ page }, linkText) => {
  const link = page.getByRole('navigation').getByRole('link', { name: linkText })
  await expect(link).toBeVisible()
})

Then('I should see a {string} button in the header', async ({ page }, text) => {
  const header = page.locator('header')
  await expect(header.getByRole('link', { name: text })).toBeVisible()
})
