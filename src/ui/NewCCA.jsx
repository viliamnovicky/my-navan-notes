import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "./Form";
import { handleInput } from "../utils/helpers";
import Button, { Buttons } from "./Button";
import GeneratePdf from "../utils/GeneratePdf";

function NewCCA({
  taxId,
  setTaxId,
  expNumber,
  setExpNumber,
  cardNumber,
  setCardNumber,
  cvc,
  setCvc,
  cardName,
  setCardName,
  companyAddress,
  setCompanyAddress,
  confirmation,
  setConfirmation,
  guestName,
  hotelName,
  setGuestName,
  setHotelName,
  arrival,
  setArrival,
  departure,
  setDeparture,
  companyName,
  setCompanyName,
  setIsOpenCCAForm,
}) {
  const data = {
    expNumber,
    cardNumber,
    cvc,
    cardName,
    companyAddress,
    confirmation,
    guestName,
    hotelName,
    arrival,
    departure,
    companyName,
    taxId,
    date: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  return (
    <Form>
      <FormGroup>
        <Input
          id="confirmation"
          value={confirmation}
          placeholder="Confirmation Num."
          onChange={(e) => handleInput(e, setConfirmation)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="confirmation">Confirmation Num.</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="hotel-name"
          value={hotelName}
          placeholder="Hotel Name"
          onChange={(e) => handleInput(e, setHotelName)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="hotel-name">Hotel Name</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="guest-name"
          value={guestName}
          placeholder="Guest Name"
          onChange={(e) => handleInput(e, setGuestName)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="guest-name">Guest Name</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="date"
          id="arrival"
          value={arrival}
          placeholder="Arrival Date"
          onChange={(e) => handleInput(e, setArrival)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="arrival">Arrival Date</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="date"
          id="departure"
          value={departure}
          placeholder="Departure Date"
          onChange={(e) => handleInput(e, setDeparture)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="departure">Departure Date</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="company-name"
          value={companyName}
          placeholder="Company Name"
          onChange={(e) => handleInput(e, setCompanyName)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="company-name">Company Name</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="company-address"
          value={companyAddress}
          placeholder="Company Address"
          onChange={(e) => handleInput(e, setCompanyAddress)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="company-address">Company Address</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="tax-id"
          value={taxId}
          placeholder="Company Tax ID"
          onChange={(e) => handleInput(e, setTaxId)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="tax-id">Company Tax ID</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="name-on-card"
          value={cardName}
          placeholder="Name on Card"
          onChange={(e) => handleInput(e, setCardName)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="name-on-card">Name on Card</Label>
      </FormGroup>
      <FormGroup>
        <Input
          className="inactive"
          disabled
          id="card-number"
          value={cardNumber}
          placeholder="Card Number: Complete using DocuSign"
          onChange={(e) => handleInput(e, setCardNumber)}
        ></Input>
        <Label for="card-number">Card Number</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="cvc"
          value={cvc}
          placeholder="CVC"
          onChange={(e) => handleInput(e, setCvc)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="cvc">CVC</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="exp-num"
          value={expNumber}
          placeholder="Exp. Date"
          onChange={(e) => handleInput(e, setExpNumber)}
          autoComplete="off" // Disable autocomplete
          name="dummy" // Use a non-standard name
        ></Input>
        <Label for="exp-num">Exp. Date</Label>
      </FormGroup>
      <Buttons>
        <GeneratePdf data={data} />
        {/* <Button variation="green" disabled = "true">
          Create CCA
        </Button> */}
        <Button variation="danger" onClick={() => setIsOpenCCAForm(false)}>
          Cancel
        </Button>
      </Buttons>
    </Form>
  );
}

export default NewCCA;
