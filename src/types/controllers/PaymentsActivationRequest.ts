/**
 * PaymentsActivationRequest
 * Define the request received from CD App to require a payment activation
 */

import * as t from "io-ts";
import { CodiceIdRPT, Importo } from "../CommonTypes";

export const PaymentsActivationRequest = t.interface({
  codiceIdRPT: CodiceIdRPT,
  importoSingoloVersamento: Importo
});
export type PaymentsActivationRequest = t.TypeOf<
  typeof PaymentsActivationRequest
>;
