/**
 * @description Defines the abstract class for the authentication service, which must be implemented by any concrete authentication service used in the application.
 * @export
 * @abstract
 * @class AuthService
 */
export abstract class AuthService {
  abstract isAuthenticated(): boolean;
  abstract signIn(username: string, password: string): Promise<void>;
  abstract signOut(): Promise<void>;
}
