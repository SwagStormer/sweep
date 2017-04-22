import { ApiConfig } from './api-config';
export class ProjectApiConfig extends ApiConfig {
  isProduction = false;
  developmentBaseUrl = "http://localhost:8000/api";
  productionBaseUrl = "http://160.7.242.7:8080";
}
