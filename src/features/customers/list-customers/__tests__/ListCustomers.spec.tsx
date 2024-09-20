import {mswServer} from "@/setupTest";
import {http} from "msw/core/http";
import {HttpResponse} from "msw";
import {screen, render, waitFor} from "@testing-library/react";
import ListCustomers from "@/features/customers/list-customers/ListCustomers";
import {store} from "@/store/create-store";
import {Provider} from "react-redux";

describe('ListCustomers Component', () => {
    it('should show customers when data exists', async () => {
        mswServer.use(
            http.get('/api/customers', () => {
                return HttpResponse.json([
                    { "id": "e17c2a6d-2e78-46f8-91f9-5386e4cb0316", "name": "customer A" },
                    { "id": "1bb25dcb-5db6-44c7-a85a-1366df6e3597", "name": "customer B" },
                    { "id": "6b80cc22-2dd1-4c62-ae92-5754274d8bc6" ,"name": "customer C" },
                    { "id": "ce0f78a2-9af0-4705-bbbc-9e94fbb8a2ed", "name": "customer D" }
                ], { status: 200 })
            })
        );

        render(
            <Provider store={store}>
                <ListCustomers />
            </Provider>
        );

        await waitFor(() => expect(screen.queryByText(/customer A/)).toBeInTheDocument());

    });

})