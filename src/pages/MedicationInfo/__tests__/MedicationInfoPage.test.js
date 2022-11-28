import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RequestAPI from "../../../services/API";
import MedicationInfoPage from "..";
import { MedicationApiProvider } from "../../../providers/MedicationProvider";
import { BrowserRouter } from "react-router-dom";
import { medicationData } from "../../../test-data/mockData";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ processNumber: "25351329223201915" }),
}));

const PageWrapper = () => {
  return (
    <MedicationApiProvider>
      <BrowserRouter>
        <MedicationInfoPage />
      </BrowserRouter>
    </MedicationApiProvider>
  );
};

describe("Testando página de informações do medicamento", () => {
  it("Deve buscar e renderizar informações do medicamento", async () => {
    RequestAPI.mockResolvedValueOnce({
      data: medicationData,
    });

    render(<PageWrapper />);

    const infoPanel      = await screen.findByTestId("info-panel");
    const downloadButton = await screen.findByTestId("download-button");

    expect(infoPanel).toContainHTML(`<p>${medicationData.classesTerapeuticas[0]}</p>`);
    expect(infoPanel).toContainHTML(`<p>${medicationData.principioAtivo}</p>`);
    expect(infoPanel).toContainHTML(`<p>${medicationData.medicamentoReferencia}</p>`);
    expect(infoPanel).toContainHTML(`<p>${medicationData.categoriaRegulatoria}</p>`);
    expect(infoPanel).toContainHTML(`<p>${medicationData.empresa.razaoSocial}</p>`);
    expect(downloadButton).toHaveProperty('href', `https://bula.vercel.app/pdf?id=${medicationData.codigoBulaPaciente}`)
  });
});
