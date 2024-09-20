import {useGetAllCustomersQuery} from "@/features/customers/customer-api";
import Spinner from "../../../common/180-ring.svg?react";

export default function ListCustomers() {
    const { data, error, isSuccess, isError, isFetching } = useGetAllCustomersQuery();

    if (isError) {
        return (
            <p>Error occurred fetching data: {error.toString()}</p>
        );
    }

    if (isFetching) {
        return (
            <Spinner />
        );
    }

    if (isSuccess) {
        const customerListEntries = data.map(c => <li key={c.id}>{c.id}: {c.name}</li>);
        if (customerListEntries.length === 0) {
            return (
                <p>No customers found. Create one!</p>
            );
        }

        return (
            <>
                <h2>Customers!</h2>
                <ul>
                    { customerListEntries }
                </ul>
            </>
        )
    }

}