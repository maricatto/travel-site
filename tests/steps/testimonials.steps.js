import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('I should see a testimonial from {string}', async ({ page }, name) => {
  const testimonialsSection = page.locator('#testimonials')
  await expect(testimonialsSection.getByRole('heading', { name, level: 3 })).toBeVisible()
})

Then('there should be {int} testimonial cards', async ({ page }, count) => {
  const cards = page.locator('#testimonials article')
  await expect(cards).toHaveCount(count)
})

Then('{string} should show {string}', async ({ page }, name, label) => {
  const card = page.locator('#testimonials article').filter({
    has: page.getByRole('heading', { name, level: 3 }),
  })
  await expect(card.getByText(label)).toBeVisible()
})
