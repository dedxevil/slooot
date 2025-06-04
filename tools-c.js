document.addEventListener("DOMContentLoaded", function () {
  const homeContent = `
    <section class="mt-32 mb-12 text-center fade-in ma-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Discover unique and useful Web Tools</h1>
      <p class="text-xl opacity-80 max-w-2xl mx-auto">
        A curated collection of handy web tools to simplify your digital life.
      </p>
    </section>

    ${generateSection("Finance Tools", [
      { name: "SIP Calculator", href: "/sip-calculator", desc: "Calculate returns on your systematic investment plans." }
    ])}

    ${generateSection("Social Tools", [
      { name: "Hashtag Generator", href: "/hashtag-generator", desc: "Generate trending hashtags for your content." }
    ])}

    ${generateSection("Utility Tools", [
      { name: "Password Generator", href: "/password-generator", desc: "Generate secure passwords instantly." }
    ])}

    ${generateSection("Fun Tools", [
      { name: "FLAMES Calculator", href: "#", desc: "The classic relationship predictor game." }
    ])}

    ${generateSection("Developer Tools", [
      { name: "JSON Formatter", href: "#", desc: "Format and validate JSON data." }
    ])}
  `;

  const container = document.getElementById("home-content");
  if (container) container.innerHTML = homeContent;
});

function generateSection(title, tools) {
  return `
    <section class="mb-12 fade-in">
      <h2 class="text-2xl font-bold mb-4">${title}</h2>
      <ul class="space-y-2">
        ${tools.map(tool => `
          <li>
            <a href="${tool.href}" class="text-blue-600 hover:underline text-lg font-medium">
              ${tool.name}
            </a>
            <p class="text-sm text-gray-600">${tool.desc}</p>
          </li>
        `).join("")}
      </ul>
    </section>
  `;
}
