document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const ticket = params.get("ticket");

  const statusEl = document.getElementById("status");
  const ticketEl = document.getElementById("ticket-number");

  if (ticket) {
    statusEl.textContent = "チケット番号を確認しました。";
    ticketEl.textContent = `あなたのチケット番号: ${ticket}`;
    
    // ✅ Supabase登録やチャットへの遷移処理を書く場所

  } else {
    statusEl.textContent = "チケット番号が見つかりません。URLを確認してください。";
  }
});
