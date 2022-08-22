import { describe, expect, it } from "vitest"
import { render, fireEvent, waitFor, screen, renderHook } from '@testing-library/react'
import { ThemeProvider } from "../../store/context"
import '@testing-library/jest-dom'
import { Table } from "../../components/Table/Table"
import Header from '../../components/Header/Header'

describe("Simple working test", () => {
    it("should render elements", async () => {
        render(
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        );
        expect(await screen.findByText("Listado de Pokemon")).toBeInTheDocument();
        expect(await screen.getByTestId('search-input')).toBeInTheDocument();
        expect(await screen.getByText('Nuevo')).toBeInTheDocument();
    });
    it("should open modal", async () => {
        render(
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        );
        fireEvent.click(await screen.getByText('Nuevo'));
        expect(await screen.findByText("Nuevo Pokemon")).toBeInTheDocument();
    });
    it("should search pokemon", async () => {
        render(
            <ThemeProvider>
                <Header />
                <Table />
            </ThemeProvider>
        );
        fireEvent.change(await screen.getByTestId('search-input'), { target: { value: 'pikachu' } });
        expect(await screen.getByTestId("pokemon-table")).toBeInTheDocument();
    })

});