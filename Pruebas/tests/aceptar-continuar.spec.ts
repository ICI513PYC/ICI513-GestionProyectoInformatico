import { test, expect } from '@playwright/test';

test('aceptar y continuar redirige al paso 1 del formulario', async ({ page }) => {
  // Repetimos el flujo inicial
  await page.goto('https://municipios.simple.digital.gob.cl/');

  const tarjeta = page.locator('.card:has-text("[SSVA] Form Contactabilidad")');
  await expect(tarjeta).toBeVisible();
  await tarjeta.locator('.card-footer').click();

  await expect(page.locator('text=¡Bienvenido a Servicio de Salud')).toBeVisible();

  // Asegurarse que el modal esté cerrado si existe
  await page.locator('#modalTerminos').waitFor({ state: 'hidden' }).catch(() => null);

  // ✅ Selector corregido: botón principal fuera del modal
  const botonAceptar = page.locator('button.ssvsa-btn-primary');
  await expect(botonAceptar).toBeVisible();
  await botonAceptar.click();

  await expect(page).toHaveURL(/\/1$/);
  await expect(page.locator('h1, h2, .title, .etapa_titulo')).toContainText(
    'Formulario de Contactabilidad y Actualización de Datos – Servicio de Salud Valparaíso San Antonio',
    { ignoreCase: true }
  );
});
