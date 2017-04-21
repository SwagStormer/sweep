import { ApiConfig } from './api-config';
export class ProjectApiConfig extends ApiConfig {
  isProduction = true;
  developmentBaseUrl = "http://localhost:8000";
  productionBaseUrl = "http://160.7.242.7:8080";
}
