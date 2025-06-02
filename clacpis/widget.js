(function () {
  function formatCurrency(num) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);
  }

  function numberToWords(amount) {
    const crore = Math.floor(amount / 10000000);
    const lakh = Math.floor((amount % 10000000) / 100000);
    const thousand = Math.floor((amount % 100000) / 1000);
    let words = [];
    if (crore) words.push(crore + " Crore");
    if (lakh) words.push(lakh + " Lakh");
    if (thousand) words.push(thousand + " Thousand");
    return words.length ? words.join(", ") : formatCurrency(amount);
  }

  function downloadResult(text) {
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sip_result.txt";
    a.click();
  }

  const container = document.createElement("div");
  container.style.fontFamily = "inherit";
  container.style.maxWidth = "900px";
  container.style.margin = "40px auto";
  container.style.padding = "24px";
  container.style.borderRadius = "12px";
  container.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.08)";
  container.style.backgroundColor = "#fff";

  container.innerHTML = `
    <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:1rem;">📈 SIP Calculator</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
      <div>
        <label>Monthly Investment (INR)</label>
        <input type="number" id="sip-amount" value="5000" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:6px;margin-top:4px;" />
      </div>
      <div>
        <label>Investment Period (Years)</label>
        <input type="number" id="sip-years" value="10" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:6px;margin-top:4px;" />
      </div>
      <div>
        <label>Expected Annual Return (%)</label>
        <input type="number" id="sip-return" value="12" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:6px;margin-top:4px;" />
      </div>
      <div>
        <label style="display:block;">Adjust for Inflation</label>
        <div style="display:flex;align-items:center;margin-top:6px;">
          <input type="checkbox" id="sip-inflation-check" />
          <input type="number" id="sip-inflation" value="6" style="width:60px;margin-left:12px;padding:8px;border:1px solid #ccc;border-radius:6px;" />
          <span style="margin-left:6px;">%</span>
        </div>
      </div>
    </div>

    <button id="sip-calculate" style="width:100%;padding:12px;background:#6366f1;color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:24px;">
      Calculate
    </button>

    <div id="sip-result" style="display:none;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start;">
        <div>
          <h3 style="font-size:1.2rem;margin-bottom:1rem;">📊 Results</h3>
          <p id="sip-invested"></p>
          <p id="sip-gain"></p>
          <p id="sip-total"></p>
          <p id="sip-inflation-note" style="font-size:0.85rem;color:#666;"></p>
          <button id="sip-download" style="margin-top:16px;padding:10px;background:#10b981;color:#fff;border:none;border-radius:6px;font-weight:500;cursor:pointer;">📥 Download Result</button>
        </div>
        <div>
          <h4 style="margin-bottom:8px;">SIP Growth 📈</h4>
          <div id="sip-visual" style="font-size:24px;line-height:1.6;"></div>
        </div>
      </div>
    </div>

    <hr style="margin:40px 0;" />

    <div style="font-size:0.95rem;line-height:1.7;color:#374151;">
      <h3 style="font-size:1.25rem;margin-bottom:12px;">What is a SIP and How is it Calculated?</h3>
      <p>
        A Systematic Investment Plan (SIP) is a disciplined way to invest in mutual funds by investing a fixed amount regularly,
        typically every month. SIPs allow investors to build wealth over time without the need for large lump-sum investments.
      </p>
      <p>
        SIP returns are calculated using the compound interest formula where investments are made periodically.
        The future value of SIPs depends on monthly contributions, the duration of investment, and the expected rate of return.
        Our SIP calculator uses the formula:
        <strong>FV = P × [(1+r)^n – 1] × (1+r)/r</strong>, where:
        <br>• P = monthly investment
        <br>• r = monthly interest rate
        <br>• n = number of months
      </p>
      <p>
        This tool helps visualize your potential SIP growth over time and adjust for inflation to reflect real-world purchasing power.
      </p>
    </div>

    <hr style="margin:40px 0;" />

    <div>
      <h3 style="font-size:1.1rem;margin-bottom:8px;">Embed This Tool on Your Website</h3>
      <p style="font-size:0.95rem;color:#4b5563;">Add this responsive SIP calculator widget to your website:</p>
      <textarea readonly style="width:100%;height:80px;padding:12px;font-family:monospace;border:1px solid #ccc;border-radius:6px;background:#f9fafb;">
<script src="https://yourdomain.com/sip-widget.js"></script>
      </textarea>
    </div>

    <p style="margin-top:40px;font-size:0.85rem;color:#aaa;text-align:center;">
      Built with ❤️ by <a href="https://17x.studio" target="_blank" style="color:#6366f1;text-decoration:none;">17x.studio</a>
    </p>
  `;

  document.getElementById("iframe-container").appendChild(container);

  document.getElementById("sip-calculate").onclick = function () {
    const amount = +document.getElementById("sip-amount").value;
    const years = +document.getElementById("sip-years").value;
    const rate = +document.getElementById("sip-return").value;
    const includeInflation = document.getElementById("sip-inflation-check").checked;
    const inflationRate = includeInflation ? +document.getElementById("sip-inflation").value : 0;

    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    const inflationMonthly = inflationRate / 100 / 12;

    const fv = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const adjustedFV = fv / Math.pow(1 + inflationMonthly, months);

    const invested = amount * months;
    const gain = (includeInflation ? adjustedFV : fv) - invested;
    const total = invested + gain;

    document.getElementById("sip-result").style.display = "block";
    document.getElementById("sip-invested").innerHTML = `<strong>Total Invested:</strong> ${formatCurrency(invested)}`;
    document.getElementById("sip-gain").innerHTML = `<strong>Wealth Gained:</strong> ${formatCurrency(gain)} (${numberToWords(gain)})`;
    document.getElementById("sip-total").innerHTML = `<strong>Total Value:</strong> ${formatCurrency(total)}`;
    document.getElementById("sip-inflation-note").innerText = includeInflation
      ? `* Adjusted for inflation at ${inflationRate}% per annum`
      : "";

    // Visual growth using emojis
    const visual = document.getElementById("sip-visual");
    const emojiCount = Math.min(15, Math.floor(gain / 50000));
    visual.innerText = "📦".repeat(Math.ceil(invested / 100000)) + " " + "📈".repeat(emojiCount);

    // Download button handler
document.getElementById("sip-download").onclick = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "20px Inter, sans-serif";
  ctx.fillStyle = "#111";

  const investedText = `Total Invested: ${formatCurrency(invested)}`;
  const gainedText = `Wealth Gained: ${formatCurrency(gain)} (${numberToWords(gain)})`;
  const totalText = `Total Value: ${formatCurrency(total)}`;
  const emojiInvested = `Invested: ${"📦".repeat(Math.min(15, Math.floor(invested / 100000)))}`;
  const emojiGained = `Gained: ${"📈".repeat(Math.min(15, Math.floor(gain / 100000)))}`;

  const lines = [investedText, gainedText, totalText, "", "SIP Growth", emojiInvested, emojiGained];

  lines.forEach((line, i) => {
    ctx.fillText(line, 30, 50 + i * 40);
  });

  const link = document.createElement("a");
  link.download = "sip_summary.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};

  };
})();
