/* @flow */

import type {
    AccountInfo,
    Address,

    EthereumSignedTx,
    Features,
    HDNodeResponse,

    MessageSignature,
    NEMAddress,
    NEMSignedTx,

    Success,
    SignedTx,
    SignedIdentity,
    StellarAddress,
    StellarSignedTx,

} from './trezor';

export type Unsuccessful$ = {
    success: false;
    payload: {
        error: string;
    }
}

export type CipherKeyValue$ = {
    success: true;
    payload: {
        value: string,
    }
} | Unsuccessful$;

export type CustomMessage$ = {
    success: true;
    payload: any;
} | Unsuccessful$;

export type ComposeTransaction$ = {
    success: true;
    payload: any;
} | Unsuccessful$;

export type EthereumGetAddress$ = {
    success: true;
    payload: {
        address: string,
        path: Array <number>
    }
} | Unsuccessful$;

export type EthereumSignMessage$ = {
    success: true;
    payload: MessageSignature;
} | Unsuccessful$;

export type EthereumSignTransaction$ = {
    success: true;
    payload: EthereumSignedTx;
} | Unsuccessful$;

export type EthereumVerifyMessage$ = {
    success: true;
    payload: Success;
} | Unsuccessful$;

export type GetAccountInfo$ = {
    success: true;
    payload: AccountInfo,
} | Unsuccessful$;

export type GetAddress$ = {
    success: true;
    payload: Address,
} | Unsuccessful$;

export type GetDeviceState$ = {
    success: true;
    payload: {
        state: string;
    }
} | Unsuccessful$;

export type GetFeatures$ = {
    success: true;
    payload: Features;
} | Unsuccessful$;

export type GetPublicKey$ = {
    success: true;
    payload: HDNodeResponse;
} | Unsuccessful$;

export type RequestLogin$ = {
    success: true;
    payload: SignedIdentity;
} | Unsuccessful$;

export type NEMGetAddress$ = {
    success: true;
    payload: NEMAddress;
} | Unsuccessful$;

export type NEMSignTransaction$ = {
    success: true;
    payload: NEMSignedTx;
} | Unsuccessful$;

export type SignMessage$ = {
    success: true;
    payload: MessageSignature;
} | Unsuccessful$;

export type SignTransaction$ = {
    success: true;
    payload: SignedTx;
} | Unsuccessful$;

export type StellarGetAddress$ = {
    success: true;
    payload: StellarAddress;
} | Unsuccessful$;

export type StellarSignTransaction$ = {
    success: true;
    payload: StellarSignedTx;
} | Unsuccessful$;

export type VerifyMessage$ = {
    success: true;
    payload: Success;
} | Unsuccessful$;