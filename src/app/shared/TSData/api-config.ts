export abstract class ApiConfig {
  abstract isProduction: boolean = false;
  abstract productionBaseUrl: string;
  abstract developmentBaseUrl: string;

  public apiBase = "/api";

  get baseUrl(): string {
    if(this.isProduction) {
      return this.productionBaseUrl + this.apiBase;
    }
    return this.developmentBaseUrl;
  }
  public _authUrl: string = "/api-token-auth/";
  get authUrl(): string  {
    if(this.isProduction) {
      return this.productionBaseUrl + this._authUrl;
    }
    return this.developmentBaseUrl + this._authUrl;
  }
}
