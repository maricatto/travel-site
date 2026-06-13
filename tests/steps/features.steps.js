import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('I should see the feature {string}', async ({ page }, featureName) => {
  const featuresSection = page.locator('#features')
  await expect(featuresSection.getByRole('heading', { name: featureName, level: 3 })).toBeVisible()
})

Then('there should be {int} feature cards', async ({ page }, count) => {
  const cards = page.locator('#features article')
  await expect(cards).toHaveCount(count)
})
