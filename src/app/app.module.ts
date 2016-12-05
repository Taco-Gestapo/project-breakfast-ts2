import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {FlooderComponent} from "app/components/flooder/flooder.component";
import {FloodService} from "app/services/flood/flood.service";
import {HeaderComponent} from "app/components/header/header.component";
import {SpeechComponent} from "app/components/speech/speech.component";
import {AudioVideoComponent} from "app/components/audio-video/audio-video.component";
import {EastereggComponent} from "app/components/easteregg/easteregg.component";
import {MenuComponent} from "app/components/menu/menu.component";
import {ClientDocumentService} from "app/services/client-document/client-document.service";
import {ClientNavigatorService} from "app/services/client-navigator/client-navigator.service";
import {ClientWindowService} from "app/services/client-window/client-window.service";
import {MediaService} from "app/services/audio-video-capture/media.service";
import {SpeechApiService} from "app/services/speech-api/speech-api.service";
import {DnsService} from "app/services/dns/dns.service";

@NgModule({
  declarations: [
    AppComponent,
    FlooderComponent,
    HeaderComponent,
    SpeechComponent,
    MenuComponent,
    EastereggComponent,
    AudioVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClientDocumentService,
    ClientNavigatorService,
    ClientWindowService,
    DnsService,
    MediaService,
    FloodService,
    SpeechApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //do not implement anything here. it's not the right place.
}
