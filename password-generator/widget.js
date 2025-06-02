(function () {
  const container = document.createElement("div");
  container.id = "password-generator-container";
  container.style.fontFamily = "'Inter', sans-serif";
  container.style.maxWidth = "700px";
  container.style.margin = "40px auto";
  container.style.padding = "24px";
  container.style.borderRadius = "12px";
  container.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.08)";
  container.style.backgroundColor = "#fff";

  // Title section
  const title = document.createElement("h2");
  title.innerText = "🔐 Password Generator";
  Object.assign(title.style, {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "20px",
  });
  container.appendChild(title);

  // Password display
  const passwordDisplay = document.createElement("input");
  passwordDisplay.type = "text";
  passwordDisplay.readOnly = true;
  passwordDisplay.placeholder = "Your password will appear here...";
  Object.assign(passwordDisplay.style, {
    width: "100%",
    fontSize: "1.2rem",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "12px",
    backgroundColor: "#f9fafb",
    fontFamily: "inherit",
  });
  container.appendChild(passwordDisplay);

  // Copy to clipboard
  const copyBtn = document.createElement("button");
  copyBtn.innerText = "Copy to Clipboard";
  Object.assign(copyBtn.style, {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "#10b981",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  });
  copyBtn.onclick = () => {
    passwordDisplay.select();
    document.execCommand("copy");
    showPopup("Password copied to clipboard!");
  };
  container.appendChild(copyBtn);

  // Password length slider
  const sliderContainer = document.createElement("div");
  sliderContainer.style.marginBottom = "20px";
  sliderContainer.innerHTML = `
    <label style="display:block;margin-bottom:4px;font-weight:500;">Password Length</label>
    <input type="range" id="lengthRange" min="4" max="32" value="12" style="width:100%;" />
    <div style="text-align:right;font-size:0.9rem;"><span id="rangeValue">12</span></div>
  `;
  container.appendChild(sliderContainer);
  const rangeInput = sliderContainer.querySelector("#lengthRange");
  const rangeValue = sliderContainer.querySelector("#rangeValue");
  rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value;
  });

  // Checkboxes
  const checkboxRow = document.createElement("div");
  checkboxRow.style.display = "grid";
  checkboxRow.style.gridTemplateColumns = "repeat(2, 1fr)";
  checkboxRow.style.gap = "10px";
  checkboxRow.style.marginBottom = "20px";

  const options = [
    { id: "uppercase", label: "Uppercase Letters", checked: true },
    { id: "lowercase", label: "Lowercase Letters", checked: true },
    { id: "numbers", label: "Numbers", checked: true },
    { id: "symbols", label: "Special Characters", checked: true },
  ];

  options.forEach(opt => {
    const wrapper = document.createElement("label");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "8px";
    wrapper.style.fontFamily = "inherit";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = opt.id;
    checkbox.checked = opt.checked;

    wrapper.appendChild(checkbox);
    wrapper.append(opt.label);
    checkboxRow.appendChild(wrapper);
  });

  container.appendChild(checkboxRow);

  // Generate button
  const generateBtn = document.createElement("button");
  generateBtn.innerText = "Generate Password";
  Object.assign(generateBtn.style, {
    width: "100%",
    padding: "12px",
    backgroundColor: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: "16px",
    fontFamily: "inherit",
  });
  container.appendChild(generateBtn);

  generateBtn.onclick = () => {
    const chars = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
    };
    let pool = "";
    options.forEach(opt => {
      if (document.getElementById(opt.id).checked) pool += chars[opt.id];
    });
    const len = parseInt(rangeInput.value);
    if (!pool) return alert("Select at least one character type.");
    let pwd = "";
    for (let i = 0; i < len; i++) {
      pwd += pool[Math.floor(Math.random() * pool.length)];
    }
    passwordDisplay.value = pwd;
  };

 // Guide section
const guide = document.createElement("div");
guide.style.fontFamily = "inherit";
guide.style.lineHeight = "1.7";
guide.style.marginTop = "32px";
guide.style.padding = "24px";
guide.style.border = "1px solid #eee";
guide.style.borderRadius = "12px";
guide.style.backgroundColor = "#f9fafb";

