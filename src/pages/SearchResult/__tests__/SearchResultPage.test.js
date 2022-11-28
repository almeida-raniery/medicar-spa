import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RequestAPI from "../../../services/API";
import { BrowserRouter } from "react-router-dom";
import { searchData } from "../../../test-data/mockData";
import { MedicationApiProvider } from "../../../providers/MedicationProvider";
import SearchResultPage from "..";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => ([{ get:()=> "dipirona" }]),
}));

const PageWrapper = () => {
  return (
    <MedicationApiProvider>
      <BrowserRouter>
        <SearchResultPage />
      </BrowserRouter>
    </MedicationApiProvider>
  );
};

describe("Testando página de resultados", () => {
  it("Deve exibir os resultados de acordo com a reposta da api", async () => {
    RequestAPI.mockResolvedValueOnce({
      data: searchData,
    });

    render(<PageWrapper />);

    searchData.forEach(async (medication) => {
      const card = await screen.findByTestId(`card-${medication.nomeProduto}`);

      expect(card).toBeInTheDocument();
      expect(card).toContainHTML(`<h4>${medication.nomeProduto}</h4>`)
      expect(card).toContainHTML(`<p>${medication.razaoSocial}</p>`)
    });
  });
});
