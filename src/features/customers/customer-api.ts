import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Customer} from "@/features/customers/customer-type";

export const customerApi = createApi({
  reducerPath: 'customerApi',

  baseQuery: fetchBaseQuery({
    baseUrl: new URL("/api/customers", location.origin).href
  }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query<Customer[], void>({
      query: () => "/"
    }),
  })
});

export const { getAllCustomers } = customerApi.endpoints;

// export the endpoints to call from redux
export const { useGetAllCustomersQuery } = customerApi;