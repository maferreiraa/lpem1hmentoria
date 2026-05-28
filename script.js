
// =========================================================
// CONFIGURAÇÃO DO CONTADOR
// =========================================================
// Modo automático: o contador sempre mostra 48h a partir
// da primeira visita da pessoa.
// Para alterar a duração, mude o número abaixo.
const COUNTDOWN_HOURS = 48;

// Para usar uma data fixa, descomente a linha abaixo e coloque sua data.
// Exemplo: const FIXED_DEADLINE = "2026-06-01T23:59:59-03:00";
const FIXED_DEADLINE = null;

function getDeadline() {
  if (FIXED_DEADLINE) {
    return new Date(FIXED_DEADLINE).getTime();
  }

  const storageKey = "lp_mentoria_deadline";
  const savedDeadline = localStorage.getItem(storageKey);

  if (savedDeadline) {
    return Number(savedDeadline);
  }

  const newDeadline = new Date().getTime() + COUNTDOWN_HOURS * 60 * 60 * 1000;
  localStorage.setItem(storageKey, String(newDeadline));
  return newDeadline;
}

const deadline = getDeadline();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = deadline - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (distance <= 0) {
    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.innerText = String(days).padStart(2, "0");
  hoursEl.innerText = String(hours).padStart(2, "0");
  minutesEl.innerText = String(minutes).padStart(2, "0");
  secondsEl.innerText = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =========================================================
// EVENTOS DE CLIQUE — PIXEL / GA4 / CLARITY
// =========================================================
// Estes eventos só funcionam quando você colar os scripts
// oficiais do Meta Pixel, Google Analytics e Clarity no <head>.

function trackEvent(eventName, params = {}) {
  // Meta Pixel
  if (typeof fbq === "function") {
    fbq("trackCustom", eventName, params);
  }

  // Google Analytics 4
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }

  // Microsoft Clarity
  if (typeof clarity === "function") {
    clarity("event", eventName);
  }

  console.log("Evento disparado:", eventName, params);
}

document.querySelectorAll(".js-checkout").forEach((button) => {
  button.addEventListener("click", () => {
    trackEvent("Clique_Checkout_Kiwify", {
      produto: "Mentoria LP com IA",
      valor: 147
    });

    if (typeof fbq === "function") {
      fbq("track", "InitiateCheckout", {
        value: 147,
        currency: "BRL"
      });
    }
  });
});

document.querySelectorAll(".js-whatsapp").forEach((button) => {
  button.addEventListener("click", () => {
    trackEvent("Clique_Whatsapp", {
      produto: "Mentoria LP com IA"
    });

    if (typeof fbq === "function") {
      fbq("track", "Contact");
    }
  });
});
