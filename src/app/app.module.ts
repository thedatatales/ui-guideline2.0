import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ToolsCoreModule } from "@enttribe/core/tools";
import { InputBoxModule } from "@enttribe/core/tools/input-box-and-date-picker";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CheckBoxModule } from "@enttribe/core/tools/check-box";
import { RadioModule } from "@enttribe/core/tools/radio";
import { SelectBoxModule } from "@enttribe/core/tools/select-box";
import { ButtonModule } from "@enttribe/core/tools/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { KeycloakAngularModule } from "keycloak-angular";


@NgModule({
  declarations: [AppComponent],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "guidelines",
        loadChildren: () =>
        import("./guidelines/guidelines.module").then(
          (m) => m.GuidelinesModule
        ),
      },
      {
        path: "",
        redirectTo: "guidelines",
        pathMatch: "full"
      }
    ]),
    ToolsCoreModule,
    InputBoxModule,
    HttpClientModule,
    CheckBoxModule,
    RadioModule,
    SelectBoxModule,
    ButtonModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    localStorage.setItem("theme", "theme-black");
    const key: any = "BodyFont";
    window[key] = "12px" as any;
  }
}
