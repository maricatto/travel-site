import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('there should be exactly {int} h1 on the page', async ({ page }, count) => {
  const h1s = page.locator('h1')
  await expect(h1s).toHaveCount(count)
})

Then('all images should have alt attributes', async ({ page }) => {
  const imagesWithoutAlt = page.locator('img:not([alt])')
  await expect(imagesWithoutAlt).toHaveCount(0)
})

Then('decorative icon images should have empty alt text', async ({ page }) => {
  const decorativeIcons = page.locator('img[aria-hidden="true"]')
  const count = await decorativeIcons.count()
  expect(count).toBeGreaterThan(0)
  for (let i = 0; i < count; i++) {
    const alt = await decorativeIcons.nth(i).getAttribute('alt')
    expect(alt).toBe('')
  }
})

Then('the page should have a main landmark', async ({ page }) => {
  await expect(page.getByRole('main')).toBeVisible()
})

Then('the page should have a navigation landmark', async ({ page }) => {
  await expect(page.getByRole('navigation')).toBeVisible()
})
