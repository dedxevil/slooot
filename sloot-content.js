// tools-content.js

const toolsHTML = `
<div id="home-content">
  <section class="mt-32 mb-12 fade-in ma-8">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Discover unique and useful Web Tools</h1>
      <p class="text-xl opacity-80 max-w-2xl mx-auto">
        A curated collection of handy web tools to simplify your digital life.
      </p>
    </div>
  </section>
</div>

<section id="finance" class="mb-16 category-section fade-in">
  <h2 class="text-3xl font-bold category-header finance-header">Finance Tools</h2>
  <div class="tool-grid">
    <a href="/sip-calculator" class="card p-6 tool-card" data-tool="clacpis">
      <div class="tool-icon finance-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold mb-2">SIP Calculator</h3>
      <p class="opacity-70">Calculate returns on your systematic investment plans.</p>
    </a>
  </div>
</section>

<section id="social" class="mb-16 category-section fade-in">
  <h2 class="text-3xl font-bold category-header social-header">Social Tools</h2>
  <div class="tool-grid">
    <a href="/hashtag-generator" class="card p-6 tool-card" data-tool="hashtag-generator">
      <div class="tool-icon social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold mb-2">Hashtag Generator</h3>
      <p class="opacity-70">Generate trending hashtags for your content.</p>
    </a>
  </div>
</section>

<section id="utility" class="mb-16 category-section fade-in">
  <h2 class="text-3xl font-bold category-header utility-header">Utility Tools</h2>
  <div class="tool-grid">
    <a href="/password-generator" class="card p-6 tool-card" data-tool="pwdgen">
      <div class="tool-icon utility-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold mb-2">Password Generator</h3>
      <p class="opacity-70">Generate secure passwords instantly.</p>
    </a>
  </div>
</section>

<section id="fun" class="mb-16 category-section fade-in">
  <h2 class="text-3xl font-bold category-header fun-header">Fun Tools</h2>
  <div class="tool-grid">
    <a href="#" class="card p-6 tool-card" data-tool="flames">
      <div class="tool-icon fun-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold mb-2">FLAMES Calculator</h3>
      <p class="opacity-70">The classic relationship predictor game.</p>
    </a>
  </div>
</section>

<section id="dev" class="mb-16 category-section fade-in">
  <h2 class="text-3xl font-bold category-header dev-header">Developer Tools</h2>
  <div class="tool-grid">
    <a href="#" class="card p-6 tool-card" data-tool="json-formatter">
      <div class="tool-icon dev-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold mb-2">JSON Formatter</h3>
      <p class="opacity-70">Format and validate JSON data.</p>
    </a>
  </div>
</section>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tools-container").innerHTML = toolsHTML;
});
