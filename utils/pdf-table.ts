import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { NotoDevanagariBase64 } from "./NotoDevanagariBase64";

export async function generateMealPDF(rows: any[], p1: number, p2: number) {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const doc = new jsPDF("p", "mm", "a4");

  // Register Font
  (doc as any).addFileToVFS("Noto.ttf", NotoDevanagariBase64);
  (doc as any).addFont("Noto.ttf", "Noto", "normal");
  doc.setFont("Noto");

// ---- Header ----
doc.setFontSize(14);
doc.text("Pradhan Mantri Poshan Shakti Nirman Yojana", 14, 16);
doc.text(`Date: ${today}`, 150, 16);

doc.setFontSize(11);
doc.text("Midday Meal Quantity Report", 14, 24);

doc.text(`Students (Class 1–5): ${p1}`, 14, 32);
doc.text(`Students (Class 6–8): ${p2}`, 14, 38);
doc.text(`Total Students: ${p1 + p2}`, 14, 44);


  // ---- Table ----
  autoTable(doc, {
    startY: 50,

    head: [["Item", "Primary (1-5)", "Secondary (6-7)", "Total"]],

    body: rows.map((r) => [
      r.name,
      `${r.primary} kg`,
      `${r.secondary} kg`,
      `${r.total} kg`,
    ]),

    theme: "grid",

    styles: {
      font: "Noto",
      halign: "center",
      valign: "middle",
      fontSize: 10,
    },

    headStyles: {
      font: "Noto",
      halign: "center",
      valign: "middle",
      fontSize: 10,
    },
  });

  // ---- Footer ----
  doc.text(
    "Generated via PM Poshan PWA",
    14,
    doc.internal.pageSize.getHeight() - 10
  );

  doc.save("Poshan-Report.pdf");
}
