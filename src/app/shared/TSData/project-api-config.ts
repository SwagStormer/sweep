import { ApiConfig } from './api-config';
export class ProjectApiConfig extends ApiConfig {
  isProduction = false;
  developmentBaseUrl = "http://172.23.147.170:8000/api";
  productionBaseUrl = "http://160.7.242.7:8080";
}
