import { test, expect } from '@playwright/test';

test('modal de términos se abre y se cierra', async ({ page }) => {
  // Flujo inicial para llegar al formulario
  await page.goto('https://municipios.simple.digital.gob.cl/');

  const tarjeta = page.locator('.card:has-text("[SSVA] Form Contactabilidad")');
  await expect(tarjeta).toBeVisible();
  await tarjeta.locator('.card-footer').click();

  await expect(page.locator('text=¡Bienvenido a Servicio de Salud')).toBeVisible();

  // Botón que abre el modal
  const botonTyC = page.getByRole('button', { name: 'Ver Términos y Condiciones' });
  await expect(botonTyC).toBeVisible();
  await botonTyC.click();

  // Espera a que se muestre el modal con contenido específico
  const modal = page.locator('.modal-content:has-text("Términos y Condiciones")');
  await expect(modal).toBeVisible({ timeout: 3000 });

  // Validar contenido clave dentro del modal
  await expect(modal).toContainText('Servicio de Salud Valparaíso San Antonio');
  await expect(modal).toContainText('DATOS PERSONALES RECABADOS');

  // Botón "Aceptar y continuar" del modal (usa clases específicas)
  const botonAceptarModal = modal.locator('button.ssvsa-btn-confirm');
  await expect(botonAceptarModal).toBeVisible();
  await botonAceptarModal.click();

  // Esperar que el modal desaparezca
  await expect(modal).toBeHidden({ timeout: 3000 });
});
