import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { StaticDataSource } from "./static.datasource";
import {CustomerRepository } from "./customer.repository";

@NgModule({
  imports: [HttpModule],
  providers: [StaticDataSource,CustomerRepository]
})
export class ModelModule {}
