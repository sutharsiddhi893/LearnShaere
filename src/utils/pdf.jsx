// Simple on-the-fly PDF-like Blob generator.
// We craft a tiny, valid PDF using the PDF 1.4 spec — no external dependencies.
// Perfect for placeholder downloads (notes, lab manuals, assignments, PPT stubs, papers).

function escapePDF(str = "") {
  return String(str).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

// Build a minimal single-page PDF with wrapped text.
function buildPDF(title, lines) {
  const width = 612, height = 792; // US Letter
  const margin = 54;
  const maxWidth = 72; // chars per line (approx for Helvetica 12)
  const wrapped = [];
  for (const raw of lines) {
    const words = String(raw).split(/\s+/);
    let line = "";
    for (const w of words) {
      if ((line + " " + w).trim().length > maxWidth) {
        wrapped.push(line);
        line = w;
      } else {
        line = (line + " " + w).trim();
      }
    }
    if (line) wrapped.push(line);
    wrapped.push(""); // blank
  }

  // Text stream
  let text = "BT\n/F1 20 Tf\n" + margin + " " + (height - margin) + " Td\n(" + escapePDF(title) + ") Tj\nET\n";
  text += "BT\n/F1 11 Tf\n" + margin + " " + (height - margin - 30) + " Td\n14 TL\n";
  for (const l of wrapped) {
    text += "(" + escapePDF(l) + ") Tj T*\n";
  }
  text += "ET\n";

  const objects = [];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  objects.push("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + width + " " + height + "] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>");
  objects.push("<< /Length " + text.length + " >>\nstream\n" + text + "endstream");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += (i + 1) + " 0 obj\n" + obj + "\nendobj\n";
  });
  const xrefStart = pdf.length;
  pdf += "xref\n0 " + (objects.length + 1) + "\n";
  pdf += "0000000000 65535 f \n";
  for (const off of offsets) {
    pdf += String(off).padStart(10, "0") + " 00000 n \n";
  }
  pdf += "trailer\n<< /Size " + (objects.length + 1) + " /Root 1 0 R >>\nstartxref\n" + xrefStart + "\n%%EOF";
  return pdf;
}

export function downloadPDF(fileName, title, textLines) {
  const pdfString = buildPDF(title, textLines);
  const bytes = new Uint8Array(pdfString.length);
  for (let i = 0; i < pdfString.length; i++) bytes[i] = pdfString.charCodeAt(i) & 0xff;
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName.endsWith(".pdf") ? fileName : fileName + ".pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

// Convert HTML content to plain text lines for a topic's notes PDF
export function htmlToLines(html = "") {
  const div = document.createElement("div");
  div.innerHTML = html;
  const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT);
  const out = [];
  let node;
  while ((node = walker.nextNode())) {
    const t = node.nodeValue.replace(/\s+/g, " ").trim();
    if (t) out.push(t);
  }
  return out;
}

// Build a "fake" file size (KB) deterministically from title length
export function fakeFileSize(seed) {
  const n = (seed || "").length * 37 + 240;
  return (n / 100).toFixed(1) + " MB";
}
