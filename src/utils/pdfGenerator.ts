import jsPDF from 'jspdf';
import { personalInfo, experiences, skills, education, certifications } from '../data/resumeData';

export async function generatePDF() {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let y = 20;

  const addNewPageIfNeeded = (requiredSpace: number = 30) => {
    if (y + requiredSpace > 270) {
      doc.addPage();
      y = 20;
    }
  };

  // Header
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(personalInfo.name, margin, y);
  y += 8;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(personalInfo.title, margin, y);
  y += 7;

  doc.setFontSize(9);
  doc.text(
    `${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}`,
    margin, y
  );
  y += 4;
  doc.text(
    `GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}`,
    margin, y
  );
  y += 8;

  // Divider
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // Summary
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('PROFESSIONAL SUMMARY', margin, y);
  y += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  const summaryLines = doc.splitTextToSize(personalInfo.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.5 + 6;

  // Experience
  addNewPageIfNeeded(40);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('EXPERIENCE', margin, y);
  y += 8;

  experiences.forEach((exp) => {
    addNewPageIfNeeded(50);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(exp.role, margin, y);
    y += 5;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.text(`${exp.company} | ${exp.duration} | ${exp.location}`, margin, y);
    y += 6;

    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    exp.highlights.forEach((h) => {
      addNewPageIfNeeded(10);
      const lines = doc.splitTextToSize(`• ${h}`, contentWidth - 5);
      doc.text(lines, margin + 3, y);
      y += lines.length * 4.2 + 1;
    });

    y += 5;
  });

  // Skills
  addNewPageIfNeeded(30);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('SKILLS', margin, y);
  y += 8;

  const categories = [...new Set(skills.map(s => s.category))];
  categories.forEach((cat) => {
    addNewPageIfNeeded(15);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(60, 60, 60);
    const catSkills = skills.filter(s => s.category === cat).map(s => s.name).join(', ');
    doc.text(`${cat}: `, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(catSkills, margin + doc.getTextWidth(`${cat}: `), y);
    y += 6;
  });

  // Education
  y += 4;
  addNewPageIfNeeded(20);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('EDUCATION', margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(education.degree, margin, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text(`${education.university} | ${education.year}`, margin, y);
  y += 10;

  // Certifications
  addNewPageIfNeeded(20);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('CERTIFICATIONS', margin, y);
  y += 8;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  certifications.forEach((cert) => {
    addNewPageIfNeeded(8);
    doc.text(`• ${cert}`, margin, y);
    y += 5;
  });

  // Save
  doc.save('Long_Goldie_Tran_Resume.pdf');
}
