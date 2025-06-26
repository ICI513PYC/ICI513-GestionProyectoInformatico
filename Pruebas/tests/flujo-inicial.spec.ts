import { test, expect } from '@playwright/test';

test('flujo hasta pantalla de términos', async ({ page }) => {
  await page.goto('https://municipios.simple.digital.gob.cl/');

  const tarjeta = page.locator('.card:has-text("[SSVA] Form Contactabilidad")');
  await expect(tarjeta).toBeVisible();

  const boton = tarjeta.locator('.card-footer');
  await expect(boton).toHaveText(/Iniciar/i);
  await boton.click();

  await expect(page.locator('text=¡Bienvenido a Servicio de Salud')).toBeVisible();
});
