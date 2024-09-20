import {useGetAllCustomersQuery} from "@/features/customers/customer-api";
import './list-customer-styles.css';
// @ts-expect-error because the svg plugin expects a suffix and that borks eslint
import Spinner from "../../../common/180-ring.svg?react";

export default function ListCustomers() {
    // RTK Query interaction
    const { data, error, isSuccess, isError, isFetching } = useGetAllCustomersQuery();

    if (isError) {
        return (
            <p>Error occurred fetching data: {error.toString()}</p>
        );
    }

    if (isFetching) {
        return (
            <Spinner data-testid="spinner" />
        );
    }

    if (isSuccess) {
        const customerListEntries = data.map(
            customer =>
                <p key={customer.id}>{customer.id}: {customer.name}</p>
        );

        if (customerListEntries.length === 0) {
            return (
                <p>No customers found. Create one!</p>
            );
        }

        return (
            <>
                <h2>Customers!</h2>
                <div className="container">
                    { customerListEntries }
                </div>
            </>
        )
    }

}