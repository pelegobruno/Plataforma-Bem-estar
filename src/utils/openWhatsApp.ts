export function openWhatsApp(
  phone: string,
  name: string,
  role: string
) {
  const message = encodeURIComponent(
    `Olá, encontrei o perfil de ${name} na Plataforma Saúde Integrada.
Gostaria de saber mais sobre o atendimento como ${role}.`
  );

  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
}
