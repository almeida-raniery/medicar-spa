import React from "react";
import { render, cleanup, waitForElement, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import MedicationInfoPage from "../../pages/MedicationInfo";
import { Router } from "react-router-dom";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

describe("Testando página de informações do medicamento", () => {
  it("Deve buscar e renderizar informações do medicamento", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ processNumber: "25351329223201915"});
    const { getByTestId } = render(<MedicationInfoPage />)

    expect(getByTestId("info-panel")).toContainHTML("div")
  });
});