guide.innerHTML = `
  <h3 style="margin-top:0;margin-bottom:16px;font-size:1.25rem;font-weight:600;color:#111827;">
    How to Use This Free Online Password Generator
  </h3>

  <p style="font-size:0.95rem;color:#374151;margin-bottom:16px;">
    Our secure and easy-to-use password generator tool allows you to create strong, random passwords instantly.
    Whether you're creating a password for your email, social media, banking, or work accounts, this generator
    ensures maximum protection by including uppercase letters, lowercase letters, numbers, and symbols.
    Follow the steps below to generate a unique and strong password tailored to your needs.
  </p>

  <ul style="padding-left:20px; margin-bottom:20px; font-size:0.95rem; color:#1f2937;">
    <li style="margin-bottom:8px;">➤ Select the desired password length using the slider.</li>
    <li style="margin-bottom:8px;">➤ Choose the character types you want to include — uppercase, lowercase, numbers, and special characters.</li>
    <li style="margin-bottom:8px;">➤ Click <strong>Generate Password</strong> to create a new password.</li>
    <li style="margin-bottom:8px;">➤ Click <strong>Copy to Clipboard</strong> to use the password anywhere securely.</li>
  </ul>

  <p style="font-size:0.95rem;color:#374151;margin-bottom:20px;">
    This random password generator is ideal for creating secure login credentials that protect you from hacking,
    brute-force attacks, and data breaches. Use it for social media logins, Wi-Fi passwords, eCommerce sites,
    cloud storage platforms, and more. It’s completely free, responsive, and works instantly — no registration or download required.
  </p>

  <div style="background:#fff;border:1px solid #e5e7eb;padding:16px;border-radius:8px;">
    <strong style="display:block;margin-bottom:8px;font-size:1rem;color:#111827;">Password Security Tips:</strong>
    <ul style="font-size:0.9rem;color:#4b5563;list-style:disc;padding-left:20px;">
      <li style="margin-bottom:6px;">Use a different strong password for every account to reduce security risks.</li>
      <li style="margin-bottom:6px;">Never reuse old passwords, and avoid using personal details like names or birthdates.</li>
      <li style="margin-bottom:6px;">Use a trusted password manager to store and autofill your passwords securely.</li>
      <li style="margin-bottom:6px;">Enable two-factor authentication (2FA) for extra protection wherever possible.</li>
      <li style="margin-bottom:0;">Longer passwords with complex characters are harder to crack and more secure.</li>
    </ul>
  </div>
`;
container.appendChild(guide);

// Embed section
const embedSection = document.createElement("div");
embedSection.style.marginTop = "40px";
embedSection.style.fontFamily = "inherit";

embedSection.innerHTML = `
  <h3 style="font-size:1.2rem;font-weight:600;color:#111827;margin-bottom:8px;">
    Embed This Password Generator on Your Website
  </h3>
  <p style="font-size:0.95rem;color:#4b5563;margin-bottom:12px;">
    Add this customizable password generator widget to your site to help your users create strong and secure passwords with ease.
  </p>
  <textarea readonly style="
    width: 100%;
    height: 80px;
    padding: 12px;
    font-family: monospace;
    font-size: 0.9rem;
    color: #1f2937;
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    resize: none;
  ">&lt;script src="https://yourdomain.com/widget.js"&gt;&lt;/script&gt;</textarea>
`;
container.appendChild(embedSection);


  document.getElementById("iframe-container")?.appendChild(container);

  function showPopup(message) {
    const popup = document.createElement("div");
    popup.innerText = message;
    Object.assign(popup.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "6px",
      fontFamily: "inherit",
      zIndex: "9999",
      opacity: "0",
      transition: "opacity 0.3s, bottom 0.3s",
    });
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.style.opacity = "1";
      popup.style.bottom = "40px";
    }, 100);

    setTimeout(() => {
      popup.style.opacity = "0";
      popup.style.bottom = "20px";
      setTimeout(() => popup.remove(), 500);
    }, 3000);
  }
})();
