import { Account } from "@/types/account";

export enum AuthStatus {
  unknown = 0,
  guess = 1,
  authentificated = 2,
}

export function useAuth() {
  const account = null as null | undefined | Account;

  let status = AuthStatus.unknown;
  switch (account) {
    case null:
      status = AuthStatus.guess;
      break;
    case undefined:
      status = AuthStatus.unknown;
      break;
    default:
      status = AuthStatus.authentificated;
      break;
  }
  return {
    account,
    status,
  };
}
