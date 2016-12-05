import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {FlooderComponent} from "app/components/flooder/flooder.component";
import {FloodService} from "app/services/flood/flood.service";

@NgModule({
  declarations: [
    AppComponent,
    FlooderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FloodService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
