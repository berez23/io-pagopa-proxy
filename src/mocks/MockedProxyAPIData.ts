/**
 * Mock Data for PagoPaAPI Server
 * Define Mocked Responses used by MockedProxyAPIApp
 */

// tslint:disable
import {
  LoginResponse,
  LoginAnonymousResponse
} from "../api/types/LoginResponse";
import { WalletResponse } from "../api/types/WalletResponse";
import { TransactionListResponse } from "../api/types/TransactionResponse";
import { IRestfulObject } from "../types/BaseResponseApp";
import { AckResult } from "../api/types/NotificationSubscriptionResponse";

export class MockedProxyAPIData {
  public getLoginResponseMocked(): LoginResponse {
    return {
      apiRequestToken: "tokenExample123456789",
      user: {
        username: "mario",
        name: "Mario",
        surname: "Rossi",
        acceptTerms: true,
        cellphone: "0391234",
        email: "mailTest@mail.it",
        puk: "",
        spidToken: "",
        temporaryCellphone: "0391235"
      }
    };
  }

  public getLoginAnonymousResponseMocked(): LoginAnonymousResponse {
    return {
      apiRequestToken: "tokenExample123456789",
      approveTerms: {
        type: "typeExample",
        properties: {
          privacy: "privacyExample",
          terms: "termsExample"
        },
        title: "titleExample"
      }
    };
  }

  public getWalletResponseMocked(): WalletResponse {
    return {
      data: [
        {
          idWallet: 50,
          type: "CREDIT_CARD",
          favourite: false,
          creditCard: {
            id: 46,
            holder: "*******",
            pan: "************9896",
            expireMonth: "**",
            expireYear: "**",
            brandLogo: "http://hostname.com/pagopa/cc/mastercard.png"
          },
          psp: {
            idPsp: "PSPDEMO0021",
            businessName: "CARTA SI",
            paymentType: "CREDIT_CARD",
            serviceLogo:
              "https://www.sisalpay.it/image/journal/article?img_id=828446&t=1407401877209",
            serviceName: "CARTA SI",
            fixedCost: {
              currency: "EUR",
              amount: 100,
              decimalDigits: 2
            },
            urlInfoChannel: "https://www.intesasanpaolo.com/"
          },
          idPsp: "PSPDEMO0021",
          pspEditable: false
        },
        {
          idWallet: 53,
          type: "CREDIT_CARD",
          favourite: false,
          creditCard: {
            id: 49,
            holder: "*******",
            pan: "************0479",
            expireMonth: "**",
            expireYear: "**",
            brandLogo: "http://hostname.com/pagopa/cc/visa.png"
          },
          psp: {
            idPsp: "PSPDEMO0021",
            businessName: "CARTA SI",
            paymentType: "CREDIT_CARD",
            serviceLogo:
              "https://www.sisalpay.it/image/journal/article?img_id=828446&t=1407401877209",
            serviceName: "CARTA SI",
            fixedCost: {
              currency: "EUR",
              amount: 100,
              decimalDigits: 2
            },
            urlInfoChannel: "https://www.intesasanpaolo.com/"
          },
          idPsp: "PSPDEMO0021",
          pspEditable: true
        },
        {
          idWallet: 55,
          type: "BANK_ACCOUNT",
          favourite: false,
          psp: {
            idPsp: "PSPDEMO0001",
            businessName: "INTESA SAN PAOLO",
            paymentType: "BANK_ACCOUNT",
            serviceLogo: "http://hostname.com/pagopa/logo-INTESA-SANPAOLO.png",
            serviceName: "INTESA SAN PAOLO",
            fixedCost: {
              currency: "EUR",
              amount: 100,
              decimalDigits: 2
            },
            urlInfoChannel: "https://www.intesasanpaolo.com/",
            paymentModel: 1
          },
          idPsp: "PSPDEMO0001",
          pspEditable: false
        },
        {
          idWallet: 56,
          type: "EXTERNAL_PS",
          favourite: false,
          psp: {
            idPsp: "PSPDEMO0012",
            businessName: "Paypal",
            paymentType: "EXTERNAL_PS",
            serviceLogo: "http://hostname.com/pagopa/paypal.png",
            serviceName: "Paypal",
            fixedCost: {
              currency: "EUR",
              amount: 100,
              decimalDigits: 2
            },
            urlInfoChannel: "https://www.paypal.com/it/home",
            paymentModel: 1
          },
          idPsp: "PSPDEMO0012",
          pspEditable: false
        }
      ]
    } as WalletResponse;
  }

  public getTransactionListResponseMocked(
    filterId: string | undefined
  ): TransactionListResponse {
    const transactionListResponse: TransactionListResponse = {
      total: 2,
      start: 0,
      size: 2,
      data: [
        {
          id: 1,
          created: "",
          updated: "",
          amount: {
            currency: "",
            amount: 0,
            decimalDigits: 0
          },
          description: "",
          merchant: "identificativo esercente",
          statusMessage: "",
          error: false,
          fee: {
            currency: "",
            amount: 0,
            decimalDigits: 0
          }
        },
        {
          id: 2,
          created: "",
          updated: "",
          amount: {
            currency: "",
            amount: 0,
            decimalDigits: 0
          },
          description: "",
          merchant: "identificativo esercente",
          statusMessage: "",
          error: false,
          fee: {
            currency: "",
            amount: 0,
            decimalDigits: 0
          }
        }
      ]
    };

    // Select just one transaction
    return {
      data:
        filterId === undefined
          ? transactionListResponse.data
          : transactionListResponse.data.filter((element: any): boolean => {
              return String(element.id) === filterId;
            }),
      start: 0,
      total: 2,
      size:
        filterId === undefined
          ? transactionListResponse.data.length
          : transactionListResponse.data.filter((element: any): boolean => {
              return String(element.id) === filterId;
            }).length
    } as TransactionListResponse;
  }

  public getNotificationResponseMocked(positive: boolean): IRestfulObject {
    return {
      result: positive === true ? AckResult.keys.OK : AckResult.keys.KO
    };
  }

  public getLoginResponseErrorMocked(): IRestfulObject {
    return {};
  }
  public getLoginAnonymousResponseErrorMocked(): IRestfulObject {
    return {};
  }
  public getTransactionListResponseErrorMocked(): IRestfulObject {
    return {};
  }
  public getWalletResponseErrorMocked(): IRestfulObject {
    return {};
  }
}