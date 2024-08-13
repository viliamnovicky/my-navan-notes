import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from "../ui/Button"

const GeneratePdf = ({ data }) => {

  // Calculate the difference in milliseconds
  const differenceInMillis = new Date(data.departure) - new Date(data.arrival);

  // Convert milliseconds to days
  const millisPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const numberOfNights = Math.round(differenceInMillis / millisPerDay);

    const handleGeneratePdf = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth(); // Get page width
        const marginLeft = 15; // Distance from the left edge
        const marginRight = 15; // Distance from the right edge
        let yPosition = 20; // Initial y position
      
        // Function to calculate the x position for right-aligned text
        const getRightAlignedPosition = (text) => {
          const textWidth = doc.getTextWidth(text);
          return pageWidth - marginRight - textWidth;
        };
      
        // Add other text to the PDF
        doc.text(marginLeft, yPosition, `Corporate Credit Card Authorization Form`).setFontSize(14);
        yPosition += 15;
        doc.text(marginLeft, yPosition, `Booking Confirmation: ${data.confirmation}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Hotel Name: ${data.hotelName}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Guest Name: ${data.guestName}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Check-In: ${data.arrival}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Check-Out: ${data.departure}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Number of nights: ${numberOfNights}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Company Name: ${data.companyName}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Company Address: ${data.companyAddress}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Company Tax ID: ${data.taxId}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Company Phone Number: +18885058747`);
        yPosition += 30;
        doc.text(marginLeft, yPosition, `Name on Card: ${data.cardName}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Card Number: ${data.cardNumber}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `CVC: ${data.cvc}`);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Exp. Date: ${data.expNumber}`);
        yPosition += 10;
      
        // Add text to the same line
        doc.text(marginLeft, yPosition, 'Authorized Signer:');
        // Calculate the position for the right-aligned text
        const rightAlignedText = `Date of Authorization: ${data.month}/${data.day}/${data.date}`;
        const rightAlignedX = getRightAlignedPosition(rightAlignedText);
        doc.text(rightAlignedX, yPosition, rightAlignedText);
        yPosition += 40;
        doc.text(marginLeft, yPosition, `Payment Notes: `).setFontSize(10);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `Reservation & Payment Support: cca@navan.com `).setFontSize(10);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `-	Please use the card number above to process payment for this reservation. `).setFontSize(10);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `-	Guest may be responsible for any incidental charges if not noted in allowed `).setFontSize(10);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `-	Process any cancellation fees or No Shows as appropriate.`).setFontSize(10);
        yPosition += 10;
        doc.text(marginLeft, yPosition, `-	For questions processing this card please email cca@navan.com `).setFontSize(10);
        yPosition += 10;
      
        // Save the PDF
        doc.save(`CCA-${data.confirmation}-${data.guestName}.pdf`);
      };
  
    return (
      <div>
        <Button onClick={handleGeneratePdf}>Generate PDF</Button>
      </div>
    );
  };
  
  export default GeneratePdf;