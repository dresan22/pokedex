import { describe, expect, it } from "vitest"
import { render, fireEvent, waitFor, screen, renderHook } from '@testing-library/react'
import { ThemeProvider } from "../../store/context"
import '@testing-library/jest-dom'
import { Table } from "../../components/Table/Table"
import Header from '../../components/Header/Header'

describe("Table", () => {
    it("should render elements", async () => {
        render(
            <ThemeProvider>
                <Header />
                <Table />
            </ThemeProvider>
        );
        expect(await screen.getByTestId("pokemon-table")).toBeInTheDocument();
    })
})