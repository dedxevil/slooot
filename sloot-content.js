const tools = [
  { name: "APR Calculator", path: "apr-calculator", emoji: "📈", category: "Finance" },
  { name: "FD Payout Calculator", path: "fd-payout-calculator", emoji: "🏦", category: "Finance" },
  { name: "Gratuity Calculator", path: "gratuity-calculator", emoji: "🧾", category: "Finance" },
  { name: "NPS Returns Calculator", path: "nps-returns-calculator", emoji: "💹", category: "Finance" },
  { name: "SIP Calculator", path: "sip-calculator", emoji: "📊", category: "Finance" },
  { name: "UPI Link Generator", path: "upi-payment-link-generator", emoji: "📲", category: "Finance" },

  { name: "Image Compressor", path: "image-compressor", emoji: "🖼️", category: "Image" },
  { name: "SVG Converter", path: "svg-converter", emoji: "🟩", category: "Image" },
  { name: "PNG Converter", path: "png-converter", emoji: "🔲", category: "Image" },
  { name: "WEBP Converter", path: "webp-converter", emoji: "🟨", category: "Image" },
  { name: "JPG Converter", path: "jpg-converter", emoji: "🟦", category: "Image" },
  { name: "BMP Converter", path: "bmp-converter", emoji: "🟧", category: "Image" },
  { name: "TIFF Converter", path: "tiff-converter", emoji: "🟪", category: "Image" },


  { name: "SQL Formatter", path: "sql-formatter", emoji: "🗃️", category: "Developer" },
  { name: "YAML to Go Structs", path: "yaml-to-go-structs", emoji: "🧰", category: "Developer" },
  { name: "JWT Decoder", path: "jwt-decoder", emoji: "🔑", category: "Developer" },
  { name: "Mongo ObjectId to Timestamp", path: "mongo-objectid-to-timestamp-converter", emoji: "⏱️", category: "Developer" },

  { name: "Password Generator", path: "password-generator", emoji: "🔐", category: "Utility" },
  { name: "Negative Marking Calculator", path: "negative-marking-calculator", emoji: "➖", category: "Utility" },
  { name: "Copy Paste Emojis", path: "copy-paste-emojis", emoji: "😊", category: "Utility" },

  { name: "Merge PDFs", path: "merge-pdfs", emoji: "📎", category: "PDF" },
  { name: "Split PDFs", path: "split-pdfs", emoji: "✂️", category: "PDF" },
  { name: "PDF Password Remover", path: "pdf-password-remover", emoji: "🔓", category: "PDF" },
  { name: "Protect PDFs", path: "protect-pdfs", emoji: "🛡️", category: "PDF" },
  { name: "PDF Page Numbers", path: "page-numbers-pdf", emoji: "🔢", category: "PDF" },
  { name: "Image to PDF", path: "image-pdf-converter", emoji: "📑", category: "PDF" },
  { name: "Excel to PDF", path: "excel-to-pdf-converter", emoji: "🧾", category: "PDF" },
  { name: "PDF to Excel", path: "pdf-to-excel-converter", emoji: "❎️", category: "PDF" },
  { name: "PPT to PDF", path: "ppt-to-pft-converter", emoji: "🛝", category: "PDF" },
  { name: "PDF Compressor", path: "pdf-compressor", emoji: "📑", category: "PDF" },
  { name: "Rotate PDF pages", path: "rotate-pdf-pages", emoji: "📄", category: "PDF" },
   { name: "Remove blank PDF pages", path: "remove-blank-pages-pdf", emoji: "📄", category: "PDF" },

  { name: "WhatsApp Link Generator", path: "whatsapp-link-generator", emoji: "💬", category: "Social" },
  { name: "YouTube Video Thumbnail Downloader", path: "youtube-thumbnail-downloader", emoji: "📺️", category: "Social" },

  
  { name: "Word Count and Frequency Analyzer", path: "word-count", emoji: "🔁", category: "Text" },
  { name: "Text Repeater", path: "text-repeater", emoji: "🔤", category: "Text" },
    { name: "Text to Morse Code Converter", path: "text-to-morse-code", emoji: "▫️", category: "Text" },
  { name: "Morse Code to Text Converter", path: "morse-code-to-text", emoji: "▫️", category: "Text" },
  // { name: "YouTube Channel Profile Picture Downloader", path: "youtube-channel-profile-picture-downloader", emoji: "📽️", category: "Social" },
];

function generateGroupedTools(tools) {
  const grouped = {};
  tools.forEach(tool => {
    if (!grouped[tool.category]) grouped[tool.category] = [];
    grouped[tool.category].push(tool);
  });

  return Object.entries(grouped).map(([category, toolList]) => {
    const toolsHTML = toolList.map(tool =>
      `<a href="/${tool.path}" class="block px-4 py-2 rounded hover:bg-gray-700 transition">${tool.emoji} ${tool.name}</a>`
    ).join("");

    return `
     <div class="bg-white-100 text-gray-900 border border-gray-200 p-6 rounded-xl shadow mb-10 dark:bg-gray-900 dark:text-white">
        <h2 class="text-2xl font-semibold mb-4">${category}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${toolsHTML}
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tools-container");
  container.innerHTML = `
   <div class="max-w-5xl mx-auto px-4 mt-20 mb-12 text-center">
 <h1 class="text-3xl md:text-4xl font-bold mb-3">Curated collection of micro tools that simplify your time on the internet</h1>
<p class="text-2xl text-white font-semibold mb-4">${tools.length} tools and counting...</p>

 <p class="text-base text-gray-600 mb-8">Search or browse tools by category below.</p>
 <input type="text" id="toolSearch" placeholder="🔍 Search tools..." class="w-full max-w-xl mx-auto p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
 </div>


    <div class="max-w-5xl mx-auto px-4 mb-24" id="toolResults">
      ${generateGroupedTools(tools)}
    </div>
  `;

  const searchInput = document.getElementById("toolSearch");
  const toolResults = document.getElementById("toolResults");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = tools.filter(t => t.name.toLowerCase().includes(query));
    toolResults.innerHTML = generateGroupedTools(filtered);
  });
});
