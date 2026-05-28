
LP Mentoria Express — Landing Pages com IA

O que já está pronto:
- Layout mobile-first
- Contador de urgência de 48h por visitante
- Botões com WhatsApp da Marina: 5534996718906
- Espaço comentado para Meta Pixel
- Espaço comentado para Google Analytics
- Espaço comentado para Microsoft Clarity
- Eventos de clique nos botões de Checkout e WhatsApp

O que você precisa editar:
1. No arquivo index.html, troque:
   https://pay.kiwify.com.br/SEU-LINK-AQUI
   pelo link real do checkout da Kiwify.

2. No <head> do index.html, cole:
   - Código base do Meta Pixel
   - Código do Google Analytics
   - Código do Microsoft Clarity

3. Se quiser alterar o prazo do contador:
   Abra script.js e mude:
   const COUNTDOWN_HOURS = 48;

4. Se quiser usar uma data fixa:
   No script.js, troque:
   const FIXED_DEADLINE = null;
   por algo como:
   const FIXED_DEADLINE = "2026-06-01T23:59:59-03:00";
