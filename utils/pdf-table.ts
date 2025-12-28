import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { NotoDevanagariBase64 } from "./NotoDevanagariBase64";

export async function generateMealPDF(
  rows: any[],
  p1: number,
  p2: number,
  kharcha15: string,
  kharcha68: string,
  totalKharcha: string
) {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const doc = new jsPDF("p", "mm", "a4");

  // ✅ Register Marathi Font
  (doc as any).addFileToVFS("Noto.ttf", NotoDevanagariBase64);
  (doc as any).addFont("Noto.ttf", "Noto", "normal");
  doc.setFont("Noto");

  // ---------------- HEADER ----------------
  doc.setFontSize(14);
  doc.text("Pradhan Mantri Poshan Shakti Nirman Yojana", 14, 16);
  doc.text(`Date: ${today}`, 150, 16);

  doc.setFontSize(11);
  doc.text("Midday Meal Quantity Report", 14, 24);

  doc.text(`Students (Class 1–5): ${p1}`, 14, 32);
  doc.text(`Students (Class 6–8): ${p2}`, 14, 38);
  doc.text(`Total Students: ${p1 + p2}`, 14, 44);

  // ---------------- ITEMS TABLE ----------------
  autoTable(doc, {
    startY: 50,

    head: [["Item", "Primary (1–5)", "Secondary (6–8)", "Total"]],
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
      fillColor: [37, 99, 235],
      textColor: [255, 255, 255],
    },
  });

  // ---------------- खर्च TABLE ----------------
  const nextY = (doc as any).lastAutoTable.finalY + 10;
  (doc as any).addFileToVFS("Noto.ttf", NotoDevanagariBase64);

  doc.setFontSize(12);
  doc.text("Student-wise Cost Details", 14, nextY);

  autoTable(doc, {
    startY: nextY + 6,

    // ✅ Marathi Headings
    head: [["Cost (Class 1–5)", "Cost (Class 6–8)", "Total Cost"]],


    body: [[`₹ ${kharcha15}`, `₹ ${kharcha68}`, `₹ ${totalKharcha}`]],

    theme: "grid",

    styles: {
      font: "Noto",
      halign: "center",
      valign: "middle",
      fontSize: 11,
    },

    headStyles: {
      font: "Noto",
      halign: "center",
      valign: "middle",
      fillColor: [37, 99, 235],
      textColor: [255, 255, 255],
    },
  });

  // ---------------- FOOTER ----------------
  doc.text(
    "Generated via PM Poshan PWA",
    14,
    doc.internal.pageSize.getHeight() - 10
  );

  doc.save("Poshan-Report.pdf");
}
