/**
 * PaymentsActivationRequest
 * Define the request received from CD App to require a payment activation
 */

import * as t from "io-ts";

export const PaymentsActivationRequest = t.interface({});
export type PaymentsActivationRequest = t.TypeOf<
  typeof PaymentsActivationRequest
>;
